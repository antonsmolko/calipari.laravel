<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker)
{
    $seedsUploadImagePath = config('seed_settings.seeds_data_path') . 'images';
    $seedsImagePath = config('seed_settings.seeds_uploads_path');

    $seedsImageDir = storage_path("app/" . $seedsImagePath);
    $images = getImagesFromLocal($seedsUploadImagePath);
    $uploadedImage = getFakerImageFromLocal($images, $seedsUploadImagePath, $seedsImageDir);
    $imageAttributes = uploader()->store($uploadedImage);

    return [
        'title' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'alias' => $faker->unique()->domainWord,
        'date' => $faker->dateTime($max = 'now', $timezone = null)->getTimestamp(),
        'content' => $faker->realText($maxNbChars = 500, $indexSize = 2),
        'image_path' => $imageAttributes['path'],
        'intro' => $faker->text(150),
        'publish' => 1
    ];
});
