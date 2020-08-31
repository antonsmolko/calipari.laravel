@component('mail::order-layout')

@component('mail::top', ['icon' => 'bag'])
# ПОЛУЧЕН ОТЗЫВ

Здравствуйте, {{ $order['customer']['name'] }}!

Мы получили от Вас отзыв на заказ № __{{ $order['number'] }}__ от {{ $order['date'] }}.
@endcomponent

@component('components.mail.space')
@endcomponent

@component('mail::block-centered')
# СПАСИБО ЗА ВАШ ОТЗЫВ!

Ваше мнение очень важно для нас. Спасибо, что уделили нам время!

До новых встреч в нашем интернет-магазине [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_BASE_URL') }})!
@endcomponent

@endcomponent
