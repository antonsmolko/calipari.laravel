<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeModuleInterior extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function slides() {
        return $this->hasMany('App\Models\HomeModuleInteriorSlide', 'interior_id', 'id')
            ->orderBy('order');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function publishSlides() {
        return $this->hasMany('App\Models\HomeModuleInteriorSlide', 'interior_id', 'id')
            ->whereHas('image', fn ($query) => $query->published())
            ->orderBy('order');
    }
}
