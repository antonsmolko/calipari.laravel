<?php

use Illuminate\Database\Seeder;

class PurchaseStepsTableSeeder extends Seeder
{
    private string $seedsUploadImagePath;
    private string $seedsImagePath;

    public function __construct()
    {
        $this->seedsUploadImagePath = config('seed_settings.seeds_data_path') . 'purchase-steps';
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

        foreach (config('seeds.purchase-steps') as $item) {
            DB::table('purchase_steps')->insert([
                'title' => $item['title'],
                'description' => $item['description'],
                'image_path' => $this->getPurchaseStepImagePath($images, $item['image_key']),
            ]);
        }

        Storage::deleteDirectory($this->seedsImagePath);
    }

    protected function getPurchaseStepImagePath(array $images, string $imageKey)
    {
        $imageName = 'purchase-step-' . $imageKey . '.jpg';
        $seedsImageDir = storage_path("app/" . $this->seedsImagePath);

        $imageUploadFile = getImageByNameFromLocal($images, $imageName, $this->seedsUploadImagePath, $seedsImageDir);
        $imageAttributes = uploader()->store($imageUploadFile);

        return $imageAttributes['path'];
    }
}
