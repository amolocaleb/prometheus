<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/storage/{file}',function($file){
    
    return response()->file($file);
});

Route::any('{path}','HomeController@index')->where('path','^(?!(api|storage)).*$');
// Route::get('/pizzalist','PizzaController@index');
// Route::get('/pizzalist/{id}','PizzaController@single');
//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
