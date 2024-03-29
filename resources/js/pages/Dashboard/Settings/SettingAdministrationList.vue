<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link :to="{ name: 'cms.settings' }" title="В настройки" />
                </md-card-content>
            </md-card>
            <tabs
                :tab-name="['Настройки', 'Группы']"
                :activeTab="activeTab"
                color-button="success">
                <template slot="tab-pane-1">
                    <template v-if="!settingGroups.length">
                        <div class="alert alert-warning mt-3">
                            <span><h3>Сначала создайте Группу!</h3></span>
                        </div>
                    </template>
                    <template v-else>
                        <div class="md-justify-end">
                            <router-button-link
                                title="Создать настройку"
                                icon="add"
                                color="md-success"
                                :to="{ name: 'cms.settings.create' }" />
                        </div>

                        <md-table v-if="settings.length"
                                  :value="settings"
                                  class="paginated-table table-striped table-hover">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">

                                <md-table-cell md-label="#" class="width-small">
                                    {{ item.id }}
                                </md-table-cell>

                                <md-table-cell md-label="Наименование">
                                    <span class="md-subheading">{{ item.display_name }}</span>
                                </md-table-cell>

                                <md-table-cell md-label="Код">
                                    {{ item.key_name }}
                                </md-table-cell>

                                <md-table-cell md-label="Группа">
                                    {{ item.group ? item.group.title : 'Нет группы' }}
                                </md-table-cell>

                                <md-table-cell md-label="Тип">
                                    {{ item.type }}
                                </md-table-cell>

                                <md-table-cell md-label="Действия">

                                    <table-actions :item="item"
                                                   subPath="settings"
                                                   @delete="onDeleteSetting"/>

                                </md-table-cell>
                            </md-table-row>

                        </md-table>

                        <template v-else>
                            <div class="alert alert-info mt-3">
                                <span><h3>У Вас еще нет настроек!</h3></span>
                            </div>
                        </template>
                    </template>
                </template>
                <template slot="tab-pane-2">
                    <div class="md-justify-end">
                        <router-button-link title="Создать группу" icon="add" color="md-success"
                                            :to="{ name: 'cms.settings.groups.create' }" />
                    </div>
                    <md-table v-if="settingGroups.length"
                              :value="settingGroups"
                              class="paginated-table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">

                            <md-table-cell md-label="#" class="width-small">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Заголовок">
                                <span class="md-subheading">{{ item.title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Алиас">
                                {{ item.alias }}
                            </md-table-cell>

                            <md-table-cell md-label="Описание">
                                {{ item.description }}
                            </md-table-cell>

                            <md-table-cell md-label="Настройки">
                                {{ item.settings_count }}
                            </md-table-cell>

                            <md-table-cell md-label="Действия">

                                <table-actions :item="item"
                                               subPath="settings.groups"
                                               @delete="onDeleteGroup"/>

                            </md-table-cell>

                        </md-table-row>
                    </md-table>
                    <template v-else>
                        <div class="alert alert-info mt-3">
                            <span><h3>У Вас еще нет групп!</h3></span>
                        </div>
                    </template>
                </template>
            </tabs>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import VExtendedTable from "@/custom_components/Tables/VExtendedTable";
import TableActions from "@/custom_components/Tables/TableActions";
import Tabs from '@/custom_components/Tabs.vue'

import { pageTitle } from '@/mixins/base'
import { deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'SettingAdministrationList',
    mixins: [ pageTitle, deleteMethod ],
    components: {
        VExtendedTable,
        TableActions,
        Tabs
    },
    data: () => ({
        activeTab: '',
        responseData: false
    }),
    computed: {
        ...mapState({
            settings: state => state.settings.items,
            settingGroups: state => state.settingGroups.items
        }),
    },
    created () {
        if (this.$route.params.activeTab)
            this.activeTab = this.$route.params.activeTab;
        this.getGroupsAction()
            .then(() => this.getItemsWithGroupAction())
            .then(() => {
                this.setPageTitle('Администрирование');
                this.responseData = true;
            })
            .catch(() => this.$router.push({ name: 'cms.settings' }));
    },
    methods: {
        ...mapActions({
            getItemsWithGroupAction: 'settings/getItemsWithGroup',
            getGroupsAction: 'settingGroups/getItems',
        }),
        onDeleteSetting(item) {
            return this.delete({
                payload: item.id,
                title: item.display_name,
                alertText: `настройку «${item.display_name}»`,
                successText: 'Настройка удалена!',
                storeModule: 'settings'
            })
        },
        onDeleteGroup (item) {
            return this.delete({
                payload: item.id,
                title: item.title,
                alertText: `группу «${item.display_name}»`,
                successText: 'Группа удалена!',
                storeModule: 'settingGroups'
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.md-card .md-card-actions{
    border: 0;
    margin-left: 20px;
    margin-right: 20px;
}

.md-table-thumb {
    object-fit: cover;
    width: 200px;
    height: 100px;
}

.md-table-cell-container {
    .md-just-icon {
        margin-left: 5px;
        margin-right: 5px;
    }
}

.md-category-tag {
    display: inline-block;
    padding: 3px 5px;
    background-color: #dddddd;
    border-radius: 3px;
    margin: 3px;
}
</style>
