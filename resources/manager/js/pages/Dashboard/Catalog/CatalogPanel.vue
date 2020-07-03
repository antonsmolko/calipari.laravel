<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link />
                </md-card-content>
            </md-card>
        </div>
        <panel-card-link
            route="manager.catalog.categories.list"
            :params="{ category_type: 'topics' }"
            icon="collections_bookmark"
            :count="resourcesCount.topics"
            title="Темы"
            color="blue" />

        <panel-card-link
            route="manager.catalog.categories.list"
            :params="{ category_type: 'colors' }"
            icon="format_paint"
            :count="resourcesCount.colors"
            title="Цвета"
            color="rose" />

        <panel-card-link
            route="manager.catalog.categories.list"
            :params="{ category_type: 'interiors' }"
            icon="meeting_room"
            :count="resourcesCount.interiors"
            title="Интерьеры"
            color="green" />

        <panel-card-link
            route="manager.catalog.categories.list"
            :params="{ category_type: 'tags' }"
            icon="local_offer"
            :count="resourcesCount.tags"
            title="Теги"
            color="brown" />

        <panel-card-link
            route="manager.catalog.color-collections"
            icon="palette"
            :count="resourcesCount.color_collections"
            title="Цветовые коллекции"
            color="cyan" />

        <panel-card-link
            route="manager.catalog.art-collections"
            icon="view_quilt"
            :count="resourcesCount.art_collections"
            title="Арт коллекции"
            color="blue-grey" />

        <panel-card-link
            route="manager.catalog.subcategories.list"
            :params="{ category_type: 'owners' }"
            icon="cloud"
            :count="resourcesCount.owners"
            title="Владельцы"
            color="warning" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PanelCardLink from '@/custom_components/Cards/PanelCardLink'
import { pageTitle } from '@/mixins/base'

export default{
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
                'color_collections',
                'art_collections',
                'owners'
            ],
            categories: [
                'topics',
                'colors',
                'interiors',
                'tags'
            ]
        })
            .then(() => {
                this.setPageTitle('Каталог');
                this.responseData = true;
            });
    },
    methods: {
        ...mapActions('dashboard', {
            getResourcesCountAction: 'getResourcesCount'
        })
    }
}
</script>

