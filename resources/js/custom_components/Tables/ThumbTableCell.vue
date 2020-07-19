<template>
    <div v-if="path">
        <resource-image
            class="md-table-thumb img-raised rounded"
            :style="`width: ${width}px; height: ${width*0.6}px`"
            :src="path"
            :width="width*2"/>
    </div>
</template>

<script>
import ResourceImage from "@/custom_components/Images/ResourceImage";
export default {
    name: "ThumbTableCell",
    components: {
        ResourceImage
    },
    props: {
        path: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 100
        }
    }
}
</script>

<style scoped>
.img-raised {
    object-fit: cover;
}
</style>
