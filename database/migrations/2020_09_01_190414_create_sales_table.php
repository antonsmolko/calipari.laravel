<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('image_id');
            $table->string('article', config('settings.sale_article_max_length'))->unique();
            $table->string('image_path', 100);
            $table->unsignedSmallInteger('width_cm');
            $table->unsignedSmallInteger('height_cm');
            $table->unsignedInteger('texture_id');
            $table->string('description', 250)->nullable();
            $table->unsignedSmallInteger('discount')->default(0);
            $table->unsignedTinyInteger('status')->default(0);
            $table->unsignedTinyInteger('publish')->default(0);
            $table->timestamps();
        });

        Schema::table('sales', function(Blueprint $table) {
            $table->foreign('image_id')->references('id')->on('image')
                ->onDelete('cascade');

            $table->foreign('texture_id')->references('id')->on('textures')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
