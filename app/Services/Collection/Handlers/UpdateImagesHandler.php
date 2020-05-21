<?php


namespace App\Services\Collection\Handlers;


use App\Models\Collection;
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
     * @param Collection $collection
     * @param array $updateData
     * @param array $syncData
     * @return bool
     */
    public function handle(Collection $collection, array $updateData, array $syncData): bool
    {
        return $collection->images()->each(function ($image) use ($syncData, $updateData) {
            $this->imageRepository->syncNonColorCategories($image, $syncData);
            $this->imageRepository->update($image, [
                'max_print_width' => $updateData['max_print_width'],
                'description' => $updateData['image_description'],
                'owner_id' => $updateData['owner_id']
            ]);
        });
    }
}
