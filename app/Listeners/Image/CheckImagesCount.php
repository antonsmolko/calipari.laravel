<?php

namespace App\Listeners\Image;


use App\Services\ArtCollection\CmsArtCollectionService;
use App\Services\Category\CmsCategoryService;
use App\Services\ColorCollection\CmsColorCollectionService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CheckImagesCount implements ShouldQueue
{
    private CmsCategoryService $categoryService;
    private CmsColorCollectionService $colorCollectionService;
    private CmsArtCollectionService $artCollectionService;

    /**
     * CheckImagesCount constructor.
     * @param CmsCategoryService $categoryService
     * @param CmsColorCollectionService $colorCollectionService
     */
    public function __construct(
        CmsCategoryService $categoryService,
        CmsColorCollectionService $colorCollectionService,
        CmsArtCollectionService $artCollectionService
    )
    {
        $this->categoryService = $categoryService;
        $this->colorCollectionService = $colorCollectionService;
        $this->artCollectionService = $artCollectionService;
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
        $this->colorCollectionService->processUnpublishItems();
        $this->artCollectionService->processUnpublishItems();
    }
}
