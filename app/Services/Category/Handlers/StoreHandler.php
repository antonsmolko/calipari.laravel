<?php


namespace App\Services\Category\Handlers;


use App\Services\Category\Repositories\CmsCategoryRepository;
use App\Services\HomeModuleInterior\CmsHomeModuleInteriorService;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CmsCategoryRepository $repository;
    private CmsHomeModuleInteriorService $homeModuleInteriorService;

    /**
     * StoreHandler constructor.
     * @param CmsCategoryRepository $repository
     * @param CmsHomeModuleInteriorService $homeModuleInteriorService
     */
    public function __construct(
        CmsCategoryRepository $repository,
        CmsHomeModuleInteriorService $homeModuleInteriorService
    )
    {
        $this->repository = $repository;
        $this->homeModuleInteriorService = $homeModuleInteriorService;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function handle(array $storeData)
    {
        if (!empty($storeData['image'])) {
            $uploadAttributes = uploader()->upload($storeData['image']);
            $storeData = Arr::add(Arr::except($storeData, ['image']),'image_path', $uploadAttributes['path']);
        }

        return $this->repository->store($storeData);
    }
}
