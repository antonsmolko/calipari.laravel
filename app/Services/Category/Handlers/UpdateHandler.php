<?php


namespace App\Services\Category\Handlers;


use App\Models\Category;
use App\Services\Category\Repositories\CmsCategoryRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsCategoryRepository $repository;

    /**
     * UpdateHandler constructor.
     * @param CmsCategoryRepository $repository
     */
    public function __construct(CmsCategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Category $item
     * @param array $updateData
     * @return mixed
     */
    public function handle(Category $item, array $updateData)
    {
        if(array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $uploadAttributes = uploader()->change($updateData['image'], $item->image_path);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadAttributes['path']);
        }

        if (!$item->publishedImages()->count()) {
            $updateData['publish'] = 0;
        }

        return $this->repository->update($item, $updateData);
    }
}
