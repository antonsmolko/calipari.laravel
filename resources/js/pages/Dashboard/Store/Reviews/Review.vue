<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item md-size-100">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link :to="redirectRoute" title="К списку отзывов" />
                    <control-button
                        v-if="authCheck('reviews-delete')"
                        title="Удалить"
                        @click="onDelete"
                        icon="delete"
                        class="md-danger" />
                </md-card-content>
            </md-card>
        </div>
        <div class="md-layout-item md-size-100">
            <md-card>
                <card-icon-header title="Отзыв" icon="grading"/>
                <md-card-content>
                    <md-table :value="reviewData" class="tm-order-item__table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                            <md-table-cell class="tm-width-1-2"><h4 class="card-title mb-0 mt-0">{{ item.title }}</h4></md-table-cell>
                            <md-table-cell><span class="md-title"><small>{{ item.content }}</small></span></md-table-cell>
                        </md-table-row>
                    </md-table>

                    <template v-if="review.images">
                        <div class="md-layout md-gutter mt-2">
                            <div class="md-layout-item" v-for="(image, index) in review.images" :key="index">
                                <div class="image-container">
                                    <resource-image
                                        :name="image"
                                        :width="350" />
                                </div>
                            </div>
                        </div>

                    </template>

                    <h4>Опубликовать</h4>
                    <md-switch :value="!review.publish" @change="publish(review.id)" />
                </md-card-content>
            </md-card>
        </div>
        <div class="md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-33 md-xlarge-size-25">
            <order-item
                v-for="item in review.order.items"
                :key="item.id"
                :pdf="false"
                :item="item" />
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
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { getFormatPrice, getArticle, getCurrentStatus } from "@/helpers";
import OrderItem from "@/custom_components/Orders/OrderItem";
import ResourceImage from "@/custom_components/Images/ResourceImage";

import { pageTitle, authCheck } from '@/mixins/base';
import { deleteMethod } from '@/mixins/crudMethods';

export default {
    name: 'Order',
    components: {
        OrderItem,
        ResourceImage
    },
    mixins: [pageTitle, authCheck, deleteMethod],
    props: {
        id: {
            type: [ String, Number ],
            required: true
        }
    },
    data: () =>  ({
        redirectRoute: { name: 'cms.store.reviews' },
        responseData: false,
        controlSaveVisibilities: false,
        storeModule: 'reviews'
    }),
    computed: {
        ...mapState('reviews', {
            review: state => state.item
        }),
        reviewData () {
            return [
                { title: 'Комментарий', content: this.review.comment },
                { title: 'Оценка за качество', content: this.review.quality_rate },
                { title: 'Оценка за сервис', content: this.review.service_rate }
            ]
        },
        currentStatus () {
            return getCurrentStatus(this.review.order.statuses);
        },
        baseTableData () {
            return [
                { title: 'Номер', content: this.review.order.number },
                { title: 'Дата', content: this.review.order.date },
                { title: 'Статус', content: this.currentStatus.title }
            ];
        },
        priceTableData () {
            return [
                { title: 'Цена заказа', content: getFormatPrice(this.review.order.price - this.review.order.delivery.price) },
                { title: 'Цена доставки', content: getFormatPrice(this.review.order.delivery.price) },
                { title: 'Итого', content: getFormatPrice(this.review.order.price) }
            ];
        },
        deliveryTableData () {
            return [
                { title: 'Способ доставки', content: this.review.order.delivery.title },
                { title: 'Регион доставки', content: this.review.order.delivery.locality },
                { title: 'Адресс', content: this.review.order.delivery.address }
            ];
        },
        customerTableData () {
            return [
                { title: 'Имя', content: this.review.order.customer.name },
                { title: 'Email', content: this.review.order.customer.email },
                { title: 'Телефон', content: this.review.order.customer.phone },
                { title: 'Комментарий к заказу', content: this.review.order.comment || '-' }
            ];
        },
        userTableData () {
            const user = this.review.order.user
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
        this.getItemAction(this.id)
            .then(() => {
                this.setPageTitle(`Отзыв на заказ № ${this.review.order.number}`);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            getItemAction: 'reviews/getItem',
            publishAction: 'reviews/publish'
        }),
        onDelete() {
            return this.delete({
                payload: this.id,
                title: this.title,
                alertText: `отзыв на заказ № «${this.review.order.number}»`,
                successText: 'Отзыв удален!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
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
        publish () {
            this.publishAction(this.id);
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
.image-container {
    max-width: 350px;
    min-width: 200px;
}
</style>
