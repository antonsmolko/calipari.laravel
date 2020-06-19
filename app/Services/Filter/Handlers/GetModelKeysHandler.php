<?php


namespace App\Services\Filter\Handlers;


use App\Services\Image\Repositories\ClientImageRepository;
use Illuminate\Http\Request;

class GetModelKeysHandler
{
    private ClientImageRepository $imageRepository;

    /**
     * GetFiltersByImageKeysHandler constructor.
     * @param ClientImageRepository $imageRepository
     */
    public function __construct(ClientImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param Request $request
     * @return array|void
     */
    public function handle(Request $request)
    {
        $filter = $request->filter;

        if (isset($filter['category']) && !empty($filter['category'])) {
            return $this->imageRepository->getModelKeys($request);
        }

        if (isset($filter['keys']) && !empty($filter['keys'])) {
            return $this->imageRepository->getWishListModelKeys($request);
        }

        abort(400, __('validation.custom.request.invalid_request_parameters'));
    }
}
