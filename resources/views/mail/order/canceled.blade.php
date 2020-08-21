@component('mail::order-layout', ['config' => $config])

@component('mail::top', ['icon' => 'bag'])
# ЗАКАЗ ОТМЕНЕН

Здравствуйте, {{ $order['customer']['name'] }}!

Ваш заказ № __{{ $order['number'] }}__ от {{ $order['date'] }} отменен.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('mail::block-centered')
До новых встреч в нашем интернет-магазине!

[{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_DOMAIN') }})
@endcomponent
@endcomponent
