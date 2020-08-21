@component('mail::message')
{{-- Top --}}
@isset($top)
@slot('top')
@component('mail::top')
{{ $top }}
@endcomponent
@endslot
@endisset

{{-- Body --}}
{{ $slot }}

<x-mail.write-us />

{{-- Subfooter --}}
@if(!empty($config['company_phone']) && !empty($config['company_email']))
@slot('subfooter')
По любым вопросам связанным с работой интернет-магазина [{{ env('CLIENT_DOMAIN') }}]({{ env('CLIENT_BASE_URL') }}) Вы можете позвонить по номеру [{{ $config['company_phone'] }}]({{ phoneFormat($config['company_phone']) }}), написать на адрес электронной почты [{{ $config['company_email'] }}]({{  $config['company_email'] }}) или ответить на это письмо.
@endslot
@endif
@endcomponent
