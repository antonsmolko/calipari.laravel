<?php

use Illuminate\Database\Seeder;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (config('seeds.pages') as $item) {
            DB::table('pages')->insert($item);
        }
    }
}
