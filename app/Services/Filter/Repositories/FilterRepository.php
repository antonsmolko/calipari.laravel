<?php


namespace App\Services\Filter\Repositories;


use App\Models\Category;
use App\Models\Format;

class FilterRepository
{
    /**
     * @param array $keys
     * @return mixed
     */
    public function getFormatFiltersByImageKeys(array $keys)
    {
        return Format::select(['id', 'title', 'alias'])
            ->whereImageKeysIn($keys)
            ->withImagesCountIn($keys)
            ->orderBy('id', 'asc')
            ->get();
    }

    /**
     * @param array $keys
     * @param int|null $exceptId
     * @return mixed
     */
    public function getCategoryFiltersByImageKeys(array $keys, int $exceptId = null)
    {
        $categories = Category::select(['id', 'title', 'alias', 'image_path', 'type'])
            ->published()
            ->when($exceptId, fn ($query, $exceptId) => $query->where('id', '<>', $exceptId))
            ->whereImageKeysIn($keys)
            ->withImagesCountIn($keys)
            ->orderBy('title', 'asc')
            ->get()
            ->groupBy('type');

        return $categories->toArray();
    }

    /**
     * @param array $keys
     * @param int|null $exceptId
     * @return mixed
     */
    public function getTopicFiltersByImageKeys(array $keys, int $exceptId = null)
    {
        return Category::select(['id', 'title', 'alias', 'image_path', 'type'])
            ->published()
            ->when($exceptId, fn ($query, $exceptId) => $query->where('id', '<>', $exceptId))
            ->where('type', 'topics')
            ->whereImageKeysIn($keys)
            ->withImagesCountIn($keys)
            ->orderBy('title', 'asc')
            ->get();
    }

    /**
     * @param array $keys
     * @param int|null $exceptId
     * @return mixed
     */
    public function getColorFiltersByImageKeys(array $keys, int $exceptId = null)
    {
        return Category::select(['id', 'title', 'alias', 'image_path', 'type'])
            ->published()
            ->when($exceptId, fn ($query, $exceptId) => $query->where('id', '<>', $exceptId))
            ->where('type', 'colors')
            ->whereImageKeysIn($keys)
            ->withImagesCountIn($keys)
            ->orderBy('title', 'asc')
            ->get();
    }

    /**
     * @param array $keys
     * @param int|null $exceptId
     * @return mixed
     */
    public function getInteriorFiltersByImageKeys(array $keys, int $exceptId = null)
    {
        return Category::select(['id', 'title', 'alias', 'image_path', 'type'])
            ->published()
            ->when($exceptId, fn ($query, $exceptId) => $query->where('id', '<>', $exceptId))
            ->where('type', 'interiors')
            ->whereImageKeysIn($keys)
            ->withImagesCountIn($keys)
            ->orderBy('title', 'asc')
            ->get();
    }

    /**
     * @param array $keys
     * @param int|null $exceptId
     * @return mixed
     */
    public function getTagFiltersByImageKeys(array $keys, int $exceptId = null)
    {
        return Category::select(['id', 'title', 'alias', 'image_path', 'type'])
            ->published()
            ->when($exceptId, fn ($query, $exceptId) => $query->where('id', '<>', $exceptId))
            ->where('type', 'tags')
            ->whereImageKeysIn($keys)
            ->withImagesCountIn($keys)
            ->orderBy('title', 'asc')
            ->get();
    }
}
