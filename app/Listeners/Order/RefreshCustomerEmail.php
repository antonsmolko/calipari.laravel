<?php

namespace App\Listeners\Order;

use App\Events\Auth\ChangeEmail;
use App\Services\Order\CmsOrderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RefreshCustomerEmail
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

    public function shouldQueue(ChangeEmail $event)
    {
        $this->service->refreshCustomerEmail($event->user);
    }
}
