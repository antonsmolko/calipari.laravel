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
                        <h3>{{ formatPrice }}</h3>
                    </div>
                    <md-button class="md-success" :href="`/pdf/label/order-item/${item.id}`">
                        <md-icon>get_app</md-icon> Этикетка
                    </md-button>
                    <md-button class="md-success" :href="`/pdf/layout/order-item/${item.id}`">
                        <md-icon>get_app</md-icon> Макет
                    </md-button>
                </div>
            </template>
        </product-card>
    </div>
</template>

<script>
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
            return getFormatPrice(this.item.price)
        }
    }
}
</script>
