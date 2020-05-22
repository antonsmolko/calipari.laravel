<template>
    <page-layout
        :fields="fields"
        :item="item"/>
</template>

<script>
import PageLayout from "@/custom_components/Pages/PageLayout";
import { mapActions, mapState } from "vuex";
import { pageTitle } from '@/mixins/base'
export default {
    name: "HomePage",
    components: { PageLayout },
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
