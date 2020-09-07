<template>
    <div class="tm-order-item mb-5">
        <product-card headerAnimation="false">
            <resource-image
                class="img"
                slot="imageHeader"
                :name="item.image_path"
                :width="600" />
            <h4 slot="title" class="title">
                <span class="card-title">Артикул:</span>
                <span class="md-title"><small>{{ item.article }}</small></span>
            </h4>
            <div slot="description" class="card-description">
                <div class="md-order-item__details-item">
                    <span class="card-title">Ширина:</span>
                    <span class="md-body-2">{{ item.width_cm }} см</span>
                </div>
                <div class="md-order-item__details-item">
                    <span class="card-title">Высота:</span>
                    <span class="md-body-2">{{ item.height_cm }} см</span>
                </div>
                <div class="md-order-item__details-item">
                    <span class="card-title">Фактура:</span>
                    <span class="md-body-2">{{ item.texture }}</span>
                </div>
                <div class="md-order-item__details-item">
                    <span class="card-title">Цена без скидки:</span>
                    <span class="md-body-2">{{ getPrice(item.old_price) }}</span>
                </div>
            </div>
            <template slot="footer">
                <div class="tm-order-item__footer-content">
                    <div class="price">
                        <h3>{{ getPrice(item.selling_price) }}</h3>
                    </div>
                    <template v-if="pdf">
                        <md-button class="md-success" @click="downloadLabel">
                            <md-icon>get_app</md-icon> Этикетка
                        </md-button>
                        <md-button class="md-success" @click="downloadLayout">
                            <md-icon>get_app</md-icon> Макет
                        </md-button>
                    </template>
                </div>
            </template>
        </product-card>
    </div>
</template>

<script>
import ProductCard from "@/components/Cards/ProductCard";
import ResourceImage from "@/custom_components/Images/ResourceImage";
import { getFormatPrice } from "@/helpers";

export default {
    name: "OrderSale",
    components: { ResourceImage, ProductCard },
    props: {
        item: {
            type: Object,
            required: true
        },
        pdf: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        downloadLabel () {
          this.$emit('downloadLabel', { id: this.item.id, article: this.item.article })
        },
        downloadLayout () {
            this.$emit('downloadLayout', { id: this.item.id, article: this.item.article })
        },
        getPrice (amount) {
            return getFormatPrice(amount);
        }
    }
}
</script>
