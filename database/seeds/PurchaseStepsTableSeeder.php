<?php

use Illuminate\Database\Seeder;

class PurchaseStepsTableSeeder extends Seeder
{
    private string $uploadDir;
    private string $seedsUploadImageDir;
    private string $seedsImageDir;

    public function __construct()
    {
        $this->uploadDir = public_path(config('uploads.image_upload_path'));
        $this->seedsUploadImageDir = config('seeds.seeds_uploads_path') . 'purchase-steps';
        $this->seedsImageDir = public_path(config('seeds.seeds_path'));
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $images = getImagesFromLocal($this->seedsUploadImageDir);

        foreach (config('seeds.purchase-steps') as $item) {
            DB::table('purchase_steps')->insert([
                'title' => $item['title'],
                'description' => $item['description'],
                'image_path' => $this->getPurchaseStepImagePath($images, $item['image_key']),
            ]);
        }

        File::deleteDirectory($this->seedsImageDir);
    }

    protected function getPurchaseStepImagePath(array $images, string $imageKey)
    {
        $imageName = 'purchase-step-' . $imageKey . '.jpg';
        $imageUploadFile = getImageByNameFromLocal($images, $imageName, $this->seedsUploadImageDir, $this->seedsImageDir);
        $imageAttributes = uploader()->upload($imageUploadFile, $this->uploadDir);

        return $imageAttributes['path'];
    }
}
