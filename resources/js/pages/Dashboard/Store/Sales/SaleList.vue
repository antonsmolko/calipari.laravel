<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link title="В панель магазина" :to="redirectRoute"/>
                    <router-button-link
                        :to="{ name: 'cms.store.sales.create' }"
                        icon="add"
                        color="md-success"
                        title="Создать позицию" />
                </md-card-content>
            </md-card>

            <tabs
                :tab-name="['Текущие', 'В заказе', 'Проданные']"
                :activeTab="activeTab"
                color-button="success">
                <template slot="tab-pane-1">
                    <v-extended-table :serverPagination="true"
                                  :resourceUrl="currentResourceUrl"
                                  defaultSortOrder="desc"
                                  emptyContent="У Вас еще нет позиций на реализации!"
                                  :searchFields="[ 'article' ]" >

                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px" md-sort-by="id">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Превью">
                                <thumb-table-cell :path="item.image_path" />
                            </md-table-cell>

                            <md-table-cell md-label="ID изобр.">
                                {{ item.image_id }}
                            </md-table-cell>

                            <md-table-cell md-label="Артикул">
                                <span class="md-subheading">{{ item.article }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Размеры">
                                {{ item.width_cm }} × {{ item.height_cm }}
                            </md-table-cell>

                            <md-table-cell md-label="Текстура">
                                {{ getTextureName(item.texture_id) }}
                            </md-table-cell>

                            <md-table-cell md-label="Без скидки">
                                {{ getFormatOldPrice(item) }}
                            </md-table-cell>

                            <md-table-cell md-label="Скидка">
                                <span class="md-subheading">{{ item.discount }} %</span>
                            </md-table-cell>

                            <md-table-cell md-label="Со скидкой">
                                <span class="md-subheading">{{ getPrice(item) }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Опубл.">
                                <md-switch :value="!item.publish" @change="togglePublish(item.id)" />
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <control-button title="В «Проданные»"
                                                    icon="checkroom"
                                                    color="md-info"
                                                    @click="toSold(item)" />

                                    <router-button-link
                                        title="Редактировать"
                                        icon="create"
                                        color="md-success"
                                        :to="{ name: 'cms.store.sales.edit',params: { id: item.id } }" />

                                    <control-button title="Удалить"
                                                    icon="delete"
                                                    color="md-danger"
                                                    @click="onDelete(item)" />
                                </div>
                            </md-table-cell>

                        </template>>
                    </v-extended-table>
                </template>
                <template slot="tab-pane-2">
                    <v-extended-table :serverPagination="true"
                                      :resourceUrl="inOrderResourceUrl"
                                      defaultSortOrder="desc"
                                      emptyContent="У Вас еще позиций в заказах!"
                                      :searchFields="[ 'article' ]" >
                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px" md-sort-by="id">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Превью">
                                <thumb-table-cell :path="item.image_path" />
                            </md-table-cell>

                            <md-table-cell md-label="ID изобр.">
                                {{ item.image_id }}
                            </md-table-cell>

                            <md-table-cell md-label="Артикул">
                                <span class="md-subheading">{{ item.article }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Размеры">
                                {{ item.width_cm }} × {{ item.height_cm }}
                            </md-table-cell>

                            <md-table-cell md-label="Текстура">
                                {{ getTextureName(item.texture_id) }}
                            </md-table-cell>

                            <md-table-cell md-label="Без скидки">
                                {{ getFormatOldPrice(item) }}
                            </md-table-cell>

                            <md-table-cell md-label="Скидка">
                                <span class="md-subheading">{{ item.discount }} %</span>
                            </md-table-cell>

                            <md-table-cell md-label="Со скидкой">
                                <span class="md-subheading">{{ getPrice(item) }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <router-button-link
                                        title="Редактировать"
                                        icon="create"
                                        color="md-success"
                                        :to="{ name: 'cms.store.sales.edit',params: { id: item.id } }" />

                                    <control-button title="Удалить"
                                                    icon="delete"
                                                    color="md-danger"
                                                    @click="onDelete(item)" />
                                </div>
                            </md-table-cell>

                        </template>
                    </v-extended-table>

                </template>
                <template slot="tab-pane-3">
                    <v-extended-table :serverPagination="true"
                                      :resourceUrl="soldResourceUrl"
                                      defaultSortOrder="desc"
                                      emptyContent="У Вас еще нет проданных позиций!"
                                      :searchFields="[ 'article' ]" >
                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px" md-sort-by="id">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Превью">
                                <thumb-table-cell :path="item.image_path" />
                            </md-table-cell>

                            <md-table-cell md-label="ID изобр.">
                                {{ item.image_id }}
                            </md-table-cell>

                            <md-table-cell md-label="Артикул">
                                <span class="md-subheading">{{ item.article }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Размеры">
                                {{ item.width_cm }} × {{ item.height_cm }}
                            </md-table-cell>

                            <md-table-cell md-label="Текстура">
                                {{ getTextureName(item.texture_id) }}
                            </md-table-cell>

                            <md-table-cell md-label="Без скидки">
                                {{ getFormatOldPrice(item) }}
                            </md-table-cell>

                            <md-table-cell md-label="Скидка">
                                <span class="md-subheading">{{ item.discount }} %</span>
                            </md-table-cell>

                            <md-table-cell md-label="Со скидкой">
                                <span class="md-subheading">{{ getPrice(item) }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <control-button title="Выставить на продажу"
                                                    icon="storefront"
                                                    color="md-info"
                                                    @click="onSell(item)" />

                                    <router-button-link
                                        title="Редактировать"
                                        icon="create"
                                        color="md-success"
                                        :to="{ name: 'cms.store.sales.edit',params: { id: item.id } }" />

                                    <control-button title="Удалить"
                                                    icon="delete"
                                                    color="md-danger"
                                                    @click="onDelete(item)" />
                                </div>
                            </md-table-cell>

                        </template>
                    </v-extended-table>

                </template>

            </tabs>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import { pageTitle, authCheck } from '@/mixins/base'
import { deleteMethod } from '@/mixins/crudMethods'
import Tabs from '@/custom_components/Tabs.vue'
import VExtendedTable from "@/custom_components/Tables/VExtendedTable";
import TableActions from "@/custom_components/Tables/TableActions";
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
import swal from "sweetalert2";

export default {
    name: 'SaleList',
    mixins: [ pageTitle, deleteMethod, authCheck ],
    components: {
        Tabs,
        ThumbTableCell,
        VExtendedTable,
        TableActions
    },
    data: () => ({
        activeTab: '',
        currentResourceUrl: '/store/sales/0',
        inOrderResourceUrl: '/store/sales/1',
        soldResourceUrl: '/store/sales/2',
        redirectRoute: { name: 'cms.store' },
        storeModule: 'sales',
        responseData: false
    }),
    created () {
        if (this.$route.params.activeTab) {
            this.activeTab = this.$route.params.activeTab;
        }
        this.getTexturesAction()
            .then(() => {
                this.setPageTitle('Распродажа');
                this.responseData = true;
            })
    },
    methods: {
        ...mapActions({
            changeStatusAction: 'sales/changeStatus',
            togglePublishAction: 'table/togglePublish',
            getTexturesAction: 'textures/getItems'
        }),
        async toSold (item) {
            const response = await this.changeStatusConfirm()
            if (response.value) {
                await this.changeStatusAction({ id: item.id, status: 2 })
                await swal.fire({
                    title: 'Помещено в проданные',
                    text: `Фотопанно арт. № ${item.article}`,
                    timer: 3000,
                    icon: 'success',
                    showConfirmButton: false
                });
            }
        },
        async onSell (item) {
            const response = await this.changeStatusConfirm()
            if (response.value) {
                await this.changeStatusAction({ id: item.id, status: 0 })
                await swal.fire({
                    title: 'Выставлено на продажу',
                    text: `Фотопанно арт. № ${item.article}`,
                    timer: 3000,
                    icon: 'success',
                    showConfirmButton: false
                });
            }
        },
        changeStatusConfirm () {
            return swal.fire({
                title: 'Внимание!',
                text: 'Подтвердите свое действие!',
                icon: 'warning',
                showCancelButton: true,
                customClass: {
                    confirmButton: 'md-button md-success btn-fill',
                    cancelButton: 'md-button md-danger btn-fill'
                },
                confirmButtonText: 'Подтвердить',
                cancelButtonText: 'Отменить',
                buttonsStyling: false
            })
        },
        onDelete (item) {
            return this.delete({
                payload: item.id,
                title: item.article,
                alertText: 'Позиция удалена',
                storeModule: this.storeModule,
                successText: `Арт. № ${item.article}`,
                tableMode: 'table'
            })
        },
        togglePublish (id) {
            this.togglePublishAction(`/store/sales/${id}/publish`);
        },
        getTextureName (id) {
            const texture = this.getTexture(id);

            return texture.name;
        },
        getFormatOldPrice (item) {
            return this.$helpers.getFormatPrice(this.getOldPrice(item));
        },
        getOldPrice ({ width_cm, height_cm, texture_id }) {
            const texture = this.getTexture(texture_id);
            const texturePrice = texture.price;

            return Math.round(width_cm * height_cm / 1000000 * texturePrice) * 100;
        },
        getPrice (item) {
            const oldPrice = this.getOldPrice(item);
            const price = Math.round(oldPrice / 100 * (100 - item.discount));

            return this.$helpers.getFormatPrice(price);
        },
        getTexture (id) {
            return this.$store.getters['textures/getById'](id);
        }
    }
}
</script>
