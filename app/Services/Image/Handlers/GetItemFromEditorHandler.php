<?php


namespace App\Services\Image\Handlers;


use App\Models\Image;
use App\Services\ArtCollection\Repositories\ClientArtCollectionRepository;
use App\Services\ColorCollection\Repositories\ClientColorCollectionRepository;
use App\Services\Image\Resources\FromEditorClient as ImageFromEditorResource;

class GetItemFromEditorHandler
{
    private ClientArtCollectionRepository $artCollectionRepository;
    private ClientColorCollectionRepository $colorCollectionRepository;

    /**
     * GetItemFromEditorHandler constructor.
     * @param ClientArtCollectionRepository $artCollectionRepository
     * @param ClientColorCollectionRepository $colorCollectionRepository
     */
    public function __construct(
        ClientArtCollectionRepository $artCollectionRepository,
        ClientColorCollectionRepository $colorCollectionRepository
    )
    {
        $this->artCollectionRepository = $artCollectionRepository;
        $this->colorCollectionRepository = $colorCollectionRepository;
    }

    /**
     * @param ImageFromEditorResource $item
     * @return array
     */
    public function handle(ImageFromEditorResource $item): array
    {
        return [
            'item' => $item,
            'colorCollection' => $item->publishedColorCollection
                ? [$item, ...$this->colorCollectionRepository
                    ->getItemImagesFromEditor($item->colorCollection, $item->id)]
                : [],
            'artCollection' => $item->publishedArtCollection
                ? [$item, ...$this->artCollectionRepository
                    ->getItemImagesFromEditor($item->artCollection, $item->id)]
                : []
        ];
    }
}
