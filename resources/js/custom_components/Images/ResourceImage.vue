<template>
    <img :src="url" alt="">
</template>

<script>
import { getS3ImageUrl } from "@/helpers";
import $config from "@/config"

export default {
    name: "ResourceImage",
    props: {
        name: {
            type: String,
            default: null
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: null
        }
    },
    computed: {
        url () {
            return this.name
                ? getS3ImageUrl({ name: this.name, width: this.width, height: this.height })
                : $config.imagePlaceholder
        }
    }
}
</script>
