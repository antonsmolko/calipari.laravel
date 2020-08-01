<?php


namespace App\Services\Payment\Handlers;


class GetPaymentResponseHandler
{
    /**
     * @param $paymentInfo
     * @return array
     */
    public function handle($paymentInfo): array
    {
        switch ($paymentInfo->getStatus()) {
            case 'succeeded':
                $paymentMethod = $paymentInfo->getPaymentMethod();
                return [
                    'status' => 'success',
                    'message' => $paymentInfo->getDescription() . ' успешно оплачен!',
                    'timeout' => 10000,
                    'payment' => $paymentMethod->saved ? $paymentMethod : null
                ];
            case 'canceled':
                $metadata = $paymentInfo->getMetadata();
                $cancellationReason = $paymentInfo->getCancellationDetails()->getReason();
                return [
                    'status' => 'canceled',
                    'title' => 'Платеж отменен!',
                    'content' =>
                        __('yandex_kassa.' . $cancellationReason) .
                        __('yandex_kassa.' . $cancellationReason . '_solution') ,
                    'hash' => $metadata->order_hash
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
}
