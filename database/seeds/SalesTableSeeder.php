<?php

use Illuminate\Database\Seeder;

class SalesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        seedProcessOfLoadingImages(
            'sales',
            'calipari.sales',
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
            $item['fileName'],
            'sales',
            $storageSeedsImageDir);

        $imageData = uploader()->store($imageFile);

        factory(App\Models\Sale::class)->create([
            'image_path' => $imageData['path'],
            'width_cm' => $item['width'],
            'height_cm' => $item['height'],
            'texture_id' => $item['texture_id'],
            'discount' => $item['discount']
        ]);
    }
}
