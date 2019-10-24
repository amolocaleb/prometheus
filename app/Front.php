<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Front extends Model
{
    //

    /**
     * SELECT p.id as 'p_id',p.pizza_url,(SELECT price from pizza_sizes WHERE pizza_sizes.pizza_id=p_id AND pizza_sizes.size='S') as 'LowPrice',p.name,(SELECT price from pizza_sizes WHERE pizza_sizes.pizza_id=p_id AND pizza_sizes.size='L') as 'MaxPrice' FROM pizzas p
     */
}
