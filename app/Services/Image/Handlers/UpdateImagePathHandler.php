<?php


namespace App\Services\Image\Handlers;


use App\Models\Image;
use Illuminate\Http\UploadedFile;

class UpdateImagePathHandler
{
    private Image $uploadModel;

    /**
     * UploadImageHandler constructor.
     * @param Image $uploadModel
     */
    public function __construct(Image $uploadModel)
    {
        $this->uploadModel = $uploadModel;
    }

    /**
     * @param Image $image
     * @param UploadedFile $imageFile
     */
    public function handle(Image $image, UploadedFile $imageFile)
    {
        $uploader = uploader();

        if ($uploader->isEqualSizes($imageFile, $image)) {
            abort(422, __('image_validation.dimensions_should_be_same_as_previous', [
                'width' => $image->width,
                'height' => $image->height
            ]));
        }

        $uploadAttributes = $uploader
            ->refresh($image->path)
            ->upload($imageFile);

        $uploader->update($image, $uploadAttributes);
    }
}
