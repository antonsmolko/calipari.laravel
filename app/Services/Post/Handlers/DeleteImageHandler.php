<?php


namespace App\Services\Post\Handlers;


use App\Models\Post;
use App\Services\Post\Repositories\CmsPostRepository;
use Illuminate\Support\Arr;

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

        $deletedImage = Arr::first($images, fn ($image) => $image['index'] === $imageIndex);

        uploader()->remove($deletedImage['path']);

        $filteredImages = array_filter($images, fn($image) => $image['index'] !== $imageIndex);
        $updateData['images'] = json_encode(array_values($filteredImages));

        return $this->repository->update($item, $updateData);
    }
}
