<template>
    <div class="md-layout">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link
                        title="К списку заказов"
                        :route="redirectRoute.name"
                        :params="{ id }"/>
                    <div>
                        <slide-y-down-transition v-show="$v.$anyDirty && !$v.$invalid">
                            <control-button title="Сделать возврат" @click="refund" />
                        </slide-y-down-transition>
                    </div>
                </md-card-content>
            </md-card>
        </div>

        <div class="md-layout-item">
            <md-card>
                <md-card-content>
                    <div class="form-group">
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
                                 :placeholder="`До ${availableRefundAmount} ₽`"
                                 :maxlength="6"
                                 :rangeMin="1"
                                 :rangeMax="availableRefundAmount"
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
                    </div>
                    <div class="space-30"></div>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { numeric, sameAs, requiredIf, between } from 'vuelidate/lib/validators'

import { pageTitle } from '@/mixins/base';
import swal from "sweetalert2";

export default {
    name: 'OrderRefund',
    mixins: [pageTitle],
    props: {
        id: {
            type: [ String, Number ],
            required: true
        }
    },
    data () {
        return {
            redirectRoute: { name: 'cms.store.orders.order', params: { id: this.id } },
            storeModule: 'orders'
        }
    },
    validations() {
        return {
            paymentId: {
                touch: false
            },
            refundAmount: {
                required: requiredIf(function () {
                    return this.refundEnabled
                }),
                between: between(1, this.availableRefundAmount),
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
        refundAvailable () {
            return this.order.paid && (this.availableRefundAmount > 0)
        },
        availableRefundAmount () {
            const amount = this.order.price - Number(this.order.refund_amount);

            return amount > 0 ? amount : 0;
        }
    },
    async created() {
        await this.getItemAction(this.id)
            .then(() => {
                if (!this.refundAvailable) {
                    this.$router.push(this.redirectRoute)

                    return swal.fire({
                        title: `Заказ № ${this.order.number} не может быть возмещен!`,
                        text: 'Еще не оплачен или уже полностью возмещен',
                        timer: 5000,
                        icon: 'danger',
                        showConfirmButton: false
                    })
                }
                this.setPageTitle(`Возмещение заказа № ${this.order.number}`);
            })
            .catch(() => this.$router.push(this.redirectRoute));

        this.setOrderFieldsAction({
            comparedPaymentId: '',
            refundAmount: this.availableRefundAmount,
            refundReason: '',
        });
    },
    beforeDestroy () {
        this.setOrderFieldsAction({
            comparedPaymentId: '',
            refundAmount: 0,
            refundReason: '',
        })
    },
    methods: {
        ...mapActions({
            getStatusesAction: 'orderStatuses/getItems',
            getItemAction: 'orders/getItem',
            refundAction: 'orders/refund',
            setOrderFieldAction: 'orders/setItemField',
            setOrderFieldsAction: 'orders/setItemFields'
        }),
        refund () {
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
                                this.$router.push(this.redirectRoute)

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
        }
    }
}
</script>
