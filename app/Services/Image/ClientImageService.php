<?php


namespace App\Services\Image;


use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Image\Handlers\GetClientItemsHandler;
use App\Services\Image\Repositories\ClientImageRepository;
use App\Services\Image\Resources\ImageToClientCollection;
use App\Services\Tag\Repositories\ClientTagRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;

class ClientImageService
{
    private ClientImageRepository $repository;
    private ClientTagRepository $tagRepository;
    private GetClientItemsHandler $getItemsHandler;
    private CacheKeyManager $cacheKeyManager;

    /**
     * ClientImageService constructor.
     * @param ClientImageRepository $repository
     * @param ClientTagRepository $tagRepository
     * @param GetClientItemsHandler $getItemsHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientImageRepository $repository,
        ClientTagRepository $tagRepository,
        GetClientItemsHandler $getItemsHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        $this->repository = $repository;
        $this->tagRepository = $tagRepository;
        $this->cacheKeyManager = $cacheKeyManager;
        $this->getItemsHandler = $getItemsHandler;
    }

    /**
     * @param Request $request
     * @return ImageToClientCollection
     */
    public function getItems(Request $request): ImageToClientCollection
    {
//        return new ImageToClientCollection($this->getItemsHandler->handle($request));
        return new ImageToClientCollection($this->repository->getItems($request));
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['client', 'published', 'id_' . $id]);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember($key, TTL::IMAGES_TTL, function () use ($id) {
                return $this->repository->getResourceItem($id);
            });
    }

//    /**
//     * @param array $requestData
//     * @return mixed
//     */
//    public function getItems(array $requestData)
//    {
//        list(
//            'key' => $id,
//            'filter' => $filter,
//            'pagination' => $pagination) = $requestData;
//
//        $key = $this->cacheKeyManager
//            ->getImagesKey(
//                Arr::collapse([['client', 'published'],
//                    Arr::flatten($filter),
//                    Arr::flatten($pagination)])
//            );
//
//        return Cache::tags(Tag::IMAGES_TAG)
//            ->remember($key, TTL::IMAGES_TTL, function () use ($pagination) {
//            return $this->repository->getItems($pagination);
//        });
//    }

    /**
     * @param Request $request
     * @return ImageToClientCollection
     */
    public function getWishListItems(Request $request)
    {
//        list(
//            'key' => $ids,
//            'filter' => $filter,
//            'pagination' => $pagination) = $requestData;

        return new ImageToClientCollection($this->repository->getWishListItems($request));

//        $filtersKey = [];
//
//        if ($filter !== null) {
//            foreach($filter as $key => $field) {
//                $filtersKey[$key] = ($key . '_' . implode('_', $field));
//            }
//        }
//
//        $key = $this->cacheKeyManager
//            ->getImagesKey(
//                Arr::collapse([
//                    ['client', 'published', 'wishList'],
//                    Arr::flatten($ids),
//                    Arr::flatten($pagination),
//                    Arr::flatten($filtersKey)
//            ]));
//
//        return Cache::tags(Tag::IMAGES_TAG)
//            ->remember($key, TTL::IMAGES_TTL, function () use ($paginateData) {
//                return $paginateData;
//            });
    }

    public function getWishListTags(array $keys)
    {
        return $this->tagRepository->getItemsByImageKeys($keys);
    }
}
