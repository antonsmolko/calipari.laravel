<?php


namespace App\Services\ColorCollection\Handlers;


use App\Services\ColorCollection\Repositories\CmsColorCollectionRepository;

class StoreHandler
{
    private CmsColorCollectionRepository $repository;

    /**
     * StoreHandler constructor.
     * @param CmsColorCollectionRepository $repository
     */
    public function __construct(CmsColorCollectionRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @param array $syncData
     * @return mixed
     */
    public function handle(array $storeData, array $syncData)
    {
        $colorCollection = $this->repository->store($storeData);
        $colorCollection->repository->syncCategories($colorCollection, $syncData);

        return $colorCollection;
    }
}
