<?php


namespace App\Services\CartItem\Handlers;

use App\Services\Texture\Repositories\CmsTextureRepository;

class GetPdfDetailsHandler
{
    private CmsTextureRepository $textureRepository;

    /**
     * GetPdfDetailsHandler constructor.
     * @param CmsTextureRepository $textureRepository
     */
    public function __construct(CmsTextureRepository $textureRepository)
    {
        $this->textureRepository = $textureRepository;
    }

    /**
     * @param array $itemDetails
     * @return array
     */
    public function handle(array $itemDetails): array
    {
        $details = $itemDetails;
        $texture = $this->textureRepository->getItem($itemDetails['texture_id']);

        $details['image_url'] = config('settings.base_image_url') .
            config('settings.pdf_project_image_url') . '/' . $itemDetails['image_path'];
        $details['texture'] = $texture->name;
        $details['stripes_count'] = getStripesCount($itemDetails['width_cm'], $texture->width, $texture->seamless);
        $details['price'] = getItemPrice($itemDetails['width_cm'], $itemDetails['height_cm'], $texture->price);

        if (!empty($itemDetails['added_costs'])) {
            $details['added_costs'] = $itemDetails['added_costs'];
            $details['price'] += array_sum($details['added_costs']);
        }

        return $details;
    }
}
