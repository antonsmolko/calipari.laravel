<?php


namespace App\Services\HomeModuleInterior\Handlers;


use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorSlideRepository;
use Illuminate\Support\Arr;

class InteriorSlideStoreHandler
{
    private CmsHomeModuleInteriorSlideRepository $repository;

    /**
     * InteriorSlideStoreHandler constructor.
     * @param CmsHomeModuleInteriorSlideRepository $repository
     */
    public function __construct(CmsHomeModuleInteriorSlideRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function handle(array $storeData)
    {
        $imageAttributes = uploader()->upload($storeData['image']);

        $nextOrderNumber = $this->repository->getNextOrderNumber($storeData['interior_id']);

        $storeData = Arr::collapse([
            Arr::except($storeData, ['image']),
            [
                'image_path' => $imageAttributes['path'],
                'order' => $nextOrderNumber
            ]
        ]);

        return $this->repository->store($storeData);
    }
}
