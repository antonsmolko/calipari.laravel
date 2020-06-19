<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkExamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_examples', function (Blueprint $table) {
            $table->id();
            $table->string('title', 150);
            $table->unsignedBigInteger('date');
            $table->unsignedBigInteger('image_id')->unique()->nullable();
            $table->json('images')->nullable();
            $table->string('image_path', 100);
            $table->unsignedTinyInteger('publish')->default(0);
            $table->timestamps();
        });

        Schema::table('work_examples', function (Blueprint $table) {
            $table->foreign('image_id')->references('id')->on('images')
                ->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('work_examples');
    }
}
