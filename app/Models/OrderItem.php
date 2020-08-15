<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $with = ['texture', 'image'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function order()
    {
        return $this->belongsTo('App\Models\Order');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo('App\Models\Image');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function texture()
    {
        return $this->belongsTo('App\Models\Texture');
    }

    /**
     * @return mixed
     */
    public function getFilter()
    {
        return json_decode($this->filter, true);
    }

    /**
     * @return mixed
     */
    public function getAddedCosts()
    {
        return $this->added_costs ? json_decode($this->added_costs, true) : [];
    }

    /**
     * @return float|int
     */
    public function getAddedCostsAmount()
    {
        return array_sum($this->getAddedCosts());
    }
}
