<?php


namespace App\Services\Post\Handlers;


use App\Services\Post\Repositories\ClientPostRepository;

class GetPublishedTypesHandler
{
    private ClientPostRepository $repository;

    /**
     * GetPublishedTypesHandler constructor.
     * @param ClientPostRepository $repository
     */
    public function __construct(ClientPostRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return array
     */
    public function handle(): array
    {
        $items = $this->repository->index();

        return $items
            ->groupBy('type')
            ->keys()
            ->toArray();
    }
}
