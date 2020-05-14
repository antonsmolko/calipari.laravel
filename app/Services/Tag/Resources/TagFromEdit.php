<?php

namespace App\Services\Tag\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TagFromEdit extends JsonResource
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
            'description' => $this->description,
            'publish' => $this->publish,
            'hasImages' => !!$this->images->count(),
        ];
    }
}
