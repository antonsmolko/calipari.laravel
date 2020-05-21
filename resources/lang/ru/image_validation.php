<?php

return [
    'error_image_upload' => 'Ошибка загрузки изображений!',
    'error_rule_config' => 'Ошибка конфигурации правил загрузки изображений - «app/config/uploads.php/image_upload_rules/:rule_name»!',
    'wrong_extension' => 'Файл «:file_name» имеет недопустимое расширение. Разрешены только следующие расширения: :extensions!',
    'wrong_mime' => 'Файл «:file_name» недопустимого типа. Разрешены только следующие MIME типы: :mime_types!',
    'wrong_min_size' => 'Файл «:file_name» имеет недопустимый размер. Минимальный размер загружаемого файла - :size КБ!',
    'wrong_max_size' => 'Файл «:file_name» имеет недопустимый размер. Максимальный размер загружаемого файла - :size КБ!',
    'loading_failed' => 'Загрузка файла «:file_name» не удалась или файл поврежден!',
    'can_not_create_directory' => 'Не могу создать директорию «:path»!',
    'not_writable_directory' => 'Директория «:path» не доступна для записи!',
    'wrong_proportions' => 'Пропорции изображения «:file_name» не входят в допустимые пределы!',
    'unable_to_delete_main_image_of_collection' => 'Невозможно удалить главное изображение коллекции!',
    'unable_to_unpublish_main_image_of_collection' => 'Невозможно отменить публикацию главного изображения коллекции!',
    'unable_to_remove_image_of_collection' => 'Невозможно отвязать изображение коллекции!',
    'dimensions_should_be_same_as_previous' => 'Размеры изображения должны быть такими же, как у предыдущего изображения: высота - :width px, ширина - :height px!'
];
