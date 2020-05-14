<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (config('seeds.tags') as $tag) {
            $tag = App\Models\Tag::create($tag);
            $images = $this->getAttachData(config('seed_settings.tag_images_count'));
            $tag->images()->attach($images);
            $tag->publish = 1;
            $tag->save();
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
