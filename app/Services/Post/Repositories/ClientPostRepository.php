<?php


namespace App\Services\Post\Repositories;


use App\Models\Post;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Post\Resources\ForListClientCollection as FromListResourceCollection;
use App\Services\Post\Resources\PostClient as PostResource;
use Illuminate\Database\Eloquent\Collection;

class ClientPostRepository extends ClientBaseResourceRepository
{
    /**
     * ClientPostRepository constructor.
     * @param Post $model
     */
    public function __construct(Post $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection
     */
    public function index(): Collection
    {
        return $this->model::published()->orderBy('id', 'desc')->get();
    }

    /**
     * @param string $type
     * @param array $requestData
     * @return FromListResourceCollection
     */
    public function getItems(string $type, array $requestData)
    {
        return new FromListResourceCollection($this->model::where('type', $type)
            ->published()
            ->orderBy('date', 'desc')
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }

    /**
     * @param string $alias
     * @return PostResource
     */
    public function getItemByAlias(string $alias)
    {
        return new PostResource($this->model::where('alias', $alias)->firstOrFail());
    }

    /**
     * @return mixed
     */
    public function getItemsForSitemap()
    {
        return $this->model::published()
            ->select(['alias'])
            ->orderBy('alias')
            ->get();
    }
}
