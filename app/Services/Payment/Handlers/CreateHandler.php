<?php

namespace App\Services\Payment\Handlers;

use App\Services\Order\Resources\ForPaymentClient as ForPaymentResource;
use Illuminate\Support\Arr;
use YandexCheckout\Client;

class CreateHandler
{
    /**
     * @param ForPaymentResource $order
     * @param Client $client
     * @param string|null $paymentMethodId
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
    public function handle(ForPaymentResource $order, Client $client, string $paymentMethodId = null)
    {
        $paymentOptions = array(
            'amount' => array(
                'value' => 1
            ),
            'confirmation' => array(
                'type' => 'embedded'
            ),
            'capture' => true,
            'description' => 'Заказ № ' . $order->number,
            'metadata' => array(
                'orderId' => $order->id,
                'orderNumber' => $order->number,
                'orderHash' => encrypt($order->number)
            )
        );

        if ($paymentMethodId) {
            $paymentOptions = Arr::collapse([$paymentOptions, ['payment_method_id' => $paymentMethodId]]);
        }

        return $client->createPayment($paymentOptions, uniqid('', true));
    }
}
