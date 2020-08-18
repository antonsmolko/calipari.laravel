<?php


namespace App\Services\CartItem\Handlers;


use App\Models\Image;
use App\Services\Image\Repositories\ClientImageRepository;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;

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
        $ratio = $image->width / $image->height;
        $maxPrintHeight = ceil($image->max_print_width / $ratio);

        $rules = [
            'width_cm' => 'required|numeric|max:' . $image->max_print_width,
            'height_cm' => 'required|numeric|max:' . $maxPrintHeight,
            'x' => 'required|numeric|min:' . 0 . '|max:' . $image->width,
            'y' => 'required|numeric|min:' . 0 . '|max:' . $image->height
        ];

        $messages = [
            'width_cm.max' => __('project_validation.maximum_allowed_print_width_exceeded', [
                'width' => $image->max_print_width
            ]),
            'height_cm.max' => __('project_validation.maximum_allowed_print_height_exceeded', [
                'height' => $maxPrintHeight
            ]),
            'x.max' => __('project_validation.x-axis_range_limit_exceeded', ['x' => $image->width]),
            'y.max' => __('project_validation.y-axis_range_limit_exceeded', ['y' => $image->height]),
        ];

        $validator = Validator::make($projectData, $rules, $messages);
        $filter = $projectData['filter'];

        $validator->after(function ($validator) use ($filter) {
            if (!Arr::has($filter, ['flipH', 'flipV', 'colorize']) || count($filter) !== 3) {
                $validator->errors()->add('filter', __('project_validation.wrong_filter_format'));
            }
        });

        $validator->validate();
    }
}
