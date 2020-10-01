<?php


namespace App\Services\Post\Repositories;


use App\Models\Post;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Post\Resources\ForCmsCollection as FromListResourceCollection;
use App\Services\Post\Resources\PostCms as PostResource;

class CmsPostRepository extends CmsBaseResourceRepository
{
    /**
     * CmsPostRepository constructor.
     * @param Post $model
     */
    public function __construct(Post $model)
    {
        $this->model = $model;
    }

    /**
     * @return Post[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getItems()
    {
        return $this->model::all();
    }

    /**
     * @param string $type
     * @param array $requestData
     * @return mixed
     */
    public function getItemsByType(string $type, array $requestData)
    {
        return new FromListResourceCollection($this->model::where('type', $type)
            ->when(!empty($requestData['query']),
                fn ($query) => $query
                    ->where('title', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }

    /**
     * @param int $id
     * @return PostResource
     */
    public function getResourceItem(int $id)
    {
        return new PostResource($this->model::findOrFail($id));
    }
}
