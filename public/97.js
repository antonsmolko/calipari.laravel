(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{759:function(t,e,n){"use strict";n.r(e);var a=n(9),r=n.n(a);function s(t,e,n,a,r,s,o){try{var i=t[s](o),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(a,r)}var o={name:"Login",components:{LockCard:n(67).c},data:function(){return{email:null,password:null}},methods:{login:function(){var t,e=this;return(t=r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$auth.redirect(),t.next=3,e.$auth.login({data:{email:e.email,password:e.password},redirect:{name:n?n.from.name:"cms.dashboard"},error:function(t){return e.$store.commit("UPDATE_ERRORS",t.response)},rememberMe:!0,fetchUser:!0}).catch((function(t){return t}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){s(o,a,r,i,l,"next",t)}function l(t){s(o,a,r,i,l,"throw",t)}i(void 0)}))})()}}},i=n(0),l=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-layout text-center"},[n("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[n("lock-card",[n("form",{attrs:{slot:"content"},on:{submit:function(e){return e.preventDefault(),t.login(e)}},slot:"content"},[n("h3",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("Вход")]),t._v(" "),n("md-field",[n("label",[t._v("Email")]),t._v(" "),n("md-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("md-field",[n("label",[t._v("Пароль")]),t._v(" "),n("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("md-button",{staticClass:"md-success md-round",attrs:{type:"submit"}},[t._v("Войти")])],1)])],1)])}),[],!1,null,null,null);e.default=l.exports}}]);