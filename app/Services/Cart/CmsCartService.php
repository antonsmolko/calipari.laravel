<?php


namespace App\Services\Cart;


use App\Mail\PersonalProjectCreate;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cart\Handlers\StoreHandler;
use App\Services\Cart\Repositories\CmsCartRepository;
use App\Services\PDF\PDFService;
use Illuminate\Support\Facades\Mail;

class CmsCartService extends CmsBaseResourceService
{
    private StoreHandler $storeHandler;
    private PDFService $PDFService;

    /**
     * CmsCartService constructor.
     * @param CmsCartRepository $repository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     * @param PDFService $PDFService
     */
    public function __construct(
        CmsCartRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler,
        PDFService $PDFService
    )
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
        $this->PDFService = $PDFService;
    }

    /**
     * @param array $storeData
     * @return array|mixed
     */
    public function store(array $storeData)
    {
        list($cart, $item) = $this->storeHandler->handle($storeData);

        $pdf = $this->PDFService->getPDFProjectDetails($item);

        $key = encrypt(['cart_id' => $cart->id, 'project_id' => $storeData['id']], true);
        $data = $cart->user
            ? ['number' => $storeData['id'], 'name' => $cart->user->name, 'key' => $key]
            : ['number' => $storeData['id'], 'name' => $storeData['name'], 'key' => $key];

        $fileName = 'project-details-' . $storeData['id'] . '.pdf';

        Mail::to($storeData['email'])
            ->send(new \App\Mail\PersonalProjectCreate($data, $pdf->output(), $fileName));

        return $data;
    }
}
