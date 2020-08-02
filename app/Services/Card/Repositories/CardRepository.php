<?php


namespace App\Services\Card\Repositories;


use App\Models\Card;

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
     * @param $user
     * @return mixed
     */
    public function getUserWithTrashedItems($user)
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
