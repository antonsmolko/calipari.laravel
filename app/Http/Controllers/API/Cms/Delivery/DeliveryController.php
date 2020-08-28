<?php

namespace App\Http\Controllers\API\Cms\Delivery;


use App\Http\Controllers\API\Cms\Delivery\Requests\CreateRequest;
use App\Http\Controllers\API\Cms\Delivery\Requests\UpdateRequest;
use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Models\Delivery;
use App\Services\Delivery\CmsDeliveryService;

class DeliveryController extends BaseResourceController
{
    /**
     * DeliveryController constructor.
     * @param CmsDeliveryService $service
     */
    public function __construct(CmsDeliveryService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param CreateRequest $request
     * @return Delivery
     */
    public function store(CreateRequest $request): Delivery
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

    public function getPickupItems()
    {
        return response()->json($this->service->getPickupItems());
    }
}
