<?php


namespace App\Services\Order\Handlers;


use App\Services\CartItem\Repositories\CmsCartItemRepository;
use App\Services\Image\CmsImageService;
use App\Services\Texture\CmsTextureService;
use Illuminate\Support\Arr;

class GetOrderItemsHandler
{
    private CmsCartItemRepository $cartItemRepository;
    private CmsImageService $imageService;
    private CmsTextureService $textureService;

    /**
     * GetOrderItemsHandler constructor.
     * @param CmsCartItemRepository $cartItemRepository
     * @param CmsImageService $imageService
     * @param CmsTextureService $textureService
     */
    public function __construct(
        CmsCartItemRepository $cartItemRepository,
        CmsImageService $imageService,
        CmsTextureService $textureService
    )
    {
        $this->cartItemRepository = $cartItemRepository;
        $this->imageService = $imageService;
        $this->textureService = $textureService;
    }

    /**
     * @param array $requestItems
     * @return array
     */
    public function handle(array $requestItems): array
    {
        $items = $this->cartItemRepository->getItemsByKeys($requestItems);

        $itemsDetails = $items->map(function($item) {
            $details = $item->getDetails();
            $texture = $this->textureService->getItem($details['texture_id']);
            $details['price'] = getItemPrice($details['width_cm'], $details['height_cm'], $texture->price);
            $details['filter_details'] = getFilterString($details['filter']);

            return Arr::except($details, ['image_path', 'id']);
        });

        return [$items, $itemsDetails];
    }
}
