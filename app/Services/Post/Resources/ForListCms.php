<?php

namespace App\Services\Post\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Jenssegers\Date\Date;

class ForListCms extends JsonResource
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
            'date' => Date::createFromTimestamp(round($this->date / 1000))->format('d.m.Y'),
            'images' => json_decode($this->images, true),
            'image_path' => $this->image_path,
            'content' => $this->content,
            'type' => $this->type,
            'publish' => $this->publish
        ];
    }
}
