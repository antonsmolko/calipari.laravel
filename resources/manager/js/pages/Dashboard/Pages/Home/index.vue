<template>
    <page-layout :pageId="$config.pagesIds.home">
        <template #modules>
            <h3>Как купить фотообои</h3>
            <purchase-step-list />
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
import PurchaseStepList from "@/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList";

export default {
    name: "HomePage",
    components: {
        PageLayout,
        PurchaseStepList
    }
}
</script>
