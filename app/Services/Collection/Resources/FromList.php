<?php

namespace App\Services\Collection\Resources;

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
            'topics' => $this->topics,
            'interiors' => $this->interiors,
            'tags' => $this->tags,
            'owner' => $this->owner,
            'thumb' => $this->mainImage ? $this->mainImage->path : null,
            'images_count' => $this->images->count(),
            'has_published_images' => !!$this->publishedImages->count(),
            'publish' => $this->publish
        ];
    }
}
