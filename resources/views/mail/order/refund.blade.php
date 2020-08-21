@component('mail::order-layout')

@component('mail::top', ['icon' => 'bag'])
# ЗАКАЗ ВОЗМЕЩЕН

Здравствуйте, {{ $order['customer']['name'] }}!

Ваш заказ № __{{ $order['number'] }}__ от {{ $order['date'] }} возмещен.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('components.mail.divider')
@endcomponent

@component('mail::order-details-item', ['title' => 'ПРИЧИНА ВОЗМЕЩЕНИЯ'])
    {{ $order['refund_reason'] }}
@endcomponent

@component('mail::order-details-item', ['title' => 'СУММА ВОЗВРАТА'])
    <strong class="text-red">{{ number_format($order['refund_amount'], 0, '.', ' ') }} ₽</strong>
@endcomponent

@component('mail::subcopy')
Возврат будет произведен в течении восьми рабочих дней (зависит от банка платежного средства) на тоже платежное средство, по которому производилась оплата.
@endcomponent

@endcomponent
