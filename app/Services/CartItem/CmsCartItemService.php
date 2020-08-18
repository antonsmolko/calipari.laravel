<?php


namespace App\Services\CartItem;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\CartItem\Handlers\GetPdfDetailsHandler;
use App\Services\CartItem\Handlers\StoreProjectHandler;
use App\Services\CartItem\Repositories\CmsCartItemRepository;
use App\Services\Pdf\PdfService;
use Illuminate\Support\Facades\Mail;

class CmsCartItemService extends CmsBaseResourceService
{
    private StoreProjectHandler $storeProjectHandler;
    private PdfService $pdfService;
    private GetPdfDetailsHandler $getPdfDetailsHandler;

    /**
     * CmsCartItemService constructor.
     * @param CmsCartItemRepository $repository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreProjectHandler $storeProjectHandler
     * @param PdfService $pdfService
     * @param GetPdfDetailsHandler $getPdfDetailsHandler
     */
    public function __construct(
        CmsCartItemRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager,
        StoreProjectHandler $storeProjectHandler,
        PdfService $pdfService,
        GetPdfDetailsHandler $getPdfDetailsHandler)
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
        $this->storeProjectHandler = $storeProjectHandler;
        $this->pdfService = $pdfService;
        $this->getPdfDetailsHandler = $getPdfDetailsHandler;
    }

    /**
     * @param array $storeData
     * @return \Illuminate\Http\Response|mixed
     */
    public function store(array $storeData)
    {
        $item = $this->storeProjectHandler->handle($storeData);
        $details = $this->getPdfDetailsHandler->handle($item->getDetails());

        $pdf = $this->pdfService->getProjectDetails($details);

        $key = encrypt(['item_id' => $item->id, 'project_id' => $storeData['id']], true);
        $mailContent = ['number' => $storeData['id'], 'name' => $storeData['name'], 'key' => $key];
        $fileName = 'project-details-' . $storeData['id'] . '.pdf';

        Mail::to($storeData['email'])
            ->send(new \App\Mail\PersonalProjectCreate($mailContent, $pdf->output(), $fileName));

        return $this->pdfService->getDownloadResponse($details, 'project-details', $storeData['id']);
    }
}
