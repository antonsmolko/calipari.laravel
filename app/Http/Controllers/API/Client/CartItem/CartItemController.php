<?php


namespace App\Http\Controllers\API\Client\CartItem;


use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Http\Controllers\API\Client\CartItem\Requests\PatchRequest;
use App\Http\Controllers\API\Client\CartItem\Requests\StoreRequest;
use App\Http\Controllers\API\Client\CartItem\Requests\SyncRequest;
use App\Services\CartItem\ClientCartItemService;
use Illuminate\Http\JsonResponse;

class CartItemController extends BaseResourceController
{
    /**
     * CartItemController constructor.
     * @param ClientCartItemService $service
     */
    public function __construct(ClientCartItemService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param StoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRequest $request)
    {
        return response()->json($this->service->store($request->all()));
    }

    /**
     * @param PatchRequest $request
     * @param int $id
     * @return mixed
     */
    public function update(PatchRequest $request, int $id)
    {
        return $this->service->update($id, $request->qty);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function destroy(int $id)
    {
        return $this->service->delete($id);
    }

    /**
     * @param SyncRequest $request
     * @return JsonResponse
     */
    public function sync(SyncRequest $request): JsonResponse
    {
        return response()->json($this->service->sync($request->items));
    }
}
