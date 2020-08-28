<template>
    <tabs
        :tab-name="['Гид', 'Новости', 'Акции', 'События']"
        :activeTab="activePostTab"
        color-button="success">
        <template slot="header-title">
            <div class="md-between md-flex-middle mt-1">
                <h3 class="m-0">Статьи</h3>
                <router-button-link
                    title="Создать работу" icon="add" color="md-success"
                    :to="{ name: 'cms.pages.blog.posts.create' }" />
            </div>
        </template>
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
    data: () => ({
        activePostTab: ''
    }),
    created () {
        if (this.$route.params.activePostTab) {
            this.activePostTab = this.$route.params.activePostTab;
        }
    }
}
</script>
