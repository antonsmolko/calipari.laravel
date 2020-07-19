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
                                <v-input title="ID изображения"
                                         icon="fingerprint"
                                         name="image_id"
                                         :value="imageId"
                                         :module="storeModule"
                                         :differ="true"
                                         :maxlength="5"
                                         :vField="$v.imageId"
                                         :vRules="{ required: true, numeric: true }" />

                                <v-image title="Изображение"
                                         name="image"
                                         :imgDefault="imagePath"
                                         :vField="$v.image"
                                         :vRules="{ required: true }"
                                         :module="storeModule" />

                                <v-input title="Порядок"
                                         icon="sort"
                                         name="order"
                                         :value="order"
                                         type="number"
                                         :module="storeModule"
                                         :maxlength="2"
                                         :differ="true"
                                         :min="1"
                                         :vField="$v.order"
                                         :vRules="{ required: true, numeric: true }" />
                                <div class="space-30"></div>
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
    import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

    export default {
        name: 'InteriorSlideEdit',
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
        data () {
            return {
                storeModule: 'homeInteriors',
                responseData: false,
                redirectRoute: {
                    name: 'cms.pages.home',
                    params: { activeTab: 'Модули' }
                }
            }
        },
        validations: {
            imageId: {
                required,
                touch: false
            },
            image: {
                touch: false
            },
            order: {
                required,
                numeric,
                touch: false
            }
        },
        computed: {
            ...mapState('homeInteriors', {
                imageId: state => state.fields.image_id,
                imagePath: state => state.fields.image_path,
                image: state => state.fields.image,
                order: state => state.fields.order
            })
        },
        created () {
            this.getItemAction(this.id)
                .then(() => {
                    this.setPageTitle(`Слайд интерьера к изображению «${this.image_id}»`);
                    this.responseData = true;
                })
                .then(() => this.$v.$reset())
                .catch(() => this.$router.push(this.redirectRoute));
        },
        methods: {
            ...mapActions('homeInteriors', {
                getItemAction: 'getItem',
                clearFieldsAction: 'clearItemFields'
            }),
            onUpdate () {
                return this.update({
                    sendData: {
                        formData: {
                            image_id : this.imageId,
                            image : this.image,
                            order: this.order
                        },
                        id: this.id
                    },
                    title: `К изображению «${this.imageId}»`,
                    successText: 'Слайд обновлен!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                });
            },
            onDelete () {
                this.delete({
                    payload: {
                        slideId: this.id
                    },
                    title: `К изображению «${this.imageId}»`,
                    alertText: `слайд к изображению «${this.imageId}»`,
                    successText: 'Слайд удален!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                })
            }
        }
    }
</script>
