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

/** CDEK */

Route::post('/cdek/pvzs', 'CDEK\CDEKController@getPVZS');
Route::post('/cdek/settlements', 'CDEK\CDEKController@getSettlements');
Route::post('/cdek/price', 'CDEK\CDEKController@getPrice');


/** Payment */

Route::group(['prefix' => 'payment'], function() {
    Route::post('notifications', 'Payment\PaymentController@notify');
    Route::get('{id}', 'Payment\PaymentController@getPaymentResponse');
});

/** Authorisation */

Route::group(['prefix' => '/auth', ['middleware' => 'throttle:20,5']], function() {
    Route::post('/register', 'Auth\RegisterController@register');
    Route::post('/login', 'Auth\LoginController@login')->middleware('auth.valid');

    Route::get('/login/{service}', 'Auth\SocialLoginController@redirect');
    Route::get('/login/{service}/callback', 'Auth\SocialLoginController@callback');
    Route::post('/login/{service}/register', 'Auth\SocialLoginController@register');


    /** Send reset password mail */

    Route::post('/reset-password', 'Auth\ForgotPasswordController@sendPasswordResetLink');
    Route::post('/reset/password', 'Auth\ResetPasswordController@callResetPassword');

    /** User email confirmation */
    Route::get('/user/confirm/{token}', 'Auth\AuthController@emailConfirm')
        ->name('user.verify');
});

Route::group([
    'middleware' => ['api', 'auth:api'],
    'prefix' => 'auth'
], function() {
    Route::post('me', 'Auth\AuthController@me');
    Route::post('refresh', 'Auth\AuthController@refresh')->withoutMiddleware(['auth:api']);
    Route::post('logout', 'Auth\AuthController@logout')->middleware('jwt.auth');
});



/**
 * CLIENT API
 */


/** Catalog */

Route::prefix('catalog')
    ->group(function() {
        Route::get('images', 'Client\Image\ImageController@getItems')
            ->name('catalog.images');

        Route::get('images/{id}', 'Client\Image\ImageController@getItem')
            ->where('id', '[0-9]+');

        Route::get('images/{id}/editor', 'Client\Image\ImageController@getItemFromEditor')
            ->where('id', '[0-9]+');

        Route::get('images/{id}/color-collection-images', 'Client\Image\ImageController@getItemColorCollectionImages')
            ->where('id', '[0-9]+');

        Route::get('images/{id}/art-collection-images', 'Client\Image\ImageController@getItemArtCollectionImages')
            ->where('id', '[0-9]+');

        Route::post('images/wish-list/tags', 'Client\Image\ImageController@getWishListTags')
            ->name('catalog.images.wish-list.tags');

        Route::get('categories', 'Client\Category\CategoryController@index');

        Route::get('categories/{category}', 'Client\Category\CategoryController@getItemByAlias');

        Route::get('categories/{id}/tags', 'Client\Category\CategoryController@getItemTags')
            ->where('id', '[0-9]+');


        /** Search */

        Route::get('search/{query}', 'Client\Search\SearchController');


        /** Color Collections */

        Route::prefix('color-collections')
            ->group(function () {
                Route::get('/', 'Client\ColorCollection\ColorCollectionController@index');
                Route::get(
                    '{collection}',
                    'Client\ColorCollection\ColorCollectionController@getItemByAliasWithImages')
                    ->where('collection', '^([a-z0-9]+-?)+[a-z0-9]$');
            });


        /** Art Collections */

        Route::prefix('art-collections')
            ->group(function () {
                Route::get('/', 'Client\ArtCollection\ArtCollectionController@index');
                Route::get(
                    '{collection}',
                    'Client\ArtCollection\ArtCollectionController@getItemByAliasWithImages')
                    ->where('collection', '^([a-z0-9]+-?)+[a-z0-9]$');
            });


        /** Filters */

        Route::prefix('filters')
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


/** Textures */
Route::get('/textures', 'Client\Texture\TextureController@getItems');
Route::get('/textures/less-detailed', 'Client\Texture\TextureController@getItemsLessDetailed');


/** Delivery */
Route::get('delivery', 'Client\Delivery\DeliveryController@index');


/** Settings */
Route::get('settings', 'Client\SettingGroup\SettingGroupController@index');


/** Orders */
Route::group(['prefix' => 'orders'], function() {
    Route::post('/', 'Client\Order\OrderController@store');
    Route::get('/{hash}', 'Client\Order\OrderController@getItemByHashForPayment');
    Route::get('{number}/payment-create', 'Client\Order\OrderController@paymentCreate');
    Route::get('{number}/pay-with-id/{id}', 'Client\Order\OrderController@payWithId');
    Route::get('payment-confirmation/{token}', 'Client\Order\OrderController@confirmPaymentCompletion');
});

/** Reviews */
Route::prefix('reviews')
    ->group(function() {
        Route::post('/', 'Client\Review\ReviewController@getItems');
        Route::post('store', 'Client\Review\ReviewController@store')
            ->middleware('optimizeImages');
    });

/** Carts */
Route::prefix('carts')
    ->group(function() {
        Route::post('sync', 'Client\Cart\CartController@sync')
            ->middleware('jwt.auth');
        Route::post('add-item', 'Client\Cart\CartController@addItem')
            ->middleware('jwt.auth');
        Route::get('add-sale/{id}', 'Client\Cart\CartController@addSale')
            ->middleware('jwt.auth');
        Route::post('sync-sales', 'Client\Cart\CartController@syncSales')
            ->middleware('jwt.auth');
        Route::get('detach-sale/{id}', 'Client\Cart\CartController@detachSale')
            ->where('id', '[0-9]+')
            ->middleware('jwt.auth');
    });

/** CartItems */
Route::prefix('cart-items')
    ->group(function() {
        Route::post('sync', 'Client\CartItem\CartItemController@sync');
        Route::post('get-project', 'Client\CartItem\CartItemController@getProject');
    });
Route::apiResource('cart-items', 'Client\CartItem\CartItemController')
    ->except(['index', 'create', 'edit', 'show']);

/** Sales */
Route::post('sales', 'Client\Sale\SaleController@getItems');
Route::post('sales/get-by-keys', 'Client\Sale\SaleController@getItemsByKeys');
Route::post('sales/get-available-by-keys', 'Client\Sale\SaleController@getAvailableItemsByKeys');
Route::post('sales/sync', 'Client\Sale\SaleController@syncKeys');

/** PAGES */

/** Get Page SEO Content */

Route::get('pages/{page}', 'Client\Page\PageController@getItemByAlias');


/** Home: PurchaseSteps */

Route::get('home-purchase-steps', 'Client\PurchaseStep\PurchaseStepController');


/** Home: Interiors */

Route::get('home-interiors', 'Client\HomeModuleInterior\HomeModuleInteriorController');


/** Portfolio Module: Work Examples */

Route::post('work-examples', 'Client\WorkExample\WorkExampleController@getItems');


/** Blog Module: Posts */

Route::group(['prefix' => 'posts'], function () {
    Route::get('types', 'Client\Post\PostController@getPublishedTypes');
    Route::post('{type}/list', 'Client\Post\PostController@getItems');
    Route::get('{post}', 'Client\Post\PostController@getItemByAlias')
        ->where('id', '[0-9]+');
});

/** Sitemap */

Route::get('/sitemap', 'Client\Sitemap\SitemapController');


/** User Profile */

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
           Route::post('/sync', 'Client\User\UserController@syncWishlist')
               ->withoutMiddleware('jwt.auth');
           Route::get('/{imageId}/toggle', 'Client\User\UserController@toggleLike')
               ->where('number', '[0-9]+');
        });
        Route::group(['prefix' => 'cards'], function() {
            Route::get('{paymentId}/remove', 'Client\Card\CardController@remove');
            Route::post('sync', 'Client\Card\CardController@sync');
        });
    });

/** Mail Receive */

Route::prefix('mail')
    ->group(function() {
        Route::post('feedback', 'Client\Mail\MailController@receiveFeedbackForm');
        Route::post('back-call', 'Client\Mail\MailController@receiveBackCallForm');
    });


/**
 * CMS
 */

Route::prefix('cms')
    ->middleware('role:super_admin|admin|content_manager|owner')
    ->group(function() {

    /** Images */

    Route::prefix('images')
        ->group(function() {
            Route::post('paginate', 'Cms\Image\ImageController@getItems')
                ->name('images.list');
            Route::post('trashed/paginate', 'Cms\Image\ImageController@getTrashedItems')
                ->name('images.trashed.list');

            Route::post('find-duplicates', 'Cms\Image\ImageController@findDuplicates')
                ->name('images.find-duplicates');

            Route::get('{id}/force-delete', 'Cms\Image\ImageController@forceDelete')
                ->where('id', '[0-9]+')
                ->name('images.force.delete')
                ->middleware('role:super_admin|admin|owner');
            Route::get('{id}/restore', 'Cms\Image\ImageController@restore')
                ->where('id', '[0-9]+')
                ->name('images.restore');
            Route::get('{id}/publish', 'Cms\Image\ImageController@publish')
                ->where('id', '[0-9]+')
                ->name('images.publish');
            Route::get('{id}/dissociate-owner', 'Cms\Image\ImageController@dissociateOwner')
                ->where('id', '[0-9]+')
                ->name('images.dissociate-owner');
            Route::get('{id}/get-raw', 'Cms\Image\ImageController@getItem')
                ->where('id', '[0-9]+')
                ->name('images.item.get-raw');
            Route::post('{id}', 'Cms\Image\ImageController@update')
                ->where('id', '[0-9]+')
                ->name('images.update')
                ->middleware('optimizeImages');
            Route::post('{id}/examples', 'Cms\Image\ImageController@uploadExamples')
                ->where('id', '[0-9]+')
                ->name('images.examples')
                ->middleware('optimizeImages');
            Route::delete('{id}/examples/{example}', 'Cms\Image\ImageController@deleteExample')
                ->where('id', '[0-9]+')
                ->name('images.examples.delete');
        });
    Route::apiResource('images', 'Cms\Image\ImageController')
        ->middleware('optimizeImages')
        ->except(['index', 'create', 'edit', 'update']);

    /** Catalog */

    Route::group(['prefix' => 'catalog'], function () {

        /** Categories */

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
                ->where('id', '[0-9]+')
                ->middleware('optimizeImages');
            Route::post('{id}/images/add', 'Cms\Category\CategoryController@addImages')
                ->where('id', '[0-9]+');
            Route::get('{id}/images/{image_id}/remove', 'Cms\Category\CategoryController@removeImage')
                ->where('id,image_id', '[0-9]+');
            Route::post('{id}/upload', 'Cms\Category\CategoryController@upload')
                ->where('id', '[0-9]+')
                ->middleware('optimizeImages');
            Route::get('{id}/publish', 'Cms\Category\CategoryController@publish')
                ->where('id', '[0-9]+');
        });
        Route::apiResource('categories', 'Cms\Category\CategoryController')
            ->middleware('optimizeImages')
            ->except(['create', 'edit', 'update']);

        /** Owners */

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
                ->where('id', '[0-9]+')
                ->middleware('optimizeImages');
        });
        Route::apiResource('owners', 'Cms\Owner\OwnerController')
            ->except(['create', 'edit']);


        /** Color Collections */

        Route::group(['prefix' => 'color-collections'], function() {
            Route::get('{id}/images', 'Cms\ColorCollection\ColorCollectionController@getImages')
                ->where('id', '[0-9]+');
            Route::post('{id}/upload', 'Cms\ColorCollection\ColorCollectionController@upload')
                ->where('id', '[0-9]+')
                ->middleware('optimizeImages');
            Route::post('{id}/set-main-image', 'Cms\ColorCollection\ColorCollectionController@setMainImage')
                ->where('id', '[0-9]+');
            Route::get('{id}/publish', 'Cms\ColorCollection\ColorCollectionController@publish')
                ->where('id', '[0-9]+');
        });
        Route::apiResource('color-collections', 'Cms\ColorCollection\ColorCollectionController');

        /** Art Collections */

        Route::group(['prefix' => 'art-collections'], function() {
            Route::get('{id}/images', 'Cms\ArtCollection\ArtCollectionController@getImages')
                ->where('id', '[0-9]+');
            Route::post('{id}', 'Cms\ArtCollection\ArtCollectionController@update')
                ->where('id', '[0-9]+');
            Route::get('{id}/publish', 'Cms\ArtCollection\ArtCollectionController@publish')
                ->where('id', '[0-9]+');
            Route::post('{id}/images/add', 'Cms\ArtCollection\ArtCollectionController@addImages')
                ->where('id', '[0-9]+');
            Route::get('{categoryId}/images/{imageId}/remove', 'Cms\ArtCollection\ArtCollectionController@removeImage')
                ->where('id', '[0-9]+');
            Route::post('images/excluded', 'Cms\ArtCollection\ArtCollectionController@getExcludedImages');
        });
        Route::apiResource('art-collections', 'Cms\ArtCollection\ArtCollectionController')
            ->middleware('optimizeImages')
            ->except(['create', 'edit', 'update']);
    });


    /** Textures */

    Route::group(['prefix' => 'textures'], function() {
        Route::get('basic', 'Cms\Texture\TextureController@getItems');
        Route::post('{id}', 'Cms\Texture\TextureController@update')
            ->where('id', '[0-9]+')
            ->middleware('optimizeImages');
        Route::patch('{id}/patch', 'Cms\Texture\TextureController@patch')
            ->where('id', '[0-9]+');
        Route::get('{id}/publish', 'Cms\Texture\TextureController@publish')
            ->where('id', '[0-9]+');
    });
    Route::apiResource('textures', 'Cms\Texture\TextureController')
        ->except(['create', 'edit', 'update'])
        ->middleware('optimizeImages');


    /** Settings */

    Route::group(['prefix' => 'settings'], function() {
        Route::post('set-text', 'Cms\Setting\SettingController@setTextValue');
        Route::get('entries', 'Cms\Setting\SettingController@getEntries');
        Route::post('set-image', 'Cms\Setting\SettingController@setImageValue')
            ->middleware('optimizeImages');
        Route::post('{id}', 'Cms\Setting\SettingController@update')
            ->where('id', '[0-9]+')
            ->middleware('role:super_admin|admin');

        Route::get('with-types', 'Cms\Setting\SettingController@getItemsWithTypes');
        Route::get('with-group', 'Cms\Setting\SettingController@getItemsWithGroup');
        Route::post('entries-by-groups', 'Cms\Setting\SettingController@getItemEntriesByGroups');
    });
    Route::apiResource('settings', 'Cms\Setting\SettingController')
        ->except(['create', 'edit', 'update']);


    /** Setting Groups */

    Route::group(['prefix' => 'setting-groups'], function() {
        Route::get('with-settings', 'Cms\SettingGroup\SettingGroupController@getItemsWithSettings');
        Route::post('{id}', 'Cms\SettingGroup\SettingGroupController@update')
            ->where('id', '[0-9]+')
            ->middleware('role:super_admin|admin');
    });
    Route::apiResource('setting-groups', 'Cms\SettingGroup\SettingGroupController')
        ->except(['create', 'edit', 'update']);


    /** Users */

    Route::prefix('users')
        ->middleware('role:super_admin|admin|owner')
        ->group(function() {

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


    /** Roles */

    Route::prefix('roles')
        ->middleware('role:super_admin|admin|owner')
        ->group(function() {

            Route::post('{id}', 'Cms\Role\RoleController@update')
                ->where('id', '[0-9]+');
            Route::get('{id}', 'Cms\Role\RoleController@getItemWithPermissions')
                ->where('id', '[0-9]+');
            Route::get('from-owner', 'Cms\Role\RoleController@getItemsFromOwner');
            Route::get('from-super-admin', 'Cms\Role\RoleController@getItemsFromSuperAdmin');
        });
    Route::apiResource('roles', 'Cms\Role\RoleController')->except(['show', 'create', 'edit', 'update']);


    /** Permissions */

    Route::prefix('permissions')
        ->middleware('role:super_admin')
        ->group(function() {
            Route::post('{id}', 'Cms\Permission\PermissionController@update')
                ->where('id', '[0-9]+');
        });
    Route::apiResource('permissions', 'Cms\Permission\PermissionController')->except(['create', 'edit', 'update']);


    /** Store */

    Route::prefix('store')
        ->middleware('role:super_admin|admin|owner')
        ->group(function() {

        /** Deliveries */

        Route::group(['prefix' => 'deliveries'], function() {
            Route::get('pickup', 'Cms\Delivery\DeliveryController@getPickupItems')
                ->where('id', '[0-9]+');
            Route::post('{id}', 'Cms\Delivery\DeliveryController@update')
                ->where('id', '[0-9]+');
            Route::get('{id}/publish', 'Cms\Delivery\DeliveryController@publish')
                ->where('id', '[0-9]+');
        });
        Route::apiResource('deliveries', 'Cms\Delivery\DeliveryController')
            ->except(['create', 'edit', 'update']);

        /** Pickups */
        Route::group(['prefix' => 'pickups'], function() {
            Route::get('{id}/publish', 'Cms\Pickup\PickupController@publish')
                ->where('id', '[0-9]+');
        });
        Route::apiResource('pickups', 'Cms\Pickup\PickupController')
            ->except(['create', 'edit']);


        /** Orders */

        Route::group(['prefix' => 'orders'], function() {
            Route::get('{id}', 'Cms\Order\OrderController@getItem')
                ->where('id', '[0-9]+');
            Route::get('{id}/details', 'Cms\Order\OrderController@getItemDetails')
                ->where('id', '[0-9]+');
            Route::post('{id}/status', 'Cms\Order\OrderController@setStatus')
                ->where('id', '[0-9]+');
            Route::post('{id}/refund', 'Cms\Order\OrderController@refund')
                ->middleware('role:super_admin|owner')
                ->where('id', '[0-9]+');
            Route::post('current', 'Cms\Order\OrderController@getCurrentItems');
            Route::post('{status}', 'Cms\Order\OrderController@getItemsByStatus')
                ->where('status', '^('
                    . \App\Models\Order::COMPLETED_STATUS . '|'
                    . \App\Models\Order::CANCELED_STATUS . '|'
                    . \App\Models\Order::REFUNDED_STATUS . '|)$');
            Route::get('{id}/pdf-details', 'Cms\Order\OrderController@getPdfItemDetails')
                ->where('id', '[0-9]+');
            Route::delete('{id}', 'Cms\Order\OrderController@destroy')
                ->middleware('role:super_admin|owner');
        });


        /** OrderItems */

        Route::prefix('order-items')
            ->group(function () {
                Route::get('{id}/pdf-label', 'Cms\OrderItem\OrderItemController@getPdfLabel')
                    ->where('id', '[0-9]+');
                Route::get('{id}/pdf-layout', 'Cms\OrderItem\OrderItemController@getPdfLayout')
                    ->where('id', '[0-9]+');
            });


        /** Carts */

        Route::prefix('cart-items')
            ->group(function() {
                Route::post('/', 'Cms\CartItem\CartItemController@store');
            });


        /** Order Statuses */

        Route::get('order-statuses/{id}/publish', 'Cms\OrderStatus\OrderStatusController@publish')
            ->where('id', '[0-9]+');
        Route::get('order-statuses/published', 'Cms\OrderStatus\OrderStatusController@getPublishedItems');
        Route::apiResource('order-statuses', 'Cms\OrderStatus\OrderStatusController')
            ->except(['create', 'edit']);


        /** Reviews */

        Route::prefix('reviews')
            ->group(function () {
                Route::get('{id}/publish', 'Cms\Review\ReviewController@publish')
                    ->where('id', '[0-9]+');
                Route::post('/', 'Cms\Review\ReviewController@getItems');
                Route::get('{id}', 'Cms\Review\ReviewController@getItem')
                    ->where('id', '[0-9]+');
                Route::delete('{id}', 'Cms\Review\ReviewController@destroy')
                    ->where('id', '[0-9]+');
            });


        /** Sales */

        Route::prefix('sales')
            ->group(function () {
                Route::get('{id}/publish', 'Cms\Sale\SaleController@publish')
                    ->where('id', '[0-9]+');
                Route::post('{status}', 'Cms\Sale\SaleController@getItemsByStatus')
                    ->where('status', '^('
                        . \App\Models\Sale::FOR_SALE . '|'
                        . \App\Models\Sale::IN_ORDER . '|'
                        . \App\Models\Sale::SOLD . '|)$');
                Route::get('{id}', 'Cms\Sale\SaleController@show')
                    ->where('id', '[0-9]+');
                Route::get('{id}/set-status/{status}', 'Cms\Sale\SaleController@setStatus')
                    ->where([
                        'id' => '[0-9]+',
                        'status' => '^('
                        . \App\Models\Sale::FOR_SALE . '|'
                        . \App\Models\Sale::IN_ORDER . '|'
                        . \App\Models\Sale::SOLD . '|)$'
                    ]);
                Route::get('{id}/on-sale', 'Cms\Sale\SaleController@onSale')
                    ->where('id', '[0-9]+');
                Route::get('{id}/pdf-label', 'Cms\Sale\SaleController@getPdfLabel')
                    ->where('id', '[0-9]+');
                Route::get('{id}/pdf-layout', 'Cms\Sale\SaleController@getPdfLayout')
                    ->where('id', '[0-9]+');
                Route::delete('{id}', 'Cms\Sale\SaleController@destroy')
                    ->where('id', '[0-9]+');
                Route::post('/', 'Cms\Sale\SaleController@store');
                Route::post('{id}', 'Cms\Sale\SaleController@update');
            });
    });


    /** Pages */

    Route::group(['prefix' => 'pages'], function() {
        Route::post('/{id}', 'Cms\Page\PageController@update')
            ->middleware('optimizeImages');
        Route::get('/{id}/delete-image', 'Cms\Page\PageController@deleteImage');
        Route::get('{id}/publish', 'Cms\Page\PageController@publish')
            ->where('id', '[0-9]+');
    });
    Route::apiResource('pages', 'Cms\Page\PageController')
        ->except(['create', 'update', 'edit'])
        ->middleware('optimizeImages');


    /** Home: Purchase Steps */

    Route::post('home-purchase-steps/{id}', 'Cms\PurchaseStep\PurchaseStepController@update')
        ->where('id', '[0-9]+')
        ->middleware('optimizeImages');
    Route::apiResource('home-purchase-steps', 'Cms\PurchaseStep\PurchaseStepController')
        ->except(['create', 'update', 'edit'])
        ->middleware('optimizeImages');


    /** Home: Interiors */

    Route::get('home-interiors/{id}/publish', 'Cms\HomeModuleInterior\HomeModuleInteriorController@publish')
        ->where('id', '[0-9]+');
    Route::get('home-interiors/{id}/slides', 'Cms\HomeModuleInterior\HomeModuleInteriorController@getItemSlides')
        ->where('id', '[0-9]+');
    Route::apiResource('home-interiors', 'Cms\HomeModuleInterior\HomeModuleInteriorController')
        ->except(['create', 'store', 'edit']);
    Route::post('home-interior-slides/{id}', 'Cms\HomeModuleInterior\HomeModuleInteriorSlideController@update')
        ->where('id', '[0-9]+')
        ->middleware('optimizeImages');
    Route::apiResource('home-interior-slides', 'Cms\HomeModuleInterior\HomeModuleInteriorSlideController')
        ->except(['create', 'edit'])
        ->middleware('optimizeImages');


    /** WorkExamples */

    Route::group(['prefix' => 'work-examples'], function() {
        Route::post('/list', 'Cms\WorkExample\WorkExampleController@getItems');
        Route::post('/{id}', 'Cms\WorkExample\WorkExampleController@update')
            ->where('id', '[0-9]+')
            ->middleware('optimizeImages');
        Route::post('/{id}/upload', 'Cms\WorkExample\WorkExampleController@upload')
            ->where('id', '[0-9]+')
            ->middleware('optimizeImages');
        Route::get('/{id}/publish', 'Cms\WorkExample\WorkExampleController@publish')
            ->where('id', '[0-9]+');
        Route::get('/{id}/delete-image/{index}', 'Cms\WorkExample\WorkExampleController@deleteImage')
            ->where(['id' => '[0-9]+', 'index' => '[0-9]+']);
    });
    Route::apiResource('work-examples', 'Cms\WorkExample\WorkExampleController')
        ->except(['create', 'update', 'edit'])
        ->middleware('optimizeImages');


    /** Posts */

    Route::group(['prefix' => 'posts'], function() {
        Route::post('/{type}/list', 'Cms\Post\PostController@getItemsByType')
            ->where('type', '[a-z]+');
        Route::post('/{id}', 'Cms\Post\PostController@update')
            ->where('id', '[0-9]+')
            ->middleware('optimizeImages');
        Route::post('/{id}/upload', 'Cms\Post\PostController@upload')
            ->where('id', '[0-9]+')
            ->middleware('optimizeImages');
        Route::get('/{id}/publish', 'Cms\Post\PostController@publish')
            ->where('id', '[0-9]+');
        Route::get('/{id}/delete-image/{index}', 'Cms\Post\PostController@deleteImage')
            ->where(['id' => '[0-9]+', 'index' => '[0-9]+']);
    });
    Route::apiResource('posts', 'Cms\Post\PostController')
        ->except(['create', 'update', 'edit'])
        ->middleware('optimizeImages');


    /** Dashboard */

    Route::group(['prefix' => 'dashboard'], function() {
        Route::post('resources-count', 'Cms\Dashboard\DashboardController@getResourcesCount');
    });
});
