(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return w.default}}),t.helpers=void 0;var i=C(r(345)),u=C(r(348)),a=C(r(349)),o=C(r(350)),c=C(r(351)),s=C(r(352)),d=C(r(353)),l=C(r(354)),f=C(r(355)),m=C(r(356)),p=C(r(357)),v=C(r(358)),y=C(r(359)),g=C(r(360)),b=C(r(361)),h=C(r(362)),_=C(r(363)),P=C(r(364)),O=C(r(365)),j=C(r(366)),w=C(r(367)),x=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=M();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=i?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(45));function M(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return M=function(){return e},e}function C(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},187:function(e,t,r){var n=r(9),i=r(395);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var u={insert:"head",singleton:!1};n(i,u);e.exports=i.locals||{}},345:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},346:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(347).withParams:r(281).withParams;t.default=n}).call(this,r(132))},347:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},i=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=i}).call(this,r(90))},348:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},349:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("numeric",/^[0-9]*$/);t.default=n},350:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},351:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},352:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=i;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},353:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},354:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},355:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},356:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45),i=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=i},357:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},358:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},359:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},361:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},362:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},363:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},364:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(45);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(45).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},394:function(e,t,r){"use strict";var n=r(187);r.n(n).a},395:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"\n.md-duplicate-trash {\n    font-size: 16px !important;\n    margin: 0;\n}\n",""])},4:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return l})),r.d(t,"g",(function(){return p})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return y}));var n=r(13),i=r.n(n),u=r(34),a=r.n(u);function o(e,t,r,n,i,u,a){try{var o=e[u](a),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}var c={methods:{create:function(e){var t=this,r=e.sendData,n=e.title,i=e.successText,u=e.redirectRoute,o=e.storeModule,c=void 0===o?null:o,s=e.action,d=void 0===s?"store":s,l=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(l).concat(d),r).then((function(){return t.$router.push(u),a.a.fire({title:i,text:"«".concat(n,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},s={methods:{update:function(e){var t=this,r=e.sendData,n=e.title,i=e.redirectRoute,u=e.successText,o=e.storeModule,c=void 0===o?null:o,s=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(s,"update"),r).then((function(){return t.$router.push(i),a.a.fire({title:u,text:"«".concat(n,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},d={methods:{delete:function(e){var t=this,r=e.payload,n=e.title,i=e.alertText,u=e.successText,a=e.storeModule,o=void 0===a?null:a,c=e.redirectRoute,s=void 0===c?null:c,d=e.tableMode,l=void 0!==d&&d,p=e.action,v=void 0===p?"delete":p,y=e.force,g=void 0!==y&&y,b=o?"".concat(o,"/"):"",h=g?"forceDelete":v;return f(i).then((function(e){if(e.value)return t.$store.dispatch("".concat(b).concat(h),{payload:r,tableMode:l}).then((function(){return s&&t.$router.push(s),m(u,n)}))}))}}},l={methods:{deleteImageByIndex:function(e){var t=this,r=e.id,n=e.index,i=e.alertText,u=e.successText,a=e.storeModule,o=void 0===a?null:a;return f(i).then((function(e){if(e.value)return t.$store.dispatch("".concat(o,"/deleteImageByIndex"),{id:r,index:n}).then((function(){return m(u,n)}))}))}}},f=function(e){return a.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},m=function(e,t){return a.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},p={methods:{upload:function(e){var t,r=this;return(t=i.a.mark((function t(){var n,u,o,c,s,d,l,f,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.uploadFiles,u=e.type,o=void 0===u?null:u,c=e.id,s=void 0===c?null:c,d=e.storeModule,l=void 0===d?null:d,f=Array.from(n),m=l||"categories",!s){t.next=8;break}return t.next=6,r.$store.dispatch("".concat(m,"/uploadImages"),{files:f,id:s,type:o});case 6:t.next=10;break;case 8:return t.next=10,r.$store.dispatch("images/store",f);case 10:return t.next=12,a.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var u=t.apply(e,r);function a(e){o(u,n,i,a,c,"next",e)}function c(e){o(u,n,i,a,c,"throw",e)}a(void 0)}))})()}}},v={methods:{addImages:function(e){var t=this,r=e.id,n=e.data;this.$store.dispatch("categories/addSelectedImages",{id:r,data:n}).then((function(){return t.$router.push({name:"cms.catalog.categories.images",params:{id:r}}),a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},y={methods:{addImages:function(e){var t=this,r=e.type,n=e.id,i=e.data,u=e.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:r,id:n,data:i}).then((function(){return t.$router.push(u),a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},45:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,i=(n=r(346))&&n.__esModule?n:{default:n};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=a;t.len=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,i.default)({type:e},(function(e){return!a(e)||t.test(e)}))}},673:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r(1),u=r(55),a=r(5),o=r(4);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={name:"FindDuplicates",components:{ResourceImage:u.a},mixins:[a.b,o.g],props:{category_type:{type:String,default:"images"},id:{type:[Number,String],default:null}},data:function(){return{storeModule:"images",responseData:!1}},validations:{image:{required:i.required,touch:!1},difference:{touch:!1}},computed:s({},Object(n.d)({image:function(e){return e.images.fields.image},duplicates:function(e){return e.images.duplicates},difference:function(e){return e.images.fields.difference},loading:function(e){return e.loading},duplicateFindStatus:function(e){return e.images.duplicateFindStatus},fileProgress:function(e){return e.images.fileProgress}})),mounted:function(){this.setPageTitle("Проверка изображения на дубликат"),this.responseData=!0},beforeDestroy:function(){this.clearFieldsAction()},methods:s(s({},Object(n.b)({findDuplicatesAction:"images/findDuplicates",setImagesFieldAction:"images/setField",setImagesItemFieldAction:"images/setItemField",uploadImageAction:"images/store",uploadImageToCategoryAction:"categories/uploadImages",clearFieldsAction:"images/clearFields"})),{},{findDuplicates:function(){this.setImagesFieldAction({field:"duplicates",value:[]}),this.findDuplicatesAction({category_type:this.category_type,id:this.id})},uploadImage:function(){this.upload({uploadFiles:[this.image],type:this.category_type,id:this.id})}})},f=(r(394),r(0)),m=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.responseData?r("div",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",{staticClass:"mt-0"},[r("md-card-content",{staticClass:"md-between"},["images"===e.category_type?r("router-button-link",{attrs:{to:{name:"cms.images"}}}):r("router-button-link",{attrs:{to:{name:"cms.catalog.categories.images",params:{category_type:e.category_type,id:e.id}}}}),e._v(" "),r("div",[r("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:!e.$v.$invalid,expression:"!$v.$invalid"}]},[r("control-button",{attrs:{icon:"image_search",title:"Искать"},on:{click:e.findDuplicates}})],1),e._v(" "),r("control-button",{attrs:{icon:"get_app",title:"Загрузить"},on:{click:e.uploadImage}})],1)],1)],1)],1)]),e._v(" "),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-100"},[r("div",{staticClass:"md-layout-item md-progress-bar__container"},[e.fileProgress?r("md-progress-bar",{staticClass:"md-info",attrs:{"md-mode":"indeterminate","md-value":e.fileProgress}}):e._e()],1),e._v(" "),r("md-card",[r("card-icon-header",{attrs:{icon:"insert_photo"}}),e._v(" "),r("md-card-content",[r("div",{staticClass:"md-layout md-gutter"},[r("div",{staticClass:"md-layout-item"},[r("v-image",{attrs:{name:"image",vField:e.$v.image,vRules:{required:!0},module:e.storeModule}})],1),e._v(" "),r("div",{staticClass:"md-layout-item"},[r("v-input",{attrs:{title:"Коэффициент расхождения",icon:"tune",name:"difference",value:e.difference,maxlength:3,module:e.storeModule,vField:e.$v.difference,vRules:{numeric:!0}}})],1)])])],1)],1),e._v(" "),r("div",{staticClass:"md-layout-item md-size-100"},[r("md-card",[r("card-icon-header",{attrs:{icon:"content_copy",title:"Результат"}}),e._v(" "),r("md-card-content",[e.duplicates.length?[r("div",{staticClass:"md-layout md-gutter"},e._l(e.duplicates,(function(t){return r("div",{key:t.id,staticClass:"md-layout-item md-size-10 mb-2"},[r("resource-image",{staticClass:"img-raised rounded",staticStyle:{width:"200px"},attrs:{name:t.path,width:300}}),e._v(" "),r("div",{staticClass:"md-duplicate-footer md-flex md-between"},[r("span",[e._v(e._s(t.id))]),e._v(" "),t.deleted_at?r("md-icon",{staticClass:"md-duplicate-trash"},[e._v("delete")]):e._e()],1)],1)})),0)]:"end"!==e.duplicateFindStatus||e.duplicates.length?"progress"===e.duplicateFindStatus?[r("div",{staticClass:"mt-3 mb-3"},[r("div",{staticClass:"progress-bar__container"},[r("md-progress-bar",{attrs:{"md-mode":"indeterminate"}})],1)])]:[r("div",{staticClass:"mt-5"})]:[r("div",{staticClass:"alert alert-info mt-2"},[r("h3",[e._v("Дубликатов не найдено! Можете загрузить изображение.")])])]],2)],1)],1)])]):e._e()}),[],!1,null,null,null);t.default=m.exports}}]);