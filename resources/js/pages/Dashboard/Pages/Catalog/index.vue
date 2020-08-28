<template>
    <page-layout :pageId="$config.pagesIds.catalog">
        <template #modules>
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
export default {
    name: "CatalogPage",
    components: {
        PageLayout
    }
}
</script>
