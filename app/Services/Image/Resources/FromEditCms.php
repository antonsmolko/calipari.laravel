<?php

namespace App\Services\Image\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromEditCms extends JsonResource
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
            'article' => str_pad($this->id, 5, "0", STR_PAD_LEFT),
            'path' => $this->path,
            'topics' => $this->topics->modelKeys(),
            'colors' => $this->colors->modelKeys(),
            'interiors' => $this->interiors->modelKeys(),
            'tags' => $this->tags->modelKeys(),
            'format' => $this->format->title,
            'width' => $this->width,
            'height' => $this->height,
            'views' => $this->views,
            'likes' => $this->likes->count(),
            'collection' => $this->collection,
            'orders' => $this->orders->count(),
            'publish' => $this->publish,
            'owner_id' => $this->owner_id,
            'description' => $this->description,
            'max_print_width' => $this->max_print_width,
            'created_at' => $this->created_at
        ];
    }
}
