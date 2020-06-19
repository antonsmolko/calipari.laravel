<?php

namespace App\Services\WorkExample\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WorkExampleCms extends JsonResource
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
            'date' => $this->date,
            'image_id' => $this->image_id,
            'images' => json_decode($this->images, true),
            'image_path' => $this->image_path,
            'publish' => $this->publish,
            'has_images' => $this->hasImages
        ];
    }
}
