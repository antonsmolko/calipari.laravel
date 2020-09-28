<?php


namespace App\Services\Category\Repositories;


use App\Models\Category;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Category\Resources\FromSearchClient as FromSearchResource;
use App\Services\Image\Resources\FromClientCollection;
use Illuminate\Database\Eloquent\Collection;

class ClientCategoryRepository extends ClientBaseResourceRepository
{
    /**
     * ClientCategoryRepository constructor.
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
        return $this->model::select(['id', 'type', 'title', 'alias', 'image_path'])
            ->has('images')
            ->published()
            ->orderBy('title')
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
     * @param int $id
     * @return mixed
     */
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
