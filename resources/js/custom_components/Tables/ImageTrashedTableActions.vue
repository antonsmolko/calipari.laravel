<template>
    <div v-if="item" class="table-actions">

        <control-button title="Восстановить"
                        icon="restore_from_trash"
                        color="md-info"
                        @click="onRestore" />

        <control-button v-if="deleteEnabled"
                        title="Удалить"
                        icon="delete_forever"
                        color="md-danger"
                        @click="onDelete" />
    </div>
</template>

<script>
    export default {
        name: "ImageTrashedTableActions",
        props: {
            item: {
                type: Object,
                default: null
            },
            deleteEnabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onDelete () {
                this.$emit('delete', this.item);
            },
            onRestore () {
                this.$emit('restore', this.item.id);
            }
        }
    }
</script>

<style scoped>
    .table-actions {
        display: flex;
        justify-content: flex-end;
    }
</style>
