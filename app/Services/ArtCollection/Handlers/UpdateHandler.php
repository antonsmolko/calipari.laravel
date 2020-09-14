<?php


namespace App\Services\ArtCollection\Handlers;


use App\Models\ArtCollection;
use App\Services\ArtCollection\Repositories\CmsArtCollectionRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsArtCollectionRepository $repository;

    /**
     * UpdateHandler constructor.
     * @param CmsArtCollectionRepository $repository
     */
    public function __construct(CmsArtCollectionRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param ArtCollection $item
     * @param array $updateData
     * @return mixed
     */
    public function handle(ArtCollection $item, array $updateData)
    {
        if (array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $uploadAttributes = uploader()
                ->change($updateData['image'], $item->image_path);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadAttributes['path']);
        }

        if (!$item->publishedImages()->count()) {
            $updateData['publish'] = 0;
        }

        return $this->repository->update($item, $updateData);
    }
}
