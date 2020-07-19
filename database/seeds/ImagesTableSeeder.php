<?php

use Illuminate\Database\Seeder;


class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $uploadDir = config('uploads.image_upload_path');
        Storage::deleteDirectory($uploadDir);

        $seedsUploadImageDir = config('seed_settings.seeds_data_path') . 'images';
        $seedsImagePath = config('seed_settings.seeds_uploads_path');
        Storage::deleteDirectory($seedsImagePath);
        Storage::makeDirectory($seedsImagePath);

        $images = getImagesFromLocal($seedsUploadImageDir);
        $seedsImageDir = storage_path("app/" . $seedsImagePath);

        $i = 0;
        while ($i < config('seed_settings.images_count')) {
            $uploadImage = getFakerImageFromLocal($images, $seedsUploadImageDir, $seedsImageDir);
            factory(App\Models\Image::class)->create(uploader()->store($uploadImage));
            $i++;
        }

        Storage::deleteDirectory($seedsImagePath);
    }
}
