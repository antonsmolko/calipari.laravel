@component('mail::order-layout')

@component('mail::top', ['icon' => 'bag'])
# ЗАКАЗ ВЫПОЛНЕН

Здравствуйте, {{ $order['customer']['name'] }}!

Ваш заказ № __{{ $order['number'] }}__ от {{ $order['date'] }} выполнен.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('mail::block-centered')
# СПАСИБО ВАМ ЗА ПОКУПКУ!

Мы будем Вам очень признательны, если Вы оставите отзыв о работе нашего сервиса и качестве наших продуктов.

Это поможет сделать наш сервис лучше!
@endcomponent

@component('mail::button', ['url' => env('CLIENT_BASE_URL') . $link, 'color' => 'red'])
Оставить отзыв
@endcomponent

@component('mail::block-centered')
До новых встреч в нашем интернет-магазине [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_BASE_URL') }})!
@endcomponent
@endcomponent
