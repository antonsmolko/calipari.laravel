@component('mail::message')

@slot('banner')
@component('mail::banner')
    <img src="{{ env('APP_URL') }}{{ $image ?? '/img/mail/welcome.jpg' }}" alt="Добро пожаловать, {{ $name }}!">
@endcomponent
@endslot

@component('mail::block-centered', ['style' => 'mt-0'])
# Добро пожаловать, {{ $name }}!

Мы рады, что Вы с нами )

Нажмите на кнопку «Активировать» для подтверждения адреса электронной почты и активации аккаунта.
@endcomponent

@component('mail::button', ['url' => env('CLIENT_BASE_URL') . $link])
Активировать
@endcomponent

@component('mail::subcopy')
Если вы не регистрировались на сайте [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_BASE_URL') }}), никаких дальнейших действий не требуется.
@endcomponent

<x-mail.write-us />

@endcomponent
