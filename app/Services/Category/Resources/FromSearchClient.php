<?php

namespace App\Services\Category\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromSearchClient extends JsonResource
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
            'image_path' => $this->image_path,
//            'images_count' => $this->images->count(),
            'type' => 'category',
        ];
    }
}
