<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    const PUBLISHED = 1;

    /**
     * @param Builder $query
     * @return Builder
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('publish', self::PUBLISHED);
    }
}
