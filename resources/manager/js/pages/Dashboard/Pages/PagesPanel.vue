<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link />
                </md-card-content>
            </md-card>
        </div>
        <panel-card-link route="manager.pages.home" icon="home" title="Главная страница" color="deep-purple" />
        <panel-card-link route="manager.pages.catalog" icon="category" title="Каталог" color="indigo" />
        <panel-card-link route="manager.pages.textures" icon="style" title="Материалы" color="blue" />
        <panel-card-link route="manager.pages.portfolio" icon="work" title="Портфолио" color="light-blue" />
        <panel-card-link route="manager.pages.blog" icon="article" title="Блог" color="cyan" />
        <panel-card-link route="manager.pages.contacts" icon="location_on" title="Контакты" color="teal" />
        <panel-card-link route="manager.pages.policy" icon="policy" title="Политика конфиденциальности" color="light-green" />
        <panel-card-link route="manager.pages.contract-offer" icon="grading" title="Договор оферты" color="yellow" />
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
        data () {
            return {
            }
        },
        created() {
            this.setPageTitle('Страницы');
        }
    }
</script>

