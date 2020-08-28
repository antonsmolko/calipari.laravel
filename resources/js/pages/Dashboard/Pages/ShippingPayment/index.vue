<template>
    <page-layout :pageId="$config.pagesIds.shippingPayment">
        <template #modules>
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";

export default {
    name: "ShippingPaymentPage",
    components: {
        PageLayout
    }
}
</script>
