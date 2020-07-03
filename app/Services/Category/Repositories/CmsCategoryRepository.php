<?php


namespace App\Services\Category\Repositories;


use App\Models\Category;
use App\Services\Base\Category\Repositories\CmsBaseCategoryRepository;
use App\Services\Category\Resources\FromEdit as FromEditResource;
use App\Services\Category\Resources\FromList as FromListResource;
use Illuminate\Database\Eloquent\Collection;

class CmsCategoryRepository extends CmsBaseCategoryRepository
{
    /**
     * CmsCategoryRepository constructor.
     * @param Category $model
     */
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
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItemsByType(string $type)
    {
        return FromListResource::collection($this->model::where('type', $type)
            ->orderBy('id')
            ->get());
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItemFromEdit(int $id)
    {
        return new FromEditResource($this->model::findOrFail($id));
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
