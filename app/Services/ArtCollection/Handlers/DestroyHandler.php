<?php


namespace App\Services\ArtCollection\Handlers;


use App\Models\ArtCollection;
use App\Services\ArtCollection\Repositories\CmsArtCollectionRepository;

class DestroyHandler
{
    private CmsArtCollectionRepository $repository;


    /**
     * DestroyHandler constructor.
     * @param CmsArtCollectionRepository $repository
     */
    public function __construct(CmsArtCollectionRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param ArtCollection $item
     * @return int
     */
    public function handle(ArtCollection $item): int
    {
        uploader()->remove($item->image_path);

        return $this->repository->destroy($item);
    }
}
