<?php


namespace App\Services\Payment;


use App\Models\Order;
use App\Notifications\OrderPaymentCanceled;
use App\Notifications\OrderPaymentSucceeded;
use App\Notifications\OrderPaymentUnknownStatus;
use App\Services\Order\ClientOrderService;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\Payment\Handlers\CreateHandler;
use App\Services\Payment\Handlers\GetPaymentReportHandler;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Notification;
use YandexCheckout\Client;
use YandexCheckout\Request\Payments\PaymentResponse;

class PaymentService
{
    private Client $client;
    private ClientOrderRepository $orderRepository;
    private ClientOrderService $orderService;
    private CreateHandler $createHandler;
    private GetPaymentReportHandler $getPaymentReportHandler;

    /**
     * PaymentService constructor.
     * @param Client $client
     * @param ClientOrderRepository $orderRepository
     * @param ClientOrderService $orderService
     * @param CreateHandler $createHandler
     * @param GetPaymentReportHandler $getPaymentReportHandler
     */
    public function __construct(
        Client $client,
        ClientOrderRepository $orderRepository,
        ClientOrderService $orderService,
        CreateHandler $createHandler,
        GetPaymentReportHandler $getPaymentReportHandler
    )
    {
        $this->orderRepository = $orderRepository;
        $this->orderService = $orderService;
        $this->createHandler = $createHandler;
        $this->getPaymentReportHandler = $getPaymentReportHandler;
        $this->client = $client;
        $this->client->setAuth(env('YANDEX_KASSA_SHOP_ID'), env('YANDEX_KASSA_PASSWORD'));
    }

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
    public function create(array $requestData): array
    {
        try {
            $orderNumber = decrypt($requestData['hash']);
        } catch (DecryptException $e) {
            abort(404);
        }

        $order = $this->orderRepository->getItemForPayment($orderNumber);

        if ($order->paid) {
            return [
                'status' => 'paid',
                'payment' => [
                    'description' => 'Заказ № ' . $orderNumber
                ]
            ];
        }

        $payment = $this->createHandler
            ->handle($order, $this->client, $requestData['paymentMethodId']);

        $this->orderRepository
            ->update($order, ['completion_token' => $payment->confirmation->confirmation_token]);

        return [
            'status' => 'created',
            'payment' => $payment,
        ];
    }

    /**
     * @param string $token
     * @return int
     */
    public function confirmCompletion(string $token): int
    {
        $order = $this->orderRepository->getItemByCompletionToken($token);
        $this->orderRepository->update($order, ['completion_token' => null]);

        return $order->number;
    }

    /**
     * @param string $paymentId
     * @return array
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ExtensionNotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function getPaymentResponse(string $paymentId)
    {
        $paymentInfo = $this->client->getPaymentInfo($paymentId);

        if (!$paymentInfo) {
            return [
                'status' => 'warning',
                'message' => __('yandex_kassa.no_payment_respond'),
                'timeout' => 10000
            ];
        }

        switch ($paymentInfo->getStatus()) {
            case 'succeeded':
                $paymentMethod = $paymentInfo->getPaymentMethod();
                return [
                    'status' => 'success',
                    'message' => $paymentInfo->getDescription() . ' успешно оплачен!',
                    'timeout' => 10000,
                    'paymentMethodId' => $paymentMethod->saved ? $paymentMethod->id : null
                ];
            case 'canceled':
                $metadata = $paymentInfo->getMetadata();
                return [
                    'status' => 'canceled',
                    'title' => 'Платеж отменен!',
                    'content' => __('yandex_kassa.' . $paymentInfo->getCancellationDetails()->getReason()),
                    'hash' => $metadata->orderHash
                ];
            case 'pending':
                return [
                    'status' => 'success',
                    'title' => 'Платеж обрабатывается!',
                    'message' => __('yandex_kassa.payment_panding'),
                    'timeout' => 10000
                ];
            default:
                return [
                    'status' => 'warning',
                    'message' => __('yandex_kassa.response_status_unknown'),
                    'timeout' => 10000
                ];
        }
    }

    /**
     * @param array $paymentInfo
     */
    public function notify(array $paymentInfo)
    {
        $paymentReport = $this->getPaymentReportHandler->handle($paymentInfo);

        switch ($paymentInfo['status']) {
            case 'succeeded':
                $orderId = $paymentInfo['metadata']['orderId'];
                $this->orderService->changeStatus($orderId, Order::PAID_STATUS);
                $notify = new OrderPaymentSucceeded($paymentReport);
                break;
            case 'canceled':
                $notify = new OrderPaymentCanceled($paymentReport);
                break;
            default:
                $notify = new OrderPaymentUnknownStatus(json_decode(json_encode($paymentInfo), true));
        }

        Notification::route('slack', env('ORDERS_SLACK_WEBHOOK_URL'))
            ->notify($notify);
    }
}
