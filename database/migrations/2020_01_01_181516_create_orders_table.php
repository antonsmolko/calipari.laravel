<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->string('hash_number');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedInteger('price');
            $table->json('delivery');
            $table->json('customer');
            $table->text('comment')->nullable();
            $table->string('payment_id')->nullable();
            $table->string('refund_reason')->nullable();
            $table->unsignedInteger('refund_amount')->nullable();
            $table->string('completion_token')->nullable();
            $table->timestamps();
        });

        Schema::table('orders', function(Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')
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
        Schema::dropIfExists('orders');
    }
}
