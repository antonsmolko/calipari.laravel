<?php


namespace App\Services\PDF;


use PDF;
use App\Services\OrderItem\Repositories\OrderItemRepository;

class PDFService
{
    private OrderItemRepository $orderItemRepository;

    /**
     * PDFService constructor.
     * @param OrderItemRepository $orderItemRepository
     */
    public function __construct(
        OrderItemRepository $orderItemRepository
    )
    {
        $this->orderItemRepository = $orderItemRepository;
        PDF::setOptions(['dpi' => 300]);
    }

    /**
     * @param int $orderItemId
     * @return \Illuminate\Http\Response
     */
    public function generateOrderItemLabel(int $orderItemId)
    {
        $orderItem = $this->orderItemRepository->getItemFromPDFLabel($orderItemId);

        $orderItem['image_url'] = config('settings.base_image_url') .
            config('settings.pdf_label_order_item_image_url') .
            getOrderItemPath($orderItem);

        $texture = $orderItem->texture;
        $orderItem['stripe_count'] = $texture->seamless ? 1 : ceil($orderItem->width_cm / $texture->width);

        $pdf = PDF::loadView('pdf.order-label', ['details' => $orderItem]);

        $fileName = 'order-label-' . $orderItem->order->number . '-' . $orderItem->id . '.pdf';

        return $pdf->setPaper('a5', 'landscape')->download($fileName);
    }

    /**
     * @param int $orderItemId
     * @return \Illuminate\Http\Response
     */
    public function generateOrderItemLayout(int $orderItemId)
    {
        $orderItem = $this->orderItemRepository->getItem($orderItemId);

        $imageUrl = config('settings.base_image_url') .
            config('settings.pdf_layout_order_item_image_url') .
            getOrderItemPath($orderItem);

        $pdf = PDF::loadView('pdf.order-layout', ['image_url' => $imageUrl]);
        $fileName = 'order-layout-' . $orderItem->order->number . '-' . $orderItem->id . '.pdf';

        return $pdf->setPaper('a5', 'landscape')->download($fileName);
    }
}
