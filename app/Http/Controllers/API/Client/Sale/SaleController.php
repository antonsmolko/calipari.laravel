<?php


namespace App\Http\Controllers\API\Client\Sale;


use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Http\Controllers\API\Client\Sale\Requests\KeysRequest;
use App\Http\Requests\FormRequest;
use App\Services\Sale\ClientSaleService;
use Illuminate\Http\JsonResponse;

class SaleController extends BaseResourceController
{
    /**
     * SaleController constructor.
     * @param ClientSaleService $service
     */
    public function __construct(ClientSaleService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function getItems(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->getItems($request->all()));
    }

    /**
     * @param KeysRequest $request
     * @return JsonResponse
     */
    public function getItemsByKeys(KeysRequest $request): JsonResponse
    {
        return response()->json($this->service->getItemsByKeys($request->keys));
    }

    /**
     * @param KeysRequest $request
     * @return JsonResponse
     */
    public function getAvailableItemsByKeys(KeysRequest $request): JsonResponse
    {
        return response()->json($this->service->getAvailableItemsByKeys($request->keys));
    }

    /**
     * @param KeysRequest $request
     * @return JsonResponse
     */
    public function syncKeys(KeysRequest $request): JsonResponse
    {
        return response()->json($this->service->syncKeys($request->keys));
    }
}
