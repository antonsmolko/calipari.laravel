<?php


namespace App\Services\OrderItem;


use App\Models\OrderItem;
use App\Services\OrderItem\Handlers\StoreHandler;

class OrderItemService
{
    private StoreHandler $storeHandler;
    /**
     * OrderItemService constructor.
     * @param StoreHandler $storeHandler
     */
    public function __construct(StoreHandler $storeHandler)
    {
        $this->storeHandler = $storeHandler;
    }

    /**
     * @param array $storeData
     * @return OrderItem
     */
    public function store(array $storeData): OrderItem
    {
        return $this->storeHandler->handle($storeData);
    }
}
