<?php


namespace App\Http\Controllers\API\Cms\CartItem;


use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Services\CartItem\CmsCartItemService;

class CartItemController extends BaseResourceController
{
    public function __construct(CmsCartItemService $service)
    {
        parent::__construct($service);
    }
}
