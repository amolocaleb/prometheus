<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Support\Facades\DB;
class Pizza extends Model
{
    //

    /**
     * SELECT p.id as 'p_id',p.pizza_url,(SELECT price from pizza_sizes WHERE pizza_sizes.pizza_id=p_id AND pizza_sizes.size='S') as 'LowPrice',p.name,(SELECT price from pizza_sizes WHERE pizza_sizes.pizza_id=p_id AND pizza_sizes.size='L') as 'MaxPrice' FROM pizzas p
     */

     static public function pizzalist($id = null)
     {
         $sql = "SELECT p.id as 'p_id',p.pizza_url,(SELECT price from pizza_sizes WHERE pizza_sizes.pizza_id=p_id AND pizza_sizes.size='S') as 'small',p.name,(SELECT price from pizza_sizes WHERE pizza_sizes.pizza_id=p_id AND pizza_sizes.size='M') as 'medium',(SELECT price from pizza_sizes WHERE pizza_sizes.pizza_id=p_id AND pizza_sizes.size='L') as 'large' FROM pizzas p";

         if (!is_null($id)) {
             $sql = $sql." WHERE p.id=".intVal($id);
              
         }
         return DB::select($sql);
     }

     static public function drinks()
     {
        return DB::select("SELECT  id,`name`,price from drinks");
     }

     static public function toppings()
     {
         return DB::select("SELECT id,`name`,price FROM toppings");
     }
}
