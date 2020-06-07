<?php


namespace App\Services\Category\Handlers;


use App\Models\Category;
use App\Services\Category\Repositories\CmsCategoryRepository;
use App\Services\HomeModuleInterior\CmsHomeModuleInteriorService;
use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsCategoryRepository $repository;
    private CmsHomeModuleInteriorRepository $homeModuleInteriorRepository;

    /**
     * UpdateHandler constructor.
     * @param CmsCategoryRepository $repository
     * @param CmsHomeModuleInteriorRepository $homeModuleInteriorRepository
     */
    public function __construct(
        CmsCategoryRepository $repository,
        CmsHomeModuleInteriorRepository $homeModuleInteriorRepository
    )
    {
        $this->repository = $repository;
        $this->homeModuleInteriorRepository = $homeModuleInteriorRepository;
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

        $category = $this->repository->update($item, $updateData);

        if ($category['type'] === 'interiors') {
            $moduleInteriorItem = $this->homeModuleInteriorRepository->getItemByInteriorId($category->id);
            $this->homeModuleInteriorRepository
                ->update($moduleInteriorItem, ['title' => $category['title']]);
        }

        return $category;
    }
}
