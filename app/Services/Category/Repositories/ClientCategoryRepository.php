<?php


namespace App\Services\Category\Repositories;


use App\Models\Category;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Category\Resources\FromSearchClient as FromSearchResource;
use App\Services\Image\Resources\FromClientCollection;
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
     * @return FromClientCollection
     */
    public function getImages(Category $category, array $pagination, array $filter = null)
    {
        return new FromClientCollection(
            $category->images()
                ->published()
                ->when($filter, function ($query, $filter) {
                    return $query->filtered($filter);
                })
                ->orderBy($pagination['sort_by'], $pagination['sort_order'])
                ->paginate($pagination['per_page'], ['*'], '', $pagination['current_page'])
        );
    }

    public function getItemTags(int $id)
    {
        return $this->model::getTagsById($id);
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getTagsByImageKeys(array $keys)
    {
        return $this->model::where('type', 'tags')
            ->published()
            ->whereHas('images', fn ($query) => $query->whereIn('id', $keys))
            ->get();
    }

    /**
     * @param string $search
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getSearchedItems(string $search)
    {
        return FromSearchResource::collection($this->model::search($search)
            ->where('publish', $this->model::PUBLISHED)
            ->get());
    }
}
