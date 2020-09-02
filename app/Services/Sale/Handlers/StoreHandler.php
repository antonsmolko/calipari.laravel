<?php


namespace App\Services\Sale\Handlers;


use App\Services\Sale\Repositories\CmsSaleRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CmsSaleRepository $repository;

    /**
     * StoreHandler constructor.
     * @param CmsSaleRepository $repository
     */
    public function __construct(CmsSaleRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function handle(array $storeData)
    {
        $uploadAttributes = uploader()->upload($storeData['image']);
        $storeData = Arr::add(Arr::except($storeData, ['image']),'image_path', $uploadAttributes['path']);

        return $this->repository->store($storeData);
    }
}
