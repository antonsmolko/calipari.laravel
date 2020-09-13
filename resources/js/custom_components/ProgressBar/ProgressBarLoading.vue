<template>
    <div class="md-progress-bar__container">
        <md-progress-bar v-show="loading" md-mode="indeterminate"></md-progress-bar>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "ProgressBarLoading",
    computed: {
        ...mapState({
            loading: state => state.loading
        })
    }
}
</script>
