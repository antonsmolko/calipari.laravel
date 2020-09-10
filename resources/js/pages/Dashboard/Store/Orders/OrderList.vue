<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link title="В панель магазина" :to="redirectRoute"/>
                </md-card-content>
            </md-card>

            <tabs
                :tab-name="['Текущие', 'Выполненные', 'Отмененные', 'Возмещенные']"
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
                                <span class="md-subheading">{{ $helpers.getFormatPrice(item.price) }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Доставка">
                                {{ item.delivery }}
                            </md-table-cell>
                            <md-table-cell md-label="Статус">
                                <md-field v-if="getRestItems(item).length">
                                    <md-select
                                        @md-selected="onStatusChange($event, item)"
                                        :value="item.status.id">
                                        <md-option :value="item.status.id" :key="item.status.id">
                                            {{ item.status.title }}
                                        </md-option>
                                        <md-option v-for="status in getRestItems(item)" :value="status.id" :key="status.id">
                                            {{ status.title }}
                                        </md-option>
                                    </md-select>
                                </md-field>
                                <span v-else class="md-body-1">{{ item.status.title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <router-button-link
                                        v-if="authCheck('order-refund') && refundAvailability(item)"
                                        title="Возместить"
                                        icon="money_off"
                                        color="md-warning"
                                        :to="{
                                            name: 'cms.store.orders.order.refund',
                                            params: { id: item.id }
                                        }" />

                                    <router-button-link
                                        title="Подробнее"
                                        icon="visibility"
                                        color="md-info"
                                        :to="{
                                            name: 'cms.store.orders.order',
                                            params: { id: item.id }
                                        }" />

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
                                <span class="md-subheading">{{ $helpers.getFormatPrice(item.price) }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Доставка">
                                {{ item.delivery }}
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">
                                    <router-button-link
                                        v-if="authCheck('order-refund') && refundAvailability(item)"
                                        title="Возместить"
                                        icon="money_off"
                                        color="md-warning"
                                        :to="{
                                            name: 'cms.store.orders.order.refund',
                                            params: { id: item.id }
                                        }" />

                                    <router-button-link
                                        title="Подробнее"
                                        icon="visibility"
                                        color="md-info"
                                        :to="{
                                            name: 'cms.store.orders.order',
                                            params: { id: item.id }
                                        }" />

                                    <control-button v-if="authCheck('order-delete')"
                                                    title="Удалить"
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

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <router-button-link
                                        title="Подробнее"
                                        icon="visibility"
                                        color="md-info"
                                        :to="{
                                            name: 'cms.store.orders.order',
                                            params: { id: item.id }
                                        }" />

                                    <control-button v-if="authCheck('order-delete')"
                                                    title="Удалить"
                                                    icon="delete"
                                                    color="md-danger"
                                                    @click="onDelete(item)" />
                                </div>
                            </md-table-cell>

                        </template>
                    </v-extended-table>

                </template>
                <template slot="tab-pane-4">
                    <v-extended-table :serverPagination="true"
                                      :resourceUrl="refundedResourceUrl"
                                      defaultSortOrder="desc"
                                      emptyContent="У Вас еще нет возмещенных заказов!"
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
                                <span class="md-subheading">{{ $helpers.getFormatPrice(item.price) }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Сумма возмещения">
                                <span class="md-body-1">{{ item.refund_amount }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Причина возмещения">
                                {{ item.refund_reason }}
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <router-button-link
                                        v-if="authCheck('order-refund') && refundAvailability(item)"
                                        title="Возместить"
                                        icon="money_off"
                                        color="md-warning"
                                        :to="{
                                            name: 'cms.store.orders.order.refund',
                                            params: { id: item.id }
                                        }" />

                                    <router-button-link
                                        title="Подробнее"
                                        icon="visibility"
                                        color="md-info"
                                        :to="{
                                            name: 'cms.store.orders.order',
                                            params: { id: item.id }
                                        }" />

                                    <control-button v-if="authCheck('order-delete')"
                                                    title="Удалить"
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
import swal from "sweetalert2";

export default {
    name: 'OrderList',
    mixins: [ pageTitle, deleteMethod, authCheck ],
    components: { Tabs, VExtendedTable, TableActions },
    data: () => ({
        activeTab: '',
        currentResourceUrl: '/store/orders/current',
        completedResourceUrl: '/store/orders/completed',
        canceledResourceUrl: '/store/orders/canceled',
        refundedResourceUrl: '/store/orders/refunded',
        responseData: false,
        redirectRoute: { name: 'cms.store' },
        storeModule: 'orders'
    }),
    created () {
        if (this.$route.params.activeTab) {
            this.activeTab = this.$route.params.activeTab;
        }
        this.getStatusesAction()
            .then(() => {
                this.setPageTitle('Заказы');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            getStatusesAction: 'orderStatuses/getPublishedItems',
            setStatusAction: 'orders/setStatus'
        }),
        async onStatusChange (value, item) {
            const status = this.getStatusById(value);

            const response = await this.changeStatusConfirm()
            if (response.value) {
                await this.setStatusAction({ id: item.id, status: value })
                await swal.fire({
                    title: `Заказ № ${item.number} обновлен!`,
                    text: `Установлен статус «${status.title}»`,
                    timer: 3000,
                    icon: 'success',
                    showConfirmButton: false
                });
            }
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
        onDelete (item) {
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
            return this.$store.getters['orderStatuses/getRestItems'](item.status.order);
        },
        refundAvailability (item) {
            return item.paid && item.price > Number(item.refund_amount);
        }
    }
}
</script>
