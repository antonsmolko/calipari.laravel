(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{112:function(t,e,o){"use strict";var n={name:"ImageTableActions",props:{item:{type:Object,default:null},remove:{type:Boolean,default:!1}},computed:{hasCollection:function(){return!!this.item.colorCollection},isCollectionMainImage:function(){return this.hasCollection&&this.item.id===this.item.colorCollection.main_image_id}},methods:{onDelete:function(){this.$emit("delete",this.item)},onRemove:function(){this.$emit("remove",this.item.id)}}},i=(o(371),o(0)),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.item?o("div",{staticClass:"table-actions"},[t.remove&&!t.hasCollection?o("control-button",{attrs:{title:"Отвязать",icon:"remove",color:"md-info"},on:{click:t.onRemove}}):t._e(),t._v(" "),o("router-button-link",{attrs:{title:"Сформировать проект",icon:"local_mall",color:"md-warning",route:"cms.store.projects.create",params:{imageId:t.item.id}}}),t._v(" "),t.hasCollection?o("router-button-link",{attrs:{title:"Коллекция",icon:"perm_media",color:"md-teal",route:"cms.catalog.color-collections.images",params:{id:t.item.colorCollection.id}}}):t._e(),t._v(" "),o("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",route:"cms.images.edit",params:{id:t.item.id}}}),t._v(" "),o("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.isCollectionMainImage,color:"md-danger"},on:{click:t.onDelete}})],1):t._e()}),[],!1,null,"21cf7242",null);e.a=r.exports},179:function(t,e,o){var n=o(9),i=o(372);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};n(i,r);t.exports=i.locals||{}},190:function(t,e,o){var n=o(9),i=o(394);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};n(i,r);t.exports=i.locals||{}},371:function(t,e,o){"use strict";var n=o(179);o.n(n).a},372:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,"\n.table-actions[data-v-21cf7242] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},393:function(t,e,o){"use strict";var n=o(190);o.n(n).a},394:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,".md-between[data-v-39e24b57] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-39e24b57] {\n  height: 4px;\n}",""])},4:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"f",(function(){return u})),o.d(e,"c",(function(){return l})),o.d(e,"b",(function(){return d})),o.d(e,"g",(function(){return p})),o.d(e,"d",(function(){return h})),o.d(e,"e",(function(){return g}));var n=o(15),i=o.n(n),r=o(42),s=o.n(r);function a(t,e,o,n,i,r,s){try{var a=t[r](s),c=a.value}catch(t){return void o(t)}a.done?e(c):Promise.resolve(c).then(n,i)}var c={methods:{create:function(t){var e=this,o=t.sendData,n=t.title,i=t.successText,r=t.redirectRoute,a=t.storeModule,c=void 0===a?null:a,u=t.action,l=void 0===u?"store":u,d=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(d).concat(l),o).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(r),s.a.fire({title:i,text:"«".concat(n,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{update:function(t){var e=this,o=t.sendData,n=t.title,i=t.redirectRoute,r=t.successText,a=t.storeModule,c=void 0===a?null:a,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u,"update"),o).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(i),s.a.fire({title:r,text:"«".concat(n,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,o=t.payload,n=t.title,i=t.alertText,r=t.successText,s=t.storeModule,a=void 0===s?null:s,c=t.redirectRoute,u=void 0===c?null:c,l=t.tableMode,d=void 0!==l&&l,p=t.force,h=void 0!==p&&p,g=a?"".concat(a,"/"):"",b=h?"forceDelete":"delete";return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(g).concat(b),{payload:o,tableMode:d}).then((function(){return u&&(window.history.length>1?e.$router.go(-1):e.$router.push(u)),f(r,n)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,o=t.id,n=t.index,i=t.alertText,r=t.successText,s=t.storeModule,a=void 0===s?null:s;return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(a,"/deleteImageByIndex"),{id:o,index:n}).then((function(){return f(r,n)}))}))}}},m=function(t){return s.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},f=function(t,e){return s.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},p={methods:{upload:function(t){var e,o=this;return(e=i.a.mark((function e(){var n,r,a,c,u,l,d,m,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.uploadFiles,r=t.type,a=void 0===r?null:r,c=t.id,u=void 0===c?null:c,l=t.storeModule,d=void 0===l?null:l,m=Array.from(n),f=d||"categories",!u){e.next=8;break}return e.next=6,o.$store.dispatch("".concat(f,"/uploadImages"),{files:m,id:u,type:a});case 6:e.next=10;break;case 8:return e.next=10,o.$store.dispatch("images/store",m);case 10:return e.next=12,s.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(n,i){var r=e.apply(t,o);function s(t){a(r,n,i,s,c,"next",t)}function c(t){a(r,n,i,s,c,"throw",t)}s(void 0)}))})()}}},h={methods:{addImages:function(t){var e=this,o=t.id,n=t.data;this.$store.dispatch("categories/addSelectedImages",{id:o,data:n}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:o}}),s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},g={methods:{addImages:function(t){var e=this,o=t.type,n=t.id,i=t.data,r=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:o,id:n,data:i}).then((function(){return e.$router.push(r),s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},648:function(t,e,o){"use strict";o.r(e);var n=o(3),i=o(5),r=o(4),s=o(94),a=o(112);function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var d={name:"ImageList",mixins:[i.b,r.c,r.g],components:{ImageListTable:s.a,ImageTableActions:a.a},props:{category_type:{type:String,default:"images"},id:{type:[Number,String],default:null}},data:function(){return{resourceUrl:"/catalog/".concat(this.category_type,"/").concat(this.id,"/images"),responseData:!1,storeModule:"images",redirectRoute:{name:"cms.catalog.subcategories.list",params:{category_type:this.category_type}}}},computed:u({},Object(n.d)({title:function(t){return t.subCategories.fields.title},fileProgress:function(t){return t.images.fileProgress}})),created:function(){var t=this;this.clearFieldsAction(),this.getItemAction({type:this.category_type,id:this.id}).then((function(){t.setPageTitle("Изображения «".concat(t.title,"»")),t.responseData=!0})).catch((function(){return t.$router.push(t.redirectRoute)}))},beforeDestroy:function(){this.clearFieldsAction()},methods:u(u({},Object(n.b)({clearFieldsAction:"subCategories/clearItemFields",getItemAction:"subCategories/getItem",togglePublishAction:"table/togglePublish",removeImageAction:"subCategories/removeImage"})),{},{fileInputChange:function(t){this.upload({uploadFiles:t.target.files,type:this.category_type,id:this.id,storeModule:"subCategories"})},onRemove:function(t){this.removeImageAction(t)},onDelete:function(t){this.delete({payload:t.id,title:t.id,alertText:"изображение «".concat(t.id,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,tableMode:"table"})},togglePublish:function(t){this.togglePublishAction("/images/".concat(t,"/publish"))}})},m=(o(393),o(0)),f=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.responseData?o("div",[o("div",{staticClass:"md-layout"},[o("div",{staticClass:"md-layout-item"},[o("md-card",{staticClass:"mt-0"},[o("md-card-content",{staticClass:"md-between"},[o("router-button-link",{attrs:{route:t.redirectRoute.name,params:t.redirectRoute.params}}),t._v(" "),o("div",[o("router-button-link",{attrs:{icon:"add",color:"md-success",title:"Добавить изображения",route:"cms.catalog.subcategories.images.excluded",params:{id:t.id}}}),t._v(" "),o("upload-button",{on:{change:t.fileInputChange}})],1)],1)],1)],1)]),t._v(" "),o("div",{staticClass:"md-layout"},[o("div",{staticClass:"md-layout-item"},[o("div",{staticClass:"md-layout-item md-progress-bar__container"},[t.fileProgress?o("md-progress-bar",{staticClass:"md-info",attrs:{"md-mode":"indeterminate","md-value":t.fileProgress}}):t._e()],1),t._v(" "),o("md-card",[o("card-icon-header",{attrs:{title:"Каталог изображений",icon:"image"}}),t._v(" "),o("md-card-content",[o("image-list-table",{attrs:{resourceUrl:t.resourceUrl},on:{publish:t.togglePublish},scopedSlots:t._u([{key:"actions-column",fn:function(e){var n=e.item;return[n?o("md-table-cell",{attrs:{"md-label":"Действия"}},[o("image-table-actions",{attrs:{item:n,remove:!0},on:{remove:t.onRemove,delete:t.onDelete}})],1):t._e()]}}],null,!1,3891602051)})],1)],1)],1)])]):t._e()}),[],!1,null,"39e24b57",null);e.default=f.exports}}]);