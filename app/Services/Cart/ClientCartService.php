<?php


namespace App\Services\Cart;


use App\Services\Cart\Handlers\SyncHandler;
use App\Services\Cart\Repositories\ClientCartRepository;
use App\Services\CartItem\Handlers\GetStoreDetailsDataHandler;
use App\Services\CartItem\Resources\FromCartClient as CartItemResource;

class ClientCartService
{
    private ClientCartRepository $repository;
    private SyncHandler $syncHandler;
    private GetStoreDetailsDataHandler $getStoreDetailsDataHandler;

    /**
     * ClientCartService constructor.
     * @param ClientCartRepository $repository
     * @param SyncHandler $syncHandler
     * @param GetStoreDetailsDataHandler $getStoreDetailsDataHandler
     */
    public function __construct(
        ClientCartRepository $repository,
        SyncHandler $syncHandler,
        GetStoreDetailsDataHandler $getStoreDetailsDataHandler
    )
    {
        $this->repository = $repository;
        $this->syncHandler = $syncHandler;
        $this->getStoreDetailsDataHandler = $getStoreDetailsDataHandler;
    }

    /**
     * @param array $items
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function sync(array $items)
    {
        return $this->syncHandler->handle($items);
    }

    /**
     * @param array $itemData
     * @return mixed
     */
    public function add(array $itemData)
    {
        $user = auth()->user();

        $cart = $user->cart
            ? $user->cart
            : $this->repository->updateOrCreate($user);

        $details = $this->getStoreDetailsDataHandler->handle($itemData);

        $this->repository->addItem($cart, [
            'details' => json_encode($details, true)
        ]);

        return CartItemResource::collection($cart->items);
    }
}
