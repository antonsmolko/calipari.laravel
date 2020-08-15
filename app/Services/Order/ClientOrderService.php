<?php


namespace App\Services\Order;


use App\Events\Models\Order\OrderCreated;
use App\Models\Order;
use App\Notifications\ReceivedAnOrder;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Card\CardService;
use App\Services\Order\Handlers\CreatePaymentHandler;
use App\Services\Order\Handlers\StoreHandler;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;
use App\Services\Payment\Handlers\GetPaymentResponseHandler;
use App\Services\Payment\PaymentService;
use App\Services\User\ClientUserService;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Notification;

class ClientOrderService extends ClientBaseResourceService
{
    private StoreHandler $storeHandler;
    private OrderStatusRepository $orderStatusRepository;
    private PaymentService $paymentService;
    private CreatePaymentHandler $createPaymentHandler;
    private GetPaymentResponseHandler $getPaymentResponseHandler;
    private ClientUserService $userService;
    private CardService $cardService;

    /**
     * ClientOrderService constructor.
     * @param ClientOrderRepository $repository
     * @param OrderStatusRepository $orderStatusRepository
     * @param ClientUserService $userService
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     * @param PaymentService $paymentService
     * @param CreatePaymentHandler $createPaymentHandler
     * @param GetPaymentResponseHandler $getPaymentResponseHandler
     * @param CardService $cardService
     */
    public function __construct(
        ClientOrderRepository $repository,
        OrderStatusRepository $orderStatusRepository,
        ClientUserService $userService,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler,
        PaymentService $paymentService,
        CreatePaymentHandler $createPaymentHandler,
        GetPaymentResponseHandler $getPaymentResponseHandler,
        CardService $cardService
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
        $this->orderStatusRepository = $orderStatusRepository;
        $this->paymentService = $paymentService;
        $this->createPaymentHandler = $createPaymentHandler;
        $this->getPaymentResponseHandler = $getPaymentResponseHandler;
        $this->userService = $userService;
        $this->cardService = $cardService;
    }

    /**
     * @param array $requestData
     * @return int
     */
    public function store(array $requestData): int
    {
        $order = $this->storeHandler->handle($requestData);

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

        return [
            'status' => $status,
            'order' => $order
        ];
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
    public function paymentCreate(string $number): array
    {
        $order = $this->repository->getItemForPayment($number);

        return $this->createPaymentHandler->handle($order);
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
     * @param array $paymentInfo
     * @return bool
     */
    public function makePaid(int $id, array $paymentInfo): bool
    {
        $order = $this->repository->getItem($id);

        if ($order->paid) {
            return false;
        }

        if (!empty($paymentInfo['payment_method']) && $paymentInfo['payment_method']['saved']) {
            $user = $order->user;

            if ($user) {
                $this->cardService->store($user, $paymentInfo['payment_method']);
            }
        }

        $status = $this->orderStatusRepository->getItemByAlias(Order::PAID_STATUS);
        $this->repository->changeStatus($order, $status->id);
        $this->repository->update($order, ['payment_id' => $paymentInfo['id']]);

        return true;
    }
}
