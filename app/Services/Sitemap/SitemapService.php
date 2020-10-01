<?php


namespace App\Services\Sitemap;


use App\Services\Sitemap\Handlers\GetSitemapItemsHandler;

class SitemapService
{
    private GetSitemapItemsHandler $getSitemapItemsHandler;

    /**
     * SitemapService constructor.
     * @param GetSitemapItemsHandler $getSitemapItemsHandler
     */
    public function __construct(
        GetSitemapItemsHandler $getSitemapItemsHandler
    )
    {
        $this->getSitemapItemsHandler = $getSitemapItemsHandler;
    }

    /**
     * @return mixed
     */
    public function getMapItems()
    {
        return $this->getSitemapItemsHandler->handle();
    }
}
