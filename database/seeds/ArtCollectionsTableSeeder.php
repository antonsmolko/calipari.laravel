<?php

use Illuminate\Database\Seeder;

class ArtCollectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        seedProcessOfLoadingImages(
            'art-collections-covers',
            'calipari.art-collections',
            $this,
            'store');
    }

    /**
     * @param array $item
     * @param array $seedImagesData
     * @param string $storageSeedsImageDir
     */
    public function store(array $item, array $seedImagesData, string $storageSeedsImageDir) {
        $imageFile = getImageByNameFromLocal(
            $seedImagesData,
            $item['alias'],
            'art-collections-covers',
            $storageSeedsImageDir);

        $imageData = uploader()->store($imageFile);

        $artCollection = factory(App\Models\ArtCollection::class)->create([
            'title' => ucfirst($item['title']),
            'alias' => $item['alias'],
            'image_path' => $imageData['path'],
            'meta_title' => $item['metaTitle'],
            'description' => $item['description']
        ]);

        $imageKeys = $this->getImageKeysByCollectionId($artCollection->id);

        array_walk($imageKeys, function ($key) use ($artCollection) {
            $image = \App\Models\Image::findOrFail($key);
            $image->artCollection()->associate($artCollection);
            $image->save();
        });

        $artCollection->publish = 1;
        $artCollection->save();
    }

    /**
     * @param int $id
     * @return array
     */
    protected function getImageKeysByCollectionId(int $id)
    {
        $csv = getSeedCsv('calipari.art-collection-image');

        return array_reduce($csv, function ($carry, $item) use ($id) {
            if ((int) $item['art_collection_id'] === $id) {
                array_push($carry, (int) $item['image_id']);
            }

            return $carry;
        }, []);
    }
}
