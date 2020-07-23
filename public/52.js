(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{111:function(t,e,n){"use strict";var o={name:"ImageTableActions",props:{item:{type:Object,default:null},remove:{type:Boolean,default:!1}},computed:{hasCollection:function(){return!!this.item.colorCollection},isCollectionMainImage:function(){return this.hasCollection&&this.item.id===this.item.colorCollection.main_image_id}},methods:{onDelete:function(){this.$emit("delete",this.item)},onRemove:function(){this.$emit("remove",this.item.id)}}},i=(n(365),n(0)),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"table-actions"},[t.remove&&!t.hasCollection?n("control-button",{attrs:{title:"Отвязать",icon:"remove",color:"md-info"},on:{click:t.onRemove}}):t._e(),t._v(" "),t.hasCollection?n("router-button-link",{attrs:{title:"Коллекция",icon:"perm_media",color:"md-teal",route:"cms.catalog.color-collections.images",params:{id:t.item.colorCollection.id}}}):t._e(),t._v(" "),n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",route:"cms.images.edit",params:{id:t.item.id}}}),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.isCollectionMainImage,color:"md-danger"},on:{click:t.onDelete}})],1):t._e()}),[],!1,null,"6a8592f3",null);e.a=r.exports},177:function(t,e,n){var o=n(11),i=n(366);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},179:function(t,e,n){var o=n(11),i=n(368);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},365:function(t,e,n){"use strict";var o=n(177);n.n(o).a},366:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.table-actions[data-v-6a8592f3] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},367:function(t,e,n){"use strict";var o=n(179);n.n(o).a},368:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-between[data-v-65da7fe5] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-65da7fe5] {\n  height: 4px;\n}",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return g})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return h}));var o=n(17),i=n.n(o),r=n(53),a=n.n(r);function s(t,e,n,o,i,r,a){try{var s=t[r](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,i)}var c={methods:{create:function(t){var e=this,n=t.sendData,o=t.title,i=t.successText,r=t.redirectRoute,s=t.storeModule,c=void 0===s?null:s,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u,"store"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(r),a.a.fire({title:i,text:"«".concat(o,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{update:function(t){var e=this,n=t.sendData,o=t.title,i=t.redirectRoute,r=t.successText,s=t.storeModule,c=void 0===s?null:s,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u,"update"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(i),a.a.fire({title:r,text:"«".concat(o,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,n=t.payload,o=t.title,i=t.alertText,r=t.successText,a=t.storeModule,s=void 0===a?null:a,c=t.redirectRoute,u=void 0===c?null:c,l=t.tableMode,d=void 0!==l&&l,g=t.force,p=void 0!==g&&g,h=s?"".concat(s,"/"):"",v=p?"forceDelete":"delete";return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(h).concat(v),{payload:n,tableMode:d}).then((function(){return u&&(window.history.length>1?e.$router.go(-1):e.$router.push(u)),f(r,o)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,o=t.index,i=t.alertText,r=t.successText,a=t.storeModule,s=void 0===a?null:a;return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:n,index:o}).then((function(){return f(r,o)}))}))}}},m=function(t){return a.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},f=function(t,e){return a.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},g={methods:{upload:function(t){var e,n=this;return(e=i.a.mark((function e(){var o,r,s,c,u,l,d,m,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.uploadFiles,r=t.type,s=void 0===r?null:r,c=t.id,u=void 0===c?null:c,l=t.storeModule,d=void 0===l?null:l,m=Array.from(o),f=d||"categories",!u){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(f,"/uploadImages"),{files:m,id:u,type:s});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",m);case 10:return e.next=12,a.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function a(t){s(r,o,i,a,c,"next",t)}function c(t){s(r,o,i,a,c,"throw",t)}a(void 0)}))})()}}},p={methods:{addImages:function(t){var e=this,n=t.id,o=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:o}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},h={methods:{addImages:function(t){var e=this,n=t.type,o=t.id,i=t.data,r=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:o,data:i}).then((function(){return e.$router.push(r),a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},642:function(t,e,n){"use strict";n.r(e);var o=n(17),i=n.n(o),r=n(2),a=n(6),s=n(4),c=n(94),u=n(111);function l(t,e,n,o,i,r,a){try{var s=t[r](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,i)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={name:"ImageList",mixins:[a.b,s.c,s.g],components:{ImageListTable:c.a,ImageTableActions:u.a},props:{category_type:{type:String,default:"images"},id:{type:[Number,String],default:null}},data:function(){return{storeModule:"images"}},computed:m(m({},Object(r.d)({category:function(t){return t.categories.item},fileProgress:function(t){return t.images.fileProgress}})),{},{resourceUrl:function(){return this.isCategoryPage?"/catalog/categories/".concat(this.id,"/images"):"/images/paginate"},isCategoryPage:function(){return"images"!==this.category_type}}),created:function(){this.init(this.category_type)},beforeDestroy:function(){},methods:m(m({},Object(r.b)({getCategoryAction:"categories/getItem",togglePublishAction:"table/togglePublish",removeImageAction:"categories/removeImage"})),{},{init:function(t){var e,n=this;return(e=i.a.mark((function e(){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("images"===t){e.next=3;break}return e.next=3,n.getCategoryAction(n.id);case 3:return o="images"===t?"Изображения":"Изображения категории «".concat(n.category.title,"»"),e.next=6,n.setPageTitle(o);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function a(t){l(r,o,i,a,s,"next",t)}function s(t){l(r,o,i,a,s,"throw",t)}a(void 0)}))})()},fileInputChange:function(t){this.upload({uploadFiles:t.target.files,type:this.category_type,id:this.id})},onRemove:function(t){this.removeImageAction({categoryId:this.id,imageId:t})},onDelete:function(t){this.delete({payload:t.id,title:t.id,alertText:"изображение «".concat(t.id,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,tableMode:"table"})},togglePublish:function(t){this.togglePublishAction("/images/".concat(t,"/publish"))}})},p=(n(367),n(0)),h=Object(p.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},["images"===t.category_type?n("router-button-link",{attrs:{route:"cms.dashboard"}}):n("router-button-link",{attrs:{route:"cms.catalog.categories.list",params:{category_type:t.category_type}}}),t._v(" "),n("div",["images"===t.category_type?n("router-button-link",{attrs:{icon:"delete",color:"md-info",title:"Удаленные изображения",route:"cms.images.trashed"}}):t._e(),t._v(" "),"images"!==t.category_type?n("router-button-link",{attrs:{icon:"add",color:"md-success",title:"Добавить изображения",route:"cms.catalog.categories.images.excluded",params:{id:t.id}}}):t._e(),t._v(" "),n("upload-button",{on:{change:t.fileInputChange}})],1)],1)],1)],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("div",{staticClass:"md-layout-item md-progress-bar__container"},[t.fileProgress?n("md-progress-bar",{staticClass:"md-info",attrs:{"md-mode":"indeterminate","md-value":t.fileProgress}}):t._e()],1),t._v(" "),n("md-card",[n("card-icon-header",{attrs:{title:"Каталог изображений",icon:"image"}}),t._v(" "),n("md-card-content",[n("image-list-table",{attrs:{resourceUrl:t.resourceUrl},on:{publish:t.togglePublish},scopedSlots:t._u([{key:"actions-column",fn:function(e){var o=e.item;return[o?n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("image-table-actions",{attrs:{item:o,remove:t.isCategoryPage},on:{remove:t.onRemove,delete:t.onDelete}})],1):t._e()]}}])})],1)],1)],1)])])}),[],!1,null,"65da7fe5",null);e.default=h.exports}}]);