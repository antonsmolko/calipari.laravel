@component('mail::message')
@component('mail::top', ['icon' => 'user'])
# ПОДТВЕРЖДЕНИЕ EMAIL

Здравствуйте, {{ $name }}!

Мы получили от Вас запрос на смену адреса электронной почты.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('mail::block-centered')
Для того, чтобы настройки вступили в силу, пожалуйста нажмите кнопку «Подтвердить email»
@endcomponent

@component('mail::button', ['url' => $link])
Подтвердить email
@endcomponent

@component('mail::subcopy')
Если Вы не проходили регистрацию на сайте [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_BASE_URL') }}), никаких дальнейших действий не требуется.
@endcomponent

@component('components.mail.divider')
@endcomponent

@component('components.mail.regards')
@endcomponent

@endcomponent
