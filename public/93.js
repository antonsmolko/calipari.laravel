(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{745:function(t,n,s){"use strict";s.r(n);var a={components:{LockCard:s(66).c},computed:{isAdmin:function(){var t=this.$auth.check;return t("super_admin")||t("admin")||t("owner")||t("content_manager")}}},e=s(0),o=Object(e.a)(a,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"md-layout text-center"},[s("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[s("lock-card",{staticClass:"md-accent"},[s("md-card-header",{attrs:{slot:"title"},slot:"title"},[s("h2",{staticClass:"m-0"},[t._v("Доступ запрещен!")])]),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t.isAdmin?s("md-button",{staticClass:"md-danger md-round",on:{click:function(n){return t.$router.push({name:"cms.dashboard"})}}},[t._v("В панель управления")]):t._e(),t._v(" "),t.isAdmin?s("md-button",{staticClass:"md-danger md-round",on:{click:function(n){return t.$auth.logout()}}},[t._v("Выйти")]):t._e()],1)],1)],1)])}),[],!1,null,null,null);n.default=o.exports}}]);