<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link title="В панель управления"/>
                    <router-button-link v-if="authCheck('settings/administration')"
                                        title="Администрирование" icon="settings" color="md-success"
                                        :to="{ name: 'cms.settings.administration' }" />
                </md-card-content>
            </md-card>
            <template v-if="settingGroups.length">
                <div v-for="(group, index) in settingGroups" :key="index">
                    <md-card>
                        <md-card-header class="md-card-header-text md-card-header-green">
                            <div class="card-text">
                                <h4 class="title">{{ group.title }}</h4>
                            </div>
                        </md-card-header>
                        <md-card-content>
                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-size-25 md-large-size-33 md-medium-size-50 md-xsmall-size-100"
                                     v-for="(setting, index) in group.settings" :key="index">

                                    <setting-image
                                        v-if="setting.type === 'file'"
                                        :title="setting.display_name"
                                        :name="setting.key_name"
                                        :value="setting.value"
                                        :type="setting.file" />

                                    <setting-input
                                        v-else
                                        :title="setting.display_name"
                                        :name="setting.key_name"
                                        :value="setting.value" />

                                </div>
                            </div>
                        </md-card-content>
                    </md-card>
                </div>
            </template>
            <template v-else>
                <div class="alert alert-info">
                    <span><h3>Пока нет настроек сайта!</h3></span>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import SettingInput from '@/custom_components/Settings/SettingInput';
import SettingImage from '@/custom_components/Settings/SettingImage';
import { pageTitle, authCheck } from '@/mixins/base'

export default {
    name: 'SettingList',
    components: {
        SettingInput,
        SettingImage
    },
    mixins: [ pageTitle, authCheck ],
    data: () => ({
        responseData: false
    }),
    computed: {
        ...mapState('settingGroups', {
            settingGroups: state => state.items
        })
    },
    methods: {
        ...mapActions({
            getItemsWithSettingsAction: 'settingGroups/getItemsWithSettings'
        }),
    },
    created () {
        this.getItemsWithSettingsAction()
            .then(() => {
                this.setPageTitle('Конфигурация');
                this.responseData = true;
            })
        .catch(() => this.$router.push({name: 'admin.dashboard'}));
    }
}
</script>

<style lang="scss">
.md-card {
    margin-top: 50px;
}

.width-medium {
    width: 350px;
}
</style>
