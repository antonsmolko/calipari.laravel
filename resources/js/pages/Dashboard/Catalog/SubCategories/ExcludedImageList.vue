<template>
    <div v-if="responseData">

        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" />
                        <div v-if="selected.length">
                            <control-button title="Добавить изображения"
                                            icon="add"
                                            @click="onImagesAdd" />
                        </div>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
            </div>
        </div>

        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header title="Каталог изображений" icon="image" />
                    <md-card-content>
                        <image-list-table :resourceUrl="resourceUrl"
                                          emptyContent="Пока нет других изображений!"
                                          @publish="togglePublish">

                            <template #first-column="{ item }">
                                <md-table-cell md-label="#" md-sort-by="id" style="width: 50px">
                                    {{ item.id }}
                                </md-table-cell>
                            </template>

                            <template #actions-column="{ item }">
                                <md-table-cell md-label="Выбрать">
                                    <md-checkbox v-model="selected" :value="item.id" />
                                </md-table-cell>
                            </template>

                        </image-list-table>

                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { pageTitle } from '@/mixins/base'
import { subCategoryImageAddMethod } from '@/mixins/crudMethods'

import ImageListTable from "@/custom_components/Tables/ImageListTable";
import ImageTableActions from "@/custom_components/Tables/ImageTableActions";

export default {
    name: 'ExcludedImageList',
    mixins: [
        pageTitle,
        subCategoryImageAddMethod
    ],
    components: {
        ImageListTable,
        ImageTableActions
    },
    props: {
        id: {
            type: [ Number, String ],
            required: true
        },
        category_type: {
            type: String,
            default: null
        },
    },
    data () {
        return {
            resourceUrl: `/catalog/${this.category_type}/${this.id}/images/excluded`,
            storeModule: 'images',
            redirectRoute: {
                name: 'cms.catalog.subcategories.images',
                params: { category_type: this.category_type, id: this.id }
            },
            responseData: false,
            selected: []
        }
    },
    computed: {
        ...mapState({
            title: state => state.subCategories.fields.title,
        })
    },
    created () {
        this.getItemAction({ type: this.category_type, id: this.id })
            .then(() => {
                this.setPageTitle(`Для категории «${this.title}»`);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            getItemAction: 'subCategories/getItem',
            togglePublishAction: 'table/togglePublish',
        }),
        togglePublish (id) {
            this.togglePublishAction(`/images/${id}/publish`);
        },
        onImagesAdd () {
            return this.addImages({
                type: this.category_type,
                id: this.id,
                data: this.selected,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.md-file-input {
    display: none;
}
.md-between {
    display: flex;
    justify-content: space-between;
}
</style>
