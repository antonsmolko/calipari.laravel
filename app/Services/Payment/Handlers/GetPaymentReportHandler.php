<?php


namespace App\Services\Payment\Handlers;


use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class GetPaymentReportHandler
{
    /**
     * @param array $paymentInfo
     * @return array
     */
    public function handle(array $paymentInfo): array
    {
        $paymentMethod = !empty($paymentInfo['payment_method']) ? $paymentInfo['payment_method'] : null;

        $method = [];

        if ($paymentMethod && $paymentMethod['type'] === 'bank_card') {
            if (!empty($paymentMethod['card'])) {
                Arr::collapse([$method, [
                    'card_number' => $this->getFormatCardNumber($paymentMethod),
                    'card_expiry' => $paymentMethod['card']['expiry_month'] . '/' . $paymentMethod['card']['expiry_year'],
                    'card_type' => $paymentMethod['card']['card_type']
                ]]);
            }
            Arr::collapse([$method, [
                'saved' => $paymentMethod['saved'] ? 'Да' : 'Нет'
            ]]);
        }

        return [
            'id' => $paymentInfo['id'],
            'status' => $paymentInfo['status'],
            'description' => $paymentInfo['description'],
            'order_number' => $paymentInfo['metadata']['orderNumber'],
            'amount' => $paymentInfo['amount']['value'] . ' ₽',
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
        $cardNumber = $paymentMethod['card']['first6'] . '******' . $paymentMethod['card']['last4'];

        return Str::of($cardNumber)->matchAll($cardRegExp)->join(' ');
    }
}
