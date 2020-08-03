<?php


namespace App\Services\Card\Handlers;


use App\Services\Card\Repositories\CardRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CardRepository $repository;

    /**
     * SyncHandler constructor.
     * @param CardRepository $repository
     */
    public function __construct(CardRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param $user
     * @param array $savingCard
     * @return mixed|null
     */
    public function handle($user, array $savingCard)
    {
        $userCards = $user->cards;

        $hasEqual = (bool) $userCards
            ->first(fn ($card) => !count(array_diff_assoc(
                Arr::except($savingCard, 'id'),
                Arr::except($card->getInfo(), 'id')
            )));

        return !$hasEqual
            ? $this->repository->store($user, [
                'user_id' => $user->id,
                'info' => json_encode($savingCard, true)
            ])
            : null;
    }
}
