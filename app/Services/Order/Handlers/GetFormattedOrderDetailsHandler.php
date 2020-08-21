<?php


namespace App\Services\Order\Handlers;


use App\Models\Order;
use Illuminate\Support\Collection;

class GetFormattedOrderDetailsHandler
{
    /**
     * @param Order $order
     * @return array
     */
    public function handle(Order $order): array
    {
        return [
            'number' => $order->number,
            'hash_number' => $order->hash_number,
            'date' => $order->created_at->format('d.m.Y'),
            'status' => $order->statuses->last()->title,
            'items' => $this->getFormattedItems($order->items),
            'delivery' => $order->getDelivery(),
            'customer' => $order->getCustomer(),
            'goodsQty' => $this->getGoodsQtyString($order->items),
            'price' => $order->price,
            'comment' => $order->comment,
            'refund_amount' => $order->refund_amount,
            'refund_reason' => $order->refund_reason
        ];
    }

    /**
     * @param Collection $items
     * @return string
     */
    private function getGoodsQtyString(Collection $items): string
    {
        $qty = $this->getGoodsQty($items);

        return $qty . ' ' . wordsDeclension($qty, [
            'ТОВАР',
            'ТОВАРА',
            'ТОВАРОВ'
        ]);
    }

    /**
     * @param Collection $items
     * @return int
     */
    private function getGoodsQty(Collection $items): int
    {
        return $items->reduce(fn($carry, $item) => $carry + $item['qty'], 0);
    }

    private function getFormattedItems(Collection $items)
    {
        return $items->map(fn ($item) => [
            'article' => getImageArticle($item->image_id),
            'dimensions' => $item->width_cm . ' см × ' . $item->height_cm . ' см',
            'texture' => $item->texture->name,
            'filter' => $item->filter_details,
            'qty' => $item->qty,
            'price' => $item->price,
            'stripes_count' => $item->texture->seamless ? 1 : ceil($item->width_cm / $item->texture->width),
            'added_costs' => $item->getAddedCosts(),
            'added_costs_amount' => $item->getAddedCostsAmount(),
            'image_url' => config('settings.base_image_url') .
                config('settings.pdf_label_order_item_image_url') .
                getOrderItemPath($item),
            'mail_thumb_url' => config('settings.base_image_url') .
                config('settings.mail_order_item_thumb_url') .
                getOrderItemPath($item),
        ]);
    }
}
