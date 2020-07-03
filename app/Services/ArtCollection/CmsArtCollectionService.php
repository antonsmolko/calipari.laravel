<?php


namespace App\Services\ArtCollection;


use App\Services\ArtCollection\Handlers\AddImagesHandler;
use App\Services\ArtCollection\Handlers\RemoveImageHandler;
use App\Services\ArtCollection\Repositories\CmsArtCollectionRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheByTagHandler;

class CmsArtCollectionService extends CmsBaseResourceService
{
    private AddImagesHandler $addImagesHandler;
    private RemoveImageHandler $removeImageHandler;

    /**
     * CmsArtCollectionService constructor.
     * @param CmsArtCollectionRepository $repository
     * @param ClearCacheByTagHandler $clearCacheByTagHandler
     * @param AddImagesHandler $addImagesHandler
     * @param RemoveImageHandler $removeImageHandler
     */
    public function __construct(
        CmsArtCollectionRepository $repository,
        ClearCacheByTagHandler $clearCacheByTagHandler,
        AddImagesHandler $addImagesHandler,
        RemoveImageHandler $removeImageHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
        $this->addImagesHandler = $addImagesHandler;
        $this->removeImageHandler = $removeImageHandler;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getImages(int $id)
    {
        $colorCollection = $this->repository->getItem($id);

        return $this->repository->getImages($colorCollection);
    }

    /**
     * @param int $collectionId
     * @param array $imageKeys
     * @return array
     */
    public function addImages(int $collectionId, array $imageKeys)
    {
        return $this->addImagesHandler->handle($collectionId, $imageKeys);
    }

    /**
     * @param int $collectionId
     * @param int $imageId
     * @return int
     */
    public function removeImage(int $collectionId, int $imageId): int
    {
        $collection = $this->repository->getItem($collectionId);

        return $this->removeImageHandler->handle($collection, $imageId);
    }

    /**
     * @param array $pagination
     * @return mixed
     */
    public function getExcludedImages(array $pagination)
    {
        return $this->repository->getExcludedImages($pagination);
    }
}
