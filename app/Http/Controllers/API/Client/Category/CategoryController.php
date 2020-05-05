<?php

namespace App\Http\Controllers\API\Client\Category;


use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Http\Requests\FormRequest;
use App\Models\Category;
use App\Services\Category\ClientCategoryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CategoryController extends BaseResourceController
{
    /**
     * ClientCategoryController constructor.
     * @param ClientCategoryService $service
     */
    public function __construct(ClientCategoryService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param string $alias
     * @return JsonResponse
     */
    public function getItemByAlias(string $alias): JsonResponse
    {
        return response()->json($this->service->getItemByAlias($alias));
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getItemTags(int $id)
    {
        return response()->json($this->service->getItemTags($id));
    }

    /**
     * @param FormRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function getImages(FormRequest $request, int $id): JsonResponse
    {
        return response()->json($this->service->getImages($id, $request->all()));
    }


//    public function getFilters(FormRequest $request)
//    {
////        return $request->all();
//
////        dd($request->all());
////        $categories = Category::byTags($request['filter']['by_tags']);
//        $categories = QueryBuilder::for(Category::class)
//            ->allowedFilters([
//                AllowedFilter::scope('get_filters'),
////                AllowedFilter::scope('by_tags'),
//                AllowedFilter::scope('by_formats'),
//            ])
//            ->get();
//
//        return response()->json($categories);
////        return response()->json($this->service->getFilters($categoryId, $request->all()));
//    }
//
//    /**
//     * WishList Filters
//     * @param FormRequest $request
//     * @return JsonResponse
//     */
//    public function getFiltersByImageIds(FormRequest $request): JsonResponse
//    {
//        return response()->json($this->service->getFiltersByImageIds($request->all()));
//    }
}
