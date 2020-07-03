<?php


namespace App\Services\ColorCollection\Handlers;


use App\Models\ColorCollection;
use App\Models\Image;

class SnapImageHandler
{
    /**
     * @param ColorCollection $colorCollection
     * @param Image $image
     * @return mixed
     */
    public function handle(ColorCollection $colorCollection, Image $image)
    {
        $categories = $colorCollection->categories
            ->mapWithKeys(fn($item) => [$item['id'] => ['category_type' => $item['type']]])
            ->toArray();

        $image->color_collection_id = $colorCollection->id;

        if ($colorCollection->owner) {
            $image->owner_id = $colorCollection->owner->id;
        }

        $image->save();
        $image->categories()->sync($categories);

        if (!$colorCollection->mainImage) {
            $colorCollection->mainImage()->associate($image);
            $colorCollection->save();
        }

        return $image->id;
    }
}
