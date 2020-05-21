<?php


namespace App\Services\Image\Handlers;


use App\Models\Image;
use App\Services\Image\Repositories\CmsImageRepository;

class DeleteImageHandler
{
    private CmsImageRepository $repository;

    /**
     * DeleteImageHandler constructor.
     * @param CmsImageRepository $repository
     */
    public function __construct(CmsImageRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Image $image
     * @return int|void
     */
    public function handle(Image $image)
    {
        $collection = $image->collection;
        if (!$collection || $collection->main_image_id !== $image->id) {
//            uploader()->remove($image->path);
            return $this->repository->destroy($image);
        }

        return abort(400, __('image_validation.unable_to_delete_main_image_of_collection'));
    }
}
