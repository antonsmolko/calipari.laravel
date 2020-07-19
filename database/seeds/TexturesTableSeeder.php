<?php

use Illuminate\Database\Seeder;

class TexturesTableSeeder extends Seeder
{
    private string $seedsUploadImagePath;
    private string $seedsImagePath;

    public function __construct()
    {
        $this->seedsUploadImagePath = config('seed_settings.seeds_data_path') . 'textures';
        $this->seedsImagePath = config('seed_settings.seeds_uploads_path');
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Storage::deleteDirectory($this->seedsImagePath);
        Storage::makeDirectory($this->seedsImagePath);

        $images = getImagesFromLocal($this->seedsUploadImagePath);

        foreach (config('seeds.textures') as $texture) {
            DB::table('textures')->insert([
                'name' => $texture['name'],
                'sample_path' => $this->getTextureImagePath($images, 'sample', $texture['image_key']),
                'background_path' => $this->getTextureImagePath($images, 'background', $texture['image_key']),
                'width' => $texture['width'],
                'price' => $texture['price'],
                'description' => $texture['description'],
                'publish' => 1,
                'order' => $texture['order']
            ]);
        }

        Storage::deleteDirectory($this->seedsImagePath);
    }

    protected function getTextureImagePath(array $images, string $article, string $imageKey)
    {
        $imageName = 'texture-' . $article . '-' . $imageKey . '.jpg';
        $seedsImageDir = storage_path("app/" . $this->seedsImagePath);

        $imageUploadFile = getImageByNameFromLocal($images, $imageName, $this->seedsUploadImagePath, $seedsImageDir);
        $imageAttributes = uploader()->store($imageUploadFile);

        return $imageAttributes['path'];
    }
}
