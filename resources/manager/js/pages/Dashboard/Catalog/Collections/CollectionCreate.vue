<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :route="redirectRoute.name" title="К списку коллекций" />
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button title="Создать доставку" @click="onCreate"/>
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
                        <div class="md-layout">
                            <div class="md-layout-item md-small-size-100">
                                <v-input title="Заголовок"
                                         icon="title"
                                         name="title"
                                         :vField="$v.title"
                                         :module="storeModule"
                                         :vRules="{ required: true, unique: true, minLength: true }" />
                            </div>
                            <div class="md-layout-item md-small-size-100">
                                <v-input title="Алиас"
                                         icon="code"
                                         name="alias"
                                         :vDelay="true"
                                         :vField="$v.alias"
                                         :module="storeModule"
                                         :vRules="{ required: true, unique: true, minLength: true, alias: true }" />
                            </div>
                        </div>
                        <div class="space-20"></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header icon="category" title="Категории" />
                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-select v-if="topicList.length" title="Темы" placeholder="Выберите темы"
                                          :multiple="true"
                                          name="topics"
                                          :options="topicList"
                                          :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-select v-if="interiorList.length" title="Интерьеры" placeholder="Выберите интерьеры"
                                          :multiple="true"
                                          name="interiors"
                                          :options="interiorList"
                                          :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-select v-if="tagList.length" title="Теги" placeholder="Выберите теги"
                                          :multiple="true"
                                          name="tags"
                                          :options="tagList"
                                          :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-select v-if="ownerList.length" title="Владельцы" placeholder="Выберите владельца"
                                          name="owner_id"
                                          :options="ownerList"
                                          :defaultValue="0"
                                          defaultTitle="Свое"
                                          :module="storeModule" />
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header icon="timeline" title="SEO" />
                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-100">
                                <v-input title="Мета заголовок"
                                         name="meta_title"
                                         :vField="$v.metaTitle"
                                         :maxlength="150"
                                         :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-textarea name="description"
                                            :vField="$v.description"
                                            :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-textarea title="Ключевые слова"
                                            name="keywords"
                                            :vField="$v.keywords"
                                            :module="storeModule" />
                            </div>
                        </div>
                        <div class="space-30"></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import { required, minLength } from 'vuelidate/lib/validators'

    import VSelect from "@/custom_components/VForm/VSelect";
    import { pageTitle } from '@/mixins/base'
    import { createMethod } from '@/mixins/crudMethods'

    export default {
        name: 'CollectionCreate',
        components: { VSelect },
        mixins: [ pageTitle, createMethod ],
        data() {
            return {
                redirectRoute: { name: 'manager.catalog.collections' },
                responseData: false,
                storeModule: 'collections'
            }
        },
        validations: {
            title: {
                required,
                touch: false,
                minLength: minLength(2),
                isUnique (value) {
                    return (value.trim() === '') && !this.$v.title.$dirty || this.isUniqueTitle
                }
            },
            alias: {
                required,
                touch: false,
                testAlias (value) {
                    return value.trim() === '' || (this.$config.ALIAS_REGEXP).test(value);
                },
                minLength: minLength(2),
                isUnique (value) {
                    return ((value.trim() === '') && !this.$v.alias.$dirty) || this.isUniqueAlias
                },
            },
            metaTitle: {
                touch: false
            },
            description: {
                touch: false
            },
            keywords: {
                touch: false
            }
        },
        computed: {
            ...mapState({
                title: state => state.collections.fields.title,
                alias: state => state.collections.fields.alias,
                topics: state => state.collections.fields.topics,
                interiors: state => state.collections.fields.interiors,
                tags: state => state.collections.fields.tags,
                owner: state => state.collections.fields.owner_id,
                metaTitle: state => state.collections.fields.meta_title,
                description: state => state.collections.fields.description,
                keywords: state => state.collections.fields.keywords,
                ownerList: state => state.subCategories.itemsByType.owners
            }),
            topicList () {
                return this.$store.getters['categories/getItemsByType']('topics');
            },
            colorList () {
                return this.$store.getters['categories/getItemsByType']('colors');
            },
            interiorList () {
                return this.$store.getters['categories/getItemsByType']('interiors');
            },
            tagList () {
                return this.$store.getters['categories/getItemsByType']('tags');
            },
            isUniqueTitle() {
                return this.$store.getters['collections/isUniqueTitle'](this.title);
            },
            isUniqueAlias () {
                return this.$store.getters['collections/isUniqueAlias'](this.alias);
            }
        },
        created() {
            this.clearFieldsAction();
            Promise.all([
                this.getItemsAction(),
                this.getCategoriesAction(),
                this.getSubcategoriesAction('owners')
            ])
                .then(() => {
                    this.setPageTitle('Новая коллекция');
                    this.responseData = true;
                })
                .catch(() => this.$router.push(this.redirectRoute));
        },
        methods: {
            ...mapActions({
                getItemsAction: 'collections/getItems',
                clearFieldsAction: 'collections/clearItemFields',
                getCategoriesAction: 'categories/getItems',
                getSubcategoriesAction: 'subCategories/getItemsWithType'
            }),
            onCreate() {
                return this.create({
                    sendData: {
                        title: this.title,
                        alias: this.alias,
                        topics: this.topics,
                        interiors: this.interiors,
                        tags: this.tags,
                        owner_id: this.owner || null,
                        meta_title: this.metaTitle,
                        description: this.description,
                        keywords: this.keywords
                    },
                    title: this.title,
                    successText: 'Коллекция создана!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                })
            }
        }
    }
</script>
