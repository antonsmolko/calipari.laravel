<?php


namespace App\Services\Order;


use App\Events\Models\Order\OrderCreated;
use App\Models\Order;
use App\Notifications\ReceivedAnOrder;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cart\ClientCartService;
use App\Services\Order\Handlers\CreatePaymentHandler;
use App\Services\Order\Handlers\StoreHandler;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;
use App\Services\Payment\PaymentService;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Notification;

class ClientOrderService extends ClientBaseResourceService
{
    private StoreHandler $storeHandler;
    private ClientCartService $cartService;
    private OrderStatusRepository $orderStatusRepository;
    private PaymentService $paymentService;
    private CreatePaymentHandler $createPaymentHandler;

    /**
     * ClientOrderService constructor.
     * @param ClientOrderRepository $repository
     * @param OrderStatusRepository $orderStatusRepository
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     * @param ClientCartService $cartService
     * @param PaymentService $paymentService
     * @param CreatePaymentHandler $createPaymentHandler
     */
    public function __construct(
        ClientOrderRepository $repository,
        OrderStatusRepository $orderStatusRepository,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler,
        ClientCartService $cartService,
        PaymentService $paymentService,
        CreatePaymentHandler $createPaymentHandler
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
        $this->cartService = $cartService;
        $this->orderStatusRepository = $orderStatusRepository;
        $this->paymentService = $paymentService;
        $this->createPaymentHandler = $createPaymentHandler;
    }

    /**
     * @param array $requestData
     * @return int
     */
    public function store(array $requestData): int
    {
        $order = $this->storeHandler->handle($requestData);

        if (auth()->user()) {
            $this->cartService->update([]);
        }

        event(new OrderCreated($order));

        Notification::route('slack', env('SLACK_WEBHOOK_URL_ORDERS'))
            ->notify(new ReceivedAnOrder($order));

        return $order->number;
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return mixed
     */
    public function update(int $id, array $updateData)
    {
        $order = $this->repository->getItem($id);

        return $this->repository->update($order, $updateData);
    }

//    /**
//     * @param int $id
//     * @param string $statusAlias
//     * @return ClientOrderResource
//     */
//    public function changeStatus(int $id, string $statusAlias)
//    {
//        $order = $this->repository->getItem($id);
//        $status = $this->orderStatusRepository->getItemByAlias($statusAlias);
//
//        return $this->repository->changeStatus($order, $status->id);
//    }

    /**
     * @param array $requestData
     * @return array
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function pay(array $requestData): array
    {
        try {
            $orderNumber = decrypt($requestData['hash']);
        } catch (DecryptException $e) {
            abort(404);
        }

        $order = $this->repository->getItemForPayment($orderNumber);

        return !$order->paid
            ? $this->createPaymentHandler->handle($order)
            : array(
                'status' => 'paid',
                'payment' => array(
                    'description' => 'Заказ № ' . $orderNumber
                )
            );
    }

    /**
     * @param string $token
     * @return int
     */
    public function confirmPaymentCompletion(string $token): int
    {
        $order = $this->repository->getItemByCompletionToken($token);
        $this->repository->update($order, ['completion_token' => null]);

        return $order->number;
    }

    /**
     * @param int $id
     * @param string $paymentId
     * @return bool
     */
    public function makePaid(int $id, string $paymentId): bool
    {
        $order = $this->repository->getItem($id);

        if ($order->paid) {
            return false;
        }

        $status = $this->orderStatusRepository->getItemByAlias(Order::PAID_STATUS);
        $this->repository->changeStatus($order, $status->id);
        $this->repository->update($order, ['payment_id' => $paymentId]);

        return true;
    }
}
