<?php

namespace App\Http\Controllers\Api;

use App\Pizza;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PizzaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $pizzas =   Pizza::pizzalist();   
        
        return response($pizzas,200);
    }

    public function single(Request $request)    {
        $id =   $request->route('id');
        $pizza = Pizza::pizzalist($id); 
        $drinks =   Pizza::drinks();
        $toppings   =   Pizza::toppings();
        // $pizza  =   array_merge($pizza,$drinks,$toppings);

      
        return response([
                            "pizza"    =>  $pizza,
                            "drinks"    =>  $drinks,
                            "toppings"  =>  $toppings
        ],200);
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
     * @param  \App\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function show(Pizza $pizza)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pizza $pizza)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pizza  $pizza
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pizza $pizza)
    {
        //
    }
}
