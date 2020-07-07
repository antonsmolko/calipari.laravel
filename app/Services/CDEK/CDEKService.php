<?php


namespace App\Services\CDEK;


use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\CDEK\Handlers\GetPriceHandler;
use App\Services\CDEK\Handlers\GetPVZSHandler;
use App\Services\CDEK\Handlers\GetSettlementsHandler;
use Illuminate\Support\Facades\Cache;

class CDEKService
{
    private GetPVZSHandler $getPVZSHandler;
    private GetSettlementsHandler $getSettlementsHandler;
    private GetPriceHandler $getPriceHandler;
    private CacheKeyManager $cacheKeyManager;

    /**
     * CDEKService constructor.
     * @param GetPVZSHandler $getPVZSHandler
     * @param GetSettlementsHandler $getSettlementsHandler
     * @param GetPriceHandler $getPriceHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        GetPVZSHandler $getPVZSHandler,
        GetSettlementsHandler $getSettlementsHandler,
        GetPriceHandler $getPriceHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        $this->getPVZSHandler = $getPVZSHandler;
        $this->getSettlementsHandler = $getSettlementsHandler;
        $this->getPriceHandler = $getPriceHandler;
        $this->cacheKeyManager = $cacheKeyManager;
    }

    /**
     * @param array $requestData
     * @return array|null
     */
    public function getPVZS(array $requestData) {
        $query = $requestData['query'];

        $key = $this->cacheKeyManager
            ->getResourceKey(Key::CDEK_PREFIX, ['client', 'cdek', 'pvzs', 'query:' . $query]);

        return Cache::tags(Tag::CDEK_TAG)
            ->remember($key,TTL::CDEK_TTL, function() use ($query) {
                return !empty($query)
                    ? $this->getPVZSHandler->handle($query)
                    : [];
            });
    }

    /**
     * @param array $requestData
     * @return array
     */
    public function getSettlements(array $requestData) {
        $query = $requestData['query'];

        $key = $this->cacheKeyManager
            ->getResourceKey(Key::CDEK_PREFIX, ['client', 'cdek', 'settlements', 'query:' . $query]);

        return Cache::tags(Tag::CDEK_TAG)
            ->remember($key,TTL::CDEK_TTL, function() use ($query) {
                return !empty($query)
                    ? $this->getSettlementsHandler->handle($query)
                    : [];
            });
    }

    /**
     * @param array $requestData
     * @return int
     */
    public function getPrice(array $requestData) {
        $query = $requestData['query'];

//        $key = $this->cacheKeyManager
//            ->getResourceKey(Tag::CDEK_TAG, ['client', 'cdek', 'price', 'query:' . $query]);
//
//        return Cache::tags(Tag::CDEK_TAG)
//            ->remember($key,TTL::CDEK_TTL, function() use ($query) {
//                return !empty($query)
//                    ? $this->getPriceHandler->handle($query)
//                    : 0;
//            });
        return !empty($query)
            ? $this->getPriceHandler->handle($query)
            : 0;
    }
}
