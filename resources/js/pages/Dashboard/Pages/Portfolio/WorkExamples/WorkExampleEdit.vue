<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" title="Назад" />
                        <div>
                            <slide-y-down-transition v-show="$v.$anyDirty && !$v.$invalid">
                                <control-button @click="onUpdate" />
                            </slide-y-down-transition>
                            <control-button title="Удалить" icon="delete" color="md-danger" @click="onDelete" />
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header />
                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <v-input title="Заголовок"
                                         icon="title"
                                         name="title"
                                         :value="title"
                                         :module="storeModule"
                                         :differ="true"
                                         :maxlength="150"
                                         :vField="$v.title"
                                         :vRules="{ required: true, minLength: true }" />

                                <VDatepicker
                                    :value="date"
                                    modelType="number"
                                    :vField="$v.date"
                                    :differ="true"
                                    :vRules="{ required: true, numeric: true }"
                                    :module="storeModule"/>

                                <v-input title="ID изображения"
                                         icon="fingerprint"
                                         name="image_id"
                                         :value="image_id"
                                         :module="storeModule"
                                         :differ="true"
                                         :maxlength="5"
                                         :vField="$v.image_id"
                                         :vRules="{ unique: true, numeric: true }" />

                                <v-image title="Изображение"
                                         name="image"
                                         :imgDefault="imagePath"
                                         :vField="$v.image"
                                         :module="storeModule" />
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, minLength, numeric } from 'vuelidate/lib/validators'

import { pageTitle } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

import VDatepicker from "@/custom_components/VForm/VDatepicker";

export default {
    name: 'WorkExampleEdit',
    components: { VDatepicker },
    mixins: [
        pageTitle,
        updateMethod,
        deleteMethod
    ],
    props: {
        id: {
            type: [ Number, String ],
            required: true
        }
    },
    data: () => ({
        storeModule: 'workExamples',
        responseData: false,
        redirectRoute: {
            name: 'cms.pages.portfolio',
            params: { activeTab: 'Модули' }
        }
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2)
        },
        image: {
            touch: false
        },
        date: {
            required,
            numeric,
            touch: false
        },
        image_id: {
            numeric,
            isUnique (value) {
                return value && !this.$v.image_id.$dirty || this.isUniqueImageId
            },
            touch: false
        }
    },
    computed: {
        ...mapState('workExamples', {
            title: state => state.fields.title,
            date: state => state.fields.date,
            image: state => state.fields.image,
            imagePath: state => state.fields.image_path,
            image_id: state => state.fields.image_id,
        }),
        isUniqueImageId() {
            return this.$store.getters['workExamples/isUniqueImageIdEdit'](this.image_id);
        }
    },
    created () {
        this.clearFieldsAction();
        Promise.all([
            this.getItemAction(this.id),
            this.getItemsAction()
        ])
            .then(() => {
                this.setPageTitle(`Работа «${this.title}»`);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions('workExamples', {
            getItemAction: 'getItem',
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearItemFields'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    formData: {
                        title: this.title,
                        date: this.date,
                        image_id: this.image_id,
                        image: this.image
                    },
                    id: this.id
                },
                title: this.title,
                successText: 'Работа обновлена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            this.delete({
                payload: this.id,
                title: this.title,
                alertText: `работа «${this.title}»`,
                successText: 'Работа удалена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>
