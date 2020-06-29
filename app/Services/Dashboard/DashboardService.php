<?php


namespace App\Services\Dashboard;


use App\Services\Dashboard\Repositories\DashboardRepository;

class DashboardService
{
    private DashboardRepository $repository;

    /**
     * DashboardService constructor.
     * @param DashboardRepository $repository
     */
    public function __construct(DashboardRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $resources
     * @return array
     */
    public function getResourcesCount(array $resources): array
    {
        return $this->repository->getResourcesCount($resources);
    }
}
