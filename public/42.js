(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,t,n){"use strict";var r={name:"PaletteTableCell",props:{items:{type:[Array,Object],default:null}}},a=(n(395),n(0)),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",e._l(e.items,(function(t,r){return n("md-icon",{key:r,staticClass:"md-color-icon",style:{color:t.alias}},[e._v("\n        lens\n        "),n("md-tooltip",{attrs:{"md-direction":"top"}},[e._v(e._s(t.title))])],1)})),1):e._e()}),[],!1,null,"492ccc7a",null);t.a=i.exports},182:function(e,t,n){var r=n(11),a=n(383);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},183:function(e,t,n){var r=n(11),a=n(385);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},186:function(e,t,n){var r=n(11),a=n(392);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},188:function(e,t,n){var r=n(11),a=n(396);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},20:function(e,t,n){"use strict";var r={name:"TableActions",props:{item:{type:Object,default:null},subPath:{type:String,required:!0},deleteDisabled:{type:Boolean,default:!1},editDisabled:{type:Boolean,default:!1},restParams:{type:Object,default:function(){return{}}}},methods:{onDelete:function(e){this.$emit("delete",e)}}},a=(n(382),n(0)),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item?n("div",{staticClass:"table-actions"},[n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",disabled:e.editDisabled,to:{name:"cms."+e.subPath+".edit",params:Object.assign({},{id:e.item.id},e.restParams)}}}),e._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:e.deleteDisabled,color:"md-danger"},on:{click:function(t){return e.onDelete(e.item)}}})],1):e._e()}),[],!1,null,"d323bed2",null);t.a=i.exports},200:function(e,t,n){var r=n(11),a=n(432);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},28:function(e,t,n){"use strict";var r={name:"ThumbTableCell",components:{ResourceImage:n(51).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},a=(n(384),n(0)),i=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);t.a=i.exports},382:function(e,t,n){"use strict";var r=n(182);n.n(r).a},383:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.table-actions[data-v-d323bed2] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},384:function(e,t,n){"use strict";var r=n(183);n.n(r).a},385:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},391:function(e,t,n){"use strict";var r=n(186);n.n(r).a},392:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.upload-button[data-v-12064ae6] {\n    display: inline-block;\n}\n.md-file-input[data-v-12064ae6] {\n    display: none;\n}\n",""])},395:function(e,t,n){"use strict";var r=n(188);n.n(r).a},396:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,".md-table-row .md-color-icon[data-v-492ccc7a] {\n  background: #fafafa;\n  border-radius: 50%;\n  margin: 1px;\n}",""])},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(9),a=n.n(r),i=n(34),s=n.n(i);function o(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){o(i,r,a,s,c,"next",e)}function c(e){o(i,r,a,s,c,"throw",e)}s(void 0)}))}}var u={methods:{create:function(e){var t=this;return c(a.a.mark((function n(){var r,i,o,c,u,l,d,m,f;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.sendData,i=e.title,o=e.successText,c=e.redirectRoute,u=e.storeModule,l=void 0===u?null:u,d=e.action,m=void 0===d?"store":d,t.$store.commit("SET_LOADING",!0),f=l?"".concat(l,"/"):"",n.next=5,t.$store.dispatch("".concat(f).concat(m),r);case 5:return n.next=7,t.$router.push(c);case 7:return t.$store.commit("SET_LOADING",!1),n.abrupt("return",s.a.fire({title:o,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return n.stop()}}),n)})))()}}},l={methods:{update:function(e){var t=this;return c(a.a.mark((function n(){var r,i,o,c,u,l,d,m;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.sendData,i=e.title,o=e.successText,c=e.redirectRoute,u=void 0===c?null:c,l=e.storeModule,d=void 0===l?null:l,t.$store.commit("SET_LOADING",!0),m=d?"".concat(d,"/"):"",n.next=5,t.$store.dispatch("".concat(m,"update"),r);case 5:if(!u){n.next=12;break}if(!(window.history.length>1)){n.next=10;break}t.$router.go(-1),n.next=12;break;case 10:return n.next=12,t.$router.push(u);case 12:return t.$store.commit("SET_LOADING",!1),n.abrupt("return",s.a.fire({title:o,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 14:case"end":return n.stop()}}),n)})))()}}},d={methods:{delete:function(e){var t=this;return c(a.a.mark((function n(){var r,i,s,o,c,u,l,d,m,b,h,g,v,x,y,w;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.payload,i=e.title,s=e.alertText,o=e.successText,c=e.storeModule,u=void 0===c?null:c,l=e.redirectRoute,d=void 0===l?null:l,m=e.tableMode,b=void 0!==m&&m,h=e.action,g=void 0===h?"delete":h,v=e.force,x=void 0!==v&&v,y=u?"".concat(u,"/"):"",w=x?"forceDelete":g,n.next=5,f(s);case 5:if(!n.sent.value){n.next=15;break}return t.$store.commit("SET_LOADING",!0),n.next=10,t.$store.dispatch("".concat(y).concat(w),{payload:r,tableMode:b});case 10:if(!d){n.next=13;break}return n.next=13,t.$router.push(d);case 13:return t.$store.commit("SET_LOADING",!1),n.abrupt("return",p(o,i));case 15:case"end":return n.stop()}}),n)})))()}}},m={methods:{deleteImageByIndex:function(e){var t=this;return c(a.a.mark((function n(){var r,i,s,o,c,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,i=e.index,s=e.alertText,o=e.successText,c=e.storeModule,u=void 0===c?null:c,n.next=3,f(s);case 3:if(!n.sent.value){n.next=11;break}return t.$store.commit("SET_LOADING",!0),n.next=8,t.$store.dispatch("".concat(u,"/deleteImageByIndex"),{id:r,index:i});case 8:return t.$store.commit("SET_LOADING",!1),n.next=11,p(o,i);case 11:case"end":return n.stop()}}),n)})))()}}},f=function(e){return s.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},p=function(e,t){return s.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},b={methods:{upload:function(e){var t=this;return c(a.a.mark((function n(){var r,i,o,c,u,l,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.images,i=e.type,o=void 0===i?null:i,c=e.id,u=void 0===c?null:c,l=e.storeModule,d=(void 0===l?null:l)||"categories",!r.length){n.next=10;break}if(!u){n.next=8;break}return n.next=6,t.$store.dispatch("".concat(d,"/uploadImages"),{images:r,id:u,type:o});case 6:n.next=10;break;case 8:return n.next=10,t.$store.dispatch("images/store",r);case 10:return n.next=12,s.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return n.abrupt("return",n.sent);case 13:case"end":return n.stop()}}),n)})))()}}},h={methods:{addImages:function(e){var t=this;return c(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,i=e.data,n.next=3,t.$store.dispatch("categories/addSelectedImages",{id:r,data:i});case 3:return n.next=5,t.$router.push({name:"cms.catalog.categories.images",params:{id:r}});case 5:return n.abrupt("return",s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return n.stop()}}),n)})))()}}},g={methods:{addImages:function(e){var t=this;return c(a.a.mark((function n(){var r,i,o,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.type,i=e.id,o=e.data,c=e.redirectRoute,n.next=3,t.$store.dispatch("subCategories/addSelectedImages",{type:r,id:i,data:o});case 3:return n.next=5,t.$router.push(c);case 5:return n.abrupt("return",s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return n.stop()}}),n)})))()}}}},431:function(e,t,n){"use strict";var r=n(200);n.n(r).a},432:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,".md-between[data-v-5fa748f1] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-5fa748f1] {\n  height: 4px;\n}",""])},704:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(5),i=n(4),s=n(84),o=n(28),c=n(113),u=n(20);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={name:"ImageList",mixins:[a.b,i.c,i.g],components:{ImageUploader:s.a,ThumbTableCell:o.a,PaletteTableCell:c.a,TableActions:u.a},props:{id:{type:[Number,String],default:null}},data:function(){return{mainImage:null,responseData:!1,storeModule:"images",redirectRoute:{name:"cms.catalog.color-collections"}}},computed:d({},Object(r.d)({title:function(e){return e.colorCollections.fields.title},mainImageId:function(e){return e.colorCollections.fields.main_image_id},images:function(e){return e.images.items}})),watch:{mainImageId:function(){this.mainImageId&&(this.mainImage=this.mainImageId)}},created:function(){var e=this;Promise.all([this.getItemAction(this.id),this.getImagesAction(this.id)]).then((function(){e.mainImage=e.mainImageId,e.setPageTitle("Изображения коллекции «".concat(e.title,"»")),e.responseData=!0})).catch((function(){return e.$router.push(e.redirectRoute)}))},methods:d(d({},Object(r.b)({publishAction:"images/togglePublish",getItemAction:"colorCollections/getItem",getImagesAction:"colorCollections/getImages",setMainImageAction:"colorCollections/setMainImage"})),{},{fileInputChange:function(e){var t=e.images;this.upload({images:t,type:this.category_type,id:this.id,storeModule:"colorCollections"})},onDelete:function(e){this.delete({payload:e.id,title:e.id,alertText:"изображение «".concat(e.id,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,tableMode:"images"})},onPublish:function(e){this.publishAction(e)},setMainImage:function(e){this.mainImageId!==e&&this.setMainImageAction({id:this.id,imageId:e})}})},p=(n(431),n(0)),b=Object(p.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{to:e.redirectRoute}}),e._v(" "),n("image-uploader",{attrs:{multiple:!0},on:{change:e.fileInputChange}})],1)],1),e._v(" "),n("progress-bar-loading")],1)]),e._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header",{attrs:{title:"Список изображений",icon:"assignment"}}),e._v(" "),n("md-card-content",[e.images.length?[n("md-table",{staticClass:"paginated-table table-striped table-hover",attrs:{value:e.images},scopedSlots:e._u([{key:"md-table-row",fn:function(t){var r=t.item;return n("md-table-row",{},[e._t("first-column",[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[e._v("\n                                        "+e._s(r.id)+"\n                                    ")])],{item:r}),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{path:r.path}})],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Цвета"}},[n("palette-table-cell",{attrs:{items:r.colors}})],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Владелец"}},[r.owner?n("span",{staticClass:"md-category-tag"},[e._v("\n                                        "+e._s(r.owner.title)+"\n                                    ")]):e._e()]),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Формат"}},[r.format?n("span",[n("md-icon",[e._v(e._s(r.format.icon))]),e._v(" "),n("md-tooltip",{attrs:{"md-direction":"top"}},[e._v(e._s(r.format.title))])],1):e._e()]),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Лайки"}},[n("md-icon",[e._v("favorite")]),e._v(" "+e._s(r.likes)+"\n                                ")],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Заказы"}},[n("md-icon",[e._v("shopping_cart")]),e._v(" "+e._s(r.orders)+"\n                                ")],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Опубл."}},[n("md-switch",{attrs:{value:!r.publish},on:{change:function(t){return e.onPublish(r.id)}}})],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Основное"}},[n("md-radio",{staticClass:"md-primary",attrs:{value:r.id},on:{change:e.setMainImage},model:{value:e.mainImage,callback:function(t){e.mainImage=t},expression:"mainImage"}})],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("table-actions",{attrs:{item:r,subPath:"images",deleteDisabled:r.id===e.mainImageId},on:{delete:e.onDelete}})],1)],2)}}],null,!0)})]:[n("div",{staticClass:"alert alert-info"},[n("span",[n("h3",[e._v("В коллекции еще нет изображений! Загрузите их!")])])])]],2)],1)],1)])]):e._e()}),[],!1,null,"5fa748f1",null);t.default=b.exports},84:function(e,t,n){"use strict";var r=n(9),a=n.n(r),i=n(2);function s(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){c(i,r,a,s,o,"next",e)}function o(e){c(i,r,a,s,o,"throw",e)}s(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={name:"ImageUploader",mixins:[n(138).a],props:{multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxFileSize:{type:Number,default:15},width:{type:Number,default:1600},height:{type:Number,default:1200}},data:function(){return{previews:[],images:[],preview:null,image:null}},computed:d(d({},Object(i.d)({loading:function(e){return e.loading}})),{},{name:function(){return this.multiple?"images[]":"image"}}),methods:d(d({},Object(i.b)({setLoadingAction:"setLoading"})),{},{onChange:function(e){var t=this;return u(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.setLoadingAction(!0),(r=e.target.files||e.dataTransfer.files).length){n.next=4;break}return n.abrupt("return",null);case 4:if(!t.multiple){n.next=9;break}return n.next=7,t.handleMultipleChange(r);case 7:n.next=11;break;case 9:return n.next=11,t.handleSingleChange(r[0]);case 11:case"end":return n.stop()}}),n)})))()},handleMultipleChange:function(e){var t=this;return u(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.processMultipleImages(e);case 2:r=s(t.previews),i=s(t.images),t.$emit("change",{previews:r,images:i}),t.previews=[],t.images=[];case 7:case"end":return n.stop()}}),n)})))()},handleSingleChange:function(e){var t=this;return u(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.processImage(e);case 2:r=Object.assign({},t.preview),i=Object.assign({},t.image),t.$emit("change",{preview:r,image:i}),t.preview=null,t.image=null;case 7:case"end":return n.stop()}}),n)})))()},processMultipleImages:function(e){var t=this;return u(a.a.mark((function n(){var r,i,s,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=0,i=Object.values(e);case 1:if(!(r<i.length)){n.next=11;break}return s=i[r],n.next=5,t.processImage(s);case 5:o=n.sent,t.images.push(o.image),t.previews.push(o.preview);case 8:r++,n.next=1;break;case 11:case"end":return n.stop()}}),n)})))()},processSingleImage:function(e){var t=this;return u(a.a.mark((function n(){var r,i,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.processImage(e,t.width,t.height);case 2:r=n.sent,i=r.preview,s=r.image,t.preview=i,t.image=s;case 7:case"end":return n.stop()}}),n)})))()}})},p=(n(391),n(0)),b=Object(p.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-button"},[n("input",{ref:"fileInput",staticClass:"md-file-input",attrs:{type:"file",multiple:e.multiple,name:e.name},on:{change:e.onChange}}),e._v(" "),n("md-button",{staticClass:"md-success md-just-icon",attrs:{disabled:e.disabled||e.loading},on:{click:function(t){return e.$refs.fileInput.click()}}},[n("md-icon",[e._v("get_app")]),e._v(" "),n("md-tooltip",{attrs:{"md-direction":"right"}},[e._v("Загрузить изображения")])],1)],1)}),[],!1,null,"12064ae6",null);t.a=b.exports}}]);