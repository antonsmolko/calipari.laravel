<?php


namespace App\Services\Category\Handlers;


use App\Models\Category;
use App\Services\Category\Repositories\CmsCategoryRepository;
use App\Services\HomeModuleInterior\Handlers\InteriorDestroyHandler;
use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorRepository;

class DestroyHandler
{
    private CmsCategoryRepository $repository;
    private InteriorDestroyHandler $moduleInteriorDestroyHandler;
    private CmsHomeModuleInteriorRepository $homeModuleInteriorRepository;

    /**
     * DestroyHandler constructor.
     * @param CmsCategoryRepository $repository
     * @param InteriorDestroyHandler $moduleInteriorDestroyHandler
     * @param CmsHomeModuleInteriorRepository $homeModuleInteriorRepository
     */
    public function __construct(
        CmsCategoryRepository $repository,
        InteriorDestroyHandler $moduleInteriorDestroyHandler,
        CmsHomeModuleInteriorRepository $homeModuleInteriorRepository
    )
    {
        $this->repository = $repository;
        $this->moduleInteriorDestroyHandler = $moduleInteriorDestroyHandler;
        $this->homeModuleInteriorRepository = $homeModuleInteriorRepository;
    }

    /**
     * @param Category $category
     * @return int
     */
    public function handle(Category $category): int
    {
        uploader()->remove($category->image_path);

        if ($category->type === 'interior') {
            $moduleInteriorItem = $this->homeModuleInteriorRepository->getItemByInteriorId($category->id);
            $this->moduleInteriorDestroyHandler->handle($moduleInteriorItem);
        }
        return $this->repository->destroy($category);
    }
}
