<?php


namespace App\Services\CartItem\Repositories;


use App\Models\Cart;
use App\Models\CartItem;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsCartItemRepository extends CmsBaseResourceRepository
{
    public function __construct(CartItem $model)
    {
        $this->model = $model;
    }

    /**
     * @param CartItem $item
     * @param Cart $cart
     * @return bool
     */
    public function associateWithCart(CartItem $item, Cart $cart): bool
    {
        $item->cart()->associate($cart);

        return $item->save();
    }
}
