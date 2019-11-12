<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Braintree\Gateway;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

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
                // 'id'    =>  $req->user_id,
                'email' =>  $req->email,
                'firstName' =>  $req->fname,
                'lastName'  =>  $req->lname,
                'phone' =>  $req->phone,
            ],
            'shipping' =>
            [
                'firstName' =>  $req->fname,
                'lastName'  =>  $req->lname,
                // 'locality'  =>  $req->locality,
                // 'region'    =>  $req->region,
                'streetAddress' =>  $req->streetAddress,
                'extendedAddress' => $req->extendedAddress
            ],
        ]);
        if ($result->success) {
            $transaction = $result->transaction;
            // echo "<pre>";
            // var_dump($transaction);exit;


            return $this->_storeToDb($transaction,$req);
        } else {
            $errorString = "";
            foreach ($result->errors->deepAll() as $error) {
                $errorString .= 'Error: ' . $error->code . ": " . $error->message . "\n";
            }
            // $_SESSION["errors"] = $errorString;
            // header("Location: " . $baseUrl . "index.php");
            return response(["error_msg" => $error->message]);
        }
    }

    private function _storeToDb($transaction,$req)
    {
        
        $transaction_id =   $transaction->id;
        $order_no    =   $transaction->orderId;
        $total =   $req->amount;
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
            $response   =   ["db_success"   =>  "Order Placed Successfully"];
        } catch (\QueryException $ex) {
            DB::rollBack();
            $response = ["db_error"=>$ex->getMessage()];
        }

        return response($response);
       
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
