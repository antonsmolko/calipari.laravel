<?php

namespace App\Listeners\Sale;


use App\Events\Models\Order\OrderSetStatus;
use App\Services\Sale\CmsSaleService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SetStatus implements ShouldQueue
{
    use InteractsWithQueue;

    private CmsSaleService $service;

    /**
     * SetStatus constructor.
     * @param CmsSaleService $service
     */
    public function __construct(CmsSaleService $service)
    {
        $this->service = $service;
    }

    /**
     * * Determine whether the listener should be queued.
     *
     * @param OrderSetStatus $event
     */
    public function shouldQueue($event)
    {
        $order = $event->order;
        $orderCurrentStatus = $order->getCurrentStatus();

        if ($order->sales->count()) {
            $this->service->setItemsStatus($order->sales, $orderCurrentStatus->alias);
        }
    }
}
