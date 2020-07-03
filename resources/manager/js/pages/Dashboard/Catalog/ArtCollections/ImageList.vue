<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link :route="redirectRoute"/>
                        <router-button-link icon="add"
                                            color="md-success"
                                            title="Добавить изображения"
                                            route="manager.catalog.art-collections.images.excluded"
                                            :params="{ id }" />
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header title="Список изображений" icon="assignment" />
                    <md-card-content>
                        <template v-if="images.length">
                            <md-table :value="images" class="paginated-table table-striped table-hover">
                                <md-table-row slot="md-table-row" slot-scope="{ item }">

                                    <slot name="first-column" :item="item" >
                                        <md-table-cell md-label="#" md-sort-by="id" style="width: 50px">
                                            {{ item.id }}
                                        </md-table-cell>
                                    </slot>

                                    <md-table-cell md-label="Превью">
                                        <thumb-table-cell :path="item.path" />
                                    </md-table-cell>

                                    <md-table-cell md-label="Темы">
                                        <tags-table-cell :items="item.topics" />
                                    </md-table-cell>

                                    <md-table-cell md-label="Цвета">
                                        <palette-table-cell :items="item.colors" />
                                    </md-table-cell>

                                    <md-table-cell md-label="Интерьеры">
                                        <tags-table-cell :items="item.interiors"/>
                                    </md-table-cell>

                                    <md-table-cell md-label="Владелец">
                                        <span v-if="item.owner" class="md-category-tag">
                                            {{ item.owner.title }}
                                        </span>
                                    </md-table-cell>

                                    <md-table-cell md-label="Цветовая коллекция">
                                        <template v-if="item.colorCollection">
                                            <md-badge
                                                v-if="item.id === item.colorCollection.main_image_id"
                                                md-content="М">
                                                <span class="md-category-tag">
                                                    {{ item.colorCollection.title }}
                                                </span>
                                            </md-badge>
                                            <span v-else class="md-category-tag">
                                                {{ item.colorCollection.title }}
                                            </span>
                                        </template>
                                    </md-table-cell>

                                    <md-table-cell md-label="Формат">
                                        <span v-if="item.format">
                                            <md-icon>{{ item.format.icon }}</md-icon>
                                            <md-tooltip md-direction="top">{{ item.format.title }}</md-tooltip>
                                        </span>
                                    </md-table-cell>

                                    <md-table-cell md-label="Лайки">
                                        <md-icon>favorite</md-icon> {{ item.likes_count }}
                                    </md-table-cell>
                                    <md-table-cell md-label="Заказы">
                                        <md-icon>shopping_cart</md-icon> {{ item.orders_count }}
                                    </md-table-cell>

                                    <md-table-cell md-label="Опубл.">
                                        <md-switch :value="!item.publish" @change="onPublish(item.id)" />
                                    </md-table-cell>

                                    <md-table-cell v-if="item" md-label="Действия">
                                        <image-table-actions :item="item"
                                                             :remove="true"
                                                             @remove="onRemove"
                                                             @delete="onDelete"/>
                                    </md-table-cell>

                                </md-table-row>
                            </md-table>
                        </template>
                        <template v-else>
                            <div class="alert alert-info">
                                <span><h3>В коллекции еще нет изображений! Загрузите их!</h3></span>
                            </div>
                        </template>
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
    import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
    import PaletteTableCell from "@/custom_components/Tables/PaletteTableCell";
    import TagsTableCell from "@/custom_components/Tables/TagsTableCell";
    import ImageTableActions from "@/custom_components/Tables/ImageTableActions";

    export default {
        name: 'ImageList',
        mixins: [
            pageTitle,
            deleteMethod,
            uploadMethod
        ],
        components: {
            ThumbTableCell,
            PaletteTableCell,
            TagsTableCell,
            ImageTableActions
        },
        props: {
            id: {
                type: [ Number, String ],
                default: null
            }
        },
        data () {
            return {
                responseData: false,
                storeModule: 'images',
                redirectRoute: 'manager.catalog.art-collections'
            }
        },
        computed: {
            ...mapState({
                title: state => state.artCollections.fields.title,
                images: state => state.images.items
            })
        },
        created () {
            Promise.all([
                this.getItemAction(this.id),
                this.getImagesAction(this.id)
            ])
                .then(() => {
                    this.setPageTitle(`Изображения коллекции «${this.title}»`);
                    this.responseData = true;
                })
                .catch(() => this.$router.push({ name: this.redirectRoute }));
        },
        methods: {
            ...mapActions({
                publishAction: 'images/togglePublish',
                getItemAction: 'artCollections/getItem',
                getImagesAction: 'artCollections/getImages',
                removeImageAction: 'artCollections/removeImage'
            }),
            onRemove (id) {
                this.removeImageAction({ collectionId: this.id, imageId: id });
            },
            onDelete (item) {
                this.delete({
                    payload: item.id,
                    title: item.id,
                    alertText: `изображение «${item.id}»`,
                    successText: 'Изображение удалено!',
                    storeModule: this.storeModule,
                    tableMode: 'images'
                });
            },
            onPublish (id) {
                this.publishAction(id);
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
