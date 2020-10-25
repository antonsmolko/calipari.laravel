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

        $uploadDir = config('uploads.image_upload_path'); // Директория, для загрузки всех изображеий
        // !!!!! ВНИМАНИЕ! КОМАНДА НИЖЕ УДАЛИТ ВСЕ ИЗОБРАЖЕНИЯ ИЗ STORAGE !!!!!
        Storage::deleteDirectory($uploadDir);
        // !!!!!

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
            TexturesTableSeeder::class,
            ImagesTableSeeder::class,
//             PostsTableSeeder::class,
            CategoriesTableSeeder::class, // ! after ImagesTableSeeder::class
            ArtCollectionsTableSeeder::class, // ! after ImagesTableSeeder::class and CategoriesTableSeeder::class
            ColorCollectionsTableSeeder::class, // ! after ImagesTableSeeder::class and CategoriesTableSeeder::class
            PurchaseStepsTableSeeder::class, // ! after ImagesTableSeeder::class
            HomeModuleInteriorSlidesTableSeeder::class, // ! after ImagesTableSeeder::class
            SalesTableSeeder::class, // ! after ImagesTableSeeder::class
        ]);

        $this->command->info('Sync image storage to AWS S3');
        uploader()->syncStorageFromLocalToS3(true);
    }
}
