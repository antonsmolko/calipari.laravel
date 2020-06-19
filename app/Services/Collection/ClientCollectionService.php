<?php


namespace App\Services\Collection;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Collection\Repositories\ClientCollectionRepository;

class ClientCollectionService extends ClientBaseResourceService
{
    /**
     * ClientCollectionService constructor.
     * @param ClientCollectionRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientCollectionRepository $repository,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    /**
     * @param int $id
     * @param int $currentImageId
     * @return mixed
     */
    public function getItemImagesFromEditor(int $id, int $currentImageId)
    {
        $item = $this->repository->getItem($id);

        return $this->repository->getItemImagesFromEditor($item, $currentImageId);
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAliasWithImages(string $alias)
    {
        return $this->repository->getItemByAliasWithImages($alias);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItemTags(int $id)
    {
//        $tagKey = $this->cacheKeyManager->getResourceKey(Key::TAGS_PREFIX, ['client', 'by_category_' . $id]);
        $item = $this->repository->getItem($id);

        return $this->repository->getItemTags($item);
//        return Cache::tags(Tag::TAGS_TAG)
//            ->remember($tagKey, TTL::TAGS_TTL, fn () => $this->repository->getItemTags($id));
    }
}
