<?php

return [
    'name' => [
        'min' => 2,
        'max' => 50
    ],
    'title' => [
        'min' => 2,
        'max' => 100
    ],
    'long_title' => [
        'min' => 2,
        'max' => 150
    ],
    'meta_title' => [
        'min' => 2,
        'max' => 150
    ],
    'description' => [
        'max' => 250
    ],
    'keywords' => [
        'max' => 100
    ],
    'text' => [
        'max' => 1000
    ],
    'password' => [
        'min' => 6,
        'max' => 50
    ],
    'upload' => [
        'min_size' => 3,
        'max_size' => 1024,
        'mimes' => 'jpeg,png,gif,webp'
    ],
    'images' => [
        'max_id_number' => 99999,
        'max_print_width' => 5000
    ],
    'alias' => [
        'min' => 2,
        'max' => 50,
        'pattern' => '/^([a-z0-9]+[-]?)+(?<!-)$/'
    ],
    'setting' => [
        'min' => 2,
        'max' => 50,
        'pattern' => '/^([a-z0-9]+[_]?)+(?<!-)$/'
    ],
    'email' => [
        'pattern' => '/.+@.+\..+/i',
        'max' => 50
    ],
    'integer' => [
        'max' => 10
    ],
    'phone' => [
        'pattern' => '/^(\+7){1} (\([0-9]{3}\)){1} [0-9]{3} [0-9]{4}$/'
    ],
    'message' => [
        'min' => 2,
        'max' => 500
    ]
];
