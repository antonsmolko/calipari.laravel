<?php

namespace App\Listeners\Image;

use App\Events\Models\Model as ModelEvent;
use App\Services\Category\CmsCategoryService;
use App\Services\Collection\CmsCollectionService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CheckImagesCount implements ShouldQueue
{
    private CmsCategoryService $categoryService;
    private CmsCollectionService $collectionService;

    /**
     * CheckImagesCount constructor.
     * @param CmsCategoryService $categoryService
     * @param CmsCollectionService $collectionService
     */
    public function __construct(
        CmsCategoryService $categoryService,
        CmsCollectionService $collectionService
    )
    {
        $this->categoryService = $categoryService;
        $this->collectionService = $collectionService;
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
        $this->categoryService->processUnpublishItems();
        $this->collectionService->processUnpublishItems();
    }
}
