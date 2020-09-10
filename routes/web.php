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

Route::get('/', function () {
    return phpinfo();
})->name('home');

Route::get('/', function () {
    $details = [
        'number' => 5932354,
        'date' => '17.08.2020',
        'status' => 'В обработке',
        'items' => [
            0 => [
                'article' => '043235',
                'image_url' => 'https://manager.local.calipari.ru/api/image/pdf-project/86e3b9f461ccf7b247d2985ea22a736eb6ded3cf.jpg',
                'dimensions' => 'Ш: 350 см x В: 260 см',
                'texture' => 'Mexico',
                'stripes_count' => 3,
                'added_costs' => [
                    'Обработка изображения' => 1500,
                    'Поиск изображения' => 500,
                    'Покупка изображения' => 3000,
                ],
                'added_costs_amount' => 5000,
                'filter' => 'Отразить гор., ЧБ',
                'qty' => 1,
                'price' => 15600,
            ],
            1 => [
                'article' => '043235',
                'image_url' => 'https://manager.local.calipari.ru/api/image/pdf-project/86e3b9f461ccf7b247d2985ea22a736eb6ded3cf.jpg',
                'dimensions' => 'Ш: 350 см x В: 260 см',
                'texture' => 'Mexico',
                'stripes_count' => 3,
                'added_costs' => [
                    'Обработка изображения' => 1500,
                    'Поиск изображения' => 500,
                    'Покупка изображения' => 3000,
                ],
                'added_costs_amount' => 5000,
                'filter' => 'Отразить гор., ЧБ',
                'qty' => 1,
                'price' => 15600,
            ]
        ],
        'goodsQty' => '3 ТОВАРА',
        'delivery' => [
            'title' => 'Транспортная компания CDEK',
            'locality' => 'Брянская обл.',
            'address' => 'ул. Котовского, дом 5, кв. 5',
            'price' => 715
        ],
        'customer' => [
            'name' => 'Смолко Виктория Викторовна',
            'phone' => 89529674204
        ],
        'price' => 43532,
        'comment' => 'Спецсимволы чувствительны к регистру, поэтому их необходимо прописывать точно так, как указано в таблице. Спецсимволы, не имеющие мнемоники, могут не отображаться вовсе или же некорректно отображаться в тех или иных браузерах.'
    ];
    return view('pdf.order-details', ['details' => $details]);
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
