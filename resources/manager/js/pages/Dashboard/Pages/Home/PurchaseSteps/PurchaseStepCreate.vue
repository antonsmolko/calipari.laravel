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
                                <v-image title="Изображение"
                                         name="image"
                                         :vField="$v.image"
                                         :vRules="{ required: true }"
                                         :module="storeModule" />
                                <text-editor :value="description"
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
    import { createMethod } from '@/mixins/crudMethods'
    import TextEditor from '@/custom_components/Editors/TextEditor'

    export default {
        name: 'PurchaseStepCreate',
        mixins: [
            pageTitle,
            createMethod
        ],
        components: { 'text-editor': TextEditor },
        data() {
            return {
                storeModule: 'purchaseSteps',
                responseData: false,
                redirectRoute: {
                    name: 'manager.pages.home',
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
                required,
                touch: false
            },
            description: {
                touch: false
            }
        },
        computed: {
            ...mapState('purchaseSteps', {
                title: state => state.fields.title,
                image: state => state.fields.image,
                description: state => state.fields.description
            })
        },
        methods: {
            ...mapActions('purchaseSteps', {
                getItemsAction: 'getItems',
                clearFieldsAction: 'clearItemFields'
            }),
            onCreate() {
                return this.create({
                    sendData: {
                        title: this.title,
                        image: this.image,
                        description: this.description
                    },
                    title: this.title,
                    successText: 'Шаг покупки создан!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                })
            }
        },
        created() {
            this.clearFieldsAction();
            this.getItemsAction()
                .then(() => {
                    this.setPageTitle('Новый шаг покупки');
                    this.responseData = true;
                })
                .catch(() => this.$router.push(this.redirectRoute));

        }
    }
</script>
