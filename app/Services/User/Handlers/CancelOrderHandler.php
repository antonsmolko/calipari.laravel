<?php


namespace App\Services\User\Handlers;


use App\Events\Models\Order\OrderCanceled;
use App\Models\Order;
use App\Models\User;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;
use App\Services\User\Repositories\ClientUserRepository;

class CancelOrderHandler
{
    private ClientUserRepository $repository;
    private ClientOrderRepository $orderRepository;
    private OrderStatusRepository $orderStatusRepository;

    /**
     * CancelOrderHandler constructor.
     * @param ClientUserRepository $repository
     * @param ClientOrderRepository $orderRepository
     * @param OrderStatusRepository $orderStatusRepository
     */
    public function __construct(
        ClientUserRepository $repository,
        ClientOrderRepository $orderRepository,
        OrderStatusRepository $orderStatusRepository
    )
    {
        $this->repository = $repository;
        $this->orderRepository = $orderRepository;
        $this->orderStatusRepository = $orderStatusRepository;
    }

    /**
     * @param \Illuminate\Contracts\Auth\Authenticatable|User $user
     * @param int $number
     * @return \App\Services\Order\Resources\ClientOrder|void
     */
    public function handle($user, int $number)
    {
        $canceledStatus = $this->orderStatusRepository->getItemByAlias(Order::CANCELED_STATUS);
        $order = $this->orderRepository->getUserItemByNumber($user, $number);
        $lastOrderStatus = $order->statuses->last();

        $canceledStatus->order > $lastOrderStatus->order
            ? $this->orderRepository->changeStatus($order, $canceledStatus->id)
            : abort(406, __('order.order_cannot_be_canceled'));

        $canceledOrder = $this->repository->getOrder($user, $number);

        event(new OrderCanceled($canceledOrder));

        return $canceledOrder;
    }
}
