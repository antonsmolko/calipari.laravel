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
                                <v-input title="Заголовок"
                                         icon="title"
                                         name="title"
                                         :value="title"
                                         :vField="$v.title"
                                         :maxlength="150"
                                         :differ="true"
                                         :module="storeModule"
                                         :vRules="{ required: true, minLength: true }" />
                                <v-image title="Изображение"
                                         name="image"
                                         :imgDefault="imagePath"
                                         :vField="$v.image"
                                         :differ="true"
                                         :module="storeModule" />
                                <text-editor :value="description"
                                             :vField="$v.description"
                                             :differ="true"
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
    import { required, minLength } from 'vuelidate/lib/validators'

    import { pageTitle } from '@/mixins/base'
    import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

    import TextEditor from '@/custom_components/Editors/TextEditor'

    export default {
        name: 'PurchaseStepEdit',
        components: { 'text-editor': TextEditor },
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
                storeModule: 'homePurchaseSteps',
                responseData: false,
                redirectRoute: {
                    name: 'cms.pages.home',
                    params: { activeTab: 'Модули' }
                }
            }
        },
        validations: {
            title: {
                required,
                touch: false,
                minLength: minLength(2)
            },
            image: {
                touch: false
            },
            description: {
                touch: false
            }
        },
        computed: {
            ...mapState('homePurchaseSteps', {
                title: state => state.fields.title,
                imagePath: state => state.fields.image_path,
                image: state => state.fields.image,
                description: state => state.fields.description
            })
        },
        created () {
            this.getItemAction(this.id)
                .then(() => {
                    this.setPageTitle(`Шаг покупки «${this.title}»`);
                    this.responseData = true;
                })
                .then(() => this.$v.$reset())
                .catch(() => this.$router.push(this.redirectRoute));
        },
        methods: {
            ...mapActions('homePurchaseSteps', {
                getItemAction: 'getItem',
                clearFieldsAction: 'clearItemFields'
            }),
            onUpdate () {
                return this.update({
                    sendData: {
                        formData: {
                            title : this.title,
                            image : this.image,
                            description: this.description
                        },
                        id: this.id
                    },
                    title: this.title,
                    successText: 'Шаг покупки обновлен!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                });
            },
            onDelete () {
                this.delete({
                    payload: this.id,
                    title: this.title,
                    alertText: `шаг покупки «${this.title}»`,
                    successText: 'Шаг покупки удален!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                })
            }
        }
    }
</script>
