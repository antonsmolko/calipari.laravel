<?php


namespace App\Services\Owner;


use App\Events\Models\Image\ImageUpdated;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Image\Handlers\UploadHandler;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Image\CmsImageService;
use App\Services\Owner\Repositories\OwnerRepository;
use App\Services\SubCategory\SubCategoryService;
use Illuminate\Support\Facades\Cache;

class OwnerService extends SubCategoryService
{
    /**
     * OwnerService constructor.
     * @param OwnerRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param UploadHandler $uploadHandler
     * @param CmsImageService $imageService
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        OwnerRepository $repository,
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

    /**
     * @param array $requestData
     * @param int $id
     * @return mixed
     */
    public function upload(array $requestData, int $id)
    {
        $uploadedKeys = $this->uploadHandler->handle($requestData['images']);

        return $this->repository->addImages($id, $uploadedKeys);
    }

    /**
     * @param int $id
     * @param array $imageKeys
     */
    public function addImages(int $id, array $imageKeys)
    {
        $addImagesCount = $this->repository->addImages($id, $imageKeys);
        event(new ImageUpdated());

        return $addImagesCount;
    }

    /**
     * @param int $categoryId
     * @param array $pagination
     * @return mixed
     */
    public function getImages(int $categoryId, array $pagination)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['cms', 'owner_id_' . $categoryId], $pagination);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember(
                $key,
                TTL::IMAGES_TTL,
                function() use ($categoryId, $pagination) {
                    $category = $this->repository->getItem($categoryId);

                    return $this->repository->getImages($category, $pagination);
                });
    }

    /**
     * @param int $categoryId
     * @param array $pagination
     * @return mixed
     */
    public function getExcludedImages(int $categoryId, array $pagination)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['cms', 'excluded', 'owner_id_' . $categoryId], $pagination);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember(
                $key,
                TTL::IMAGES_TTL,
                function() use ($categoryId, $pagination) {
                    $category = $this->repository->getItem($categoryId);

                    return $this->repository->getExcludedImages($category, $pagination);
                });
    }
}
