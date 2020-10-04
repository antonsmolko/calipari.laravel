(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{183:function(e,t,n){var r=n(11),a=n(385);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},186:function(e,t,n){var r=n(11),a=n(392);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},211:function(e,t,n){var r=n(11),a=n(524);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},28:function(e,t,n){"use strict";var r={name:"ThumbTableCell",components:{ResourceImage:n(51).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},a=(n(384),n(0)),i=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);t.a=i.exports},384:function(e,t,n){"use strict";var r=n(183);n.n(r).a},385:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},391:function(e,t,n){"use strict";var r=n(186);n.n(r).a},392:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.upload-button[data-v-12064ae6] {\n    display: inline-block;\n}\n.md-file-input[data-v-12064ae6] {\n    display: none;\n}\n",""])},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return v}));var r=n(9),a=n.n(r),i=n(34),o=n.n(i);function s(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){s(i,r,a,o,c,"next",e)}function c(e){s(i,r,a,o,c,"throw",e)}o(void 0)}))}}var u={methods:{create:function(e){var t=this;return c(a.a.mark((function n(){var r,i,s,c,u,l,d,p,f;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.sendData,i=e.title,s=e.successText,c=e.redirectRoute,u=e.storeModule,l=void 0===u?null:u,d=e.action,p=void 0===d?"store":d,t.$store.commit("SET_LOADING",!0),f=l?"".concat(l,"/"):"",n.next=5,t.$store.dispatch("".concat(f).concat(p),r);case 5:return n.next=7,t.$router.push(c);case 7:return t.$store.commit("SET_LOADING",!1),n.abrupt("return",o.a.fire({title:s,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return n.stop()}}),n)})))()}}},l={methods:{update:function(e){var t=this;return c(a.a.mark((function n(){var r,i,s,c,u,l,d,p;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.sendData,i=e.title,s=e.successText,c=e.redirectRoute,u=void 0===c?null:c,l=e.storeModule,d=void 0===l?null:l,t.$store.commit("SET_LOADING",!0),p=d?"".concat(d,"/"):"",n.next=5,t.$store.dispatch("".concat(p,"update"),r);case 5:if(!u){n.next=12;break}if(!(window.history.length>1)){n.next=10;break}t.$router.go(-1),n.next=12;break;case 10:return n.next=12,t.$router.push(u);case 12:return t.$store.commit("SET_LOADING",!1),n.abrupt("return",o.a.fire({title:s,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 14:case"end":return n.stop()}}),n)})))()}}},d={methods:{delete:function(e){var t=this;return c(a.a.mark((function n(){var r,i,o,s,c,u,l,d,p,h,b,v,g,x,w,y;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.payload,i=e.title,o=e.alertText,s=e.successText,c=e.storeModule,u=void 0===c?null:c,l=e.redirectRoute,d=void 0===l?null:l,p=e.tableMode,h=void 0!==p&&p,b=e.action,v=void 0===b?"delete":b,g=e.force,x=void 0!==g&&g,w=u?"".concat(u,"/"):"",y=x?"forceDelete":v,n.next=5,f(o);case 5:if(!n.sent.value){n.next=15;break}return t.$store.commit("SET_LOADING",!0),n.next=10,t.$store.dispatch("".concat(w).concat(y),{payload:r,tableMode:h});case 10:if(!d){n.next=13;break}return n.next=13,t.$router.push(d);case 13:return t.$store.commit("SET_LOADING",!1),n.abrupt("return",m(s,i));case 15:case"end":return n.stop()}}),n)})))()}}},p={methods:{deleteImageByIndex:function(e){var t=this;return c(a.a.mark((function n(){var r,i,o,s,c,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,i=e.index,o=e.alertText,s=e.successText,c=e.storeModule,u=void 0===c?null:c,n.next=3,f(o);case 3:if(!n.sent.value){n.next=11;break}return t.$store.commit("SET_LOADING",!0),n.next=8,t.$store.dispatch("".concat(u,"/deleteImageByIndex"),{id:r,index:i});case 8:return t.$store.commit("SET_LOADING",!1),n.next=11,m(s,i);case 11:case"end":return n.stop()}}),n)})))()}}},f=function(e){return o.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},m=function(e,t){return o.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},h={methods:{upload:function(e){var t=this;return c(a.a.mark((function n(){var r,i,s,c,u,l,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.images,i=e.type,s=void 0===i?null:i,c=e.id,u=void 0===c?null:c,l=e.storeModule,d=(void 0===l?null:l)||"categories",!r.length){n.next=10;break}if(!u){n.next=8;break}return n.next=6,t.$store.dispatch("".concat(d,"/uploadImages"),{images:r,id:u,type:s});case 6:n.next=10;break;case 8:return n.next=10,t.$store.dispatch("images/store",r);case 10:return n.next=12,o.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return n.abrupt("return",n.sent);case 13:case"end":return n.stop()}}),n)})))()}}},b={methods:{addImages:function(e){var t=this;return c(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,i=e.data,n.next=3,t.$store.dispatch("categories/addSelectedImages",{id:r,data:i});case 3:return n.next=5,t.$router.push({name:"cms.catalog.categories.images",params:{id:r}});case 5:return n.abrupt("return",o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return n.stop()}}),n)})))()}}},v={methods:{addImages:function(e){var t=this;return c(a.a.mark((function n(){var r,i,s,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.type,i=e.id,s=e.data,c=e.redirectRoute,n.next=3,t.$store.dispatch("subCategories/addSelectedImages",{type:r,id:i,data:s});case 3:return n.next=5,t.$router.push(c);case 5:return n.abrupt("return",o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return n.stop()}}),n)})))()}}}},523:function(e,t,n){"use strict";var r=n(211);n.n(r).a},524:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,".md-between[data-v-03befbc2] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-03befbc2] {\n  height: 4px;\n}",""])},751:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(5),i=n(4),o=n(84),s=n(28);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={name:"ImageList",mixins:[a.b,i.b,i.g],components:{ImageUploader:o.a,ThumbTableCell:s.a},props:{id:{type:[Number,String],required:!0}},data:function(){return{mainImage:null,responseData:!1,storeModule:"workExamples",redirectRoute:{name:"cms.pages.portfolio",params:{activeTab:"Модули"}}}},computed:u({},Object(r.d)({title:function(e){return e.workExamples.fields.title},images:function(e){return e.workExamples.fields.images}})),created:function(){var e=this;Promise.all([this.getItemAction(this.id)]).then((function(){e.setPageTitle("Изображения работы «".concat(e.title,"»")),e.responseData=!0})).catch((function(){return e.$router.push(e.redirectRoute)}))},methods:u(u({},Object(r.b)({getItemAction:"workExamples/getItem"})),{},{fileInputChange:function(e){var t=e.images;this.upload({images:t,id:this.id,storeModule:this.storeModule})},onDelete:function(e){this.deleteImageByIndex({id:this.id,index:e.index,alertText:"изображение «".concat(e.index,"»"),successText:"Изображение удалено!",storeModule:this.storeModule})}})},p=(n(523),n(0)),f=Object(p.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{to:e.redirectRoute}}),e._v(" "),n("image-uploader",{attrs:{multiple:!0},on:{change:e.fileInputChange}})],1)],1),e._v(" "),n("progress-bar-loading")],1)]),e._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header",{attrs:{title:"Список изображений",icon:"assignment"}}),e._v(" "),n("md-card-content",[e.images.length?[n("md-table",{staticClass:"paginated-table table-striped table-hover",attrs:{value:e.images},scopedSlots:e._u([{key:"md-table-row",fn:function(t){var r=t.item;return n("md-table-row",{},[e._t("first-column",[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[e._v("\n                                        "+e._s(r.index)+"\n                                    ")])],{item:r}),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{width:200,path:r.path}})],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("div",{staticClass:"table-actions"},[n("control-button",{attrs:{title:"Удалить",icon:"delete",color:"md-danger"},on:{click:function(t){return e.onDelete(r)}}})],1)])],2)}}],null,!0)})]:[n("div",{staticClass:"alert alert-info"},[n("span",[n("h3",[e._v("В работе еще нет изображений! Загрузите их!")])])])]],2)],1)],1)])]):e._e()}),[],!1,null,"03befbc2",null);t.default=f.exports},84:function(e,t,n){"use strict";var r=n(9),a=n.n(r),i=n(2);function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){c(i,r,a,o,s,"next",e)}function s(e){c(i,r,a,o,s,"throw",e)}o(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={name:"ImageUploader",mixins:[n(138).a],props:{multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxFileSize:{type:Number,default:15},width:{type:Number,default:1600},height:{type:Number,default:1200}},data:function(){return{previews:[],images:[],preview:null,image:null}},computed:d(d({},Object(i.d)({loading:function(e){return e.loading}})),{},{name:function(){return this.multiple?"images[]":"image"}}),methods:d(d({},Object(i.b)({setLoadingAction:"setLoading"})),{},{onChange:function(e){var t=this;return u(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.setLoadingAction(!0),(r=e.target.files||e.dataTransfer.files).length){n.next=4;break}return n.abrupt("return",null);case 4:if(!t.multiple){n.next=9;break}return n.next=7,t.handleMultipleChange(r);case 7:n.next=11;break;case 9:return n.next=11,t.handleSingleChange(r[0]);case 11:case"end":return n.stop()}}),n)})))()},handleMultipleChange:function(e){var t=this;return u(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.processMultipleImages(e);case 2:r=o(t.previews),i=o(t.images),t.$emit("change",{previews:r,images:i}),t.previews=[],t.images=[];case 7:case"end":return n.stop()}}),n)})))()},handleSingleChange:function(e){var t=this;return u(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.processImage(e);case 2:r=Object.assign({},t.preview),i=Object.assign({},t.image),t.$emit("change",{preview:r,image:i}),t.preview=null,t.image=null;case 7:case"end":return n.stop()}}),n)})))()},processMultipleImages:function(e){var t=this;return u(a.a.mark((function n(){var r,i,o,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=0,i=Object.values(e);case 1:if(!(r<i.length)){n.next=11;break}return o=i[r],n.next=5,t.processImage(o);case 5:s=n.sent,t.images.push(s.image),t.previews.push(s.preview);case 8:r++,n.next=1;break;case 11:case"end":return n.stop()}}),n)})))()},processSingleImage:function(e){var t=this;return u(a.a.mark((function n(){var r,i,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.processImage(e,t.width,t.height);case 2:r=n.sent,i=r.preview,o=r.image,t.preview=i,t.image=o;case 7:case"end":return n.stop()}}),n)})))()}})},m=(n(391),n(0)),h=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-button"},[n("input",{ref:"fileInput",staticClass:"md-file-input",attrs:{type:"file",multiple:e.multiple,name:e.name},on:{change:e.onChange}}),e._v(" "),n("md-button",{staticClass:"md-success md-just-icon",attrs:{disabled:e.disabled||e.loading},on:{click:function(t){return e.$refs.fileInput.click()}}},[n("md-icon",[e._v("get_app")]),e._v(" "),n("md-tooltip",{attrs:{"md-direction":"right"}},[e._v("Загрузить изображения")])],1)],1)}),[],!1,null,"12064ae6",null);t.a=h.exports}}]);