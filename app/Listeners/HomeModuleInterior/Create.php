<?php

namespace App\Listeners\HomeModuleInterior;


use App\Events\Models\Category\CategoryCreated;
use App\Services\HomeModuleInterior\CmsHomeModuleInteriorService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class Create implements ShouldQueue
{
    private CmsHomeModuleInteriorService $service;

    /**
     * CheckImagesCount constructor.
     * @param CmsHomeModuleInteriorService $service
     */
    public function __construct(CmsHomeModuleInteriorService $service)
    {
        $this->service = $service;
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

    public function shouldQueue(CategoryCreated $event)
    {
        if ($event->model->type === 'interiors') {
            $this->service->store([
                'interior_id' => $event->model->id,
                'title' => $event->model->title
            ]);
        }
    }
}
