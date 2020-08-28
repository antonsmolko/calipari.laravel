<?php

namespace App\Models;

use App\Events\Models\Order\OrderDeleted;
use App\Events\Models\Order\OrderUpdated;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'updated' => OrderUpdated::class,
        'deleted' => OrderDeleted::class,
    ];

    const DEFAULT_STATUS = 'processing';
    const CANCELED_STATUS = 'canceled';
    const PAID_STATUS = 'paid';
    const COMPLETED_STATUS = 'completed';
    const PARTIALLY_REFUNDED_STATUS = 'partially_refunded';
    const REFUNDED_STATUS = 'refunded';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items()
    {
        return $this->hasMany('App\Models\OrderItem');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function images()
    {
        return $this->hasManyThrough('App\Models\Image', 'App\Models\OrderItem');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function statuses()
    {
        return $this->belongsToMany('App\Models\OrderStatus', 'order_order_status', 'order_id', 'status_id')
            ->withTimestamps();
    }

    /**
     * @return mixed
     */
    public function sortedStatuses()
    {
        return $this->statuses
            ->sortBy('pivot.created_at')
            ->all();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function textures() {
        return $this->hasManyThrough('App\Models\Texture', 'App\Models\OrderItem');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * @return bool
     */
    public function getPaidAttribute(): bool
    {
        return (bool) $this->statuses()->firstWhere('alias', 'paid');
    }

    /**
     * @param string $field
     * @return mixed
     */
    public function getCustomerField(string $field)
    {
        $customer = $this->getCustomer();

        return $customer[$field];
    }

    /**
     * @return array
     */
    public function getCustomer(): array
    {
        return json_decode($this->customer, true);
    }

    /**
     * @return array
     */
    public function getDelivery(): array
    {
        return json_decode($this->delivery, true);
    }

    /**
     * @return mixed
     */
    public function getCurrentStatus()
    {
        return $this->statuses
            ->sortBy('pivot.created_at')
            ->last();
    }

    /**
     * @return mixed
     */
    public function getCurrentStatusAlias()
    {
        $currentStatus = $this->getCurrentStatus();

        return $currentStatus->alias;
    }

    /**
     * @return bool
     */
    public function fullyRefunded(): bool
    {
        return $this->price === $this->refund_amount;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function review()
    {
        return $this->belongsTo('App\Models\Review', 'order_id');
    }
}
