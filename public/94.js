(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{741:function(t,s,e){"use strict";e.r(s);var n={components:{LockCard:e(67).c},computed:{isAdmin:function(){var t=this.$auth.check;return t("super_admin")||t("admin")||t("owner")||t("content_manager")}}},a=e(0),o=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"md-layout text-center"},[e("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[e("lock-card",[e("md-card-header",{attrs:{slot:"title"},slot:"title"},[e("h2",{staticClass:"m-0"},[t._v("Страница не найдена!")])]),t._v(" "),t.isAdmin?e("md-button",{staticClass:"md-success md-round",attrs:{slot:"footer"},on:{click:function(s){return t.$router.push({name:"cms.dashboard"})}},slot:"footer"},[t._v("В панель управления")]):t._e()],1)],1)])}),[],!1,null,null,null);s.default=o.exports}}]);