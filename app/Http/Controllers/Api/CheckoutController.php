<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use PDF;
use Braintree\Gateway;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class CheckoutController extends Controller
{
    public function __construct()
    {
        $this->gateway  =   new Gateway([
            'environment' => config('services.braintree.environment'),
            'merchantId' => config('services.braintree.merchantId'),
            'publicKey' => config('services.braintree.publicKey'),
            'privateKey' => config('services.braintree.privateKey')
        ]);

        date_default_timezone_set('Africa/Nairobi');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function token()
    {
        $token  =   $this->gateway->ClientToken()->generate();
        return response([
            'token' =>  $token
        ]);
    }


    public function checkout(Request $req)
    {

        $rate   =   0.0098;
        $amount = round(($req->amount * $rate), 2);
        $nonce = $req->payment_method_nonce;
        $result = $this->gateway->transaction()->sale([
            'amount' => $amount,
            "orderId"   =>  $req->orderId,
            'paymentMethodNonce' => $nonce,
            'options' => [
                'submitForSettlement' => true
            ],
            'customer' =>
            [
                'email' =>  $req->email,
                'firstName' =>  $req->fname,
                'lastName'  =>  $req->lname,
                'phone' =>  $req->phone,
            ],
            'shipping' =>
            [
                'firstName' =>  $req->fname,
                'lastName'  =>  $req->lname,
                'streetAddress' =>  $req->streetAddress,
                'extendedAddress' => $req->extendedAddress
            ],
        ]);
        if ($result->success) {
            $transaction = $result->transaction;
            return $this->_storeToDb($transaction,$req);
        } else {
            $errorString = "";
            foreach ($result->errors->deepAll() as $error) {
                $errorString .= 'Error: ' . $error->code . ": " . $error->message . "\n";
            }
           
            return response(["error_msg" => $error->message]);
        }
    }

    private function _storeToDb($transaction,$req)
    {
        
        $transaction_id =   $transaction->id;
        $order_no    =   $transaction->orderId;
        $total =   $req->amount;
        $email  =   $req->email;
        $name   =   $transaction->customer['firstName'] . " " . $transaction->customer['lastName'];
        $phone  =   $transaction->customer["phone"];
        $address    =  sprintf("%s \n %s", $transaction->shipping['streetAddress'], $transaction->shipping['extendedAddress']);
        $cardType   =   $transaction->creditCard["cardType"];
        $last4   =   $transaction->creditCard["last4"];
        $paymentType    =   $transaction->paymentInstrumentType;
        $order = $req->orderDetails;
        try {
            DB::beginTransaction();
            $customer_id =   DB::table('customers')->insertGetId(
                compact(
                    "name",
                    "email",
                    "phone",
                    "address",
                    "cardType",
                    "last4",
                    "paymentType"
                )
            );
            DB::table('orders')->insert(
                compact(
                    "customer_id",
                    "order",
                    "order_no",
                    "transaction_id",
                    "total"
                )
            );
            DB::commit();
            $response   =   ["db_success"   =>  "Order Placed Successfully",
                             "transaction_id"   =>  $transaction_id,
                             "url"  =>  URL::temporarySignedRoute(
                                 'receipt',now()->addMinutes(15),
                                 ["orderId"=>$order_no]
                             )
        ];
        } catch (\QueryException $ex) {
            DB::rollBack();
            $response = ["db_error"=>$ex->getMessage()];
        }

        return response($response);
       
    }

    function pizzaOrder($orderId)    {
        $orderDetails = DB::table('orders AS o')
        ->join('customers AS c',"o.customer_id",'=','c.id')
        ->select('c.name','c.phone','c.address','c.email','o.total','o.order','o.placed_at','o.transaction_id')
        ->where('o.order_no','=',$orderId)
        ->get();

        $orderDetails = $orderDetails[0];
        $o = \json_decode($orderDetails->order);
        $orderDetails->order = $o;
        return $orderDetails;
    }

    function receipt(Request $request)  {
        if (!$request->hasValidSignature())    {
            abort(404);
        }
        $orderId   =   $request->orderId;
        $orderDetails   =  $this->pizzaOrder($orderId);
                            
        $downloadLink   =    URL::temporarySignedRoute(
            'download_receipt',now()->addMinutes(15),
            ["orderId"=>$orderId]
        );
        
        return view('invoice',compact("orderId","orderDetails","downloadLink"));
    }

    function receiptPdf(Request $request){
        if (!$request->hasValidSignature())    {
            abort(404);
        }
        $orderId   =   $request->orderId;
        $orderDetails   =  $this->pizzaOrder($orderId);
        PDF::setOptions(['dpi' => 150, 'defaultFont' => 'sans-serif']);
        $pdf =  PDF::loadView('pdf',compact("orderId","orderDetails"));
        return $pdf->download("Order-{$orderId}.pdf");
    }
   
}
