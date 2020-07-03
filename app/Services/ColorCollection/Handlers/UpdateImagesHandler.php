<?php


namespace App\Services\ColorCollection\Handlers;


use App\Models\ColorCollection;
use App\Services\Image\Repositories\CmsImageRepository;

class UpdateImagesHandler
{
    private CmsImageRepository $imageRepository;

    /**
     * UpdateImagesHandler constructor.
     * @param CmsImageRepository $imageRepository
     */
    public function __construct(CmsImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param ColorCollection $colorCollection
     * @param array $updateData
     * @param array $syncData
     * @return bool
     */
    public function handle(ColorCollection $colorCollection, array $updateData, array $syncData): bool
    {
        return $colorCollection->images()->each(function ($image) use ($syncData, $updateData) {
            $this->imageRepository->syncNonColorCategories($image, $syncData);
            $this->imageRepository->update($image, [
                'max_print_width' => $updateData['max_print_width'],
                'description' => $updateData['image_description'],
                'owner_id' => $updateData['owner_id']
            ]);
        });
    }
}
