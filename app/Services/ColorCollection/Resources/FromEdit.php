<?php

namespace App\Services\ColorCollection\Resources;

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
            'topics' => $this->topics->modelKeys(),
            'interiors' => $this->interiors->modelKeys(),
            'tags' => $this->tags->modelKeys(),
            'image_description' => $this->image_description,
            'max_print_width' => $this->max_print_width,
            'has_published_images' => (bool) $this->publishedImages->count(),
            'has_images' => (bool) $this->images->count(),
            'main_image_id' => $this->main_image_id,
            'owner_id' => $this->owner_id,
            'publish' => $this->publish,
            'meta_title' => $this->meta_title,
            'description' => $this->description,
            'keywords' => $this->keywords
        ];
    }
}
