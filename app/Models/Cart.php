<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class Cart extends Model
{
    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * @return array
     */
    public function getItems(): array
    {
        return json_decode($this->items, true) ?? [];
    }

    /**
     * @return array
     */
    public function getNotDeletedItems(): array
    {
        return array_values(Arr::where($this->getItems(), fn($item, $key) => empty($item['deleted'])));
    }
}
