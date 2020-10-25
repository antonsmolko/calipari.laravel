<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        seedProcessOfLoadingImages(
            'categories-covers',
            'calipari.categories',
            $this,
            'store');
    }

    /**
     * @param array $item
     * @param array $seedImagesData
     * @param string $storageSeedsImageDir
     */
    public function store(array $item, array $seedImagesData, string $storageSeedsImageDir) {
        $imageData = null;

        if ($item['type'] !== 'colors') {
            $imageFile = getImageByNameFromLocal(
                $seedImagesData,
                $item['alias'],
                'categories-covers',
                $storageSeedsImageDir);

            $imageData = uploader()->store($imageFile);
        }

        $category = factory(App\Models\Category::class)->create([
            'type' => $item['type'],
            'title' => $item['title'],
            'alias' => $item['alias'],
            'image_path' => $imageData ? $imageData['path'] : null,
            'meta_title' => $item['metaTitle'],
            'description' => $item['description']
        ]);

        $imageKeys = $this->getImagesKeyByCategoryId($item['id']);

        $category->images()->attach($imageKeys, ['category_type' => $item['type']]);
        $category->publish = 1;
        $category->save();
    }

    /**
     * @param int $id
     * @return array
     */
    protected function getImagesKeyByCategoryId(int $id)
    {
        $csv = getSeedCsv('calipari.category-image');

        return array_reduce($csv, function ($carry, $item) use ($id) {
            if ((int) $item['category_id'] === $id) {
                array_push($carry, (int) $item['image_id']);
            }

            return $carry;
        }, []);
    }
}
