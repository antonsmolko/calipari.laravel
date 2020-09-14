<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" title="Назад"/>
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
                                 :vRules="{ required: true, unique: true, minLength: true }"/>

                        <v-input title="Регион / город"
                                 icon="language"
                                 name="locality"
                                 :value="locality"
                                 :differ="true"
                                 :vField="$v.locality"
                                 :maxlength="100"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }"/>

                        <v-input title="Адрес"
                                 icon="location_on"
                                 name="address"
                                 :value="address"
                                 :differ="true"
                                 :vField="$v.address"
                                 :maxlength="100"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }"/>

                        <v-select title="Доставки"
                                  placeholder="Выберите доставку"
                                  name="delivery"
                                  :value="delivery"
                                  :differ="true"
                                  :vField="$v.delivery"
                                  :options="deliveries"
                                  :module="storeModule"/>

                        <v-switch :vField="$v.publish"
                                  :differ="true"
                                  :value="publish"
                                  :module="storeModule"/>

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

import VSelect from "@/custom_components/VForm/VSelect"
import { pageTitle } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'PickupEdit',
    components: { VSelect },
    mixins: [pageTitle, updateMethod, deleteMethod],
    props: {
        id: {
            type: [String, Number],
            required: true
        }
    },
    data: () => ({
        redirectRoute: {
            name: 'cms.store.deliveries',
            params: { activeTab: 'Пункты самовывоза' }
        },
        responseData: false,
        storeModule: 'pickups',
        controlSaveVisibilities: false
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.title.$dirty || this.isUniqueTitleEdit
            },
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
        isUniqueTitleEdit () {
            return this.$store.getters['pickups/isUniqueTitleEdit'](this.title, this.id);
        }
    },
    methods: {
        ...mapActions({
            getItemsAction: 'pickups/getItems',
            getItemAction: 'pickups/getItem',
            clearFieldsAction: 'pickups/clearItemFields',
            getDeliveriesAction: 'deliveries/getPickupItems'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    data: {
                        title: this.title,
                        locality: this.locality,
                        address: this.address,
                        delivery_id: Number(this.delivery),
                        publish: Number(this.publish),
                        description: this.description
                    },
                    id: this.id
                },
                title: this.title,
                successText: 'Пункт самовывоза обновлен!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            return this.delete({
                payload: this.id,
                title: this.title,
                alertText: `пункт самовывоза «${this.title}»`,
                successText: 'Пункт самовывоза удален!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    },
    created () {
        Promise.all([
            this.getItemAction(this.id),
            this.getItemsAction(),
            this.getDeliveriesAction()
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
