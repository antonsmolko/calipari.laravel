<?php


namespace App\Services\ImageResize\Handlers;


use App\Services\ImageResize\Builders\ImageProcessingBuilder;

class GetPDFProjectImageHandler
{
    private const CANVAS_COLOR = 'FFFFFF';
    private const CANVAS_WITH = 1600;
    private const CANVAS_HEIGHT = 1200;

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
     * @return \Intervention\Image\Image
     */
    public function handle(string $file)
    {
        return $this->imageProcessingBuilder
            ->make($file)
            ->resizeWithAspectRatio(self::CANVAS_WITH, self::CANVAS_HEIGHT)
            ->cropCanvas(self::CANVAS_WITH, self::CANVAS_HEIGHT, self::CANVAS_COLOR)
            ->get();
    }
}
