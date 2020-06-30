<template>
    <page-layout :pageId="$config.pagesIds.home">
        <template #modules>
            <interior-list />
            <div class="space-1"></div>
            <purchase-step-list />
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
import PurchaseStepList from "@/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList";
import InteriorList from "@/custom_components/Pages/Home/Interiors/InteriorList";

export default {
    name: "HomePage",
    components: {
        PageLayout,
        PurchaseStepList,
        InteriorList
    }
}
</script>
