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
        factory(App\Models\Post::class, 23)->create(['type' => 'news']);
        factory(App\Models\Post::class, 31)->create(['type' => 'guide']);
        factory(App\Models\Post::class, 17)->create(['type' => 'stocks']);
        factory(App\Models\Post::class, 12)->create(['type' => 'events']);
    }
}
