<?php
/**
 * Dynamic image resizer routes
 */
Route::group(['prefix' => 'image'], function() {
    Route::get('resize/{width}/{height}/{path}','ImageResize\ImageResizeController@resize')
        ->where([
            'width' => '\d+',
            'height' => '\d+',
            'path' => '[\w\.]+',
        ]);

    Route::get('crop/{width}/{height}/{path}','ImageResize\ImageResizeController@crop')
        ->where([
            'width' => '\d+',
            'height' => '\d+',
            'path' => '[\w\.]+',
        ]);

    Route::get(config('settings.order_item_full_url') .
        '/{width}/{height}/{x}/{y}/{flipH}/{flipV}/{colorize}/{path}','ImageResize\ImageResizeController@getOrderImage')
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
        'ImageResize\ImageResizeController@getOrderImageThumb')
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
        'ImageResize\ImageResizeController@getMailOrderImageThumb')
        ->where([
            'width' => '\d+',
            'height' => '\d+',
            'x' => '\d+',
            'y' => '\d+',
            'flipH' => '[0,1]',
            'flipV' => '[0,1]',
            'path' => '[\w\.]+'
        ]);

    Route::get('fit/{width}/{height}/{path}','ImageResize\ImageResizeController@fit')
        ->where([
            'width' => '\d+',
            'height' => '\d+',
            'path' => '[\w\.]+',
        ]);

    Route::get('widen/{width}/{path}','ImageResize\ImageResizeController@widen')
        ->where([
            'width' => '\d+',
            'path' => '[\w\.]+',
        ]);

    Route::get('heighten/{height}/{path}','ImageResize\ImageResizeController@heighten')
        ->where([
            'height' => '\d+',
            'path' => '[\w\.]+',
        ]);

    Route::get('show/{path}','ImageResize\ImageResizeController@show')
        ->where('path','[\w\.]+');

    Route::get('grayscale/{path}','ImageResize\ImageResizeController@showGrayscale')
        ->where('path','[\w\.]+');
});
