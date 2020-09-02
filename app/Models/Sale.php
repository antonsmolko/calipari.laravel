<?php

namespace App\Models;


use App\Events\Models\Sale\SaleCreated;
use App\Events\Models\Sale\SaleDeleted;
use App\Events\Models\Sale\SaleUpdated;

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
}
