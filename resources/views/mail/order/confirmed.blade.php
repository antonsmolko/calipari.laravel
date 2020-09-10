@component('mail::order-layout')

@component('mail::top', ['icon' => 'bag'])
# ЗАКАЗ ПОДТВЕРЖДЕН

Здравствуйте, {{ $order['customer']['name'] }}!

Ваш заказ № __{{ $order['number'] }}__ от {{ $order['date'] }} подтвержден.
@endcomponent

@component('components.mail.space')
@endcomponent

<h1 class="text-center">{{ $order['goodsQty'] }}</h1>

@component('components.mail.divider')
@endcomponent

@component('components.mail.order.order-items', ['items' => $order['items']])
@endcomponent

@component('mail::order-details-item', ['title' => 'СПОСОБ ДОСТАВКИ'])
{{ $order['delivery']['title'] }}
@endcomponent

@component('mail::order-details-item', ['title' => 'АДРЕС ДОСТАВКИ'])
{{ $order['delivery']['locality'] }},<br>
{{ $order['delivery']['address'] }}
@endcomponent
@component('mail::order-details-item', ['title' => 'ПОЛУЧАТЕЛЬ'])
{{ $order['customer']['name'] }},<br>
{{ $order['customer']['phone'] }}
@endcomponent

@component('components.mail.divider')
@endcomponent

@component('mail::order-details-item', ['title' => 'ЦЕНА ДОСТАВКИ'])
__{{ number_format($order['delivery']['price'], 0, '.', ' ') }} ₽__
@endcomponent

@component('mail::order-details-item', ['title' => 'ЦЕНА ЗАКАЗА'])
__{{ number_format($order['price'], 0, '.', ' ') }} ₽__
@endcomponent

@component('mail::order-total-price', ['price' => $order['price'] + $order['delivery']['price']])
@endcomponent

@component('components.mail.divider')
@endcomponent

@component('mail::button', ['url' => env('CLIENT_BASE_URL') . $link, 'color' => 'red'])
Перейти к оплате
@endcomponent

@component('mail::subcopy')
Если Вы не оформляли заказ на сайте [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_BASE_URL') }}), ни каких дейтсвий не требуется. Просим уведомить нас об этом по адресу электронной почты [{{ $companyEmail }}](mailto:{{ $companyEmail }}).
@endcomponent
@endcomponent
