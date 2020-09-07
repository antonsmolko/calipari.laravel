<?php
/**
 * Dynamic image resizer routes
 */


Route::get('resize/{width}/{height}/{path}','ImageResizeController@resize')
    ->where([
        'width' => '\d+',
        'height' => '\d+',
        'path' => '[\w\.]+',
    ]);

Route::get('crop/{width}/{height}/{path}','ImageResizeController@crop')
    ->where([
        'width' => '\d+',
        'height' => '\d+',
        'path' => '[\w\.]+',
    ]);

Route::get(config('settings.order_item_full_url') .
    '/{width}/{height}/{x}/{y}/{flipH}/{flipV}/{colorize}/{path}','ImageResizeController@getOrderImage')
    ->where([
        'width' => '\d+',
        'height' => '\d+',
        'x' => '\d+',
        'y' => '\d+',
        'flipH' => '[0,1]',
        'flipV' => '[0,1]',
        'path' => '[\w\.]+'
    ]);

Route::get(config('settings.order_item_thumb_url') .
    '/{width}/{height}/{x}/{y}/{flipH}/{flipV}/{colorize}/{path}',
    'ImageResizeController@getOrderImageThumb')
    ->where([
        'width' => '\d+',
        'height' => '\d+',
        'x' => '\d+',
        'y' => '\d+',
        'flipH' => '[0,1]',
        'flipV' => '[0,1]',
        'path' => '[\w\.]+'
    ]);

Route::get(config('settings.mail_order_item_thumb_url') .
    '/{width}/{height}/{x}/{y}/{flipH}/{flipV}/{colorize}/{path}',
    'ImageResizeController@getMailOrderImageThumb')
    ->where([
        'width' => '\d+',
        'height' => '\d+',
        'x' => '\d+',
        'y' => '\d+',
        'flipH' => '[0,1]',
        'flipV' => '[0,1]',
        'path' => '[\w\.]+'
    ]);

Route::get(config('settings.pdf_label_order_item_image_url') .
    '/{width}/{height}/{x}/{y}/{flipH}/{flipV}/{colorize}/{path}',
    'ImageResizeController@getPDFLabelOrderImage')
    ->where([
        'width' => '\d+',
        'height' => '\d+',
        'x' => '\d+',
        'y' => '\d+',
        'flipH' => '[0,1]',
        'flipV' => '[0,1]',
        'path' => '[\w\.]+'
    ]);

Route::get(config('settings.pdf_layout_order_item_image_url') .
    '/{width}/{height}/{x}/{y}/{flipH}/{flipV}/{colorize}/{path}',
    'ImageResizeController@getPDFLayoutOrderImage')
    ->where([
        'width' => '\d+',
        'height' => '\d+',
        'x' => '\d+',
        'y' => '\d+',
        'flipH' => '[0,1]',
        'flipV' => '[0,1]',
        'path' => '[\w\.]+'
    ]);

Route::get(
    config('settings.pdf_project_image_url') . '/{path}',
    'ImageResizeController@getPDFProjectImage')
    ->where(['path' => '[\w\.]+']);

Route::get(
    config('settings.pdf_label_sale_image_url') . '/{path}',
    'ImageResizeController@getPDFSaleLabelImage')
    ->where(['path' => '[\w\.]+']);

Route::get(
    config('settings.mail_order_sale_thumb_url') . '/{path}',
    'ImageResizeController@getMailSaleImageThumb')
    ->where(['path' => '[\w\.]+']);

Route::get(
    config('settings.pdf_layout_sale_image_url') . '/{path}',
    'ImageResizeController@getPDFSaleLayoutImage')
    ->where(['path' => '[\w\.]+']);

Route::get('fit/{width}/{height}/{path}','ImageResizeController@fit')
    ->where([
        'width' => '\d+',
        'height' => '\d+',
        'path' => '[\w\.]+',
    ]);

Route::get('widen/{width}/{path}','ImageResizeController@widen')
    ->where([
        'width' => '\d+',
        'path' => '[\w\.]+',
    ]);

Route::get('heighten/{height}/{path}','ImageResizeController@heighten')
    ->where([
        'height' => '\d+',
        'path' => '[\w\.]+',
    ]);

Route::get('show/{path}','ImageResizeController@show')
    ->where('path','[\w\.]+');

Route::get('grayscale/{path}','ImageResizeController@showGrayscale')
    ->where('path','[\w\.]+');
