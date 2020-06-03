<?php


namespace App\Services\Post\Handlers;


use App\Models\Post;
use App\Services\Post\Repositories\CmsPostRepository;

class DeleteHandler
{
    private CmsPostRepository $repository;

    /**
     * DeleteHandler constructor.
     * @param CmsPostRepository $repository
     */
    public function __construct(CmsPostRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Post $item
     * @return int
     * @throws \Exception
     */
    public function handle(Post $item): int
    {
        uploader()->remove($item['image_path']);

        $images = json_decode($item->images, true);
        array_map(fn ($path) => uploader()->remove($path), $images);

        return $this->repository->destroy($item);
    }
}
