<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id')->nullable();
            $table->string('name', 100)->nullable();
            $table->string('email', 50)->nullable();
            $table->string('content', 1000);
            $table->unsignedSmallInteger('quality_rate')->nullable();
            $table->unsignedSmallInteger('service_rate')->nullable();
            $table->json('images')->nullable();
            $table->unsignedTinyInteger('publish')->default(0);
            $table->timestamps();
        });

        Schema::table('reviews', function(Blueprint $table) {
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
        Schema::dropIfExists('reviews');
    }
}
