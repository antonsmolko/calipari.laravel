<?php


namespace App\Services\Pickup\Repositories;


use App\Models\Pickup;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsPickupRepository extends CmsBaseResourceRepository
{
    /**
     * CmsPickupRepository constructor.
     * @param Pickup $model
     */
    public function __construct(Pickup $model)
    {
        $this->model = $model;
    }
}
