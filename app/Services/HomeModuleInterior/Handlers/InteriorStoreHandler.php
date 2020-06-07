<?php


namespace App\Services\HomeModuleInterior\Handlers;


use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorRepository;
use Illuminate\Support\Arr;

class InteriorStoreHandler
{
    private CmsHomeModuleInteriorRepository $repository;

    /**
     * InteriorStoreHandler constructor.
     * @param CmsHomeModuleInteriorRepository $repository
     */
    public function __construct(CmsHomeModuleInteriorRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function handle(array $storeData)
    {
        $nextOrderNumber = $this->repository->getNextOrderNumber();
        $storeData = Arr::collapse([$storeData, ['order' => $nextOrderNumber]]);

        return $this->repository->store($storeData);
    }
}
