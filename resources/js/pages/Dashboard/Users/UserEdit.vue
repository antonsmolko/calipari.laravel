<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link
                            title="К списку пользователей"
                            route="cms.users" />
                        <div>
                            <slide-y-down-transition
                                v-show="controlSaveVisibilities && $v.$anyDirty && !$v.$invalid">
                                <control-button title="Сохранить" @click="onUpdate" />
                            </slide-y-down-transition>
                            <control-button v-if="authCheck('user-delete') && !isSuperAdmin && !isOwnAccount"
                                            title="Удалить"
                                            @click="onDelete"
                                            icon="delete"
                                            class="md-danger" />
                        </div>
                    </md-card-content>
                </md-card>
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
                                 :value="name"
                                 :vField="$v.name"
                                 :differ="true"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }" />

                        <v-input title="Email"
                                 icon="mail"
                                 name="email"
                                 :value="email"
                                 :vField="$v.email"
                                 :differ="true"
                                 :vDelay="true"
                                 :module="storeModule"
                                 :vRules="{ required: true, email: true, minLength: true }" />

                        <v-switch v-if="!isSuperAdmin"
                                  title="Активен"
                                  :value="publish"
                                  :vField="$v.publish"
                                  :differ="true"
                                  :module="storeModule" />

                        <div class="mt-3" v-else></div>

                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-small-size-100" v-if="canChangeRole || isOwnAccount">
                <template v-if="roles.length && canChangeRole">
                    <md-card>
                        <card-icon-header icon="business_center" title="Роли" />
                        <md-card-content>

                            <v-select v-if="roles.length" title="Роль" placeholder="Выберите роль"
                                      name="role"
                                      :options="roles"
                                      :value="role"
                                      :vField="$v.role"
                                      :differ="true"
                                      nameField="display_name"
                                      :module="storeModule" />

                        </md-card-content>
                    </md-card>
                    <div class="space-1"></div>
                </template>
                <md-card v-if="isOwnAccount">
                    <card-icon-header v-if="!changePassword" icon="lock" title="Смена пароля" />
                    <card-icon-header v-else icon="lock_open" title="Смена пароля" color="md-card-header-danger"/>
                    <md-card-content>
                        <md-button v-if="!changePassword" class="md-success" @click.native="onChangePassword">Сменить пароль</md-button>
                        <div class="form-group" v-else>

                            <v-input title="Действующий пароль"
                                     icon="lock"
                                     name="old_password"
                                     type="password"
                                     :vField="$v.oldPassword"
                                     :module="storeModule"
                                     :vRules="{ required: true }" />

                            <v-input title="Новый пароль"
                                     icon="lock"
                                     name="password"
                                     type="password"
                                     :min="6"
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

                            <div class="mt-2">
                                <md-button class="md-danger" @click.native="cancelOldPasswordChange">Отменить</md-button>
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength, sameAs, requiredIf, email } from 'vuelidate/lib/validators'

import VSelect from '@/custom_components/VForm/VSelect'

import { pageTitle, authCheck } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'UserEdit',
    components: { VSelect },
    mixins: [
        pageTitle,
        authCheck,
        updateMethod,
        deleteMethod
    ],
    props: {
        id: {
            type: [ String, Number ],
            required: true
        }
    },
    data () {
        return {
            responseData: false,
            selectedRole: [],
            changePassword: false,
            redirectRoute: { name: 'cms.users' },
            storeModule: 'users',
            controlSaveVisibilities: false
        }
    },
    validations: {
        name: {
            required,
            touch: false,
            minLength: minLength(2)
        },
        email: {
            email,
            required,
            touch: false
        },
        publish: {
            touch: false
        },
        role: {
            required,
            touch: false
        },
        oldPassword: {
            required: requiredIf(function () {
                return this.isPasswordChange
            }),
            touch: false
        },
        password: {
            required: requiredIf(function () {
                return this.isPasswordChange
            }),
            minLength: minLength(6),
            touch: false
        },
        passwordConfirmation: {
            required: requiredIf(function () {
                return this.isPasswordChange
            }),
            sameAsPassword: sameAs('password'),
            touch: false,
        }
    },
    computed: {
        ...mapState({
            name: state => state.users.fields.name,
            email: state => state.users.fields.email,
            publish: state => state.users.fields.publish,
            role: state => state.users.fields.role,
            oldPassword: state => state.users.fields.old_password,
            password: state => state.users.fields.password,
            passwordConfirmation: state => state.users.fields.password_confirmation,
            roles: state => state.roles.items
        }),
        isPasswordChange () {
            return this.changePassword;
        },
        canChangeRole () {
            const roleKeys = this.$config.rolesMap;

            return !this.isOwnAccount && this.$auth.check([roleKeys.s, roleKeys.o]);
        },
        isOwnAccount () {
            return this.$auth.user().id === Number(this.id);
        },
        isSuperAdmin () {
            return this.isOwnAccount && this.$auth.check(this.$config.rolesMap.s);
        }
    },
    methods: {
        ...mapActions({
            getItemAction: 'users/getItem',
            setFieldsAction: 'users/setItemFields',
            getRolesFromOwnerAction: 'roles/getItemsFromOwner',
            getRolesFromSuperAdminAction: 'roles/getItemsFromSuperAdmin'
        }),
        onChangePassword () {
            this.changePassword = true;
        },
        cancelOldPasswordChange () {
            this.changePassword = false;
            this.setFieldsAction({
                old_password: '',
                password: '',
                password_confirmation: ''
            });
            this.$v.oldPassword.$reset();
            this.$v.password.$reset();
            this.$v.passwordConfirmation.$reset();
        },
        onUpdate () {
            const updateData = {
                name: this.name,
                email: this.email,
                role: this.role,
                publish: this.publish
            }
            const formData = this.changePassword
                ? { ...updateData,
                    password: this.password,
                    old_password: this.oldPassword,
                    password_confirmation: this.passwordConfirmation }
                : updateData;

            return this.update({
                sendData: {
                    formData,
                    id: this.id
                },
                title: this.name,
                successText: 'Пользователь обновлен!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
                .then(() => this.$auth.fetch());
        },
        onDelete () {
            return this.delete({
                payload: this.id,
                title: this.name,
                alertText: `пользователя «${this.name}»`,
                successText: 'Пользователь удален!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    },
    created () {
        const getRolesAction = this.$auth.check(this.$config.rolesMap.s)
            ? this.getRolesFromSuperAdminAction
            : this.getRolesFromOwnerAction

        Promise.all([
            getRolesAction(),
            this.getItemAction(this.id)
        ])
            .then(() => {
                this.setPageTitle(this.name);
                this.selectedRole = this.role;
                this.responseData = true;
            })
            .then(() => {
                this.$v.$reset();
                this.controlSaveVisibilities = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    }
}
</script>
