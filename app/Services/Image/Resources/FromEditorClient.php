<?php

namespace App\Services\Image\Resources;

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
            'article' => getImageArticle($this->id),
            'path' => $this->path,
            'ratio' => $this->width / $this->height,
            'width' => $this->width,
            'height' => $this->height,
            'max_print_width' => $this->max_print_width,
            'hasColorCollection' => (bool) $this->publishedColorCollection()->count(),
            'hasArtCollection' => (bool) $this->publishedArtCollection()->count(),
            'examples' => $this->getExamples()
        ];
    }
}
