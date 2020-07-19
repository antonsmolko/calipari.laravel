<?php


namespace App\Services\Texture;


use App\Models\Texture;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Texture\Repositories\CmsTextureRepository;
use App\Services\Texture\Handlers\StoreTextureHandler;
use App\Services\Texture\Handlers\DeleteTextureHandler;
use App\Services\Texture\Handlers\UpdateTextureHandler;

class CmsTextureService extends CmsBaseResourceService
{
    private StoreTextureHandler $storeHandler;
    private UpdateTextureHandler $updateHandler;
    private DeleteTextureHandler $destroyHandler;

    /**
     * CmsTextureService constructor.
     * @param CmsTextureRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param StoreTextureHandler $createTextureHandler
     * @param UpdateTextureHandler $updateTextureHandler
     * @param DeleteTextureHandler $deleteTextureHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsTextureRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        StoreTextureHandler $createTextureHandler,
        UpdateTextureHandler $updateTextureHandler,
        DeleteTextureHandler $deleteTextureHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->storeHandler = $createTextureHandler;
        $this->updateHandler = $updateTextureHandler;
        $this->destroyHandler = $deleteTextureHandler;
        $this->cacheTag = Tag::TEXTURES_TAG;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        return $this->repository->getItemFromEdit($id);
    }

    /**
     * @param array $storeData
     * @return Texture
     */
    public function store(array $storeData): Texture
    {
        return $this->storeHandler->handle($storeData);
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return Texture
     */
    public function update(int $id, array $updateData): Texture
    {
        $item = $this->repository->getItem($id);

        return $this->updateHandler->handle($item, $updateData);
    }

    /**
     * @param int $id
     * @return int
     * @throws \Exception
     */
    public function delete(int $id): int
    {
        $item = $this->repository->getItem($id);

        return $this->destroyHandler->handle($item);
    }
}
