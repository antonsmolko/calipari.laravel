<?php


namespace App\Services\Card\Handlers;


use App\Services\Card\Repositories\CardRepository;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Collection;

class SyncHandler
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
     * @param Authenticatable $user
     * @param array $cards
     * @param Collection $userCards
     */
    public function handle(Authenticatable $user, array $cards, Collection $userCards)
    {
        array_walk($cards, function ($card) use ($user, $userCards) {
            $cardExists = (bool) $userCards->firstWhere('id', $card['id']);

            if (!$cardExists) {
                $this->repository->store($user, [
                    'user_id' => $user->id,
                    'info' => json_encode($card, true)
                ]);
            }
        });
    }
}
