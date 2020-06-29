<?php


namespace App\Services\Collection\Handlers;


use App\Models\Collection;
use App\Models\Image;

class SnapImageHandler
{
    /**
     * @param Collection $collection
     * @param Image $image
     * @return mixed
     */
    public function handle(Collection $collection, Image $image)
    {
        $categories = $collection->categories
            ->mapWithKeys(fn($item) => [$item['id'] => ['category_type' => $item['type']]])
            ->toArray();

        $image->collection_id = $collection->id;

        if ($collection->owner) {
            $image->owner_id = $collection->owner->id;
        }

        $image->save();
        $image->categories()->sync($categories);

        if (!$collection->mainImage) {
            $collection->mainImage()->associate($image);
            $collection->save();
        }

        return $image->id;
    }
}
