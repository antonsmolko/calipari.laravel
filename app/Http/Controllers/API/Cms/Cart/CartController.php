<?php


namespace App\Http\Controllers\API\Cms\Cart;


use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Cart\Requests\CreateRequest;
use App\Services\Cart\CmsCartService;
use Illuminate\Http\JsonResponse;

class CartController extends BaseResourceController
{
    /**
     * CartController constructor.
     * @param CmsCartService $service
     */
    public function __construct(CmsCartService $service)
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
