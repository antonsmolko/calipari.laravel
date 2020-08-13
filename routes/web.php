<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return phpinfo();
//})->name('home');

Route::get('/', function () {
    $details = [
        'image_url' => 'https://manager.local.calipari.ru/api/image/pdf-project/86e3b9f461ccf7b247d2985ea22a736eb6ded3cf.jpg',
        'width_cm' => 378,
        'height_cm' => 265,
        'texture_name' => 'Mexico',
        'stripes_count' => 3,
        'added_costs' => [
            'Обработка изображения' => 1500,
            'Поиск изображения' => 500,
            'Покупка изображения' => 3000,
        ],
        'price' => 15600
    ];
    return view('pdf.project-details', ['details' => $details]);
})->name('home');

//Route::get('/logme', function () {
//    Log::critical('Critical message in Slack!');
//    return 'log ok';
//})->name('logme');

//Route::get('materials', function () {
//    return view('pages.materials');
//})->name('materials');
//
//Route::get('catalog', function () {
//    return view('pages.catalog');
//})->name('catalog');

//Route::get('login', function () {
//    return view('auth.login');
//})->name('login');
//
//Route::get('registration', function () {
//    return view('auth.registration');
//})->name('registration');
//
//Route::get('reset-password', function () {
//    return view('auth.reset-password');
//})->name('reset-password');


Route::prefix('cms')
    ->group(function() {
    Route::get('/{any?}', function() {
        return view('cms/main');
    })
        ->where('any', '.*')
        ->name('cms');
});
