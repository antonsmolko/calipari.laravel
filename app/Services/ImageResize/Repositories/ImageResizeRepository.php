<?php


namespace App\Services\ImageResize\Repositories;

use Image;

class ImageResizeRepository
{
    private int $cacheTime;

    /**
     * GetImageResizeHandler constructor.
     */
    public function __construct()
    {
        $this->cacheTime = config('uploads.image_cache_time');
    }

    /**
     * @param string $file
     * @param string $width
     * @param string $height
     * @return Image
     */
    public function resize(string $file, string $width, string $height)
    {
        return Image::cache(function ($image) use ($file, $width, $height) {
            $image->make($file)->resize($width, $height, function ($constraint) {
                $constraint->aspectRatio();
            });
        }, $this->cacheTime, true);
    }

    /**
     * @param string $file
     * @param string $width
     * @param string $height
     * @return Image
     */
    public function crop(string $file, string $width, string $height)
    {
        return Image::cache(function ($image) use ($file, $width, $height) {
            $image->make($file)->crop($width, $height);
        }, $this->cacheTime, true);
    }

    /**
     * @param string $file
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @return Image
     */
    public function orderCrop(string $file, string $width, string $height, string $x, string $y)
    {
        return Image::cache(function ($image) use ($file, $width, $height, $x, $y) {
            $image->make($file)->crop($width, $height, $x, $y);
        }, $this->cacheTime, true);
    }

    /**
     * @param string $file
     * @param string $width
     * @param string $height
     * @return Image
     */
    public function fit(string $file, string $width, string $height)
    {
        return  Image::cache(function ($image) use ($file, $width, $height) {
            $image->make($file)->fit($width, $height, function ($constraint) {
                $constraint->upsize();
            });
        }, $this->cacheTime, true);
    }

    /**
     * @param \Intervention\Image\Image $image
     * @param int $width
     * @param int $height
     * @param string|null $color
     * @return \Intervention\Image\Image
     */
    public function cropCanvas(\Intervention\Image\Image $image, int $width, int $height, string $color = null): \Intervention\Image\Image
    {
        return $image->resizeCanvas($width, $height, 'center', false, $color);
    }

    /**
     * @param \Intervention\Image\Image $image
     * @param int $width
     * @param int $height
     * @return \Intervention\Image\Image
     */
    public function resizeWithAspectRatio(\Intervention\Image\Image $image, int $width, int $height): \Intervention\Image\Image
    {
        return $image->resize($width, $height, function($image) {
            $image->aspectRatio();
        });
    }

    /**
     * @param string $file
     * @param string $width
     * @return mixed
     */
    public function widen(string $file, string $width)
    {
        return Image::cache(function ($image) use ($file, $width) {
            $image->make($file)->widen($width, function ($constraint) {
                $constraint->upsize();
            });
        }, $this->cacheTime, true);
    }

    /**
     * @param string $file
     * @param string $height
     * @return mixed
     */
    public function heighten(string $file, string $height)
    {
        return Image::cache(function ($image) use ($file, $height) {
            $image->make($file)->heighten($height, function ($constraint) {
                $constraint->upsize();
            });
        }, $this->cacheTime, true);
    }

    /**
     * @param string $imgPath
     * @return \Intervention\Image\Image
     */
    public function show(string $imgPath)
    {
        return Image::make($imgPath);
    }

    /**
     * @param string $file
     * @return mixed
     */
    public function showGrayscale(string $file)
    {
        return Image::cache(function ($image) use ($file) {
            $image->make($file)->greyscale();
        }, $this->cacheTime, true);
    }

    /**
     * @param string $file
     * @return \Intervention\Image\Image
     */
    public function make(string $file): \Intervention\Image\Image
    {
        return Image::make($file);
    }

    /**
     * @param \Intervention\Image\Image $image
     * @return \Intervention\Image\Image
     */
    public function flipH(\Intervention\Image\Image $image): \Intervention\Image\Image
    {
        return $image->flip();
    }

    /**
     * @param \Intervention\Image\Image $image
     * @return \Intervention\Image\Image
     */
    public function flipV(\Intervention\Image\Image $image): \Intervention\Image\Image
    {
        return $image->flip('v');
    }

    /**
     * @param \Intervention\Image\Image $image
     * @return \Intervention\Image\Image
     */
    public function grayscale(\Intervention\Image\Image $image): \Intervention\Image\Image
    {
        return $image->greyscale();
    }

    /**
     * @param \Intervention\Image\Image $image
     * @return \Intervention\Image\Image
     */
    public function sepia(\Intervention\Image\Image $image): \Intervention\Image\Image
    {
        return $image
            ->brightness(-12)
            ->greyscale()
            ->colorize(11, 8, 2);
    }

    /**
     * @param \Intervention\Image\Image $image
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @return \Intervention\Image\Image
     */
    public function cropWHXY(
        \Intervention\Image\Image $image,
        string $width,
        string $height,
        string $x,
        string $y): \Intervention\Image\Image
    {
        return $image->crop($width, $height, $x, $y);
    }

    /**
     * @param \Intervention\Image\Image $image
     * @param string $format
     * @param int $quality
     * @return \Intervention\Image\Image
     */
    public function encode(\Intervention\Image\Image $image, string $format, int $quality)
    {
        return $image->encode($format, $quality);
    }
}
