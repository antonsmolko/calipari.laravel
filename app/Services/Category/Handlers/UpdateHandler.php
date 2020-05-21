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
     * @param Category $category
     * @param array $updateData
     * @return mixed
     */
    public function handle(Category $category, array $updateData)
    {
        if(array_key_exists('image', $updateData)) {
            uploader()->remove($category->image_path);
            $uploadArray = uploader()->upload($updateData['image']);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadArray['path']);
        }

        if (!$category->images()->count()) {
            $updateData['publish'] = 0;
        }

        return $this->repository->update($category, $updateData);
    }
}
