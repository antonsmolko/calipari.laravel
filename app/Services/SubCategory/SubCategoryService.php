<?php


namespace App\Services\SubCategory;


use App\Services\Base\Category\CmsBaseCategoryService;
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
     */
    public function __construct(
        SubCategoryRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        UploadHandler $uploadHandler,
        CmsImageService $imageService
    )
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $uploadHandler,
            $imageService
        );
    }
}
