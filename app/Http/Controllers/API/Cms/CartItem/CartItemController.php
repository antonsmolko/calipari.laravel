<?php


namespace App\Http\Controllers\API\Cms\CartItem;


use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\CartItem\Requests\CreateRequest;
use App\Services\CartItem\CmsCartItemService;
use Illuminate\Http\JsonResponse;

class CartItemController extends BaseResourceController
{
    public function __construct(CmsCartItemService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param CreateRequest $request
     * @return JsonResponse
     */
    public function store(CreateRequest $request): JsonResponse
    {
        return response()->json($this->service->store($request->all()));
    }
}
