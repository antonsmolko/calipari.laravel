@component('mail::order-layout')

@component('mail::top', ['icon' => 'bag'])
# ЗАКАЗ ДОСТАВЛЕН

Здравствуйте, {{ $order['customer']['name'] }}!

Ваш заказ № __{{ $order['number'] }}__ от {{ $order['date'] }} доставлен.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('components.mail.divider')
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
@endcomponent
