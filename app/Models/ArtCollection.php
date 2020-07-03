<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class ArtCollection extends Model
{
    use Searchable;

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images()
    {
        return $this->hasMany('App\Models\Image');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function backgroundImage()
    {
        return $this->belongsTo('App\Models\Image', 'image_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function publishedImages() {
        return $this->hasMany('App\Models\Image')
            ->where('publish', '=', 1);
    }

    /**
     * @return bool
     */
    public function hasPublishedImagesAttribute()
    {
        return (bool) $this->images()->firstWhere('publish', '=', 1);
    }
}
