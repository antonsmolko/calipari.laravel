<?php


namespace App\Services\Sale;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Pdf\PdfService;
use App\Services\Sale\Handlers\GetFormattedItemDetailsHandler;
use App\Services\Sale\Handlers\GetStatusByOrderStatusHandler;
use App\Services\Sale\Handlers\StoreHandler;
use App\Services\Sale\Handlers\UpdateHandler;
use App\Services\Sale\Repositories\CmsSaleRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class CmsSaleService extends CmsBaseResourceService
{
    private StoreHandler $storeHandler;
    private UpdateHandler $updateHandler;
    private PdfService $pdfService;
    private GetFormattedItemDetailsHandler $getFormattedItemDetailsHandler;
    private GetStatusByOrderStatusHandler $getStatusByOrderStatusHandler;

    /**
     * CmsSaleService constructor.
     * @param CmsSaleRepository $repository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     * @param UpdateHandler $updateHandler
     * @param PdfService $pdfService
     * @param GetFormattedItemDetailsHandler $getFormattedItemDetailsHandler
     * @param GetStatusByOrderStatusHandler $getStatusByOrderStatusHandler
     */
    public function __construct(
        CmsSaleRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler,
        UpdateHandler $updateHandler,
        PdfService $pdfService,
        GetFormattedItemDetailsHandler $getFormattedItemDetailsHandler,
        GetStatusByOrderStatusHandler $getStatusByOrderStatusHandler)
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
        $this->cacheTag = Tag::SALES_TAG;
        $this->storeHandler = $storeHandler;
        $this->updateHandler = $updateHandler;
        $this->pdfService = $pdfService;
        $this->getFormattedItemDetailsHandler = $getFormattedItemDetailsHandler;
        $this->getStatusByOrderStatusHandler = $getStatusByOrderStatusHandler;
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
     * @param int $status
     * @return mixed
     */
    public function setStatus(int $id, int $status)
    {
        $item = $this->repository->getItem($id);

        return $this->repository->setStatus($item, $status);
    }

    /**
     * @param array $requestData
     * @param int $status
     * @return array|mixed
     */
    public function getItemsByStatus(array $requestData, int $status)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::SALES_PREFIX, ['cms', 'by_status', $status], $requestData);

        return Cache::tags(Tag::SALES_TAG)
            ->remember($key,TTL::SALES_TTL, fn() => $this->repository->getItemsByStatus($requestData, $status));
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getPdfLabel(int $id)
    {
        $itemDetails = $this->getFormattedItemDetailsHandler->handle($id, 'label');

        return $this->pdfService->getOrderItemLabel($itemDetails, $itemDetails['article']);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getPdfLayout(int $id)
    {
        $itemDetails = $this->getFormattedItemDetailsHandler->handle($id, 'layout');

        return $this->pdfService->getOrderItemLayout($itemDetails, $itemDetails['article']);
    }

    /**
     * @param Collection $sales
     * @param string $orderStatus
     */
    public function setItemsStatus(Collection $sales, string $orderStatus)
    {
        $status = $this->getStatusByOrderStatusHandler->handle($orderStatus);

        if ($status !== null) {
            $sales->each(fn($sale) => $this->repository->setStatus($sale, $status));
        }
    }
}
