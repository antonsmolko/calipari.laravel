<template>
    <div v-if="items.length">
        <span class="md-category-tag" v-for="(item, index) in items" :key="index">
            {{ item.title }}
        </span>
    </div>
</template>

<script>
export default {
    name: "TagsTableCell",
    props: {
        items: {
            type: [ Array, Object ],
            default: null
        }
    }
}
</script>

<style scoped>
.md-category-tag {
    display: inline-block;
    padding: 3px 4px;
    background-color: #dddddd;
    border-radius: 2px;
    margin: 2px;
    line-height: 1;
    font-size: .85em;
}
</style>
