<?php
return [
    'image_article_length' => 5,
    'order_number_length' => 7, // < 20 !!!
    'order_phone_formats' => [
        '10' => '+7 ### ### ####',
        '11' => '# ### ### ####',
        '7' => '### ## ##',
        '6' => '## ## ##'
    ],
    'order_min_size' => 90,
    'base_image_url' => env('APP_URL') . '/api/image',
    'order_item_full_url' => '/order-full',
    'mail_order_item_thumb_url' => '/mail-thumb',
    'order_item_thumb_url' => '/thumb',
    'pdf_label_order_item_image_url' => '/pdf-label-order-item',
    'pdf_layout_order_item_image_url' => '/pdf-layout-order-item',
    'pdf_project_image_url' => '/pdf-project',
    'slack' => [
        'emoji' => [
            'order' => [
                'national_park',
                'cityscape',
                'foggy',
                'night_with_stars',
                'sunrise_over_mountains',
                'sunrise',
                'city_sunset',
                'city_sunrise',
                'bridge_at_night',
                'milky_way',
                'fireworks',
                'sparkler',

            ],
            'backcall' => 'telephone_receiver',
            'feedback' => 'incoming_envelope'
        ]
    ],
    'admin_role_name' => 'admin',
    'super_admin_role_name' => 'super_admin',
    'owner_role_name' => 'owner',
//    'roles_map' => [
//      'a' => 'admin',
//      's' => 'super_admin',
//      'o' => 'owner',
//      'm' => 'content_manager'
//    ],
//    'gates' => [
//        'dashboard' => 's,a,o,m',
//        'images' => 's,a,o,m',
//        'catalog' => 's,a,o,m',
//        'textures' => 's,a,o,m',
//        'orders' => 's,a,o,m',
//        'pages' => 's,a,o,m',
//        'users' => 's,a,o',
//        'settings' => 's,a,o,m',
//        'settings_admin' => 's,a',
//        'store' => 's,a,o',
//        'roles' => 's,o',
//        'permissions' => 's'
//    ]
    'filter_set' => [
        'flipH' => 'Отразить гор.',
        'flipV' => 'Отразить верт.',
        'colorize' => ['grayscale', 'sepia'],
        'grayscale' => 'ЧБ',
        'sepia' => 'Сепия'
    ]
];
