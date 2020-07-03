<?php


namespace App\Services\ColorCollection\Handlers;


use App\Models\ColorCollection;
use App\Services\ColorCollection\Repositories\CmsColorCollectionRepository;
use App\Services\Image\Repositories\CmsImageRepository;

class DestroyHandler
{
    private CmsColorCollectionRepository $repository;
    private CmsImageRepository $imageRepository;

    /**
     * DestroyHandler constructor.
     * @param CmsColorCollectionRepository $repository
     * @param CmsImageRepository $imageRepository
     */
    public function __construct(
        CmsColorCollectionRepository $repository,
        CmsImageRepository $imageRepository)
    {
        $this->repository = $repository;
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param ColorCollection $colorCollection
     * @return int
     */
    public function handle(ColorCollection $colorCollection): int
    {
        $colorCollection->images
            ->each(fn ($image) => $this->imageRepository->destroy($image));

        return $this->repository->destroy($colorCollection);
    }
}
