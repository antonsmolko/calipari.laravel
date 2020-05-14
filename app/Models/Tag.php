<?php

namespace App\Models;

use App\Events\Models\Tag\TagDeleted;
use App\Events\Models\Tag\TagSaved;
use App\Events\Models\Tag\TagUpdated;
use App\Models\Filter\Filtered;
use Illuminate\Database\Eloquent\Builder;
use Laravel\Scout\Searchable;

class Tag extends Model
{
    use Searchable;
    use Filtered;

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => TagSaved::class,
        'updated' => TagUpdated::class,
        'deleted' => TagDeleted::class,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function images() {
        return $this->belongsToMany('App\Models\Image');
    }

    /**
     * @param $query
     * @param int $categoryId
     * @return mixed
     */
    public function scopeByCategoryId($query, int $categoryId) {
        return $query
            ->whereHas('images', fn (Builder $query) => $query
                ->published()
                ->whereHas('categories', fn (Builder $query) => $query
                    ->where('id', $categoryId))
            );
    }

    /**
     * @param $query
     * @param int $categoryId
     * @return mixed
     */
    public function scopeWithImageCountWhereCategoryId($query, int $categoryId)
    {
        return $query
            ->withCount(['images' => fn (Builder $query) => $query
                ->published()
                ->whereHas('categories', fn (Builder $query) => $query
                    ->where('id', $categoryId))
            ]);

    }

    /**
     * @param $query
     * @param array $keys
     * @return mixed
     */
    public function scopeWhereImageIdIn($query, array $keys) {
        return $query
            ->whereHas('images', fn (Builder $query) => $query
                ->published()
                ->whereIn('id', $keys));
    }

    /**
     * @param $query
     * @param array $keys
     * @return mixed
     */
    public function scopeWithImageCountWhereImageIdIn($query, array $keys)
    {
        return $query
            ->withCount(['images' => fn (Builder $query) => $query
                ->published()
                ->whereIn('id', $keys)
            ]);

    }

//    /**
//     * @param $query
//     * @param array $filter
//     * @return mixed
//     */
//    public function scopeFiltered($query, array $filter)
//    {
//        return $query
//            ->whereHas('images', fn (Builder $query) => $query
//                ->published()
//                ->where('format', fn (Builder $query) => $query
//                    ->whereIn('id', $filter['formats']))
//                ->orWhereHas('categories', fn (Builder $query) => $query
//                    ->whereIn('id', $filter['categories']))
//            );
//    }
    public function scopeHasImages($query)
    {
        return $query->has('images');
    }

    public function shouldBeSearchable()
    {
        return $this->publish === 1 && $this->images->count();
    }
}
