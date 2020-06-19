<?php


namespace App\Services\Post\Handlers;


use App\Models\Post;
use App\Services\Post\Repositories\CmsPostRepository;

class DeleteImageHandler
{
    private CmsPostRepository $repository;

    /**
     * UploadHandler constructor.
     * @param CmsPostRepository $repository
     */
    public function __construct(CmsPostRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Post $item
     * @param int $imageIndex
     * @return mixed
     */
    public function handle(Post $item, int $imageIndex)
    {
        $images = json_decode($item->images, true);
        $filteredImages = array_filter($images, function($image) use ($imageIndex) {
            return $image['index'] !== $imageIndex;
        });

        $updateData['images'] = json_encode(array_values($filteredImages));

        return $this->repository->update($item, $updateData);
    }
}
