<?php declare(strict_types=1);

namespace App\Services\Setting\Handlers;


use App\Models\Setting;
use App\Services\Setting\Repositories\CmsSettingRepository;

class UpdateHandler
{
    private CmsSettingRepository $repository;

    /**
     * GetTagHandler constructor.
     * @param CmsSettingRepository $repository
     */
    public function __construct(CmsSettingRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Setting $item
     * @param array $updateData
     */
    public function handle(Setting $item, array $updateData)
    {

    }
}
