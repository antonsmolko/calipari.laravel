<?php


namespace App\Services\Category\Repositories;


use App\Models\Category;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Category\Resources\CategoryFromSearch as CategoryFromSearchResource;
use App\Services\Image\Resources\ImageToClientCollection;
use Illuminate\Database\Eloquent\Collection;

class ClientCategoryRepository extends ClientBaseResourceRepository
{
    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection
     */
    public function index(): Collection {
        return $this->model::select(['id', 'type', 'title', 'alias', 'image_path'])
            ->has('images')
            ->published()
            ->get();
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        return $this->model::findOrFail($id);
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAlias(string $alias)
    {
        return $this->model::where('alias', $alias)->firstOrFail();
    }

    /**
     * @param Category $category
     * @param array $pagination
     * @param array|null $filter
     * @return ImageToClientCollection
     */
    public function getImages(Category $category, array $pagination, array $filter = null)
    {
        return new ImageToClientCollection(
            $category->images()
                ->published()
                ->when($filter, function ($query, $filter) {
                    return $query->filtered($filter);
                })
                ->orderBy($pagination['sort_by'], $pagination['sort_order'])
                ->paginate($pagination['per_page'], ['*'], '', $pagination['current_page'])
        );
    }

    /**
     * @param int $categoryId
     * @param array $filter
     * @return mixed
     */
    public function getFilters(int $categoryId, array $filter = null)
    {
        return $this->model::select(['id', 'title', 'alias', 'image_path', 'type'])
                            ->getFilters($categoryId)
                            ->when($filter, function ($query, $filter) {
                                return $query->filtered($filter);
                            })
                            ->withImageCountWhereCategoryId($categoryId, $filter)
                            ->get();
    }

    /**
     * WishList Filters
     * @param array $ids
     * @param array $filter
     * @return mixed
     */
    public function getFiltersByImageIds(array $ids, array $filter = null)
    {
        return $this->model::select(['id', 'title', 'alias', 'image_path', 'type'])
            ->getFiltersByImageIds($ids, $filter)
            ->when($filter, function ($query, $filter) {
                return $query->filtered($filter);
            })
            ->get();
    }

    /**
     * @param string $search
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getSearchedItems(string $search)
    {
        return CategoryFromSearchResource::collection($this->model::search($search)
            ->where('publish', $this->model::PUBLISHED)
            ->get());
    }
}
