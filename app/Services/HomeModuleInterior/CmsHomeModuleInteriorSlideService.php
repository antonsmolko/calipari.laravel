<?php


namespace App\Services\HomeModuleInterior;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheByTagHandler;
use App\Services\HomeModuleInterior\Handlers\InteriorSlideDeleteHandler;
use App\Services\HomeModuleInterior\Handlers\InteriorSlideStoreHandler;
use App\Services\HomeModuleInterior\Handlers\InteriorSlideUpdateHandler;
use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorSlideRepository;

class CmsHomeModuleInteriorSlideService extends CmsBaseResourceService
{
    private InteriorSlideStoreHandler $storeHandler;
    private InteriorSlideUpdateHandler $updateHandler;
    private InteriorSlideDeleteHandler $deleteHandler;

    /**
     * CmsHomeModuleInteriorSlideService constructor.
     * @param CmsHomeModuleInteriorSlideRepository $repository
     * @param ClearCacheByTagHandler $clearCacheByTagHandler
     * @param InteriorSlideStoreHandler $storeHandler
     * @param InteriorSlideUpdateHandler $updateHandler
     * @param InteriorSlideDeleteHandler $deleteHandler
     */
    public function __construct(
        CmsHomeModuleInteriorSlideRepository $repository,
        ClearCacheByTagHandler $clearCacheByTagHandler,
        InteriorSlideStoreHandler $storeHandler,
        InteriorSlideUpdateHandler $updateHandler,
        InteriorSlideDeleteHandler $deleteHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
        $this->storeHandler = $storeHandler;
        $this->updateHandler = $updateHandler;
        $this->deleteHandler = $deleteHandler;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function store(array $storeData)
    {
        return $this->storeHandler->handle($storeData);
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return mixed
     */
    public function update(int $id, array $updateData)
    {
        $item = $this->repository->getItem($id);

        return $this->updateHandler->handle($item, $updateData);
    }

    /**
     * @param int $id
     * @return int
     */
    public function delete(int $id)
    {
        $item = $this->repository->getItem($id);

        return $this->deleteHandler->handle($item);
    }
}
