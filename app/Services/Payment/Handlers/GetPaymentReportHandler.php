<?php


namespace App\Services\Payment\Handlers;


use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use YandexCheckout\Request\Payments\PaymentResponse;

class GetPaymentReportHandler
{
    /**
     * @param PaymentResponse $response
     * @return array
     */
    public function handle(PaymentResponse $response): array
    {
        $paymentMethod = $response->getPaymentMethod();
        $jsonSerializePaymentMethod = $paymentMethod->jsonSerialize();

        $method = [];

        if ($paymentMethod && $paymentMethod->getType() === 'bank_card') {
            Arr::collapse([$method, [
                'card_number' => $this->getFormatCardNumber($jsonSerializePaymentMethod),
                'card_expiry' => $jsonSerializePaymentMethod['expiry_month'] . '/' . $jsonSerializePaymentMethod['expiry_year'],
                'card_type' => $jsonSerializePaymentMethod['card_type'],
                'saved' => $jsonSerializePaymentMethod['saved'] ? 'Да' : 'Нет'
            ]]);
        }

        return [
            'id' => $response->getId(),
            'status' => $response->getStatus(),
            'description' => $response->getDescription(),
            'order_number' => $response->getMetadata()->orderNumber,
            'amount' => $response->getAmount()->value . ' ₽',
            ...$method
        ];
    }

    /**
     * @param array $paymentMethod
     * @return string
     */
    private function getFormatCardNumber(array $paymentMethod): string
    {
        $cardRegExp = '/[0-9*]{4}/';
        $cardNumber = $paymentMethod['first6'] . '******' . $paymentMethod['last4'];

        return Str::of($cardNumber)->matchAll($cardRegExp)->join(' ');
    }
}
