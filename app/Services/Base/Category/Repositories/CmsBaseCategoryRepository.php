<?php

namespace App\Services\Base\Category\Repositories;


use App\Models\Image;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsBaseCategoryRepository extends CmsBaseResourceRepository
{
    protected string $table = 'categories';

//    /**
//     * @param int $id
//     * @return mixed
//     */
//    public function getItemFromEdit(int $id)
//    {
//        return $this->model::findOrFail($id);
//    }

    /**
     * @param $category
     * @param array $pagination
     * @return mixed
     */
    public function getImages($category, array $requestData)
    {
        return $category->images()
            ->with(config('query_builder.image'))
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

//    /**
//     * @param $category
//     * @param array $pagination
//     * @return mixed
//     */
//    public function getQueryImages($category, array $pagination)
//    {
//        return $category->images()
//            ->where('id', 'like', $pagination['query'] . '%')
//            ->with(config('query_builder.image'))
//            ->orderBy($pagination['sort_by'], $pagination['sort_order'])
//            ->paginate($pagination['per_page'], ['*'], '', $pagination['current_page']);
//    }

    /**
     * @param $category
     * @param array $requestData
     * @return mixed
     */
    public function getExcludedImages($category, array $requestData)
    {
        return Image::whereDoesntHave($this->table, fn ($query) => $query->where('id', $category->id))
            ->with(config('query_builder.image'))
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

//    /**
//     * @param $category
//     * @param array $pagination
//     * @return mixed
//     */
//    public function getQueryExcludedImages($category, array $pagination)
//    {
//        return Image::whereDoesntHave($this->table, function ($query) use ($category) {
//            $query->where('id', $category->id);
//        })
//            ->where('id', 'like', $pagination['query'] . '%')
//            ->with(config('query_builder.image'))
//            ->orderBy($pagination['sort_by'], $pagination['sort_order'])
//            ->paginate($pagination['per_page'], ['*'], '', $pagination['current_page']);
//    }

    /**
     * @param $category
     * @param array $images
     * @return mixed
     */
    public function addImages($category, array $images)
    {
        return $category->images()->attach($images, ['category_type' => $category->type]);
    }
}
