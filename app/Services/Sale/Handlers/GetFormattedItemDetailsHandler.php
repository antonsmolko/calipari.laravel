<?php


namespace App\Services\Sale\Handlers;


use App\Services\OrderItem\Repositories\OrderItemRepository;
use App\Services\Sale\Repositories\CmsSaleRepository;

class GetFormattedItemDetailsHandler
{
    private CmsSaleRepository $repository;

    /**
     * GetFormattedItemDetailsHandler constructor.
     * @param CmsSaleRepository $repository
     */
    public function __construct(CmsSaleRepository $repository)
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
        $item = $this->repository->getItemWithTexture($id);
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
                    config('settings.pdf_label_sale_image_url') .
                    '/' .
                    $item->image_path;
            case 'layout':
                return config('settings.base_image_url') .
                    config('settings.pdf_layout_sale_image_url') .
                    '/' .
                    $item->image_path;
            default:
                return '';
        }
    }
}
