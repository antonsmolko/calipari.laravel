<template>
    <div class="md-layout text-center">
        <div class="md-layout-item md-size-50 md-small-size-100">
            <lock-card class="md-accent">
                <md-card-header slot="title">
                    <h2 class="m-0">Доступ запрещен!</h2>
                </md-card-header>
                <div slot="footer">
                    <md-button
                        v-if="isAdmin"
                        @click="$router.push({ name: 'cms.dashboard' })"
                        class="md-danger md-round">В панель управления</md-button>
                    <md-button
                        v-if="isAdmin"
                        @click="$auth.logout()"
                        class="md-danger md-round">Выйти</md-button>
                </div>
            </lock-card>
        </div>
    </div>
</template>
<script>
import { LockCard } from '@/components'
export default {
    components: {
        LockCard
    },
    computed: {
        isAdmin () {
            const check = this.$auth.check;

            return check('super_admin') || check('admin') || check('owner') || check('content_manager')
        }
    }
}
</script>
