<template>
    <page-layout :pageId="$config.pagesIds.blog">
        <template #modules>
            <PostTabs />
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
import PostTabs from "@/custom_components/Pages/Blog/PostTabs";

export default {
    name: "BlogPage",
    components: {
        PageLayout,
        PostTabs
    }
}
</script>
