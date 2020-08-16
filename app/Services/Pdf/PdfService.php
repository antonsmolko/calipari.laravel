<?php


namespace App\Services\Pdf;

use App\Services\Texture\Repositories\CmsTextureRepository;
use App\Services\OrderItem\Repositories\OrderItemRepository;
use PDF;

class PdfService
{
    private OrderItemRepository $orderItemRepository;
    private CmsTextureRepository $textureRepository;

    /**
     * PDFService constructor.
     * @param OrderItemRepository $orderItemRepository
     * @param CmsTextureRepository $textureRepository
     */
    public function __construct(
        OrderItemRepository $orderItemRepository,
        CmsTextureRepository $textureRepository
    )
    {
        $this->orderItemRepository = $orderItemRepository;
        $this->textureRepository = $textureRepository;
        PDF::setOptions(['dpi' => 300]);
    }

    /**
     * @param $details
     * @param string $postfix
     * @return \Illuminate\Http\Response
     */
    public function getOrderItemLabel($details, string $postfix)
    {
        return $this->getDownloadResponse(
            $details,
            'order-label',
            $postfix,
            'a5',
            'landscape',
            300);
    }

    /**
     * @param $details
     * @param string $postfix
     * @return \Illuminate\Http\Response
     */
    public function getOrderItemLayout($details, string $postfix)
    {
        return $this->getDownloadResponse(
            $details,
            'order-layout',
            $postfix,
            'a5',
            'landscape',
            300
        );
    }

    /**
     * @param $details
     * @return PDF
     */
    public function getOrderDetails($details)
    {
        return $this->loadView($details, 'order-details');
    }

    /**
     * @param array $details
     * @return PDF
     */
    public function getProjectDetails(array $details)
    {
        return $this->loadView($details, 'project-details');
    }

    /**
     * @param $details
     * @param string $prefix
     * @param string $postfix
     * @param string $pageFormat
     * @param string $pageOrientation
     * @param int $dpi
     * @return \Illuminate\Http\Response
     */
    public function getDownloadResponse(
        $details,
        string $prefix,
        string $postfix,
        string $pageFormat = 'a4',
        string $pageOrientation = 'portrait',
        int $dpi = 96)
    {
        PDF::setOptions(['dpi' => $dpi]);

        /** @var \Barryvdh\DomPDF\PDF $pdf */
        $pdf = $this->loadView($details, $prefix);
        $fileName = $prefix . '-' . $postfix . '.pdf';

        return $pdf->setPaper($pageFormat, $pageOrientation)->download($fileName);
    }

    /**
     * @param $details
     * @param string $template
     * @return PDF
     */
    public function loadView($details, string $template)
    {
        PDF::setOptions(['dpi' => 96]);
        /** @var \Barryvdh\DomPDF\PDF $pdf */
        return PDF::loadView('pdf.' . $template, ['details' => $details]);
    }
}
