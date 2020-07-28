<?php


namespace App\Services\Order\Handlers;


use App\Models\Order;
use App\Services\Order\Repositories\CmsOrderRepository;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;

class RefundHandler
{
    private CmsOrderRepository $repository;
    private OrderStatusRepository $orderStatusRepository;

    /**
     * RefundHandler constructor.
     * @param CmsOrderRepository $repository
     * @param OrderStatusRepository $orderStatusRepository
     */
    public function __construct(
        CmsOrderRepository $repository,
        OrderStatusRepository $orderStatusRepository
    )
    {
        $this->repository = $repository;
        $this->orderStatusRepository = $orderStatusRepository;
    }

    /**
     * @param Order $order
     * @param array $refundData
     * @return Order
     */
    public function handle(Order $order, array $refundData): Order
    {
        return $this->repository->update($order, [
            'refund_amount' => $refundData['refund_amount'],
            'refund_reason' => $refundData['refund_amount']
        ]);

    }
}
