(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return P.default}}),t.helpers=void 0;var n=j(r(402)),i=j(r(405)),u=j(r(406)),a=j(r(407)),o=j(r(408)),c=j(r(409)),s=j(r(410)),d=j(r(411)),l=j(r(412)),f=j(r(413)),m=j(r(414)),p=j(r(415)),v=j(r(416)),h=j(r(417)),b=j(r(418)),y=j(r(419)),g=j(r(420)),x=j(r(421)),O=j(r(422)),w=j(r(423)),P=j(r(424)),_=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(46));function j(e){return e&&e.__esModule?e:{default:e}}t.helpers=_},4:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"f",(function(){return d})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"g",(function(){return v})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return b}));var n=r(10),i=r.n(n),u=r(34),a=r.n(u);function o(e,t,r,n,i,u,a){try{var o=e[u](a),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var u=e.apply(t,r);function a(e){o(u,n,i,a,c,"next",e)}function c(e){o(u,n,i,a,c,"throw",e)}a(void 0)}))}}var s={methods:{create:function(e){var t=this;return c(i.a.mark((function r(){var n,u,o,c,s,d,l,f,m;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.sendData,u=e.title,o=e.successText,c=e.redirectRoute,s=e.storeModule,d=void 0===s?null:s,l=e.action,f=void 0===l?"store":l,t.$store.commit("SET_LOADING",!0),m=d?"".concat(d,"/"):"",r.next=5,t.$store.dispatch("".concat(m).concat(f),n);case 5:return r.next=7,t.$router.push(c);case 7:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",a.a.fire({title:o,text:"«".concat(u,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return r.stop()}}),r)})))()}}},d={methods:{update:function(e){var t=this;return c(i.a.mark((function r(){var n,u,o,c,s,d,l,f;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.sendData,u=e.title,o=e.successText,c=e.redirectRoute,s=void 0===c?null:c,d=e.storeModule,l=void 0===d?null:d,t.$store.commit("SET_LOADING",!0),f=l?"".concat(l,"/"):"",r.next=5,t.$store.dispatch("".concat(f,"update"),n);case 5:if(!s){r.next=12;break}if(!(window.history.length>1)){r.next=10;break}t.$router.go(-1),r.next=12;break;case 10:return r.next=12,t.$router.push(s);case 12:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",a.a.fire({title:o,text:"«".concat(u,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 14:case"end":return r.stop()}}),r)})))()}}},l={methods:{delete:function(e){var t=this;return c(i.a.mark((function r(){var n,u,a,o,c,s,d,l,f,v,h,b,y,g,x,O;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,u=e.title,a=e.alertText,o=e.successText,c=e.storeModule,s=void 0===c?null:c,d=e.redirectRoute,l=void 0===d?null:d,f=e.tableMode,v=void 0!==f&&f,h=e.action,b=void 0===h?"delete":h,y=e.force,g=void 0!==y&&y,x=s?"".concat(s,"/"):"",O=g?"forceDelete":b,r.next=5,m(a);case 5:if(!r.sent.value){r.next=15;break}return t.$store.commit("SET_LOADING",!0),r.next=10,t.$store.dispatch("".concat(x).concat(O),{payload:n,tableMode:v});case 10:if(!l){r.next=13;break}return r.next=13,t.$router.push(l);case 13:return t.$store.commit("SET_LOADING",!1),r.abrupt("return",p(o,u));case 15:case"end":return r.stop()}}),r)})))()}}},f={methods:{deleteImageByIndex:function(e){var t=this;return c(i.a.mark((function r(){var n,u,a,o,c,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.id,u=e.index,a=e.alertText,o=e.successText,c=e.storeModule,s=void 0===c?null:c,r.next=3,m(a);case 3:if(!r.sent.value){r.next=11;break}return t.$store.commit("SET_LOADING",!0),r.next=8,t.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:n,index:u});case 8:return t.$store.commit("SET_LOADING",!1),r.next=11,p(o,u);case 11:case"end":return r.stop()}}),r)})))()}}},m=function(e){return a.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},p=function(e,t){return a.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},v={methods:{upload:function(e){var t=this;return c(i.a.mark((function r(){var n,u,o,c,s,d,l;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.images,u=e.type,o=void 0===u?null:u,c=e.id,s=void 0===c?null:c,d=e.storeModule,l=(void 0===d?null:d)||"categories",!n.length){r.next=10;break}if(!s){r.next=8;break}return r.next=6,t.$store.dispatch("".concat(l,"/uploadImages"),{images:n,id:s,type:o});case 6:r.next=10;break;case 8:return r.next=10,t.$store.dispatch("images/store",n);case 10:return r.next=12,a.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return r.abrupt("return",r.sent);case 13:case"end":return r.stop()}}),r)})))()}}},h={methods:{addImages:function(e){var t=this;return c(i.a.mark((function r(){var n,u;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.id,u=e.data,r.next=3,t.$store.dispatch("categories/addSelectedImages",{id:n,data:u});case 3:return r.next=5,t.$router.push({name:"cms.catalog.categories.images",params:{id:n}});case 5:return r.abrupt("return",a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return r.stop()}}),r)})))()}}},b={methods:{addImages:function(e){var t=this;return c(i.a.mark((function r(){var n,u,o,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.type,u=e.id,o=e.data,c=e.redirectRoute,r.next=3,t.$store.dispatch("subCategories/addSelectedImages",{type:n,id:u,data:o});case 3:return r.next=5,t.$router.push(c);case 5:return r.abrupt("return",a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return r.stop()}}),r)})))()}}}},402:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(46).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},403:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(404).withParams:r(331).withParams;t.default=n}).call(this,r(127))},404:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},i=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=i}).call(this,r(94))},405:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(46).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},406:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(46).regex)("numeric",/^[0-9]*$/);t.default=n},407:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},408:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(46).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},409:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=i;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},410:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},411:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},412:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},413:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46),i=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=i},414:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},415:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},416:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(46).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},419:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},420:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},421:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},422:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(46);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},423:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(46).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},424:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(46).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},46:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,i=(n=r(403))&&n.__esModule?n:{default:n};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=a;t.len=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,i.default)({type:e},(function(e){return!a(e)||t.test(e)}))}},595:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r(1),u=r(6),a=r(4);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={name:"ArtCollectionCreate",mixins:[u.b,a.a],data:function(){return{redirectRoute:{name:"cms.catalog.art-collections"},responseData:!1,storeModule:"artCollections"}},validations:{title:{required:i.required,touch:!1,minLength:Object(i.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.title.$dirty||this.isUniqueTitle}},alias:{required:i.required,touch:!1,testAlias:function(e){return""===e.trim()||this.$config.ALIAS_REGEXP.test(e)},minLength:Object(i.minLength)(2),isUnique:function(e){return""===e.trim()&&!this.$v.alias.$dirty||this.isUniqueAlias}},image:{required:i.required,touch:!1},metaTitle:{touch:!1},description:{touch:!1},keywords:{touch:!1}},computed:c(c({},Object(n.d)("artCollections",{title:function(e){return e.fields.title},alias:function(e){return e.fields.alias},image:function(e){return e.fields.image},metaTitle:function(e){return e.fields.meta_title},description:function(e){return e.fields.description},keywords:function(e){return e.fields.keywords}})),{},{isUniqueTitle:function(){return this.$store.getters["artCollections/isUniqueTitle"](this.title)},isUniqueAlias:function(){return this.$store.getters["artCollections/isUniqueAlias"](this.alias)}}),created:function(){var e=this;this.clearFieldsAction(),this.getItemsAction().then((function(){e.setPageTitle("Новая коллекция"),e.responseData=!0})).catch((function(){return e.$router.push(e.redirectRoute)}))},methods:c(c({},Object(n.b)({getItemsAction:"artCollections/getItems",clearFieldsAction:"artCollections/clearItemFields"})),{},{onCreate:function(){return this.create({sendData:{title:this.title,alias:this.alias,image:this.image,meta_title:this.metaTitle,description:this.description,keywords:this.keywords},title:this.title,successText:"Коллекция создана!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},l=r(0),f=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.responseData?r("div",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",[r("md-card-content",{staticClass:"md-between"},[r("router-button-link",{attrs:{to:e.redirectRoute,title:"К списку коллекций"}}),e._v(" "),r("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:!e.$v.$invalid,expression:"!$v.$invalid"}]},[r("control-button",{attrs:{title:"Создать коллекцию"},on:{click:e.onCreate}})],1)],1)],1),e._v(" "),r("progress-bar-loading")],1)]),e._v(" "),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[r("md-card",[r("card-icon-header"),e._v(" "),r("md-card-content",[r("v-input",{attrs:{title:"Заголовок",icon:"title",name:"title",vField:e.$v.title,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0}}}),e._v(" "),r("v-input",{attrs:{title:"Алиас",icon:"code",name:"alias",vDelay:!0,vField:e.$v.alias,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0,alias:!0}}}),e._v(" "),r("v-image",{attrs:{name:"image",vField:e.$v.image,vRules:{required:!0},module:e.storeModule}})],1)],1)],1),e._v(" "),r("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[r("md-card",[r("card-icon-header",{attrs:{icon:"timeline",title:"SEO"}}),e._v(" "),r("md-card-content",[r("v-input",{attrs:{title:"Мета заголовок",name:"meta_title",vField:e.$v.metaTitle,maxlength:150,module:e.storeModule}}),e._v(" "),r("v-textarea",{attrs:{name:"description",vField:e.$v.description,module:e.storeModule}}),e._v(" "),r("v-textarea",{attrs:{title:"Ключевые слова",name:"keywords",vField:e.$v.keywords,module:e.storeModule}}),e._v(" "),r("div",{staticClass:"space-30"})],1)],1)],1)])]):e._e()}),[],!1,null,null,null);t.default=f.exports}}]);