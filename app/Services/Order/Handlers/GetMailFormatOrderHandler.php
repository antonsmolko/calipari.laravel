<?php


namespace App\Services\Order\Handlers;


use App\Models\Order;
use App\Services\OrderItem\Resources\MailOrderItem as MailOrderItemResource;
use Illuminate\Support\Collection;

class GetMailFormatOrderHandler
{
    /**
     * @param Order $order
     * @return array
     */
    public function handle(Order $order): array
    {
        $delivery = json_decode($order->delivery, true);
        $customer = json_decode($order->customer, true);
        $goodQty = $this->getGoodsQtyString($order->items);

        return [
            'number' => $order->number,
            'date' => $order->created_at->format('d.m.Y'),
            'status' => $order->statuses->last()->title,
            'items' => $this->getFormattedItems($order->items),
            'delivery' => $delivery,
            'customer' => $customer,
            'goodsQty' => $goodQty,
            'price' => $order->price,
            'comment' => $order->comment
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
            'thumb_path' => config('settings.base_image_url') .
                config('settings.mail_order_item_thumb_url') .
                getOrderItemPath($item)
        ]);
    }
}
