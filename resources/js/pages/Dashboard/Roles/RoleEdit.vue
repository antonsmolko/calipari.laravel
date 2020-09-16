<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link title="К списку ролей" :to="{ name: 'cms.roles' }" />
                        <div>
                            <slide-y-down-transition v-show="$v.$anyDirty && !$v.$invalid">
                                <control-button title="Сохранить" @click="onUpdate" />
                            </slide-y-down-transition>
                            <control-button title="Удалить" @click="onDelete" icon="delete" class="md-danger" />
                        </div>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
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
                                 :value="displayName"
                                 :vField="$v.displayName"
                                 :differ="true"
                                 :vDelay="true"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true }" />

                        <v-input title="Алиас"
                                 icon="code"
                                 name="name"
                                 :value="name"
                                 :vField="$v.name"
                                 :differ="true"
                                 :vDelay="true"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, key: true, minLength: true }" />

                        <v-textarea name="description"
                                    :vField="$v.description"
                                    :differ="true"
                                    :value="description"
                                    :module="storeModule" />

                        <div class="space-30"></div>
                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card v-if="permissionList">
                    <card-icon-header icon="vpn_key" title="Разрешения" />
                    <md-card-content>
                        <md-switch
                            v-for="permission in permissionList"
                            :key="permission.id"
                            :value="permission.id"
                            v-model="selectedPermissions"
                            @change="onCheck" >
                            {{ permission.display_name }}
                        </md-switch>
                        <input-notification-require v-if="$v.selectedPermissions.$error" name="Привелегии" />
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

import { InputNotificationRequire } from '@/custom_components/InputNotifications';
import { pageTitle } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'RoleEdit',
    components: { InputNotificationRequire },
    mixins: [ pageTitle, updateMethod, deleteMethod ],
    props: {
        id: {
            type: [ Number, String ],
            required: true
        }
    },
    data: () => ({
        selectedPermissions: [],
        responseData: false,
        redirectRoute: { name: 'cms.roles' },
        storeModule: 'roles'
    }),
    validations: {
        name: {
            required,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.name.$dirty || this.isUniqueNameEdit
            },
            testName (value) {
                return value.trim() === '' || (this.$config.SNAKE_CASE_REGEXP).test(value);
            },
            touch: false
        },
        displayName: {
            required,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.displayName.$dirty || this.isUniqueDisplayNameEdit
            },
            touch: false
        },
        description: {
            touch: false
        },
        selectedPermissions: {
            required,
            touch: false
        }
    },
    computed: {
        ...mapState({
            name: state => state.roles.fields.name,
            displayName: state => state.roles.fields.display_name,
            description: state => state.roles.fields.description,
            permissions: state => state.roles.fields.permissions,
            permissionList: state => state.permissions.items
        }),
        isUniqueNameEdit () {
            return this.$store.getters['roles/isUniqueNameEdit'](this.name, this.id);
        },
        isUniqueDisplayNameEdit () {
            return this.$store.getters['roles/isUniqueDisplayNameEdit'](this.displayName, this.id);
        }
    },
    async created () {
        await Promise.all([
            this.getItemsAction(),
            this.getPermissionsAction(),
            this.getItemAction(this.id)
        ])
            .then(() => {
                this.setPageTitle(this.displayName);
                this.selectedPermissions = this.permissions.slice(0);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            getItemsAction: 'roles/getItems',
            getItemAction: 'roles/getItem',
            clearFieldsAction: 'roles/clearItemFields',
            getPermissionsAction: 'permissions/getItems',
        }),
        onCheck () {
            this.isDiffer(this.permissions, this.selectedPermissions)
                ? this.$v.selectedPermissions.$touch()
                : this.$v.selectedPermissions.$reset()
        },
        isDiffer (a, b) {
            return Boolean(a.filter(i => !b.includes(i)).concat(b.filter(i => !a.includes(i))).length);
        },
        onUpdate () {
            return this.update({
                sendData: {
                    formData: {
                        name: this.name,
                        display_name: this.displayName,
                        description: this.description,
                        permissions: this.selectedPermissions
                    },
                    id: this.id
                },
                title: this.displayName,
                successText: 'Роль обновлена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            return this.delete({
                payload: this.id,
                title: this.displayName,
                alertText: `роль «${this.displayName}»`,
                successText: 'Роль удалена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>
