<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link title="В каталог" :to="redirectRoute"/>
                    <router-button-link title="Создать коллекцию" icon="add" color="md-success"
                                        :to="{ name: 'cms.catalog.art-collections.create' }" />
                </md-card-content>
            </md-card>

            <div class="space-1"></div>
            <md-card>
                <card-icon-header title="Арт коллекции" icon="assignment" />
                <md-card-content>
                    <v-extended-table :resourceUrl="resourceUrl"
                                      editItemPathName="cms.catalog.art-collections.edit"
                                      :searchFields="[ 'title', 'alias' ]"
                                      emptyContent="У Вас нет коллекций. Создайте их!" >

                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Превью">
                                <thumb-table-cell :path="item.image_path" :width="150" />
                            </md-table-cell>

                            <md-table-cell md-label="Заголовок">
                                <span class="md-subheading">{{ item.title }}</span>
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
                                <router-button-link
                                    title="Изображения"
                                    icon="perm_media"
                                    :to="{
                                        name: 'cms.catalog.art-collections.images',
                                        params: { id: item.id }
                                    }" />

                                <table-actions :item="item"
                                               subPath="catalog.art-collections"
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
import TableActions from "@/custom_components/Tables/TableActions";
import { pageTitle } from '@/mixins/base'
import { deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'ArtCollectionList',
    mixins: [ pageTitle, deleteMethod ],
    components: {
        VExtendedTable,
        ThumbTableCell,
        TableActions
    },
    data: () => ({
        resourceUrl: '/catalog/art-collections',
        redirectRoute: { name: 'cms.catalog' },
        storeModule: 'artCollections'
    }),
    created () {
        this.setPageTitle('Арт коллекции');
    },
    methods: {
        ...mapActions({
            togglePublishAction: 'table/togglePublish'
        }),
        onDelete (item) {
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
            this.togglePublishAction(`/catalog/art-collections/${item.id}/publish`);
        }
    }
}
</script>
