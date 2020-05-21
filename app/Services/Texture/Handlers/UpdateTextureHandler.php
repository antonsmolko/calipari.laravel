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
        if (isset($updateData['sample'])) {
            uploader()->remove($item['sample_path']);
            $sampleAttributes = uploader()->upload($updateData['sample']);
            $updateData['sample_path'] = $sampleAttributes['path'];
        }

        if (isset($updateData['background'])) {
            uploader()->remove($item['background_path']);
            $backgroundAttributes = uploader()->upload($updateData['background']);
            $updateData['background_path'] = $backgroundAttributes['path'];
        }

        return $this->repository->update($item, Arr::except($updateData, ['sample', 'background']));
    }
}
