<template>
    <div>
        <div class="md-between">
            <h3>Блог</h3>
            <router-button-link title="Создать статью" icon="add" color="md-success"
                                route="manager.pages.blog.posts.create" />
        </div>
        <tabs
            :tab-name="['Гид', 'Новости', 'Акции', 'События']"
            :activeTab="activePostTab"
            color-button="success">
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
    </div>
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
