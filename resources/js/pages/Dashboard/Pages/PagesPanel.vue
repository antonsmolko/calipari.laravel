<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link />
                </md-card-content>
            </md-card>
        </div>
        <panel-card-link :to="{ name: 'cms.pages.home' }" icon="home" title="Главная страница" color="deep-purple" />
        <panel-card-link :to="{ name: 'cms.pages.catalog' }" icon="category" title="Каталог" color="indigo" />
        <panel-card-link :to="{ name: 'cms.pages.textures' }" icon="style" title="Материалы" color="blue" />
        <panel-card-link :to="{ name: 'cms.pages.portfolio' }" icon="work" title="Портфолио" color="light-blue" />
        <panel-card-link :to="{ name: 'cms.pages.blog' }" icon="article" title="Блог" color="cyan" />
        <panel-card-link :to="{ name: 'cms.pages.contacts' }" icon="location_on" title="Контакты" color="teal" />
        <panel-card-link :to="{ name: 'cms.pages.policy' }" icon="policy" title="Политика конфиденциальности" color="light-green" />
        <panel-card-link :to="{ name: 'cms.pages.contract-offer' }" icon="grading" title="Договор оферты" color="amber" />
        <panel-card-link :to="{ name: 'cms.pages.shipping-payment' }" icon="local_shipping" title="Доставка, оплата" color="deep-orange" />
        <panel-card-link :to="{ name: 'cms.pages.sales' }" icon="storefront" title="Распродажа" color="brown" />
        <panel-card-link :to="{ name: 'cms.pages.reviews' }" icon="star_rate" title="Отзывы клиентов" color="grey" />
    </div>
</template>

<script>
import PanelCardLink from '@/custom_components/Cards/PanelCardLink'
import { pageTitle } from '@/mixins/base'

export default{
    components: {
        PanelCardLink
    },
    mixins: [ pageTitle ],
    created () {
        this.setPageTitle('Страницы');
    }
}
</script>

