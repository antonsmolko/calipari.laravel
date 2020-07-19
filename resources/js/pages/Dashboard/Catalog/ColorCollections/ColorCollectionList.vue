<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link title="В каталог" :route="redirectRoute.name"/>
                    <router-button-link title="Создать коллекцию" icon="add" color="md-success"
                                        route="cms.catalog.color-collections.create" />
                </md-card-content>
            </md-card>

            <div class="space-1"></div>
            <md-card>
                <card-icon-header title="Коллекции" icon="assignment" />
                <md-card-content>
                    <v-extended-table :resourceUrl="resourceUrl"
                                      editItemPathName="cms.catalog.color-collections.edit"
                                      :searchFields="[ 'title', 'alias' ]"
                                      emptyContent="У Вас нет коллекций. Создайте их!" >

                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Превью">
                                <thumb-table-cell
                                    :path="item.thumb || $config.imagePlaceholder"
                                    :static="!item.thumb"
                                    :width="150" />
                            </md-table-cell>

                            <md-table-cell md-label="Заголовок">
                                <span class="md-subheading">{{ item.title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Темы">
                                <tags-table-cell :items="item.topics" />
                            </md-table-cell>

                            <md-table-cell md-label="Интерьеры">
                                <tags-table-cell :items="item.interiors"/>
                            </md-table-cell>

                            <md-table-cell md-label="Тэги">
                                <tags-table-cell :items="item.tags"/>
                            </md-table-cell>

                            <md-table-cell md-label="Владелец">
                                    <span v-if="item.owner" class="md-category-tag">
                                        {{ item.owner.title }}
                                    </span>
                            </md-table-cell>

                            <md-table-cell md-label="Изображения">
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
                                <router-button-link title="Изображения"
                                                    icon="perm_media"
                                                    route="cms.catalog.color-collections.images"
                                                    :params="{ id: item.id }" />

                                <table-actions :item="item"
                                               subPath="catalog.color-collections"
                                               @delete="onDelete"/>
                            </md-table-cell>

                        </template>

                    </v-extended-table>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    import VExtendedTable from "@/custom_components/Tables/VExtendedTable";
    import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
    import TagsTableCell from "@/custom_components/Tables/TagsTableCell";
    import TableActions from "@/custom_components/Tables/TableActions";
    import { pageTitle } from '@/mixins/base'
    import { deleteMethod } from '@/mixins/crudMethods'

    export default {
        name: 'ColorCollectionList',
        mixins: [ pageTitle, deleteMethod ],
        components: {
            VExtendedTable,
            ThumbTableCell,
            TagsTableCell,
            TableActions
        },
        data() {
            return {
                resourceUrl: '/catalog/color-collections',
                redirectRoute: { name: 'cms.catalog' },
                storeModule: 'colorCollections'
            }
        },
        created() {
            this.setPageTitle('Цветовые коллекции');
        },
        methods: {
            ...mapActions({
                togglePublishAction: 'table/togglePublish'
            }),
            onDelete(item) {
                return this.delete({
                    payload: item.id,
                    title: item.title,
                    alertText: `коллекцию «${item.title}»`,
                    storeModule: this.storeModule,
                    successText: 'Коллекция удалена!',
                    tableMode: 'table'
                })
            },
            togglePublish (item) {
                this.togglePublishAction(`/catalog/color-collections/${item.id}/publish`);
            }
        }
    }
</script>
