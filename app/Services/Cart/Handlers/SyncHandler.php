<?php


namespace App\Services\Cart\Handlers;


use App\Models\Image;
use App\Services\Cart\Repositories\ClientCartRepository;

class SyncHandler
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
     * @return array|mixed
     */
    public function handle(array $items)
    {
        $user = auth()->user();
        $storeData = $items;

        if ($user && $user->cart) {
            $cartItems = $user->cart->getItems();
            $storeData = collect([...$items, ...$cartItems])
                ->unique('id')
                ->toArray();
        }

        $storeData = array_values(
            array_filter($storeData, fn ($item) => Image::where('publish', 1)
                ->where('id', $item['image_id'])
                ->exists()
            )
        );


        return $user
            ? $this->repository->update($user, $storeData)
            : $storeData;
    }
}
