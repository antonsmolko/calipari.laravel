<?php


namespace App\Services\Texture\Handlers;


use App\Models\Texture;
use App\Services\Texture\Repositories\CmsTextureRepository;
use Illuminate\Support\Arr;

class UpdateTextureHandler
{
    private CmsTextureRepository $repository;

    /**
     * UpdateTextureHandler constructor.
     * @param CmsTextureRepository $repository
     */
    public function __construct(CmsTextureRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $updateData
     * @param Texture $item
     * @return Texture
     */
    public function handle(Texture $item, array $updateData): Texture
    {
        if(array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $uploadAttributes = uploader()->change($updateData['image'], $item->image_path);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadAttributes['path']);
        }

        if (array_key_exists('sample', $updateData) && !empty($updateData['sample'])) {
            $sampleAttributes = uploader()->change($updateData['sample'], $item->image_path);
            $updateData['sample_path'] = $sampleAttributes['path'];
        }

        if (array_key_exists('background', $updateData) && !empty($updateData['background'])) {
            $backgroundAttributes = uploader()->change($updateData['background'], $item->image_path);
            $updateData['sample_path'] = $backgroundAttributes['path'];
        }

        return $this->repository->update($item, Arr::except($updateData, ['sample', 'background']));
    }
}
