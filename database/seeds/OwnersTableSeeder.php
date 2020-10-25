<?php

use Illuminate\Database\Seeder;

class OwnersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $csvPath = base_path(config('seed_settings.seeds_data_path')) . 'csv/calipari.owners.csv';
        $csv = parseCsv($csvPath);

        array_walk($csv, fn ($owner) => DB::table('owners')
            ->insert(['title' => $owner['title']]));
    }
}
