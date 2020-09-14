<?php

namespace App\Models;

use App\Events\Models\ArtCollection\ArtCollectionDeleted;
use App\Events\Models\ArtCollection\ArtCollectionSaved;
use Illuminate\Database\Eloquent\Builder;
use Laravel\Scout\Searchable;

class ArtCollection extends Model
{
    use Searchable;

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => ArtCollectionSaved::class,
        'deleted' => ArtCollectionDeleted::class,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images()
    {
        return $this->hasMany('App\Models\Image');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function publishedImages() {
        return $this->hasMany('App\Models\Image')
            ->where('publish', '=', 1);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeWithoutPublishedImages($query)
    {
        return $query
            ->published()
            ->whereDoesntHave('images', fn (Builder $query) => $query->published())
            ->get();
    }
}
