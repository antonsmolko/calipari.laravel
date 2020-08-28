<template>
    <div class="md-layout" v-if="responseData">
        <panel-card-link
            v-if="authCheck('images')"
            :to="{ name: 'cms.images' }"
            icon="image"
            title="Изображения"
            :count="resourcesCount.images"
            color="danger" />

        <panel-card-link
            v-if="authCheck('catalog')"
            :to="{ name: 'cms.catalog' }"
            icon="category"
            title="Каталог"
            :count="resourcesCount.categories + resourcesCount.color_collections"
            color="blue-grey" />

        <panel-card-link
            v-if="authCheck('textures')"
            :to="{ name: 'cms.textures' }"
            icon="style"
            title="Фактуры"
            :count="resourcesCount.textures"
            color="primary" />

        <panel-card-link
            v-if="authCheck('settings')"
            :to="{ name: 'cms.settings' }"
            icon="settings"
            title="Конфигурация"
            :count="resourcesCount.settings"
            color="deep-purple" />

        <panel-card-link
            v-if="authCheck('store')"
            :to="{ name: 'cms.store' }"
            icon="local_mall"
            title="Магазин"
            :count="resourcesCount.orders"
            color="indigo"/>

        <panel-card-link
            v-if="authCheck('users')"
            :to="{ name: 'cms.users' }"
            icon="people"
            title="Пользователи"
            :count="resourcesCount.users"
            color="blue"/>

        <panel-card-link
            v-if="authCheck('roles')"
            :to="{ name: 'cms.roles' }"
            icon="business_center"
            title="Роли"
            :count="resourcesCount.roles"
            color="light-blue" />

        <panel-card-link
            v-if="authCheck('permissions')"
            :to="{ name: 'cms.permissions' }"
            icon="vpn_key"
            title="Привилегии"
            :count="resourcesCount.permissions"
            color="cyan" />

        <panel-card-link
            v-if="authCheck('pages')"
            :to="{ name: 'cms.pages' }"
            icon="layers"
            title="Страницы"
            :count="resourcesCount.pages"
            color="brown" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import PanelCardLink from '@/custom_components/Cards/PanelCardLink'
import { pageTitle, authCheck } from '@/mixins/base'

export default {
    components: {
        PanelCardLink
    },
    mixins: [ pageTitle, authCheck ],
    data: () => ({
        responseData: false
    }),
    computed: {
        ...mapState('dashboard', {
          resourcesCount: state => state.resourcesCount
        })
    },
    created () {
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
