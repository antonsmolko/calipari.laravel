<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seedsImagePath = config('seed_settings.seeds_uploads_path');
        Storage::deleteDirectory($seedsImagePath);
        Storage::makeDirectory($seedsImagePath);

        factory(App\Models\Post::class, 23)->create(['type' => 'news']);
        factory(App\Models\Post::class, 31)->create(['type' => 'guide']);
        factory(App\Models\Post::class, 17)->create(['type' => 'stocks']);
        factory(App\Models\Post::class, 12)->create(['type' => 'events']);

        Storage::makeDirectory($seedsImagePath);
    }
}
