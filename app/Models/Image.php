<?php

namespace App\Models;


use App\Events\Models\Image\ImageDeleted;
use App\Events\Models\Image\ImageRestored;
use App\Events\Models\Image\ImageSaved;
use App\Events\Models\Image\ImageUpdated;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class Image extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $guarded = ['id', 'deleted_at', 'created_at', 'updated_at'];

    protected $withCount = ['likes', 'orders'];

    protected $dispatchesEvents = [
        'saved' => ImageSaved::class,
        'updated' => ImageUpdated::class,
        'deleted' => ImageDeleted::class,
        'restored' => ImageRestored::class,
    ];

    const IMAGE_QUERY_BUILDER = [
        'topics:id,title,alias',
        'colors:id,title,alias',
        'interiors:id,title,alias',
        'tags:id,title',
        'owner:id,title',
        'format:id,icon,title',
        'colorCollection:id,title,main_image_id',
        'artCollection:id,title'
    ];

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
    public function nonColorCategories()
    {
        return $this->belongsToMany('App\Models\Category')
            ->wherePivot('category_type', '<>', 'colors');
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
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function homeModuleInteriorSlide()
    {
        return $this->hasOne('App\Models\HomeModuleInteriorSlide');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function format()
    {
        return $this->belongsTo('App\Models\Format');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function colorCollection()
    {
        return $this->belongsTo('App\Models\ColorCollection');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function publishedColorCollection()
    {
        return $this->belongsTo('App\Models\ColorCollection', 'color_collection_id', 'id')
            ->where('publish',self::PUBLISHED);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function artCollection()
    {
        return $this->belongsTo('App\Models\ArtCollection');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function publishedArtCollection()
    {
        return $this->belongsTo('App\Models\ArtCollection', 'art_collection_id', 'id')
            ->where('publish', '=', self::PUBLISHED);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders()
    {
        return $this->hasMany('App\Models\OrderItem', 'image_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function likes()
    {
        return $this->belongsToMany('App\Models\User', 'likes');
    }

    /**
     * @return float|int
     */
    public function getRatioAttribute()
    {
        return $this->width / $this->height;
    }

    /**
     * @return string
     */
    public function getArticleAttribute()
    {
        return str_pad($this->id, config('settings.image_article_length'), "0", STR_PAD_LEFT);
    }

    /**
     * @return string
     */
    public function getArticle()
    {
        return str_pad($this->id, config('settings.image_article_length'), "0", STR_PAD_LEFT);
    }

    /**
     * @param $query
     * @param int $id
     * @return mixed
     */
    public function scopeWhereCategory($query, int $id)
    {
        return $query
            ->published()
            ->whereHas('categories', fn (Builder $query) => $query
                ->where('id', $id));
    }

    /**
     * @param $query
     * @param int $id
     * @return mixed
     */
    public function scopeWhereArtCollection($query, int $id)
    {
        return $query
            ->published()
            ->whereHas('artCollection', fn (Builder $query) => $query
                ->published()
                ->where('id', $id));
    }

    /**
     * @param $query
     * @param int $id
     * @return mixed
     */
    public function scopeWhereColorCollection($query, int $id)
    {
        return $query
            ->published()
            ->whereHas('colorCollection', fn (Builder $query) => $query
                ->published()
                ->where('id', $id));
    }

    /**
     * @param $query
     * @param string $value
     * @return mixed
     */
    public function scopeWhereKeys($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->published()
            ->whereIn('id', $ids);
    }

    /**
     * @param $query
     * @param string $value
     * @return mixed
     */
    public function scopeWhereFormats($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('format', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }

    /**
     * @param $query
     * @param string $value
     * @return mixed
     */
    public function scopeWhereTags($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('tags', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }

    /**
     * @param $query
     * @param string $value
     * @return mixed
     */
    public function scopeWhereTopics($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('topics', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }

    /**
     * @param $query
     * @param string $value
     * @return mixed
     */
    public function scopeWhereColors($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('colors', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }

    /**
     * @param $query
     * @param string $value
     * @return mixed
     */
    public function scopeWhereInteriors($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('interiors', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }
}
