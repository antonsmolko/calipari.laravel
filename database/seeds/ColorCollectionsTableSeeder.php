<?php

use Illuminate\Database\Seeder;

class ColorCollectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $csv = getSeedCsv('calipari.color-collections');
        array_walk($csv, fn ($item) => $this->store($item));
    }

    /**
     * @param array $item
     */
    public function store(array $item) {
        $colorCollection = factory(App\Models\ColorCollection::class)->create([
            'title' => ucfirst($item['title']),
            'alias' => $item['alias'],
            'main_image_id' => $item['main_image_id'],
            'owner_id' => $item['owner_id'],
            'max_print_width' => $item['max_print_width'],
            'meta_title' => $item['metaTitle'],
            'description' => $item['description']
        ]);

        $imageKeys = $this->getImageKeysByCollectionId($colorCollection->id);

        array_walk($imageKeys, function ($key) use ($colorCollection) {
            $image = \App\Models\Image::findOrFail($key);
            $image->colorCollection()->associate($colorCollection);
            $image->save();
        });

        $mainImage = \App\Models\Image::findOrFail($item['main_image_id']);
        $mainImage->categories->each(function ($category) use ($colorCollection) {
            $colorCollection->categories()->attach($category, ['category_type' => $category->type]);
        });

        $colorCollection->publish = 1;
        $colorCollection->save();
    }

    /**
     * @param int $id
     * @return array
     */
    protected function getImageKeysByCollectionId(int $id)
    {
        $csv = getSeedCsv('calipari.color-collection-image');

        return array_reduce($csv, function ($carry, $item) use ($id) {
            if ((int) $item['color_collection_id'] === $id) {
                array_push($carry, (int) $item['image_id']);
            }

            return $carry;
        }, []);
    }
}
