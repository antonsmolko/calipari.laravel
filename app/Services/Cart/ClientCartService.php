<?php


namespace App\Services\Cart;


use App\Models\Cart;
use App\Services\Cart\Handlers\SyncHandler;
use App\Services\Cart\Repositories\ClientCartRepository;
use App\Services\CartItem\Handlers\GetStoreDetailsDataHandler;
use App\Services\CartItem\Resources\FromCartClient as CartItemResource;
use App\Services\Sale\Repositories\ClientSaleRepository;
use App\Services\Sale\Resources\ForListClient as SaleResource;
use Illuminate\Support\Collection;

class ClientCartService
{
    private ClientCartRepository $repository;
    private ClientSaleRepository $saleRepository;
    private SyncHandler $syncHandler;
    private GetStoreDetailsDataHandler $getStoreDetailsDataHandler;

    /**
     * ClientCartService constructor.
     * @param ClientCartRepository $repository
     * @param ClientSaleRepository $saleRepository
     * @param SyncHandler $syncHandler
     * @param GetStoreDetailsDataHandler $getStoreDetailsDataHandler
     */
    public function __construct(
        ClientCartRepository $repository,
        ClientSaleRepository $saleRepository,
        SyncHandler $syncHandler,
        GetStoreDetailsDataHandler $getStoreDetailsDataHandler
    )
    {
        $this->repository = $repository;
        $this->saleRepository = $saleRepository;
        $this->syncHandler = $syncHandler;
        $this->getStoreDetailsDataHandler = $getStoreDetailsDataHandler;
    }

    /**
     * @param array $syncData
     * @return array
     */
    public function sync(array $syncData): array
    {
        $user = auth()->user();
        $cart = $this->getUserCart($user);

        return $this->syncHandler->handle($cart, $syncData);
    }

    /**
     * @param array $itemData
     * @return mixed
     */
    public function addItem(array $itemData)
    {
        $user = auth()->user();
        $cart = $this->getUserCart($user);

        $details = $this->getStoreDetailsDataHandler->handle($itemData);

        $this->repository->addItem($cart, [
            'details' => json_encode($details, true)
        ]);

        return CartItemResource::collection($cart->items);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function addSale(int $id)
    {
        $user = auth()->user();
        $cart = $this->getUserCart($user);

        $this->saleRepository->saleIsAvailable($id)
            ? $this->repository->attachSale($cart, $id)
            : abort(404, __('common.item_out_of_stock'));

        return SaleResource::collection($cart->sales);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function detachSale(int $id)
    {
        $user = auth()->user();
        $cart = $this->getUserCart($user);

        $this->repository->detachSale($cart, $id);

        return SaleResource::collection($cart->sales);
    }

    /**
     * @param $user
     * @return Cart
     */
    public function getUserCart($user): Cart
    {
        return $user->cart
            ? $user->cart
            : $this->repository->updateOrCreate($user);
    }
}
