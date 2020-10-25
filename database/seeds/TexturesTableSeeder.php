<?php

use Illuminate\Database\Seeder;

class TexturesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        seedProcessOfLoadingImages(
            'textures',
            'calipari.textures',
            $this,
            'store');
    }

    /**
     * @param array $item
     * @param array $seedImagesData
     * @param string $storageSeedsImageDir
     */
    public function store(array $item, array $seedImagesData, string $storageSeedsImageDir) {
        $sampleFile = getImageByNameFromLocal(
            $seedImagesData,
            $item['alias'],
            'textures',
            $storageSeedsImageDir);

        $exampleFile = getImageByNameFromLocal(
            $seedImagesData,
            'example-' . $item['alias'],
            'textures',
            $storageSeedsImageDir);

        $sampleData = uploader()->store($sampleFile);
        $exampleData = uploader()->store($exampleFile);

        factory(App\Models\Texture::class)->create([
            'name' => $item['name'],
            'sample_path' => $sampleData['path'],
            'background_path' => $exampleData['path'],
            'width' => $item['width'],
            'price' => $item['price'],
            'description' => $item['description'],
            'seamless' => $item['seamless'],
            'publish' => 1
        ]);
    }
}
