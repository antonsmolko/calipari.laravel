<?php


namespace App\Services\Sale\Repositories;


use App\Models\Sale;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Sale\Resources\ForListCmsCollection as SaleForListCollection;

class CmsSaleRepository extends CmsBaseResourceRepository
{
    /**
     * CmsSaleRepository constructor.
     * @param Sale $model
     */
    public function __construct(Sale $model)
    {
        $this->model = $model;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItemWithTexture(int $id)
    {
        return $this->model::where('id', $id)
            ->with('texture:id,name,width,seamless')
            ->firstOrFail();
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function getArticles()
    {
        return $this->model::all()->pluck('article');
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getRestArticles(int $id)
    {
        return $this->model::where('id', '<>', $id)->get()->pluck('article');
    }

    /**
     * @param array $requestData
     * @param string $status
     * @return SaleForListCollection
     */
    public function getItemsByStatus(array $requestData, int $status)
    {
        return new SaleForListCollection($this->model::where('status', $status)
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('article', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }

    /**
     * @param Sale $item
     * @param int $status
     * @return bool
     */
    public function changeStatus(Sale $item, int $status): bool
    {
        $item->status = $status;

        return $item->save();
    }

    /**
     * @param Sale $item
     * @return bool
     */
    public function onSale(Sale $item)
    {
        $item->status = $this->model::FOR_SALE;

        return $item->save();
    }
}
