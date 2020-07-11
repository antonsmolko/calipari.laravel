<?php


namespace App\Services\Texture;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Texture\Repositories\ClientTextureRepository;
use Illuminate\Support\Facades\Cache;

class ClientTextureService extends ClientBaseResourceService
{
    /**
     * ClientPostService constructor.
     * @param ClientTextureRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientTextureRepository $repository,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    /**
     * @return array|mixed
     */
    public function getItems()
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::TEXTURES_PREFIX, ['client', 'list']);

        return Cache::tags(Tag::TEXTURES_TAG)
            ->remember(
                $key,
                TTL::TEXTURES_TTL,
                fn () => $this->repository->getItems());
    }
}
