<?php


namespace App\Services\Post;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Post\Handlers\DeleteHandler;
use App\Services\Post\Handlers\DeleteImageHandler;
use App\Services\Post\Handlers\StoreHandler;
use App\Services\Post\Handlers\UpdateHandler;
use App\Services\Post\Handlers\UploadHandler;
use App\Services\Post\Repositories\CmsPostRepository;

class CmsPostService extends CmsBaseResourceService
{
    private StoreHandler $storeHandler;
    private UpdateHandler $updateHandler;
    private UploadHandler $uploadHandler;
    private DeleteHandler $deleteHandler;
    private DeleteImageHandler $deleteImageHandler;

    /**
     * CmsPostService constructor.
     * @param CmsPostRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param StoreHandler $storeHandler
     * @param UpdateHandler $updateHandler
     * @param DeleteHandler $deleteHandler
     * @param UploadHandler $uploadHandler
     * @param DeleteImageHandler $deleteImageHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsPostRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        StoreHandler $storeHandler,
        UpdateHandler $updateHandler,
        DeleteHandler $deleteHandler,
        UploadHandler $uploadHandler,
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
        $this->cacheTag = Tag::POSTS_TAG;
    }

    /**
     * @return mixed
     */
    public function getItems()
    {
        return $this->repository->getItems();
    }

    /**
     * @param string $type
     * @param array $requestData
     * @return mixed
     */
    public function getItemsByType(string $type, array $requestData)
    {
        return $this->repository->getItemsByType($type, $requestData);
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
     * @param array $soreData
     * @return \App\Models\Post|mixed
     */
    public function store(array $soreData)
    {
        return $this->storeHandler->handle($soreData);
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
