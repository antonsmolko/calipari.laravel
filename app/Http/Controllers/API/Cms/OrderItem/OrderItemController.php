<?php


namespace App\Http\Controllers\API\Cms\OrderItem;


use App\Services\OrderItem\OrderItemService;

class OrderItemController
{
    private OrderItemService $service;

    /**
     * OrderItemController constructor.
     * @param OrderItemService $service
     */
    public function __construct(OrderItemService $service)
    {
        $this->service = $service;
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getPdfLabel(int $id)
    {
        return $this->service->getPdfLabel($id);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getPdfLayout(int $id)
    {
        return $this->service->getPdfLayout($id);
    }
}
