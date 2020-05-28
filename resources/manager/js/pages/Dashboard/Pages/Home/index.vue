<template>
    <page-layout
        :fields="fields"
        :item="item">
        <template #modules>
            <h3>Как купить фотообои</h3>
            <purchase-step-list />
        </template>
    </page-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PageLayout from "@/custom_components/Pages/PageLayout";
import PurchaseStepList from "@/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList";
import { pageTitle } from '@/mixins/base'
export default {
    name: "HomePage",
    components: {
        PageLayout,
        PurchaseStepList
    },
    mixins: [ pageTitle ],
    data: () => ({
        responseData: false,
        redirectRoute: 'manager.pages'
    }),
    computed: {
        ...mapState({
            fields: state => state.pages.fields,
            item: state => state.pages.item
        })
    },
    created () {
        this.getItemAction(this.$config.pagesIds.home)
            .then(() => {
                this.setPageTitle(this.fields.title)
                this.responseData = true
            })
            .catch(() => this.$router.push(this.redirectRoute))
    },
    methods: {
        ...mapActions({
            getItemAction: 'pages/getItem'
        })
    }
}
</script>
