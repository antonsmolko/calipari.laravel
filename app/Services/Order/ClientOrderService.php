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
use App\Services\Payment\Handlers\GetPaymentResponseHandler;
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
    private GetPaymentResponseHandler $getPaymentResponseHandler;

    /**
     * ClientOrderService constructor.
     * @param ClientOrderRepository $repository
     * @param OrderStatusRepository $orderStatusRepository
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     * @param ClientCartService $cartService
     * @param PaymentService $paymentService
     * @param CreatePaymentHandler $createPaymentHandler
     * @param GetPaymentResponseHandler $getPaymentResponseHandler
     */
    public function __construct(
        ClientOrderRepository $repository,
        OrderStatusRepository $orderStatusRepository,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler,
        ClientCartService $cartService,
        PaymentService $paymentService,
        CreatePaymentHandler $createPaymentHandler,
        GetPaymentResponseHandler $getPaymentResponseHandler
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
        $this->cartService = $cartService;
        $this->orderStatusRepository = $orderStatusRepository;
        $this->paymentService = $paymentService;
        $this->createPaymentHandler = $createPaymentHandler;
        $this->getPaymentResponseHandler = $getPaymentResponseHandler;
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
     * @param string $hash
     * @return array
     */
    public function getItemByHashForPayment(string $hash): array
    {
        try {
            $number = decrypt($hash);
        } catch (DecryptException $e) {
            abort(404);
        }

        $order = $this->repository->getItemForPayment($number);
        $status = !$order->paid ? 'enabled' : 'paid';

        return array(
                'status' => $status,
                'order' => $order
            );
    }

    /**
     * @param string $number
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
    public function pay(string $number): array
    {
        $order = $this->repository->getItemForPayment($number);

        return !$order->paid
            ? $this->createPaymentHandler->handle($order)
            : array(
                'status' => 'paid',
                'payment' => array(
                    'description' => 'Заказ № ' . $number
                )
            );
    }

    /**
     * @param string $number
     * @param string $paymentId
     * @return array|\YandexCheckout\Request\Payments\CreatePaymentResponse|null
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function payWithId(string $number, string $paymentId)
    {
        $order = $this->repository->getItemForPayment($number);
        $payment = $this->paymentService->createWithId($order, $paymentId);

        return $this->getPaymentResponseHandler->handle($payment);
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
