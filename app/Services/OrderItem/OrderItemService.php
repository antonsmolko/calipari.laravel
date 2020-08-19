<?php


namespace App\Services\OrderItem;


use App\Models\OrderItem;
use App\Services\OrderItem\Handlers\GetFormattedItemDetailsHandler;
use App\Services\OrderItem\Handlers\StoreHandler;
use App\Services\Pdf\PdfService;

class OrderItemService
{
    private GetFormattedItemDetailsHandler $getFormattedItemDetailsHandler;
    private StoreHandler $storeHandler;
    private PdfService $pdfService;

    /**
     * OrderItemService constructor.
     * @param GetFormattedItemDetailsHandler $getFormattedItemDetailsHandler
     * @param StoreHandler $storeHandler
     * @param PdfService $pdfService
     */
    public function __construct(
        GetFormattedItemDetailsHandler $getFormattedItemDetailsHandler,
        StoreHandler $storeHandler,
        PdfService $pdfService)
    {
        $this->getFormattedItemDetailsHandler = $getFormattedItemDetailsHandler;
        $this->storeHandler = $storeHandler;
        $this->pdfService = $pdfService;
    }

    /**
     * @param array $storeData
     * @return OrderItem
     */
    public function store(array $storeData): OrderItem
    {
        return $this->storeHandler->handle($storeData);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getPdfLabel(int $id)
    {
        $itemDetails = $this->getFormattedItemDetailsHandler->handle($id, 'label');
        $postfix = $itemDetails['order']['number'] . '-' . $id;

        return $this->pdfService->getOrderItemLabel($itemDetails, $postfix);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getPdfLayout(int $id)
    {
        $itemDetails = $this->getFormattedItemDetailsHandler->handle($id, 'layout');
        $postfix = $itemDetails['order']['number'] . '-' . $id;

        return $this->pdfService->getOrderItemLayout($itemDetails, $postfix);
    }
}
