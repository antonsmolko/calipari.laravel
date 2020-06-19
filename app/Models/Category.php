<?php

namespace App\Models;

use App\Events\Models\Category\CategoryDeleted;
use App\Events\Models\Category\CategorySaved;
use App\Events\Models\Category\CategoryUpdated;
use App\Models\Filter\Filtered;
use Illuminate\Database\Eloquent\Builder;
use Laravel\Scout\Searchable;

class Category extends Model
{
    use Searchable;
    use Filtered;

    const TYPES = ['topics', 'colors', 'tags', 'interiors'];

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => CategorySaved::class,
        'updated' => CategoryUpdated::class,
        'deleted' => CategoryDeleted::class,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function images() {
        return $this->belongsToMany('App\Models\Image');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function publishedImages() {
        return $this->belongsToMany('App\Models\Image')
            ->where('publish', '=', 1);
    }

    /**
     * @param $query
     * @param int $id
     * @return mixed
     */
    public function scopeGetTagsById($query, int $id)
    {
        return $query
            ->published()
            ->where([
                ['id', '<>', $id],
                ['type', 'tags']
            ])
            ->whereHas('images', fn(Builder $query) => $query
                ->whereHas('categories', fn(Builder $query) => $query->where('id', $id)))
            ->get();
    }

    public function scopeWithoutPublishedImages($query)
    {
        return $query
            ->published()
            ->whereDoesntHave('images', fn (Builder $query) => $query->published())
            ->get();
    }

//    /**
//     * @param $query
//     * @param int $categoryId
//     * @return mixed
//     */
//    public function scopeGetFilters($query, int $categoryId) {
//        return $query
//            ->published()
//            ->where('id', '<>', $categoryId)
//            ->whereHas('images', function (Builder $query) use ($categoryId) {
//                $query
//                    ->published()
//                    ->whereHas('categories', function (Builder $query) use ($categoryId) {
//                        $query->where('id', $categoryId);
//                    });
//        });
//    }

//    public function scopeByTags($query, $tags): Builder
//    {
//        $ids = explode(';', $tags);
//        return $query
//            ->published()
//            ->whereHas('images', function (Builder $query) use ($ids) {
//                $query
//                    ->whereHas('tags', function (Builder $query) use ($ids) {
//                        $query->whereIn('id', $ids);
//                    });
//            });
//    }
//
//    public function scopeByFormats($query, $formats) {
//        $ids = explode(';', $formats);
//        return $query
//            ->published()
//            ->whereHas('images', function (Builder $query) use ($ids) {
//                $query
//                    ->whereHas('format', function (Builder $query) use ($ids) {
//                        $query->whereIn('id', $ids);
//                    });
//            });
//    }

//    /**
//     * @param $query
//     * @param array $ids
//     * @return mixed
//     */
//    public function scopeGetFiltersByImageIds($query, array $ids) {
//        return $query
//            ->published()
//            ->whereHas('images', function (Builder $query) use ($ids) {
//                $query->published()->whereIn('id', $ids);
//            })
//            ->withCount(['images' => function (Builder $query) use ($ids) {
//                $query->published()->whereIn('id', $ids);
//            }]);
//    }
//
//    /**
//     * @param $query
//     * @param int $categoryId
//     * @return mixed
//     */
//    public function scopeWithImageCountWhereCategoryId($query, int $categoryId)
//    {
//        return $query->withCount(['images' => function (Builder $query) use ($categoryId) {
//            $query
//                ->published()
//                ->whereHas('categories', function (Builder $query) use ($categoryId) {
//                    $query->where('id', $categoryId);
//                });
//        }]);
//
//    }
//
//    /**
//     * @param $query
//     * @param array $filter
//     * @return mixed
//     */
//    public function scopeFiltered($query, array $filter)
//    {
//        return $query
//            ->whereHas('images', function (Builder $query) use ($filter) {
//                $query
//                    ->published()
//                    ->whereHas('format', function (Builder $query) use ($filter) {
//                        $query->whereIn('id', $filter['formats']);
//                    })
//                    ->orWhereHas('tags', function (Builder $query) use ($filter) {
//                        $query->whereIn('id', $filter['tags']);
//                    });
//            });
//    }
}
