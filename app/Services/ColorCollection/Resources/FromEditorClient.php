<?php

namespace App\Services\ColorCollection\Resources;

use App\Services\Image\Resources\FromEditorClient as FromEditorResource;
use Illuminate\Http\Resources\Json\JsonResource;

class FromEditorClient extends JsonResource
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
            'images' => FromEditorResource::collection($this->images)
        ];
    }
}
