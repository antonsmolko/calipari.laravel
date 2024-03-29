@component('mail::order-layout')

@component('mail::top', ['icon' => 'bag'])
# ЗАКАЗ РАЗМЕЩЕН

Здравствуйте, {{ $order['customer']['name'] }}!

Мы получили Ваш заказ № __{{ $order['number'] }}__ от {{ $order['date'] }}
@endcomponent

@component('components.mail.space')
@endcomponent

<h1 class="text-center">{{ $order['goodsQty'] }}</h1>
@component('components.mail.divider')
@endcomponent

@if(!empty($order['items']))
@component('components.mail.order.order-items', ['items' => $order['items']])
@endcomponent
@endif

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

@component('mail::block-centered')
# ЗАКАЗ ПРИНЯТ В ОБРАБОТКУ!
После подтверждения заказа на Ваш адрес электронной почты придет письмо для проведения оплаты.
@endcomponent

@component('mail::subcopy')
Если Вы не оформляли заказ на сайте [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_BASE_URL') }}) просим уведомить нас по адресу электронной почты [{{ $companyEmail }}](mailto:{{ $companyEmail }}).
@endcomponent
@endcomponent
