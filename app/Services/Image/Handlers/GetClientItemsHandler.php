<?php


namespace App\Services\Image\Handlers;


use App\Services\Image\Repositories\ClientImageRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class GetClientItemsHandler
{
    private ClientImageRepository $repository;

    /**
     * IndexHandler constructor.
     * @param ClientImageRepository $repository
     */
    public function __construct(ClientImageRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Database\Concerns\BuildsQueries|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection|mixed|\Spatie\QueryBuilder\QueryBuilder|\Spatie\QueryBuilder\QueryBuilder[]
     */
    public function handle(Request $request)
    {
        $filter = $request->filter;

        if (isset($filter['category']) && !empty($filter['category'])) {
            return $this->repository->getItems($request);
        }

        if (isset($filter['keys']) && !empty($filter['keys'])) {
            return $this->repository->getWishListItems($request);
        }

        abort(400, __('validation.custom.request.invalid_request_parameters'));
    }
}
