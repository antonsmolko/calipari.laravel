<?php


namespace App\Services\Cart\Handlers;


use App\Models\Cart;
use App\Services\Cart\Repositories\ClientCartRepository;
use App\Services\CartItem\Repositories\ClientCartItemRepository;
use App\Services\CartItem\Resources\FromCartClient as CartItemResource;
use App\Services\Sale\Repositories\ClientSaleRepository;

class SyncHandler
{
    private ClientCartRepository $repository;
    private ClientCartItemRepository $itemRepository;
    private ClientSaleRepository $saleRepository;

    /**
     * SyncHandler constructor.
     * @param ClientCartRepository $repository
     * @param ClientCartItemRepository $itemRepository
     * @param ClientSaleRepository $saleRepository
     */
    public function __construct(
        ClientCartRepository $repository,
        ClientCartItemRepository $itemRepository,
        ClientSaleRepository $saleRepository
    )
    {
        $this->repository = $repository;
        $this->itemRepository = $itemRepository;
        $this->saleRepository = $saleRepository;
    }

    /**
     * @param Cart $cart
     * @param array $syncData
     * @return array
     */
    public function handle(Cart $cart, array $syncData): array
    {
        $items = $this->itemRepository->getItemsByKeys($syncData['itemKeys']);
        $sales = $this->saleRepository->getItemsByKeys($syncData['saleKeys']);

        $items->each(fn($item) => $this->itemRepository->associateWithCart($item, $cart));
        $this->repository->syncSales($cart, $sales->pluck('id'));

        return [
            'items' => CartItemResource::collection($cart->items),
            'sale_keys' => $cart->sales()->pluck('id')
        ];
    }
}
