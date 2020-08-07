<?php


namespace App\Http\Controllers\PDF;

use App\Services\PDF\PDFService;
use PDF;

class PDFController
{
    private PDFService $service;

    /**
     * PDFController constructor.
     * @param PDFService $service
     */
    public function __construct(PDFService $service)
    {
        $this->service = $service;
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function generateOrderItemLabel(int $id)
    {
        return $this->service->generateOrderItemLabel($id);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function generateOrderItemLayout(int $id)
    {
        return $this->service->generateOrderItemLayout($id);
    }
}
