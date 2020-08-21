@component('mail::message')

{{-- Body --}}
{{ $slot }}

{{-- Subfooter --}}
@slot('subfooter')
<x-mail.for-any-questions />
@endslot
@endcomponent
