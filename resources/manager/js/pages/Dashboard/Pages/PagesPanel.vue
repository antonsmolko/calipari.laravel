<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link />
                </md-card-content>
            </md-card>
        </div>
        <panel-card-link route="manager.pages.home" icon="home" title="Главная страница" color="blue" />
        <panel-card-link route="manager.pages.portfolio" icon="work" title="Портфолио" color="blue-grey" />
        <panel-card-link route="manager.pages.blog" icon="article" title="Блог" color="light-green" />
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

