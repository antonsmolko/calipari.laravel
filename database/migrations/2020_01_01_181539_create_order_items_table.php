<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('image_id');
            $table->unsignedSmallInteger('width_cm');
            $table->unsignedSmallInteger('height_cm');
            $table->unsignedInteger('texture_id');
            $table->unsignedSmallInteger('x')->default(0);
            $table->unsignedSmallInteger('y')->default(0);
            $table->unsignedSmallInteger('width_px');
            $table->unsignedSmallInteger('height_px');
            $table->unsignedSmallInteger('qty');
            $table->string('filter_details');
            $table->json('filter');
            $table->unsignedSmallInteger('price');
            $table->timestamps();
        });

        Schema::table('order_items', function(Blueprint $table) {
            $table->foreign('order_id')->references('id')->on('orders')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
}
