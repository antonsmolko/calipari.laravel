<template>
    <page-layout :pageId="$config.pagesIds.portfolio">
        <template #modules>
            <work-example-list />
        </template>
    </page-layout>
</template>

<script>
    import PageLayout from "@/custom_components/Pages/PageLayout";
    import WorkExampleList from "@/custom_components/Pages/Portfolio/WorkExampleList";

    export default {
        name: "PortfolioPage",
        components: {
            PageLayout,
            WorkExampleList
        }
    }
</script>
