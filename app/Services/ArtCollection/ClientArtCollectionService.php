<?php


namespace App\Services\ArtCollection;


use App\Services\ArtCollection\Repositories\ClientArtCollectionRepository;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;

class ClientArtCollectionService extends ClientBaseResourceService
{
    public function __construct(
        ClientArtCollectionRepository $repository,
        CacheKeyManager $cacheKeyManager)
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAliasWithImages(string $alias)
    {
        return $this->repository->getItemByAliasWithImages($alias);
    }

//    /**
//     * @param int $id
//     * @param int $currentImageId
//     * @return mixed
//     */
//    public function getItemImagesFromEditor(int $id, int $currentImageId)
//    {
//        $item = $this->repository->getItem($id);
//
//        return $this->repository->getItemImagesFromEditor($item, $currentImageId);
//    }
}
