(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1:function(e,t,i){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var n=$(i(342)),o=$(i(345)),u=$(i(346)),s=$(i(347)),a=$(i(348)),l=$(i(349)),c=$(i(350)),d=$(i(351)),f=$(i(352)),m=$(i(353)),v=$(i(354)),p=$(i(355)),h=$(i(356)),y=$(i(357)),g=$(i(358)),b=$(i(359)),_=$(i(360)),P=$(i(361)),w=$(i(362)),O=$(i(363)),j=$(i(364)),x=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=C();if(t&&t.has(e))return t.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(i,o,u):i[o]=e[o]}i.default=e,t&&t.set(e,i);return i}(i(44));function C(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return C=function(){return e},e}function $(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},34:function(e,t,i){"use strict";var r={name:"VSelect",props:{title:{type:String},name:{type:String,required:!0},vField:{type:Object,default:null},placeholder:{type:String},options:{type:Array,required:!0},value:{type:[Array,Number,String],default:null},multiple:{type:Boolean,default:!1},defaultValue:{type:[Array,Number,String,Object],default:null},defaultTitle:{type:String,default:"Нет"},nameField:{type:String,default:"title"},namePostfix:{type:String,default:null},indexName:{type:[String,Number],default:"id"},module:{type:String,default:null},action:{type:String,default:"setItemField"},differ:{type:Boolean,default:!1}},data:function(){return{valueReference:null}},computed:{storeModule:function(){return this.module?"".concat(this.module,"/"):""}},methods:{onSelect:function(e){this.vField&&this.touched(this.vField,e),this.$store.dispatch("".concat(this.storeModule).concat(this.action),{field:this.name,value:e})},isDiffer:function(e,t){return this.multiple?Boolean(e.filter((function(e){return!t.includes(e)})).concat(t.filter((function(t){return!e.includes(t)}))).length):e!=t},touchedDifferent:function(e,t){this.isDiffer(t,this.valueReference)?e.$touch():e.$reset()},touched:function(e,t){this.differ?this.touchedDifferent(e,t):e.$touch()}},created:function(){this.valueReference=this.value instanceof Array?this.value.slice(0):this.value}},n=i(0),o=Object(n.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("h4",{staticClass:"card-title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),i("md-field",[i("label",[e._v(e._s(e.placeholder))]),e._v(" "),i("md-select",{attrs:{value:e.value,multiple:e.multiple},on:{"md-selected":e.onSelect}},[null!==e.defaultValue?i("md-option",{attrs:{value:e.defaultValue}},[e._v(e._s(e.defaultTitle))]):e._e(),e._v(" "),e._l(e.options,(function(t,r){return i("md-option",{key:r,attrs:{value:t[e.indexName]}},[e._v("\n                "+e._s(t[e.nameField])+e._s(e.namePostfix?" - [ "+t[e.namePostfix]+" ]":"")+"\n            ")])}))],2)],1)],1)}),[],!1,null,null,null);t.a=o.exports},342:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,i(44).regex)("alpha",/^[a-zA-Z]*$/);t.default=r},343:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===e.env.BUILD?i(344).withParams:i(279).withParams;t.default=r}).call(this,i(131))},344:function(e,t,i){"use strict";(function(e){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!=typeof window?window:void 0!==e?e:{},n=r.vuelidate?r.vuelidate.withParams:function(e,t){return"object"===i(e)&&void 0!==t?t:e((function(){}))};t.withParams=n}).call(this,i(89))},345:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,i(44).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=r},346:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,i(44).regex)("numeric",/^[0-9]*$/);t.default=r},347:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(i){return!(0,r.req)(i)||(!/\s/.test(i)||i instanceof Date)&&+e<=+i&&+t>=+i}))}},348:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,i(44).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=r},349:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44),n=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=n;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},350:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var i="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==i&&(6===i.length||8===i.length)&&i.every(n)}))};var n=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},351:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))}},352:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))}},353:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44),n=(0,r.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=n},354:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,i){return!(0,r.ref)(e,this,i)||(0,r.req)(t)}))}},355:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,i){return!!(0,r.ref)(e,this,i)||(0,r.req)(t)}))}},356:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,i){return t===(0,r.ref)(e,this,i)}))}},357:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,i(44).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=r},358:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.withParams)({type:"or"},(function(){for(var e=this,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return t.length>0&&t.reduce((function(t,i){return t||i.apply(e,r)}),!1)}))}},359:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.withParams)({type:"and"},(function(){for(var e=this,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return t.length>0&&t.reduce((function(t,i){return t&&i.apply(e,r)}),!0)}))}},360:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e){return(0,r.withParams)({type:"not"},(function(t,i){return!(0,r.req)(t)||!e.call(this,t,i)}))}},361:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},362:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(44);t.default=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},363:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,i(44).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=r},364:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,i(44).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=r},4:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"f",(function(){return l})),i.d(t,"c",(function(){return c})),i.d(t,"b",(function(){return d})),i.d(t,"g",(function(){return v})),i.d(t,"d",(function(){return p})),i.d(t,"e",(function(){return h}));var r=i(14),n=i.n(r),o=i(45),u=i.n(o);function s(e,t,i,r,n,o,u){try{var s=e[o](u),a=s.value}catch(e){return void i(e)}s.done?t(a):Promise.resolve(a).then(r,n)}var a={methods:{create:function(e){var t=this,i=e.sendData,r=e.title,n=e.successText,o=e.redirectRoute,s=e.storeModule,a=void 0===s?null:s,l=e.action,c=void 0===l?"store":l,d=a?"".concat(a,"/"):"";return this.$store.dispatch("".concat(d).concat(c),i).then((function(){return t.$router.push(o),u.a.fire({title:n,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{update:function(e){var t=this,i=e.sendData,r=e.title,n=e.redirectRoute,o=e.successText,s=e.storeModule,a=void 0===s?null:s,l=a?"".concat(a,"/"):"";return this.$store.dispatch("".concat(l,"update"),i).then((function(){return t.$router.push(n),u.a.fire({title:o,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},c={methods:{delete:function(e){var t=this,i=e.payload,r=e.title,n=e.alertText,o=e.successText,u=e.storeModule,s=void 0===u?null:u,a=e.redirectRoute,l=void 0===a?null:a,c=e.tableMode,d=void 0!==c&&c,v=e.action,p=void 0===v?"delete":v,h=e.force,y=void 0!==h&&h,g=s?"".concat(s,"/"):"",b=y?"forceDelete":p;return f(n).then((function(e){if(e.value)return t.$store.dispatch("".concat(g).concat(b),{payload:i,tableMode:d}).then((function(){return l&&t.$router.push(l),m(o,r)}))}))}}},d={methods:{deleteImageByIndex:function(e){var t=this,i=e.id,r=e.index,n=e.alertText,o=e.successText,u=e.storeModule,s=void 0===u?null:u;return f(n).then((function(e){if(e.value)return t.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:i,index:r}).then((function(){return m(o,r)}))}))}}},f=function(e){return u.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},m=function(e,t){return u.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},v={methods:{upload:function(e){var t,i=this;return(t=n.a.mark((function t(){var r,o,s,a,l,c,d,f,m;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.uploadFiles,o=e.type,s=void 0===o?null:o,a=e.id,l=void 0===a?null:a,c=e.storeModule,d=void 0===c?null:c,f=Array.from(r),m=d||"categories",!l){t.next=8;break}return t.next=6,i.$store.dispatch("".concat(m,"/uploadImages"),{files:f,id:l,type:s});case 6:t.next=10;break;case 8:return t.next=10,i.$store.dispatch("images/store",f);case 10:return t.next=12,u.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(r,n){var o=t.apply(e,i);function u(e){s(o,r,n,u,a,"next",e)}function a(e){s(o,r,n,u,a,"throw",e)}u(void 0)}))})()}}},p={methods:{addImages:function(e){var t=this,i=e.id,r=e.data;this.$store.dispatch("categories/addSelectedImages",{id:i,data:r}).then((function(){return t.$router.push({name:"cms.catalog.categories.images",params:{id:i}}),u.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},h={methods:{addImages:function(e){var t=this,i=e.type,r=e.id,n=e.data,o=e.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:i,id:r,data:n}).then((function(){return t.$router.push(o),u.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},44:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var r,n=(r=i(343))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;t.len=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,i){return"function"==typeof e?e.call(t,i):i[e]};t.regex=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))}},679:function(e,t,i){"use strict";i.r(t);var r=i(3),n=i(1),o=i(34),u=i(5),s=i(4);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d={name:"ColorCollectionEdit",components:{VSelect:o.a},mixins:[u.b,s.f,s.c],props:{id:{type:[String,Number],required:!0}},data:function(){return{redirectRoute:{name:"cms.catalog.color-collections"},responseData:!1,storeModule:"colorCollections",controlSaveVisibilities:!1}},validations:{title:{required:n.required,touch:!1,minLength:Object(n.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.title.$dirty||this.isUniqueTitleEdit}},alias:{required:n.required,touch:!1,minLength:Object(n.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.alias.$dirty||this.isUniqueAliasEdit},testAlias:function(e){return""===e.trim()||this.$config.ALIAS_REGEXP.test(e)}},imageId:{numeric:n.numeric,touch:!1},maxPrintWidth:{numeric:n.numeric,touch:!1},imageDescription:{touch:!1},topics:{touch:!1},interiors:{touch:!1},tags:{touch:!1},owner:{touch:!1},publish:{touch:!1},metaTitle:{touch:!1},description:{touch:!1},keywords:{touch:!1}},computed:l(l({},Object(r.d)({title:function(e){return e.colorCollections.fields.title},alias:function(e){return e.colorCollections.fields.alias},imageId:function(e){return e.colorCollections.fields.image_id},imageDescription:function(e){return e.colorCollections.fields.image_description},maxPrintWidth:function(e){return e.colorCollections.fields.max_print_width},topics:function(e){return e.colorCollections.fields.topics},interiors:function(e){return e.colorCollections.fields.interiors},tags:function(e){return e.colorCollections.fields.tags},owner:function(e){return e.colorCollections.fields.owner_id},publish:function(e){return e.colorCollections.fields.publish},hasPublishedImages:function(e){return e.colorCollections.fields.has_published_images},hasImages:function(e){return e.colorCollections.fields.has_images},metaTitle:function(e){return e.colorCollections.fields.meta_title},description:function(e){return e.colorCollections.fields.description},keywords:function(e){return e.colorCollections.fields.keywords},ownerList:function(e){return e.subCategories.itemsByType.owners}})),{},{topicList:function(){return this.$store.getters["categories/getItemsByType"]("topics")},colorList:function(){return this.$store.getters["categories/getItemsByType"]("colors")},interiorList:function(){return this.$store.getters["categories/getItemsByType"]("interiors")},tagList:function(){return this.$store.getters["categories/getItemsByType"]("tags")},isUniqueTitleEdit:function(){return this.$store.getters["colorCollections/isUniqueTitleEdit"](this.title,this.id)},isUniqueAliasEdit:function(){return this.$store.getters["colorCollections/isUniqueAliasEdit"](this.alias,this.id)}}),created:function(){var e=this;this.clearFieldsAction(),Promise.all([this.getItemAction(this.id),this.getItemsAction(),this.getCategoriesAction(),this.getSubcategoriesAction("owners")]).then((function(){e.setPageTitle(e.title),e.responseData=!0})).then((function(){e.$v.$reset(),e.controlSaveVisibilities=!0})).catch((function(){return e.$router.push(e.redirectRoute)}))},methods:l(l({},Object(r.b)({clearFieldsAction:"colorCollections/clearItemFields",getItemsAction:"colorCollections/getItems",getItemAction:"colorCollections/getItem",getCategoriesAction:"categories/getItems",getSubcategoriesAction:"subCategories/getItemsWithType"})),{},{onUpdate:function(){return this.update({sendData:{data:{title:this.title,alias:this.alias,image_id:this.imageId,max_print_width:this.maxPrintWidth,image_description:this.imageDescription,topics:this.topics,interiors:this.interiors,tags:this.tags,owner_id:this.owner||"",publish:Number(this.publish),meta_title:this.metaTitle,description:this.description,keywords:this.keywords},id:this.id},title:this.title,successText:"Коллекция обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.title,alertText:"коллекцию «".concat(this.title,"»"),successText:"Коллекция удалена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},f=i(0),m=Object(f.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.responseData?i("div",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-card",[i("md-card-content",{staticClass:"md-between"},[i("router-button-link",{attrs:{to:e.redirectRoute,title:"К списку коллекций"}}),e._v(" "),i("div",[i("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:e.controlSaveVisibilities&&e.$v.$anyDirty&&!e.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[i("control-button",{attrs:{title:"Сохранить"},on:{click:e.onUpdate}})],1),e._v(" "),i("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:e.onDelete}})],1)],1)],1)],1)]),e._v(" "),i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-card",[i("card-icon-header"),e._v(" "),i("md-card-content",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[i("v-input",{attrs:{title:"Заголовок",icon:"title",name:"title",value:e.title,vField:e.$v.title,differ:!0,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0}}})],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[i("v-input",{attrs:{title:"Алиас",icon:"code",name:"alias",value:e.alias,vDelay:!0,vField:e.$v.alias,differ:!0,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0,alias:!0}}})],1),e._v(" "),e.hasImages?e._e():[i("div",{staticClass:"md-layout-item md-small-size-100"},[i("v-input",{attrs:{title:"ID Изображения",icon:"image",name:"image_id",maxlength:5,vField:e.$v.imageId,module:e.storeModule,vRules:{numeric:!0}}})],1)],e._v(" "),e.hasImages?[i("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[i("v-input",{attrs:{title:"Максимальная ширина печати",icon:"straighten",name:"max_print_width",value:e.maxPrintWidth,maxlength:4,vField:e.$v.maxPrintWidth,differ:!0,module:e.storeModule,vRules:{numeric:!0}}})],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[i("v-input",{attrs:{title:"Описание",icon:"comment",name:"image_description",maxlength:250,vField:e.$v.imageDescription,differ:!0,value:e.imageDescription,module:e.storeModule}})],1)]:e._e(),e._v(" "),i("div",{staticClass:"md-layout-item md-size-100"},[i("v-switch",{attrs:{vField:e.$v.publish,disabled:!e.hasPublishedImages,differ:!0,value:e.publish,module:e.storeModule}},[e.hasPublishedImages?e._e():i("span",[e._v("Нет опубликованных изображений")])])],1)],2),e._v(" "),i("div",{staticClass:"space-20"})])],1)],1)]),e._v(" "),i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-card",[i("card-icon-header",{attrs:{icon:"category",title:"Категории"}}),e._v(" "),i("md-card-content",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[e.topicList.length?i("v-select",{attrs:{title:"Темы",placeholder:"Выберите темы",multiple:!0,name:"topics",value:e.topics,options:e.topicList,vField:e.$v.topics,differ:!0,module:e.storeModule}}):e._e()],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[e.interiorList.length?i("v-select",{attrs:{title:"Интерьеры",placeholder:"Выберите интерьеры",multiple:!0,name:"interiors",value:e.interiors,options:e.interiorList,vField:e.$v.interiors,differ:!0,module:e.storeModule}}):e._e()],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[e.tagList.length?i("v-select",{attrs:{title:"Теги",placeholder:"Выберите теги",multiple:!0,name:"tags",value:e.tags,options:e.tagList,vField:e.$v.tags,differ:!0,module:e.storeModule}}):e._e()],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[e.ownerList.length?i("v-select",{attrs:{title:"Владельцы",placeholder:"Выберите владельца",name:"owner_id",value:e.owner,options:e.ownerList,vField:e.$v.owner,differ:!0,defaultValue:"",defaultTitle:"Свое",module:e.storeModule}}):e._e()],1)])])],1)],1)]),e._v(" "),i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-card",[i("card-icon-header",{attrs:{icon:"timeline",title:"SEO"}}),e._v(" "),i("md-card-content",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-100"},[i("v-input",{attrs:{title:"Мета заголовок",name:"meta_title",value:e.metaTitle,vField:e.$v.metaTitle,maxlength:150,module:e.storeModule}})],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[i("v-textarea",{attrs:{name:"description",value:e.description,vField:e.$v.description,differ:!0,module:e.storeModule}})],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[i("v-textarea",{attrs:{title:"Ключевые слова",name:"keywords",value:e.keywords,vField:e.$v.keywords,differ:!0,module:e.storeModule}})],1)]),e._v(" "),i("div",{staticClass:"space-30"})])],1)],1)])]):e._e()}),[],!1,null,null,null);t.default=m.exports}}]);