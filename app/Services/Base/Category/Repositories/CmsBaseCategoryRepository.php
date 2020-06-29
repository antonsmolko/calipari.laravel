<?php

namespace App\Services\Base\Category\Repositories;


use App\Models\Image;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsBaseCategoryRepository extends CmsBaseResourceRepository
{
    protected string $table = 'categories';

    /**
     * @param $category
     * @param array $requestData
     * @return mixed
     */
    public function getImages($category, array $requestData)
    {
        return $category->images()
            ->with(Image::IMAGE_QUERY_BUILDER)
            ->withCount(['likes', 'orders'])
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

    /**
     * @param $category
     * @param array $requestData
     * @return mixed
     */
    public function getExcludedImages($category, array $requestData)
    {
        return Image::doesntHave('collection')
            ->whereDoesntHave('categories', fn ($query) => $query->where('id', $category->id))
            ->with(Image::IMAGE_QUERY_BUILDER)
            ->withCount(['likes', 'orders'])
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

    /**
     * @param $category
     * @param array $images
     * @return mixed
     */
    public function addImages($category, array $images)
    {
        return $category->images()->attach($images, ['category_type' => $category->type]);
    }

    /**
     * @return mixed
     */
    public function getWithoutPublishedImagesItems()
    {
        return $this->model::withoutPublishedImages();
    }
}
