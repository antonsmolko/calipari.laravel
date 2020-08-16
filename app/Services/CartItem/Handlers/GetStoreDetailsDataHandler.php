<?php


namespace App\Services\CartItem\Handlers;


use App\Models\Image;
use App\Services\Image\Repositories\ClientImageRepository;
use Illuminate\Support\Arr;

class GetStoreDetailsDataHandler
{
    private ClientImageRepository $imageRepository;

    /**
     * GetStoreDetailsDataHandler constructor.
     * @param ClientImageRepository $imageRepository
     */
    public function __construct(ClientImageRepository $imageRepository)
    {
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param array $projectData
     * @return array
     */
    public function handle(array $projectData): array
    {
        $image = $this->imageRepository->getItem($projectData['image_id']);
        $this->validateProject($image, $projectData);

        return [
            'hash' => $projectData['hash'],
            'image_id' => $projectData['image_id'],
            'image_path' => $image->path,
            'width_cm' => $projectData['width_cm'],
            'height_cm' => $projectData['height_cm'],
            'x' => $projectData['x'],
            'y' => $projectData['y'],
            'width_px' => $projectData['width_px'],
            'height_px' => $projectData['height_px'],
            'filter' => $projectData['filter'],
            'texture_id' => $projectData['texture_id'],
            'qty' => 1
        ];
    }

    public function validateProject(Image $image, array $projectData)
    {
        if ($projectData['width_cm'] > $image->max_print_width) {
            abort(422, __('project_validation.maximum_allowed_print_width_exceeded'));
        }

        $ratio = $image->width / $image->height;
        if ($projectData['height_cm'] > $image->max_print_width / $ratio) {
            abort(422, __('project_validation.maximum_allowed_print_height_exceeded'));
        }

        if ($projectData['x'] > $image->width || $projectData['x'] < 0) {
            abort(422, __('project_validation.x-axis_range_limit_exceeded'));
        }

        if ($projectData['y'] > $image->height || $projectData['y'] < 0) {
            abort(422, __('project_validation.y-axis_range_limit_exceeded'));
        }

        $filter = $projectData['filter'];
        if (!Arr::has($filter, ['flipH', 'flipV', 'colorize']) || count($filter) !== 3) {
            abort(422, __('project_validation.wrong_filter_format'));
        }
    }
}
