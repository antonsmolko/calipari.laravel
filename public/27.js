(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{3:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var i=M(r(328)),u=M(r(331)),o=M(r(332)),s=M(r(333)),a=M(r(334)),c=M(r(335)),d=M(r(336)),l=M(r(337)),f=M(r(338)),m=M(r(339)),p=M(r(340)),v=M(r(341)),y=M(r(342)),h=M(r(343)),b=M(r(344)),g=M(r(345)),P=M(r(346)),_=M(r(347)),O=M(r(348)),w=M(r(349)),j=M(r(350)),$=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=x();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(41));function x(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return x=function(){return e},e}function M(e){return e&&e.__esModule?e:{default:e}}t.helpers=$},328:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(41).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},329:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(330).withParams:r(271).withParams;t.default=n}).call(this,r(129))},330:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},i=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=i}).call(this,r(88))},331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(41).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},332:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(41).regex)("numeric",/^[0-9]*$/);t.default=n},333:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},334:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(41).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},335:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=i;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},336:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},337:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},338:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},339:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41),i=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=i},340:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},341:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},343:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(41).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},344:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},345:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},346:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},347:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},348:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},349:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(41).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},350:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(41).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},4:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"f",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return l})),r.d(t,"g",(function(){return p})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return y}));var n=r(17),i=r.n(n),u=r(52),o=r.n(u);function s(e,t,r,n,i,u,o){try{var s=e[u](o),a=s.value}catch(e){return void r(e)}s.done?t(a):Promise.resolve(a).then(n,i)}var a={methods:{create:function(e){var t=this,r=e.sendData,n=e.title,i=e.successText,u=e.redirectRoute,s=e.storeModule,a=void 0===s?null:s,c=a?"".concat(a,"/"):"";return this.$store.dispatch("".concat(c,"store"),r).then((function(){return window.history.length>1?t.$router.go(-1):t.$router.push(u),o.a.fire({title:i,text:"«".concat(n,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},c={methods:{update:function(e){var t=this,r=e.sendData,n=e.title,i=e.redirectRoute,u=e.successText,s=e.storeModule,a=void 0===s?null:s,c=a?"".concat(a,"/"):"";return this.$store.dispatch("".concat(c,"update"),r).then((function(){return window.history.length>1?t.$router.go(-1):t.$router.push(i),o.a.fire({title:u,text:"«".concat(n,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},d={methods:{delete:function(e){var t=this,r=e.payload,n=e.title,i=e.alertText,u=e.successText,o=e.storeModule,s=void 0===o?null:o,a=e.redirectRoute,c=void 0===a?null:a,d=e.tableMode,l=void 0!==d&&d,p=e.force,v=void 0!==p&&p,y=s?"".concat(s,"/"):"",h=v?"forceDelete":"delete";return f(i).then((function(e){if(e.value)return t.$store.dispatch("".concat(y).concat(h),{payload:r,tableMode:l}).then((function(){return c&&(window.history.length>1?t.$router.go(-1):t.$router.push(c)),m(u,n)}))}))}}},l={methods:{deleteImageByIndex:function(e){var t=this,r=e.id,n=e.index,i=e.alertText,u=e.successText,o=e.storeModule,s=void 0===o?null:o;return f(i).then((function(e){if(e.value)return t.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:r,index:n}).then((function(){return m(u,n)}))}))}}},f=function(e){return o.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},m=function(e,t){return o.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},p={methods:{upload:function(e){var t,r=this;return(t=i.a.mark((function t(){var n,u,s,a,c,d,l,f,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.uploadFiles,u=e.type,s=void 0===u?null:u,a=e.id,c=void 0===a?null:a,d=e.storeModule,l=void 0===d?null:d,f=Array.from(n),m=l||"categories",!c){t.next=8;break}return t.next=6,r.$store.dispatch("".concat(m,"/uploadImages"),{files:f,id:c,type:s});case 6:t.next=10;break;case 8:return t.next=10,r.$store.dispatch("images/store",f);case 10:return t.next=12,o.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var u=t.apply(e,r);function o(e){s(u,n,i,o,a,"next",e)}function a(e){s(u,n,i,o,a,"throw",e)}o(void 0)}))})()}}},v={methods:{addImages:function(e){var t=this,r=e.id,n=e.data;this.$store.dispatch("categories/addSelectedImages",{id:r,data:n}).then((function(){return t.$router.push({name:"cms.catalog.categories.images",params:{id:r}}),o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},y={methods:{addImages:function(e){var t=this,r=e.type,n=e.id,i=e.data,u=e.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:r,id:n,data:i}).then((function(){return t.$router.push(u),o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},41:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,i=(n=r(329))&&n.__esModule?n:{default:n};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;t.len=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,i.default)({type:e},(function(e){return!o(e)||t.test(e)}))}},671:function(e,t,r){"use strict";r.r(t);var n=r(17),i=r.n(n),u=r(2),o=r(3),s=r(49),a=r(6),c=r(4);function d(e,t,r,n,i,u,o){try{var s=e[u](o),a=s.value}catch(e){return void r(e)}s.done?t(a):Promise.resolve(a).then(n,i)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={name:"RoleEdit",components:{InputNotificationRequire:s.g},mixins:[a.b,c.f,c.c],props:{id:{type:[Number,String],required:!0}},data:function(){return{selectedPermissions:[],responseData:!1,controlSaveVisibilities:!1,redirectRoute:{name:"cms.roles"},storeModule:"roles"}},validations:{name:{required:o.required,touch:!1,minLength:Object(o.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.name.$dirty||!this.isUniqueNameEdit},testAlias:function(e){return""===e.trim()||this.$config.ALIAS_REGEXP.test(e)}},displayName:{required:o.required,touch:!1,minLength:Object(o.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.displayName.$dirty||!this.isUniqueDisplayNameEdit}},description:{touch:!1},selectedPermissions:{required:o.required,touch:!1}},computed:f(f({},Object(u.d)({name:function(e){return e.roles.fields.name},displayName:function(e){return e.roles.fields.display_name},description:function(e){return e.roles.fields.description},permissions:function(e){return e.roles.fields.permissions},permissionList:function(e){return e.permissions.items}})),{},{isUniqueName:function(){return!!this.$store.getters["roles/isUniqueName"](this.name)},isUniqueDisplayName:function(){return!!this.$store.getters["roles/isUniqueDisplayName"](this.displayName)}}),created:function(){var e,t=this;return(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.getItemsAction(),t.getPermissionsAction(),t.getItemAction(t.id)]).then((function(){t.setPageTitle(t.displayName),t.selectedPermissions=t.permissions.slice(0),t.responseData=!0})).then((function(){t.$v.$reset(),t.controlSaveVisibilities=!0})).catch((function(){return t.$router.push(t.redirectRoute)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var u=e.apply(t,r);function o(e){d(u,n,i,o,s,"next",e)}function s(e){d(u,n,i,o,s,"throw",e)}o(void 0)}))})()},methods:f(f({},Object(u.b)({getItemsAction:"roles/getItems",getItemAction:"roles/getItem",clearFieldsAction:"roles/clearItemFields",getPermissionsAction:"permissions/getItems"})),{},{onCheck:function(){this.isDiffer(this.permissions,this.selectedPermissions)?this.$v.selectedPermissions.$touch():this.$v.selectedPermissions.$reset()},isDiffer:function(e,t){return!!e.filter((function(e){return!t.includes(e)})).concat(t.filter((function(t){return!e.includes(t)}))).length},onUpdate:function(){return this.update({sendData:{formData:{name:this.name,display_name:this.displayName,description:this.description,permissions:this.selectedPermissions},id:this.id},title:this.displayName,successText:"Роль обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.displayName,alertText:"роль «".concat(this.displayName,"»"),successText:"Роль удалена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},v=r(0),y=Object(v.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.responseData?r("div",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",[r("md-card-content",{staticClass:"md-between"},[r("router-button-link",{attrs:{title:"К списку ролей",route:"cms.roles"}}),e._v(" "),r("div",[r("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:e.controlSaveVisibilities&&e.$v.$anyDirty&&!e.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[r("control-button",{attrs:{title:"Сохранить"},on:{click:e.onUpdate}})],1),e._v(" "),r("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:function(t){return e.onDelete()}}})],1)],1)],1)],1)]),e._v(" "),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[r("md-card",[r("card-icon-header"),e._v(" "),r("md-card-content",[r("v-input",{attrs:{title:"Имя",icon:"title",name:"display_name",vField:e.$v.displayName,differ:!0,value:e.displayName,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0}}}),e._v(" "),r("v-input",{attrs:{title:"Алиас",icon:"code",name:"name",vField:e.$v.name,differ:!0,value:e.name,module:e.storeModule,vRules:{required:!0,unique:!0,alias:!0,minLength:!0}}}),e._v(" "),r("v-textarea",{attrs:{name:"description",vField:e.$v.description,differ:!0,value:e.description,module:e.storeModule}}),e._v(" "),r("div",{staticClass:"space-30"})],1)],1)],1),e._v(" "),r("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[e.permissionList?r("md-card",[r("card-icon-header",{attrs:{icon:"vpn_key",title:"Разрешения"}}),e._v(" "),r("md-card-content",[e._l(e.permissionList,(function(t){return r("md-switch",{key:t.id,attrs:{value:t.id},on:{change:e.onCheck},model:{value:e.selectedPermissions,callback:function(t){e.selectedPermissions=t},expression:"selectedPermissions"}},[e._v("\n                        "+e._s(t.display_name)+"\n                    ")])})),e._v(" "),e.$v.selectedPermissions.$error?r("input-notification-require",{attrs:{name:"Привелегии"}}):e._e()],2)],1):e._e()],1)])]):e._e()}),[],!1,null,null,null);t.default=y.exports}}]);