<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('alias', 50)->unique();
            $table->unsignedBigInteger('date');
            $table->string('image_path', 100);
            $table->json('images')->nullable();
            $table->text('intro')->nullable();
            $table->text('content')->nullable();
            $table->string('type', 50);
            $table->unsignedTinyInteger('publish')->default(0);
            $table->string('meta_title', 150)->nullable();
            $table->text('description')->nullable();
            $table->string('keywords')->nullable();
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
        Schema::dropIfExists('posts');
    }
}
