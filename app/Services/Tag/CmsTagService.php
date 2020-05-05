<?php


namespace App\Services\Tag;


use App\Services\Base\Category\Handlers\GetExcludedImagesHandler;
use App\Services\Base\Category\Handlers\GetImagesHandler;
use App\Services\Base\Category\Handlers\UploadHandler;
use App\Services\Base\Resource\Handlers\ClearCacheByTagHandler;
use App\Services\Cache\Tag;
use App\Services\SubCategory\SubCategoryService;
use App\Services\Tag\Repositories\CmsTagRepository;

class CmsTagService extends SubCategoryService
{
    /**
     * TagService constructor.
     * @param CmsTagRepository $repository
     * @param ClearCacheByTagHandler $clearCacheByTagHandler
     * @param UploadHandler $uploadHandler
     * @param GetImagesHandler $showImagesHandler
     * @param GetExcludedImagesHandler $showExcludedImagesHandler
     */
    public function __construct(
        CmsTagRepository $repository,
        ClearCacheByTagHandler $clearCacheByTagHandler,
        UploadHandler $uploadHandler,
        GetImagesHandler $showImagesHandler,
        GetExcludedImagesHandler $showExcludedImagesHandler
    )
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $uploadHandler,
            $showImagesHandler,
            $showExcludedImagesHandler
        );
        $this->cacheTag = Tag::TAGS_TAG;
    }
}
