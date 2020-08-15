<?php


namespace App\Services\PDF;

use App\Services\Texture\Repositories\CmsTextureRepository;
use PDF;
use App\Services\OrderItem\Repositories\OrderItemRepository;

class PDFService
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
     * @param int $orderItemId
     * @return \Illuminate\Http\Response
     */
    public function generateOrderItemLabel(int $orderItemId)
    {
        /** @var \Barryvdh\DomPDF\PDF $pdf */

        list($pdf, $fileName) = $this
            ->getOrderItemViewEntries(
                $orderItemId,
                'pdf.order-label',
                'order-label');

        return $pdf->setPaper('a5', 'landscape')->download($fileName);
    }

    /**
     * @param int $orderItemId
     * @return \Illuminate\Http\Response
     */
    public function generateOrderItemLayout(int $orderItemId)
    {
        /** @var \Barryvdh\DomPDF\PDF $pdf */

        list($pdf, $fileName) = $this
            ->getOrderItemViewEntries(
                $orderItemId,
                'pdf.order-layout',
                'order-layout');

        return $pdf->setPaper('a5', 'landscape')->download($fileName);
    }

    public function getPDFProjectDetails(array $item)
    {
        $details = $item;
        $details['image_url'] = config('settings.base_image_url') .
            config('settings.pdf_project_image_url') . '/' . $item['image_path'];

        $texture = $this->textureRepository->getItem($item['texture_id']);
        $details['texture_name'] = $texture->name;
        $details['stripes_count'] = $texture->seamless ? 1 : ceil($item['width_cm'] / $texture->width);
        $details['price'] = getItemPrice($item['width_cm'], $item['height_cm'], $texture->price);

        if (!empty($item['added_costs'])) {
            $details['added_costs'] = $item['added_costs'];
            $details['price'] += array_sum($details['added_costs']);
        }

        /** @var \Barryvdh\DomPDF\PDF $pdf */
        $pdf = PDF::loadView('pdf.project-details', ['details' => $details]);

        return $pdf->setPaper('a4', 'portrait');
    }

    /**
     * @param int $orderItemId
     * @param string $pdfTemplate
     * @param string $prefix
     * @return array
     */
    public function getOrderItemViewEntries(int $orderItemId, string $pdfTemplate, string $prefix): array
    {
        $orderItem = $this->orderItemRepository->getItemFromPDFLabel($orderItemId);

        $orderItem['image_url'] = config('settings.base_image_url') .
            config('settings.pdf_label_order_item_image_url') .
            getOrderItemPath($orderItem);

        $texture = $orderItem->texture;
        $orderItem['stripes_count'] = $texture->seamless ? 1 : ceil($orderItem->width_cm / $texture->width);

        /** @var \Barryvdh\DomPDF\PDF $pdf */
        $pdf = PDF::loadView($pdfTemplate, ['details' => $orderItem]);

        $fileName = $prefix . '-' . $orderItem->order->number . '-' . $orderItem->id . '.pdf';

        return [$pdf, $fileName];
    }
}
