<template>
    <div class="wrapper" :class="[{ 'nav-open': $sidebar.showSidebar }]">
        <notifications :timeout="7000"/>
        <side-bar
            title="Calipari"
            logo="/img/logo/calipari-mini.png"
            :active-color="sidebarBackground"
            :background-image="sidebarBackgroundImage"
            :data-background-color="sidebarBackgroundColor">
            <user-menu :avatar="user.gravatar_medium" :title="user.name"/>
            <mobile-menu/>
            <template slot="links">
                <sidebar-item :link="{name: 'Панель управления', icon: 'dashboard', path: '/cms/dashboard'}"/>
                <sidebar-item v-if="authCheck('settings')" :link="{name: 'Конфигурация', icon: 'settings', path: '/cms/settings'}"/>
                <sidebar-item v-if="authCheck('images')" :link="{name: 'Изображения', icon: 'image', path: '/cms/images'}"/>
                <sidebar-item v-if="authCheck('pages')" :link="{name: 'Страницы', icon: 'layers', path: '/cms/pages'}">
                    <sidebar-item :link="{name: 'Главная', path: '/cms/pages/home'}"/>
                    <sidebar-item :link="{name: 'Каталог', path: '/cms/pages/catalog'}"/>
                    <sidebar-item :link="{name: 'Текстуры', path: '/cms/pages/textures'}"/>
                    <sidebar-item :link="{name: 'Портфолио', path: '/cms/pages/portfolio'}"/>
                    <sidebar-item :link="{name: 'Блог', path: '/cms/pages/blog'}"/>
                    <sidebar-item :link="{name: 'Контакты', path: '/cms/pages/contacts'}"/>
                    <sidebar-item :link="{name: 'Политика', path: '/cms/pages/policy'}"/>
                    <sidebar-item :link="{name: 'Договор оферты', path: '/cms/pages/contract-offer'}"/>
                    <sidebar-item :link="{name: 'Доставка, оплата', path: '/cms/pages/shipping-payment'}"/>
                </sidebar-item>
                <sidebar-item v-if="authCheck('store')" :link="{name: 'Магазин', icon: 'local_mall', path: '/cms/store'}">
                    <sidebar-item v-if="authCheck('store-settings')" :link="{name: 'Настройки', icon: 'tune', path: '/cms/store/settings'}"/>
                    <sidebar-item v-if="authCheck('deliveries')" :link="{name: 'Доставка', icon: 'local_mall', path: '/cms/store/deliveries'}"/>
                    <sidebar-item
                        v-if="authCheck('order-statuses')"
                        :link="{name: 'Статусы заказа', icon: 'update', path: '/cms/store/order-statuses'}"/>
                    <sidebar-item v-if="authCheck('orders')" :link="{name: 'Заказы', icon: 'shopping_cart', path: '/cms/store/orders'}"/>
                </sidebar-item>
                <sidebar-item v-if="authCheck('catalog')" :link="{name: 'Каталог', icon: 'category'}">
                    <sidebar-item :link="{name: 'Темы', path: '/cms/catalog/categories/topics'}"/>
                    <sidebar-item :link="{name: 'Цвета', path: '/cms/catalog/categories/colors'}"/>
                    <sidebar-item :link="{name: 'Интерьеры', path: '/cms/catalog/categories/interiors'}"/>
                    <sidebar-item :link="{name: 'Теги', path: '/cms/catalog/categories/tags'}"/>
                    <sidebar-item :link="{name: 'Арт коллекции', path: '/cms/catalog/art-collections'}"/>
                    <sidebar-item :link="{name: 'Цветовые коллекции', path: '/cms/catalog/color-collections'}"/>
                    <sidebar-item :link="{name: 'Владельцы', path: '/cms/catalog/subcategories/owners'}"/>
                </sidebar-item>
                <sidebar-item v-if="authCheck('textures')" :link="{name: 'Фактуры', icon: 'style', path: '/cms/textures'}"/>
                <sidebar-item v-if="authCheck('users')" :link="{name: 'Пользователи', icon: 'people', path: '/cms/users'}"/>
                <sidebar-item v-if="authCheck('roles')" :link="{name: 'Роли', icon: 'business_center', path: '/cms/roles'}"/>
                <sidebar-item v-if="authCheck('permissions')" :link="{name: 'Привилегии', icon: 'vpn_key', path: '/cms/permissions'}"/>
            </template>
        </side-bar>
        <div class="main-panel">
            <top-navbar/>
            <div
                :class="{ content: !$route.meta.hideContent }"
                @click="toggleSidebar">
                <zoom-center-transition :duration="200" mode="out-in">
                    <!-- your content here -->
                    <router-view :key="$route.fullPath"/>
                </zoom-center-transition>
            </div>
            <content-footer v-if="!$route.meta.hideFooter"/>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
    if (hasElement(className)) {
        new PerfectScrollbar(`.${className}`);
    } else {
        // try to init it later in case this component is loaded async
        setTimeout(() => {
            initScrollbar(className);
        }, 100);
    }
}

import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import MobileMenu from "./Extra/MobileMenu.vue";
import FixedPlugin from "../../FixedPlugin.vue";
import UserMenu from "./Extra/UserMenu.vue";
import { ZoomCenterTransition } from "vue2-transitions";
import { authCheck } from "@/mixins/base";

export default {
    components: {
        TopNavbar,
        ContentFooter,
        MobileMenu,
        FixedPlugin,
        UserMenu,
        ZoomCenterTransition
    },
    mixins: [ authCheck ],
    data() {
        return {
            sidebarBackgroundColor: "black",
            sidebarBackground: "green",
            sidebarBackgroundImage: "./img/sidebar-2.jpg",
            sidebarMini: true,
            sidebarImg: true
        };
    },
    computed: {
        user() {
            return this.$auth.user() || {};
        }
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        },
        minimizeSidebar() {
            if (this.$sidebar) {
                this.$sidebar.toggleMinimize();
            }
        }
    },
    async mounted() {
        let docClasses = document.body.classList;
        let isWindows = navigator.platform.startsWith("Win");
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            initScrollbar("sidebar");
            initScrollbar("sidebar-wrapper");
            initScrollbar("main-panel");

            docClasses.add("perfect-scrollbar-on");
        } else {
            docClasses.add("perfect-scrollbar-off");
        }
    },
    watch: {
        sidebarMini() {
            this.minimizeSidebar();
        }
    }
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
    from {
        opacity: 0;
        transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    to {
        opacity: 1;
    }
}

.main-panel .zoomIn {
    animation-name: zoomIn95;
}

@keyframes zoomOut95 {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
}

.main-panel .zoomOut {
    animation-name: zoomOut95;
}
</style>
