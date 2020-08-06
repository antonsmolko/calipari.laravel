<?php

namespace App\Listeners\Order;

use App\Events\Auth\Registered;
use App\Services\Order\CmsOrderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SyncWithUser implements ShouldQueue
{
    private CmsOrderService $service;

    /**
     * Create the event listener.
     * @param CmsOrderService $service
     */
    public function __construct(CmsOrderService $service)
    {
        $this->service = $service;
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        //
    }

    public function shouldQueue(Registered $event)
    {
        $this->service->syncWithoutRegistrationItemsWithUser($event->user);
    }
}
