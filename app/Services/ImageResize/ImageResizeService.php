<?php

namespace App\Services\ImageResize;

use App\Services\ImageResize\Handlers\CreateResponseHandler;
use App\Services\ImageResize\Handlers\GetFileEntriesHandler;
use App\Services\ImageResize\Handlers\GetOrderImageHandler;
use App\Services\ImageResize\Handlers\GetMailOrderImageThumbHandler;
use App\Services\ImageResize\Handlers\GetOrderImageThumbHandler;
use App\Services\ImageResize\Handlers\GetPDFLabelOrderImageHandler;
use App\Services\ImageResize\Handlers\GetPDFLayoutOrderImageHandler;
use App\Services\ImageResize\Handlers\GetPDFProjectImageHandler;
use App\Services\ImageResize\Repositories\ImageResizeRepository;

class ImageResizeService
{
    private ImageResizeRepository $repository;
    private GetFileEntriesHandler $getFileEntriesHandler;
    private CreateResponseHandler $createResponseHandler;
    private GetOrderImageHandler $getOrderImageHandler;
    private GetMailOrderImageThumbHandler $getMailOrderImageThumbHandler;
    private GetOrderImageThumbHandler $getOrderImageThumbHandler;
    private GetPDFLabelOrderImageHandler $getPDFLabelOrderImageHandler;
    private GetPDFLayoutOrderImageHandler $getPDFLayoutOrderImageHandler;
    private GetPDFProjectImageHandler $getPDFProjectImageHandler;

    /**
     * ImageResizeService constructor.
     * @param ImageResizeRepository $repository
     * @param GetFileEntriesHandler $getFileEntriesHandler
     * @param CreateResponseHandler $createResponseHandler
     * @param GetOrderImageHandler $getOrderImageHandler
     * @param GetMailOrderImageThumbHandler $getMailOrderImageThumbHandler
     * @param GetOrderImageThumbHandler $getOrderImageThumbHandler
     * @param GetPDFLabelOrderImageHandler $getPDFLabelOrderImageHandler
     * @param GetPDFLayoutOrderImageHandler $getPDFLayoutOrderImageHandler
     * @param GetPDFProjectImageHandler $getPDFProjectImageHandler
     */
    public function __construct(
        ImageResizeRepository $repository,
        GetFileEntriesHandler $getFileEntriesHandler,
        CreateResponseHandler $createResponseHandler,
        GetOrderImageHandler $getOrderImageHandler,
        GetMailOrderImageThumbHandler $getMailOrderImageThumbHandler,
        GetOrderImageThumbHandler $getOrderImageThumbHandler,
        GetPDFLabelOrderImageHandler $getPDFLabelOrderImageHandler,
        GetPDFLayoutOrderImageHandler $getPDFLayoutOrderImageHandler,
        GetPDFProjectImageHandler $getPDFProjectImageHandler
    )
    {
        $this->repository = $repository;
        $this->getFileEntriesHandler = $getFileEntriesHandler;
        $this->createResponseHandler = $createResponseHandler;
        $this->getOrderImageHandler = $getOrderImageHandler;
        $this->getMailOrderImageThumbHandler = $getMailOrderImageThumbHandler;
        $this->getOrderImageThumbHandler = $getOrderImageThumbHandler;
        $this->getPDFLabelOrderImageHandler = $getPDFLabelOrderImageHandler;
        $this->getPDFLayoutOrderImageHandler = $getPDFLayoutOrderImageHandler;
        $this->getPDFProjectImageHandler = $getPDFProjectImageHandler;
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $path
     * @return mixed
     */
    public function resize(string $width, string $height, string $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->repository->resize($file, $width, $height);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param string $width
     * @param string $height
     * @param string $path
     * @return mixed
     */
    public function crop(string $width, string $height, string $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->repository->crop($file, $width, $height);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param string $path
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @return mixed
     */
    public function getOrderImage(
        string $path,
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize
    )
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->getOrderImageHandler
            ->handle($file, $width, $height, $x, $y, $flipH, $flipV, $colorize);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param string $path
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @return mixed
     */
    public function getMailOrderImageThumb(
        string $path,
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize
    )
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->getMailOrderImageThumbHandler
            ->handle($file, $width, $height, $x, $y, $flipH, $flipV, $colorize);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param string $path
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @return mixed
     */
    public function getPDFLabelOrderImage(
        string $path,
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize
    )
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);

        return $this->getPDFLabelOrderImageHandler
            ->handle($file, $width, $height, $x, $y, $flipH, $flipV, $colorize)
            ->response($ext, 100);
    }

    /**
     * @param string $path
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @return mixed
     */
    public function getPDFLayoutOrderImage(
        string $path,
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize
    )
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);

        return $this->getPDFLayoutOrderImageHandler
            ->handle($file, $width, $height, $x, $y, $flipH, $flipV, $colorize)
            ->response($ext, 100);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function getPDFProjectImage(string $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);

        return $this->getPDFProjectImageHandler
            ->handle($file, 1600, 1200)
            ->response($ext, 100);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function getPDFSaleLabelImage(string $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);

        return $this->getPDFProjectImageHandler
            ->handle($file, 900, 670)
            ->response($ext, 100);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function getPDFSaleLayoutImage(string $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);

        return $this->getPDFProjectImageHandler
            ->handle($file, 1600, 1045)
            ->response($ext, 100);
    }

    /**
     * @param string $path
     * @param string $width
     * @param string $height
     * @param string $x
     * @param string $y
     * @param string $flipH
     * @param string $flipV
     * @param string $colorize
     * @return mixed
     */
    public function getOrderImageThumb(
        string $path,
        string $width,
        string $height,
        string $x,
        string $y,
        string $flipH,
        string $flipV,
        string $colorize
    )
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->getOrderImageThumbHandler
            ->handle($file, $width, $height, $x, $y, $flipH, $flipV, $colorize);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param $width
     * @param $height
     * @param $path
     * @return mixed
     */
    public function fit($width, $height, $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->repository->fit($file, $width, $height);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param $width
     * @param $path
     * @return mixed
     */
    public function widen(int $width, string $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->repository->widen($file, $width);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param $height
     * @param $path
     * @return mixed
     */
    public function heighten($height, $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->repository->heighten($file, $height);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param string $path
     * @return mixed
     */
    public function show(string $path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->repository->show($file);

        return $this->createResponseHandler->handle($img, $ext);
    }

    /**
     * @param $path
     * @return mixed
     */
    public function showGrayscale($path)
    {
        list($file, $ext) = $this->getFileEntriesHandler->handle($path);
        $img = $this->repository->showGrayscale($file);

        return $this->createResponseHandler->handle($img, $ext);
    }
}
