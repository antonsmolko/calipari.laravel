<template>
    <page-layout :pageId="$config.pagesIds.policy">
        <template #modules>
        </template>
    </page-layout>
</template>

<script>
    import PageLayout from "@/custom_components/Pages/PageLayout";
    export default {
        name: "PolicyPage",
        components: {
            PageLayout
        }
    }
</script>
