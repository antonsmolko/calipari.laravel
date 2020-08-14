<?php


namespace App\Services\CartItem\Handlers;


use App\Services\Cart\Repositories\CmsCartRepository;
use App\Services\CartItem\Repositories\CmsCartItemRepository;
use App\Services\Image\Repositories\CmsImageRepository;
use Illuminate\Support\Arr;

class StoreProjectHandler
{
    private CmsCartItemRepository $repository;
    private CmsImageRepository $imageRepository;
    private CmsCartRepository $cartRepository;

    /**
     * StoreProjectHandler constructor.
     * @param CmsCartItemRepository $repository
     * @param CmsCartRepository $cartRepository
     * @param CmsImageRepository $imageRepository
     */
    public function __construct(
        CmsCartItemRepository $repository,
        CmsCartRepository $cartRepository,
        CmsImageRepository $imageRepository
    )
    {
        $this->repository = $repository;
        $this->cartRepository = $cartRepository;
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function handle(array $requestData)
    {
        $requestEmail = $requestData['email'];
        $details = Arr::except($requestData, ['email', 'name']);

        if (!empty($requestData['added_costs'])) {
            $details['added_costs'] = json_decode($details['added_costs'], true);
        }

        $image = $this->imageRepository->getItem($details['image_id']);
        $details = Arr::collapse([$details, [
            'x' => 0,
            'y' => 0,
            'width_px' => $image->width,
            'height_px' => $image->height,
            'qty' => 1,
            'filter' => [
                'flipH' => false,
                'flipV' => false,
                'colorize' => false
            ]
        ]]);

        $item = $this->repository->store(['details' => json_encode($details, true)]);
        $cart = $this->cartRepository->getItemByEmail($requestEmail);

        if ($cart) {
            $this->repository->associateWithCart($item, $cart);
        }

        return $item;
    }
}
