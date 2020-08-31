<?php

namespace App\Listeners\Mail\Order;


use App\Services\Order\CmsOrderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class FeedbackReceived implements ShouldQueue
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
     * * Determine whether the listener should be queued.
     *
     * @param $event
     */
    public function shouldQueue($event)
    {
        $this->orderSevice->sendMail(\App\Mail\Order\FeedbackReceived::class, $event->order);
    }
}
