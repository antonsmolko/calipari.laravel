<?php


namespace App\Services\WorkExample\Handlers;


use App\Models\WorkExample;
use App\Services\WorkExample\Repositories\CmsWorkExampleRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsWorkExampleRepository $repository;

    /**
     * UpdateHandler constructor.
     * @param CmsWorkExampleRepository $repository
     */
    public function __construct(CmsWorkExampleRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param WorkExample $item
     * @param array $updateData
     * @return WorkExample
     */
    public function handle(WorkExample $item, array $updateData)
    {
        if(array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $uploadAttributes = uploader()->change($updateData['image'], $item->image_path);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadAttributes['path']);
        }

        return $this->repository->update($item, Arr::except($updateData, ['image']));
    }
}
