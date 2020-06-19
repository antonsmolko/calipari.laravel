<?php


namespace App\Services\Collection\Handlers;


use App\Models\Collection;
use App\Models\Image;
use App\Services\Collection\Repositories\CmsCollectionRepository;

class UploadHandler
{
    private CmsCollectionRepository $repository;
    private Image $uploadModel;

    /**
     * UploadHandler constructor.
     * @param CmsCollectionRepository $repository
     * @param Image $uploadModel
     */
    public function __construct(
        CmsCollectionRepository $repository,
        Image $uploadModel)
    {
        $this->repository = $repository;
        $this->uploadModel = $uploadModel;
    }

    /**
     * @param Collection $collection
     * @param array $uploadFiles
     * @return array
     */
    public function handle(Collection $collection, array $uploadFiles)
    {
        $categories = $collection->categories
            ->mapWithKeys(fn($item) => [$item['id'] => ['category_type' =>$item['type']]])
            ->toArray();

        return array_map(function ($file) use ($collection, $categories) {
            if ($collection->mainImage && !uploader()->isEqualSizes($file, $collection->mainImage)) {
                abort(422, __('image_validation.dimensions_should_be_same_as_previous', [
                    'width' => $collection->mainImage->width,
                    'height' => $collection->mainImage->height
                ]));
            }

            $image = uploader()->store($file, $this->uploadModel);
            $image->collection_id = $collection->id;
            if ($collection->owner) {
                $image->owner_id = $collection->owner->id;
            }
            $image->save();
            $image->categories()->sync($categories);

            if (!$collection->mainImage) {
                $collection->mainImage()->associate($image);
                $collection->save();
            }

            return $image->id;
        }, $uploadFiles);
    }
}
