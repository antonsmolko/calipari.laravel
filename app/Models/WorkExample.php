<?php

namespace App\Models;


use App\Events\Models\WorkExample\WorkExampleDeleted;
use App\Events\Models\WorkExample\WorkExampleSaved;

class WorkExample extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => WorkExampleSaved::class,
        'deleted' => WorkExampleDeleted::class,
    ];

    /**
     * @return bool
     */
    public function getHasImagesAttribute()
    {
        return !empty(json_decode($this->images));
    }
}
