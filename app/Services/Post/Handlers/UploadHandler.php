<?php


namespace App\Services\Post\Handlers;

use App\Models\Image;
use App\Models\Post;
use App\Services\Post\Repositories\CmsPostRepository;

class UploadHandler
{
    private CmsPostRepository $repository;
    private Image $uploadModel;

    /**
     * UploadHandler constructor.
     * @param CmsPostRepository $repository
     * @param Image $uploadModel
     */
    public function __construct(
        CmsPostRepository $repository,
        Image $uploadModel
    )
    {
        $this->repository = $repository;
        $this->uploadModel = $uploadModel;
    }

    /**
     * @param Post $item
     * @param array $files
     * @return mixed
     */
    public function handle(Post $item, array $files)
    {
        $images = addImagesFromResource($item, $files);
        $updateData = ['images' => json_encode($images)];

        return $this->repository->update($item, $updateData);
    }
}
