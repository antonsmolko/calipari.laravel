<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    $uploadDir = public_path(config('uploads.image_upload_path'));

    $seedsUploadImageDir = config('seeds.seeds_uploads_path') . 'images';
    $seedsImageDir = public_path(config('seeds.seeds_path'));

    File::deleteDirectory($seedsImageDir);
    File::makeDirectory($seedsImageDir, config('uploads.storage_permissions', 0755));

    $images = getImagesFromLocal($seedsUploadImageDir);

    $uploadedImage = getFakerImageFromLocal($images, $seedsUploadImageDir, $seedsImageDir);

    $imageAttributes = uploader()->upload($uploadedImage, $uploadDir);

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
