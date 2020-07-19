<?php


namespace App\Services\Image\Handlers;


use App\Models\Image;
use App\Services\Image\Repositories\CmsImageRepository;
use Illuminate\Http\UploadedFile;

class UpdateImagePathHandler
{
    private Image $uploadModel;
    private CmsImageRepository $repository;

    /**
     * UpdateImagePathHandler constructor.
     * @param Image $uploadModel
     * @param CmsImageRepository $repository
     */
    public function __construct(
        Image $uploadModel,
        CmsImageRepository $repository
    )
    {
        $this->uploadModel = $uploadModel;
        $this->repository = $repository;
    }

    /**
     * @param Image $image
     * @param UploadedFile $imageFile
     */
    public function handle(Image $image, UploadedFile $imageFile)
    {
        $uploader = uploader();

        if (!$uploader->isEqualSizes($imageFile, $image)) {
            abort(422, __('image_validation.dimensions_should_be_same_as_previous', [
                'width' => $image->width,
                'height' => $image->height
            ]));
        }

        $uploadAttributes = $uploader->upload($imageFile, $image->path);

        return $this->repository
            ->update($image, ['path' => $uploadAttributes['path']]);
    }
}
