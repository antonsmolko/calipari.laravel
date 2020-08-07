<?php


namespace App\Services\OrderItem\Repositories;


use App\Models\OrderItem;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;

class OrderItemRepository extends ClientBaseResourceRepository
{
    /**
     * ClientDeliveryRepository constructor.
     * @param OrderItem $model
     */
    public function __construct(OrderItem $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $storeData
     * @return OrderItem
     */
    public function store(array $storeData): OrderItem
    {
        return $this->model::create($storeData);
    }

    public function getItemFromPDFLabel(int $id)
    {
        return $this->model::where('id', $id)
            ->with('texture:id,name,width,seamless')
            ->firstOrFail();
    }
}
