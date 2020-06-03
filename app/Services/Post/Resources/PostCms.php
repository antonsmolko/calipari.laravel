<?php

namespace App\Services\Post\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostCms extends JsonResource
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
            'intro' => $this->intro,
            'date' => $this->date,
            'images' => json_decode($this->images, true),
            'image_path' => $this->image_path,
            'content' => $this->content,
            'type' => $this->type,
            'publish' => $this->publish,
            'meta_title' => $this->meta_title,
            'description' => $this->description,
            'keywords' => $this->keywords
        ];
    }
}
