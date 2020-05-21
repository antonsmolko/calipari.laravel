<template>
    <div v-if="path">
        <img class="md-table-thumb img-raised rounded"
             :style="`width: ${width}px; height: ${width*0.6}px`"
             :src="url" alt="" >
    </div>
</template>

<script>
    export default {
        name: "ThumbTableCell",
        props: {
            path: {
                type: String,
                required: true
            },
            width: {
                type: Number,
                default: 100
            },
            static: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            url () {
                return this.static ? this.path : `/image/widen/${this.width*1.5}/${this.path}`
            }
        }
    }
</script>

<style scoped>
    .md-table-thumb {
        object-fit: cover;
    }
</style>
