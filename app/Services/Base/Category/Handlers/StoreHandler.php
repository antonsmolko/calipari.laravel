<?php


namespace App\Services\Base\Category\Handlers;


use App\Services\Base\Category\Repositories\CmsBaseCategoryRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CmsBaseCategoryRepository $repository;

    /**
     * StoreHandler constructor.
     * @param CmsBaseCategoryRepository $repository
     */
    public function __construct(CmsBaseCategoryRepository $repository)
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
