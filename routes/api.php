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

Route::get('/pizzalist','Api\PizzaController@index');
Route::get('/pizzalist/{id}','Api\PizzaController@single');
Route::get('/checkout/token',"Api\CheckoutController@token");

Route::post('/checkout',"Api\CheckoutController@checkout");
Route::get('/invoice',function(){
    
    return view('invoice');
});

Route::get("/invoice/pdf",function(){
    $time = date("His");
    PDF::setOptions(['dpi' => 150, 'defaultFont' => 'sans-serif']);
    $pdf =  PDF::loadView('pdf');
    return $pdf->download("invoice-{$time}.pdf");
});

 Route::get("/the_pdf",function(Request $request){
     if (!$request->hasValidSignature())    {
         abort(404);
     }
     $orderId   =   $request->orderId;
     
     return view('invoice',compact("orderId"));
 })->name('pdf');