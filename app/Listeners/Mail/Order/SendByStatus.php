<?php

namespace App\Listeners\Mail\Order;


use App\Events\Models\Order\OrderCreated;
use App\Events\Models\Order\OrderSetStatus;
use App\Services\Order\CmsOrderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendByStatus implements ShouldQueue
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

//    /**
//     * Handle the event.
//     *
//     * @param  OrderSetStatus $event
//     * @return void
//     */
//    public function handle(OrderCreated $event)
//    {
//        $this->orderSevice->sendMail(\App\Mail\OrderInProcess::class, $event->order);
//    }

    /**
     * * Determine whether the listener should be queued.
     *
     * @param OrderSetStatus|OrderCreated $event
     */
    public function shouldQueue($event)
    {
        $this->orderSevice->sendByStatusMail($event->order);
    }
}
