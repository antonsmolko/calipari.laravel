<?php


namespace App\Services\OrderItem\Handlers;


use App\Models\OrderItem;
use App\Services\OrderItem\Repositories\OrderItemRepository;

class StoreHandler
{
    private OrderItemRepository $repository;

    /**
     * StoreHandler constructor.
     * @param OrderItemRepository $repository
     */
    public function __construct(OrderItemRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return OrderItem
     */
    public function handle(array $storeData): OrderItem
    {
        $storeData['filter'] = json_encode($storeData['filter'], true);

        return $this->repository->store($storeData);
    }
}
