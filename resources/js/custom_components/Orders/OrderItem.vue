<template>
    <div class="tm-order-item mb-5">
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
                <div class="md-order-item__details-item" v-if="item.filter">
                    <span class="card-title">Эффекты:</span>
                    <span class="md-body-2">{{ item.filter }}</span>
                </div>
                <div class="md-order-item__details-item">
                    <span class="card-title">Количество:</span>
                    <span class="md-body-2">{{ item.qty }}</span>
                </div>
                <template v-if="item.added_costs_amount">
                    <div class="space-10"></div>
                    <div class="md-order-item__details-item"
                         v-for="([key, value], index) in addedCostsEntries"
                         :key="index">
                        <span class="card-title">{{ key }}:</span>
                        <span class="md-body-2">{{ getPrice(value) }} </span>
                    </div>
                </template>

                <div class="md-order-item__details-item">
                    <span class="card-title">Цена за ед.:</span>
                    <span class="md-body-2">{{ getPrice(item.price) }}</span>
                </div>
            </div>
            <template slot="footer">
                <div class="tm-order-item__footer-content">
                    <div class="price">
                        <h3>{{ formatPrice }}</h3>
                    </div>
                    <md-button class="md-success" @click="downloadLabel">
                        <md-icon>get_app</md-icon> Этикетка
                    </md-button>
                    <md-button class="md-success" @click="downloadLayout">
                        <md-icon>get_app</md-icon> Макет
                    </md-button>
                </div>
            </template>
        </product-card>
    </div>
</template>

<script>
import toPairs from 'lodash/toPairs';
import ProductCard from "@/components/Cards/ProductCard";
import { getFormatPrice } from "@/helpers";

export default {
    name: "OrderItem",
    components: { ProductCard },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        formatPrice () {
            const totalItemPrice = this.item.price * this.item.qty + this.item.added_costs_amount;
            return getFormatPrice(totalItemPrice);
        },
        addedCostsEntries () {
            return toPairs(this.item.added_costs);
        }
    },
    methods: {
        downloadLabel () {
          this.$emit('downloadLabel', this.item.id)
        },
        downloadLayout () {
            this.$emit('downloadLayout', this.item.id)
        },
        getPrice (amount) {
            return getFormatPrice(amount);
        }
    }
}
</script>
