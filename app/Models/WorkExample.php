<?php

namespace App\Models;


class WorkExample extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @return bool
     */
    public function getHasImagesAttribute()
    {
        return !empty(json_decode($this->images));
    }
}
