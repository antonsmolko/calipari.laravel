<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCollectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collections', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 50)->unique();
            $table->string('alias', 50)->unique();
            $table->unsignedBigInteger('main_image_id')->nullable();
            $table->unsignedInteger('owner_id')->nullable();
            $table->unsignedSmallInteger('max_print_width')->nullable();
            $table->text('image_description')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('description')->nullable();
            $table->string('keywords')->nullable();
            $table->unsignedTinyInteger('publish')->default(0);
            $table->timestamps();
        });

        Schema::table('collections', function(Blueprint $table) {
            $table->foreign('owner_id')->references('id')->on('owners')
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
        Schema::dropIfExists('collections');
    }
}
