<template>
    <div>
        <h4 class="card-title">{{ title }}</h4>
        <ckeditor
            :editor="editor"
            :config="editorConfig"
            :value="value"
            @input="onInput"/>
    </div>
</template>

<script>
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import InsertImage from '@/custom_components/Editors/InsertImagePlugin';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default {
    props: {
        title: {
            type: String,
            default: 'Описание'
        },
        value: {
            type: String
        },
        name: {
            type: String,
            default: 'description'
        },
        vField: {
            type: Object,
            default: null
        },
        module: {
            type: String,
            default: null
        },
        differ: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        editor: ClassicEditor,
        editorConfig: {
            plugins: [
                Image,
                InsertImage,
                ImageCaption,
                ImageToolbar,
                ImageStyle,
                ImageResize,
                EssentialsPlugin,
                BoldPlugin,
                ItalicPlugin,
                LinkPlugin,
                ParagraphPlugin,
                List,
                Heading,
                MediaEmbed
            ],
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'link',
                    'insertImage',
                    '|',
                    'undo',
                    'redo',
                    '|',
                    'mediaEmbed'
                ]
            },
            image: {
                // You need to configure the image toolbar, too, so it uses the new style buttons.
                toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],

                styles: [
                    // This option is equal to a situation where no style is applied.
                    'full',

                    // This represents an image aligned to the left.
                    'alignLeft',

                    // This represents an image aligned to the right.
                    'alignRight'
                ]
            },
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                ]
            },
            mediaEmbed: {
                previewsInData: true
            }
        },
        valueReference: ''
    }),
    computed: {
        storeModule () {
            return this.module ? `${this.module}/` : '';
        }
    },
    methods: {
        onInput (value) {
            if (this.vField)
                this.touched(this.vField, value);

            this.$store.dispatch(`${this.storeModule}setItemField`, {
                field: this.name,
                value: value.trim()
            });
        },
        isDiffer (a, b) {
            return a !== b;
        },
        touchedDifferent (v, value) {
            this.isDiffer(value, this.valueReference)
                ? v.$touch()
                : v.$reset()
        },
        touched (v, value) {
            this.differ ? this.touchedDifferent(v, value) : v.$touch();
        }
    },
    created () {
        this.valueReference = this.value;
    }
}
</script>

<style lang="scss">
.ck.ck-editor__main>.ck-editor__editable {
    height: 300px;
    &:focus {
        border: 1px solid var(--ck-color-input-border);
        box-shadow: var(--ck-inner-shadow),0 0;
        outline: none;
    }
}
.ck input.ck-input.ck-input-text:focus {
    border: 0;
    box-shadow: none;
}
</style>

