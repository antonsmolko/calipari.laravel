<?php

namespace App\Http\Controllers\API\Client\Cart;

use App\Http\Controllers\API\Client\Cart\Requests\ProjectRequest;
use App\Http\Controllers\API\Client\Cart\Requests\SetQtyRequest;
use App\Http\Controllers\API\Client\Cart\Requests\SyncRequest;
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
        return response()->json($this->service->sync($request->items));
    }

    /**
     * @param StoreRequest $request
     * @return JsonResponse
     */
    public function add(StoreRequest $request): JsonResponse
    {
        return response()->json($this->service->add($request->all()));
    }

//    /**
//     * @param int $id
//     * @return JsonResponse
//     */
//    public function delete(int $id): JsonResponse
//    {
//        return response()->json($this->service->delete($id));
//    }

    /**
     * @param SetQtyRequest $request
     * @return JsonResponse
     */
    public function setQty(SetQtyRequest $request): JsonResponse
    {
        return response()->json($this->service->setQty($request->all()));
    }

    /**
     * @param ProjectRequest $request
     * @return JsonResponse
     */
    public function getItemsWithProject(ProjectRequest $request): JsonResponse
    {
        return response()->json($this->service->getItemsWithProject($request->key));
    }
}
