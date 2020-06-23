<?php

namespace App\Listeners\Mail\Order;

use App\Events\Models\Order\OrderCanceled;
use App\Services\Order\CmsOrderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendCanceled implements ShouldQueue
{
    use InteractsWithQueue;

    private CmsOrderService $orderSevice;

    /**
     * SendCreated constructor.
     * @param CmsOrderService $orderSevice
     */
    public function __construct(CmsOrderService $orderSevice)
    {
        $this->orderSevice = $orderSevice;
    }

    /**
     * Handle the event.
     *
     * @param  OrderCanceled $event
     * @return void
     */
    public function handle(OrderCanceled $event)
    {
        $this->orderSevice->sendMail(\App\Mail\ChangeOrderStatus::class, $event->order);
    }
}
