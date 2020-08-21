@component('mail::message')
@component('mail::top', ['icon' => 'user'])
# СБРОС ПАРОЛЯ

Здравствуйте, {{ $name }}!

Вы получили это письмо, потому что мы получили запрос на сброс пароля для вашей учетной записи.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('mail::block-centered')
Срок действия ссылки для сброса пароля истекает через 60 минут.

После нажатия на кнопку «Сбросить пароль» Вы будете переправлены на сайт [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_DOMAIN') }}) для ввода нового пароля.
@endcomponent

@component('mail::button', ['url' => $link])
Сбросить пароль
@endcomponent

@component('mail::subcopy')
Если вы не запрашивали сброс пароля на сайте [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_BASE_URL') }}), никаких дальнейших действий не требуется.
@endcomponent

@component('components.mail.divider')
@endcomponent

@component('components.mail.regards')
@endcomponent

@endcomponent
