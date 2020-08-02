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
        $additionReport = [];

        if ($paymentMethod && $paymentMethod['type'] === 'bank_card') {
            if (!empty($paymentMethod['card'])) {
                $additionReport = Arr::collapse([$additionReport, [
                    'card_number' => $this->getFormatCardNumber($paymentMethod['card']),
                    'card_expiry' => $paymentMethod['card']['expiry_month'] . '/' . $paymentMethod['card']['expiry_year'],
                    'card_type' => $paymentMethod['card']['card_type']
                ]]);
            }
        }

        if (!empty($paymentInfo['cancellation_details'])) {
            $additionReport = Arr::collapse([$additionReport, [
                'cancellation_reason' => __('yandex_kassa.' . $paymentInfo['cancellation_details']['reason'])
            ]]);
        }

        if (!empty($paymentInfo['metadata']) && !empty($paymentInfo['metadata']['order_number'])) {
            $additionReport = Arr::collapse([[
                'order_number' => $paymentInfo['metadata']['order_number'],
            ], $additionReport]);
        }

        return Arr::collapse([[
            'id' => $paymentInfo['id'],
            'status' => $paymentInfo['status'],
            'amount' => $paymentInfo['amount']['value'] . ' ₽',
        ], $additionReport]);
    }

    /**
     * @param array $paymentCard
     * @return string
     */
    private function getFormatCardNumber(array $paymentCard): string
    {
        $cardRegExp = '/[0-9*]{4}/';
        $cardNumber = $paymentCard['first6'] . '******' . $paymentCard['last4'];

        return Str::of($cardNumber)->matchAll($cardRegExp)->join(' ');
    }
}
