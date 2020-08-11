<?php


namespace App\Services\Cart\Repositories;


use App\Models\Cart;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsCartRepository extends CmsBaseResourceRepository
{
    /**
     * CmsCartRepository constructor.
     * @param Cart $model
     */
    public function __construct(Cart $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function store(array $storeData)
    {
        return $this->model::create($storeData);
    }
}
