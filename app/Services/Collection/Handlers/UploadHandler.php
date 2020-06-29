<?php


namespace App\Services\Collection\Handlers;


use App\Models\Collection;
use App\Models\Image;
use App\Services\Collection\Repositories\CmsCollectionRepository;

class UploadHandler
{
    private CmsCollectionRepository $repository;
    private Image $uploadModel;
    private SnapImageHandler $snapImageHandler;

    /**
     * UploadHandler constructor.
     * @param CmsCollectionRepository $repository
     * @param Image $uploadModel
     * @param SnapImageHandler $snapImageHandler
     */
    public function __construct(
        CmsCollectionRepository $repository,
        Image $uploadModel,
        SnapImageHandler $snapImageHandler)
    {
        $this->repository = $repository;
        $this->uploadModel = $uploadModel;
        $this->snapImageHandler = $snapImageHandler;
    }

    /**
     * @param Collection $collection
     * @param array $uploadFiles
     * @return array
     */
    public function handle(Collection $collection, array $uploadFiles)
    {
        return array_map(function ($file) use ($collection) {
            if ($collection->mainImage && !uploader()->isEqualSizes($file, $collection->mainImage)) {
                abort(422, __('image_validation.dimensions_should_be_same_as_previous', [
                    'width' => $collection->mainImage->width,
                    'height' => $collection->mainImage->height
                ]));
            }

            $image = uploader()->store($file, $this->uploadModel);

            return $this->snapImageHandler->handle($collection, $image);
        }, $uploadFiles);
    }
}
