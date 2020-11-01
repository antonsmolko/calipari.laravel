<?php

namespace App\Models;


use App\Events\Models\ColorCollection\ColorCollectionDeleted;
use App\Events\Models\ColorCollection\ColorCollectionSaved;
use Illuminate\Database\Eloquent\Builder;
use Laravel\Scout\Searchable;

class ColorCollection extends Model
{
    use Searchable;

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => ColorCollectionSaved::class,
        'deleted' => ColorCollectionDeleted::class,
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
            ->where('publish', '=', self::PUBLISHED);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function mainImage()
    {
        return $this->belongsTo('App\Models\Image', 'main_image_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function categories()
    {
        return $this->belongsToMany('App\Models\Category');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function nonColorCategories()
    {
        return $this->belongsToMany('App\Models\Category')
            ->wherePivot('category_type', '<>', 'colors');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function topics()
    {
        return $this->belongsToMany('App\Models\Category')
            ->wherePivot('category_type', 'topics');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function colors()
    {
        return $this->belongsToMany('App\Models\Category')
            ->wherePivot('category_type', 'colors');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function interiors()
    {
        return $this->belongsToMany('App\Models\Category')
            ->wherePivot('category_type', 'interiors');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany('App\Models\Category')
            ->wherePivot('category_type', 'tags');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo('App\Models\Owner');
    }

    /**
     * @return string|null
     */
    public function getImagePathAttribute()
    {
        return $this->mainImage ? $this->mainImage->path : null;
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
