<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeModuleInteriorSlidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_module_interior_slides', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('interior_id');
            $table->string('image_path', 100);
            $table->unsignedBigInteger('image_id');
            $table->unsignedSmallInteger('order')->default(0);
            $table->unsignedTinyInteger('publish')->default(0);
            $table->timestamps();
        });

//        Schema::table('home_module_interior_slides', function(Blueprint $table) {
//            $table->foreign('image_id')->references('id')->on('images')
//                ->onDelete('cascade')->onUpdate('cascade');
//            $table->foreign('interior_id')->references('id')->on('home_module_interiors')
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
        Schema::dropIfExists('home_module_interior_slides');
    }
}
