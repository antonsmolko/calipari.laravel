<template>
    <div class="table-actions" v-if="item">

        <router-button-link title="Редактировать"
                            icon="edit"
                            color="md-success"
                            :disabled="editDisabled"
                            :route="`manager.${subPath}.edit`"
                            :params="{ id: item.id }" />

        <control-button title="Удалить"
                        icon="delete"
                        :disabled="deleteDisabled"
                        color="md-danger"
                        @click="onDelete(item)" />
    </div>
</template>

<script>
    export default {
        name: "TableActions",
        props: {
            item: {
                type: Object,
                default: null
            },
            subPath: {
                type: String,
                required: true
            },
            deleteDisabled: {
                type: Boolean,
                default: false
            },
            editDisabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onDelete(item) {
                this.$emit('delete', item);
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
