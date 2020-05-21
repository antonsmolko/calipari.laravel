<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('path', 100);
            $table->string('extension', 4);
            $table->string('mime', 11);
            $table->unsignedSmallInteger('width');
            $table->unsignedSmallInteger('height');
            $table->unsignedSmallInteger('max_print_width')->nullable();
            $table->unsignedInteger('format_id')->nullable();
            $table->unsignedInteger('owner_id')->nullable();
            $table->unsignedInteger('collection_id')->nullable();
            $table->unsignedInteger('views')->default(0);
            $table->unsignedTinyInteger('publish')->default(1 );
            $table->text('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('images', function(Blueprint $table) {
            $table->foreign('owner_id')->references('id')->on('owners')
                ->onDelete('set null')->onUpdate('cascade');
        });

        Schema::table('images', function(Blueprint $table) {
            $table->foreign('format_id')->references('id')->on('formats')
                ->onDelete('set null')->onUpdate('cascade');
        });

        Schema::table('images', function(Blueprint $table) {
            $table->foreign('collection_id')->references('id')->on('collections')
                ->onDelete('set null')->onUpdate('cascade');
        });

        Schema::table('collections', function(Blueprint $table) {
            $table->foreign('main_image_id')->references('id')->on('images')
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
        Schema::table('collections', function(Blueprint $table) {
            $table->dropForeign(['main_image_id']);
        });
        Schema::dropIfExists('images');
    }
}
