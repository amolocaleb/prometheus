<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// use Barryvdh\DomPDF\PDF;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

Route::get('/pizzalist', 'Api\PizzaController@index');
Route::get('/pizzalist/{id}', 'Api\PizzaController@single');

Route::post('/checkout', "Api\CheckoutController@checkout");
Route::get('/checkout/token', "Api\CheckoutController@token");



Route::get("/receipt", "Api\CheckoutController@receipt")->name('receipt');
Route::get("/invoice/pdf", "Api\CheckoutController@receiptPdf")->name('download_receipt');
Route::get("/numbers", function (Request $request) {
   if (!$request->hasValidSignature()) {
      abort(401,"You need authorisation to view this route");
   }
   $customers = DB::table('customers')->get(['name', 'id'])->toJson();
   echo $customers;
   return;
});

Route::post("/get_token",function(Request $request){
   $user = $request->username;
   $password = $request->pwd;
   $user = DB::table('users')->where([
      ['username','=',$user],
      ['password','=',$password]
   ])->count();
   if ($user) {
      return response(['url'=>URL::temporarySignedRoute('numbers',now()->addMinutes(5),['id'=>$user]),'msg'=>"This url will expire in 5 minutes"]);
   }else{
      return response(['error'=> "You are not authorised to view that route..If you feel this is a mistake,contact your System Admin"]);
   }
});
