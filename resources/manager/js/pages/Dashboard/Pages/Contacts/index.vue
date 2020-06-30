<template>
    <page-layout :pageId="$config.pagesIds.contacts">
        <template #modules>
            <Settings />
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
import Settings from "./settings"
export default {
    name: "ContactsPage",
    components: {
        PageLayout,
        Settings
    }
}
</script>
