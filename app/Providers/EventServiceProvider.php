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
            \App\Listeners\Cache\Category\CategoryCacheClear::class,
            \App\Listeners\Cache\Image\ImageCacheClear::class,
        ],

        \App\Events\Models\Category\CategoryUpdated::class => [
            \App\Listeners\Cache\Category\CategoryCacheClear::class,
            \App\Listeners\Cache\Image\ImageCacheClear::class,
        ],

        \App\Events\Models\Category\CategoryDeleted::class => [
            \App\Listeners\Cache\Category\CategoryCacheClear::class,
            \App\Listeners\Cache\Image\ImageCacheClear::class,
        ],

        \App\Events\Models\Image\ImageSaved::class => [
            \App\Listeners\Cache\Image\ImageCacheClear::class,
            \App\Listeners\Cache\Category\CategoryCacheClear::class,
            \App\Listeners\Image\CheckImagesCount::class,
        ],

        \App\Events\Models\Image\ImageUpdated::class => [
            \App\Listeners\Cache\Image\ImageCacheClear::class,
            \App\Listeners\Cache\Category\CategoryCacheClear::class,
            \App\Listeners\Image\CheckImagesCount::class,
        ],

        \App\Events\Models\Image\ImageDeleted::class => [
            \App\Listeners\Cache\Image\ImageCacheClear::class,
            \App\Listeners\Cache\Category\CategoryCacheClear::class,
            \App\Listeners\Image\CheckImagesCount::class,
        ],

        \App\Events\Models\Delivery\DeliverySaved::class => [
            \App\Listeners\Cache\Delivery\DeliveryCacheClear::class,
        ],

        \App\Events\Models\Delivery\DeliveryUpdated::class => [
            \App\Listeners\Cache\Delivery\DeliveryCacheClear::class,
        ],

        \App\Events\Models\Delivery\DeliveryDeleted::class => [
            \App\Listeners\Cache\Delivery\DeliveryCacheClear::class,
        ],

        \App\Events\Models\Order\OrderSaved::class => [
            \App\Listeners\Mail\Order\SendCreated::class,
            \App\Listeners\Cache\Image\ImageCacheClear::class,
        ],

        \App\Events\Models\Order\OrderUpdated::class => [
            \App\Listeners\Mail\Order\SendCreated::class,
        ],

        \App\Events\Models\Order\OrderCanceled::class => [
            \App\Listeners\Mail\Order\SendCanceled::class,
        ],

        \App\Events\Models\Order\OrderDeleted::class => [
            \App\Listeners\Mail\Order\SendCreated::class,
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
