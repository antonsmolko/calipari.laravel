<?php

namespace App\Services\WorkExample\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Jenssegers\Date\Date;

class FromListCms extends JsonResource
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
            'date' => Date::createFromTimestamp(round($this->date / 1000))->format('d.m.Y'),
            'image_id' => $this->image_id,
            'images' => json_decode($this->images),
            'image_path' => $this->image_path,
            'publish' => $this->publish,
            'has_images' => $this->hasImages
        ];
    }
}
