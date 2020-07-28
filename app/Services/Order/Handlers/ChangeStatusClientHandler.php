<?php


namespace App\Services\Order\Handlers;


use App\Models\Order;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;

class ChangeStatusClientHandler
{
    private ClientOrderRepository $repository;
    private OrderStatusRepository $orderStatusRepository;

    /**
     * ChangeStatusByAliasHandler constructor.
     * @param ClientOrderRepository $repository
     * @param OrderStatusRepository $orderStatusRepository
     */
    public function __construct(
        ClientOrderRepository $repository,
        OrderStatusRepository $orderStatusRepository
    )
    {
        $this->repository = $repository;
        $this->orderStatusRepository = $orderStatusRepository;
    }

    /**
     * @param Order $order
     * @param string $statusAlias
     * @return \App\Services\Order\Resources\ClientOrder
     */
    public function handle(Order $order, string $statusAlias)
    {
        $status = $this->orderStatusRepository->getItemByAlias($statusAlias);

        return $this->repository->changeStatus($order, $status->id);
    }
}
