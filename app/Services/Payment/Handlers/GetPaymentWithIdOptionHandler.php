<?php

namespace App\Services\Payment\Handlers;

use App\Services\Order\Resources\ForPaymentClient as OrderResource;

class GetPaymentWithIdOptionHandler
{
    /**
     * @param OrderResource $order
     * @param string $paymentId
     * @return array
     */
    public function handle(OrderResource $order, string $paymentId): array
    {
        return array(
            'amount' => array(
                'value' => $order->price,
                'currency' => 'RUB',
            ),
            'capture' => true,
            'payment_method_id' => $paymentId,
            'description' => 'Заказ № ' . $order->number,
            'metadata' => array(
                'order_id' => $order->id,
                'order_number' => $order->number,
                'order_hash' => encrypt($order->number)
            )
        );
    }
}
