<?php


namespace App\Services\CartItem\Repositories;


use App\Models\Cart;
use App\Models\CartItem;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;

class ClientCartItemRepository extends ClientBaseResourceRepository
{
    /**
     * ClientCartItemRepository constructor.
     * @param CartItem $model
     */
    public function __construct(CartItem $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function store(array $storeData)
    {
        return $this->model::create($storeData);
    }

    /**
     * @param CartItem $item
     * @param array $updateData
     * @return bool
     */
    public function update(CartItem $item, array $updateData): bool
    {
        return $item->update($updateData);
    }

    /**
     * @param CartItem $item
     * @return bool|null
     * @throws \Exception
     */
    public function delete(CartItem $item)
    {
        return $item->delete();
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getItemsByKeys(array $keys)
    {
        return $this->model::whereIn('id', $keys)->get();
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
