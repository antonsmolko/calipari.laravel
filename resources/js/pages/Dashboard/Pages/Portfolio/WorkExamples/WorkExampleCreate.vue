<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link
                            :route="redirectRoute.name"
                            :params="redirectRoute.params"
                            title="Назад" />
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button @click="onCreate" />
                        </slide-y-down-transition>
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
                                         :module="storeModule"
                                         :maxlength="150"
                                         :vField="$v.title"
                                         :vRules="{ required: true, minLength: true }" />

                                <VDatepicker
                                    :vField="$v.date"
                                    modelType="number"
                                    :vRules="{ required: true }"
                                    :module="storeModule"/>

                                <v-input title="ID изображения"
                                         icon="fingerprint"
                                         name="image_id"
                                         :module="storeModule"
                                         :maxlength="5"
                                         :vField="$v.image_id"
                                         :vRules="{ unique: true, numeric: true }" />

                                <v-image title="Изображение"
                                         name="image"
                                         :vField="$v.image"
                                         :vRules="{ required: true }"
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
    import { required, numeric, minLength } from 'vuelidate/lib/validators'
    import { pageTitle } from '@/mixins/base'
    import { createMethod } from '@/mixins/crudMethods'
    import VDatepicker from "@/custom_components/VForm/VDatepicker";

    export default {
        name: 'WorkExampleCreate',
        components: {
            VDatepicker
        },
        mixins: [
            pageTitle,
            createMethod
        ],
        data: () => ({
            responseData: false,
            storeModule: 'workExamples',
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
                required,
                touch: false
            },
            date: {
                numeric,
                required,
                touch: false
            },
            image_id: {
                numeric,
                isUnique (value) {
                    return (value.toString().trim() === '') && !this.$v.image_id.$dirty || this.isUniqueImageId
                },
                touch: false
            }
        },
        computed: {
            ...mapState('workExamples', {
                title: state => state.fields.title,
                date: state => state.fields.date,
                image: state => state.fields.image,
                image_id: state => state.fields.image_id,
            }),
            isUniqueImageId() {
                return this.$store.getters['workExamples/isUniqueImageId'](this.image_id);
            }
        },
        created() {
            this.clearFieldsAction();
            this.getItemsAction()
                .then(() => {
                    this.setPageTitle('Новый пример работы');
                    this.responseData = true;
                })
                .catch(() => this.$route.push(this.redirectRoute));
        },
        methods: {
            ...mapActions('workExamples', {
                getItemsAction: 'getItems',
                clearFieldsAction: 'clearItemFields'
            }),
            onCreate() {
                return this.create({
                    sendData: {
                        title: this.title,
                        date: this.date,
                        image_id: this.image_id,
                        image: this.image
                    },
                    title: this.title,
                    successText: 'Работа создана!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                })
            }
        }
    }
</script>
