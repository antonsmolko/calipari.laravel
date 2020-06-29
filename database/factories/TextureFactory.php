<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Texture;
use Faker\Generator as Faker;

$factory->define(Texture::class, function (Faker $faker) {
    $uploadDir = public_path(config('uploads.image_upload_path'));

    $seedsUploadImageDir = config('seeds.seeds_data_path');
    $seedsImageDir = public_path(config('seeds.seeds_uploads_path'));

    File::deleteDirectory($seedsImageDir);
    File::makeDirectory($seedsImageDir, config('uploads.storage_permissions', 0755));

    $images = getImagesFromLocal($seedsUploadImageDir);

    $uploadedImage = getFakerImageFromLocal($images, $seedsUploadImageDir, $seedsImageDir);

    $imageAttributes = uploader()->upload($uploadedImage, $uploadDir);

    return [
        "image_path" => $imageAttributes['path']
    ];
});
