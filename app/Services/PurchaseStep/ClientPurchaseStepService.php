<?php


namespace App\Services\PurchaseStep;



use App\Services\PurchaseStep\Repositories\ClientPurchaseStepRepository;
use Illuminate\Database\Eloquent\Collection;

class ClientPurchaseStepService
{
    private ClientPurchaseStepRepository $repository;

    /**
     * ClientPurchaseStepService constructor.
     * @param ClientPurchaseStepRepository $repository
     */
    public function __construct(ClientPurchaseStepRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return Collection
     */
    public function index(): Collection
    {
        return $this->repository->index();
    }
}
