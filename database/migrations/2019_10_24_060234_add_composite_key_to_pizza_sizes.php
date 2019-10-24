<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCompositeKeyToPizzaSizes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pizza_sizes', function (Blueprint $table) {
            $table->unique(['pizza_id','size'],'pizza_id_to_size_key')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pizza_sizes', function (Blueprint $table) {
            $table->dropUnique('pizza_id_to_size_key');
        });
    }
}
