<?php


namespace App\Services\Cart;


use App\Services\Cart\Handlers\DeleteHandler;
use App\Services\Cart\Handlers\SyncHandler;
use App\Services\Cart\Repositories\ClientCartRepository;
use App\Services\CartItem\Handlers\GetStoreDetailsDataHandler;
use App\Services\CartItem\Resources\FromCartClient as CartItemResource;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Arr;

class ClientCartService
{
    private ClientCartRepository $repository;
    private SyncHandler $syncHandler;
    private DeleteHandler $deleteHandler;
    private GetStoreDetailsDataHandler $getStoreDetailsDataHandler;

    /**
     * ClientCartService constructor.
     * @param ClientCartRepository $repository
     * @param SyncHandler $syncHandler
     * @param DeleteHandler $deleteHandler
     * @param GetStoreDetailsDataHandler $getStoreDetailsDataHandler
     */
    public function __construct(
        ClientCartRepository $repository,
        SyncHandler $syncHandler,
        DeleteHandler $deleteHandler,
        GetStoreDetailsDataHandler $getStoreDetailsDataHandler
    )
    {
        $this->repository = $repository;
        $this->syncHandler = $syncHandler;
        $this->deleteHandler = $deleteHandler;
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
            : $this->repository->create($user);

        $details = $this->getStoreDetailsDataHandler->handle($itemData);

        $this->repository->addItem($cart, [
            'details' => json_encode($details, true)
        ]);

        return CartItemResource::collection($cart->items);
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function setQty(array $requestData)
    {
        $user = auth()->user();
        $this->repository->setQty($user, $requestData['id'], $requestData['qty']);

        return $user->cart->getNotDeletedItems();
    }

    /**
     * @param string $key
     * @return array
     */
    public function getItemsWithProject(string $key): array
    {
        try {
            $keyData = decrypt($key, true);
        } catch (DecryptException $e) {
            abort(404);
        }

        $cart = $this->repository->getItem($keyData['cart_id']);

        $cartItems = array_map(fn($item) => $item['id'] === $keyData['project_id']
            ? Arr::except($item, 'deleted')
            : $item, $cart->getItems());

        return $this->repository->update($cart, ['items' => json_encode($cartItems, true)]);
    }
}
