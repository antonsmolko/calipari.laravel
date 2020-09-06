<?php


namespace App\Services\Cart\Repositories;


use App\Models\Cart;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use Illuminate\Support\Collection;

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

    /**
     * @param Cart $cart
     * @param $syncData
     * @return array
     */
    public function syncSales(Cart $cart, $syncData): array
    {
        return $cart->sales()->sync($syncData);
    }

    /**
     * @param Cart $cart
     * @param $saleId
     */
    public function attachSale(Cart $cart, $saleId)
    {
        $cart->sales()->attach($saleId);
    }

    /**
     * @param Cart $cart
     * @param $saleId
     * @return int
     */
    public function detachSale(Cart $cart, $saleId): int
    {
        return $cart->sales()->detach($saleId);
    }
}
