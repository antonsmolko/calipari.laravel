<?php

namespace App\Services\HomeModuleInterior\Resources;

use App\Services\Image\Resources\FromClient as ImageResource;
use Illuminate\Http\Resources\Json\JsonResource;

class InteriorSlideClient extends JsonResource
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
            'background_path' => $this->image_path,
            'image' => new ImageResource($this->image),
            'order' => $this->order
        ];
    }
}
