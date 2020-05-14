<?php


namespace App\Services\Category\Repositories;


use App\Models\Category;
use App\Services\Base\Category\Repositories\CmsBaseCategoryRepository;
use App\Services\Category\Resources\CategoryFromEdit as CategoryFromEditResource;
use Illuminate\Database\Eloquent\Collection;

class CmsCategoryRepository extends CmsBaseCategoryRepository
{
    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection
     */
    public function index(): Collection {
        return $this->model::select(['id', 'type', 'title', 'alias'])->get();
    }

    /**
     * @param string $type
     * @return Collection
     */
    public function getItemsByType(string $type): Collection {
        return $this->model::where('type', $type)
            ->withCount('images')
            ->orderBy('id')
            ->get();
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItemFromEdit(int $id)
    {
        return new CategoryFromEditResource($this->model::findOrFail($id));
    }

    /**
     * @param Category $category
     * @param int $imageId
     * @return int
     */
    public function removeImage(Category $category, int $imageId): int
    {
        $detachImages = $category->images()->detach($imageId);
        if (!$category->images->count()) {
            $category->publish = 0;
            $category->save();
        }

        return $detachImages;
    }
}
