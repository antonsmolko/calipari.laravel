<?php

namespace App\Listeners\Image;

use App\Events\Models\Model as ModelEvent;
use App\Services\Category\CmsCategoryService;
use App\Services\ColorCollection\CmsColorCollectionService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CheckImagesCount implements ShouldQueue
{
    private CmsCategoryService $categoryService;
    private CmsColorCollectionService $collectionService;

    /**
     * CheckImagesCount constructor.
     * @param CmsCategoryService $categoryService
     * @param CmsColorCollectionService $collectionService
     */
    public function __construct(
        CmsCategoryService $categoryService,
        CmsColorCollectionService $collectionService
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
