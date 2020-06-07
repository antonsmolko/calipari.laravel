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
        foreach (config('seeds.categories.topics') as $category) {
            $category = factory(App\Models\Category::class)->create($category);
            $images = $this->getAttachData(config('seed_settings.group_images_count'));

            $category->images()->attach($images, ['category_type' => 'topics']);
            $category->publish = 1;
            $category->save();
        }

        foreach (config('seeds.categories.colors') as $category) {
            $category = factory(App\Models\Category::class)->create($category);
            $images = $this->getAttachData(config('seed_settings.group_images_count'));

            $category->images()->attach($images, ['category_type' => 'colors']);
            $category->publish = 1;
            $category->save();
        }

        foreach (config('seeds.categories.interiors') as $category) {
            $category = factory(App\Models\Category::class)->create($category);
            $images = $this->getAttachData(config('seed_settings.group_images_count'));

            $category->images()->attach($images, ['category_type' => 'interiors']);
            $category->publish = 1;
            $category->save();

            $lastInterior = DB::table('home_module_interiors')
                ->orderBy('id', 'desc')
                ->first();

            factory(App\Models\HomeModuleInterior::class)->create([
                'title' => $category->title,
                'interior_id' => $category->id,
                'order' => $lastInterior ? $lastInterior->id + 1 : 1
            ]);
        }

        foreach (config('seeds.categories.tags') as $category) {
            $category = factory(App\Models\Category::class)->create($category);
            $images = $this->getAttachData(config('seed_settings.group_images_count'));

            $category->images()->attach($images, ['category_type' => 'tags']);
            $category->publish = 1;
            $category->save();
        }
    }

    /**
     * @param int $count
     * @return mixed
     */
    protected function getAttachData(int $count)
    {
        return Arr::random($this->getRangeImageIds(), $count);
    }

    /**
     * @return array
     */
    protected function getRangeImageIds()
    {
        return range(1, config('seed_settings.images_count'));
    }
}
