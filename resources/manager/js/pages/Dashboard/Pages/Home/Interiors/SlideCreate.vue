<template>
    <div>
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

                                <v-input title="ID изображения"
                                         icon="fingerprint"
                                         name="image_id"
                                         :module="storeModule"
                                         :differ="true"
                                         :maxlength="5"
                                         :vField="$v.imageId"
                                         :vRules="{ required: true, numeric: true }" />

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
    import { required, numeric } from 'vuelidate/lib/validators'
    import { pageTitle } from '@/mixins/base'
    import { createMethod } from '@/mixins/crudMethods'

    export default {
        name: 'SlideCreate',
        mixins: [
            pageTitle,
            createMethod
        ],
        props: {
            interiorId: {
                type: [Number, String],
                required: true
            }
        },
        data() {
            return {
                storeModule: 'homeInteriors',
                redirectRoute: {
                    name: 'manager.pages.home',
                    params: { activeTab: 'Модули' }
                }
            }
        },
        validations: {
            image: {
                required,
                touch: false
            },
            imageId: {
                required,
                numeric,
                touch: false
            }
        },
        computed: {
            ...mapState('homeInteriors', {
                imageId: state => state.fields.image_id,
                image: state => state.fields.image
            })
        },
        methods: {
            ...mapActions('homeInteriors', {
                clearFieldsAction: 'clearItemFields'
            }),
            onCreate() {
                return this.create({
                    sendData: {
                        interior_id: this.interiorId,
                        image_id: this.imageId,
                        image: this.image
                    },
                    title: `К изображению «${this.imageId}»`,
                    successText: 'Слайд создан!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                })
            }
        },
        created() {
            this.clearFieldsAction();
            this.setPageTitle('Новый слайд интерьера');
        }
    }
</script>
