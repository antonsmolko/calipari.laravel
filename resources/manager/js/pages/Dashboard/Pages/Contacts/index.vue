<template>
    <page-layout :pageId="$config.pagesIds.contacts">
        <template #modules>
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
export default {
    name: "ContactsPage",
    components: {
        PageLayout
    }
}
</script>
