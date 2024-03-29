<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute"/>
                        <image-uploader @change="fileInputChange" :multiple="true" />
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
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

                                    <md-table-cell md-label="Цвета">
                                        <palette-table-cell :items="item.colors" />
                                    </md-table-cell>

                                    <md-table-cell md-label="Владелец">
                                        <span v-if="item.owner" class="md-category-tag">
                                            {{ item.owner.title }}
                                        </span>
                                    </md-table-cell>

                                    <md-table-cell md-label="Формат">
                                        <span v-if="item.format">
                                            <md-icon>{{ item.format.icon }}</md-icon>
                                            <md-tooltip md-direction="top">{{ item.format.title }}</md-tooltip>
                                        </span>
                                    </md-table-cell>

                                    <md-table-cell md-label="Лайки">
                                        <md-icon>favorite</md-icon> {{ item.likes }}
                                    </md-table-cell>
                                    <md-table-cell md-label="Заказы">
                                        <md-icon>shopping_cart</md-icon> {{ item.orders }}
                                    </md-table-cell>

                                    <md-table-cell md-label="Опубл.">
                                        <md-switch :value="!item.publish" @change="onPublish(item.id)" />
                                    </md-table-cell>

                                    <md-table-cell md-label="Основное">
                                        <md-radio class="md-primary"
                                                  v-model="mainImage"
                                                  :value="item.id"
                                                  @change="setMainImage" />
                                    </md-table-cell>

                                    <md-table-cell md-label="Действия">
                                        <table-actions :item="item"
                                                       subPath="images"
                                                       :deleteDisabled="item.id === mainImageId"
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
import ImageUploader from "@/custom_components/Uploader/ImageUploader";
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
import PaletteTableCell from "@/custom_components/Tables/PaletteTableCell";
import TableActions from "@/custom_components/Tables/TableActions";

export default {
    name: 'ImageList',
    mixins: [
        pageTitle,
        deleteMethod,
        uploadMethod
    ],
    components: {
        ImageUploader,
        ThumbTableCell,
        PaletteTableCell,
        TableActions
    },
    props: {
        id: {
            type: [ Number, String ],
            default: null
        }
    },
    data: () => ({
        mainImage: null,
        responseData: false,
        storeModule: 'images',
        redirectRoute: { name: 'cms.catalog.color-collections' }
    }),
    computed: {
        ...mapState({
            title: state => state.colorCollections.fields.title,
            mainImageId: state => state.colorCollections.fields.main_image_id,
            images: state => state.images.items
        })
    },
    watch: {
        mainImageId () {
            if (this.mainImageId) {
                this.mainImage = this.mainImageId;
            }
        }
    },
    created () {
        Promise.all([
            this.getItemAction(this.id),
            this.getImagesAction(this.id)
        ])
            .then(() => {
                this.mainImage = this.mainImageId;
                this.setPageTitle(`Изображения коллекции «${this.title}»`);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            publishAction: 'images/togglePublish',
            getItemAction: 'colorCollections/getItem',
            getImagesAction: 'colorCollections/getImages',
            setMainImageAction: 'colorCollections/setMainImage'
        }),
        fileInputChange ({ images }) {
            this.upload({
                images,
                type: this.category_type,
                id: this.id,
                storeModule: 'colorCollections'
            });
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
        },
        setMainImage (id) {
            if (this.mainImageId !== id) {
                this.setMainImageAction({ id: this.id, imageId: id });
            }
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
