<?php


namespace App\Services\PurchaseStep\Handlers;


use App\Models\PurchaseStep;
use App\Services\PurchaseStep\Repositories\CmsPurchaseStepRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CmsPurchaseStepRepository $repository;

    public function __construct(CmsPurchaseStepRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return PurchaseStep
     */
    public function handle(array $storeData): PurchaseStep
    {
        $imageAttributes = uploader()->upload($storeData['image']);

        $storeData = Arr::collapse([
            Arr::except($storeData, ['image']),
            ['image_path' => $imageAttributes['path']]
        ]);

        return $this->repository->store($storeData);
    }
}
