<?php

namespace App\Models;

use App\Models\Filter\Filtered;
use Illuminate\Database\Eloquent\Builder;

class Tag extends Model
{
    use Filtered;

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function images() {
        return $this->belongsToMany('App\Models\Image');
    }

    public function scopeWhereImageIdsIn($query, array $ids)
    {
        return $query
            ->whereHas('images', fn (Builder $query) => $query->whereIn('id', $ids));
    }

    public function scopeWithImagesCountIn($query, array $ids)
    {
        return $query->withCount(['images' => fn (Builder $query) => $query
            ->whereIn('id', $ids)
        ]);

    }





    /**
     * @param $query
     * @param int $categoryId
     * @return mixed
     */
    public function scopeGetFiltersByCategoryId($query, int $categoryId) {
        return $query
            ->published()
            ->whereHas('images', function (Builder $query) use ($categoryId) {
                $query
                    ->published()
                    ->whereHas('categories', function (Builder $query) use ($categoryId) {
                        $query->where('id', $categoryId);
                    });
            });
    }

    /**
     * @param $query
     * @param int $categoryId
     * @return mixed
     */
    public function scopeWithImageCountWhereCategoryId($query, int $categoryId)
    {
        return $query->withCount(['images' => function (Builder $query) use ($categoryId) {
            $query
                ->published()
                ->whereHas('categories', function (Builder $query) use ($categoryId) {
                    $query->where('id', $categoryId);
                });
        }]);

    }

    /**
     * @param $query
     * @param array $ids
     * @return mixed
     */
    public function scopeGetFiltersByImageIds($query, array $ids) {
        return $query
            ->published()
            ->whereHas('images', function (Builder $query) use ($ids) {
                $query->published()->whereIn('id', $ids);
            })
            ->withCount(['images' => function (Builder $query) use ($ids) {
                $query->published()->whereIn('id', $ids);
            }]);
    }

    /**
     * @param $query
     * @param array $filter
     * @return mixed
     */
    public function scopeFiltered($query, array $filter)
    {
        return $query
            ->whereHas('images', function (Builder $query) use ($filter) {
                $query
                    ->published()
                    ->where('format', function (Builder $query) use ($filter) {
                        $query->whereIn('id', $filter['formats']);
                    })
                    ->orWhereHas('categories', function (Builder $query) use ($filter) {
                        $query->whereIn('id', $filter['categories']);
                    });
            });
    }
}
