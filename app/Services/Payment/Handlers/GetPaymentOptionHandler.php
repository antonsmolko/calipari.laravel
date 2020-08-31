<?php

namespace App\Services\Payment\Handlers;

use App\Services\Order\Resources\ByHashClient as OrderResource;

class GetPaymentOptionHandler
{
    /**
     * @param OrderResource $order
     * @return array
     */
    public function handle(OrderResource $order): array
    {
        return array(
            'amount' => array(
                'value' => $order->price
            ),
            'confirmation' => array(
                'type' => 'embedded'
            ),
            'capture' => true,
            'description' => 'Заказ № ' . $order->number,
            'metadata' => array(
                'order_id' => $order->id,
                'order_number' => $order->number,
                'order_hash' => encrypt($order->number)
            )
        );
    }
}
