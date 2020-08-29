<?php

namespace App\Listeners\Delivery;


use App\Services\Delivery\CmsDeliveryService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CheckPickupsRequirementCount implements ShouldQueue
{
    private CmsDeliveryService $deliveryService;

    /**
     * CheckPickupsRequirementCount constructor.
     * @param CmsDeliveryService $deliveryService
     */
    public function __construct(
        CmsDeliveryService $deliveryService
    )
    {
        $this->deliveryService = $deliveryService;
    }

    /**
     * Handle the event.
     *
     * @return void
     */
    public function handle()
    {
        //
    }

    public function shouldQueue()
    {
        $this->deliveryService->processUnpublishItems();
    }
}
