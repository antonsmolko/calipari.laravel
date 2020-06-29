<?php

namespace App\Services\Page\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromClient extends JsonResource
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
            'title' => $this->title,
            'alias' => $this->alias,
            'image_path' => $this->image_path,
            'content' => $this->content,
            'meta_title' => $this->meta_title,
            'description' => $this->description,
            'keywords' => $this->keywords
        ];
    }
}
