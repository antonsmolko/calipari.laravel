<?php


namespace App\Services\Order\Handlers;


use App\Models\Order;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\OrderItem\OrderItemService;
use Illuminate\Support\Arr;

class StoreHandler
{
    private ClientOrderRepository $repository;
    private GetOrderItemsHandler $getOrderItemsHandler;
    private GetOrderDeliveryHandler $getOrderDeliveryHandler;
    private GetOrderCustomerHandler $getOrderCustomerHandler;
    private GetOrderPriceHandler $getOrderPriceHandler;
    private OrderItemService $itemService;

    /**
     * StoreHandler constructor.
     * @param ClientOrderRepository $repository
     * @param GetOrderItemsHandler $getOrderItemsHandler
     * @param GetOrderDeliveryHandler $getOrderDeliveryHandler
     * @param GetOrderCustomerHandler $getOrderCustomerHandler
     * @param GetOrderPriceHandler $getOrderPriceHandler
     * @param OrderItemService $itemService
     */
    public function __construct(
        ClientOrderRepository $repository,
        GetOrderItemsHandler $getOrderItemsHandler,
        GetOrderDeliveryHandler $getOrderDeliveryHandler,
        GetOrderCustomerHandler $getOrderCustomerHandler,
        GetOrderPriceHandler $getOrderPriceHandler,
        OrderItemService $itemService
    )
    {
        $this->repository = $repository;
        $this->getOrderItemsHandler = $getOrderItemsHandler;
        $this->getOrderDeliveryHandler = $getOrderDeliveryHandler;
        $this->getOrderCustomerHandler = $getOrderCustomerHandler;
        $this->getOrderPriceHandler = $getOrderPriceHandler;
        $this->itemService = $itemService;
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function handle(array $requestData)
    {
        $number = $this->getOrderNumber();
        $delivery = $this->getOrderDeliveryHandler->handle(json_decode($requestData['delivery'], true));
        $customer = $this->getOrderCustomerHandler->handle(json_decode($requestData['customer'], true));
        $items = $this->getOrderItemsHandler->handle(json_decode($requestData['items'], true));
        $price = $this->getOrderPriceHandler->handle($items, $delivery['price']);

        $orderData = [
            'number' => $number,
            'hash_number' => encrypt($number),
            'user_id' => $requestData['userId'],
            'delivery' => json_encode($delivery, true),
            'customer' => json_encode($customer, true),
            'price' => $price,
            'comment' => $requestData['comment']
        ];

        $order = $this->repository->store($orderData);

        array_walk($items, function ($item) use ($order) {
            $storeData = Arr::collapse([$item, ['order_id' => $order->id]]);
            $this->itemService->store($storeData);
        });

        return $order;
    }

    /**
     * @return string
     */
    private function getOrderNumber(): string
    {
        $length = (int) config('settings.order_number_length');
        $randLength = (int) ('1e' . $length) - 1;
        $order = true;
        $number = null;
        while ($order) {
            $number = substr(str_pad(sprintf('%u',crc32(microtime())), $length, rand(0, $randLength)), -$length);
            $order = !!Order::where('number', $number)->first();
        }

        return $number;
    }
}
