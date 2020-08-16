<?php


namespace App\Services\OrderItem\Handlers;


use App\Services\OrderItem\Repositories\OrderItemRepository;

class GetFormattedItemDetailsHandler
{
    private OrderItemRepository $repository;

    /**
     * GetFormattedItemDetailsHandler constructor.
     * @param OrderItemRepository $repository
     */
    public function __construct(OrderItemRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function handle(int $id)
    {
        $item = $this->repository->getItemFromPDFLabel($id);

        $item['image_url'] = config('settings.base_image_url') .
            config('settings.pdf_label_order_item_image_url') .
            getOrderItemPath($item);

        $texture = $item->texture;
        $item['stripes_count'] = getStripesCount($item->width_cm, $texture->width, $texture->seamless);

        return $item;
    }
}
