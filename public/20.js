(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1:function(e,t,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var n=C(r(359)),o=C(r(362)),u=C(r(363)),a=C(r(364)),s=C(r(365)),l=C(r(366)),c=C(r(367)),d=C(r(368)),f=C(r(369)),m=C(r(370)),p=C(r(371)),v=C(r(372)),h=C(r(373)),y=C(r(374)),g=C(r(375)),b=C(r(376)),_=C(r(377)),w=C(r(378)),P=C(r(379)),x=C(r(380)),O=C(r(381)),j=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var t=$();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(45));function $(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return $=function(){return e},e}function C(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},29:function(e,t,r){"use strict";var i={name:"VSelect",props:{title:{type:String},name:{type:String,required:!0},vField:{type:Object,default:null},placeholder:{type:String},options:{type:Array,required:!0},value:{type:[Array,Number,String],default:null},multiple:{type:Boolean,default:!1},defaultValue:{type:[Array,Number,String,Object],default:null},defaultTitle:{type:String,default:"Нет"},nameField:{type:String,default:"title"},namePostfix:{type:String,default:null},indexName:{type:[String,Number],default:"id"},module:{type:String,default:null},action:{type:String,default:"setItemField"},differ:{type:Boolean,default:!1}},data:function(){return{valueReference:null}},computed:{storeModule:function(){return this.module?"".concat(this.module,"/"):""}},methods:{onSelect:function(e){this.vField&&this.touched(this.vField,e),this.$store.dispatch("".concat(this.storeModule).concat(this.action),{field:this.name,value:e})},isDiffer:function(e,t){return this.multiple?Boolean(e.filter((function(e){return!t.includes(e)})).concat(t.filter((function(t){return!e.includes(t)}))).length):e!=t},touchedDifferent:function(e,t){this.isDiffer(t,this.valueReference)?e.$touch():e.$reset()},touched:function(e,t){this.differ?this.touchedDifferent(e,t):e.$touch()}},created:function(){this.valueReference=this.value instanceof Array?this.value.slice(0):this.value}},n=r(0),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.title?r("h4",{staticClass:"card-title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),r("md-field",[r("label",[e._v(e._s(e.placeholder))]),e._v(" "),r("md-select",{attrs:{value:e.value,multiple:e.multiple},on:{"md-selected":e.onSelect}},[null!==e.defaultValue?r("md-option",{attrs:{value:e.defaultValue}},[e._v(e._s(e.defaultTitle))]):e._e(),e._v(" "),e._l(e.options,(function(t,i){return r("md-option",{key:i,attrs:{value:t[e.indexName]}},[e._v("\n                "+e._s(t[e.nameField])+e._s(e.namePostfix?" - [ "+t[e.namePostfix]+" ]":"")+"\n            ")])}))],2)],1)],1)}),[],!1,null,null,null);t.a=o.exports},359:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(45).regex)("alpha",/^[a-zA-Z]*$/);t.default=i},360:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="web"===e.env.BUILD?r(361).withParams:r(287).withParams;t.default=i}).call(this,r(135))},361:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var i="undefined"!=typeof window?window:void 0!==e?e:{},n=i.vuelidate?i.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=n}).call(this,r(92))},362:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(45).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},363:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(45).regex)("numeric",/^[0-9]*$/);t.default=i},364:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e,t){return(0,i.withParams)({type:"between",min:e,max:t},(function(r){return!(0,i.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(45).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=i},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45),n=(0,i.withParams)({type:"ipAddress"},(function(e){if(!(0,i.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=n;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,i.withParams)({type:"macAddress"},(function(t){if(!(0,i.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(n)}))};var n=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},368:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e){return(0,i.withParams)({type:"maxLength",max:e},(function(t){return!(0,i.req)(t)||(0,i.len)(t)<=e}))}},369:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e){return(0,i.withParams)({type:"minLength",min:e},(function(t){return!(0,i.req)(t)||(0,i.len)(t)>=e}))}},370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45),n=(0,i.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,i.req)(e.trim()):(0,i.req)(e)}));t.default=n},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e){return(0,i.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,i.ref)(e,this,r)||(0,i.req)(t)}))}},372:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e){return(0,i.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,i.ref)(e,this,r)||(0,i.req)(t)}))}},373:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e){return(0,i.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,i.ref)(e,this,r)}))}},374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(45).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=i},375:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,i)}),!1)}))}},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,i)}),!0)}))}},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e){return(0,i.withParams)({type:"not"},(function(t,r){return!(0,i.req)(t)||!e.call(this,t,r)}))}},378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e){return(0,i.withParams)({type:"minValue",min:e},(function(t){return!(0,i.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(45);t.default=function(e){return(0,i.withParams)({type:"maxValue",max:e},(function(t){return!(0,i.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(45).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=i},381:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(45).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},4:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return f})),r.d(t,"g",(function(){return v})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return y}));var i=r(9),n=r.n(i),o=r(34),u=r.n(o);function a(e,t,r,i,n,o,u){try{var a=e[o](u),s=a.value}catch(e){return void r(e)}a.done?t(s):Promise.resolve(s).then(i,n)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function u(e){a(o,i,n,u,s,"next",e)}function s(e){a(o,i,n,u,s,"throw",e)}u(void 0)}))}}var l={methods:{create:function(e){var t=this;return s(n.a.mark((function r(){var i,o,a,s,l,c,d,f,m;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.sendData,o=e.title,a=e.successText,s=e.redirectRoute,l=e.storeModule,c=void 0===l?null:l,d=e.action,f=void 0===d?"store":d,t.$store.commit("SET_LOADING",!0),m=c?"".concat(c,"/"):"",r.next=5,t.$store.dispatch("".concat(m).concat(f),i);case 5:return r.next=7,t.$router.push(s);case 7:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",u.a.fire({title:a,text:"«".concat(o,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return r.stop()}}),r)})))()}}},c={methods:{update:function(e){var t=this;return s(n.a.mark((function r(){var i,o,a,s,l,c,d,f;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.sendData,o=e.title,a=e.successText,s=e.redirectRoute,l=void 0===s?null:s,c=e.storeModule,d=void 0===c?null:c,t.$store.commit("SET_LOADING",!0),f=d?"".concat(d,"/"):"",r.next=5,t.$store.dispatch("".concat(f,"update"),i);case 5:if(!l){r.next=12;break}if(!(window.history.length>1)){r.next=10;break}t.$router.go(-1),r.next=12;break;case 10:return r.next=12,t.$router.push(l);case 12:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",u.a.fire({title:a,text:"«".concat(o,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 14:case"end":return r.stop()}}),r)})))()}}},d={methods:{delete:function(e){var t=this;return s(n.a.mark((function r(){var i,o,u,a,s,l,c,d,f,v,h,y,g,b,_,w;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.payload,o=e.title,u=e.alertText,a=e.successText,s=e.storeModule,l=void 0===s?null:s,c=e.redirectRoute,d=void 0===c?null:c,f=e.tableMode,v=void 0!==f&&f,h=e.action,y=void 0===h?"delete":h,g=e.force,b=void 0!==g&&g,_=l?"".concat(l,"/"):"",w=b?"forceDelete":y,r.next=5,m(u);case 5:if(!r.sent.value){r.next=15;break}return t.$store.commit("SET_LOADING",!0),r.next=10,t.$store.dispatch("".concat(_).concat(w),{payload:i,tableMode:v});case 10:if(!d){r.next=13;break}return r.next=13,t.$router.push(d);case 13:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",p(a,o));case 15:case"end":return r.stop()}}),r)})))()}}},f={methods:{deleteImageByIndex:function(e){var t=this;return s(n.a.mark((function r(){var i,o,u,a,s,l;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.id,o=e.index,u=e.alertText,a=e.successText,s=e.storeModule,l=void 0===s?null:s,r.next=3,m(u);case 3:if(!r.sent.value){r.next=11;break}return t.$store.commit("SET_LOADING",!0),r.next=8,t.$store.dispatch("".concat(l,"/deleteImageByIndex"),{id:i,index:o});case 8:return t.$store.commit("SET_LOADING",!1),r.next=11,p(a,o);case 11:case"end":return r.stop()}}),r)})))()}}},m=function(e){return u.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},p=function(e,t){return u.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},v={methods:{upload:function(e){var t=this;return s(n.a.mark((function r(){var i,o,a,s,l,c,d;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.images,o=e.type,a=void 0===o?null:o,s=e.id,l=void 0===s?null:s,c=e.storeModule,d=(void 0===c?null:c)||"categories",!i.length){r.next=10;break}if(!l){r.next=8;break}return r.next=6,t.$store.dispatch("".concat(d,"/uploadImages"),{images:i,id:l,type:a});case 6:r.next=10;break;case 8:return r.next=10,t.$store.dispatch("images/store",i);case 10:return r.next=12,u.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return r.abrupt("return",r.sent);case 13:case"end":return r.stop()}}),r)})))()}}},h={methods:{addImages:function(e){var t=this;return s(n.a.mark((function r(){var i,o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.id,o=e.data,r.next=3,t.$store.dispatch("categories/addSelectedImages",{id:i,data:o});case 3:return r.next=5,t.$router.push({name:"cms.catalog.categories.images",params:{id:i}});case 5:return r.abrupt("return",u.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return r.stop()}}),r)})))()}}},y={methods:{addImages:function(e){var t=this;return s(n.a.mark((function r(){var i,o,a,s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.type,o=e.id,a=e.data,s=e.redirectRoute,r.next=3,t.$store.dispatch("subCategories/addSelectedImages",{type:i,id:o,data:a});case 3:return r.next=5,t.$router.push(s);case 5:return r.abrupt("return",u.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return r.stop()}}),r)})))()}}}},45:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var i,n=(i=r(360))&&i.__esModule?i:{default:i};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;t.len=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))}},703:function(e,t,r){"use strict";r.r(t);var i=r(2),n=r(1),o=r(29),u=r(5),a=r(4);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={name:"ColorCollectionEdit",components:{VSelect:o.a},mixins:[u.b,a.f,a.c],props:{id:{type:[String,Number],required:!0}},data:function(){return{redirectRoute:{name:"cms.catalog.color-collections"},responseData:!1,storeModule:"colorCollections",controlSaveVisibilities:!1}},validations:{title:{required:n.required,touch:!1,minLength:Object(n.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.title.$dirty||this.isUniqueTitleEdit}},alias:{required:n.required,touch:!1,minLength:Object(n.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.alias.$dirty||this.isUniqueAliasEdit},testAlias:function(e){return""===e.trim()||this.$config.ALIAS_REGEXP.test(e)}},imageId:{numeric:n.numeric,touch:!1},maxPrintWidth:{numeric:n.numeric,touch:!1},imageDescription:{touch:!1},topics:{touch:!1},interiors:{touch:!1},tags:{touch:!1},owner:{touch:!1},publish:{touch:!1},metaTitle:{touch:!1},description:{touch:!1},keywords:{touch:!1}},computed:l(l({},Object(i.d)({title:function(e){return e.colorCollections.fields.title},alias:function(e){return e.colorCollections.fields.alias},imageId:function(e){return e.colorCollections.fields.image_id},imageDescription:function(e){return e.colorCollections.fields.image_description},maxPrintWidth:function(e){return e.colorCollections.fields.max_print_width},topics:function(e){return e.colorCollections.fields.topics},interiors:function(e){return e.colorCollections.fields.interiors},tags:function(e){return e.colorCollections.fields.tags},owner:function(e){return e.colorCollections.fields.owner_id},publish:function(e){return e.colorCollections.fields.publish},hasPublishedImages:function(e){return e.colorCollections.fields.has_published_images},hasImages:function(e){return e.colorCollections.fields.has_images},metaTitle:function(e){return e.colorCollections.fields.meta_title},description:function(e){return e.colorCollections.fields.description},keywords:function(e){return e.colorCollections.fields.keywords},ownerList:function(e){return e.subCategories.itemsByType.owners}})),{},{topicList:function(){return this.$store.getters["categories/getItemsByType"]("topics")},colorList:function(){return this.$store.getters["categories/getItemsByType"]("colors")},interiorList:function(){return this.$store.getters["categories/getItemsByType"]("interiors")},tagList:function(){return this.$store.getters["categories/getItemsByType"]("tags")},isUniqueTitleEdit:function(){return this.$store.getters["colorCollections/isUniqueTitleEdit"](this.title,this.id)},isUniqueAliasEdit:function(){return this.$store.getters["colorCollections/isUniqueAliasEdit"](this.alias,this.id)}}),created:function(){var e=this;this.clearFieldsAction(),Promise.all([this.getItemAction(this.id),this.getItemsAction(),this.getCategoriesAction(),this.getSubcategoriesAction("owners")]).then((function(){e.setPageTitle(e.title),e.responseData=!0})).then((function(){e.$v.$reset(),e.controlSaveVisibilities=!0})).catch((function(){return e.$router.push(e.redirectRoute)}))},methods:l(l({},Object(i.b)({clearFieldsAction:"colorCollections/clearItemFields",getItemsAction:"colorCollections/getItems",getItemAction:"colorCollections/getItem",getCategoriesAction:"categories/getItems",getSubcategoriesAction:"subCategories/getItemsWithType"})),{},{onUpdate:function(){return this.update({sendData:{data:{title:this.title,alias:this.alias,image_id:this.imageId,max_print_width:this.maxPrintWidth,image_description:this.imageDescription,topics:this.topics,interiors:this.interiors,tags:this.tags,owner_id:this.owner||"",publish:Number(this.publish),meta_title:this.metaTitle,description:this.description,keywords:this.keywords},id:this.id},title:this.title,successText:"Коллекция обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.title,alertText:"коллекцию «".concat(this.title,"»"),successText:"Коллекция удалена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},f=r(0),m=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.responseData?r("div",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",[r("md-card-content",{staticClass:"md-between"},[r("router-button-link",{attrs:{to:e.redirectRoute,title:"К списку коллекций"}}),e._v(" "),r("div",[r("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:e.controlSaveVisibilities&&e.$v.$anyDirty&&!e.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[r("control-button",{attrs:{title:"Сохранить"},on:{click:e.onUpdate}})],1),e._v(" "),r("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:e.onDelete}})],1)],1)],1),e._v(" "),r("progress-bar-loading")],1)]),e._v(" "),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",[r("card-icon-header"),e._v(" "),r("md-card-content",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[r("v-input",{attrs:{title:"Заголовок",icon:"title",name:"title",value:e.title,vField:e.$v.title,differ:!0,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0}}})],1),e._v(" "),r("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[r("v-input",{attrs:{title:"Алиас",icon:"code",name:"alias",value:e.alias,vDelay:!0,vField:e.$v.alias,differ:!0,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0,alias:!0}}})],1),e._v(" "),e.hasImages?e._e():[r("div",{staticClass:"md-layout-item md-small-size-100"},[r("v-input",{attrs:{title:"ID Изображения",icon:"image",name:"image_id",maxlength:5,vField:e.$v.imageId,module:e.storeModule,vRules:{numeric:!0}}})],1)],e._v(" "),e.hasImages?[r("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[r("v-input",{attrs:{title:"Максимальная ширина печати",icon:"straighten",name:"max_print_width",value:e.maxPrintWidth,maxlength:4,vField:e.$v.maxPrintWidth,differ:!0,module:e.storeModule,vRules:{numeric:!0}}})],1),e._v(" "),r("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[r("v-input",{attrs:{title:"Описание",icon:"comment",name:"image_description",maxlength:250,vField:e.$v.imageDescription,differ:!0,value:e.imageDescription,module:e.storeModule}})],1)]:e._e(),e._v(" "),r("div",{staticClass:"md-layout-item md-size-100"},[r("v-switch",{attrs:{vField:e.$v.publish,disabled:!e.hasPublishedImages,differ:!0,value:e.publish,module:e.storeModule}},[e.hasPublishedImages?e._e():r("span",[e._v("Нет опубликованных изображений")])])],1)],2),e._v(" "),r("div",{staticClass:"space-20"})])],1)],1)]),e._v(" "),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",[r("card-icon-header",{attrs:{icon:"category",title:"Категории"}}),e._v(" "),r("md-card-content",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[e.topicList.length?r("v-select",{attrs:{title:"Темы",placeholder:"Выберите темы",multiple:!0,name:"topics",value:e.topics,options:e.topicList,vField:e.$v.topics,differ:!0,module:e.storeModule}}):e._e()],1),e._v(" "),r("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[e.interiorList.length?r("v-select",{attrs:{title:"Интерьеры",placeholder:"Выберите интерьеры",multiple:!0,name:"interiors",value:e.interiors,options:e.interiorList,vField:e.$v.interiors,differ:!0,module:e.storeModule}}):e._e()],1),e._v(" "),r("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[e.tagList.length?r("v-select",{attrs:{title:"Теги",placeholder:"Выберите теги",multiple:!0,name:"tags",value:e.tags,options:e.tagList,vField:e.$v.tags,differ:!0,module:e.storeModule}}):e._e()],1),e._v(" "),r("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[e.ownerList.length?r("v-select",{attrs:{title:"Владельцы",placeholder:"Выберите владельца",name:"owner_id",value:e.owner,options:e.ownerList,vField:e.$v.owner,differ:!0,defaultValue:"",defaultTitle:"Свое",module:e.storeModule}}):e._e()],1)])])],1)],1)]),e._v(" "),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",[r("card-icon-header",{attrs:{icon:"timeline",title:"SEO"}}),e._v(" "),r("md-card-content",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-100"},[r("v-input",{attrs:{title:"Мета заголовок",name:"meta_title",value:e.metaTitle,vField:e.$v.metaTitle,maxlength:150,module:e.storeModule}})],1),e._v(" "),r("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[r("v-textarea",{attrs:{name:"description",value:e.description,vField:e.$v.description,differ:!0,module:e.storeModule}})],1),e._v(" "),r("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[r("v-textarea",{attrs:{title:"Ключевые слова",name:"keywords",value:e.keywords,vField:e.$v.keywords,differ:!0,module:e.storeModule}})],1)]),e._v(" "),r("div",{staticClass:"space-30"})])],1)],1)])]):e._e()}),[],!1,null,null,null);t.default=m.exports}}]);