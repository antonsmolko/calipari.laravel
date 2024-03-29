<?php


namespace App\Services\ImageResize\Handlers;


use App\Services\ImageResize\Builders\ImageProcessingBuilder;

class GetPDFProjectImageHandler
{
    private const CANVAS_COLOR = 'FFFFFF';

    private ImageProcessingBuilder $imageProcessingBuilder;

    /**
     * GetOrderImageHandler constructor.
     * @param ImageProcessingBuilder $imageProcessingBuilder
     */
    public function __construct(ImageProcessingBuilder $imageProcessingBuilder)
    {
        $this->imageProcessingBuilder = $imageProcessingBuilder;
    }

    /**
     * @param string $file
     * @param int $width
     * @param int $height
     * @param string $color
     * @return \Intervention\Image\Image
     */
    public function handle(string $file, int $width, int $height, string $color = self::CANVAS_COLOR)
    {
        return $this->imageProcessingBuilder
            ->make($file)
            ->resizeWithAspectRatio($width, $height)
            ->cropCanvas($width, $height, $color)
            ->get();
    }
}
