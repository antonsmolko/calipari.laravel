<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link :to="redirectRoute" title="К списку заказов" />
                    <div>
                        <slide-y-down-transition v-show="controlSaveVisibilities && $v.$anyDirty && !$v.$invalid">
                            <control-button title="Сохранить" @click="onUpdate" />
                        </slide-y-down-transition>
                        <router-button-link
                            v-if="authCheck('order-refund') && refundAvailable"
                            title="Возместить"
                            icon="money_off"
                            color="md-warning"
                            route="cms.store.orders.order.refund"
                            :params="{ id }" />
                        <md-button class="md-success" @click="downloadDetails">
                            <md-icon>get_app</md-icon> Детализация
                        </md-button>
                        <control-button
                            v-if="authCheck('order-delete')"
                            title="Удалить"
                            @click="onDelete"
                            icon="delete"
                            class="md-danger" />
                    </div>
                </md-card-content>
            </md-card>
        </div>
        <div class="md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-33 md-xlarge-size-25">
            <order-item
                v-for="item in order.items"
                :key="item.id"
                :item="item"
                @downloadLabel="downloadLabel"
                @downloadLayout="downloadLayout"/>
        </div>
        <div class="md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-66 md-xlarge-size-75">
            <md-card>
                <card-icon-header title="Основная информация" icon="info"/>
                <md-card-content>
                    <md-table :value="baseTableData" class="tm-order-item__table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell class="tm-width-1-2"><h4 class="card-title mb-0 mt-0">{{ item.title }}</h4></md-table-cell>
                            <md-table-cell><span class="md-title"><small>{{ item.content }}</small></span></md-table-cell>
                        </md-table-row>
                    </md-table>
                </md-card-content>
            </md-card>
            <md-card>
                <card-icon-header class="mt-3" title="Цена" icon="account_balance_wallet"/>
                <md-card-content>
                    <md-table :value="priceTableData" class="tm-order-item__table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell class="tm-width-1-2"><h4 class="card-title mb-0 mt-0">{{ item.title }}</h4></md-table-cell>
                            <md-table-cell><span class="md-title"><small>{{ item.content }}</small></span></md-table-cell>
                        </md-table-row>
                    </md-table>
                </md-card-content>
            </md-card>
            <md-card>
                <card-icon-header title="Доставка" icon="local_shipping"/>
                <md-card-content>
                    <md-table :value="deliveryTableData" class="tm-order-item__table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell class="tm-width-1-2"><h4 class="card-title mb-0 mt-0">{{ item.title }}</h4></md-table-cell>
                            <md-table-cell><span class="md-title"><small>{{ item.content }}</small></span></md-table-cell>
                        </md-table-row>
                    </md-table>
                </md-card-content>
            </md-card>
            <md-card>
                <card-icon-header title="Получатель" icon="face"/>
                <md-card-content>
                    <md-table :value="customerTableData" class="tm-order-item__table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell class="tm-width-1-2"><h4 class="card-title mb-0 mt-0">{{ item.title }}</h4></md-table-cell>
                            <md-table-cell><span class="md-title"><small>{{ item.content }}</small></span></md-table-cell>
                        </md-table-row>
                    </md-table>
                </md-card-content>
            </md-card>
            <md-card>
                <card-icon-header title="Пользователь" icon="person"/>
                <md-card-content>
                    <md-table v-if="userTableData" :value="userTableData" class="tm-order-item__table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell class="tm-width-1-2"><h4 class="card-title mb-0 mt-0">{{ item.title }}</h4></md-table-cell>
                            <md-table-cell><span class="md-title"><small>{{ item.content }}</small></span></md-table-cell>
                        </md-table-row>
                    </md-table>
                    <span v-else class="md-title"><small>Незарегистрированный</small></span>
                </md-card-content>
            </md-card>
            <md-card>
                <card-icon-header title="Статусы" icon="update"/>
                <md-card-content v-if="restStatuses.length">
                    <h4 class="card-title mb-0">Текущий статус</h4>
                    <md-field v-if="restStatuses.length && currentStatus.alias !== 'canceled'">
                        <md-select
                            @md-selected="onStatusChange"
                            :value="currentStatus.id">
                            <md-option :value="currentStatus.id" :key="currentStatus.id">
                                {{ currentStatus.title }}
                            </md-option>
                            <md-option v-for="status in restStatuses" :value="status.id" :key="status.id">
                                {{ status.title }}
                            </md-option>
                        </md-select>
                    </md-field>
                    <span v-else class="md-title">{{ currentStatus.title }}</span>
                </md-card-content>
                <md-card-content>
                    <md-table
                        md-sort="date"
                        md-sort-order="desc"
                        :value="sortedStatuses"
                        class="tm-order-item__table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell class="tm-width-1-2">
                                <h4 class="card-title mb-0 mt-0">{{ item.title }}</h4>
                            </md-table-cell>
                            <md-table-cell>
                                <span class="md-title"><small>{{ item.date }}</small></span>
                            </md-table-cell>
                        </md-table-row>
                    </md-table>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { getFormatPrice, getArticle, getCurrentStatus } from "@/helpers";
import OrderItem from "@/custom_components/Orders/OrderItem";

import { pageTitle, authCheck } from '@/mixins/base';
import { updateMethod, deleteMethod } from '@/mixins/crudMethods';
import swal from "sweetalert2";

export default {
    name: 'Order',
    components: {
        OrderItem
    },
    mixins: [pageTitle, authCheck, updateMethod, deleteMethod],
    props: {
        id: {
            type: [ String, Number ],
            required: true
        }
    },
    data: () =>  ({
        redirectRoute: { name: 'cms.store.orders' },
        responseData: false,
        storeModule: 'orders',
        controlSaveVisibilities: false
    }),
    computed: {
        ...mapState('orders', {
            order: state => state.item
        }),
        sortedStatuses () {
            return this.$store.getters['orders/getSortedItemStatuses'];
        },
        restStatuses () {
            return this.$store.getters['orderStatuses/getRestItems'](this.currentStatus.order);
        },
        currentStatus () {
            return getCurrentStatus(this.order.statuses);
        },
        baseTableData () {
            return [
                { title: 'Номер', content: this.order.number },
                { title: 'Дата', content: this.order.date },
                { title: 'Статус', content: this.currentStatus.title }
            ];
        },
        priceTableData () {
            return [
                { title: 'Цена заказа', content: getFormatPrice(this.order.price - this.order.delivery.price) },
                { title: 'Цена доставки', content: getFormatPrice(this.order.delivery.price) },
                { title: 'Итого', content: getFormatPrice(this.order.price) }
            ];
        },
        deliveryTableData () {
            return [
                { title: 'Способ доставки', content: this.order.delivery.title },
                { title: 'Регион доставки', content: this.order.delivery.locality },
                { title: 'Адресс', content: this.order.delivery.address }
            ];
        },
        customerTableData () {
            return [
                { title: 'Имя', content: this.order.customer.name },
                { title: 'Email', content: this.order.customer.email },
                { title: 'Телефон', content: this.order.customer.phone },
                { title: 'Комментарий к заказу', content: this.order.comment || '-' }
            ];
        },
        userTableData () {
            const user = this.order.user
            return user
                ? [
                    { title: 'ID', content: user.id},
                    { title: 'Имя', content: user.name},
                    { title: 'Email', content: user.email}
                ]
                : null;
        },
        refundAvailable () {
            return this.order.paid && (this.availableRefundAmount > 0)
        },
        availableRefundAmount () {
            const amount = this.order.price - Number(this.order.refund_amount);

            return amount > 0 ? amount : 0;
        }
    },
    created() {
        Promise.all([
            this.getStatusesAction(),
            this.getItemAction(this.id)
        ])
            .then(() => {
                this.setPageTitle(`Заказ № ${this.order.number}`);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            getStatusesAction: 'orderStatuses/getPublishedItems',
            getItemAction: 'orders/getItem',
            changeStatusAction: 'orders/changeStatus',
            downloadPdfLabelAction: 'orders/downloadPdfLabel',
            downloadPdfLayoutAction: 'orders/downloadPdfLayout',
            downloadPdfDetailsAction: 'orders/downloadPdfDetails',
        }),
        onUpdate() {
            return this.update({
                sendData: {
                    status: this.order.status.id,
                    id: this.id
                },
                title: this.order.number,
                successText: 'Заказ обновлен!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete() {
            return this.delete({
                payload: this.id,
                title: this.title,
                alertText: `заказ № «${this.order.number}»`,
                successText: 'Заказ удален!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        },
        async onStatusChange (value) {
            const status = this.getStatusById(value);

            const response = await this.confirm('Смена статуса вызывает отправку уведомления клиенту!')
            if (response.value) {
                await this.changeStatusAction({
                    id: this.order.id,
                    status: value,
                    list: false
                })
                await swal.fire({
                    title: `Заказ № ${this.order.number} обновлен!`,
                    text: `Установлен статус «${status.title}»`,
                    timer: 2000,
                    icon: 'success',
                    showConfirmButton: false
                });
            }
        },
        confirm (text) {
            return swal.fire({
                title: 'Внимание?',
                text,
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
        getStatusById (id) {
            return this.$store.getters['orderStatuses/getItemById'](id);
        },
        getFormatPrice (price) {
            return getFormatPrice(price);
        },
        getArticle (imageId) {
            return getArticle(imageId);
        },
        downloadLabel (itemId) {
            const fileName = `order-label-${this.order.number}-${itemId}.pdf`;
            this.downloadPdfLabelAction({ itemId, fileName });
        },
        downloadLayout (itemId) {
            const fileName = `order-layout-${this.order.number}-${itemId}.pdf`;
            this.downloadPdfLayoutAction({ itemId, fileName });
        },
        downloadDetails () {
            const fileName = `order-details-${this.order.number}.pdf`;
            this.downloadPdfDetailsAction({ id: this.id, fileName });
        }
    }
}
</script>

<style lang="scss">
.tm-order-item {
    &__table {
        thead {
            display: none;
        }
        td.md-table-cell {
            padding: 0 8px !important;
            height: 40px;
        }
    }
    &__footer-content {
        width: 100%;
        text-align: center;
    }
}
</style>
