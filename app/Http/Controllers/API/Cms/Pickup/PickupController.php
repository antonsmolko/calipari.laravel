<?php

namespace App\Http\Controllers\API\Cms\Pickup;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Pickup\Requests\CreateRequest;
use App\Http\Controllers\API\Cms\Pickup\Requests\UpdateRequest;
use App\Services\Pickup\CmsPickupService;

class PickupController extends BaseResourceController
{
    /**
     * PickupController constructor.
     * @param CmsPickupService $service
     */
    public function __construct(CmsPickupService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param CreateRequest $request
     * @return mixed
     */
    public function store(CreateRequest $request)
    {
        return $this->service->store($request->all());
    }

    /**
     * @param UpdateRequest $request
     * @param int $id
     * @return mixed
     */
    public function update(UpdateRequest $request, int $id)
    {
        return $this->service->update($id, $request->all());
    }
}
