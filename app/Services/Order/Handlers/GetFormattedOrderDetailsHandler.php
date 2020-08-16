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
            'dimensions' => 'Ш: ' . $item->width_cm . ' см × В: ' . $item->height_cm . ' см',
            'texture' => $item->texture->name,
            'filter' => $item->filter_details,
            'qty' => $item->qty,
            'price' => $item->price,
            'stripes_count' => $item->texture->seamless ? 1 : ceil($item->width_cm / $item->texture->width),
            'added_costs' => $item->getAddedCosts(),
            'added_costs_amount' => $item->getAddedCostsAmount(),
            'image_url' => config('settings.base_image_url') .
                config('settings.pdf_label_order_item_image_url') .
                getOrderItemPath($item)
        ]);
    }
}
