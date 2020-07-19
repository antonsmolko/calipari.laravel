import { mapActions } from 'vuex'

export const pageTitle = {
    methods: {
        ...mapActions([
            'setPageTitle'
        ])
    }
}

export const authCheck = {
    methods: {
        authCheck (sector) {
            const roles = this.$helpers.getGates(sector);

            return this.$auth.check(roles);
        }
    }
}
