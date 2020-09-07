<?php

namespace App\Models;


use App\Events\Models\Sale\SaleCreated;
use App\Events\Models\Sale\SaleDeleted;
use App\Events\Models\Sale\SaleUpdated;
use Illuminate\Database\Eloquent\Builder;

class Sale extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $with = ['texture'];

    protected $dispatchesEvents = [
        'created' => SaleCreated::class,
        'updated' => SaleUpdated::class,
        'deleted' => SaleDeleted::class,
    ];

    public const FOR_SALE = 0;
    public const IN_ORDER = 1;
    public const SOLD = 2;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function texture()
    {
        return $this->belongsTo('App\Models\Texture');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function carts()
    {
        return $this->belongsToMany('App\Models\Cart');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function order()
    {
        return $this->belongsToMany('App\Models\Order');
    }

    /**
     * @return bool
     */
    public function getIsAvailableAttribute(): bool
    {
        return (bool) ($this->publish === self::PUBLISHED) && (bool) ($this->status === self::FOR_SALE);
    }

    /**
     * @return int
     */
    public function getOldPriceAttribute(): int
    {
        return getItemPrice($this->width_cm, $this->height_cm, $this->texture->price);
    }

    /**
     * @return int
     */
    public function getPriceAttribute(): int
    {
        return getItemPrice($this->width_cm, $this->height_cm, $this->texture->price);
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function scopeAvailable(Builder $query): Builder
    {
        return $query
            ->published()
            ->where('status', self::FOR_SALE);
    }
}
