@component('mail::order-layout')
@if(isset($data['name']))
# Здравствуйте, {{ $data['name'] }}!
@else
# Здравстуйте!
@endif

По Вашему обращению подготовлен проект.<br>

Перейдите по ссылке для добавления проекта в корзину и последующего оформления заказа.

@component('mail::button', ['url' => env('CLIENT_BASE_URL') . '/cart?key=' . $data['key']])
Перейти ›
@endcomponent

Для ознакомления с деталями проекта, Вы можете скачать прикрепленный к письму PDF документ.

С уважением,<br>
{{ config('app.name') }}.

@endcomponent
