<?php


namespace App\Services\Image\Handlers;


use App\Events\Models\Image\ImageUpdated;
use App\Models\Image;
use App\Services\Image\Repositories\CmsImageRepository;

class UpdateHandler
{
    private CmsImageRepository $repository;

    /**
     * UpdateHandler constructor.
     * @param CmsImageRepository $repository
     */
    public function __construct(CmsImageRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Image $image
     * @param array $syncData
     * @param array $updateData
     */
    public function handle(Image $image, array $syncData, array $updateData)
    {
        $this->repository->syncCategories($image, $syncData);
        $this->repository->update($image, $updateData);
        event(new ImageUpdated());
    }
}
