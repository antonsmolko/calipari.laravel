<?php

namespace App\Services\Category\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ForList extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'title' => $this->title,
            'alias' => $this->alias,
            'image_path' => $this->image_path,
            'meta_title' => $this->meta_title,
            'description' => $this->description,
            'publish' => $this->publish,
            'keywords' => $this->keywords,
            'images_count' => $this->images_count,
            'has_published_images' => (bool) $this->published_count,
        ];
    }
}
