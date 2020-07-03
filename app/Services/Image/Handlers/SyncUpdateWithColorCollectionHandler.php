<?php


namespace App\Services\Image\Handlers;


use App\Models\ColorCollection;
use App\Services\ColorCollection\Repositories\CmsColorCollectionRepository;
use App\Services\Image\Repositories\CmsImageRepository;
use Illuminate\Support\Arr;

class SyncUpdateWithColorCollectionHandler
{
    private CmsImageRepository $repository;
    private CmsColorCollectionRepository $colorCollectionRepository;

    /**
     * SyncUpdateWithColorCollectionHandler constructor.
     * @param CmsImageRepository $repository
     * @param CmsColorCollectionRepository $colorCollectionRepository
     */
    public function __construct(
        CmsImageRepository $repository,
        CmsColorCollectionRepository $colorCollectionRepository
    )
    {
        $this->repository = $repository;
        $this->colorCollectionRepository = $colorCollectionRepository;
    }

    /**
     * @param int $id
     * @param ColorCollection $colorCollection
     * @param array $updateData
     */
    public function handle(int $id, ColorCollection $colorCollection, array $updateData)
    {
        $this->colorCollectionRepository->update($colorCollection, Arr::except($updateData, ['publish']));

        $colorCollection->images
            ->except($id)
            ->each(function ($image) use ($updateData) {
                $this->repository->update($image, $updateData);
            });
    }
}
