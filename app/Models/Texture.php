<?php

namespace App\Models;

use App\Events\Models\Texture\TextureDeleted;
use App\Events\Models\Texture\TextureSaved;

class Texture extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => TextureSaved::class,
        'deleted' => TextureDeleted::class,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders() {
        return $this->hasMany('App\Models\OrderItem', 'texture_id');
    }
}
