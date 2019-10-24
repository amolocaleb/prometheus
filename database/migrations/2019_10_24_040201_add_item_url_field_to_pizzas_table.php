<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddItemUrlFieldToPizzasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pizzas', function (Blueprint $table) {
            $table->string('pizza_url',255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pizzas', function (Blueprint $table) {
            $table->dropColumn('pizza_url');
        });
    }
}
