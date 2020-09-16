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
import FileApi from 'fileapi'

export default {
    name: "ImageUploader",
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
            const process = await this.processImage(file);
            this.image = process.image;
            this.preview = process.preview;
        },
        async processImage (file) {
            return new Promise((resolve, reject) => {
                const validation = this.validate(file);

                if (!validation.status) {
                    this.$emit('failed', validation);
                    reject();
                }

                const reader = new FileReader();
                let preview = {};

                reader.onload = async (e) => {
                    preview = {
                        name: file.name,
                        size: file.size,
                        content: e.target.result
                    }

                    const image = await this.transform(file);
                    resolve({ preview, image })
                };

                reader.readAsDataURL(file);
            });

        },
        transform (file) {
            return new Promise((resolve, reject) => {
                FileApi.Image(file)
                    .resize(this.width, this.height, 'max')
                    .get((err, img) => {
                        if (err) {
                            reject(err);
                        }
                        const dataUri = FileApi.toDataURL(img, 'image/jpeg');
                        const image = this.dataURItoBlob(dataUri);

                        resolve(image);
                    });
            });
        },
        dataURItoBlob (dataURI) {
            const byteString = atob(dataURI.split(',')[1]);
            const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ab], { type: mimeString });
        },
        validate (file) {
            if (!file) {
                return {
                    status: false,
                    message: 'Ошибка загрузки файла!'
                }
            }

            if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
                return {
                    status: false,
                    message: 'Неправильный формат файла!'
                }
            }

            if (file.size > this.maxFileSize * 1048576) {
                return {
                    status: false,
                    message: `Превышен максимально допустимый размер файла ${this.maxFileSize} МБ!`
                }
            }

            return { status: true }
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
