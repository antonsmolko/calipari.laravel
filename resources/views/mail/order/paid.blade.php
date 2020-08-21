@component('mail::order-layout', ['config' => $config])

@component('mail::top', ['icon' => 'bag'])
# ЗАКАЗ ОПЛАЧЕН

Здравствуйте, {{ $order['customer']['name'] }}!

Ваш заказ № __{{ $order['number'] }}__ от {{ $order['date'] }} успешно оплачен.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('mail::block-centered')
# СУММА ОПЛАТЫ <span class="text-red">{{ number_format($order['amount'], 0, '.', ' ') }} ₽</span>
В ближайшее время Ваш заказ поступит в производство.
@endcomponent
@endcomponent
