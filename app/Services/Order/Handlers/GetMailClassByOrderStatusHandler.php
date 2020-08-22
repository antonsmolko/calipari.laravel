<?php


namespace App\Services\Order\Handlers;


class GetMailClassByOrderStatusHandler
{
    /**
     * @param string $status
     * @return string
     */
    public function handle(string $status)
    {
        switch ($status) {
            case 'confirmed':
                return \App\Mail\Order\Confirmed::class;
            case 'canceled':
                return \App\Mail\Order\Canceled::class;
            case 'paid':
                return \App\Mail\Order\Paid::class;
            case 'shipped':
                return \App\Mail\Order\Shipped::class;
            case 'delivered':
                return \App\Mail\Order\Delivered::class;
            case 'completed':
                return \App\Mail\Order\Completed::class;
            case 'partially_refunded':
                return \App\Mail\Order\PartiallyRefunded::class;
            case 'refunded':
                return \App\Mail\Order\Refunded::class;
            default:
                return null;
        }
    }
}
