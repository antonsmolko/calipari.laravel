<?php


namespace App\Services\Owner\Repositories;

use App\Models\Image;
use App\Models\Owner;
use App\Services\SubCategory\Repositories\SubCategoryRepository;

class OwnerRepository extends SubCategoryRepository
{
    protected string $table = 'owners';

    /**
     * OwnerRepository constructor.
     * @param Owner $model
     */
    public function __construct(Owner $model)
    {
        $this->model = $model;
    }

    /**
     * @param $category
     * @param array $requestData
     * @return mixed
     */
    public function getExcludedImages($category, array $requestData)
    {
        return Image::doesntHave('owner')
            ->doesntHave('colorCollection')
            ->with(Image::IMAGE_QUERY_BUILDER)
            ->withCount(['likes', 'orders'])
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

    /**
     * @param mixed $ownerId
     * @param array $imageKeys
     * @return mixed|void
     */
    public function addImages($ownerId, array $imageKeys)
    {
        return Image::whereIn('id', $imageKeys)
            ->update(['owner_id' => $ownerId]);
    }
}
