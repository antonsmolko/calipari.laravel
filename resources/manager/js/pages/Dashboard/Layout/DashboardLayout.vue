<template>
    <div class="wrapper" :class="[{ 'nav-open': $sidebar.showSidebar }]">
        <notifications :timeout="7000"/>
        <side-bar
            title="Calipari"
            logo="/img/logo/calipari-mini.png"
            :active-color="sidebarBackground"
            :background-image="sidebarBackgroundImage"
            :data-background-color="sidebarBackgroundColor">
            <user-menu
                :avatar="user.gravatar_medium"
                :title="user.name"/>
            <mobile-menu/>
            <template slot="links">
                <sidebar-item :link="{name: 'Панель управления', icon: 'dashboard', path: '/manager/dashboard'}"/>
                <sidebar-item v-if="authCheck('settings')" :link="{name: 'Конфигурация', icon: 'settings', path: '/manager/settings'}"/>
                <sidebar-item v-if="authCheck('images')" :link="{name: 'Изображения', icon: 'image', path: '/manager/images'}"/>
                <sidebar-item v-if="authCheck('pages')" :link="{name: 'Страницы', icon: 'layers', path: '/manager/pages'}">
                    <sidebar-item :link="{name: 'Главная', path: '/manager/pages/home'}"/>
                    <sidebar-item :link="{name: 'Каталог', path: '/manager/pages/catalog'}"/>
                    <sidebar-item :link="{name: 'Текстуры', path: '/manager/pages/textures'}"/>
                    <sidebar-item :link="{name: 'Портфолио', path: '/manager/pages/portfolio'}"/>
                    <sidebar-item :link="{name: 'Блог', path: '/manager/pages/blog'}"/>
                    <sidebar-item :link="{name: 'Контакты', path: '/manager/pages/contacts'}"/>
                    <sidebar-item :link="{name: 'Политика', path: '/manager/pages/policy'}"/>
                    <sidebar-item :link="{name: 'Договор оферты', path: '/manager/pages/contract-offer'}"/>
                    <sidebar-item :link="{name: 'Доставка, оплата', path: '/manager/pages/shipping-payment'}"/>
                </sidebar-item>
                <sidebar-item v-if="authCheck('store')" :link="{name: 'Магазин', icon: 'local_mall', path: '/manager/store'}">
                    <sidebar-item v-if="authCheck('deliveries')" :link="{name: 'Доставка', icon: 'local_mall', path: '/manager/store/deliveries'}"/>
                    <sidebar-item
                        v-if="authCheck('order-statuses')"
                        :link="{name: 'Статусы заказа', icon: 'update', path: '/manager/store/order-statuses'}"/>
                    <sidebar-item v-if="authCheck('orders')" :link="{name: 'Заказы', icon: 'shopping_cart', path: '/manager/store/orders'}"/>
                </sidebar-item>
                <sidebar-item v-if="authCheck('catalog')" :link="{name: 'Каталог', icon: 'category'}">
                    <sidebar-item :link="{name: 'Темы', path: '/manager/catalog/categories/topics'}"/>
                    <sidebar-item :link="{name: 'Цвета', path: '/manager/catalog/categories/colors'}"/>
                    <sidebar-item :link="{name: 'Интерьеры', path: '/manager/catalog/categories/interiors'}"/>
                    <sidebar-item :link="{name: 'Теги', path: '/manager/catalog/categories/tags'}"/>
                    <sidebar-item :link="{name: 'Арт коллекции', path: '/manager/catalog/art-collections'}"/>
                    <sidebar-item :link="{name: 'Цветовые коллекции', path: '/manager/catalog/color-collections'}"/>
                    <sidebar-item :link="{name: 'Владельцы', path: '/manager/catalog/subcategories/owners'}"/>
                </sidebar-item>
                <sidebar-item v-if="authCheck('textures')" :link="{name: 'Фактуры', icon: 'style', path: '/manager/textures'}"/>
                <sidebar-item v-if="authCheck('users')" :link="{name: 'Пользователи', icon: 'people', path: '/manager/users'}"/>
                <sidebar-item v-if="authCheck('roles')" :link="{name: 'Роли', icon: 'business_center', path: '/manager/roles'}"/>
                <sidebar-item v-if="authCheck('permissions')" :link="{name: 'Привилегии', icon: 'vpn_key', path: '/manager/permissions'}"/>
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
