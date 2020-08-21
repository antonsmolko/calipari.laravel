<?php

namespace App\View\Components\Mail;

use App\Services\Setting\CmsSettingService;
use Illuminate\View\Component;

class ForAnyQuestions extends Component
{
    public string $companyPhone;
    public string $companyEmail;

    /**
     * Create a new component instance.
     *
     * @param CmsSettingService $settingService
     * @return void
     */
    public function __construct(CmsSettingService $settingService)
    {
        $this->companyPhone = $settingService->getItemValueByKey('company_phone');
        $this->companyEmail = $settingService->getItemValueByKey('company_email');
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.mail.for-any-questions');
    }
}
