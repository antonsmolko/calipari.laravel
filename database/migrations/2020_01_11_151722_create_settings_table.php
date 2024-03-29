<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('display_name');
            $table->string('key_name')->index();
            $table->text('value')->nullable();
            $table->string('type');
            $table->unsignedInteger('group_id')->nullable();
            $table->timestamps();
        });

        Schema::table('settings', function(Blueprint $table) {
            $table->foreign('group_id')->references('id')->on('setting_groups')
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
        Schema::dropIfExists('settings');
    }
}
