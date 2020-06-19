<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeModuleInteriorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_module_interiors', function (Blueprint $table) {
            $table->id();
            $table->string('title', 50)->unique();
            $table->unsignedBigInteger('interior_id');
            $table->unsignedSmallInteger('order')->default(0);
            $table->unsignedTinyInteger('publish')->default(0);
            $table->timestamps();
        });

//        Schema::table('home_module_interiors', function(Blueprint $table) {
//            $table->foreign('interior_id')->references('id')->on('categories')
//                ->onDelete('cascade')->onUpdate('cascade');
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_module_interiors');
    }
}
