<?php


namespace App\Services\Image\Handlers;


use App\Models\Image;
use App\Services\Image\Repositories\CmsImageRepository;

class ForceDeleteHandler
{
    private CmsImageRepository $repository;

    /**
     * @param CmsImageRepository $repository
     */
    public function __constructor(CmsImageRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Image $item
     * @return bool|null
     */
    public function handle(Image $item)
    {
        uploader()->remove($item->path);

        $examples = $item->getExamples();
        array_walk($examples, fn($example) => uploader()->remove($example));

        return $this->repository->forceDelete($item);
    }
}
