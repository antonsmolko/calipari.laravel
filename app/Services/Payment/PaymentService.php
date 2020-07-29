<?php


namespace App\Services\Payment;


use App\Services\Payment\Handlers\GetPaymentOptionHandler;
use App\Services\Payment\Handlers\GetPaymentReportHandler;
use App\Services\Payment\Handlers\GetPaymentResponseHandler;
use App\Services\Order\Resources\ForPaymentClient as OrderResource;
use YandexCheckout\Client;

class PaymentService
{
    private Client $client;
    private GetPaymentOptionHandler $getPaymentOptionHandler;
    private GetPaymentResponseHandler $getPaymentResponseHandler;
    private GetPaymentReportHandler $getPaymentReportHandler;

    /**
     * PaymentService constructor.
     * @param Client $client
     * @param GetPaymentOptionHandler $getPaymentOptionHandler
     * @param GetPaymentReportHandler $getPaymentReportHandler
     * @param GetPaymentResponseHandler $getPaymentResponseHandler
     */
    public function __construct(
        Client $client,
        GetPaymentOptionHandler $getPaymentOptionHandler,
        GetPaymentReportHandler $getPaymentReportHandler,
        GetPaymentResponseHandler $getPaymentResponseHandler
    )
    {
        $this->getPaymentOptionHandler = $getPaymentOptionHandler;
        $this->getPaymentResponseHandler = $getPaymentResponseHandler;
        $this->getPaymentReportHandler = $getPaymentReportHandler;
        $this->client = $client;
        $this->client->setAuth(env('YANDEX_KASSA_SHOP_ID'), env('YANDEX_KASSA_PASSWORD'));
    }

    /**
     * @param OrderResource $order
     * @return \YandexCheckout\Request\Payments\CreatePaymentResponse|null
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function create(OrderResource $order)
    {
        $options = $this->getPaymentOptionHandler->handle($order);

        return $this->client->createPayment($options, uniqid('', true));
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
    public function getPaymentResponse(string $paymentId): array
    {
        $paymentInfo = $this->client->getPaymentInfo($paymentId);

        return $paymentInfo
            ? $this->getPaymentResponseHandler->handle($paymentInfo)
            : array(
                'status' => 'warning',
                'message' => __('yandex_kassa.no_payment_respond'),
                'timeout' => 10000
            );
    }

    /**
     * @param string $paymentId
     * @param int $amount
     * @param string $description
     * @return \YandexCheckout\Request\Refunds\CreateRefundResponse|null
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function refund(string $paymentId, int $amount, string $description)
    {
        return $this->client->createRefund(
            array(
                'amount' => array('value' => $amount),
                'payment_id' => $paymentId,
                'description' => $description
            ),
            uniqid('', true)
        );
    }
}
