<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTexturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('textures', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->unique();
            $table->string('sample_path', 100);
            $table->string('background_path', 100);
            $table->unsignedInteger('width')->nullable();
            $table->unsignedInteger('price');
            $table->unsignedSmallInteger('order')->default(0);
            $table->text('description')->nullable();
            $table->unsignedTinyInteger('seamless')->default(0);
            $table->unsignedTinyInteger('publish')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('textures');
    }
}
