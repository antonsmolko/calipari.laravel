<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link :route="redirectRoute.name" title="К списку заказов" />
                    <div>
                        <slide-y-down-transition v-show="controlSaveVisibilities && $v.$anyDirty && !$v.$invalid">
                            <control-button title="Сохранить" @click="onUpdate" />
                        </slide-y-down-transition>
                        <control-button title="Удалить" @click="onDelete" icon="delete" class="md-danger" />
                    </div>
                </md-card-content>
            </md-card>
        </div>
        <div class="md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-33 md-xlarge-size-25">
            <div class="tm-order-item mb-5" v-for="item in order.items" :key="item.id">
                <product-card headerAnimation="false">
                    <img class="img" slot="imageHeader" :src="item.thumb" />
                    <h4 slot="title" class="title">
                        <span class="card-title">Артикул:</span>
                        <span class="md-title"><small>{{ item.article }}</small></span>
                    </h4>
                    <div slot="description" class="card-description">
                        <div class="md-order-item__details-item">
                            <span class="card-title">Ширина:</span>
                            <span class="md-body-2">{{ item.width }} см</span>
                        </div>
                        <div class="md-order-item__details-item">
                            <span class="card-title">Высота:</span>
                            <span class="md-body-2">{{ item.height }} см</span>
                        </div>
                        <div class="md-order-item__details-item">
                            <span class="card-title">Фактура:</span>
                            <span class="md-body-2">{{ item.texture }}</span>
                        </div>
                        <div class="md-order-item__details-item">
                            <span class="card-title">Эффекты:</span>
                            <span class="md-body-2">{{ item.filter }}</span>
                        </div>
                        <div class="md-order-item__details-item">
                            <span class="card-title">Количество:</span>
                            <span class="md-body-2">{{ item.qty }}</span>
                        </div>
                    </div>
                    <template slot="footer">
                        <div class="tm-order-item__footer-content">
                            <div class="price">
                                <h3>{{ getFormatPrice(item.price) }}</h3>
                            </div>
                        </div>
                    </template>
                </product-card>
            </div>
        </div>
        <div class="md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-66 md-xlarge-size-75">
            <div class="md-layout-item">
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
                    <card-icon-header class="mt-3"title="Цена" icon="account_balance_wallet"/>
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
                            :value="order.statuses"
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
                <md-card v-if="order.paid">
                    <card-icon-header v-if="!refundEnabled" icon="lock" title="Возврат денежных средств" />
                    <card-icon-header v-else icon="lock_open" title="Возврат денежных средств" color="md-card-header-danger"/>
                    <md-card-content>
                        <md-button v-if="!refundEnabled" class="md-success" @click.native="handleRefundEnable">Вернуть средста покупателю</md-button>
                        <div class="form-group" v-else>
                            <v-input title="ID"
                                     icon="qr_code"
                                     name="paymentId"
                                     :vField="$v.paymentId"
                                     :module="storeModule"
                                     :maxlength="50"
                                     :value="paymentId"
                                     :disabled="true" />

                            <v-input title="Сумма"
                                     icon="payment"
                                     name="refundAmount"
                                     :vField="$v.refundAmount"
                                     :module="storeModule"
                                     :placeholder="`До ${order.price} ₽`"
                                     :maxlength="6"
                                     :rangeMin="1"
                                     :rangeMax="order.price"
                                     :vRules="{ required: true, numeric: true, between: true }" />

                            <v-input title="Причина возврата"
                                     icon="notes"
                                     name="refundReason"
                                     :maxlength="255"
                                     :vField="$v.refundReason"
                                     :module="storeModule" />

                            <v-input title="ID платежа"
                                     placeholder="Скопируйте ID платежа"
                                     icon="qr_code_scanner"
                                     name="comparedPaymentId"
                                     sameName="ID"
                                     :maxlength="50"
                                     :vField="$v.comparedPaymentId"
                                     :module="storeModule"
                                     :vRules="{ sameAs: true }" />

                            <div class="mt-2">
                                <md-button class="md-info" @click.native="cancelRefund">Отменить</md-button>
                                <md-button class="md-danger" @click.native="refundOrder" :disabled="$v.$invalid">Выполнить возврат</md-button>
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { numeric, sameAs, requiredIf, between } from 'vuelidate/lib/validators'
import { getFormatPrice, getArticle, getCurrentStatus } from "@/helpers";

import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
import ProductCard from "@/components/Cards/ProductCard";
import FieldWrap from "@/custom_components/Form/FieldWrap";

import { pageTitle } from '@/mixins/base';
import { updateMethod, deleteMethod } from '@/mixins/crudMethods';
import swal from "sweetalert2";

export default {
    name: 'Order',
    components: {
        ProductCard,
        ThumbTableCell,
        FieldWrap
    },
    mixins: [pageTitle, updateMethod, deleteMethod],
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
        controlSaveVisibilities: false,
        refundEnabled: false
    }),
    validations() {
        return {
            paymentId: {
                touch: false
            },
            refundAmount: {
                required: requiredIf(function () {
                    return this.refundEnabled
                }),
                between: between(1, this.order.price),
                numeric,
                touch: false
            },
            refundReason: {
                touch: false
            },
            comparedPaymentId: {
                sameAs: sameAs('paymentId'),
                touch: false
            }
        }
    },
    computed: {
        ...mapState('orders', {
            order: state => state.item,
            paymentId: state => state.item.payment_id,
            comparedPaymentId: state => state.fields.comparedPaymentId,
            refundAmount: state => state.fields.refundAmount,
            refundReason: state => state.fields.refundReason
        }),
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
        }
    },
    created() {
        Promise.all([
            this.getStatusesAction(),
            this.getItemAction(this.id)
        ])
            .then(() => {
                this.setPageTitle(this.title);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    beforeDestroy () {
        this.setOrderFieldsAction({
            comparedPaymentId: null,
            refundAmount: 0,
            refundReason: '',
        })
    },
    methods: {
        ...mapActions({
            getStatusesAction: 'orderStatuses/getItems',
            getItemAction: 'orders/getItem',
            changeStatusAction: 'orders/changeStatus',
            refundAction: 'orders/refund',
            setOrderFieldAction: 'orders/setItemField',
            setOrderFieldsAction: 'orders/setItemFields'
        }),
        onUpdate() {
            return this.update({
                sendData: {
                    status: this.currentStatus.id,
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
        onStatusChange (value) {
            const status = this.getStatusById(value);

            return this.confirm('Смена статуса вызывает отправку уведомления клиенту!')
                .then(response => {
                    if (response.value) {
                        return this.changeStatusAction({
                            id: this.order.id,
                            status: value,
                            list: false
                        })
                            .then(() => {
                                return swal.fire({
                                    title: `Заказ № ${this.order.number} обновлен!`,
                                    text: `Установлен статус «${status.title}»`,
                                    timer: 2000,
                                    icon: 'success',
                                    showConfirmButton: false
                                })
                            });
                    }
                })
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
        handleRefundEnable () {
            this.setOrderFieldsAction({
                comparedPaymentId: '',
                refundAmount: '',
                refundReason: '',
            });
            this.refundEnabled = true;
        },
        refundOrder () {
            const data = {
                payment_id: this.comparedPaymentId,
                refund_amount: this.refundAmount,
                refund_reason: this.refundReason
            };
            return this.confirm('Возврат средств невозможно отменить!')
                .then(response => {
                    if (response.value) {
                        return this.refundAction({ id: this.id, data })
                            .then(() => {
                                return swal.fire({
                                    title: `Заказ № ${this.order.number} возмещен!`,
                                    text: `Cумма возмещения - ${this.refundAmount} ₽`,
                                    timer: 5000,
                                    icon: 'success',
                                    showConfirmButton: false
                                })
                            });
                    }
                });
        },
        cancelRefund () {
            this.refundEnabled = false;
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
