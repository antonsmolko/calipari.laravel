<?php

namespace App\Http\Controllers\API\Client\Order;

use App\Http\Controllers\API\Client\Order\Requests\StoreRequest;
use App\Services\Order\ClientOrderService;

class OrderController
{
    private ClientOrderService $service;

    /**
     * OrderController constructor.
     * @param ClientOrderService $service
     */
    public function __construct(ClientOrderService $service)
    {
        $this->service = $service;
    }

    /**
     * @param StoreRequest $request
     * @return int
     */
    public function store(StoreRequest $request): int
    {
        return $this->service->store($request->all());
    }
}
