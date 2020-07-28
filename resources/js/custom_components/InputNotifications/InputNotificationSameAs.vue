<template>
    <slide-y-down-transition>
        <div class="text-danger">{{ $langLib({ field_name: name, same_name: sameName }).SAME_AS }}</div>
    </slide-y-down-transition>
</template>

<script>
    export default {
        name: "InputNotificationSameAs",
        props: {
            name: {
                type: String,
                default: 'Поле'
            },
            sameName: {
                type: String,
                default: 'Поле 2'
            }
        }
    }
</script>
