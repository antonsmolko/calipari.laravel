<?php


namespace App\Services\Image\Handlers;


use App\Models\Collection;
use App\Services\Collection\Repositories\CmsCollectionRepository;
use App\Services\Image\Repositories\CmsImageRepository;
use Illuminate\Support\Arr;

class SyncUpdateWithCollectionHandler
{
    private CmsImageRepository $repository;
    private CmsCollectionRepository $collectionRepository;

    public function __construct(
        CmsImageRepository $repository,
        CmsCollectionRepository $collectionRepository
    )
    {
        $this->repository = $repository;
        $this->collectionRepository = $collectionRepository;
    }

    /**
     * @param int $id
     * @param Collection $collection
     * @param array $updateData
     */
    public function handle(int $id, Collection $collection, array $updateData)
    {
        $this->collectionRepository->update($collection, Arr::except($updateData, ['publish']));

        $collection->images
            ->except($id)
            ->each(function ($image) use ($updateData) {
                $this->repository->update($image, $updateData);
            });
    }
}
