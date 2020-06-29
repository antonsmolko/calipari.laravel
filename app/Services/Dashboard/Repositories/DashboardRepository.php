<?php


namespace App\Services\Dashboard\Repositories;


use App\Models\Category;
use Illuminate\Support\Facades\DB;

class DashboardRepository
{
    /**
     * @param array $resources
     * @return array
     */
    public function getResourcesCount(array $resources): array
    {
        $resourcesByTable = isset($resources['tables']) ? $resources['tables'] : [];
        $resourcesByCategoryType = isset($resources['categories']) ? $resources['categories'] : [];

        $resourcesByTableCount = array_map(function($resource) {
            return [$resource => DB::table($resource)->count()];
        }, $resourcesByTable);

        $resourcesByCategoryCount = array_map(function($type) {
            return [$type => Category::where('type', $type)->count()];
        }, $resourcesByCategoryType);

        return array_merge(...$resourcesByTableCount, ...$resourcesByCategoryCount);
    }
}
