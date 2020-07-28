<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link title="В панель магазина" :route="redirectRoute.name"/>
                </md-card-content>
            </md-card>

            <tabs
                :tab-name="['Текущие заказы', 'Выполненные заказы', 'Отмененные заказы']"
                :activeTab="activeTab"
                color-button="success">
                <template slot="tab-pane-1">
                <v-extended-table :serverPagination="true"
                                  :resourceUrl="currentResourceUrl"
                                  defaultSortOrder="desc"
                                  emptyContent="У Вас еще нет текущих заказов!"
                                  :searchFields="[ 'number', 'date' ]" >

                    <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px" md-sort-by="id">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Номер">
                                <span class="md-subheading">{{ item.number }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Дата" md-sort-by="date">{{ item.date }}</md-table-cell>

                            <md-table-cell md-label="Пользователь">
                                <span v-if="item.email">
                                    {{ item.email }}
                                </span>
                                <span v-else>-</span>
                            </md-table-cell>

                            <md-table-cell md-label="Цена">
                                <span class="md-subheading">{{ item.price }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Доставка">
                                {{ item.delivery }}
                            </md-table-cell>
                            <md-table-cell md-label="Статус">
                                <md-field v-if="getRestItems(item).length">
                                    <md-select
                                        @md-selected="onStatusChange($event, item)"
                                        :value="getCurrentStatus(item).id">
                                        <md-option :value="getCurrentStatus(item).id" :key="getCurrentStatus(item).id">
                                            {{ getCurrentStatus(item).title }}
                                        </md-option>
                                        <md-option v-for="status in getRestItems(item)" :value="status.id" :key="status.id">
                                            {{ status.title }}
                                        </md-option>
                                    </md-select>
                                </md-field>
                                <span v-else class="md-body-1">{{ getCurrentStatus(item).title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <router-button-link title="Подробнее"
                                                        icon="visibility"
                                                        color="md-info"
                                                        :route="`cms.store.orders.order`"
                                                        :params="{ id: item.id }" />

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
                                      :resourceUrl="completedResourceUrl"
                                      defaultSortOrder="desc"
                                      emptyContent="У Вас еще нет выполненных заказов!"
                                      :searchFields="[ 'number', 'date' ]" >
                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Номер" md-sort-by="number">
                                <span class="md-subheading">{{ item.number }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Дата" md-sort-by="date">
                                {{ item.date }}
                            </md-table-cell>

                            <md-table-cell md-label="Пользователь">
                                <span v-if="item.email">
                                    {{ item.email }}
                                </span>
                                <span v-else>-</span>
                            </md-table-cell>

                            <md-table-cell md-label="Цена">
                                <span class="md-subheading">{{ item.price }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Доставка">
                                {{ item.delivery }}
                            </md-table-cell>

                            <md-table-cell md-label="Статус">
                                <span class="md-body-1">{{ getCurrentStatus(item).title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <router-button-link title="Подробнее"
                                                        icon="visibility"
                                                        color="md-info"
                                                        :route="`cms.store.orders.order`"
                                                        :params="{ id: item.id }" />

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
                                      :resourceUrl="canceledResourceUrl"
                                      defaultSortOrder="desc"
                                      emptyContent="У Вас еще нет отмененных заказов!"
                                      :searchFields="[ 'number', 'date' ]" >
                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Номер" md-sort-by="number">
                                <span class="md-subheading">{{ item.number }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Дата" md-sort-by="date">
                                {{ item.date }}
                            </md-table-cell>

                            <md-table-cell md-label="Пользователь">
                                <span v-if="item.email">
                                    {{ item.email }}
                                </span>
                                <span v-else>-</span>
                            </md-table-cell>

                            <md-table-cell md-label="Цена">
                                <span class="md-subheading">{{ item.price }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Доставка">
                                {{ item.delivery }}
                            </md-table-cell>

                            <md-table-cell md-label="Статус">
                                <span class="md-body-1">{{ getCurrentStatus(item).title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <router-button-link title="Подробнее"
                                                        icon="visibility"
                                                        color="md-info"
                                                        :route="`cms.store.orders.order`"
                                                        :params="{ id: item.id }" />

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

import { getCurrentStatus } from "@/helpers";
import { pageTitle } from '@/mixins/base'
import { deleteMethod } from '@/mixins/crudMethods'
import Tabs from '@/custom_components/Tabs.vue'
import VExtendedTable from "@/custom_components/Tables/VExtendedTable";
import TableActions from "@/custom_components/Tables/TableActions";
import swal from "sweetalert2";

export default {
    name: 'OrderList',
    mixins: [ pageTitle, deleteMethod ],
    components: { Tabs, VExtendedTable, TableActions },
    data() {
        return {
            activeTab: '',
            currentResourceUrl: '/store/orders/current',
            completedResourceUrl: '/store/orders/completed',
            canceledResourceUrl: '/store/orders/canceled',
            responseData: false,
            redirectRoute: { name: 'cms.store' },
            storeModule: 'orders'
        }
    },
    created() {
        this.getStatusesAction()
            .then(() => {
                this.setPageTitle('Заказы');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            getStatusesAction: 'orderStatuses/getItems',
            changeStatusAction: 'orders/changeStatus'
        }),
        onStatusChange (value, item) {
            const status = this.getStatusById(value);

            return this.changeStatusConfirm()
                .then(response => {
                    if (response.value) {
                        return this.changeStatusAction({ id: item.id, status: value })
                            .then(() => {
                                return swal.fire({
                                    title: `Заказ № ${item.number} обновлен!`,
                                    text: `Установлен статус «${status.title}»`,
                                    timer: 3000,
                                    icon: 'success',
                                    showConfirmButton: false
                                })
                            });
                    }
                })
        },
        changeStatusConfirm () {
            return swal.fire({
                title: 'Внимание?',
                text: 'Смена статуса вызывает отправку уведомления клиенту!',
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
        onDelete(item) {
            return this.delete({
                payload: item.id,
                title: item.number,
                alertText: `заказ «${item.number}»`,
                storeModule: this.storeModule,
                successText: 'Заказ удален!',
                tableMode: 'table'
            })
        },
        getStatusById (id) {
            return this.$store.getters['orderStatuses/getItemById'](id);
        },
        getRestItems (item) {
            const currentStatus = this.getCurrentStatus(item)

            return this.$store.getters['orderStatuses/getRestItems'](currentStatus.order);
        },
        getCurrentStatus (item) {
            return getCurrentStatus(item.statuses);
        }
    }
}
</script>
