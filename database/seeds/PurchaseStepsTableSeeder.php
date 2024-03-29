<?php

use Illuminate\Database\Seeder;

class PurchaseStepsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        seedProcessOfLoadingImages(
            'purchase-steps',
            'calipari.purchase-steps',
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
            $item['id'],
            'purchase-steps',
            $storageSeedsImageDir);

        $imageData = uploader()->store($imageFile);

        DB::table('purchase_steps')->insert([
            'title' => $item['title'],
            'description' => $item['description'],
            'image_path' => $imageData['path']
        ]);
    }
}
