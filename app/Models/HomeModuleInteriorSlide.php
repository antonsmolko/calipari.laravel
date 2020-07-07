<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeModuleInteriorSlide extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $with = ['image'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function interior()
    {
        return $this->belongsTo('App\Models\HomeModuleInterior');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo('App\Models\Image');
    }
}
