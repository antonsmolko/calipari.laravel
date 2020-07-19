<template>
    <div>

        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link
                            route="cms.catalog.categories.images"
                            :params="{ category_type, id }"
                        />
                        <div v-if="selected.length">
                            <control-button title="Добавить изображения"
                                            icon="check"
                                            @click="onImagesAdd" />
                        </div>
                    </md-card-content>
                </md-card>
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

    import { categoryPage } from '@/mixins/categories'
    import { imageAddMethod } from '@/mixins/crudMethods'
    import ImageListTable from "@/custom_components/Tables/ImageListTable";

    export default {
        name: 'ExcludedImageList',
        mixins: [
            categoryPage,
            imageAddMethod
        ],
        components: {
            ImageListTable
        },
        props: {
            id: {
                type: [Number, String],
                required: true
            },
            category_type: {
                type: String,
                default: null
            },
        },
        data () {
            return {
                storeModule: 'images',
                resourceUrl: `/catalog/categories/${this.id}/images/excluded`,
                selected: [],
                loading: false
            }
        },
        computed: {
            ...mapState({
                category: state => state.categories.item
            })
        },
        created () {
            this.getCategoryAction(this.id)
                .then(() => this.setPageTitle(`Изображения каталога доступные для добавления в категорию «${this.category.title}».`))
                .catch(() => this.$router.push(this.redirectRoute));
        },
        methods: {
            ...mapActions({
                getCategoryAction: 'categories/getItem',
                togglePublishAction: 'table/togglePublish'
            }),
            togglePublish (id) {
                this.togglePublishAction(`/images/${id}/publish`);
            },
            onImagesAdd () {
                return this.addImages({
                    id: this.category.id,
                    data: this.selected
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
