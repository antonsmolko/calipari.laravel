<?php


namespace App\Http\Controllers\API\Cms\CartItem;


use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\CartItem\Requests\CreateRequest;
use App\Services\CartItem\CmsCartItemService;

class CartItemController extends BaseResourceController
{
    /**
     * CartItemController constructor.
     * @param CmsCartItemService $service
     */
    public function __construct(CmsCartItemService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param CreateRequest $request
     * @return mixed
     */
    public function store(CreateRequest $request)
    {
        return $this->service->store($request->all());
    }
}
