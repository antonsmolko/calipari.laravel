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
            'title' => 'Политика конфиденциальности',
            'alias' => 'policy'
        ]
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
            'alias' => config('delivery.alias.pickup'),
            'order' => 1,
            'publish' => 1,
            'description' => 'г. Брянск'
        ],
        [
            'title' => 'Транспортная компания CDEK',
            'alias' => config('delivery.alias.cdek'),
            'order' => 2,
            'publish' => 1,
            'description' => 'до пункта самовывоза'
        ],
        [
            'title' => 'Курьер CDEK',
            'alias' => config('delivery.alias.cdek_courier'),
            'order' => 3,
            'publish' => 1,
            'description' => 'до двери'
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
            'title' => 'Изображения',
            'alias' => 'images',
            'description' => 'Изображения для оформления сайта'
        ],
        [
            'title' => 'Пункты самовывоза',
            'alias' => 'pickups',
            'description' => 'Группа настроек содержащих адреса пунктов самовывоза'
        ],
        [
            'title' => 'CDEK',
            'alias' => 'cdek',
            'description' => 'Группа настроек содержащих настройки транспортной компании CDEK'
        ],
    ],
    'settings' => [
        [
            'display_name' => 'Название сайта',
            'key_name' => 'site_name',
            'type' => 'text',
            'group_id' => 1
        ],
        [
            'display_name' => 'Название компании',
            'key_name' => 'company_name',
            'type' => 'text',
            'group_id' => 1
        ],
        [
            'display_name' => 'Основной телефон',
            'key_name' => 'company_phone',
            'type' => 'text',
            'group_id' => 2
        ],
        [
            'display_name' => 'Email',
            'key_name' => 'company_email',
            'type' => 'text',
            'group_id' => 2
        ],
        [
            'display_name' => 'Адрес',
            'key_name' => 'company_address',
            'type' => 'text',
            'group_id' => 2
        ],
        [
            'display_name' => 'Аккаунт группы VK',
            'key_name' => 'vk_account',
            'type' => 'text',
            'group_id' => 2
        ],
        [
            'display_name' => 'Аккаунт группы Facebook',
            'key_name' => 'facebook_account',
            'type' => 'text',
            'group_id' => 2
        ],
        [
            'display_name' => 'Аккаунт группы Instagram',
            'key_name' => 'instagram_account',
            'type' => 'text',
            'group_id' => 2
        ],
        [
            'display_name' => 'Изображение 1',
            'key_name' => 'image_1',
            'type' => 'file',
            'group_id' => 3
        ],
        [
            'display_name' => 'Изображение 2',
            'key_name' => 'image_2',
            'type' => 'file',
            'group_id' => 3
        ],
        [
            'display_name' => 'Изображение 3',
            'key_name' => 'image_3',
            'type' => 'file',
            'group_id' => 3
        ],
        [
            'display_name' => 'Изображение 4',
            'key_name' => 'image_4',
            'type' => 'file',
            'group_id' => 3
        ],
        [
            'display_name' => 'Изображение 5',
            'key_name' => 'image_5',
            'type' => 'file',
            'group_id' => 3
        ],
        [
            'display_name' => 'Изображение 6',
            'key_name' => 'image_6',
            'type' => 'file',
            'group_id' => 3
        ],
        [
            'display_name' => 'Московский 99',
            'key_name' => 'moscow_99',
            'type' => 'text',
            'value' => 'г. Брянск, пр-кт Московский, дом 99, строительный комплекс «Твой Дом», павильон 34',
            'group_id' => 4
        ],
        [
            'display_name' => 'Кромская 50',
            'key_name' => 'kromskaya_50',
            'type' => 'text',
            'value' => 'г. Брянск, ул. Кромская, дом 50, «Сервисбаза», склад 3Б',
            'group_id' => 4
        ],
        [
            'display_name' => 'Почтовый индекс отправителя',
            'key_name' => config('cdek.post_code_setting_key'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 5
        ],
        [
            'display_name' => 'Вес упакавки',
            'key_name' => config('cdek.package.weight'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 5
        ],
        [
            'display_name' => 'Высота упаковки',
            'key_name' => config('cdek.package.dimensions.height'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 5
        ],
        [
            'display_name' => 'Ширина упаковки',
            'key_name' => config('cdek.package.dimensions.width'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 5
        ],
        [
            'display_name' => 'Длина упаковки',
            'key_name' => config('cdek.package.dimensions.length'), //!!! Don't touch !!!
            'type' => 'text',
            'group_id' => 5
        ],
    ],
    'owners' => [
        [
            'title' => 'Shutterstock',
            'description' => 'https://shutterstock.com/ru/'
        ],
        [
            'title' => 'Depositphotos',
            'description' => 'https://ru.depositphotos.com/'
        ],
        [
            'title' => 'Эдуард',
            'description' => ''
        ],
    ],
//    'tags' => [
//        [
//            'title' => 'Праздники',
//            'description' => '',
//        ],
//        [
//            'title' => 'Машинки',
//            'description' => '',
//        ],
//        [
//            'title' => 'Мультики',
//            'description' => '',
//        ],
//        [
//            'title' => 'Мстители',
//            'description' => '',
//        ],
//        [
//            'title' => 'Железный человек',
//            'description' => '',
//        ],
//        [
//            'title' => 'Халк',
//            'description' => '',
//        ],
//        [
//            'title' => 'Звездные войны',
//            'description' => '',
//        ],
//        [
//            'title' => 'Дарт Вейдер',
//            'description' => '',
//        ],
//        [
//            'title' => 'Чубака',
//            'description' => '',
//        ],
//        [
//            'title' => 'Футбол',
//            'description' => '',
//        ],
//        [
//            'title' => 'Месси',
//            'description' => '',
//        ],
//        [
//            'title' => 'Роналду',
//            'description' => '',
//        ],
//        [
//            'title' => 'Леброн Джеймс',
//            'description' => '',
//        ],
//        [
//            'title' => 'Баскетбол',
//            'description' => '',
//        ],
//        [
//            'title' => 'Майкл Джордан',
//            'description' => '',
//        ],
//        [
//            'title' => 'Стефен Карри',
//            'description' => '',
//        ],
//        [
//            'title' => 'Формула 1',
//            'description' => '',
//        ],
//        [
//            'title' => 'Ferrari',
//            'description' => '',
//        ],
//        [
//            'title' => 'Lamborghini',
//            'description' => '',
//        ],
//        [
//            'title' => 'Aston Martin',
//            'description' => '',
//        ],
//        [
//            'title' => 'Mercedes Benz',
//            'description' => '',
//        ],
//        [
//            'title' => 'BMV',
//            'description' => '',
//        ],
//        [
//            'title' => 'Audi',
//            'description' => '',
//        ],
//        [
//            'title' => 'McLaren',
//            'description' => '',
//        ]
//    ],
    'seeds_uploads_path' => 'seed_data/',
    'seeds_path' => 'storage/uploads/seed_uploads/',
    'categories' => [
        'topics' => [
            [
                'type' => 'topics',
                'title' => 'Абстракция',
                'alias' => 'abstraction',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Архитектура',
                'alias' => 'architecture',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Геометрия',
                'alias' => 'geometry',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Живопись',
                'alias' => 'painting',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Животные',
                'alias' => 'animals',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Замки',
                'alias' => 'castles',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Карты',
                'alias' => 'maps',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Корабли',
                'alias' => 'ships',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Космос',
                'alias' => 'space',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Мегаполис',
                'alias' => 'megalopolis',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Природа',
                'alias' => 'nature',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Ретро',
                'alias' => 'retro',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Текстуры',
                'alias' => 'textures',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Улицы, улочки, дома',
                'alias' => 'streets-houses',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Флористика',
                'alias' => 'floristics',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Фоны',
                'alias' => 'backgrounds',
                'description' => '',
                'keywords' => ''
            ],
            [
                'type' => 'topics',
                'title' => 'Цветы и растения',
                'alias' => 'flowers-plants',
                'description' => '',
                'keywords' => ''
            ]
        ],
        'colors' => [
            [
                'type' => 'colors',
                'title' => 'Белый',
                'alias' => 'white',
                'description' => 'Изображения преимущественно белого цвета',
                'keywords' => 'белый, white'
            ],
            [
                'type' => 'colors',
                'title' => 'Черный',
                'alias' => 'black',
                'description' => 'Изображения преимущественно черного цвета',
                'keywords' => 'черный, black'
            ],
            [
                'type' => 'colors',
                'title' => 'Красный',
                'alias' => 'tomato',
                'description' => 'Изображения преимущественно красного цвета',
                'keywords' => 'красный, red'
            ],
            [
                'type' => 'colors',
                'title' => 'Зеленый',
                'alias' => 'limegreen',
                'description' => 'Изображения преимущественно зеленого цвета',
                'keywords' => 'зеленый, green'
            ],
            [
                'type' => 'colors',
                'title' => 'Синий',
                'alias' => 'dodgerblue',
                'description' => 'Изображения преимущественно синего цвета',
                'keywords' => 'синий, blue, голубой'
            ],
            [
                'type' => 'colors',
                'title' => 'Фиолетовый',
                'alias' => 'darkviolet',
                'description' => 'Изображения преимущественно фиолетового цвета',
                'keywords' => 'фиолетовый, violet'
            ]
        ],
        'interiors' => [
            [
                'type' => 'interiors',
                'title' => 'Гостиная',
                'alias' => 'living-room',
                'description' => 'Изображения для гостиной',
                'keywords' => 'гостиная, living room'
            ],
            [
                'type' => 'interiors',
                'title' => 'Спальня',
                'alias' => 'bad-room',
                'description' => 'Изображения для спальной',
                'keywords' => 'спальня, bad room'
            ],
            [
                'type' => 'interiors',
                'title' => 'Кухня',
                'alias' => 'kitchen',
                'description' => 'Изображения для кухни',
                'keywords' => 'кухня, kitchen'
            ],
            [
                'type' => 'interiors',
                'title' => 'Детская',
                'alias' => 'child-room',
                'description' => 'Изображения для детской',
                'keywords' => 'детская, child room'
            ],
            [
                'type' => 'interiors',
                'title' => 'Прихожая',
                'alias' => 'hallway',
                'description' => 'Изображения для коридора',
                'keywords' => 'прихожая, hallway'
            ],
            [
                'type' => 'interiors',
                'title' => 'Офис',
                'alias' => 'office',
                'description' => 'Изображения для офиса',
                'keywords' => 'офис, office'
            ]
        ],
        'tags' => [
            [
                'title' => 'Праздники',
                'alias' => 'holidays',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Машинки',
                'alias' => 'cars',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Мультики',
                'alias' => 'cartoons',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Мстители',
                'alias' => 'avengers',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Железный человек',
                'alias' => 'iron-man',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Халк',
                'alias' => 'hulk',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Звездные войны',
                'alias' => 'star-wars',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Дарт Вейдер',
                'alias' => 'dart-weider',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Чубака',
                'alias' => 'chewbuck',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Футбол',
                'alias' => 'football',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Месси',
                'alias' => 'messi',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Роналду',
                'alias' => 'ronaldu',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Леброн Джеймс',
                'alias' => 'lebron',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Баскетбол',
                'alias' => 'basketball',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Майкл Джордан',
                'alias' => 'mj',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Стефен Карри',
                'alias' => 'stef',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Формула 1',
                'alias' => 'f1',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Ferrari',
                'alias' => 'ferrari',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Lamborghini',
                'alias' => 'lamborghini',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Aston Martin',
                'alias' => 'aston-martin',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Mercedes Benz',
                'alias' => 'mercedes-benz',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'BMV',
                'alias' => 'bmv',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'Audi',
                'alias' => 'audi',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ],
            [
                'title' => 'McLaren',
                'alias' => 'mclaren',
                'type' => 'tags',
                'keywords' => '',
                'description' => '',
            ]
        ],
    ],
    'textures' => [
        [
            'name' => 'Кора',
            'image_key' => '01',
            'width' => 104,
            'price' => 990,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>'
        ],
        [
            'name' => 'Бамбук',
            'image_key' => '02',
            'width' => 105,
            'price' => 1050,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>'
        ],
        [
            'name' => 'Лен',
            'image_key' => '03',
            'width' => 104,
            'price' => 1100,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>'
        ],
        [
            'name' => 'Иней',
            'image_key' => '04',
            'width' => 107,
            'price' => 1590,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>'
        ],
        [
            'name' => 'Суфле',
            'image_key' => '05',
            'width' => 104,
            'price' => 1000,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>'
        ],
        [
            'name' => 'Скорлупа',
            'image_key' => '06',
            'width' => 105,
            'price' => 1990,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>'
        ],
        [
            'name' => 'Сметана',
            'image_key' => '07',
            'width' => 102,
            'price' => 1200,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>'
        ],
        [
            'name' => 'Штукатурка',
            'image_key' => '08',
            'width' => 104,
            'price' => 1340,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p>'
        ],
        [
            'name' => 'Холст',
            'image_key' => '09',
            'width' => 105,
            'price' => 1190,
            'description' => '<p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.</p><p>Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.</p><p>Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений.</p>'
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
            'title' => 'Выполнен',
            'alias' => 'completed',
            'order' => 6
        ]
    ]
];
