<?php

namespace App\Models;


use App\Events\Models\Pickup\PickupDeleted;
use App\Events\Models\Pickup\PickupSaved;
use App\Events\Models\Pickup\PickupUpdated;

class Pickup extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => PickupSaved::class,
        'updated' => PickupUpdated::class,
        'deleted' => PickupDeleted::class,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function delivery()
    {
        return $this->belongsTo('App\Models\Delivery');
    }
}
