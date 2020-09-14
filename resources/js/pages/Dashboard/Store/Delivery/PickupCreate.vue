<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" title="К списку доставок"/>
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button title="Создать доставку" @click="onCreate"/>
                        </slide-y-down-transition>
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
                                 :vField="$v.title"
                                 :module="storeModule"
                                 :maxlength="100"
                                 :vRules="{ required: true, unique: true, minLength: true }"/>

                        <v-input title="Регион / город"
                                 icon="language"
                                 name="locality"
                                 :vField="$v.locality"
                                 :maxlength="100"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }"/>

                        <v-input title="Адрес"
                                 icon="location_on"
                                 name="address"
                                 :vField="$v.address"
                                 :maxlength="100"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }"/>

                        <v-select title="Доставки"
                                  placeholder="Выберите доставку"
                                  name="delivery_id"
                                  :vField="$v.delivery"
                                  :options="deliveries"
                                  namePostfix="alias"
                                  :module="storeModule"/>

                        <v-switch :value="publish"
                                  :module="storeModule"/>

                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header icon="description" title=""/>
                    <md-card-content>

                        <v-textarea name="description"
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
import { createMethod } from '@/mixins/crudMethods'
import VSelect from "@/custom_components/VForm/VSelect"

export default {
    name: 'PickupCreate',
    components: { VSelect },
    mixins: [pageTitle, createMethod],
    data: () => ({
        redirectRoute: {
            name: 'cms.store.deliveries',
            params: { activeTab: 'Пункты самовывоза' }
        },
        responseData: false,
        storeModule: 'pickups'
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.title.$dirty || this.isUniqueTitle
            }
        },
        delivery: {
            required,
            numeric,
            touch: false
        },
        locality: {
            required,
            minLength: minLength(2),
            touch: false
        },
        address: {
            required,
            minLength: minLength(2),
            touch: false
        },
        description: {
            touch: false
        }
    },
    computed: {
        ...mapState({
            title: state => state.pickups.fields.title,
            locality: state => state.pickups.fields.locality,
            address: state => state.pickups.fields.address,
            delivery: state => state.pickups.fields.delivery_id,
            publish: state => state.pickups.fields.publish,
            description: state => state.pickups.fields.description,
            deliveries: state => state.deliveries.items
        }),
        isUniqueTitle () {
            return this.$store.getters['pickups/isUniqueTitle'](this.title);
        }
    },
    methods: {
        ...mapActions({
            getItemsAction: 'pickups/getItems',
            clearFieldsAction: 'pickups/clearItemFields',
            getDeliveriesAction: 'deliveries/getPickupItems'
        }),
        onCreate () {
            return this.create({
                sendData: {
                    title: this.title,
                    locality: this.locality,
                    address: this.address,
                    delivery_id: Number(this.delivery),
                    publish: Number(this.publish),
                    description: this.description
                },
                title: this.title,
                successText: 'Пункт самовывоза создан!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    },
    created () {
        this.clearFieldsAction();
        Promise.all([
            this.getItemsAction(),
            this.getDeliveriesAction()
        ])
            .then(() => {
                this.setPageTitle('Новый пункт самовывоза');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    }
}
</script>
