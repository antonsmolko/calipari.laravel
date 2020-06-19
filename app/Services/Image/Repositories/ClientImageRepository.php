<?php


namespace App\Services\Image\Repositories;


use App\Models\Category;
use App\Models\Image;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Image\Resources\FromEditorClient as ImageFromEditorResource;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

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
     * @return ImageFromEditorResource
     */
    public function getResourceItem(int $id): ImageFromEditorResource
    {
        return new ImageFromEditorResource($this->model::findOrFail($id));
    }

    /**
     * @param Request $request
     * @param bool $collectionRestriction
     * @return \Illuminate\Database\Concerns\BuildsQueries|mixed|QueryBuilder
     */
    public function getItems(Request $request, bool $collectionRestriction = true)
    {
        $pagination = $request->pagination;

        return QueryBuilder::for(Image::class)
            ->when($collectionRestriction, fn ($query) => $query
                ->whereDoesntHave('collection')
                ->orWhereHas('collection', fn ($query) => $query->whereColumn('main_image_id', 'images.id'))
            )
            ->defaultSort('-id')
            ->allowedFilters([
                AllowedFilter::scope('restrictive_category', 'whereCategory'),
                AllowedFilter::scope('restrictive_collection', 'whereCollection'),
                AllowedFilter::scope('restrictive_keys', 'whereKeys'),
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
     * @param bool $collectionRestriction
     * @return array
     */
    public function getModelKeys(Request $request, bool $collectionRestriction = false): array
    {
        $images = $this->getItems($request, $collectionRestriction);

        return $images->modelKeys();
    }

    /**
     * @param Request $request
     * @return \Illuminate\Database\Eloquent\Builder[]|Collection|\Illuminate\Support\Collection|QueryBuilder[]
     */
    public function getItemsByTag(Request $request)
    {
        $pagination = $request->pagination;

        return QueryBuilder::for(Image::class)
            ->defaultSort('-id')
            ->allowedFilters([
                AllowedFilter::scope('tags', 'whereTags')
            ])
            ->when(
                $pagination,
                fn ($query) => $query
                    ->paginate($pagination['per_page'], ['*'], '', $pagination['current_page']),
                fn ($query) => $query
                    ->get()
            );
    }
}
