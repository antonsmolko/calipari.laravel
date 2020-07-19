<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker)
{
    $seedsUploadImagePath = config('seed_settings.seeds_data_path') . 'images';
    $seedsImagePath = config('seed_settings.seeds_uploads_path');

    $seedsImageDir = storage_path("app/" . $seedsImagePath);

    $images = getImagesFromLocal($seedsUploadImagePath);

    $uploadedImage = getFakerImageFromLocal($images, $seedsUploadImagePath, $seedsImageDir);

    $imageAttributes = uploader()->store($uploadedImage);

    return [
        "image_path" => $imageAttributes['path']
    ];
});
