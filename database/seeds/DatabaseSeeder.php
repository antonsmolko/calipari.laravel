<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $filePath = base_path(config('seed_settings.seeds_data_path')) . 'csv/calipari.categories.csv';
        if (File::exists($filePath) && File::isReadable($filePath) && File::isFile($filePath)) {
            $csv = array_map('str_getcsv', file($filePath));
            array_walk($csv, function(&$a) use ($csv) {
                $a = array_combine($csv[0], $a);
            });
            array_shift($csv);
            dd($csv);
        }
        dd('stop');

        $csv = array_map('str_getcsv', file($file));
        array_walk($csv, function(&$a) use ($csv) {
            $a = array_combine($csv[0], $a);
        });
        array_shift($csv);

        $this->call([
            LaratrustSeeder::class,
            UsersTableSeeder::class,
            DeliveriesTableSeeder::class,
            SettingGroupsTableSeeder::class,
            SettingsTableSeeder::class,
            FormatsTableSeeder::class,
            OwnersTableSeeder::class,
            OrderStatusesTableSeeder::class,
            PagesTableSeeder::class,
            ImagesTableSeeder::class,
            PostsTableSeeder::class,
            TexturesTableSeeder::class, // ! after ImagesTableSeeder::class
            CategoriesTableSeeder::class, // ! after ImagesTableSeeder::class
            PurchaseStepsTableSeeder::class, // ! after ImagesTableSeeder::class
        ]);

        $this->command->info('Sync image storage to AWS S3');
        uploader()->syncStorageFromLocalToS3(true);
    }
}
