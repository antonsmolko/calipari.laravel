<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// SDEK

//Route::get('/cdek/regions', 'CDEK\CDEKController@getRegions');
Route::post('/cdek/pvzs', 'CDEK\CDEKController@getPVZS');
Route::post('/cdek/settlements', 'CDEK\CDEKController@getSettlements');
Route::post('/cdek/price', 'CDEK\CDEKController@getPrice');
//Route::get('/cdek/curl', 'CDEK\CDEKController@curlGet');

/* Payment */
Route::get('/payment/create/{hash_number}', 'Payment\PaymentController@create');
Route::post('/payment/notifications', 'Payment\PaymentController@notify');

// Authorisation

Route::group(['prefix' => '/auth', ['middleware' => 'throttle:20,5']], function() {
    Route::post('/register', 'Auth\RegisterController@register');

    Route::post('/login', 'Auth\LoginController@login')->middleware('auth.valid');

    Route::get('/login/{service}', 'Auth\SocialLoginController@redirect');
    Route::get('/login/{service}/callback', 'Auth\SocialLoginController@callback');
    Route::post('/login/{service}/register', 'Auth\SocialLoginController@registered');

    // Send reset password mail
    Route::post('/reset-password', 'Auth\ForgotPasswordController@sendPasswordResetLink');
    Route::post('/reset/password', 'Auth\ResetPasswordController@callResetPassword');
});

Route::group(['prefix' => '/auth'], function() {
    Route::get('me', 'Auth\AuthController@me');
    Route::post('refresh', 'Auth\AuthController@refresh');
    Route::get('logout', 'Auth\AuthController@logout')->middleware('jwt.auth');
});


// Client API

Route::prefix('catalog')
    ->group(function() {
        Route::get('images', 'Client\Image\ImageController@getItems')
            //    ->middleware('lqb.delimiter')
            ->name('catalog.images');

        Route::get('images/{id}', 'Client\Image\ImageController@getItem')
            ->where('id', '[0-9]+');

        Route::get('images/{id}/editor', 'Client\Image\ImageController@getItemFromEditor')
            ->where('id', '[0-9]+');

        Route::post('images/wish-list/tags', 'Client\Image\ImageController@getWishListTags')
            ->name('catalog.images.wish-list.tags');

        Route::get('categories', 'Client\Category\CategoryController@index');

        Route::get('categories/{category}', 'Client\Category\CategoryController@getItemByAlias');
        Route::post('categories/{id}/images', 'Client\Category\CategoryController@getImages')
            ->where('id', '[0-9]+');

        Route::get('categories/{id}/tags', 'Client\Category\CategoryController@getItemTags')
            ->where('id', '[0-9]+');


        // Search
        Route::get('search/{query}', 'Client\Search\SearchController');

        // Collection
        Route::get('collections/{collection}', 'Client\Collection\CollectionController@getItemByAliasWithImages')
            ->where('collection', '[a-z]+');
        Route::get('collections/{id}/tags', 'Client\Collection\CollectionController@getItemTags')
            ->where('id', '[0-9]+');


        // Filters

        Route::prefix('filters')
//    ->middleware('lqb.delimiter')
            ->group(function() {
                Route::get('formats', 'Client\Filter\FilterController@getFormatFilters')
                    ->name('catalog.filters.formats');
                Route::get('tags', 'Client\Filter\FilterController@getTagFilters')
                    ->name('catalog.filters.tags');
                Route::get('topics', 'Client\Filter\FilterController@getTopicFilters')
                    ->name('catalog.filters.topics');
                Route::get('colors', 'Client\Filter\FilterController@getColorFilters')
                    ->name('catalog.filters.colors');
                Route::get('interiors', 'Client\Filter\FilterController@getInteriorFilters')
                    ->name('catalog.filters.interiors');
            });
    });

// Delivery
Route::get('delivery', 'Client\Delivery\DeliveryController@index');

// Settings
Route::get('settings', 'Client\SettingGroup\SettingGroupController@index');

// Orders
Route::group(['prefix' => 'orders'], function() {
    Route::post('/', 'Client\Order\OrderController@store');
});

// Carts
//Route::apiResource('carts', 'Client\Cart\CartController')
//    ->except(['edit', 'delete']);
Route::group(['prefix' => 'carts'], function() {
    Route::post('/', 'Client\Cart\CartController@update')->middleware('jwt.auth');
    Route::post('sync', 'Client\Cart\CartController@sync')->middleware('jwt.auth');
    Route::post('set-qty', 'Client\Cart\CartController@setQty')->middleware('jwt.auth');
    Route::delete('{id}', 'Client\Cart\CartController@delete')
        ->where('id', '[0-9]+')
        ->middleware('jwt.auth');
    Route::post('add', 'Client\Cart\CartController@add')->middleware('jwt.auth');
});

/** Pages */

/** Get Page SEO Content */
Route::get('pages/{page}', 'Client\Page\PageController@getItemByAlias');

/** Home: PurchaseSteps */
Route::get('home-purchase-steps', 'Client\PurchaseStep\PurchaseStepController');

/** Home: Interiors */
Route::get('home-interiors', 'Client\HomeModuleInterior\HomeModuleInteriorController');

/** Portfolio Module: Work Examples */
Route::post('work-examples/list', 'Client\WorkExample\WorkExampleController@getItems');

/** Blog Module: Posts */
Route::group(['prefix' => 'posts'], function () {
    Route::get('types', 'Client\Post\PostController@getPublishedTypes');
    Route::post('{type}/list', 'Client\Post\PostController@getItems');
    Route::get('{post}', 'Client\Post\PostController@getItemByAlias')
        ->where('id', '[0-9]+');
});


// Users
Route::prefix('profile')
    ->middleware('jwt.auth')
    ->group(function(){
        Route::post('details', 'Client\User\UserDetailController@update');
        Route::get('details', 'Client\User\UserDetailController@getItem');
        Route::post('name', 'Client\User\UserController@updateName');
        Route::post('email', 'Client\User\UserController@updateEmail');
        Route::get('orders', 'Client\User\UserController@getOrders');
        Route::get('orders/{number}/cancel', 'Client\User\UserController@cancelOrder')
            ->where('number', '[0-9]+');
        Route::get('orders/{number}', 'Client\User\UserController@getOrder')
            ->where('number', '[0-9]+');
        Route::group(['prefix' => 'wishlist'], function() {
           Route::post('/sync', 'Client\User\UserController@syncLikes');
           Route::get('/{imageId}/toggle', 'Client\User\UserController@toggleLike')
               ->where('number', '[0-9]+');
        });
    });


// Cms

Route::group(['prefix' => 'manager'], function() {


    // Images

    Route::post('images/paginate', 'Cms\Image\ImageController@getItems')
        ->name('images.list');
    Route::post('images/trashed/paginate', 'Cms\Image\ImageController@getTrashedItems')
        ->name('images.trashed.list');
    Route::get('images/{id}/force-delete', 'Cms\Image\ImageController@forceDelete')
        ->where('id', '[0-9]+')
        ->name('images.force.delete');
    Route::get('images/{id}/restore', 'Cms\Image\ImageController@restore')
        ->where('id', '[0-9]+')
        ->name('images.restore');
    Route::get('images/{id}/publish', 'Cms\Image\ImageController@publish')
        ->where('id', '[0-9]+')
        ->name('images.publish');
    Route::get('images/{id}/remove-owner', 'Cms\Image\ImageController@removeOwner')
        ->where('id', '[0-9]+')
        ->name('images.remove-owner');
    Route::post('images/{id}', 'Cms\Image\ImageController@update')
        ->where('id', '[0-9]+')
        ->name('images.update');
    Route::apiResource('images', 'Cms\Image\ImageController')
        ->except(['index', 'create', 'edit', 'update']);


    // Catalog

    Route::group(['prefix' => 'catalog'], function () {


        // Categories

        Route::group(['prefix' => 'categories'], function() {
            Route::get('{id}/edit', 'Cms\Category\CategoryController@getItemFromEdit')
                ->where('id', '[0-9]+');
            Route::get('type/{type}', 'Cms\Category\CategoryController@getItemsByType')
                ->where('type', '[a-z]+');
            Route::post('{id}/images', 'Cms\Category\CategoryController@getImages')
                ->where('id', '[0-9]+');
            Route::post('{id}/images/excluded', 'Cms\Category\CategoryController@getExcludedImages')
                ->where('id', '[0-9]+');
            Route::post('{id}', 'Cms\Category\CategoryController@update')
                ->where('id', '[0-9]+');
            Route::post('{id}/images/add', 'Cms\Category\CategoryController@addImages')
                ->where('id', '[0-9]+');
            Route::get('{id}/images/{image_id}/remove', 'Cms\Category\CategoryController@removeImage')
                ->where('id,image_id', '[0-9]+');
            Route::post('{id}/upload', 'Cms\Category\CategoryController@upload')
                ->where('id', '[0-9]+');
            Route::get('{id}/publish', 'Cms\Category\CategoryController@publish')
                ->where('id', '[0-9]+');
        });
        Route::apiResource('categories', 'Cms\Category\CategoryController')
            ->except(['create', 'edit', 'update']);

        // Owners

        Route::group(['prefix' => 'owners'], function() {
            Route::post('{id}/images', 'Cms\Owner\OwnerController@getImages')
                ->where('id', '[0-9]+');
            Route::post('{id}/images/excluded', 'Cms\Owner\OwnerController@getExcludedImages')
                ->where('id', '[0-9]+');
            Route::post('{id}/images/add', 'Cms\Owner\OwnerController@addImages')
                ->where('id', '[0-9]+');
            Route::get('{id}/images/{image_id}/remove', 'Cms\Owner\OwnerController@removeImage')
                ->where('id,image_id', '[0-9]+');
            Route::post('{id}/upload', 'Cms\Owner\OwnerController@upload')
                ->where('id', '[0-9]+');
        });
        Route::apiResource('owners', 'Cms\Owner\OwnerController')->except(['create', 'edit']);

        // Collections

        Route::group(['prefix' => 'collections'], function() {
            Route::get('{id}/images', 'Cms\Collection\CollectionController@getImages')
                ->where('id', '[0-9]+');
            Route::post('{id}/upload', 'Cms\Collection\CollectionController@upload')
                ->where('id', '[0-9]+');
            Route::post('{id}/set-main-image', 'Cms\Collection\CollectionController@setMainImage')
                ->where('id', '[0-9]+');
            Route::get('{id}/publish', 'Cms\Collection\CollectionController@publish')
                ->where('id', '[0-9]+');
        });
        Route::apiResource('collections', 'Cms\Collection\CollectionController');
    });


    // Textures

    Route::group(['prefix' => 'textures'], function() {
        Route::post('{id}', 'Cms\Texture\TextureController@update')
            ->where('id', '[0-9]+');
        Route::get('{id}/publish', 'Cms\Texture\TextureController@publish')
            ->where('id', '[0-9]+');
    });
    Route::apiResource('textures', 'Cms\Texture\TextureController')
        ->except(['create', 'edit', 'update']);


    /** Settings */

    Route::group(['prefix' => 'settings'], function() {
        Route::post('set-text', 'Cms\Setting\SettingController@setTextValue');
        Route::get('entries', 'Cms\Setting\SettingController@getEntries');
        Route::post('set-image', 'Cms\Setting\SettingController@setImageValue');
        Route::post('{id}', 'Cms\Setting\SettingController@update')
            ->where('id', '[0-9]+');

        Route::get('with-types', 'Cms\Setting\SettingController@getItemsWithTypes');
        Route::get('with-group', 'Cms\Setting\SettingController@getItemsWithGroup');
    });
    Route::apiResource('settings', 'Cms\Setting\SettingController')
        ->except(['create', 'edit', 'update']);


    // SettingGroup

    Route::group(['prefix' => 'setting-groups'], function() {
        Route::get('with-settings', 'Cms\SettingGroup\SettingGroupController@getItemsWithSettings');
        Route::post('{id}', 'Cms\SettingGroup\SettingGroupController@update')
            ->where('id', '[0-9]+');
    });
    Route::apiResource('setting-groups', 'Cms\SettingGroup\SettingGroupController')
        ->except(['create', 'edit', 'update']);


    // Users

    Route::group(['prefix' => 'users'], function() {
        Route::post('/paginate', 'Cms\User\UserController@getItems')
            ->name('users');
        Route::post('{id}', 'Cms\User\UserController@update')
            ->where('id', '[0-9]+')
            ->name('users.update');
        Route::get('{id}/publish', 'Cms\User\UserController@publish')
            ->where('id', '[0-9]+')
            ->name('users.publish');
        Route::post('{id}/password-change', 'Cms\User\UserController@passwordChange')
            ->where('id', '[0-9]+')
            ->name('users.password');
    });
    Route::apiResource('users', 'Cms\User\UserController')
        ->except(['index', 'create', 'edit', 'update']);


    // Roles

    Route::group(['prefix' => 'roles'], function() {
        Route::post('{id}', 'Cms\Role\RoleController@update')
            ->where('id', '[0-9]+');
        Route::get('{id}', 'Cms\Role\RoleController@getItemWithPermissions')
            ->where('id', '[0-9]+');
    });
    Route::apiResource('roles', 'Cms\Role\RoleController')->except(['show', 'create', 'edit', 'update']);


    // Permissions

    Route::group(['prefix' => 'permissions'], function() {
        Route::post('{id}', 'Cms\Permission\PermissionController@update')
            ->where('id', '[0-9]+');
    });
    Route::apiResource('permissions', 'Cms\Permission\PermissionController')->except(['create', 'edit', 'update']);


    // Store

    Route::group(['prefix' => 'store'], function() {

        // Deliveries
        Route::group(['prefix' => 'deliveries'], function() {
            Route::post('{id}', 'Cms\Delivery\DeliveryController@update')
                ->where('id', '[0-9]+');
            Route::get('{id}/publish', 'Cms\Delivery\DeliveryController@publish')
                ->where('id', '[0-9]+');
        });
        Route::apiResource('deliveries', 'Cms\Delivery\DeliveryController')->except(['create', 'edit', 'update']);

        // Orders
        Route::group(['prefix' => 'orders'], function() {
//            Route::get('/', 'Cms\Order\OrderController@getItems');
            Route::get('/{id}', 'Cms\Order\OrderController@getItem')
                ->where('id', '[0-9]+');
            Route::get('/{id}/details', 'Cms\Order\OrderController@getItemDetails')
                ->where('id', '[0-9]+');
            Route::post('/{id}/status', 'Cms\Order\OrderController@changeStatus')
                ->where('id', '[0-9]+');
            Route::post('/current', 'Cms\Order\OrderController@getCurrentItems');
            Route::post('/completed', 'Cms\Order\OrderController@getCompletedItems');
        });

        // OrderStatuses
        Route::get('order-statuses/{id}/publish', 'Cms\OrderStatus\OrderStatusController@publish')
            ->where('id', '[0-9]+');
        Route::apiResource('order-statuses', 'Cms\OrderStatus\OrderStatusController');

        // Carts
//        Route::apiResource('carts', 'Cms\Cart\CmsCartController');
    });


    /** Pages */
    Route::group(['prefix' => 'pages'], function() {
        Route::post('/{id}', 'Cms\Page\PageController@update');
        Route::get('/{id}/delete-image', 'Cms\Page\PageController@deleteImage');
    });
    Route::apiResource('pages', 'Cms\Page\PageController')->except(['create', 'update', 'edit']);

    /** Home: Purchase Steps */
    Route::post('home-purchase-steps/{id}', 'Cms\PurchaseStep\PurchaseStepController@update')
        ->where('id', '[0-9]+');
    Route::apiResource('home-purchase-steps', 'Cms\PurchaseStep\PurchaseStepController')
        ->except(['create', 'update', 'edit']);

    /** Home: Interiors */
    Route::get('home-interiors/{id}/publish', 'Cms\HomeModuleInterior\HomeModuleInteriorController@publish')
        ->where('id', '[0-9]+');
    Route::get('home-interiors/{id}/slides', 'Cms\HomeModuleInterior\HomeModuleInteriorController@getItemSlides')
        ->where('id', '[0-9]+');
    Route::apiResource('home-interiors', 'Cms\HomeModuleInterior\HomeModuleInteriorController')
        ->except(['create', 'store', 'edit']);
    Route::post('home-interior-slides/{id}', 'Cms\HomeModuleInterior\HomeModuleInteriorSlideController@update')
        ->where('id', '[0-9]+');
    Route::apiResource('home-interior-slides', 'Cms\HomeModuleInterior\HomeModuleInteriorSlideController')
        ->except(['create', 'edit']);

    /** WorkExamples */
    Route::group(['prefix' => 'work-examples'], function() {
        Route::post('/list', 'Cms\WorkExample\WorkExampleController@getItems');
        Route::post('/{id}', 'Cms\WorkExample\WorkExampleController@update')
            ->where('id', '[0-9]+');
        Route::post('/{id}/upload', 'Cms\WorkExample\WorkExampleController@upload')
            ->where('id', '[0-9]+');
        Route::get('/{id}/publish', 'Cms\WorkExample\WorkExampleController@publish')
            ->where('id', '[0-9]+');
        Route::get('/{id}/delete-image/{index}', 'Cms\WorkExample\WorkExampleController@deleteImage')
            ->where(['id' => '[0-9]+', 'index' => '[0-9]+']);
    });
    Route::apiResource('work-examples', 'Cms\WorkExample\WorkExampleController')
        ->except(['create', 'update', 'edit']);

    /** Posts */
    Route::group(['prefix' => 'posts'], function() {
        Route::post('/{type}/list', 'Cms\Post\PostController@getItemsByType')
            ->where('type', '[a-z]+');
        Route::post('/{id}', 'Cms\Post\PostController@update')
            ->where('id', '[0-9]+');
        Route::post('/{id}/upload', 'Cms\Post\PostController@upload')
            ->where('id', '[0-9]+');
        Route::get('/{id}/publish', 'Cms\Post\PostController@publish')
            ->where('id', '[0-9]+');
        Route::get('/{id}/delete-image/{index}', 'Cms\Post\PostController@deleteImage')
            ->where(['id' => '[0-9]+', 'index' => '[0-9]+']);
    });
    Route::apiResource('posts', 'Cms\Post\PostController')
        ->except(['create', 'update', 'edit']);
});
