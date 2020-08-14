<?php


namespace App\Services\CartItem;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\CartItem\Handlers\StoreProjectHandler;
use App\Services\CartItem\Repositories\CmsCartItemRepository;
use App\Services\PDF\PDFService;
use Illuminate\Support\Facades\Mail;

class CmsCartItemService extends CmsBaseResourceService
{
    private StoreProjectHandler $storeProjectHandler;
    private PDFService $PDFService;

    /**
     * CmsCartItemService constructor.
     * @param CmsCartItemRepository $repository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreProjectHandler $storeProjectHandler
     * @param PDFService $PDFService
     */
    public function __construct(
        CmsCartItemRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager,
        StoreProjectHandler $storeProjectHandler,
        PDFService $PDFService)
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
        $this->storeProjectHandler = $storeProjectHandler;
        $this->PDFService = $PDFService;
    }

    /**
     * @param array $storeData
     * @return array|mixed
     */
    public function store(array $storeData)
    {
        $item = $this->storeProjectHandler->handle($storeData);
        $pdf = $this->PDFService->getPDFProjectDetails($item->getDetails());

        $key = encrypt(['item_id' => $item->id, 'project_id' => $storeData['id']], true);
        $data = ['number' => $storeData['id'], 'name' => $storeData['name'], 'key' => $key];
        $fileName = 'project-details-' . $storeData['id'] . '.pdf';

        Mail::to($storeData['email'])
            ->send(new \App\Mail\PersonalProjectCreate($data, $pdf->output(), $fileName));

        return $data;
    }
}
