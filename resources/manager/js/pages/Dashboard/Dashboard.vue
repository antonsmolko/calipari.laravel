<template>
    <div class="md-layout" v-if="responseData">
        <panel-card-link
            route="manager.images"
            icon="image"
            title="Изображения"
            :count="resourcesCount.images"
            color="danger" />

        <panel-card-link
            route="manager.catalog"
            icon="category"
            title="Каталог"
            :count="resourcesCount.categories + resourcesCount.color_collections"
            color="blue-grey" />

        <panel-card-link
            route="manager.textures"
            icon="style"
            title="Фактуры"
            :count="resourcesCount.textures"
            color="primary" />

        <panel-card-link
            route="manager.settings"
            icon="settings"
            title="Конфигурация"
            :count="resourcesCount.settings"
            color="deep-purple" />

        <panel-card-link
            route="manager.store"
            icon="local_mall"
            title="Магазин"
            :count="resourcesCount.orders"
            color="indigo"/>

        <panel-card-link
            route="manager.users"
            icon="people"
            title="Пользователи"
            :count="resourcesCount.users"
            color="blue"/>

        <panel-card-link
            route="manager.roles"
            icon="business_center"
            title="Роли"
            :count="resourcesCount.roles"
            color="light-blue" />

        <panel-card-link
            route="manager.permissions"
            icon="vpn_key"
            title="Привилегии"
            :count="resourcesCount.permissions"
            color="cyan" />

        <panel-card-link
            route="manager.pages"
            icon="layers"
            title="Страницы"
            :count="resourcesCount.pages"
            color="brown" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import {
    ChartCard,
    ProductCard,
    AnimatedNumber,
    GlobalSalesCard,
    GlobalSalesTable
} from "@/components";

import PanelCardLink from '@/custom_components/Cards/PanelCardLink'
import { pageTitle } from '@/mixins/base'

export default {
    components: {
        PanelCardLink
    },
    mixins: [ pageTitle ],
    data() {
        return {
            responseData: false
        }
    },
    computed: {
      ...mapState('dashboard', {
          resourcesCount: state => state.resourcesCount
      })
    },
    created() {
        this.getResourcesCountAction({
            tables: [
                'images',
                'categories',
                'color_collections',
                'textures',
                'settings',
                'orders',
                'users',
                'roles',
                'permissions',
                'pages'
            ]
        })
            .then(() => {
                this.setPageTitle('Панель управления');
                this.responseData = true;
            });
    },
    methods: {
        ...mapActions('dashboard', {
            getResourcesCountAction: 'getResourcesCount'
        })
    }
};
</script>
