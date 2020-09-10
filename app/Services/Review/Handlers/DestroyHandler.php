<?php


namespace App\Services\Review\Handlers;


use App\Models\Review;
use App\Services\Review\Repositories\CmsReviewRepository;

class DestroyHandler
{
    public CmsReviewRepository $repository;

    public function __construct(CmsReviewRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Review $item
     * @return int
     */
    public function handle(Review $item)
    {
        $images = $item->getImages();

        if ($images) {
            array_walk($images, fn($image) => uploader()->remove($image));
        }

        return $this->repository->destroy($item);
    }

}
