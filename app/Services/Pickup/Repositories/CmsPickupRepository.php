<?php


namespace App\Services\Pickup\Repositories;


use App\Models\Pickup;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Pickup\Resources\PickupDetails as PickupResource;

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

    /**
     * @param int $id
     * @return PickupResource
     */
    public function getItemDetails(int $id)
    {
        return new PickupResource($this->model::findOrFail($id));
    }
}
