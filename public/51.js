(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{111:function(t,e,n){"use strict";var o={name:"ImageTableActions",props:{item:{type:Object,default:null},remove:{type:Boolean,default:!1}},computed:{hasCollection:function(){return!!this.item.colorCollection},isCollectionMainImage:function(){return this.hasCollection&&this.item.id===this.item.colorCollection.main_image_id}},methods:{onDelete:function(){this.$emit("delete",this.item)},onRemove:function(){this.$emit("remove",this.item.id)}}},i=(n(366),n(0)),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"table-actions"},[t.remove&&!t.hasCollection?n("control-button",{attrs:{title:"Отвязать",icon:"remove",color:"md-info"},on:{click:t.onRemove}}):t._e(),t._v(" "),t.hasCollection?n("router-button-link",{attrs:{title:"Коллекция",icon:"perm_media",color:"md-teal",route:"cms.catalog.color-collections.images",params:{id:t.item.colorCollection.id}}}):t._e(),t._v(" "),n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",route:"cms.images.edit",params:{id:t.item.id}}}),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.isCollectionMainImage,color:"md-danger"},on:{click:t.onDelete}})],1):t._e()}),[],!1,null,"6a8592f3",null);e.a=r.exports},177:function(t,e,n){var o=n(10),i=n(367);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},189:function(t,e,n){var o=n(10),i=n(389);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},366:function(t,e,n){"use strict";var o=n(177);n.n(o).a},367:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.table-actions[data-v-6a8592f3] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},388:function(t,e,n){"use strict";var o=n(189);n.n(o).a},389:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-file-input[data-v-de1c68b0] {\n  display: none;\n}\n.md-between[data-v-de1c68b0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return b}));var o=n(17),i=n.n(o),r=n(42),s=n.n(r);function c(t,e,n,o,i,r,s){try{var c=t[r](s),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(o,i)}var a={methods:{create:function(t){var e=this,n=t.sendData,o=t.title,i=t.successText,r=t.redirectRoute,c=t.storeModule,a=void 0===c?null:c,u=a?"".concat(a,"/"):"";return this.$store.dispatch("".concat(u,"store"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(r),s.a.fire({title:i,text:"«".concat(o,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{update:function(t){var e=this,n=t.sendData,o=t.title,i=t.redirectRoute,r=t.successText,c=t.storeModule,a=void 0===c?null:c,u=a?"".concat(a,"/"):"";return this.$store.dispatch("".concat(u,"update"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(i),s.a.fire({title:r,text:"«".concat(o,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,n=t.payload,o=t.title,i=t.alertText,r=t.successText,s=t.storeModule,c=void 0===s?null:s,a=t.redirectRoute,u=void 0===a?null:a,l=t.tableMode,d=void 0!==l&&l,h=t.force,p=void 0!==h&&h,b=c?"".concat(c,"/"):"",g=p?"forceDelete":"delete";return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(b).concat(g),{payload:n,tableMode:d}).then((function(){return u&&(window.history.length>1?e.$router.go(-1):e.$router.push(u)),f(r,o)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,o=t.index,i=t.alertText,r=t.successText,s=t.storeModule,c=void 0===s?null:s;return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(c,"/deleteImageByIndex"),{id:n,index:o}).then((function(){return f(r,o)}))}))}}},m=function(t){return s.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},f=function(t,e){return s.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},h={methods:{upload:function(t){var e,n=this;return(e=i.a.mark((function e(){var o,r,c,a,u,l,d,m,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.uploadFiles,r=t.type,c=void 0===r?null:r,a=t.id,u=void 0===a?null:a,l=t.storeModule,d=void 0===l?null:l,m=Array.from(o),f=d||"categories",!u){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(f,"/uploadImages"),{files:m,id:u,type:c});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",m);case 10:return e.next=12,s.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(t){c(r,o,i,s,a,"next",t)}function a(t){c(r,o,i,s,a,"throw",t)}s(void 0)}))})()}}},p={methods:{addImages:function(t){var e=this,n=t.id,o=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:o}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},b={methods:{addImages:function(t){var e=this,n=t.type,o=t.id,i=t.data,r=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:o,data:i}).then((function(){return e.$router.push(r),s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},657:function(t,e,n){"use strict";n.r(e);var o=n(3),i=n(5),r=n(4),s=n(94),c=n(111);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"ExcludedImageList",mixins:[i.b,r.e],components:{ImageListTable:s.a,ImageTableActions:c.a},props:{id:{type:[Number,String],required:!0},category_type:{type:String,default:null}},data:function(){return{resourceUrl:"/catalog/".concat(this.category_type,"/").concat(this.id,"/images/excluded"),storeModule:"images",redirectRoute:{name:"cms.catalog.subcategories.images",params:{category_type:this.category_type,id:this.id}},responseData:!1,selected:[]}},computed:u({},Object(o.d)({title:function(t){return t.subCategories.fields.title}})),created:function(){var t=this;this.getItemAction({type:this.category_type,id:this.id}).then((function(){t.setPageTitle("Для категории «".concat(t.title,"»")),t.responseData=!0})).catch((function(){return t.$router.push(t.redirectRoute)}))},methods:u(u({},Object(o.b)({getItemAction:"subCategories/getItem",togglePublishAction:"table/togglePublish"})),{},{togglePublish:function(t){this.togglePublishAction("/images/".concat(t,"/publish"))},onImagesAdd:function(){return this.addImages({type:this.category_type,id:this.id,data:this.selected,redirectRoute:this.redirectRoute})}})},m=(n(388),n(0)),f=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{route:t.redirectRoute.name,params:t.redirectRoute.params}}),t._v(" "),t.selected.length?n("div",[n("control-button",{attrs:{title:"Добавить изображения",icon:"add"},on:{click:t.onImagesAdd}})],1):t._e()],1)],1)],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header",{attrs:{title:"Каталог изображений",icon:"image"}}),t._v(" "),n("md-card-content",[n("image-list-table",{attrs:{resourceUrl:t.resourceUrl,emptyContent:"Пока нет других изображений!"},on:{publish:t.togglePublish},scopedSlots:t._u([{key:"first-column",fn:function(e){var o=e.item;return[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                                "+t._s(o.id)+"\n                            ")])]}},{key:"actions-column",fn:function(e){var o=e.item;return[n("md-table-cell",{attrs:{"md-label":"Выбрать"}},[n("md-checkbox",{attrs:{value:o.id},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]}}],null,!1,2408791974)})],1)],1)],1)])]):t._e()}),[],!1,null,"de1c68b0",null);e.default=f.exports}}]);