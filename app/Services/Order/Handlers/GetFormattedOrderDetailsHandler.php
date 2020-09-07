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
            'items' => $this->getConcatItems($order->items, $order->sales),
            'delivery' => $order->getDelivery(),
            'customer' => $order->getCustomer(),
            'goodsQty' => $this->getGoodsQtyString($order->items, $order->sales),
            'price' => $order->getPrice(),
            'comment' => $order->comment,
            'refund_amount' => $order->refund_amount,
            'refund_reason' => $order->refund_reason
        ];
    }

    /**
     * @param Collection $items
     * @param Collection $sales
     * @return string
     */
    private function getGoodsQtyString(Collection $items, Collection $sales): string
    {
        $qty = $items->sum('qty') + $sales->count();

        return $qty . ' ' . wordsDeclension($qty, [
            'ТОВАР',
            'ТОВАРА',
            'ТОВАРОВ'
        ]);
    }

    /**
     * @param Collection $items
     * @param Collection $sales
     * @return Collection
     */
    private function getConcatItems(Collection $items, Collection $sales): Collection
    {
        return $this->getFormattedItems($items)->concat($this->getFormattedSales($sales));
    }

    /**
     * @param Collection $items
     * @return Collection
     */
    private function getFormattedItems(Collection $items): Collection
    {
        return $items->map(fn ($item) => [
            'article' => getImageArticle($item->image_id),
            'dimensions' => getOrderItemDimensions($item->width_cm, $item->height_cm),
            'texture' => $item->texture->name,
            'filter' => $item->filter_details,
            'qty' => $item->qty,
            'price' => $item->price,
            'stripes_count' => getStripesCount($item->width_cm, $item->texture->width, $item->texture->seamless),
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

    private function getFormattedSales(Collection $items)
    {
        return $items->map(fn ($item) => [
            'article' => $item->article,
            'dimensions' => getOrderItemDimensions($item->width_cm, $item->height_cm),
            'texture' => $item->texture->name,
            'qty' => 1,
            'price' => $item->pivot->selling_price,
            'stripes_count' => getStripesCount($item->width_cm, $item->texture->width, $item->texture->seamless),
            'added_costs_amount' => 0,
            'image_url' => config('settings.base_image_url') .
                config('settings.pdf_label_sale_image_url') .
                '/' . $item->image_path,
            'mail_thumb_url' => config('settings.base_image_url') .
                config('settings.mail_order_sale_thumb_url') .
                '/' . $item->image_path
        ]);
    }
}
