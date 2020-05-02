<?php


namespace App\Services\Filter;


use App\Services\Filter\Handlers\GetModelKeysHandler;
use App\Services\Filter\Repositories\FilterRepository;
use App\Services\Image\Repositories\ClientImageRepository;
use Illuminate\Http\Request;

class FilterService
{
    private FilterRepository $filterRepository;
    private ClientImageRepository $imageRepository;
    private GetModelKeysHandler $getModelKeysHandler;

    /**
     * FilterService constructor.
     * @param FilterRepository $filterRepository
     * @param ClientImageRepository $imageRepository
     * @param GetModelKeysHandler $getModelKeysHandler
     */
    public function __construct(
        FilterRepository $filterRepository,
        ClientImageRepository $imageRepository,
        GetModelKeysHandler $getModelKeysHandler
    )
    {
        $this->filterRepository = $filterRepository;
        $this->imageRepository = $imageRepository;
        $this->getModelKeysHandler = $getModelKeysHandler;
    }

//    /**
//     * @param Request $request
//     * @return array
//     */
//    public function getFilters(Request $request): array
//    {
//        $exceptCategoryId = $request['filter']['category'];
//        $imageKeys = $this->imageRepository->getModelKeys($request);
//
//        return $this->getFiltersByImageKeysHandler->handle($exceptCategoryId, $imageKeys);
//    }

    /**
     * @param Request $request
     * @return array
     */
    public function getFormatFilters(Request $request): array
    {
        $imageKeys = $this->getModelKeysHandler->handle($request);

        return ['formats' => $this->filterRepository
            ->getFormatFiltersByImageKeys($imageKeys)];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getTagFilters(Request $request): array
    {
        $imageKeys = $this->getModelKeysHandler->handle($request);

        return ['tags' => $this->filterRepository
            ->getTagFiltersByImageKeys($imageKeys)];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getTopicFilters(Request $request): array
    {
        $imageKeys = $this->getModelKeysHandler->handle($request);
        $exceptId = isset($request->filter['category'])
            ? $request->filter['category']
            : null;

        return ['topics' => $this->filterRepository
            ->getTopicFiltersByImageKeys($imageKeys, $exceptId)];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getColorFilters(Request $request): array
    {
        $imageKeys = $this->getModelKeysHandler->handle($request);
        $exceptId = isset($request->filter['category'])
            ? $request->filter['category']
            : null;

        return ['colors' => $this->filterRepository
            ->getColorFiltersByImageKeys($imageKeys, $exceptId)];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getInteriorFilters(Request $request): array
    {
        $imageKeys = $this->getModelKeysHandler->handle($request);
        $exceptId = isset($request->filter['category'])
            ? $request->filter['category']
            : null;

        return ['interiors' => $this->filterRepository
            ->getInteriorFiltersByImageKeys($imageKeys, $exceptId)];
    }
}
