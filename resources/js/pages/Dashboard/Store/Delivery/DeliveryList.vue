<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link title="В панель магазина" :to="redirectRoute"/>
                    <slide-y-down-transition group>
                        <router-button-link
                            v-if="activeTab === 'Пункты самовывоза'"
                            key="pickups"
                            title="Создать пункт самовывоза"
                            icon="add"
                            color="md-success"
                            :to="{ name: 'cms.store.pickups.create' }"/>
                        <router-button-link
                            v-else
                            key="deliveries"
                            title="Создать доставку"
                            icon="add"
                            color="md-success"
                            :to="{ name: 'cms.store.deliveries.create' }"/>
                    </slide-y-down-transition>
                </md-card-content>
            </md-card>

            <tabs
                v-if="deliveries.length"
                :tab-name="['Способы доставки', 'Пункты самовывоза']"
                :activeTab="activeTab"
                @tab="changeTab"
                color-button="success">
                <template slot="tab-pane-1">
                    <md-table v-model="deliveries" class="paginated-table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Заголовок">
                                <span class="md-subheading">{{ item.title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Стоимость">
                                {{ item.price || 'Бесплатно' }}
                            </md-table-cell>

                            <md-table-cell md-label="Описание">
                                {{ item.description }}
                            </md-table-cell>

                            <md-table-cell md-label="Точки">
                                {{ item.pickup ? item.pickups_count : '—' }}
                            </md-table-cell>

                            <md-table-cell md-label="Порядок">
                                {{ item.order }}
                            </md-table-cell>

                            <md-table-cell md-label="Опубликован">
                                <md-switch
                                    :disabled="pickupsRequired(item)"
                                    :value="!item.publish"
                                    @change="onPublishDeliveryChange(item)">
                                    <template>
                                        <span v-if="pickupsRequired(item)">Нет рабочих пунктов!</span>
                                    </template>
                                </md-switch>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">

                                <table-actions :item="item"
                                               subPath="store.deliveries"
                                               @delete="onDeleteDelivery"/>

                            </md-table-cell>

                        </md-table-row>
                    </md-table>
                </template>
                <template slot="tab-pane-2">
                    <md-table v-model="pickups" class="paginated-table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Заголовок">
                                <span class="md-subheading">{{ item.title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Регион">
                                {{ item.locality }}
                            </md-table-cell>

                            <md-table-cell md-label="Адрес">
                                {{ item.address }}
                            </md-table-cell>

                            <md-table-cell md-label="Опубликован">
                                <md-switch :value="!item.publish" @change="onPublishPickupChange(item)"/>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">

                                <table-actions :item="item"
                                               subPath="store.pickups"
                                               @delete="onDeletePickup"/>

                            </md-table-cell>

                        </md-table-row>
                    </md-table>
                </template>
            </tabs>
            <md-card v-else>
                <md-card-content>
                    <div class="alert alert-info">
                        <span><h3>У Вас еще нет способов доставки!</h3></span>
                    </div>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

import Tabs from '@/custom_components/Tabs.vue'
import { pageTitle } from '@/mixins/base'
import { deleteMethod } from '@/mixins/crudMethods'
import TableActions from "@/custom_components/Tables/TableActions";

export default {
    name: 'DeliveryList',
    mixins: [pageTitle, deleteMethod],
    components: { Tabs, TableActions },
    data: () => ({
        activeTab: '',
        responseData: false,
        redirectRoute: { name: 'cms.store' },
        deliveriesStoreModule: 'deliveries',
        pickupsStoreModule: 'pickups',
    }),
    computed: {
        ...mapState({
            deliveries: state => state.deliveries.items,
            pickups: state => state.pickups.items
        }),
    },
    methods: {
        ...mapActions({
            getDeliveriesAction: 'deliveries/getItems',
            getPickupsAction: 'pickups/getItems',
            publishDeliveryAction: 'deliveries/publish',
            publishPickupAction: 'pickups/publish',
        }),
        onDeleteDelivery (item) {
            return this.delete({
                payload: item.id,
                title: item.title,
                alertText: `способ доставки «${item.title}»`,
                successText: 'Способ доставки удален!',
                storeModule: this.deliveriesStoreModule,
            })
        },
        onDeletePickup (item) {
            return this.delete({
                payload: item.id,
                title: item.title,
                alertText: `пункт самовывоза «${item.title}»`,
                successText: 'Пункт самовывоза удален!',
                storeModule: this.pickupsStoreModule
            })
        },
        onPublishDeliveryChange (item) {
            this.publishDeliveryAction(item.id);
        },
        onPublishPickupChange (item) {
            this.publishPickupAction(item.id);
        },
        changeTab (tab) {
            this.activeTab = tab;
        },
        pickupsRequired (item) {
            return Boolean(item.pickup && !item.pickups_count);
        }
    },
    created() {
        if (this.$route.params.activeTab) {
            this.activeTab = this.$route.params.activeTab;
        }

        Promise.all([
            this.getDeliveriesAction(),
            this.getPickupsAction()
        ])
            .then(() => {
                this.setPageTitle('Способы доставки');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    }
}
</script>
