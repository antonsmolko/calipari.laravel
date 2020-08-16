<?php

namespace App\Listeners\Mail\Order;

use App\Events\Models\Order\OrderCreated;
use App\Services\Order\CmsOrderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendCreated implements ShouldQueue
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
     * @param  OrderCreated $event
     * @return void
     */
//    public function handle(OrderCreated $event)
//    {
//        $this->orderSevice->sendMail(\App\Mail\OrderInProcess::class, $event->order);
//    }

    /**
     * * Determine whether the listener should be queued.
     *
     * @param OrderCreated $event
     */
    public function shouldQueue(OrderCreated $event)
    {
        $this->orderSevice->sendMail(\App\Mail\OrderInProcess::class, $event->order);
    }
}
