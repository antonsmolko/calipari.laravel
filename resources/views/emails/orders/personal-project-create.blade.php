@component('mail::message')
@if(!empty($data['name']))
# Здравствуйте, {{ $data['name'] }}!
@else
# Здравстуйте!
@endif

По Вашему обращению подготовлен проект.

Перейдите по ссылке для добавления проекта в корзину и последующего оформления заказа.

@component('mail::button', ['url' => env('CLIENT_BASE_URL') . '/cart?key=' . $data['key']])
Перейти ›
@endcomponent

Для ознакомления с деталями проекта, Вы можете скачать прикрепленный к письму PDF документ.

С уважением,<br>
{{ config('app.name') }}.<br>
@lang('[' . env('CLIENT_DOMAIN') . '](' . env('CLIENT_BASE_URL') . ')')

@slot('subcopy')
@lang(
    'Если у вас возникли проблемы с нажатием кнопки «:actionText», скопируйте и вставьте приведенный ниже URL-адрес в веб-браузер: <br>'.
    '[:actionURL](:actionURL)',
    [
        'actionText' => 'Перейти',
        'actionURL' => env('CLIENT_BASE_URL') . '/cart?key=' . $data['key'],
    ]
)
@endslot
@endcomponent
