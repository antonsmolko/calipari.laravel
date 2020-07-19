<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Texture;
use Faker\Generator as Faker;

$factory->define(Texture::class, function (Faker $faker)
{
    $seedsUploadImageDir = config('seed_settings.seeds_data_path') . 'images';
    $seedsImagePath = config('seed_settings.seeds_uploads_path');

    $seedsImageDir = storage_path("app/" . $seedsImagePath);

    $images = getImagesFromLocal($seedsUploadImageDir);

    $uploadedImage = getFakerImageFromLocal($images, $seedsUploadImageDir, $seedsImageDir);

    $imageAttributes = uploader()->store($uploadedImage);

    return [
        "image_path" => $imageAttributes['path']
    ];
});
