<?php


namespace App\Services\Cart\Repositories;


use App\Models\Cart;
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
    public function updateOrCreate($user): Cart
    {
        return $this->model::updateOrCreate(
            ['email' => $user->email],
            ['user_id' => $user->id, 'user_email' => $user->email]
        );
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
}
