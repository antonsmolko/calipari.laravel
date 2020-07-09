<template>
    <div class="md-layout text-center">
        <div class="md-layout-item md-size-50 md-small-size-100">
            <lock-card>
                <md-card-header slot="title">
                    <h2 class="m-0">Страница не найдена!</h2>
                </md-card-header>
                <md-button
                    v-if="isAdmin"
                    @click="$router.push({ name: 'manager.dashboard' })"
                    class="md-success md-round"
                    slot="footer">В панель управления</md-button>
            </lock-card>
        </div>
    </div>
</template>
<script>
    import {LockCard} from '@/components'

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
