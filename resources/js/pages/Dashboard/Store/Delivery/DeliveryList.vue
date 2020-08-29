<template>
    <div class="md-layout">
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
                :tab-name="['Способы доставки', 'Пункты самовывоза']"
                :activeTab="activeTab"
                @tab="changeTab"
                color-button="success">
                <template slot="tab-pane-1">
                    <delivery-list-table />
                </template>
                <template slot="tab-pane-2">
                    <pickups-list-table />
                </template>
            </tabs>
        </div>
    </div>
</template>

<script>
import Tabs from '@/custom_components/Tabs.vue'
import { pageTitle } from '@/mixins/base'
import DeliveryListTable from "@/custom_components/Store/Delivery/DeliveryListTable";
import PickupsListTable from "@/custom_components/Store/Delivery/PickupsListTable";

export default {
    name: 'DeliveryList',
    mixins: [pageTitle],
    components: {
        Tabs,
        DeliveryListTable,
        PickupsListTable
    },
    data: () => ({
        activeTab: '',
        redirectRoute: { name: 'cms.store' },
    }),
    methods: {
        changeTab (tab) {
            this.activeTab = tab;
        }
    },
    created() {
        if (this.$route.params.activeTab) {
            this.activeTab = this.$route.params.activeTab;
        }

        this.setPageTitle('Способы доставки');
    }
}
</script>
