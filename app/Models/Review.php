<?php

namespace App\Models;


use App\Events\Models\Review\ReviewCreated;
use App\Events\Models\Review\ReviewDeleted;
use App\Events\Models\Review\ReviewUpdated;

class Review extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'created' => ReviewCreated::class,
        'updated' => ReviewUpdated::class,
        'deleted' => ReviewDeleted::class,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function order()
    {
        return $this->belongsTo('App\Models\Order');
    }

    /**
     * @return mixed
     */
    public function getUserAttribute()
    {
        return $this->order->user;
    }

    /**
     * @return mixed
     */
    public function getCustomerNameAttribute()
    {
        $customer = $this->getOrderCustomer();

        return $customer['name'];
    }

    /**
     * @return mixed
     */
    public function getOrderCustomer()
    {
        return $this->order->getCustomer();
    }

    /**
     * @return mixed
     */
    public function getImages()
    {
        return json_decode($this->images, true);
    }
}
