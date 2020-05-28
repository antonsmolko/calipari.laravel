<?php


namespace App\Services\PurchaseStep\Repositories;


use App\Models\PurchaseStep;
use Illuminate\Database\Eloquent\Collection;

class ClientPurchaseStepRepository
{
    private PurchaseStep $model;

    /**
     * ClientPurchaseStepRepository constructor.
     * @param PurchaseStep $model
     */
    public function __construct(PurchaseStep $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection
     */
    public function index(): Collection
    {
        return $this->model::orderBy('id', 'asc')->get();
    }
}
