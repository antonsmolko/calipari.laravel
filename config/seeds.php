<?php

return [
    'pages' => [
        '1' => [
            'title' => 'Главная',
            'alias' => 'home'
        ],
        '2' => [
            'title' => 'Каталог',
            'alias' => 'catalog'
        ],
        '3' => [
            'title' => 'Текстуры',
            'alias' => 'textures'
        ],
        '4' => [
            'title' => 'Контакты',
            'alias' => 'contacts'
        ],
        '5' => [
            'title' => 'Портфолио',
            'alias' => 'portfolio'
        ],
        '6' => [
            'title' => 'Блог',
            'alias' => 'blog'
        ],
        '7' => [
            'title' => 'Политика конфиденциальности',
            'alias' => 'policy'
        ],
        '8' => [
            'title' => 'Договор оферты',
            'alias' => 'contract-offer'
        ],
        '9' => [
            'title' => 'Доставка, оплата',
            'alias' => 'shipping-payment'
        ],
        '10' => [
            'title' => 'Распродажа',
            'alias' => 'sales'
        ],
        '11' => [
            'title' => 'Отзывы клиентов',
            'alias' => 'reviews'
        ],
    ],
    'formats' => [
        '1' => [
            'title' => 'Портрет',
            'alias' => 'portrait',
            'icon' => 'crop_portrait',
            'min' => 0.1,
            'max' => 0.8
        ],
        '2' => [
            'title' => 'Альбом',
            'alias' => 'landscape',
            'icon' => 'crop_landscape',
            'min' => 1.2,
            'max' => 1.9
        ],
        '3' => [
            'title' => 'Квадрат',
            'alias' => 'square',
            'icon' => 'crop_square',
            'min' => 0.8,
            'max' => 1.2
        ],
        '4' => [
            'title' => 'Панорама',
            'alias' => 'panorama',
            'icon' => 'crop_7_5',
            'min' => 1.9,
            'max' => 9.9
        ]
    ],
    'deliveries' => [
        [
            'title' => 'Самовывоз',
            'alias' => 'pickup-bryansk',
            'order' => 1,
            'publish' => 1,
            'description' => 'г. Брянск'
        ],
        [
            'title' => 'Транспортная компания CDEK',
            'alias' => 'cdek',
            'order' => 2,
            'publish' => 1,
            'description' => 'до пункта самовывоза'
        ],
        [
            'title' => 'Курьер CDEK',
            'alias' => 'cdek-courier',
            'order' => 3,
            'publish' => 1,
            'description' => 'до двери'
        ]
    ],
    'pickups' => [
        [
            'delivery_id' => 1,
            'title' => 'Московский, 99',
            'locality' => 'Брянск',
            'address' => 'пр-кт Московский, дом 99, строительный комплекс «Твой Дом», павильон 34',
            'publish' => 1
        ],
        [
            'delivery_id' => 1,
            'title' => 'Кромская, 50',
            'locality' => 'Брянск',
            'address' => 'ул. Кромская, дом 50, «Сервисбаза», склад 3Б',
            'publish' => 1
        ]
    ],
    'setting_groups' => [
        [
            'title' => 'Основные',
            'alias' => 'main',
            'description' => 'Основные настройки сайта'
        ],
        [
            'title' => 'Контакты',
            'alias' => 'contacts',
            'description' => 'Телефон, email, адрес, социальные сети'
        ],
        [
            'title' => 'Schema Org',
            'alias' => 'schema-org',
            'description' => 'Настройки для Schema Org'
        ],
        [
            'title' => 'CDEK',
            'alias' => 'cdek',
            'description' => 'Группа настроек содержащих настройки транспортной компании CDEK'
        ],
        [
            'title' => 'Дополнительная оплата заказа',
            'alias' => 'order-added-costs',
            'description' => 'Группа настроек, содержащая дополнительные пункты оплаты для персонального заказа'
        ],
    ],
    'settings' => [
        [
            'display_name' => 'App Url',
            'key_name' => 'app_url',
            'value' => env('APP_URL'),
            'type' => 'text'
        ],
        [
            'display_name' => 'Название сайта',
            'key_name' => 'site_name',
            'type' => 'text',
            'value' => 'calipari.ru',
            'group_id' => 1
        ],
        [
            'display_name' => 'Название компании',
            'key_name' => 'company_name',
            'type' => 'text',
            'value' => 'Calipari',
            'group_id' => 1
        ],
        [
            'display_name' => 'Основной телефон',
            'key_name' => 'company_phone',
            'type' => 'text',
            'value' => '+79529674204',
            'group_id' => 2
        ],
        [
            'display_name' => 'Email',
            'key_name' => 'company_email',
            'type' => 'text',
            'value' => 'info@calipari.ru',
            'group_id' => 2
        ],
        [
            'display_name' => 'Адрес',
            'key_name' => 'company_address',
            'type' => 'text',
            'value' => 'Ул. Котовского, дом 5, кв. 5',
            'group_id' => 2
        ],
        [
            'display_name' => 'Аккаунт группы VK',
            'key_name' => 'vk_account',
            'type' => 'text',
            'value' => 'https://vk.com',
            'group_id' => 2
        ],
        [
            'display_name' => 'Аккаунт группы Facebook',
            'key_name' => 'facebook_account',
            'type' => 'text',
            'value' => 'https://facebook.com',
            'group_id' => 2
        ],
        [
            'display_name' => 'Аккаунт группы Instagram',
            'key_name' => 'instagram_account',
            'type' => 'text',
            'value' => 'https://instagram.com',
            'group_id' => 2
        ],
        [
            'display_name' => 'OG Image',
            'key_name' => 'default_og_image',
            'type' => 'file',
            'group_id' => 3
        ],
        [
            'display_name' => 'OG Image Alt',
            'key_name' => 'default_og_image_alt',
            'type' => 'text',
            'group_id' => 3
        ],
        [
            'display_name' => 'Почтовый индекс отправителя',
            'key_name' => config('cdek.post_code_setting_key'), //!!! Don't touch !!!
            'value' => config('cdek.default_post_code'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 4
        ],
        [
            'display_name' => 'Вес упакавки',
            'key_name' => config('cdek.package_weight_setting_key'),
            'value'=> config('cdek.package.weight'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 4
        ],
        [
            'display_name' => 'Высота упаковки',
            'key_name' => config('cdek.package_height_setting_key'),
            'value'=> config('cdek.package.dimensions.height'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 4
        ],
        [
            'display_name' => 'Ширина упаковки',
            'key_name' => config('cdek.package_width_setting_key'),
            'value'=> config('cdek.package.dimensions.width'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 4
        ],
        [
            'display_name' => 'Длина упаковки',
            'key_name' => config('cdek.package_length_setting_key'),
            'value'=> config('cdek.package.dimensions.length'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 4
        ],
        [
            'display_name' => 'Обработка изображения',
            'key_name' => 'image_processing',
            'value'=> '1500',
            'type' => 'text',
            'group_id' => 5
        ],
        [
            'display_name' => 'Поиск изображения',
            'key_name' => 'image_search',
            'value'=> '500',
            'type' => 'text',
            'group_id' => 5
        ]
    ],
    'order_statuses' => [
        [
            'title' => 'В обработке',
            'alias' => 'processing',
            'order' => 1
        ],
        [
            'title' => 'Подтвержден',
            'alias' => 'confirmed',
            'order' => 2
        ],
        [
            'title' => 'Отменен',
            'alias' => 'canceled',
            'order' => 3
        ],
        [
            'title' => 'Оплачен',
            'alias' => 'paid',
            'order' => 4
        ],
        [
            'title' => 'Отправлен',
            'alias' => 'shipped',
            'order' => 5
        ],
        [
            'title' => 'Доставлен',
            'alias' => 'delivered',
            'order' => 6
        ],
        [
            'title' => 'Выполнен',
            'alias' => 'completed',
            'order' => 7
        ],
        [
            'title' => 'Частично возмещен',
            'alias' => 'partially_refunded',
            'order' => 8
        ],
        [
            'title' => 'Возмещен',
            'alias' => 'refunded',
            'order' => 9
        ]
    ]
];
