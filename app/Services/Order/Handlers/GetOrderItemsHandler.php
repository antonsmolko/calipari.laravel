<?php


namespace App\Services\Order\Handlers;


use App\Services\Image\CmsImageService;
use App\Services\Texture\CmsTextureService;

class GetOrderItemsHandler
{
    private CmsImageService $imageService;
    private CmsTextureService $textureService;

    /**
     * GetOrderItemsHandler constructor.
     * @param CmsImageService $imageService
     * @param CmsTextureService $textureService
     */
    public function __construct(
        CmsImageService $imageService,
        CmsTextureService $textureService
    )
    {
        $this->imageService = $imageService;
        $this->textureService = $textureService;
    }

    /**
     * @param array $requestItems
     * @return array
     */
    public function handle(array $requestItems): array
    {
        return array_map(function($item) {
            $texture = $this->textureService->getItem($item['texture_id']);
            $item['price'] = $this->getItemPrice($item['width_cm'], $item['height_cm'], $texture->price);

            return $item;
        }, $requestItems);
    }

    /**
     * @param int $width
     * @param int $height
     * @param int $texturePrice
     * @return int
     */
    private function getItemPrice(int $width, int $height, int $texturePrice): int
    {
        return (int) round($width * $height / 1e6 * $texturePrice, 0) * 100;
    }
}
