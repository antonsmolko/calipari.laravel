<?php


namespace App\Services\Format;


use App\Services\Format\Repositories\CmsFormatRepository;
use Illuminate\Database\Eloquent\Collection;

class FormatService
{
    private CmsFormatRepository $repository;

    /**
     * FormatService constructor.
     * @param CmsFormatRepository $repository
     */
    public function __construct(CmsFormatRepository $repository)
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
