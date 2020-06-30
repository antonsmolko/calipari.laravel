<template>
    <tabs
        :tab-name="['Гид', 'Новости', 'Акции', 'События']"
        :activeTab="activePostTab"
        color-button="success">
        <template slot="header-title"><h3>Статьи</h3></template>
        <template slot="tab-pane-1">
            <PostList />
        </template>
        <template slot="tab-pane-2">
            <PostList type="news" typeTitle="Новости" />
        </template>
        <template slot="tab-pane-3">
            <PostList type="stocks" typeTitle="Акции" />
        </template>
        <template slot="tab-pane-4">
            <PostList type="events" typeTitle="События" />
        </template>
    </tabs>
</template>

<script>
import Tabs from '@/custom_components/Tabs.vue'
import PostList from "./PostList";

export default {
    name: "PostTabs",
    components: {
        Tabs,
        PostList
    },
    data() {
        return {
            activePostTab: ''
        }
    },
    created() {
        if (this.$route.params.activePostTab)
            this.activePostTab = this.$route.params.activePostTab;
    }
}
</script>
