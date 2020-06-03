<?php

namespace App\Services\Post\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Jenssegers\Date\Date;

class PostClient extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        Date::setLocale('ru');

        return [
            'id' => $this->id,
            'title' => $this->title,
            'alias' => $this->alias,
            'intro' => $this->intro,
            'date' => Date::createFromTimestamp(round($this->date / 1000))->format('j F Y г.'),
            'image_path' => $this->image_path,
            'content' => $this->content,
            'type' => $this->type,
            'previous' => $this->previous,
            'next' => $this->next,
            'meta_title' => $this->meta_title,
            'description' => $this->description,
            'keywords' => $this->keywords
        ];
    }
}
