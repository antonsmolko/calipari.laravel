<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link :to="redirectRoute" title="В Панель управления" />
                </md-card-content>
            </md-card>
        </div>
        <panel-card-link v-if="authCheck('store-settings')"
                         :to="{ name: 'cms.store.settings' }"
                         icon="tune"
                         title="Настройки"
                         color="blue-grey"/>

        <panel-card-link v-if="authCheck('deliveries')"
                         :to="{ name: 'cms.store.deliveries' }"
                         icon="local_shipping"
                         title="Доставка"
                         color="teal"/>

        <panel-card-link v-if="authCheck('order-statuses')"
                         :to="{ name: 'cms.store.orderStatuses' }"
                         icon="update"
                         title="Статусы заказа"
                         color="blue"/>

        <panel-card-link v-if="authCheck('orders')"
                         :to="{ name: 'cms.store.orders' }"
                         icon="shopping_cart"
                         title="Заказы"
                         color="deep-purple"/>
    </div>
</template>

<script>
import PanelCardLink from '@/custom_components/Cards/PanelCardLink'
import { pageTitle, authCheck } from '@/mixins/base'

export default{
    components: {
        PanelCardLink
    },
    mixins: [ pageTitle, authCheck ],
    data: () => ({
        redirectRoute: { name: 'cms.dashboard' }
    }),
    created() {
        this.setPageTitle('Категории');
    }
}
</script>

