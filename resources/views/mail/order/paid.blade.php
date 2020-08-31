@component('mail::order-layout')

@component('mail::top', ['icon' => 'bag'])
# ЗАКАЗ ОПЛАЧЕН

Здравствуйте, {{ $order['customer']['name'] }}!

Ваш заказ № __{{ $order['number'] }}__ от {{ $order['date'] }} успешно оплачен.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('mail::order-details-item', ['title' => 'СУММА ОПЛАТЫ'])
    <strong class="text-red">{{ number_format($order['price'], 0, '.', ' ') }} ₽</strong>
@endcomponent
@endcomponent
