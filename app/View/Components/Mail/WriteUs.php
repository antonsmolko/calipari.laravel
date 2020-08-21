<?php

namespace App\View\Components\Mail;

use App\Services\Setting\CmsSettingService;
use Illuminate\View\Component;

class WriteUs extends Component
{
    public array $config;

    /**
     * Create a new component instance.
     *
     * @param CmsSettingService $settingService
     * @return void
     */
    public function __construct(CmsSettingService $settingService)
    {
        $this->config = $settingService
            ->getEntriesWhereKeyIn(config('settings.mail_config_keys'));
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.mail.write-us');
    }
}
