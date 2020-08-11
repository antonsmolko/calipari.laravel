<template>
    <div v-if="responseData">
        <md-card>
            <md-card-header class="md-card-header-text md-card-header-green">
                <div class="card-text">
                    <h4 class="title">Контактные данные</h4>
                </div>
            </md-card-header>
            <md-card-content>
                <setting-input
                    title="Телефон компании"
                    name="company_phone"
                    icon="phone"
                    :value="settings.company_phone" />
                <setting-input
                    title="Email компании"
                    icon="email"
                    name="company_email"
                    :value="settings.company_email" />
            </md-card-content>
        </md-card>
        <div class="space-1"></div>
        <md-card>
            <md-card-header class="md-card-header-text md-card-header-green">
                <div class="card-text">
                    <h4 class="title">Социальные сети</h4>
                </div>
            </md-card-header>
            <md-card-content>
                <setting-input
                    title="Facebook аккаунт"
                    icon="public"
                    name="facebook_account"
                    :value="settings.facebook_account" />
                <setting-input
                    title="VK аккаунт"
                    icon="public"
                    name="vk_account"
                    :value="settings.vk_account" />
                <setting-input
                    title="Instagram аккаунт"
                    icon="public"
                    name="instagram_account"
                    :value="settings.instagram_account" />
            </md-card-content>
        </md-card>
        <div class="space-1"></div>
        <md-card>
            <md-card-header class="md-card-header-text md-card-header-green">
                <div class="card-text">
                    <h4 class="title">Пункты самовывоза</h4>
                </div>
            </md-card-header>
            <md-card-content>
                <setting-input
                    title="На Московском"
                    icon="location_on"
                    name="pickup_1"
                    :value="settings.pickup_1" />
                <setting-input
                    title="На Кромской"
                    icon="location_on"
                    name="pickup_2"
                    :value="settings.pickup_2" />
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SettingInput from '@/custom_components/Settings/SettingInput';

export default {
    name: "Settings",
    components: {
        SettingInput
    },
    data: () => ({
        responseData: false
    }),
    computed: {
        ...mapState({
            settings: state => state.settings.entries
        })
    },
    async created () {
        await this.getSettingsByGroupsAction({ groups: ['contacts', 'pickups'] });
        this.responseData = true;
    },
    methods: {
        ...mapActions({
           getSettingsByGroupsAction: 'settings/getItemsByGroups'
        })
    }
}
</script>
