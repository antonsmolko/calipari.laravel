<?php


namespace App\Services\Image\Repositories;


use App\Models\Image;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Image\Resources\FromEditorClient as ImageFromEditorResource;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
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
        try {
            return new ImageFromEditorResource($this->model::published()
                ->where('id', $id)
                ->firstOrFail());
        } catch (ModelNotFoundException $e) {
            abort(404, 'Изображение не найдено. Вероятно изображение было удалено или снято с публикации!');
        }
    }

    /**
     * @param Request $request
     * @param bool $colorCollectionRestriction
     * @return \Illuminate\Database\Concerns\BuildsQueries|mixed|QueryBuilder
     */
    public function getItems(Request $request, bool $colorCollectionRestriction = true)
    {
        $pagination = $request->pagination;

        return QueryBuilder::for(Image::class)
            ->when($colorCollectionRestriction, fn ($query) => $query
                ->whereDoesntHave('colorCollection')
                ->orWhereHas('colorCollection', fn ($query) => $query->whereColumn('main_image_id', 'images.id'))
            )
            ->defaultSort('-id')
            ->allowedFilters([
                AllowedFilter::scope('restrictive_category', 'whereCategory'),
                AllowedFilter::scope('restrictive_color_collection', 'whereColorCollection'),
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
     * @param bool $colorCollectionRestriction
     * @return array
     */
    public function getModelKeys(Request $request, bool $colorCollectionRestriction = false): array
    {
        $images = $this->getItems($request, $colorCollectionRestriction);

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
