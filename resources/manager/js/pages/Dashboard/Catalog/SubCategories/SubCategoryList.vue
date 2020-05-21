<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link route="manager.catalog" title="В каталог" />
                    <router-button-link
                        route="manager.catalog.subcategories.create"
                        :params="{ category_type }"
                        icon="add"
                        color="md-success"
                        title="Создать тэг" />
                </md-card-content>
            </md-card>
            <div class="space-1"></div>
            <md-card>
                <card-icon-header :title="tableTitle" icon="assignment" />
                <md-card-content>

                    <v-extended-table :resourceUrl="resourceUrl"
                                      editItemPathName="manager.catalog.subcategories.edit"
                                      :searchFields="[ 'title', 'alias' ]"
                                      :emptyContent="`${tableTitle} не созданы. Создайте их!`" >

                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" md-sort-by="id" style="width: 50px">{{ item.id }}</md-table-cell>

                            <md-table-cell md-label="Заголовок" md-sort-by="title">
                                <span class="md-subheading">{{ item.title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Описание">
                                {{ item.description }}
                            </md-table-cell>

                            <md-table-cell md-label="Изображения" md-sort-by="images_count">
                                {{ item.images_count }}
                            </md-table-cell>

<!--                            <md-table-cell md-label="Опубликован">-->
<!--                                <md-switch-->
<!--                                    :disabled="!item.images_count"-->
<!--                                    :value="!item.publish"-->
<!--                                    @change="togglePublish(item)" >-->
<!--                                    <template>-->
<!--                                        <span v-if="!item.images_count">Для публикации добавьте изображения</span>-->
<!--                                    </template>-->
<!--                                </md-switch>-->
<!--                            </md-table-cell>-->

                            <md-table-cell md-label="Действия">
                                <category-table-actions :item="item"
                                                        @delete="onDelete"
                                                        subPath="subcategories" />
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
    import { subCategoryPage, tableTitle } from '@/mixins/categories'
    import { pageTitle } from '@/mixins/base'
    import { deleteMethod } from '@/mixins/crudMethods'

    export default {
        name: 'SubCategoryList',
        mixins: [
            categoryTableMixin,
            subCategoryPage,
            tableTitle,
            pageTitle,
            deleteMethod
        ],
        components: {
            CategoryTableActions
        },
        data () {
            return {
                resourceUrl: `/catalog/${this.category_type}`,
                storeModule: 'subCategories',
                responseData: false
            }
        },
        created () {
            this.setPageTitle(this.pageProps[this.category_type].PAGE_TITLE);
            this.responseData = true;
        },
        methods: {
            ...mapActions({
                togglePublishAction: 'table/togglePublish'
            }),
            onDelete (item) {
                this.delete({
                    storeModule: this.storeModule,
                    payload: {
                        type: this.category_type,
                        id: item.id
                    },
                    title: item.title,
                    alertText: this.pageProps[this.category_type].DELETE_CONFIRM_TEXT(item.title),
                    successText: this.pageProps[this.category_type].DELETE_SUCCESS_TEXT,
                    tableMode: 'table'
                })
            },
            // togglePublish (item) {
            //     this.togglePublishAction(`/catalog/${this.category_type}/${item.id}/publish`);
            // }
        }
    }
</script>
