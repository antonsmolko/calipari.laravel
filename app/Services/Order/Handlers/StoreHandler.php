<?php


namespace App\Services\Order\Handlers;


use App\Models\Order;
use App\Models\Sale;
use App\Services\Cart\Repositories\ClientCartRepository;
use App\Services\CartItem\Repositories\ClientCartItemRepository;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\OrderItem\OrderItemService;
use App\Services\Sale\Repositories\ClientSaleRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private ClientOrderRepository $repository;
    private GetOrderItemsHandler $getOrderItemsHandler;
    private GetOrderDeliveryHandler $getOrderDeliveryHandler;
    private GetOrderCustomerHandler $getOrderCustomerHandler;
    private GetOrderPriceHandler $getOrderPriceHandler;
    private OrderItemService $itemService;
    private ClientCartItemRepository $cartItemRepository;
    private ClientSaleRepository $saleRepository;
    private ClientCartRepository $cartRepository;
    private AttachSalesHandler $attachSalesHandler;

    /**
     * StoreHandler constructor.
     * @param ClientOrderRepository $repository
     * @param GetOrderItemsHandler $getOrderItemsHandler
     * @param GetOrderDeliveryHandler $getOrderDeliveryHandler
     * @param GetOrderCustomerHandler $getOrderCustomerHandler
     * @param GetOrderPriceHandler $getOrderPriceHandler
     * @param OrderItemService $itemService
     * @param ClientCartItemRepository $cartItemRepository
     * @param ClientSaleRepository $saleRepository
     * @param ClientCartRepository $cartRepository
     * @param AttachSalesHandler $attachSalesHandler
     */
    public function __construct(
        ClientOrderRepository $repository,
        GetOrderItemsHandler $getOrderItemsHandler,
        GetOrderDeliveryHandler $getOrderDeliveryHandler,
        GetOrderCustomerHandler $getOrderCustomerHandler,
        GetOrderPriceHandler $getOrderPriceHandler,
        OrderItemService $itemService,
        ClientCartItemRepository $cartItemRepository,
        ClientSaleRepository $saleRepository,
        ClientCartRepository $cartRepository,
        AttachSalesHandler $attachSalesHandler
    )
    {
        $this->repository = $repository;
        $this->getOrderItemsHandler = $getOrderItemsHandler;
        $this->getOrderDeliveryHandler = $getOrderDeliveryHandler;
        $this->getOrderCustomerHandler = $getOrderCustomerHandler;
        $this->getOrderPriceHandler = $getOrderPriceHandler;
        $this->itemService = $itemService;
        $this->cartItemRepository = $cartItemRepository;
        $this->saleRepository = $saleRepository;
        $this->cartRepository = $cartRepository;
        $this->attachSalesHandler = $attachSalesHandler;
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
        list($items, $itemsDetails) = $this->getOrderItemsHandler->handle($requestData['items']);

        $orderData = [
            'number' => $number,
            'hash_number' => encrypt($number),
            'user_id' => $requestData['userId'],
            'delivery' => json_encode($delivery, true),
            'customer' => json_encode($customer, true),
            'comment' => $requestData['comment']
        ];

        $order = $this->repository->store($orderData);

        $itemsDetails->each(function ($itemDetails) use ($order) {
            $storeData = Arr::collapse([$itemDetails, ['order_id' => $order->id]]);
            $this->itemService->store($storeData);
        });

        $items->each(fn ($item) => $this->cartItemRepository->forceDelete($item));


        $sales = !empty($requestData['sales'])
            ? $this->saleRepository->getRawItemsByKeys($requestData['sales'])
            : null;

        if ($sales) {
            $this->attachSalesHandler->handle($order, $sales);
            $sales->each(fn($sale) => $this->saleRepository->setStatus($sale, Sale::IN_ORDER));

            $user = auth()->user();
            if ($user && $requestData['userId'] === $user->id) {
                $this->cartRepository->syncSales($user->cart, []);
            }
        }

        return $order;
    }

    /**
     * @return string
     */
    private function getOrderNumber(): string
    {
        $length = (int) config('settings.order_number_length');
        $randLength = (int) ('1e' . $length) - 1;
        $checkExistsNumber = true;
        $number = null;
        while ($checkExistsNumber) {
            $number = substr(str_pad(sprintf('%u',crc32(microtime())), $length, rand(0, $randLength)), -$length);
            $checkExistsNumber = Order::where('number', $number)->exists();
        }

        return $number;
    }
}
