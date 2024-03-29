<template>
    <div>
        <h4 class="card-title" v-if="title">{{ title }}</h4>
        <div class="form-group">
            <div class="file-input">
                <div v-if="!imageData">
                    <div class="image-container">
                        <resource-image
                            v-if="imgDefault"
                            :name="imgDefault"
                            :width="300"/>
                        <img v-else :src="$config.imagePlaceholder" alt="">
                    </div>
                </div>
                <div v-else class="image-container">
                    <img :src="imageData" alt="" />
                </div>
                <div class="button-container">
                    <md-button
                        :disabled="disabled || loading"
                        class="md-danger md-just-icon"
                        @click="onFileChange($event, 'remove')"
                        v-if="imageData">
                        <md-icon>undo</md-icon>
                        <md-tooltip md-direction="top">Отменить</md-tooltip>
                    </md-button>
                    <md-button
                        class="md-success md-just-icon md-fileinput"
                        :disabled="disabled || loading">
                        <template>
                            <md-icon>add_photo_alternate</md-icon>
                            <md-tooltip md-direction="top">Выберите изображение</md-tooltip>
                        </template>
                        <input type="file" @change="onFileChange($event)">
                    </md-button>
                    <md-button class="md-danger md-just-icon"
                               @click="onFileChange($event, 'delete')"
                               v-if="imgDefault && withDelete && !imageData"
                               :disabled="disabled || loading" >
                        <md-icon>close</md-icon>
                        <md-tooltip md-direction="top">Удалить</md-tooltip>
                    </md-button>
                </div>
            </div>
            <div class="under-input-notice" v-if="vField && vRules && vField.$error">
                <input-notification-require v-if="!vField.required && vRules.required" :name="title" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { InputNotificationRequire } from '@/custom_components/InputNotifications'
import ResourceImage from "@/custom_components/Images/ResourceImage";
import imageUploader from '@/mixins/imageUploader'

export default {
    name: "VImage",
    components: {
        ResourceImage,
        InputNotificationRequire
    },
    mixins: [imageUploader],
    props: {
        title: {
            type: [String, Boolean],
            default: 'Изображение'
        },
        name: {
            type: String,
            default: 'image'
        },
        maxFileSize: {
            type: Number,
            default: 15
        },
        width: {
            type: Number,
            default: 1600
        },
        height: {
            type: Number,
            default: 1200
        },
        vField: {
            type: Object,
            default: null
        },
        imgDefault: {
            type: String,
            default: null
        },
        vRules: {
            type: Object,
            default: null
        },
        module: {
            type: String,
            default: null
        },
        withDelete: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        imageData: ''
    }),
    computed: {
        ...mapState({
            loading: state => state.loading
        }),
        storeModule () {
            return this.module ? `${this.module}/` : '';
        }
    },
    watch: {
        imgDefault () {
            this.imageData = ''
        }
    },
    methods: {
        onFileChange (e, action = 'change') {
            switch (action) {
                case 'change':
                    this.addImage(e);
                    break;

                case 'remove':
                    this.removeImage();
                    break;

                case 'delete':
                    this.removeImage();
                    this.deleteImage();
                    break;

                default:
                    break;
            }
        },
        async addImage (e) {
            let files = e.target.files || e.dataTransfer.files;

            if (!files.length)
                return;

            const { preview, image } = await this.processImage(files[0], this.width, this.height);
            this.imageData = preview;

            if (this.vField)
                this.vField.$touch();

            this.fileAction(image);
        },
        removeImage () {
            this.imageData = '';

            if (this.vField)
                this.vField.$reset();

            this.fileAction('');
        },
        deleteImage () {
            this.$emit('delete');
        },
        fileAction (value) {
            this.$store.dispatch(`${this.storeModule}setItemField`, { field: this.name, value });
        }
    }
}
</script>
