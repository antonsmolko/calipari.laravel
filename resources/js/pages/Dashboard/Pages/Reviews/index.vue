<template>
    <page-layout :pageId="$config.pagesIds.reviews">
        <template #modules>
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
export default {
    name: "ReviewsPage",
    components: {
        PageLayout
    }
}
</script>
