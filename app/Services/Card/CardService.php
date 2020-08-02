<?php


namespace App\Services\Card;


use App\Services\Card\Repositories\CardRepository;
use Illuminate\Support\Arr;

class CardService
{
    private CardRepository $repository;
    private $authUser;

    /**
     * CardService constructor.
     * @param CardRepository $repository
     */
    public function __construct(CardRepository $repository)
    {
        $this->repository = $repository;
        $this->authUser = auth()->user();
    }

    /**
     * @param string $paymentId
     * @return bool|null
     * @throws \Exception
     */
    public function remove(string $paymentId)
    {
        $card = $this->repository->getItemByPaymentId($this->authUser->id, $paymentId);

        return $this->repository->remove($card);
    }

    /**
     * @param array $cards
     * @return array
     */
    public function sync(array $cards)
    {
        $user = $this->authUser;
        $userWithTrashedCards = $this->repository->getUserWithTrashedItems($user);

        return array_map(function ($card) use ($user, $userWithTrashedCards) {
            $hasCard = (bool) $userWithTrashedCards->first(fn ($trashedCard) => !count(array_diff_assoc(
               Arr::except($card, 'id'),
               Arr::except($trashedCard->getInfo(), 'id')
            )));

            if (!$hasCard) {
                return $user->cards()->create([
                    'user_id' => $user->id,
                    'info' => json_encode($card, true)
                ]);
            }
        }, $cards);
    }
}
