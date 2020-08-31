<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            // add your listeners (aka providers) here
            'SocialiteProviders\\VKontakte\\VKontakteExtendSocialite@handle',
            'SocialiteProviders\\Yandex\\YandexExtendSocialite@handle',
        ],

        \App\Events\Models\Category\CategorySaved::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
        ],

        \App\Events\Models\Category\CategoryUpdated::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
        ],

        \App\Events\Models\Category\CategoryDeleted::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
        ],

        \App\Events\Models\Image\ImageSaved::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
            \App\Listeners\Image\CheckImagesCount::class,
        ],

        \App\Events\Models\Image\ImageUpdated::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
            \App\Listeners\Image\CheckImagesCount::class,
        ],

        \App\Events\Models\Image\ImageDeleted::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
            \App\Listeners\Image\CheckImagesCount::class,
        ],

        \App\Events\Models\ArtCollection\ArtCollectionSaved::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
        ],

        \App\Events\Models\ArtCollection\ArtCollectionDeleted::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
        ],

        \App\Events\Models\ColorCollection\ColorCollectionSaved::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
        ],

        \App\Events\Models\ColorCollection\ColorCollectionDeleted::class => [
            \App\Listeners\Cache\Clear\CategoryCacheClear::class,
            \App\Listeners\Cache\Clear\ImageCacheClear::class,
            \App\Listeners\Cache\Clear\ColorCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\ArtCollectionCacheClear::class,
            \App\Listeners\Cache\Clear\SearchCacheClear::class,
            \App\Listeners\Cache\Clear\FilterCacheClear::class,
        ],

        \App\Events\Models\Texture\TextureSaved::class => [
            \App\Listeners\Cache\Clear\TextureCacheClear::class
        ],

        \App\Events\Models\Texture\TextureDeleted::class => [
            \App\Listeners\Cache\Clear\TextureCacheClear::class
        ],

        \App\Events\Models\Delivery\DeliverySaved::class => [
            \App\Listeners\Cache\Clear\DeliveryCacheClear::class,
        ],

        \App\Events\Models\Delivery\DeliveryUpdated::class => [
            \App\Listeners\Cache\Clear\DeliveryCacheClear::class,
        ],

        \App\Events\Models\Delivery\DeliveryDeleted::class => [
            \App\Listeners\Cache\Clear\DeliveryCacheClear::class,
        ],

        \App\Events\Models\Pickup\PickupSaved::class => [
            \App\Listeners\Cache\Clear\DeliveryCacheClear::class,
            \App\Listeners\Delivery\CheckPickupsRequirementCount::class,
        ],

        \App\Events\Models\Pickup\PickupUpdated::class => [
            \App\Listeners\Cache\Clear\DeliveryCacheClear::class,
            \App\Listeners\Delivery\CheckPickupsRequirementCount::class,
        ],

        \App\Events\Models\Pickup\PickupDeleted::class => [
            \App\Listeners\Cache\Clear\DeliveryCacheClear::class,
            \App\Listeners\Delivery\CheckPickupsRequirementCount::class,
        ],

        \App\Events\Models\Order\OrderCreated::class => [
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
            \App\Listeners\Mail\Order\SendByStatus::class,
        ],

        \App\Events\Models\Order\OrderUpdated::class => [
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
        ],

        \App\Events\Models\Order\OrderDeleted::class => [
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
        ],
        \App\Events\Models\Order\OrderSetStatus::class => [
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
            \App\Listeners\Mail\Order\SendByStatus::class,
        ],

        \App\Events\Models\Review\ReviewCreated::class => [
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
            \App\Listeners\Cache\Clear\ReviewCacheClear::class,
            \App\Listeners\Mail\Review\FeedbackReceived::class,
        ],

        \App\Events\Models\Review\ReviewUpdated::class => [
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
            \App\Listeners\Cache\Clear\ReviewCacheClear::class,
        ],

        \App\Events\Models\Review\ReviewDeleted::class => [
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
            \App\Listeners\Cache\Clear\ReviewCacheClear::class,
        ],

        \App\Events\Models\User\UserSaved::class => [
            \App\Listeners\Cache\Clear\UserCacheClear::class,
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
        ],

        \App\Events\Models\User\UserUpdated::class => [
            \App\Listeners\Cache\Clear\UserCacheClear::class,
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
        ],

        \App\Events\Models\User\UserDeleted::class => [
            \App\Listeners\Cache\Clear\UserCacheClear::class,
            \App\Listeners\Cache\Clear\OrderCacheClear::class,
        ],

        \App\Events\Models\Post\PostSaved::class => [
            \App\Listeners\Cache\Clear\PostCacheClear::class,
        ],

        \App\Events\Models\Post\PostDeleted::class => [
            \App\Listeners\Cache\Clear\PostCacheClear::class,
        ],

        \App\Events\Auth\Registered::class => [
            \App\Listeners\Order\SyncWithUser::class,
        ],

        \App\Events\Auth\ChangeEmail::class => [
            \App\Listeners\Order\RefreshCustomerEmail::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
