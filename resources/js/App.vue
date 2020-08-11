<template>
<!--    Обновляет компонент, но ломается анимация роутов-->
<!--        <router-view :key="$route.fullPath" />-->
    <router-view />
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState([
            'notifications'
        ]),
        ...mapGetters([
            'serverErrors'
        ])
    },
    methods: {
        ...mapActions({
            deleteNotificationAction: 'deleteNotification'
        }),
        errorNotifyVue(message) {
            this.$notify({
                message,
                icon: 'notification_important',
                horizontalAlign: 'center',
                verticalAlign: 'top',
                type: 'danger',
                timeout: 5000
            })
        },
        notifyVue({ message, icon = 'notification_important', type = 'danger', timeout = 5000 }) {
            this.$notify({
                message,
                icon,
                horizontalAlign: 'center',
                verticalAlign: 'top',
                type,
                timeout
            })
        }
    },
    watch: {
        serverErrors () {
            this.serverErrors.forEach(message => this.errorNotifyVue(message))
        },
        notifications () {
            this.notifications.forEach(notification => {
                this.notifyVue({
                    message: notification.message,
                    icon: notification.icon,
                    type: notification.type,
                    timeout: notification.timeout
                });
                this.deleteNotificationAction(notification.id);
            });
        }
    }
}
</script>
