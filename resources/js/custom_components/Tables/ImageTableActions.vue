<template>
    <div v-if="item" class="table-actions">

        <control-button v-if="remove && !hasCollection"
                        title="Отвязать"
                        icon="remove"
                        color="md-info"
                        @click="onRemove" />

        <router-button-link title="Сформировать проект"
                            icon="local_mall"
                            color="md-warning"
                            :to="{ name: 'cms.store.projects.create', params: { imageId: item.id } }"/>

        <router-button-link v-if="hasCollection"
                            title="Коллекция"
                            icon="perm_media"
                            color="md-teal"
                            :to="{ name: 'cms.catalog.color-collections.images', params: { id: item.colorCollection.id } }" />

        <router-button-link title="Редактировать"
                            icon="edit"
                            color="md-success"
                            :to="{ name: 'cms.images.edit', params: { id: item.id } }" />

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
          return Boolean(this.item.colorCollection);
      },
      isCollectionMainImage () {
          return this.hasCollection && this.item.id === this.item.colorCollection.main_image_id;
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
