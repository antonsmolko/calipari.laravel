<?php


namespace App\Services\Image\Handlers;


use App\Models\Category;
use Illuminate\Http\Request;

class DefineRestrictionsForCollectionsHandler
{
    /**
     * @param Request $request
     * @return bool
     */
    public function handle(Request $request)
    {
        $hasFilterColors = isset($request->filter['colors']) && !empty($request->filter['colors']);

        $restrictiveCategoryId = isset($request->filter['restrictive_category'])
            ? +$request->filter['restrictive_category'] : null;

        if (!$restrictiveCategoryId) {
            return false;
        }

        $category = Category::find($restrictiveCategoryId);
        $restrictiveIsColor = $category && $category->type === 'colors';

        return !$hasFilterColors && $restrictiveCategoryId && !$restrictiveIsColor;
    }
}
