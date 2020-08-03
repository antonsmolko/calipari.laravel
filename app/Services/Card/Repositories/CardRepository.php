<?php


namespace App\Services\Card\Repositories;


use App\Models\Card;
use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;

class CardRepository
{
    private Card $model;

    /**
     * CardRepository constructor.
     * @param Card $model
     */
    public function __construct(Card $model)
    {
        $this->model = $model;
    }

    /**
     * @param Authenticatable|User $user
     * @param array $storeData
     * @return mixed
     */
    public function store($user, array $storeData)
    {
        return $user->cards()->create($storeData);
    }

    /**
     * @param int $userId
     * @param string $paymentId
     * @return mixed
     */
    public function getItemByPaymentId(int $userId, string $paymentId)
    {
        return $this->model::where('user_id', $userId)
            ->whereJsonContains('info->id', $paymentId)
            ->firstOrFail();
    }

    /**
     * @param Authenticatable $user
     * @return mixed
     */
    public function getWithTrashedUserItems(Authenticatable $user)
    {
        return $user->cards()->withTrashed()->get();
    }

    /**
     * @param Card $card
     * @return bool|null
     * @throws \Exception
     */
    public function remove(Card $card)
    {
        return $card->delete();
    }
}
