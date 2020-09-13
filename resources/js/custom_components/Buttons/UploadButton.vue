<template>
    <div class="upload-button">
        <input class="md-file-input" type="file" multiple @change="onChange" ref="fileInput" name="images[]">
        <md-button class="md-success md-just-icon"
                   @click="$refs.fileInput.click()"
                   :disabled="disabled">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="right">Загрузить изображения</md-tooltip>
        </md-button>
    </div>
</template>

<script>
export default {
    name: "UploadButton",
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onChange (event) {
            this.$emit('change', event);
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
