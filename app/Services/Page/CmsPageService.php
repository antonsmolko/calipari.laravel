<?php


namespace App\Services\Page;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Page\Handlers\DeleteImageHandler;
use App\Services\Page\Handlers\UpdateHandler;
use App\Services\Page\Repositories\CmsPageRepository;

class CmsPageService extends CmsBaseResourceService
{
    private UpdateHandler $updateHandler;
    private DeleteImageHandler $deleteImageHandler;

    /**
     * CmsPageService constructor.
     * @param CmsPageRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param UpdateHandler $updateHandler
     * @param DeleteImageHandler $deleteImageHandler
     */
    public function __construct(
        CmsPageRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        UpdateHandler $updateHandler,
        DeleteImageHandler $deleteImageHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
        $this->updateHandler = $updateHandler;
        $this->deleteImageHandler = $deleteImageHandler;
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
     * @return mixed
     */
    public function deleteImage(int $id)
    {
        $item = $this->repository->getItem($id);

        return $this->deleteImageHandler->handle($item);
    }
}
