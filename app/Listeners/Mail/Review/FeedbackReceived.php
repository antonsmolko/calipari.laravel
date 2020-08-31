<?php

namespace App\Listeners\Mail\Review;


use App\Services\Order\CmsOrderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class FeedbackReceived implements ShouldQueue
{
    use InteractsWithQueue;

    private CmsOrderService $orderService;

    /**
     * FeedbackReceived constructor.
     * @param CmsOrderService $orderService
     */
    public function __construct(CmsOrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    /**
     * * Determine whether the listener should be queued.
     *
     * @param $event
     */
    public function shouldQueue($event)
    {
        $order = $event->review->order;

        $this->orderService->sendMail(\App\Mail\Order\FeedbackReceived::class, $order);
    }
}
