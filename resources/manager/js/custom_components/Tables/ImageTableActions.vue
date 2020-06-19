<template>
    <div v-if="item" class="table-actions">

        <control-button v-if="remove && !hasCollection"
                        title="Отвязать"
                        icon="remove"
                        color="md-info"
                        @click="onRemove" />

        <router-button-link v-if="hasCollection"
                            title="Коллекция"
                            icon="perm_media"
                            color="md-teal"
                            route="manager.catalog.collections.images"
                            :params="{ id: item.collection.id }" />

        <router-button-link title="Редактировать"
                            icon="edit"
                            color="md-success"
                            route="manager.images.edit"
                            :params="{ id: item.id }" />

        <control-button title="Удалить"
                        icon="delete"
                        :disabled="isCollectionMainImage"
                        color="md-danger"
                        @click="onDelete" />
    </div>
</template>

<script>
    export default {
        name: "ImageTableActions",
        props: {
            item: {
                type: Object,
                default: null
            },
            remove: {
                type: Boolean,
                default: false
            }
        },
        computed: {
          hasCollection () {
              return !!this.item.collection;
          },
          isCollectionMainImage () {
              return this.hasCollection && this.item.id === this.item.collection.main_image_id;
          }
        },
        methods: {
            onDelete () {
                this.$emit('delete', this.item);
            },
            onRemove () {
                this.$emit('remove', this.item.id);
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
