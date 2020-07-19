<template>
    <img :src="url" alt="">
</template>

<script>
export default {
    name: "ResourceImage",
    props: {
        src: {
            type: String,
            default: null
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: null
        }
    },
    computed: {
        url () {
            return this.src
                ? `${this.baseUrl}${this.transformationPath}${this.imagePath}`
                : this.$config.imagePlaceholder;
        },
        baseUrl () {
            switch (this.$config.IMAGE_PROVIDER) {
                case 'local':
                    return this.$config.LOCAL_IMAGE_API_ENDPOINT;
                case 's3':
                    return this.$config.S3_IMAGE_API_ENDPOINT;
            }
        },
        transformationPath () {
            switch (this.$config.IMAGE_PROVIDER) {
                case 'local':
                    return this.height
                        ? `/crop/${this.width}/${this.height}`
                        : `/widen/${this.width}`;
                case 's3':
                    const height = this.height ? this.height : this.width * 5;

                    return `/fit-in/${this.width}x${height}`;
            }
        },
        imagePath () {
            switch (this.$config.IMAGE_PROVIDER) {
                case 'local':
                    return `/${this.src}`
                case 's3':
                    return `/${this.src.slice(0,1)}/${this.src.slice(0,3)}/${this.src}`
            }
        }
    }
}
</script>
