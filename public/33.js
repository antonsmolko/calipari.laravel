(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return w.default}}),t.helpers=void 0;var i=M(n(345)),u=M(n(348)),o=M(n(349)),a=M(n(350)),s=M(n(351)),c=M(n(352)),d=M(n(353)),l=M(n(354)),f=M(n(355)),m=M(n(356)),p=M(n(357)),v=M(n(358)),y=M(n(359)),h=M(n(360)),b=M(n(361)),g=M(n(362)),P=M(n(363)),_=M(n(364)),O=M(n(365)),j=M(n(366)),w=M(n(367)),x=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=$();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(n(45));function $(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return $=function(){return e},e}function M(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(45).regex)("alpha",/^[a-zA-Z]*$/);t.default=r},346:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===e.env.BUILD?n(347).withParams:n(281).withParams;t.default=r}).call(this,n(131))},347:function(e,t,n){"use strict";(function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!=typeof window?window:void 0!==e?e:{},i=r.vuelidate?r.vuelidate.withParams:function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))};t.withParams=i}).call(this,n(90))},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(45).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=r},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(45).regex)("numeric",/^[0-9]*$/);t.default=r},350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n}))}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(45).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=r},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45),i=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=i;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var n="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(i)}))};var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))}},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))}},356:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45),i=(0,r.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=i},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,n){return!(0,r.ref)(e,this,n)||(0,r.req)(t)}))}},358:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,n){return!!(0,r.ref)(e,this,n)||(0,r.req)(t)}))}},359:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,n){return t===(0,r.ref)(e,this,n)}))}},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(45).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=r},361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"or"},(function(){for(var e=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.length>0&&t.reduce((function(t,n){return t||n.apply(e,r)}),!1)}))}},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"and"},(function(){for(var e=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.length>0&&t.reduce((function(t,n){return t&&n.apply(e,r)}),!0)}))}},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e){return(0,r.withParams)({type:"not"},(function(t,n){return!(0,r.req)(t)||!e.call(this,t,n)}))}},364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(45);t.default=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(45).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=r},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(45).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=r},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return y}));var r=n(13),i=n.n(r),u=n(34),o=n.n(u);function a(e,t,n,r,i,u,o){try{var a=e[u](o),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,i)}var s={methods:{create:function(e){var t=this,n=e.sendData,r=e.title,i=e.successText,u=e.redirectRoute,a=e.storeModule,s=void 0===a?null:a,c=e.action,d=void 0===c?"store":c,l=s?"".concat(s,"/"):"";return this.$store.dispatch("".concat(l).concat(d),n).then((function(){return t.$router.push(u),o.a.fire({title:i,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},c={methods:{update:function(e){var t=this,n=e.sendData,r=e.title,i=e.redirectRoute,u=e.successText,a=e.storeModule,s=void 0===a?null:a,c=s?"".concat(s,"/"):"";return this.$store.dispatch("".concat(c,"update"),n).then((function(){return t.$router.push(i),o.a.fire({title:u,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},d={methods:{delete:function(e){var t=this,n=e.payload,r=e.title,i=e.alertText,u=e.successText,o=e.storeModule,a=void 0===o?null:o,s=e.redirectRoute,c=void 0===s?null:s,d=e.tableMode,l=void 0!==d&&d,p=e.action,v=void 0===p?"delete":p,y=e.force,h=void 0!==y&&y,b=a?"".concat(a,"/"):"",g=h?"forceDelete":v;return f(i).then((function(e){if(e.value)return t.$store.dispatch("".concat(b).concat(g),{payload:n,tableMode:l}).then((function(){return c&&t.$router.push(c),m(u,r)}))}))}}},l={methods:{deleteImageByIndex:function(e){var t=this,n=e.id,r=e.index,i=e.alertText,u=e.successText,o=e.storeModule,a=void 0===o?null:o;return f(i).then((function(e){if(e.value)return t.$store.dispatch("".concat(a,"/deleteImageByIndex"),{id:n,index:r}).then((function(){return m(u,r)}))}))}}},f=function(e){return o.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},m=function(e,t){return o.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},p={methods:{upload:function(e){var t,n=this;return(t=i.a.mark((function t(){var r,u,a,s,c,d,l,f,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.uploadFiles,u=e.type,a=void 0===u?null:u,s=e.id,c=void 0===s?null:s,d=e.storeModule,l=void 0===d?null:d,f=Array.from(r),m=l||"categories",!c){t.next=8;break}return t.next=6,n.$store.dispatch("".concat(m,"/uploadImages"),{files:f,id:c,type:a});case 6:t.next=10;break;case 8:return t.next=10,n.$store.dispatch("images/store",f);case 10:return t.next=12,o.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var u=t.apply(e,n);function o(e){a(u,r,i,o,s,"next",e)}function s(e){a(u,r,i,o,s,"throw",e)}o(void 0)}))})()}}},v={methods:{addImages:function(e){var t=this,n=e.id,r=e.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:r}).then((function(){return t.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},y={methods:{addImages:function(e){var t=this,n=e.type,r=e.id,i=e.data,u=e.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:r,data:i}).then((function(){return t.$router.push(u),o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}}),t.regex=t.ref=t.len=t.req=void 0;var r,i=(r=n(346))&&r.__esModule?r:{default:r};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;t.len=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,n){return"function"==typeof e?e.call(t,n):n[e]};t.regex=function(e,t){return(0,i.default)({type:e},(function(e){return!o(e)||t.test(e)}))}},699:function(e,t,n){"use strict";n.r(t);var r=n(13),i=n.n(r),u=n(2),o=n(1),a=n(50),s=n(5),c=n(4);function d(e,t,n,r,i,u,o){try{var a=e[u](o),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,i)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={name:"RoleEdit",components:{InputNotificationRequire:a.i},mixins:[s.b,c.f,c.c],props:{id:{type:[Number,String],required:!0}},data:function(){return{selectedPermissions:[],responseData:!1,controlSaveVisibilities:!1,redirectRoute:{name:"cms.roles"},storeModule:"roles"}},validations:{name:{required:o.required,touch:!1,minLength:Object(o.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.name.$dirty||this.isUniqueNameEdit},testAlias:function(e){return""===e.trim()||this.$config.ALIAS_REGEXP.test(e)}},displayName:{required:o.required,touch:!1,minLength:Object(o.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.displayName.$dirty||this.isUniqueDisplayNameEdit}},description:{touch:!1},selectedPermissions:{required:o.required,touch:!1}},computed:f(f({},Object(u.d)({name:function(e){return e.roles.fields.name},displayName:function(e){return e.roles.fields.display_name},description:function(e){return e.roles.fields.description},permissions:function(e){return e.roles.fields.permissions},permissionList:function(e){return e.permissions.items}})),{},{isUniqueName:function(){return this.$store.getters["roles/isUniqueName"](this.name)},isUniqueDisplayName:function(){return this.$store.getters["roles/isUniqueDisplayName"](this.displayName)}}),created:function(){var e,t=this;return(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.getItemsAction(),t.getPermissionsAction(),t.getItemAction(t.id)]).then((function(){t.setPageTitle(t.displayName),t.selectedPermissions=t.permissions.slice(0),t.responseData=!0})).then((function(){t.$v.$reset(),t.controlSaveVisibilities=!0})).catch((function(){return t.$router.push(t.redirectRoute)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var u=e.apply(t,n);function o(e){d(u,r,i,o,a,"next",e)}function a(e){d(u,r,i,o,a,"throw",e)}o(void 0)}))})()},methods:f(f({},Object(u.b)({getItemsAction:"roles/getItems",getItemAction:"roles/getItem",clearFieldsAction:"roles/clearItemFields",getPermissionsAction:"permissions/getItems"})),{},{onCheck:function(){this.isDiffer(this.permissions,this.selectedPermissions)?this.$v.selectedPermissions.$touch():this.$v.selectedPermissions.$reset()},isDiffer:function(e,t){return Boolean(e.filter((function(e){return!t.includes(e)})).concat(t.filter((function(t){return!e.includes(t)}))).length)},onUpdate:function(){return this.update({sendData:{formData:{name:this.name,display_name:this.displayName,description:this.description,permissions:this.selectedPermissions},id:this.id},title:this.displayName,successText:"Роль обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.displayName,alertText:"роль «".concat(this.displayName,"»"),successText:"Роль удалена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},v=n(0),y=Object(v.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{title:"К списку ролей",to:{name:"cms.roles"}}}),e._v(" "),n("div",[n("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:e.controlSaveVisibilities&&e.$v.$anyDirty&&!e.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[n("control-button",{attrs:{title:"Сохранить"},on:{click:e.onUpdate}})],1),e._v(" "),n("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:e.onDelete}})],1)],1)],1)],1)]),e._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[n("md-card",[n("card-icon-header"),e._v(" "),n("md-card-content",[n("v-input",{attrs:{title:"Имя",icon:"title",name:"display_name",vField:e.$v.displayName,differ:!0,value:e.displayName,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0}}}),e._v(" "),n("v-input",{attrs:{title:"Алиас",icon:"code",name:"name",vField:e.$v.name,differ:!0,value:e.name,module:e.storeModule,vRules:{required:!0,unique:!0,alias:!0,minLength:!0}}}),e._v(" "),n("v-textarea",{attrs:{name:"description",vField:e.$v.description,differ:!0,value:e.description,module:e.storeModule}}),e._v(" "),n("div",{staticClass:"space-30"})],1)],1)],1),e._v(" "),n("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[e.permissionList?n("md-card",[n("card-icon-header",{attrs:{icon:"vpn_key",title:"Разрешения"}}),e._v(" "),n("md-card-content",[e._l(e.permissionList,(function(t){return n("md-switch",{key:t.id,attrs:{value:t.id},on:{change:e.onCheck},model:{value:e.selectedPermissions,callback:function(t){e.selectedPermissions=t},expression:"selectedPermissions"}},[e._v("\n                        "+e._s(t.display_name)+"\n                    ")])})),e._v(" "),e.$v.selectedPermissions.$error?n("input-notification-require",{attrs:{name:"Привелегии"}}):e._e()],2)],1):e._e()],1)])]):e._e()}),[],!1,null,null,null);t.default=y.exports}}]);