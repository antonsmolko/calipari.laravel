<?php

namespace App\Http\Controllers\API\Client\Order;

use App\Http\Controllers\API\Client\Order\Requests\PayRequest;
use App\Http\Controllers\API\Client\Order\Requests\StoreRequest;
use App\Services\Order\ClientOrderService;
use Illuminate\Http\JsonResponse;

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

    /**
     * @param PayRequest $request
     * @return JsonResponse
     */
    public function pay(PayRequest $request): JsonResponse
    {
        return response()->json($this->service->pay($request->all()));
    }

    /**
     * @param string $token
     * @return int
     */
    public function confirmPaymentCompletion(string $token): int
    {
        return $this->service->confirmPaymentCompletion($token);
    }
}
