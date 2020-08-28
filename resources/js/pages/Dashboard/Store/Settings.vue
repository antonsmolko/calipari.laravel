<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link title="В панель магазина" :to="{ name: 'cms.store' }"/>
                </md-card-content>
            </md-card>

            <div class="space-1"></div>
            <md-card>
                <md-card-header class="md-card-header-text md-card-header-green">
                    <div class="card-text">
                        <h4 class="title">Дополнительная стоимость заказа</h4>
                    </div>
                </md-card-header>
                <md-card-content>

                    <setting-input
                        title="Обработка изображения"
                        name="image_processing"
                        icon="tune"
                        :value="settings.image_processing" />

                    <setting-input
                        title="Поиск изображения"
                        icon="image_search"
                        name="image_search"
                        :value="settings.image_search" />

                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SettingInput from '@/custom_components/Settings/SettingInput';

export default {
    name: "Settings",
    components: { SettingInput },
    data: () => ({
        responseData: false
    }),
    computed: {
        ...mapState({
            settings: state => state.settings.entries
        })
    },
    async created () {
        await this.getSettingsByGroupsAction({ groups: ['order-added-costs'] });
        this.responseData = true;
    },
    methods: {
        ...mapActions({
            getSettingsByGroupsAction: 'settings/getItemsByGroups'
        })
    }
}
</script>
