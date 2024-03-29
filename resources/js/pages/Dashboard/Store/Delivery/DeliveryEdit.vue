<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" title="К списку доставок"/>
                        <div>
                            <slide-y-down-transition v-show="controlSaveVisibilities && $v.$anyDirty && !$v.$invalid">
                                <control-button title="Сохранить" @click="onUpdate"/>
                            </slide-y-down-transition>
                            <control-button title="Удалить" @click="onDelete" icon="delete" class="md-danger"/>
                        </div>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header/>
                    <md-card-content>

                        <v-input title="Заголовок"
                                 icon="title"
                                 name="title"
                                 :value="title"
                                 :vField="$v.title"
                                 :differ="true"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }"/>

                        <v-input title="Алиас"
                                 icon="code"
                                 name="alias"
                                 :value="alias"
                                 :differ="true"
                                 :vDelay="true"
                                 :vField="$v.alias"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true, alias: true }"/>

                        <v-input title="Порядок"
                                 icon="sort"
                                 name="order"
                                 :value="order"
                                 :vDelay="true"
                                 :vField="$v.order"
                                 :maxlength="2"
                                 :module="storeModule"
                                 :vRules="{ numeric: true }"/>

                        <v-switch :vField="$v.publish"
                                  :disabled="pickupsRequired"
                                  :differ="true"
                                  :value="publish"
                                  :module="storeModule">
                            <template>
                                <span v-if="pickupsRequired">Нет рабочих пунктов!</span>
                            </template>
                        </v-switch>

                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header icon="description" title=""/>
                    <md-card-content>

                        <v-textarea name="description"
                                    :value="description"
                                    :differ="true"
                                    :vField="$v.description"
                                    :module="storeModule"/>

                        <div class="space-30"></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { required, minLength, numeric } from 'vuelidate/lib/validators'

import { pageTitle } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'DeliveryEdit',
    mixins: [pageTitle, updateMethod, deleteMethod],
    props: {
        id: {
            type: [String, Number],
            required: true
        }
    },
    data: () => ({
        redirectRoute: { name: 'cms.store.deliveries' },
        responseData: false,
        storeModule: 'deliveries',
        controlSaveVisibilities: false
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2)
        },
        alias: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return ((value.trim() === '') && !this.$v.alias.$dirty) || this.isUniqueAliasEdit
            },
            testAlias (value) {
                return value.trim() === '' || (this.$config.ALIAS_REGEXP).test(value);
            }
        },
        order: {
            numeric,
            touch: false
        },
        publish: {
            touch: false
        },
        description: {
            touch: false
        }
    },
    computed: {
        ...mapState('deliveries', {
            title: state => state.fields.title,
            alias: state => state.fields.alias,
            order: state => state.fields.order,
            publish: state => state.fields.publish,
            pickupsRequired: state => state.fields.pickups_required,
            description: state => state.fields.description
        }),
        isUniqueAliasEdit () {
            return this.$store.getters['deliveries/isUniqueAliasEdit'](this.alias, this.id);
        }
    },
    methods: {
        ...mapActions('deliveries', {
            getItemsAction: 'getItems',
            getItemAction: 'getItem'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    formData: {
                        title: this.title,
                        alias: this.alias,
                        order: Number(this.order),
                        publish: Number(this.publish),
                        description: this.description
                    },
                    id: this.id
                },
                title: this.title,
                successText: 'Способ доставки обновлен!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            return this.delete({
                payload: this.id,
                title: this.title,
                alertText: `способ доставки «${this.title}»`,
                successText: 'Способ доставки удален!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    },
    created () {
        Promise.all([
            this.getItemAction(this.id),
            this.getItemsAction()
        ])
            .then(() => {
                this.setPageTitle(this.title);
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
