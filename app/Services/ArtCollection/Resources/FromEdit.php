<?php

namespace App\Services\ArtCollection\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromEdit extends JsonResource
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
            'title' => $this->title,
            'alias' => $this->alias,
            'image_path' => $this->image_path,
            'publish' => $this->publish,
            'has_published_images' => (bool) $this->published_count,
            'meta_title' =>$this->meta_title,
            'description' => $this->description,
            'keywords' => $this->keywords
        ];
    }
}
