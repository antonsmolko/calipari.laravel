<?php


namespace App\Services\Cart\Handlers;


use App\Services\Cart\Repositories\ClientCartRepository;

class UpdateHandler
{
    private ClientCartRepository $repository;

    /**
     * SyncHandler constructor.
     * @param ClientCartRepository $repository
     */
    public function __construct(ClientCartRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $items
     * @return mixed
     */
    public function handle(array $items)
    {
        $user = auth()->user();

        $storeData = $items;

        if ($user->cart) {
            $cartItems = $user->cart->getItems();
            $storeData = array_values(collect([...$items, ...$cartItems])
                ->unique('id')
                ->toArray());
        }

        return $this->repository->update($user, $storeData);
    }
}
