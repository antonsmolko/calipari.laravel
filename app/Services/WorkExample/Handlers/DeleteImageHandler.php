<?php


namespace App\Services\WorkExample\Handlers;


use App\Models\WorkExample;
use App\Services\WorkExample\Repositories\CmsWorkExampleRepository;

class DeleteImageHandler
{
    private CmsWorkExampleRepository $repository;

    /**
     * UploadHandler constructor.
     * @param CmsWorkExampleRepository $repository
     */
    public function __construct(CmsWorkExampleRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param WorkExample $item
     * @param int $imageIndex
     * @return mixed
     */
    public function handle(WorkExample $item, int $imageIndex)
    {
        $images = json_decode($item->images, true);
        $filteredImages = array_filter($images, function($image) use ($imageIndex) {
            return $image['index'] !== $imageIndex;
        });

        $updateData = [];
        $updateData['images'] = json_encode(array_values($filteredImages));

        if (empty($filteredImages)) {
            $updateData['publish'] = 0;
        }

        return $this->repository->update($item, $updateData);
    }
}
