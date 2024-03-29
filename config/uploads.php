<?php

return [
//    's3_api_endpoint' => 'https://d33ghnif9htj1j.cloudfront.net',
    'default_max_print_width' => 640,
    'default_max_print_height' => 320,
    'default_extension' => 'jpg',
    'image_upload_path' => 'public/uploads/images',
    'no_image_path' => 'public/uploads/no_image/image_placeholder.jpg',
    'storage_permissions' => 0755,
    'image_resize_quality' => 90,
    'image_cache_time' => 60 * 60 * 24 * 7,
    'image_upload_rules' => [
        'max_size' => 5242880,
        'min_size' => 3072,
        'extensions' => [
            'jpeg',
            'jpg',
            'png',
            'webp',
        ],
        'mime' => [
            'image/jpeg',
            'image/png',
            'image/webp',
        ],
    ],
    'serviceImagesPath' => 'uploads/service-images',
    'image_sizes' => [
        ['width' => 1920, 'height' => 1080],
        ['width' => 1920, 'height' => 1080],
        ['width' => 1920, 'height' => 1080],
        ['width' => 1920, 'height' => 960],
        ['width' => 1920, 'height' => 700],
        ['width' => 1600, 'height' => 1080],
        ['width' => 1600, 'height' => 1080],
        ['width' => 1400, 'height' => 1080],
        ['width' => 1400, 'height' => 1080],
        ['width' => 1200, 'height' => 1080],
        ['width' => 1080, 'height' => 1080]
    ],
    'category_image_size' => [
        'width' => 1920,
        'height' => 1080
    ],
    'texture_image_sizes' => [
        'thumb' => ['width' => 300, 'height' => 300],
        'sample' => ['width' => 800, 'height' => 800],
        'background' => ['width' => 1920, 'height' => 1080]
    ]
];
