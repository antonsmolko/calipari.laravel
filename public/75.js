(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{112:function(t,e,r){"use strict";var n={name:"ImageTableActions",props:{item:{type:Object,default:null},remove:{type:Boolean,default:!1}},computed:{hasCollection:function(){return Boolean(this.item.colorCollection)},isCollectionMainImage:function(){return this.hasCollection&&this.item.id===this.item.colorCollection.main_image_id}},methods:{onDelete:function(){this.$emit("delete",this.item)},onRemove:function(){this.$emit("remove",this.item.id)}}},o=r(0),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.item?r("div",{staticClass:"table-actions"},[t.remove&&!t.hasCollection?r("control-button",{attrs:{title:"Отвязать",icon:"remove",color:"md-info"},on:{click:t.onRemove}}):t._e(),t._v(" "),r("router-button-link",{attrs:{title:"Сформировать проект",icon:"local_mall",color:"md-warning",to:{name:"cms.store.projects.create",params:{imageId:t.item.id}}}}),t._v(" "),t.hasCollection?r("router-button-link",{attrs:{title:"Коллекция",icon:"perm_media",color:"md-teal",to:{name:"cms.catalog.color-collections.images",params:{id:t.item.colorCollection.id}}}}):t._e(),t._v(" "),r("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",to:{name:"cms.images.edit",params:{id:t.item.id}}}}),t._v(" "),r("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.isCollectionMainImage,color:"md-danger"},on:{click:t.onDelete}})],1):t._e()}),[],!1,null,null,null);e.a=a.exports},4:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"f",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"b",(function(){return m})),r.d(e,"g",(function(){return g})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return v}));var n=r(13),o=r.n(n),a=r(34),i=r.n(a);function c(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,s,"next",t)}function s(t){c(a,n,o,i,s,"throw",t)}i(void 0)}))}}var u={methods:{create:function(t){var e=this;return s(o.a.mark((function r(){var n,a,c,s,u,l,d,m,f;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.sendData,a=t.title,c=t.successText,s=t.redirectRoute,u=t.storeModule,l=void 0===u?null:u,d=t.action,m=void 0===d?"store":d,e.$store.commit("SET_LOADING",!0),f=l?"".concat(l,"/"):"",r.next=5,e.$store.dispatch("".concat(f).concat(m),n);case 5:return r.next=7,e.$router.push(s);case 7:return e.$store.commit("SET_LOADING",!1),r.abrupt("return",i.a.fire({title:c,text:"«".concat(a,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return r.stop()}}),r)})))()}}},l={methods:{update:function(t){var e=this;return s(o.a.mark((function r(){var n,a,c,s,u,l,d,m;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.sendData,a=t.title,c=t.successText,s=t.redirectRoute,u=void 0===s?null:s,l=t.storeModule,d=void 0===l?null:l,e.$store.commit("SET_LOADING",!0),m=d?"".concat(d,"/"):"",r.next=5,e.$store.dispatch("".concat(m,"update"),n);case 5:if(!u){r.next=8;break}return r.next=8,e.$router.push(u);case 8:return e.$store.commit("SET_LOADING",!1),r.abrupt("return",i.a.fire({title:c,text:"«".concat(a,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 10:case"end":return r.stop()}}),r)})))()}}},d={methods:{delete:function(t){var e=this;return s(o.a.mark((function r(){var n,a,i,c,s,u,l,d,m,g,h,v,b,y,x,_;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.payload,a=t.title,i=t.alertText,c=t.successText,s=t.storeModule,u=void 0===s?null:s,l=t.redirectRoute,d=void 0===l?null:l,m=t.tableMode,g=void 0!==m&&m,h=t.action,v=void 0===h?"delete":h,b=t.force,y=void 0!==b&&b,x=u?"".concat(u,"/"):"",_=y?"forceDelete":v,r.next=5,f(i);case 5:if(!r.sent.value){r.next=15;break}return e.$store.commit("SET_LOADING",!0),r.next=10,e.$store.dispatch("".concat(x).concat(_),{payload:n,tableMode:g});case 10:if(!d){r.next=13;break}return r.next=13,e.$router.push(d);case 13:return e.$store.commit("SET_LOADING",!1),r.abrupt("return",p(c,a));case 15:case"end":return r.stop()}}),r)})))()}}},m={methods:{deleteImageByIndex:function(t){var e=this;return s(o.a.mark((function r(){var n,a,i,c,s,u;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.id,a=t.index,i=t.alertText,c=t.successText,s=t.storeModule,u=void 0===s?null:s,e.$store.commit("SET_LOADING",!0),r.next=4,f(i);case 4:if(!r.sent.value){r.next=11;break}return r.next=8,e.$store.dispatch("".concat(u,"/deleteImageByIndex"),{id:n,index:a});case 8:return e.$store.commit("SET_LOADING",!1),r.next=11,p(c,a);case 11:case"end":return r.stop()}}),r)})))()}}},f=function(t){return i.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},p=function(t,e){return i.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},g={methods:{upload:function(t){var e=this;return s(o.a.mark((function r(){var n,a,c,s,u,l,d,m,f;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.uploadFiles,a=t.type,c=void 0===a?null:a,s=t.id,u=void 0===s?null:s,l=t.storeModule,d=void 0===l?null:l,m=Array.from(n),f=d||"categories",!m.length){r.next=11;break}if(!u){r.next=9;break}return r.next=7,e.$store.dispatch("".concat(f,"/uploadImages"),{files:m,id:u,type:c});case 7:r.next=11;break;case 9:return r.next=11,e.$store.dispatch("images/store",m);case 11:return r.next=13,i.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 13:return r.abrupt("return",r.sent);case 14:case"end":return r.stop()}}),r)})))()}}},h={methods:{addImages:function(t){var e=this;return s(o.a.mark((function r(){var n,a;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.id,a=t.data,r.next=3,e.$store.dispatch("categories/addSelectedImages",{id:n,data:a});case 3:return r.next=5,e.$router.push({name:"cms.catalog.categories.images",params:{id:n}});case 5:return r.abrupt("return",i.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return r.stop()}}),r)})))()}}},v={methods:{addImages:function(t){var e=this;return s(o.a.mark((function r(){var n,a,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.type,a=t.id,c=t.data,s=t.redirectRoute,r.next=3,e.$store.dispatch("subCategories/addSelectedImages",{type:n,id:a,data:c});case 3:return r.next=5,e.$router.push(s);case 5:return r.abrupt("return",i.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return r.stop()}}),r)})))()}}}},667:function(t,e,r){"use strict";r.r(e);var n=r(13),o=r.n(n),a=r(2),i=r(5),c=r(4),s=r(96),u=r(112);function l(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"ImageList",mixins:[i.b,c.c,c.g],components:{ImageListTable:s.a,ImageTableActions:u.a},props:{category_type:{type:String,default:"images"},id:{type:[Number,String],default:null}},data:function(){return{storeModule:"images"}},computed:m(m({},Object(a.d)({category:function(t){return t.categories.item},fileProgress:function(t){return t.images.fileProgress}})),{},{resourceUrl:function(){return this.isCategoryPage?"/catalog/categories/".concat(this.id,"/images"):"/images/paginate"},isCategoryPage:function(){return"images"!==this.category_type}}),created:function(){this.init(this.category_type)},methods:m(m({},Object(a.b)({getCategoryAction:"categories/getItem",togglePublishAction:"table/togglePublish",removeImageAction:"categories/removeImage"})),{},{init:function(t){var e,r=this;return(e=o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("images"===t){e.next=3;break}return e.next=3,r.getCategoryAction(r.id);case 3:return n="images"===t?"Изображения":"Изображения категории «".concat(r.category.title,"»"),e.next=6,r.setPageTitle(n);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){l(a,n,o,i,c,"next",t)}function c(t){l(a,n,o,i,c,"throw",t)}i(void 0)}))})()},fileInputChange:function(t){this.upload({uploadFiles:t.target.files,type:this.category_type,id:this.id})},onRemove:function(t){this.removeImageAction({categoryId:this.id,imageId:t})},onDelete:function(t){this.delete({payload:t.id,title:t.id,alertText:"изображение «".concat(t.id,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,tableMode:"table"})},togglePublish:function(t){this.togglePublishAction("/images/".concat(t,"/publish"))}})},g=r(0),h=Object(g.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("md-card",{staticClass:"mt-0"},[r("md-card-content",{staticClass:"md-between"},["images"===t.category_type?r("router-button-link",{attrs:{to:{name:"cms.dashboard"}}}):r("router-button-link",{attrs:{to:{name:"cms.catalog.categories.list",params:{category_type:t.category_type}}}}),t._v(" "),r("div",[r("router-button-link",{attrs:{icon:"content_copy",color:"md-info",title:"Поиск дубликатов",to:{name:"cms.images.find-duplicates",params:{id:"images"===t.category_type?0:t.id,category_type:t.category_type}}}}),t._v(" "),"images"===t.category_type?r("router-button-link",{attrs:{icon:"delete",color:"md-default",title:"Удаленные изображения",to:{name:"cms.images.trashed"}}}):t._e(),t._v(" "),"images"!==t.category_type?r("router-button-link",{attrs:{icon:"add",color:"md-success",title:"Добавить изображения",to:{name:"cms.catalog.categories.images.excluded",params:{id:t.id}}}}):t._e(),t._v(" "),r("upload-button",{attrs:{disabled:Boolean(t.fileProgress)},on:{change:t.fileInputChange}})],1)],1)],1)],1)]),t._v(" "),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item"},[r("div",{staticClass:"md-layout-item md-progress-bar__container"},[t.fileProgress?r("md-progress-bar",{staticClass:"md-info",attrs:{"md-mode":"indeterminate","md-value":t.fileProgress}}):t._e()],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Каталог изображений",icon:"image"}}),t._v(" "),r("md-card-content",[r("image-list-table",{attrs:{resourceUrl:t.resourceUrl},on:{publish:t.togglePublish},scopedSlots:t._u([{key:"actions-column",fn:function(e){var n=e.item;return[n?r("md-table-cell",{attrs:{"md-label":"Действия"}},[r("image-table-actions",{attrs:{item:n,remove:t.isCategoryPage},on:{remove:t.onRemove,delete:t.onDelete}})],1):t._e()]}}])})],1)],1)],1)])])}),[],!1,null,null,null);e.default=h.exports}}]);