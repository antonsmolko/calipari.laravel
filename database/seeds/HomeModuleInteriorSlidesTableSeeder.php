<?php

use Illuminate\Database\Seeder;

class HomeModuleInteriorSlidesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        seedProcessOfLoadingImages(
            'home-interiors',
            'calipari.home-interiors',
            $this,
            'store');
    }

    /**
     * @param array $item
     * @param array $seedImagesData
     * @param string $storageSeedsImageDir
     */
    public function store(array $item, array $seedImagesData, string $storageSeedsImageDir) {
        $imageFile = getImageByNameFromLocal(
            $seedImagesData,
            $item['imageBaseName'],
            'home-interiors',
            $storageSeedsImageDir);

        $imageData = uploader()->store($imageFile);

        factory(App\Models\HomeModuleInteriorSlide::class)->create([
            'interior_id' => $item['interior_id'],
            'image_path' => $imageData['path'],
            'image_id' => $item['image_id'],
            'order' => $item['order']
        ]);
    }
}
