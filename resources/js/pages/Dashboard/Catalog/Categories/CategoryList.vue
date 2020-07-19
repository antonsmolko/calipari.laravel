<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link route="cms.catalog" title="В каталог" />
                    <router-button-link
                        route="cms.catalog.categories.create"
                        :params="{ category_type }"
                        icon="add"
                        color="md-success"
                        title="Создать категорию" />
                </md-card-content>
            </md-card>
            <div class="space-1"></div>
            <md-card>
                <card-icon-header :title="tableTitle" icon="assignment" />
                <md-card-content>
                    <v-extended-table :resourceUrl="resourceUrl"
                                      editItemPathName="cms.catalog.categories.edit"
                                      :searchFields="[ 'title', 'alias' ]"
                                      emptyContent="У Вас нет категорий. Создайте их!" >

                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" md-sort-by="id" style="width: 50px">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell v-if="category_type !== 'colors'" md-label="Превью">
                                <thumb-table-cell :path="item.image_path" :width="150" />
                            </md-table-cell>

                            <md-table-cell v-else md-label="Превью">
                                <div class="tm-color img-raised rounded-circle" :style="`background: ${item.alias}`"></div>
                            </md-table-cell>

                            <md-table-cell md-label="Заголовок" md-sort-by="title">
                                <span class="md-subheading">{{ item.title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Алиас" md-sort-by="alias">
                                {{ item.alias }}
                            </md-table-cell>

                            <md-table-cell md-label="Изображения" md-sort-by="images_count">
                                {{ item.images_count }}
                            </md-table-cell>

                            <md-table-cell md-label="Опубликован">
                                <md-switch
                                    :disabled="!item.has_published_images"
                                    :value="!item.publish"
                                    @change="togglePublish(item)">
                                    <template>
                                        <span v-if="!item.has_published_images">Нет опубликованных изображений!</span>
                                    </template>
                                </md-switch>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <category-table-actions :item="item" @delete="onDelete"/>
                            </md-table-cell>
                        </template>

                    </v-extended-table>

                </md-card-content>
            </md-card>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'

    import CategoryTableActions from "@/custom_components/Tables/CategoryTableActions";
    import categoryTableMixin from "@/mixins/categoryTableMixin";
    import { categoryPage, tableTitle } from '@/mixins/categories'
    import { pageTitle } from '@/mixins/base'
    import { deleteMethod } from '@/mixins/crudMethods'


    export default {
        name: 'CategoryList',
        mixins: [
            categoryTableMixin,
            categoryPage,
            tableTitle,
            pageTitle,
            deleteMethod
        ],
        components: {
            CategoryTableActions
        },
        data () {
            return {
                resourceUrl: `/catalog/categories/type/${this.category_type}`,
                responseData: false
            }
        },
        computed: {
            ...mapState('categories', {
                items: state => state.items,
            })
        },
        created () {
            this.setPageTitle(this.pageProps[this.category_type].PAGE_TITLE);
        },
        methods: {
            ...mapActions({
                togglePublishAction: 'table/togglePublish'
            }),
            onDelete (item) {
                return this.delete({
                    module: 'categories',
                    payload: item.id,
                    title: item.title,
                    alertText: `категорию «${item.title}»`,
                    storeModule: this.storeModule,
                    successText: 'Категория удалена!',
                    tableMode: 'table'
                })
            },
            togglePublish (item) {
                this.togglePublishAction(`/catalog/categories/${item.id}/publish`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tm-color {
        width: 50px;
        height: 50px;
    }
</style>
