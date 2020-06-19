<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link
                            title="К списку ролей"
                            route="manager.roles"
                        />
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button @click="onCreate('auto-close')" />
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header />
                    <md-card-content>

                        <v-input title="Имя"
                                 icon="title"
                                 name="display_name"
                                 :vField="$v.displayName"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true }" />

                        <v-input title="Алиас"
                                 icon="code"
                                 name="name"
                                 :vField="$v.name"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, alias: true, minLength: true }" />

                        <v-textarea name="description"
                                    :vField="$v.description"
                                    :module="storeModule" />

                        <div class="space-30"></div>
                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header icon="vpn_key" title="Разрешения" />
                    <md-card-content>
                        <md-switch v-for="permission in permissionList"
                                   :key="permission.id"
                                   :value="permission.id"
                                   v-model="permissions"
                                   @change="onPermissionsChange"
                        >
                            {{ permission.display_name }}
                        </md-switch>
                        <input-notification-require v-if="$v.permissions.$error" name="Привелегии" />
                    </md-card-content>
                    <div class="space-30"></div>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import { required, minLength } from 'vuelidate/lib/validators';
    import { InputNotificationRequire } from '@/custom_components/InputNotifications';
    import { pageTitle } from '@/mixins/base';
    import { createMethod } from '@/mixins/crudMethods';

    export default {
        name: 'RoleCreate',
        components: { InputNotificationRequire },
        mixins: [ pageTitle, createMethod ],
        data() {
            return {
                responseData: false,
                redirectRoute: { name: 'manager.roles' },
                storeModule: 'roles',
                permissions: []
            }
        },
        validations: {
            name: {
                required,
                touch: false,
                minLength: minLength(2),
                isUnique (value) {
                    return (value.trim() === '') && !this.$v.name.$dirty || !this.isUniqueName
                },
                testAlias (value) {
                    return value.trim() === '' || (this.$config.ALIAS_REGEXP).test(value);
                }
            },
            displayName: {
                required,
                touch: false,
                minLength: minLength(2),
                isUnique (value) {
                    return (value.trim() === '') && !this.$v.displayName.$dirty || !this.isUniqueDisplayName
                }
            },
            description: {
                touch: false
            },
            permissions: {
                required,
                touch: false
            }
        },
        computed: {
            ...mapState({
                name: state => state.roles.fields.name,
                displayName: state => state.roles.fields.display_name,
                description: state => state.roles.fields.description,
                permissionList: state => state.permissions.items
            }),
            isUniqueName() {
                return !!this.$store.getters['roles/isUniqueName'](this.name);
            },
            isUniqueDisplayName() {
                return !!this.$store.getters['roles/isUniqueDisplayName'](this.displayName);
            }
        },
        created() {
            this.clearFieldsAction();
            Promise.all([
                this.getItemsAction(),
                this.getPermissionsAction()
            ])
                .then(() => {
                    this.setPageTitle('Новая Роль');
                    this.responseData = true;
                })
                .catch(() => this.$router.push(this.redirectRoute));
        },
        methods: {
            ...mapActions({
                getItemsAction: 'roles/getItems',
                clearFieldsAction: 'roles/clearItemFields',
                getPermissionsAction: 'permissions/getItems'
            }),
            onPermissionsChange () {
              this.$v.permissions.$touch();
            },
            onCreate() {
                return this.create({
                    sendData: {
                        name: this.name,
                        display_name: this.displayName,
                        description: this.description,
                        permissions: this.permissions
                    },
                    title: this.displayName,
                    successText: 'Роль создана!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                })
            }
        }
    }
</script>
