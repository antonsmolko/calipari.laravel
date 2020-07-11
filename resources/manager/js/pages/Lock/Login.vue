<template>
    <div class="md-layout text-center">
        <div class="md-layout-item md-size-50 md-small-size-100">
            <lock-card>
                <form @submit.prevent="login" slot="content">
                    <h3 slot="title" class="title">Вход</h3>
                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email" type="email"></md-input>
                    </md-field>

                    <md-field>
                        <label>Пароль</label>
                        <md-input v-model="password" type="password"></md-input>
                    </md-field>
                    <md-button type="submit" class="md-success md-round">Войти</md-button>
                </form>
            </lock-card>
        </div>
    </div>
</template>
<script>
import { LockCard } from '@/components'

export default {
    name: 'Login',
    components: {
        LockCard
    },
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        async login() {
            let redirect = this.$auth.redirect();

            await this.$auth.login({
                data: {
                    email: this.email,
                    password: this.password
                },
                redirect: {
                    name: redirect ? redirect.from.name : 'manager.dashboard'
                },
                // success: () => this.$router.push({name: 'manager.dashboard'}),
                error: (error) => this.$store.commit('UPDATE_ERRORS', error.response),
                rememberMe: true,
                fetchUser: true
            })
                .catch((error) => error)
        },
    }
}
</script>

