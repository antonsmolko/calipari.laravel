<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link v-if="category_type === 'images'"
                            route="manager.dashboard"
                        />
                        <router-button-link v-else
                            route="manager.catalog.categories.list"
                            :params="{ category_type }"
                        />
                        <div>
                            <router-button-link v-if="category_type !== 'images'"
                                icon="add"
                                color="md-success"
                                title="Добавить изображения"
                                route="manager.catalog.categories.images.excluded"
                                :params="{ id }" />
                            <upload-button @change="fileInputChange" />
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>

        <div class="md-layout">
            <div class="md-layout-item">
                <div class="md-layout-item md-progress-bar__container">
                    <md-progress-bar v-if="fileProgress" class="md-info" :md-value="fileProgress" />
                </div>
                <md-card>
                    <card-icon-header title="Каталог изображений" icon="image" />
                    <md-card-content>
                        <image-list-table :resourceUrl="resourceUrl"
                                          @publish="togglePublish">

                            <template #actions-column="{ item }">
                                <md-table-cell v-if="item" md-label="Действия">
                                    <image-table-actions :item="item"
                                                         :remove="isCategoryPage"
                                                         @remove="onRemove"
                                                         @delete="onDelete"/>
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
    import { deleteMethod, uploadMethod } from '@/mixins/crudMethods'

    import ImageListTable from "@/custom_components/Tables/ImageListTable";
    import ImageTableActions from "@/custom_components/Tables/ImageTableActions";

    export default {
        name: 'ImageList',
        mixins: [
            pageTitle,
            deleteMethod,
            uploadMethod
        ],
        components: {
            ImageListTable,
            ImageTableActions
        },
        props: {
            category_type: {
                type: String,
                default: 'images'
            },
            id: {
                type: [ Number, String ],
                default: null
            }
        },
        data () {
            return {
                storeModule: 'images'
            }
        },
        computed: {
            ...mapState({
                category: state => state.categories.item,
                fileProgress: state => state.images.fileProgress
            }),
            resourceUrl () {
                return this.isCategoryPage ? `/catalog/categories/${this.id}/images` : '/images/paginate'
            },
            isCategoryPage() {
                return this.category_type !== 'images';
            }
        },
        created () {
            this.init(this.category_type);
        },
        beforeDestroy () {

        },
        methods: {
            ...mapActions({
                getCategoryAction: 'categories/getItem',
                togglePublishAction: 'table/togglePublish',
                removeImageAction: 'categories/removeImage'
            }),
            async init (categoryType) {
                if (categoryType !== 'images') {
                    await this.getCategoryAction(this.id)
                }
                const pageTitle = categoryType === 'images'
                    ? 'Изображения'
                    : `Изображения категории «${this.category.title}»`;
                await this.setPageTitle(pageTitle);

            },
            fileInputChange (event) {
                this.upload({
                    uploadFiles: event.target.files,
                    type: this.category_type,
                    id: this.id
                });
            },
            onRemove (id) {
                this.removeImageAction({ categoryId: this.id, imageId: id });
            },
            onDelete (item) {
                this.delete({
                    payload: item.id,
                    title: item.id,
                    alertText: `изображение «${item.id}»`,
                    successText: 'Изображение удалено!',
                    storeModule: this.storeModule,
                    tableMode: 'table'
                })
            },
            togglePublish (id) {
                this.togglePublishAction(`/images/${id}/publish`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-between {
        display: flex;
        justify-content: space-between;
    }
    .md-progress-bar__container {
        height: 4px;
    }
</style>
