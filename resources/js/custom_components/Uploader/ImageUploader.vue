<template>
    <div class="upload-button">
        <input class="md-file-input"
               type="file"
               :multiple="multiple"
               @change="onChange"
               ref="fileInput"
               :name="name">
        <md-button class="md-success md-just-icon"
                   @click="$refs.fileInput.click()"
                   :disabled="disabled || loading">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="right">Загрузить изображения</md-tooltip>
        </md-button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import imageUploader from '@/mixins/imageUploader'

export default {
    name: "ImageUploader",
    mixins: [imageUploader],
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
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
        }
    },
    data() {
        return {
            previews: [],
            images: [],
            preview: null,
            image: null
        }
    },
    computed: {
        ...mapState({
            loading: state => state.loading
        }),
        name () {
          return this.multiple ? 'images[]' : 'image';
        }
    },
    methods: {
        ...mapActions({
            setLoadingAction: 'setLoading'
        }),
        async onChange (e) {
            this.setLoadingAction(true);
            const files = e.target.files || e.dataTransfer.files;

            if (!files.length) {
                return null;
            }

            this.multiple
                ? await this.handleMultipleChange(files)
                : await this.handleSingleChange(files[0])
        },
        async handleMultipleChange (files) {
            await this.processMultipleImages(files);

            const previews = [...this.previews];
            const images = [...this.images];

            this.$emit('change', { previews, images });

            this.previews = [];
            this.images = [];
        },
        async handleSingleChange (file) {
            await this.processImage(file);

            const preview = Object.assign({}, this.preview);
            const image = Object.assign({}, this.image);

            this.$emit('change', { preview, image });

            this.preview = null;
            this.image = null;
        },
        async processMultipleImages (files) {
            for (const file of Object.values(files)) {
                const process = await this.processImage(file);
                this.images.push(process.image);
                this.previews.push(process.preview);
            }
        },
        async processSingleImage (file) {
            const { preview, image } = await this.processImage(file, this.width, this.height);
            this.preview = preview;
            this.image = image;
        }
    }
}
</script>

<style scoped>
.upload-button {
    display: inline-block;
}
.md-file-input {
    display: none;
}
</style>
