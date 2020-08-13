<?php


namespace App\Services\Cart\Repositories;


use App\Models\Cart;
use App\Models\CartItem;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;

class ClientCartRepository extends ClientBaseResourceRepository
{
    /**
     * ClientCartRepository constructor.
     * @param Cart $model
     */
    public function __construct(Cart $model)
    {
        $this->model = $model;
    }

    /**
     * @param $user
     * @return Cart
     */
    public function create($user): Cart
    {
        return $this->model::create([
            'user_id' => $user->id,
            'user_email' => $user->email
        ]);
    }

    /**
     * @param Cart $cart
     * @param array $storeData
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function addItem(Cart $cart, array $storeData)
    {
        return $cart->items()->create($storeData);
    }

    /**
     * @param Cart $cart
     * @param array $updateData
     * @return bool
     */
    public function update(Cart $cart, array $updateData): bool
    {
        return $cart->update($updateData);
    }

    /**
     * @param $user
     * @param int $id
     * @param int $qty
     * @return mixed
     */
    public function setQty($user, int $id, int $qty)
    {
        $items = array_map(function($item) use ($id, $qty){
            if ($item['id'] === $id) {
                $item['qty'] = $qty;
            }
            return $item;
        }, $user->cart->getItems());

        return $user->cart()->update([
            'items' => json_encode($items, true)
        ]);
    }
}
