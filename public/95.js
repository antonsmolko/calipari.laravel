(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{760:function(t,a,e){"use strict";e.r(a);var s=e(175),i=e.n(s),o={props:{backgroundColor:{type:String,default:"black"}},data:function(){return{logo:"/img/svg/calipari.svg"}},computed:{setBgImage:function(){return{backgroundImage:"url(".concat({login:"/img/bg/bg-login.jpg",404:"/img/bg/bg-notfound.jpg",403:"/img/bg/bg-forbidden.jpg"}[this.pageName],")")}},pageName:function(){return i()(this.$route.name.split("."))}}},r=e(0),n=Object(r.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"full-page"},[a("notifications",{attrs:{timeout:7e3}}),this._v(" "),a("md-toolbar",{staticClass:"md-transparent md-toolbar-absolute",attrs:{"md-elevation":"0"}},[a("div",{staticClass:"md-toolbar-row md-offset md-flex-center "},[a("div",[a("img",{staticClass:"img tm-width-logo",attrs:{slot:"content",src:this.logo},slot:"content"})])])]),this._v(" "),a("div",{staticClass:"wrapper wrapper-full-page"},[a("div",{staticClass:"page-header header-filter",style:this.setBgImage,attrs:{"filter-color":"black"}},[a("div",{staticClass:"container md-offset"},[a("router-view")],1)])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);