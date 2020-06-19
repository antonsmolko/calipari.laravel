<?php


namespace App\Services\WorkExample\Handlers;


use App\Models\WorkExample;
use App\Services\WorkExample\Repositories\CmsWorkExampleRepository;

class DeleteHandler
{
    private CmsWorkExampleRepository $repository;

    /**
     * DeleteHandler constructor.
     * @param CmsWorkExampleRepository $repository
     */
    public function __construct(CmsWorkExampleRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param WorkExample $item
     * @return int
     * @throws \Exception
     */
    public function handle(WorkExample $item): int
    {
        uploader()->remove($item['image_path']);

        $images = json_decode($item->images, true);
        array_map(fn ($path) => uploader()->remove($path), $images);

        return $this->repository->destroy($item);
    }
}
