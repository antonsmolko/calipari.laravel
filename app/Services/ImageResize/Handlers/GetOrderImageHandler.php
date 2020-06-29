<?php


namespace App\Services\ImageResize\Handlers;


use App\Services\ImageResize\Builders\ImageProcessingBuilder;

class GetOrderImageHandler
{
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
     * @param string $imgPath
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @return \Intervention\Image\Image
     */
    public function handle(
        string $imgPath,
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize
    ): \Intervention\Image\Image
    {
        return $this->imageProcessingBuilder
            ->make($imgPath)
            ->flipH($flipH)
            ->flipV($flipV)
            ->crop($width, $height, $x, $y)
            ->colorize($colorize)
            ->get();
    }
}
