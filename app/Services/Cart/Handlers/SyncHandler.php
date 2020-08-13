<?php


namespace App\Services\Cart\Handlers;


use App\Services\Cart\Repositories\ClientCartRepository;
use App\Services\CartItem\Repositories\ClientCartItemRepository;
use App\Services\CartItem\Resources\FromCartClient as CartItemResource;

class SyncHandler
{
    private ClientCartRepository $repository;
    private ClientCartItemRepository $itemRepository;

    /**
     * SyncHandler constructor.
     * @param ClientCartRepository $repository
     * @param ClientCartItemRepository $itemRepository
     */
    public function __construct(
        ClientCartRepository $repository,
        ClientCartItemRepository $itemRepository
    )
    {
        $this->repository = $repository;
        $this->itemRepository = $itemRepository;
    }

    /**
     * @param array $itemKeys
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function handle(array $itemKeys)
    {
        $user = auth()->user();
        $items = $this->itemRepository->getItemsByKeys($itemKeys);

        $cart = $user->cart
            ? $user->cart
            : $this->repository->create($user);

        $items->each(fn($item) => $this->itemRepository->associateWithCart($item, $cart));

        return CartItemResource::collection($cart->items);
    }
}
