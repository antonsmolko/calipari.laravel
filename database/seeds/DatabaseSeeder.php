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

        $this->call([
//            UsersTableSeeder::class,
            LaratrustSeeder::class,
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
    }
}
