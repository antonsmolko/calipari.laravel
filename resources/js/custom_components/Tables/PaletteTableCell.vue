<template>
    <div v-if="items.length">
        <md-icon class="md-color-icon" v-for="(item, index) in items" :style="{ color: item.alias }" :key="index" >
            lens
            <md-tooltip md-direction="top">{{ item.title }}</md-tooltip>
        </md-icon>
    </div>
</template>

<script>
export default {
    name: "PaletteTableCell",
    props: {
        items: {
            type: [ Array, Object ],
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
.md-table-row {
    .md-color-icon {
        background: #fafafa;
        border-radius: 50%;
        margin: 1px;
    }
}
</style>
