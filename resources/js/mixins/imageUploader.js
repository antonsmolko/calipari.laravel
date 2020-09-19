import $config from '@/config';
import fileApi from "fileapi";
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            addNotificationAction: 'addNotification',
            setLoadingAction: 'setLoading'
        }),
        async processImage (file, width, height) {
            return new Promise((resolve, reject) => {
                const validation = this.imageValidate(file);

                if (!validation.status) {
                    this.addNotificationAction({ message: validation.message })
                    this.setLoadingAction(false);
                    reject(validation.message);
                }

                const reader = new FileReader();

                reader.onload = async (e) => {
                    const image = await this.imageTransform(file, width, height);
                    resolve({ preview: e.target.result, image })
                };

                reader.readAsDataURL(file);
            });

        },
        imageTransform (file, width = 1600, height = 1200)  {
            return new Promise((resolve, reject) => {
                fileApi.Image(file)
                    .resize(width, height, 'max')
                    .get((err, img) => {
                        if (err) {
                            reject(err);
                        }
                        const dataUri = fileApi.toDataURL(img, 'image/jpeg');
                        const image = this.dataURItoBlob(dataUri);

                        resolve(image);
                    });
            });
        },
        imageValidate (file) {
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

            if (file.size > $config.images.maxFileSize * 1048576) {
                return {
                    status: false,
                    message: `Превышен максимально допустимый размер файла ${$config.images.maxFileSize} МБ!`
                }
            }

            return { status: true }
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
        }
    }
}
