<template>
    <div class="full-page">
        <notifications :timeout="7000" />
        <md-toolbar md-elevation="0" class="md-transparent md-toolbar-absolute">
            <div class="md-toolbar-row md-offset md-flex-center ">
                <div>
                    <img class="img tm-width-logo" slot="content" :src="logo"/>
                </div>
            </div>
        </md-toolbar>
        <div class="wrapper wrapper-full-page">
            <div class="page-header header-filter" filter-color="black" :style="setBgImage">
                <div class="container md-offset">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import last from 'lodash/last'
export default {
    props: {
        backgroundColor: {
            type: String,
            default: 'black'
        }
    },
    data() {
        return {
            logo: '/img/svg/calipari.svg'
        }
    },
    computed: {
        setBgImage() {
            const pageBackgrounds = {
                login: '/img/bg/bg-login.jpg',
                404: '/img/bg/bg-notfound.jpg',
                403: '/img/bg/bg-forbidden.jpg'
            };
            return {
                backgroundImage: `url(${pageBackgrounds[this.pageName]})`
            }
        },
        pageName() {
            return last(this.$route.name.split('.'));
        }
    }
}
</script>
