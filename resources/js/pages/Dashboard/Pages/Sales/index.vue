<template>
    <page-layout :pageId="$config.pagesIds.sales">
        <template #modules>
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
export default {
    name: "SalesPage",
    components: {
        PageLayout
    }
}
</script>
