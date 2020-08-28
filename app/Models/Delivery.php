<?php

namespace App\Models;


use App\Events\Models\Delivery\DeliveryDeleted;
use App\Events\Models\Delivery\DeliverySaved;
use App\Events\Models\Delivery\DeliveryUpdated;

class Delivery extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $withCount = ['pickups'];

    protected $dispatchesEvents = [
        'saved' => DeliverySaved::class,
        'updated' => DeliveryUpdated::class,
        'deleted' => DeliveryDeleted::class,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function pickups()
    {
        return $this->hasMany('App\Models\Pickup');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function publishedPickups()
    {
        return $this->pickups->where('publish', self::PUBLISHED);
    }

    /**
     * @return bool
     */
    public function pickupsRequired(): bool
    {
        return (bool) ($this->pickup && !$this->publishedPickups()->count());
    }
}
