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
            $item['price'] = getItemPrice($item['width_cm'], $item['height_cm'], $texture->price);

            return $item;
        }, $requestItems);
    }
}
