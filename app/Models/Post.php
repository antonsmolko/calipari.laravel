<?php

namespace App\Models;


class Post extends Model
{
    const TYPES = ['guide', 'news', 'stocks', 'events'];

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @return string|null
     */
    public function getPreviousAttribute()
    {
        return Post::published()
            ->where('type', $this->type)
            ->where('date', '<', $this->date)
            ->orderBy('date', 'desc')
            ->value('alias');
    }

    /**
     * @return string|null
     */
    public function getNextAttribute()
    {
        return Post::published()
            ->where('type', $this->type)
            ->where('date', '>', $this->date)
            ->orderBy('date', 'asc')
            ->value('alias');
    }
}
