<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link
                            :to="{ name: 'cms.catalog.art-collections.images', params: { id } }" />
                        <div v-if="selected.length">
                            <control-button title="Добавить изображения"
                                            icon="check"
                                            @click="addImages" />
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>

        <div class="md-layout">
            <div class="md-layout-item">
                <progress-bar-loading />
                <md-card>
                    <card-icon-header title="Каталог изображений" icon="image" />
                    <md-card-content>
                        <image-list-table :resourceUrl="resourceUrl"
                                          emptyContent="Пока нет других изображений!"
                                          @publish="togglePublish">

                            <template #first-column="{ item }">
                                <md-table-cell md-label="#" md-sort-by="id" style="width: 50px">
                                    {{ item.id }}
                                </md-table-cell>
                            </template>

                            <template #actions-column="{ item }">
                                <md-table-cell md-label="Выбрать">
                                    <md-checkbox v-model="selected" :value="item.id" />
                                </md-table-cell>
                            </template>

                        </image-list-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { pageTitle } from '@/mixins/base'
import ImageListTable from "@/custom_components/Tables/ImageListTable";
import swal from 'sweetalert2'

export default {
    name: 'ExcludedImageList',
    mixins: [pageTitle],
    components: {
        ImageListTable
    },
    props: {
        id: {
            type: [Number, String],
            required: true
        }
    },
    data: () => ({
        storeModule: 'images',
        resourceUrl: `/catalog/art-collections/images/excluded`,
        selected: []
    }),
    created () {
        this.setPageTitle('Изображения каталога доступные для добавления в Арт-коллекцию.')
    },
    methods: {
        ...mapActions({
            getCategoryAction: 'artCollections/getItem',
            togglePublishAction: 'table/togglePublish',
            addSelectedImagesAction: 'artCollections/addSelectedImages'
        }),
        togglePublish (id) {
            this.togglePublishAction(`/images/${id}/publish`);
        },
        addImages () {
            this.addSelectedImagesAction({ id: this.id, data: this.selected })
                .then(() => {
                    this.$router.push({ name: 'cms.catalog.art-collections.images', params: { id: this.id } });

                    return swal.fire({
                        title: 'Изображения добавлены!',
                        text: '',
                        timer: 2000,
                        showConfirmButton: false,
                        icon: 'success'
                    });
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.md-file-input {
    display: none;
}

.md-between {
    display: flex;
    justify-content: space-between;
}
</style>
