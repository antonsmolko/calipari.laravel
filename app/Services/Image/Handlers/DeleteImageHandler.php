<?php


namespace App\Services\Image\Handlers;


use App\Models\Image;
use App\Services\HomeModuleInterior\Handlers\InteriorSlideDestroyHandler;
use App\Services\Image\Repositories\CmsImageRepository;

class DeleteImageHandler
{
    private CmsImageRepository $repository;
    private InteriorSlideDestroyHandler $homeModuleInteriorSlideDestroyHandler;

    /**
     * DeleteImageHandler constructor.
     * @param CmsImageRepository $repository
     * @param InteriorSlideDestroyHandler $homeModuleInteriorSlideDestroyHandler
     */
    public function __construct(
        CmsImageRepository $repository,
        InteriorSlideDestroyHandler $homeModuleInteriorSlideDestroyHandler
    )
    {
        $this->repository = $repository;
        $this->homeModuleInteriorSlideDestroyHandler = $homeModuleInteriorSlideDestroyHandler;
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
            if ($image->homeModuleInteriorSlide) {
                $this->homeModuleInteriorSlideDestroyHandler->handle($image->homeModuleInteriorSlide);
            }

            return $this->repository->destroy($image);
        }

        return abort(400, __('image_validation.unable_to_delete_main_image_of_collection'));
    }
}
