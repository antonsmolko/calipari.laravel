<?php


namespace App\Services\ArtCollection\Handlers;


use App\Models\ArtCollection;
use App\Services\ArtCollection\Repositories\CmsArtCollectionRepository;
use App\Services\Image\Repositories\CmsImageRepository;

class RemoveImageHandler
{
    private CmsArtCollectionRepository $repository;
    private CmsImageRepository $imageRepository;

    /**
     * RemoveImagesHandler constructor.
     * @param CmsArtCollectionRepository $repository
     * @param CmsImageRepository $imageRepository
     */
    public function __construct(
        CmsArtCollectionRepository $repository,
        CmsImageRepository $imageRepository)
    {
        $this->repository = $repository;
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param ArtCollection $collection
     * @param int $imageId
     * @return int
     */
    public function handle(ArtCollection $collection, int $imageId): int
    {
        $image = $this->imageRepository->getItem($imageId);
        $result = $this->imageRepository->dissociateArtCollection($image);

        if (!$collection->images->count()) {
            $this->repository->unpublish($collection);
        }

        return $result;
    }
}
