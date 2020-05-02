<?php


namespace App\Services\Image\Repositories;


use App\Models\Image;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Image\Resources\ImageToClientCollection;
use App\Services\Image\Resources\ImageToEditor as ImageToEditorResource;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedInclude;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\QueryBuilderRequest;

class ClientImageRepository extends ClientBaseResourceRepository
{
    /**
     * ClientImageRepository constructor.
     * @param Image $model
     */
    public function __construct(Image $model)
    {
        $this->model = $model;
    }

    /**
     * @param int $id
     * @return ImageToEditorResource
     */
    public function getResourceItem(int $id): ImageToEditorResource
    {
        return new ImageToEditorResource($this->model::findOrFail($id));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Database\Eloquent\Builder[]|Collection|\Illuminate\Support\Collection|QueryBuilder[]
     */
    public function getItems(Request $request)
    {
        $pagination = $request->pagination;

        return QueryBuilder::for(Image::class)
            ->defaultSort('-id')
            ->allowedFilters([
                AllowedFilter::scope('category', 'whereCategory'),
                AllowedFilter::scope('formats', 'whereFormats'),
                AllowedFilter::scope('tags', 'whereTags'),
                AllowedFilter::scope('topics', 'whereTopics'),
                AllowedFilter::scope('colors', 'whereColors'),
                AllowedFilter::scope('interiors', 'whereInteriors')
            ])
            ->when(
                $pagination,
                fn ($query, $pagination) => $query
                    ->paginate($pagination['per_page'], ['*'], '', $pagination['current_page']),
                fn ($query) => $query->get()
            );
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getModelKeys(Request $request): array
    {
        $images = $this->getItems($request);

        return $images->modelKeys();
    }

    /**
     * @param Request $request
     * @return \Illuminate\Database\Concerns\BuildsQueries|mixed|QueryBuilder
     */
    public function getWishListItems(Request $request)
    {
        $pagination = $request->pagination;

        return QueryBuilder::for(Image::class)
            ->defaultSort('-id')
            ->allowedFilters([
                AllowedFilter::scope('keys', 'whereKeys'),
                AllowedFilter::scope('formats', 'whereFormats'),
                AllowedFilter::scope('tags', 'whereTags'),
                AllowedFilter::scope('topics', 'whereTopics'),
                AllowedFilter::scope('colors', 'whereColors'),
                AllowedFilter::scope('interiors', 'whereInteriors')
            ])
            ->when(
                $pagination,
                fn ($query, $pagination) => $query
                    ->paginate($pagination['per_page'], ['*'], '', $pagination['current_page']),
                fn ($query) => $query->get()
            );
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getWishListModelKeys(Request $request): array
    {
        $images = $this->getWishListItems($request);

        return $images->modelKeys();
    }
}
