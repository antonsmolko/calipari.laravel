<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <h4 class="card-title">{{ title }}</h4>
            <div class="form-group">
                <div class="file-input">
                    <div v-if="!imageData">
                        <div class="image-container">
                            <resource-image v-if="value" :name="value" :width="400" alt="" />
                            <img v-else :src="$config.imagePlaceholder" alt="">
                        </div>
                    </div>
                    <div v-else class="image-container">
                        <img :src="imageData" alt="" />
                    </div>
                    <div class="button-container">
                        <md-button class="md-success md-just-icon md-fileinput">
                            <template>
                                <md-icon>add_photo_alternate</md-icon>
                                <md-tooltip md-direction="top">Выберите изображение</md-tooltip>
                            </template>
                            <input :type="type" :name="name" @change="onFileChange" />
                        </md-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import ResourceImage from "@/custom_components/Images/ResourceImage";
import imageUploader from '@/mixins/imageUploader'

export default {
    name: 'setting-image',
    components: { ResourceImage },
    mixins: [imageUploader],
    props: {
        title: String,
        name: String,
        value: {
            type: String,
            default: ''
        },
        type: {
            default: 'file',
            type: String
        }
    },
    data: () => ({
        imageData: '',
        width: 1600,
        height: 1200
    }),
    methods: {
        ...mapActions({
            updateAction: 'settings/setImageValue',
            addNotificationAction: 'addNotification'
        }),
        async onFileChange(e) {
            const files = e.target.files || e.dataTransfer.files;

            if (!files.length)
                return;

            const { preview, image } = await this.processImage(files[0], this.width, this.height);
            this.imageData = preview;

            this.updateAction({
                key_name: this.name,
                value: image
            });
        }
    }
}
</script>
