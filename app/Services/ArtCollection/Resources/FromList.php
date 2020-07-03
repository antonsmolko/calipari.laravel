<?php

namespace App\Services\ArtCollection\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromList extends JsonResource
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
            'thumb' => $this->backgroundImage ? $this->backgroundImage->path : null,
            'images_count' => $this->images->count(),
            'has_published_images' => (bool) $this->publishedImages->count(),
            'publish' => $this->publish
        ];
    }
}
