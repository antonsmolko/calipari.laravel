(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{114:function(t,e,n){"use strict";var r={name:"ImageTableActions",props:{item:{type:Object,default:null},remove:{type:Boolean,default:!1}},computed:{hasCollection:function(){return Boolean(this.item.colorCollection)},isCollectionMainImage:function(){return this.hasCollection&&this.item.id===this.item.colorCollection.main_image_id}},methods:{onDelete:function(){this.$emit("delete",this.item)},onRemove:function(){this.$emit("remove",this.item.id)}}},o=n(0),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"table-actions"},[t.remove&&!t.hasCollection?n("control-button",{attrs:{title:"Отвязать",icon:"remove",color:"md-info"},on:{click:t.onRemove}}):t._e(),t._v(" "),n("router-button-link",{attrs:{title:"Сформировать проект",icon:"local_mall",color:"md-warning",to:{name:"cms.store.projects.create",params:{imageId:t.item.id}}}}),t._v(" "),t.hasCollection?n("router-button-link",{attrs:{title:"Коллекция",icon:"perm_media",color:"md-teal",to:{name:"cms.catalog.color-collections.images",params:{id:t.item.colorCollection.id}}}}):t._e(),t._v(" "),n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",to:{name:"cms.images.edit",params:{id:t.item.id}}}}),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.isCollectionMainImage,color:"md-danger"},on:{click:t.onDelete}})],1):t._e()}),[],!1,null,null,null);e.a=i.exports},264:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-file-input[data-v-0e1a84de]{display:none}.md-between[data-v-0e1a84de]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"g",(function(){return h})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return g}));var r=n(10),o=n.n(r),i=n(34),a=n.n(i);function c(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)}))}}var u={methods:{create:function(t){var e=this;return s(o.a.mark((function n(){var r,i,c,s,u,l,d,m,f;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.sendData,i=t.title,c=t.successText,s=t.redirectRoute,u=t.storeModule,l=void 0===u?null:u,d=t.action,m=void 0===d?"store":d,e.$store.commit("SET_LOADING",!0),f=l?"".concat(l,"/"):"",n.next=5,e.$store.dispatch("".concat(f).concat(m),r);case 5:return n.next=7,e.$router.push(s);case 7:return e.$store.commit("SET_LOADING",!1),n.abrupt("return",a.a.fire({title:c,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return n.stop()}}),n)})))()}}},l={methods:{update:function(t){var e=this;return s(o.a.mark((function n(){var r,i,c,s,u,l,d,m;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.sendData,i=t.title,c=t.successText,s=t.redirectRoute,u=void 0===s?null:s,l=t.storeModule,d=void 0===l?null:l,e.$store.commit("SET_LOADING",!0),m=d?"".concat(d,"/"):"",n.next=5,e.$store.dispatch("".concat(m,"update"),r);case 5:if(!u){n.next=12;break}if(!(window.history.length>1)){n.next=10;break}e.$router.go(-1),n.next=12;break;case 10:return n.next=12,e.$router.push(u);case 12:return e.$store.commit("SET_LOADING",!1),n.abrupt("return",a.a.fire({title:c,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 14:case"end":return n.stop()}}),n)})))()}}},d={methods:{delete:function(t){var e=this;return s(o.a.mark((function n(){var r,i,a,c,s,u,l,d,m,h,b,g,v,x,y,w;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.payload,i=t.title,a=t.alertText,c=t.successText,s=t.storeModule,u=void 0===s?null:s,l=t.redirectRoute,d=void 0===l?null:l,m=t.tableMode,h=void 0!==m&&m,b=t.action,g=void 0===b?"delete":b,v=t.force,x=void 0!==v&&v,y=u?"".concat(u,"/"):"",w=x?"forceDelete":g,n.next=5,f(a);case 5:if(!n.sent.value){n.next=15;break}return e.$store.commit("SET_LOADING",!0),n.next=10,e.$store.dispatch("".concat(y).concat(w),{payload:r,tableMode:h});case 10:if(!d){n.next=13;break}return n.next=13,e.$router.push(d);case 13:return e.$store.commit("SET_LOADING",!1),n.abrupt("return",p(c,i));case 15:case"end":return n.stop()}}),n)})))()}}},m={methods:{deleteImageByIndex:function(t){var e=this;return s(o.a.mark((function n(){var r,i,a,c,s,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,i=t.index,a=t.alertText,c=t.successText,s=t.storeModule,u=void 0===s?null:s,n.next=3,f(a);case 3:if(!n.sent.value){n.next=11;break}return e.$store.commit("SET_LOADING",!0),n.next=8,e.$store.dispatch("".concat(u,"/deleteImageByIndex"),{id:r,index:i});case 8:return e.$store.commit("SET_LOADING",!1),n.next=11,p(c,i);case 11:case"end":return n.stop()}}),n)})))()}}},f=function(t){return a.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},p=function(t,e){return a.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},h={methods:{upload:function(t){var e=this;return s(o.a.mark((function n(){var r,i,c,s,u,l,d;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.images,i=t.type,c=void 0===i?null:i,s=t.id,u=void 0===s?null:s,l=t.storeModule,d=(void 0===l?null:l)||"categories",!r.length){n.next=10;break}if(!u){n.next=8;break}return n.next=6,e.$store.dispatch("".concat(d,"/uploadImages"),{images:r,id:u,type:c});case 6:n.next=10;break;case 8:return n.next=10,e.$store.dispatch("images/store",r);case 10:return n.next=12,a.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return n.abrupt("return",n.sent);case 13:case"end":return n.stop()}}),n)})))()}}},b={methods:{addImages:function(t){var e=this;return s(o.a.mark((function n(){var r,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,i=t.data,n.next=3,e.$store.dispatch("categories/addSelectedImages",{id:r,data:i});case 3:return n.next=5,e.$router.push({name:"cms.catalog.categories.images",params:{id:r}});case 5:return n.abrupt("return",a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return n.stop()}}),n)})))()}}},g={methods:{addImages:function(t){var e=this;return s(o.a.mark((function n(){var r,i,c,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.type,i=t.id,c=t.data,s=t.redirectRoute,n.next=3,e.$store.dispatch("subCategories/addSelectedImages",{type:r,id:i,data:c});case 3:return n.next=5,e.$router.push(s);case 5:return n.abrupt("return",a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return n.stop()}}),n)})))()}}}},575:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(6),i=n(4),a=n(99),c=n(114);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"ExcludedImageList",mixins:[o.b,i.e],components:{ImageListTable:a.a,ImageTableActions:c.a},props:{id:{type:[Number,String],required:!0},category_type:{type:String,default:null}},data:function(){return{resourceUrl:"/catalog/".concat(this.category_type,"/").concat(this.id,"/images/excluded"),storeModule:"images",redirectRoute:{name:"cms.catalog.subcategories.images",params:{category_type:this.category_type,id:this.id}},responseData:!1,selected:[]}},computed:u({},Object(r.d)({title:function(t){return t.subCategories.fields.title}})),created:function(){var t=this;this.getItemAction({type:this.category_type,id:this.id}).then((function(){t.setPageTitle("Для категории «".concat(t.title,"»")),t.responseData=!0})).catch((function(){return t.$router.push(t.redirectRoute)}))},methods:u(u({},Object(r.b)({getItemAction:"subCategories/getItem",togglePublishAction:"table/togglePublish"})),{},{togglePublish:function(t){this.togglePublishAction("/images/".concat(t,"/publish"))},onImagesAdd:function(){return this.addImages({type:this.category_type,id:this.id,data:this.selected,redirectRoute:this.redirectRoute})}})},m=n(5),f=n.n(m),p=n(264),h=n.n(p),b={insert:"head",singleton:!1},g=(f()(h.a,b),h.a.locals,n(0)),v=Object(g.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{to:t.redirectRoute}}),t._v(" "),t.selected.length?n("div",[n("control-button",{attrs:{title:"Добавить изображения",icon:"add"},on:{click:t.onImagesAdd}})],1):t._e()],1)],1),t._v(" "),n("progress-bar-loading")],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header",{attrs:{title:"Каталог изображений",icon:"image"}}),t._v(" "),n("md-card-content",[n("image-list-table",{attrs:{resourceUrl:t.resourceUrl,emptyContent:"Пока нет других изображений!"},on:{publish:t.togglePublish},scopedSlots:t._u([{key:"first-column",fn:function(e){var r=e.item;return[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                                "+t._s(r.id)+"\n                            ")])]}},{key:"actions-column",fn:function(e){var r=e.item;return[n("md-table-cell",{attrs:{"md-label":"Выбрать"}},[n("md-checkbox",{attrs:{value:r.id},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]}}],null,!1,2408791974)})],1)],1)],1)])]):t._e()}),[],!1,null,"0e1a84de",null);e.default=v.exports}}]);