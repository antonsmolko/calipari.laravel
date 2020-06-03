<?php

namespace App\Services\WorkExample\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Jenssegers\Date\Date;

class FromListClient extends JsonResource
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
            'date' => Date::createFromTimestamp(round($this->date / 1000))->format('j F Y г.'),
            'article' => getImageArticle($this->image_id),
            'image_id' => $this->image_id,
            'images' => json_decode($this->images, true),
            'image_path' => $this->image_path
        ];
    }
}
