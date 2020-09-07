<?php

namespace App\Http\Controllers\ImageResize;

use App\Services\ImageResize\ImageResizeService;
use App\Http\Controllers\Controller;
use Image;
use File;

class ImageResizeController extends Controller
{
    /**
     * @var ImageResizeService
     */
    private $service;

    /**
     * ImageResizeController constructor.
     * @param ImageResizeService $service
     */
    public function __construct(ImageResizeService $service)
    {
        $this->service = $service;
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $path
     * @return mixed
     */
    public function resize(string $width, string $height, string $path)
    {
        return $this->service->resize($width, $height, $path);
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $path
     * @return mixed
     */
    public function crop(string $width, string $height, string $path)
    {
        return $this->service->crop($width, $height, $path);
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @param string $path
     * @return mixed
     */
    public function getOrderImage(
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize,
        string $path)
    {
        return $this->service->getOrderImage($path, $width, $height, $x, $y, $flipH, $flipV, $colorize);
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @param string $path
     * @return mixed
     */
    public function getMailOrderImageThumb(
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize,
        string $path)
    {
        return $this->service->getMailOrderImageThumb($path, $width, $height, $x, $y, $flipH, $flipV, $colorize);
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @param string $path
     * @return mixed
     */
    public function getPDFLabelOrderImage(
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize,
        string $path)
    {
        return $this->service->getPDFLabelOrderImage($path, $width, $height, $x, $y, $flipH, $flipV, $colorize);
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @param string $path
     * @return mixed
     */
    public function getPDFLayoutOrderImage(
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize,
        string $path)
    {
        return $this->service->getPDFLayoutOrderImage($path, $width, $height, $x, $y, $flipH, $flipV, $colorize);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function getPDFProjectImage(string $path)
    {
        return $this->service->getPDFProjectImage($path);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function getPDFSaleLabelImage(string $path)
    {
        return $this->service->getPDFSaleLabelImage($path);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function getPDFSaleLayoutImage(string $path)
    {
        return $this->service->getPDFSaleLayoutImage($path);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function getMailSaleImageThumb(string $path)
    {
        return $this->service->getMailSaleImageThumb($path);
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @param string $path
     * @return mixed
     */
    public function getOrderImageThumb(
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize,
        string $path)
    {
        return $this->service->getOrderImageThumb($path, $width, $height, $x, $y, $flipH,$flipV, $colorize);
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $path
     * @return mixed
     */
    public function fit(string $width, string $height, string $path)
    {
        return $this->service->fit($width, $height, $path);
    }

    /**
     * @param string $width
     * @param string $path
     * @return mixed
     */
    public function widen(string $width, string $path)
    {
        return $this->service->widen($width, $path);
    }

    /**
     * @param string $height
     * @param string $path
     * @return mixed
     */
    public function heighten(string $height, string $path)
    {
        return $this->service->heighten($height, $path);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function show(string $path)
    {
        return $this->service->show($path);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function showGrayscale(string $path)
    {
        return $this->service->showGrayscale($path);
    }
}
