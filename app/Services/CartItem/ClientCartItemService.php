<?php


namespace App\Services\CartItem;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\CartItem\Handlers\GetStoreDetailsDataHandler;
use App\Services\CartItem\Repositories\ClientCartItemRepository;
use App\Services\CartItem\Resources\FromCartClient as CartItemResource;
use App\Services\Image\Repositories\ClientImageRepository;

class ClientCartItemService extends ClientBaseResourceService
{
    private ClientImageRepository $imageRepository;
    private GetStoreDetailsDataHandler $getStoreDetailsDataHandle;

    /**
     * ClientCartItemService constructor.
     * @param ClientCartItemRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     * @param ClientImageRepository $imageRepository
     * @param GetStoreDetailsDataHandler $getStoreDetailsDataHandle
     */
    public function __construct(
        ClientCartItemRepository $repository,
        CacheKeyManager $cacheKeyManager,
        ClientImageRepository $imageRepository,
        GetStoreDetailsDataHandler $getStoreDetailsDataHandle
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->imageRepository = $imageRepository;
        $this->getStoreDetailsDataHandle = $getStoreDetailsDataHandle;
    }

    /**
     * @param array $projectData
     * @return CartItemResource
     */
    public function store(array $projectData): CartItemResource
    {
        $details = $this->getStoreDetailsDataHandle->handle($projectData);
        $item = $this->repository->store(['details' => json_encode($details, true)]);

        return new CartItemResource($item);
    }

    /**
     * @param int $id
     * @param int $qty
     * @return mixed
     */
    public function update(int $id, int $qty)
    {
        $item = $this->repository->getItem($id);
        $details = $item->getDetails();
        $details['qty'] = $qty;

        return $this->repository->update($item, ['details' => json_encode($details, true)]);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id)
    {
        $item = $this->repository->getItem($id);

        return $this->repository->delete($item);
    }

    /**
     * @param array $itemKeys
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function sync(array $itemKeys)
    {
        return CartItemResource::collection($this->repository->getItemsByKeys($itemKeys));
    }
}
