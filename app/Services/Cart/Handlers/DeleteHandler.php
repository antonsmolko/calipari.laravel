<?php


namespace App\Services\Cart\Handlers;


use App\Services\Cart\Repositories\ClientCartRepository;

class DeleteHandler
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
     * @param int $id
     * @return mixed
     */
    public function handle(int $id)
    {
        $user = auth()->user();

        $items = array_map(function($item) use ($id) {
            if ($item['id'] === $id) {
                $item['deleted'] = true;
            }

            return $item;
        }, $user->cart->getItems());

        return $this->repository->updateByUser($user, array_values($items));
    }
}
