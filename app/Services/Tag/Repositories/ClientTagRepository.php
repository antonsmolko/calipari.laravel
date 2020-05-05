<?php


namespace App\Services\Tag\Repositories;

use App\Models\Tag;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Tag\Resources\TagFromSearch as TagResource;

class ClientTagRepository extends ClientBaseResourceRepository
{
    /**
     * TagRepository constructor.
     * @param Tag $model
     */
    public function __construct(Tag $model)
    {
        $this->model = $model;
    }

    /**
     * @param int $categoryId
     * @return mixed
     */
    public function getItemsByCategoryId(int $categoryId)
    {
        return $this->model::select(['id', 'title'])
            ->published()
            ->byCategoryId($categoryId)
            ->withImageCountWhereCategoryId($categoryId)
            ->orderBy('title', 'asc')
            ->get();
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getItemsByImageKeys(array $keys)
    {
        return $this->model::select(['id', 'title'])
            ->published()
            ->whereImageIdIn($keys)
            ->withImageCountWhereImageIdIn($keys)
            ->orderBy('title', 'asc')
            ->get();
    }

    /**
     * @param string $search
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getSearchedItems(string $search)
    {
        return TagResource::collection($this->model::search($search)
            ->where('publish', Tag::PUBLISHED)
            ->get());
    }
}
