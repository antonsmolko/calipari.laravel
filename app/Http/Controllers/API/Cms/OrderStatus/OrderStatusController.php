<?php

namespace App\Http\Controllers\API\Cms\OrderStatus;


use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\OrderStatus\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\OrderStatus\Requests\UpdateRequest;
use App\Services\OrderStatus\OrderStatusService;
use Illuminate\Http\JsonResponse;

class OrderStatusController extends BaseResourceController
{
    /**
     * OrderStatusController constructor.
     * @param OrderStatusService $service
     */
    public function __construct(OrderStatusService $service)
    {
        parent::__construct($service);
    }

    /**
     * @return mixed
     */
    public function getPublishedItems()
    {
        return $this->service->getPublishedItems();
    }

    /**
     * @param StoreRequest $request
     * @return JsonResponse
     */
    public function store(StoreRequest $request): JsonResponse
    {
        return response()->json($this->service->store($request->all()));
    }

    public function update(UpdateRequest $request, int $id)
    {
        return $this->service->update($id, $request->all());
    }
}
