<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link title="К списку пользователей" :to="{ name: 'cms.users' }" />
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button @click="onCreate" />
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item md-small-size-100">
                <md-card>
                    <card-icon-header />
                    <md-card-content>

                        <v-input title="Имя"
                                 icon="person"
                                 name="name"
                                 :vField="$v.name"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }" />

                        <v-input title="Email"
                                 icon="mail"
                                 name="email"
                                 :vField="$v.email"
                                 :vDelay="true"
                                 :module="storeModule"
                                 :vRules="{ required: true, email: true, minLength: true }" />

                        <v-input title="Пароль"
                                 icon="lock"
                                 name="password"
                                 type="password"
                                 :vField="$v.password"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }" />

                        <v-input title="Подтверждение пароля"
                                 icon="lock"
                                 name="password_confirmation"
                                 type="password"
                                 :vField="$v.passwordConfirmation"
                                 :module="storeModule"
                                 :vRules="{ required: true, sameAsPassword: true }" />

                        <v-switch title="Активен"
                                  :value="publish"
                                  :module="storeModule" />

                    </md-card-content>
                </md-card>
            </div>
            <template v-if="roleList.length && canSetRole">
                <div class="md-layout-item md-small-size-100">
                    <md-card>
                        <card-icon-header icon="business_center" title="Роли" />
                        <md-card-content>

                            <v-select v-if="roleList.length" title="Роль" placeholder="Выберите роль"
                                      name="role"
                                      :value="role"
                                      :vField="$v.role"
                                      :options="roleList"
                                      nameField="display_name"
                                      indexName="id"
                                      :module="storeModule" />
                        </md-card-content>
                    </md-card>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'

import VSelect from '@/custom_components/VForm/VSelect'
import { pageTitle } from '@/mixins/base'
import { createMethod } from '@/mixins/crudMethods'

export default {
    name: 'UserCreate',
    components: { VSelect },
    mixins: [ pageTitle,  createMethod ],
    data: () => ({
        responseData: false,
        redirectRoute: { name: 'cms.users' },
        storeModule: 'users'
    }),
    validations: {
        name: {
            required,
            touch: false,
            minLength: minLength(2)
        },
        email: {
            required,
            email,
            touch: false
        },
        password: {
            required,
            touch: false,
            minLength: minLength(6)
        },
        passwordConfirmation: {
            required,
            sameAsPassword: sameAs('password'),
            touch: false
        },
        role: {
            required,
            touch: false
        }
    },
    computed: {
        ...mapState({
            name: state => state.users.fields.name,
            email: state => state.users.fields.email,
            publish: state => state.users.fields.publish,
            role: state => state.users.fields.role,
            password: state => state.users.fields.password,
            passwordConfirmation: state => state.users.fields.password_confirmation,
            roleList: state => state.roles.items
        }),
        defaultRole () {
            return this.$store.getters['roles/defaultRole'];
        },
        canSetRole () {
            const roleKeys = this.$config.rolesMap;

            return this.$auth.check([roleKeys.s, roleKeys.o])
        }
    },
    created () {
        const getRolesAction = this.$auth.check(this.$config.rolesMap.s)
            ? this.getRolesFromSuperAdminAction
            : this.getRolesFromOwnerAction

        this.clearFieldsAction();

        getRolesAction()
            .then(() => {
                this.setFieldAction({ field: 'role', value: this.defaultRole})
                this.setPageTitle('Новый Пользователь');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            clearFieldsAction: 'users/clearItemFields',
            setFieldAction: 'users/setItemField',
            getRolesFromOwnerAction: 'roles/getItemsFromOwner',
            getRolesFromSuperAdminAction: 'roles/getItemsFromSuperAdmin'
        }),
        onCreate () {
            return this.create({
                sendData: {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirmation,
                    publish: this.publish,
                    role: this.role
                },
                title: this.name,
                successText: 'Пользователь создан!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>
