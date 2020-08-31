<?php

namespace App\Services\Order\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CmsOrderForListCollection extends ResourceCollection
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
            'data' => $this->collection,
            'total' => $this->total(),
            'current_page' => $this->currentPage(),
            'per_page' => $this->perPage(),
            'from' => $this->firstItem(),
            'to' => $this->lastItem()
        ];
    }
}
