<?php


namespace App\Services\ColorCollection\Handlers;


use App\Models\ColorCollection;
use App\Models\Image;
use App\Services\ColorCollection\Repositories\CmsColorCollectionRepository;
use App\Services\Image\Repositories\CmsImageRepository;

class UploadHandler
{
    private CmsColorCollectionRepository $repository;
    private Image $uploadModel;
    private SnapImageHandler $snapImageHandler;
    private CmsImageRepository $imageRepository;

    /**
     * UploadHandler constructor.
     * @param CmsColorCollectionRepository $repository
     * @param CmsImageRepository $imageRepository
     * @param Image $uploadModel
     * @param SnapImageHandler $snapImageHandler
     */
    public function __construct(
        CmsColorCollectionRepository $repository,
        CmsImageRepository $imageRepository,
        Image $uploadModel,
        SnapImageHandler $snapImageHandler)
    {
        $this->repository = $repository;
        $this->uploadModel = $uploadModel;
        $this->snapImageHandler = $snapImageHandler;
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param ColorCollection $colorCollection
     * @param array $uploadFiles
     * @return array
     */
    public function handle(ColorCollection $colorCollection, array $uploadFiles)
    {
        return array_map(function ($file) use ($colorCollection) {
            if ($colorCollection->mainImage && !uploader()->isEqualSizes($file, $colorCollection->mainImage)) {
                abort(422, __('image_validation.dimensions_should_be_same_as_previous', [
                    'width' => $colorCollection->mainImage->width,
                    'height' => $colorCollection->mainImage->height
                ]));
            }

            $imageData = uploader()->upload($file);
            $image = $this->imageRepository->store($imageData);

            return $this->snapImageHandler->handle($colorCollection, $image);
        }, $uploadFiles);
    }
}
