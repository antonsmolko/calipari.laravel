<?php


namespace App\Services\Collection\Handlers;


use App\Models\Collection;
use App\Services\Collection\Repositories\CmsCollectionRepository;
use App\Services\Image\Repositories\CmsImageRepository;

class DestroyHandler
{
    private CmsCollectionRepository $repository;
    private CmsImageRepository $imageRepository;

    /**
     * DestroyHandler constructor.
     * @param CmsCollectionRepository $repository
     * @param CmsImageRepository $imageRepository
     */
    public function __construct(
        CmsCollectionRepository $repository,
        CmsImageRepository $imageRepository)
    {
        $this->repository = $repository;
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param Collection $collection
     * @return int
     */
    public function handle(Collection $collection): int
    {
        $collection->images
            ->each(fn ($image) => $this->imageRepository->destroy($image));

        return $this->repository->destroy($collection);
    }
}
