<?php


namespace App\Services\Collection\Handlers;


use App\Services\Collection\Repositories\CmsCollectionRepository;

class StoreHandler
{
    private CmsCollectionRepository $repository;

    /**
     * StoreHandler constructor.
     * @param CmsCollectionRepository $repository
     */
    public function __construct(CmsCollectionRepository $repository)
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
        $collection = $this->repository->store($storeData);
        $collection->repository->syncCategories($collection, $syncData);

        return $collection;
    }
}
