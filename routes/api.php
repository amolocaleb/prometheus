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


Route::get("/receipt","Api\CheckoutController@receipt")->name('receipt');
Route::get("/invoice/pdf","Api\CheckoutController@receiptPdf")->name('download_receipt');

