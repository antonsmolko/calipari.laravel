<?php


namespace App\Services\WorkExample\Handlers;


use App\Models\Image;
use App\Models\WorkExample;
use App\Services\WorkExample\Repositories\CmsWorkExampleRepository;

class UploadHandler
{
    private CmsWorkExampleRepository $repository;
    private Image $uploadModel;

    /**
     * UploadHandler constructor.
     * @param CmsWorkExampleRepository $repository
     * @param Image $uploadModel
     */
    public function __construct(
        CmsWorkExampleRepository $repository,
        Image $uploadModel
    )
    {
        $this->repository = $repository;
        $this->uploadModel = $uploadModel;
    }

    /**
     * @param WorkExample $item
     * @param array $files
     * @return \App\Services\WorkExample\Resources\FromListCms|mixed
     */
    public function handle(WorkExample $item, array $files)
    {
        $images = addImagesFromResource($item, $files);
        $updateData = ['images' => json_encode($images)];

        return $this->repository->update($item, $updateData);
    }
}
