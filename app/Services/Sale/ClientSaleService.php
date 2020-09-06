<?php


namespace App\Services\Sale;


use App\Models\Order;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Sale\Repositories\ClientSaleRepository;
use Illuminate\Support\Facades\Cache;

class ClientSaleService extends ClientBaseResourceService
{
    /**
     * ClientSaleService constructor.
     * @param ClientSaleRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientSaleRepository $repository,
        CacheKeyManager $cacheKeyManager)
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->cacheTag = Tag::SALES_TAG;
    }

    /**
     * @param array $requestData
     * @return array|mixed
     */
    public function getItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(
                Key::SALES_PREFIX,
                ['client', 'list'],
                ['pagination' => $requestData]);

        return Cache::tags(Tag::SALES_TAG)
            ->remember(
                $key,
                TTL::SALES_TTL,
                fn () => $this->repository->getItems($requestData));
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function syncKeys(array $keys)
    {
        $items = $this->getItemsByKeys($keys);

        return $items->pluck('id');
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getItemsByKeys(array $keys)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::SALES_PREFIX, ['client'], ['keys' => $keys]);

        return Cache::tags(Tag::SALES_TAG)
            ->remember(
                $key,
                TTL::SALES_TTL,
                fn () => $this->repository->getItemsByKeys($keys));
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getAvailableItemsByKeys(array $keys)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::SALES_PREFIX, ['client', 'available'], ['keys' => $keys]);

        return Cache::tags(Tag::SALES_TAG)
            ->remember(
                $key,
                TTL::SALES_TTL,
                fn () => $this->repository->getAvailableItemsByKeys($keys));
    }
}
