<?php


namespace App\Services\Category;


use App\Services\Base\Category\CmsBaseCategoryService;
use App\Services\Base\Resource\Handlers\ClearCacheByTagHandler;
use App\Services\Category\Handlers\DestroyHandler;
use App\Services\Category\Handlers\StoreHandler;
use App\Services\Category\Handlers\UpdateHandler;
use App\Services\Image\CmsImageService;
use App\Services\Image\Handlers\UploadHandler;
use App\Services\Category\Repositories\CmsCategoryRepository;
use Illuminate\Database\Eloquent\Collection;

class CmsCategoryService extends CmsBaseCategoryService
{
    private UpdateHandler $updateHandler;
    private StoreHandler $storeHandler;

    private DestroyHandler $destroyHandler;

    /**
     * CmsCategoryService constructor.
     * @param CmsCategoryRepository $repository
     * @param ClearCacheByTagHandler $clearCacheByTagHandler
     * @param StoreHandler $storeHandler
     * @param UploadHandler $uploadHandler
     * @param CmsImageService $imageService
     * @param UpdateHandler $updateHandler
     */
    public function __construct(
        CmsCategoryRepository $repository,
        ClearCacheByTagHandler $clearCacheByTagHandler,
        StoreHandler $storeHandler,
        UploadHandler $uploadHandler,
        CmsImageService $imageService,
        UpdateHandler $updateHandler)
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $uploadHandler,
            $imageService);
        $this->storeHandler = $storeHandler;
        $this->updateHandler = $updateHandler;
    }

    /**
     * @param string $type
     * @return mixed
     */
    public function getItemsByType(string $type)
    {
        return $this->repository->getItemsByType($type);
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function store(array $storeData)
    {
        return $this->storeHandler->handle($storeData);
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return mixed
     */
    public function update(int $id, array $updateData)
    {
        $item = $this->repository->getItem($id);

        return $this->updateHandler->handle($item, $updateData);
    }

    /**
     * @param int $id
     * @return int
     * @throws \Exception
     */
    public function destroy(int $id): int
    {
        $item = $this->repository->getItem($id);

        return $this->destroyHandler->handle($item);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function publish(int $id)
    {
        $item = $this->repository->getItem($id);

        if (!$item->publishedImages->count()) {
            abort(422, __('common.unable_publish_category_without_publish_images'));
        }

        return $this->repository->publish($item);
    }
}
