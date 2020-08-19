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
     * @param string $type
     * @return mixed
     */
    public function handle(int $id, string $type)
    {
        $item = $this->repository->getItemFromPDFLabel($id);
        $item['image_url'] = $this->getImageUrlByType($item, $type);

        $texture = $item->texture;
        $item['stripes_count'] = getStripesCount($item->width_cm, $texture->width, $texture->seamless);

        return $item;
    }

    /**
     * @param $item
     * @param string $type
     * @return string
     */
    public function getImageUrlByType($item, string $type): string
    {
        switch ($type) {
            case 'label':
                return config('settings.base_image_url') .
                    config('settings.pdf_label_order_item_image_url') .
                    getOrderItemPath($item);
            case 'layout':
                return config('settings.base_image_url') .
                    config('settings.pdf_layout_order_item_image_url') .
                    getOrderItemPath($item);
            default:
                return '';
        }
    }
}
