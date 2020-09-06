<?php

namespace App\Http\Controllers\API\Client\Cart;

use App\Http\Controllers\API\Client\Cart\Requests\SyncRequest;
use App\Http\Controllers\API\Client\Cart\Requests\SyncSaleRequest;
use App\Http\Controllers\API\Client\CartItem\Requests\StoreRequest;
use App\Services\Cart\ClientCartService;
use Illuminate\Http\JsonResponse;

class CartController
{
    private ClientCartService $service;

    /**
     * CartController constructor.
     * @param ClientCartService $service
     */
    public function __construct(ClientCartService $service)
    {
        $this->service = $service;
    }

    /**
     * @param SyncRequest $request
     * @return JsonResponse
     */
    public function sync(SyncRequest $request): JsonResponse
    {
        return response()->json($this->service->sync($request->all()));
    }

    /**
     * @param StoreRequest $request
     * @return JsonResponse
     */
    public function addItem(StoreRequest $request): JsonResponse
    {
        return response()->json($this->service->addItem($request->all()));
    }

//    /**
//     * @param SyncSaleRequest $request
//     * @return JsonResponse
//     */
//    public function syncSales(SyncSaleRequest $request): JsonResponse
//    {
//        return response()->json($this->service->syncSales($request->keys));
//    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function addSale(int $id): JsonResponse
    {
        return response()->json($this->service->addSale($id));
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function detachSale(int $id): JsonResponse
    {
        return response()->json($this->service->detachSale($id));
    }
}
