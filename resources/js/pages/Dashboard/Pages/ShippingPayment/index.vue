<template>
    <page-layout :pageId="$config.pagesIds.shippingPayment">
        <template #modules>
            <work-example-list />
        </template>
    </page-layout>
</template>

<script>
    import PageLayout from "@/custom_components/Pages/PageLayout";
    import WorkExampleList from "@/custom_components/Pages/Portfolio/WorkExampleList";

    export default {
        name: "ShippingPaymentPage",
        components: {
            PageLayout,
            WorkExampleList
        }
    }
</script>
