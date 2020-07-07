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
}
