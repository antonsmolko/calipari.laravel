(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return x.default}}),t.helpers=void 0;var i=M(r(357)),u=M(r(360)),o=M(r(361)),a=M(r(362)),s=M(r(363)),c=M(r(364)),d=M(r(365)),f=M(r(366)),l=M(r(367)),m=M(r(368)),p=M(r(369)),v=M(r(370)),y=M(r(371)),b=M(r(372)),h=M(r(373)),g=M(r(374)),O=M(r(375)),P=M(r(376)),w=M(r(377)),_=M(r(378)),x=M(r(379)),j=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=$();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(45));function $(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return $=function(){return e},e}function M(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},357:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},358:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(359).withParams:r(285).withParams;t.default=n}).call(this,r(135))},359:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},i=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=i}).call(this,r(92))},360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},361:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("numeric",/^[0-9]*$/);t.default=n},362:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},363:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},364:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=i;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},368:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45),i=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=i},369:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},372:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},375:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},4:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"f",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return l})),r.d(t,"g",(function(){return v})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return b}));var n=r(9),i=r.n(n),u=r(34),o=r.n(u);function a(e,t,r,n,i,u,o){try{var a=e[u](o),s=a.value}catch(e){return void r(e)}a.done?t(s):Promise.resolve(s).then(n,i)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var u=e.apply(t,r);function o(e){a(u,n,i,o,s,"next",e)}function s(e){a(u,n,i,o,s,"throw",e)}o(void 0)}))}}var c={methods:{create:function(e){var t=this;return s(i.a.mark((function r(){var n,u,a,s,c,d,f,l,m;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.sendData,u=e.title,a=e.successText,s=e.redirectRoute,c=e.storeModule,d=void 0===c?null:c,f=e.action,l=void 0===f?"store":f,t.$store.commit("SET_LOADING",!0),m=d?"".concat(d,"/"):"",r.next=5,t.$store.dispatch("".concat(m).concat(l),n);case 5:return r.next=7,t.$router.push(s);case 7:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",o.a.fire({title:a,text:"«".concat(u,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return r.stop()}}),r)})))()}}},d={methods:{update:function(e){var t=this;return s(i.a.mark((function r(){var n,u,a,s,c,d,f,l;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.sendData,u=e.title,a=e.successText,s=e.redirectRoute,c=void 0===s?null:s,d=e.storeModule,f=void 0===d?null:d,t.$store.commit("SET_LOADING",!0),l=f?"".concat(f,"/"):"",r.next=5,t.$store.dispatch("".concat(l,"update"),n);case 5:if(!c){r.next=12;break}if(!(window.history.length>1)){r.next=10;break}t.$router.go(-1),r.next=12;break;case 10:return r.next=12,t.$router.push(c);case 12:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",o.a.fire({title:a,text:"«".concat(u,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 14:case"end":return r.stop()}}),r)})))()}}},f={methods:{delete:function(e){var t=this;return s(i.a.mark((function r(){var n,u,o,a,s,c,d,f,l,v,y,b,h,g,O,P;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,u=e.title,o=e.alertText,a=e.successText,s=e.storeModule,c=void 0===s?null:s,d=e.redirectRoute,f=void 0===d?null:d,l=e.tableMode,v=void 0!==l&&l,y=e.action,b=void 0===y?"delete":y,h=e.force,g=void 0!==h&&h,O=c?"".concat(c,"/"):"",P=g?"forceDelete":b,r.next=5,m(o);case 5:if(!r.sent.value){r.next=15;break}return t.$store.commit("SET_LOADING",!0),r.next=10,t.$store.dispatch("".concat(O).concat(P),{payload:n,tableMode:v});case 10:if(!f){r.next=13;break}return r.next=13,t.$router.push(f);case 13:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",p(a,u));case 15:case"end":return r.stop()}}),r)})))()}}},l={methods:{deleteImageByIndex:function(e){var t=this;return s(i.a.mark((function r(){var n,u,o,a,s,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.id,u=e.index,o=e.alertText,a=e.successText,s=e.storeModule,c=void 0===s?null:s,r.next=3,m(o);case 3:if(!r.sent.value){r.next=11;break}return t.$store.commit("SET_LOADING",!0),r.next=8,t.$store.dispatch("".concat(c,"/deleteImageByIndex"),{id:n,index:u});case 8:return t.$store.commit("SET_LOADING",!1),r.next=11,p(a,u);case 11:case"end":return r.stop()}}),r)})))()}}},m=function(e){return o.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},p=function(e,t){return o.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},v={methods:{upload:function(e){var t=this;return s(i.a.mark((function r(){var n,u,a,s,c,d,f;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.images,u=e.type,a=void 0===u?null:u,s=e.id,c=void 0===s?null:s,d=e.storeModule,f=(void 0===d?null:d)||"categories",!n.length){r.next=10;break}if(!c){r.next=8;break}return r.next=6,t.$store.dispatch("".concat(f,"/uploadImages"),{images:n,id:c,type:a});case 6:r.next=10;break;case 8:return r.next=10,t.$store.dispatch("images/store",n);case 10:return r.next=12,o.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return r.abrupt("return",r.sent);case 13:case"end":return r.stop()}}),r)})))()}}},y={methods:{addImages:function(e){var t=this;return s(i.a.mark((function r(){var n,u;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.id,u=e.data,r.next=3,t.$store.dispatch("categories/addSelectedImages",{id:n,data:u});case 3:return r.next=5,t.$router.push({name:"cms.catalog.categories.images",params:{id:n}});case 5:return r.abrupt("return",o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return r.stop()}}),r)})))()}}},b={methods:{addImages:function(e){var t=this;return s(i.a.mark((function r(){var n,u,a,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.type,u=e.id,a=e.data,s=e.redirectRoute,r.next=3,t.$store.dispatch("subCategories/addSelectedImages",{type:n,id:u,data:a});case 3:return r.next=5,t.$router.push(s);case 5:return r.abrupt("return",o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return r.stop()}}),r)})))()}}}},45:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,i=(n=r(358))&&n.__esModule?n:{default:n};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;t.len=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,i.default)({type:e},(function(e){return!o(e)||t.test(e)}))}},718:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r(1),u=r(5),o=r(4);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={name:"PermissionEdit",mixins:[u.b,o.f,o.c],props:{id:{type:[Number,String],required:!0}},data:function(){return{responseData:!1,controlSaveVisibilities:!1,redirectRoute:{name:"cms.permissions"},storeModule:"permissions"}},validations:{name:{required:i.required,touch:!1,minLength:Object(i.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.name.$dirty||this.isUniqueNameEdit},testAlias:function(e){return""===e.trim()||this.$config.ALIAS_REGEXP.test(e)}},displayName:{required:i.required,touch:!1,minLength:Object(i.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.displayName.$dirty||this.isUniqueDisplayNameEdit}},description:{touch:!1}},computed:s(s({},Object(n.d)("permissions",{name:function(e){return e.fields.name},displayName:function(e){return e.fields.display_name},description:function(e){return e.fields.description}})),{},{isUniqueNameEdit:function(){return this.$store.getters["permissions/isUniqueNameEdit"](this.name,this.id)},isUniqueDisplayNameEdit:function(){return this.$store.getters["permissions/isUniqueDisplayNameEdit"](this.displayName,this.id)}}),created:function(){var e=this;Promise.all([this.getItemsAction(),this.getItemAction(this.id)]).then((function(){e.setPageTitle(e.displayName),e.responseData=!0})).then((function(){e.$v.$reset(),e.controlSaveVisibilities=!0})).catch((function(){return e.$router.push(e.redirectRoute)}))},beforeDestroy:function(){this.clearFieldsAction()},methods:s(s({},Object(n.b)("permissions",{getItemsAction:"getItems",getItemAction:"getItem",clearFieldsAction:"clearItemFields"})),{},{onUpdate:function(){return this.update({sendData:{formData:{name:this.name,display_name:this.displayName,description:this.description},id:this.id},title:this.displayName,successText:"Привилегия обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.displayName,alertText:"привилегию «".concat(this.displayName,"»"),successText:"Привилегия удалена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},f=r(0),l=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.responseData?r("div",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",[r("md-card-content",{staticClass:"md-between"},[r("router-button-link",{attrs:{title:"К списку привилегий",to:{name:"cms.permissions"}}}),e._v(" "),r("div",[r("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:e.controlSaveVisibilities&&e.$v.$anyDirty&&!e.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[r("control-button",{attrs:{title:"Сохранить"},on:{click:e.onUpdate}})],1),e._v(" "),r("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:e.onDelete}})],1)],1)],1),e._v(" "),r("progress-bar-loading")],1)]),e._v(" "),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[r("md-card",[r("card-icon-header"),e._v(" "),r("md-card-content",[r("v-input",{attrs:{title:"Имя",icon:"title",name:"display_name",vField:e.$v.displayName,differ:!0,value:e.displayName,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0}}}),e._v(" "),r("v-input",{attrs:{title:"Алиас",icon:"code",name:"name",vField:e.$v.name,differ:!0,value:e.name,module:e.storeModule,vRules:{required:!0,unique:!0,alias:!0,minLength:!0}}}),e._v(" "),r("div",{staticClass:"space-30"})],1)],1)],1),e._v(" "),r("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[r("md-card",[r("md-card-content",[r("v-textarea",{attrs:{name:"description",vField:e.$v.description,differ:!0,value:e.description,module:e.storeModule}}),e._v(" "),r("div",{staticClass:"space-30"})],1)],1)],1)])]):e._e()}),[],!1,null,null,null);t.default=l.exports}}]);