<?php


namespace App\Services\WorkExample;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\WorkExample\Handlers\DeleteImageHandler;
use App\Services\WorkExample\Handlers\StoreHandler;
use App\Services\WorkExample\Handlers\UpdateHandler;
use App\Services\WorkExample\Handlers\UploadHandler;
use App\Services\WorkExample\Repositories\CmsWorkExampleRepository;
use App\Services\WorkExample\Handlers\DeleteHandler;

class CmsWorkExampleService extends CmsBaseResourceService
{
    private StoreHandler $storeHandler;
    private UpdateHandler $updateHandler;
    private UploadHandler $uploadHandler;
    private DeleteHandler $deleteHandler;
    private DeleteImageHandler $deleteImageHandler;

    /**
     * CmsWorkExampleService constructor.
     * @param CmsWorkExampleRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param StoreHandler $storeHandler
     * @param UpdateHandler $updateHandler
     * @param UploadHandler $uploadHandler
     * @param DeleteHandler $deleteHandler
     * @param DeleteImageHandler $deleteImageHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsWorkExampleRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        StoreHandler $storeHandler,
        UpdateHandler $updateHandler,
        UploadHandler $uploadHandler,
        DeleteHandler $deleteHandler,
        DeleteImageHandler $deleteImageHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
        $this->updateHandler = $updateHandler;
        $this->uploadHandler = $uploadHandler;
        $this->deleteHandler = $deleteHandler;
        $this->deleteImageHandler = $deleteImageHandler;
        $this->cacheTag = Tag::WORK_EXAMPLES_TAG;
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function getItems(array $requestData)
    {
        return $this->repository->getItems($requestData);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        return $this->repository->getResourceItem($id);
    }

    /**
     * @param array $storeData
     * @return \App\Models\WorkExample|mixed
     */
    public function store(array $storeData)
    {
        return $this->storeHandler->handle($storeData);
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return \App\Models\WorkExample|mixed
     */
    public function update(int $id, $updateData)
    {
        $item = $this->repository->getItem($id);

        return $this->updateHandler->handle($item, $updateData);
    }

    /**
     * @param int $id
     * @param array $uploadFiles
     * @return mixed
     */
    public function upload(int $id, array $uploadFiles)
    {
        $item = $this->repository->getItem($id);
        $updatedItem = $this->uploadHandler->handle($item, $uploadFiles);

        return json_decode($updatedItem->images, true);
    }

    /**
     * @param int $id
     * @return int
     * @throws \Exception
     */
    public function delete(int $id)
    {
        $item = $this->repository->getItem($id);

        return $this->deleteHandler->handle($item);
    }

    /**
     * @param int $id
     * @param int $imageIndex
     * @return mixed
     */
    public function deleteImage(int $id, int $imageIndex)
    {
        $item = $this->repository->getItem($id);
        $updatedItem = $this->deleteImageHandler->handle($item, $imageIndex);

        return json_decode($updatedItem->images, true);
    }
}
