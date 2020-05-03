<?php

namespace App\Models;


use App\Events\Models\Image\ImageDeleted;
use App\Events\Models\Image\ImageSaved;
use App\Events\Models\Image\ImageUpdated;
use Illuminate\Database\Eloquent\Builder;
use Laravel\Scout\Searchable;

class Image extends Model
{
    use Searchable;

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => ImageSaved::class,
        'updated' => ImageUpdated::class,
        'deleted' => ImageDeleted::class,
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
        return $this->belongsToMany('App\Models\Tag');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo('App\Models\Owner');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function format()
    {
        return $this->belongsTo('App\Models\Format');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders()
    {
        return $this->hasMany('App\Models\OrderItem', 'order_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function likes()
    {
        return $this->belongsToMany('App\Models\User', 'likes', 'image_id', 'user_id');
    }

    /**
     * @return float|int
     */
    public function getRatioAttribute()
    {
        return $this->width / $this->height;
    }

    public function getArticleAttribute()
    {
        return str_pad($this->id, config('settings.image_article_length'), "0", STR_PAD_LEFT);
    }

    public function scopeWhereCategory($query, int $id)
    {
        return $query
            ->published()
            ->whereHas('categories', fn (Builder $query) => $query
                ->where('id', $id));
    }

    public function scopeWhereKeys($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->published()
            ->whereIn('id', $ids);
    }

    public function scopeWhereFormats($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('format', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }

    public function scopeWhereTags($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('tags', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }

//    public function scopeWhereCategories($query, string $value)
//    {
//        $ids = explode(';', $value);
//
//        return $query
//            ->whereHas('categories', fn (Builder $query) => $query
//                ->whereIn('id', $ids));
//    }

    public function scopeWhereTopics($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('topics', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }

    public function scopeWhereColors($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('colors', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }

    public function scopeWhereInteriors($query, string $value)
    {
        $ids = explode(';', $value);

        return $query
            ->whereHas('interiors', fn (Builder $query) => $query
                ->whereIn('id', $ids));
    }




    /**
     * @param $query
     * @param array $filter
     * @return mixed
     */
    public function scopeFiltered($query, array $filter)
    {
        list(
            'categories' => $categories,
            'tags' => $tags,
            'formats' => $formats) = $filter;

        return $query
            ->whereHas('tags', fn (Builder $query) => $query->whereIn('id', $tags))
            ->orWhereHas('format', fn (Builder $query) => $query->whereIn('id', $formats))
            ->orWhereHas('categories', fn (Builder $query) => $query->whereIn('id', $categories));
    }
}
