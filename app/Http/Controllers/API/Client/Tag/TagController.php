<?php

namespace App\Http\Controllers\API\Client\Tag;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Http\Controllers\Controller;
use App\Services\Tag\ClientTagService;
use Illuminate\Http\Request;

class TagController extends BaseResourceController
{
    /**
     * TagController constructor.
     * @param ClientTagService $service
     */
    public function __construct(ClientTagService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param string $search
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSearchedItems(string $search)
    {
        return response()->json($this->service->getSearchedItems($search));
    }
}
