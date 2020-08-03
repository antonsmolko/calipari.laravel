<?php


namespace App\Services\Card;


use App\Models\User;
use App\Services\Card\Handlers\GetInfoCardsHandler;
use App\Services\Card\Handlers\StoreHandler;
use App\Services\Card\Handlers\SyncHandler;
use App\Services\Card\Repositories\CardRepository;
use App\Services\Card\Handlers\GetSavedCardInfoHandler;

class CardService
{
    private CardRepository $repository;
    private SyncHandler $syncHandler;
    private StoreHandler $storeHandler;
    private GetSavedCardInfoHandler $getSavedCardInfoHandler;
    private GetInfoCardsHandler $getInfoCardsHandler;
    private $authUser;

    /**
     * CardService constructor.
     * @param CardRepository $repository
     * @param SyncHandler $syncHandler
     * @param GetSavedCardInfoHandler $getSavedCardInfoHandler
     * @param StoreHandler $storeHandler
     * @param GetInfoCardsHandler $getInfoCardsHandler
     */
    public function __construct(
        CardRepository $repository,
        SyncHandler $syncHandler,
        GetSavedCardInfoHandler $getSavedCardInfoHandler,
        StoreHandler $storeHandler,
        GetInfoCardsHandler $getInfoCardsHandler
    )
    {
        $this->repository = $repository;
        $this->syncHandler = $syncHandler;
        $this->storeHandler = $storeHandler;
        $this->getSavedCardInfoHandler = $getSavedCardInfoHandler;
        $this->getInfoCardsHandler = $getInfoCardsHandler;
        $this->authUser = auth()->user();
    }

    /**
     * @param $user
     * @param array $paymentMethod
     * @return mixed|null
     */
    public function store($user, array $paymentMethod)
    {
        $savingCard = $this->getSavedCardInfoHandler->handle($paymentMethod);

        return $this->storeHandler->handle($user, $savingCard);
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
     * @return mixed
     */
    public function sync(array $cards)
    {
        $user = $this->authUser;
        $withTrashedUserCards = $this->repository->getWithTrashedUserItems($user);
        $infoCards = $this->getInfoCardsHandler->handle($withTrashedUserCards);
        $this->syncHandler->handle($user, $cards, $infoCards);

        return $user->cards->map(fn ($card) => json_decode($card->info, true));
    }
}
