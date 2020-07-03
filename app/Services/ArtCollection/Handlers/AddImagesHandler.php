<?php


namespace App\Services\ArtCollection\Handlers;


use App\Services\Image\Repositories\CmsImageRepository;

class AddImagesHandler
{
    private CmsImageRepository $imageRepository;

    /**
     * AddImageHandler constructor.
     * @param CmsImageRepository $imageRepository
     */
    public function __construct(CmsImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param int $collectionId
     * @param array $imageKeys
     * @return array
     */
    public function handle(int $collectionId, array $imageKeys)
    {
        return array_map(function($imageKey) use ($collectionId) {
            $image = $this->imageRepository->getItem($imageKey);

            return $this->imageRepository->update($image, ['art_collection_id' => $collectionId]);
        }, $imageKeys);
    }
}
