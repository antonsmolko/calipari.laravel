<?php

namespace App\Models;


use App\Events\Models\Post\PostDeleted;
use App\Events\Models\Post\PostSaved;

class Post extends Model
{
    const TYPES = ['guide', 'news', 'stocks', 'events'];

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $dispatchesEvents = [
        'saved' => PostSaved::class,
        'deleted' => PostDeleted::class,
    ];

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
