<?php


namespace App\Services\SubCategory;


use App\Services\Base\Category\CmsBaseCategoryService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Image\Handlers\UploadHandler;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Image\CmsImageService;
use App\Services\SubCategory\Repositories\SubCategoryRepository;

abstract class SubCategoryService extends CmsBaseCategoryService
{
    /**
     * SubCategoryService constructor.
     * @param SubCategoryRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param UploadHandler $uploadHandler
     * @param CmsImageService $imageService
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        SubCategoryRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        UploadHandler $uploadHandler,
        CmsImageService $imageService,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $uploadHandler,
            $imageService,
            $cacheKeyManager
        );
    }
}
