<?php


namespace App\Services\ArtCollection\Handlers;


use App\Services\ArtCollection\Repositories\CmsArtCollectionRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CmsArtCollectionRepository $repository;

    /**
     * StoreHandler constructor.
     * @param CmsArtCollectionRepository $repository
     */
    public function __construct(CmsArtCollectionRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function handle(array $storeData)
    {
        $uploadAttributes = uploader()->upload($storeData['image']);
        $storeData = Arr::add(Arr::except($storeData, ['image']),'image_path', $uploadAttributes['path']);

        return $this->repository->store($storeData);
    }
}
