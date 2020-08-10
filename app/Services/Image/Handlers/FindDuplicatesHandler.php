<?php


namespace App\Services\Image\Handlers;


use App\Services\Image\Repositories\CmsImageRepository;
use Imagick;

class FindDuplicatesHandler
{
    private CmsImageRepository $repository;

    /**
     * FindDuplicatesHandler constructor.
     * @param CmsImageRepository $repository
     */
    public function __construct(
        CmsImageRepository $repository
    )
    {
        $this->repository = $repository;
    }

    /**
     * @param array $requestData
     * @return array
     * @throws \ImagickException
     */
    public function handle(array $requestData)
    {
        $image = $requestData['image'];
        $difference = $requestData['difference'];
        $category_id = !empty($requestData['category_id']) ? $requestData['category_id'] : null;

        set_time_limit(900);

        $uploadImage = new Imagick($image->getPathname());
        $items = $this->repository->getWithTrashedItemsFromDuplicates($category_id);

        $duplicates = $items
            ->filter(function($item) use ($uploadImage, $difference) {
                $baseDir = getBaseImagePath($item->path);
                $imageUrl = storage_path('app/public/uploads/images/') . $baseDir . '/' . $item->path;
                $image = new Imagick($imageUrl);
                $res = $uploadImage->compareImages($image, Imagick::METRIC_MEANSQUAREERROR);

                return round($res[1] * 1000) < $difference;
            })
            ->toArray();

        set_time_limit(30);

        return array_values($duplicates);
    }
}
