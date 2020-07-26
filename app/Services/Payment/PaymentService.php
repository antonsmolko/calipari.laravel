<?php


namespace App\Services\Payment;


use App\Notifications\OrderHasBeenCanceled;
use App\Notifications\OrderHasBeenPaid;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\Payment\Handlers\CreateHandler;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Notification;
use YandexCheckout\Client;
use YandexCheckout\Request\Payments\PaymentResponse;

class PaymentService
{
    private Client $client;
    private ClientOrderRepository $orderRepository;
    private CreateHandler $createHandler;

    /**
     * PaymentService constructor.
     * @param Client $client
     * @param ClientOrderRepository $orderRepository
     * @param CreateHandler $createHandler
     */
    public function __construct(
        Client $client,
        ClientOrderRepository $orderRepository,
        CreateHandler $createHandler
    )
    {
        $this->orderRepository = $orderRepository;
        $this->createHandler = $createHandler;
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

        $payment = $this->createHandler->handle($order, $this->client, $requestData['paymentMethodId']);

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
     * @return array|string[]
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
    public function getPaymentResponse(string $paymentId): array
    {
        /** @var PaymentResponse $paymentInfo */
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
            default:
                return [
                    'status' => 'warning',
                    'message' => __('yandex_kassa.response_status_unknown'),
                    'timeout' => 10000
                ];
        }
    }

    /**
     * @param array $requestData
     */
    public function notify(array $requestData)
    {
//        switch ($requestData['event']) {
//            case 'payment.succeeded':
//                // change order status to paid
//                $notify = new OrderHasBeenPaid($requestData['object']);
//                break;
//            case 'payment.canceled':
//                $notify = new OrderHasBeenCanceled($requestData['object']);
//                break;
//        }
        $notify = new OrderHasBeenCanceled($requestData);

        Notification::route('slack', env('ORDERS_SLACK_WEBHOOK_URL'))
            ->notify($notify);
    }
}
