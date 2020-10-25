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
        seedProcessOfLoadingImages(
            'images',
            'calipari.images',
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
            $item['baseName'],
            'images',
            $storageSeedsImageDir);

        $imageData = uploader()->store($imageFile);

        if (!empty($item['owner_id'])) {
            $imageData = \Illuminate\Support\Arr::collapse([$imageData, [
                'owner_id' => $item['owner_id']
            ]]);
        }

        DB::table('images')->insert($imageData);
    }
}
