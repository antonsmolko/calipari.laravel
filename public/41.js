(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(t,e,n){"use strict";var a={name:"PaletteTableCell",props:{items:{type:[Array,Object],default:null}}},i=(n(374),n(0)),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",t._l(t.items,(function(e,a){return n("md-icon",{key:a,staticClass:"md-color-icon",style:{color:e.alias}},[t._v("\n        lens\n        "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(t._s(e.title))])],1)})),1):t._e()}),[],!1,null,"492ccc7a",null);e.a=o.exports},175:function(t,e,n){var a=n(9),i=n(363);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);t.exports=i.locals||{}},176:function(t,e,n){var a=n(9),i=n(365);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);t.exports=i.locals||{}},180:function(t,e,n){var a=n(9),i=n(375);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);t.exports=i.locals||{}},194:function(t,e,n){var a=n(9),i=n(403);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);t.exports=i.locals||{}},27:function(t,e,n){"use strict";var a={name:"TableActions",props:{item:{type:Object,default:null},subPath:{type:String,required:!0},deleteDisabled:{type:Boolean,default:!1},editDisabled:{type:Boolean,default:!1},restParams:{type:Object,default:function(){return{}}}},methods:{onDelete:function(t){this.$emit("delete",t)}}},i=(n(362),n(0)),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"table-actions"},[n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",disabled:t.editDisabled,route:"cms."+t.subPath+".edit",params:Object.assign({},{id:t.item.id},t.restParams)}}),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.deleteDisabled,color:"md-danger"},on:{click:function(e){return t.onDelete(t.item)}}})],1):t._e()}),[],!1,null,"b5ba4ed2",null);e.a=o.exports},30:function(t,e,n){"use strict";var a={name:"ThumbTableCell",components:{ResourceImage:n(109).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},i=(n(364),n(0)),o=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);e.a=o.exports},362:function(t,e,n){"use strict";var a=n(175);n.n(a).a},363:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.table-actions[data-v-b5ba4ed2] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},364:function(t,e,n){"use strict";var a=n(176);n.n(a).a},365:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},374:function(t,e,n){"use strict";var a=n(180);n.n(a).a},375:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-table-row .md-color-icon[data-v-492ccc7a] {\n  background: #fafafa;\n  border-radius: 50%;\n  margin: 1px;\n}",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return b}));var a=n(14),i=n.n(a),o=n(42),s=n.n(o);function r(t,e,n,a,i,o,s){try{var r=t[o](s),l=r.value}catch(t){return void n(t)}r.done?e(l):Promise.resolve(l).then(a,i)}var l={methods:{create:function(t){var e=this,n=t.sendData,a=t.title,i=t.successText,o=t.redirectRoute,r=t.storeModule,l=void 0===r?null:r,c=t.action,u=void 0===c?"store":c,d=l?"".concat(l,"/"):"";return this.$store.dispatch("".concat(d).concat(u),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(o),s.a.fire({title:i,text:"«".concat(a,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},c={methods:{update:function(t){var e=this,n=t.sendData,a=t.title,i=t.redirectRoute,o=t.successText,r=t.storeModule,l=void 0===r?null:r,c=l?"".concat(l,"/"):"";return this.$store.dispatch("".concat(c,"update"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(i),s.a.fire({title:o,text:"«".concat(a,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{delete:function(t){var e=this,n=t.payload,a=t.title,i=t.alertText,o=t.successText,s=t.storeModule,r=void 0===s?null:s,l=t.redirectRoute,c=void 0===l?null:l,u=t.tableMode,d=void 0!==u&&u,p=t.force,h=void 0!==p&&p,b=r?"".concat(r,"/"):"",g=h?"forceDelete":"delete";return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(b).concat(g),{payload:n,tableMode:d}).then((function(){return c&&(window.history.length>1?e.$router.go(-1):e.$router.push(c)),f(o,a)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,a=t.index,i=t.alertText,o=t.successText,s=t.storeModule,r=void 0===s?null:s;return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(r,"/deleteImageByIndex"),{id:n,index:a}).then((function(){return f(o,a)}))}))}}},m=function(t){return s.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},f=function(t,e){return s.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},p={methods:{upload:function(t){var e,n=this;return(e=i.a.mark((function e(){var a,o,r,l,c,u,d,m,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.uploadFiles,o=t.type,r=void 0===o?null:o,l=t.id,c=void 0===l?null:l,u=t.storeModule,d=void 0===u?null:u,m=Array.from(a),f=d||"categories",!c){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(f,"/uploadImages"),{files:m,id:c,type:r});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",m);case 10:return e.next=12,s.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function s(t){r(o,a,i,s,l,"next",t)}function l(t){r(o,a,i,s,l,"throw",t)}s(void 0)}))})()}}},h={methods:{addImages:function(t){var e=this,n=t.id,a=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:a}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},b={methods:{addImages:function(t){var e=this,n=t.type,a=t.id,i=t.data,o=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:a,data:i}).then((function(){return e.$router.push(o),s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},402:function(t,e,n){"use strict";var a=n(194);n.n(a).a},403:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-between[data-v-4c2b8b9e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-4c2b8b9e] {\n  height: 4px;\n}",""])},675:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n(5),o=n(4),s=n(30),r=n(111),l=n(27);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"ImageList",mixins:[i.b,o.c,o.g],components:{ThumbTableCell:s.a,PaletteTableCell:r.a,TableActions:l.a},props:{id:{type:[Number,String],default:null}},data:function(){return{mainImage:null,responseData:!1,storeModule:"images",redirectRoute:"cms.catalog.color-collections"}},computed:u({},Object(a.d)({title:function(t){return t.colorCollections.fields.title},mainImageId:function(t){return t.colorCollections.fields.main_image_id},images:function(t){return t.images.items},fileProgress:function(t){return t.images.fileProgress}})),watch:{mainImageId:function(){this.mainImageId&&(this.mainImage=this.mainImageId)}},created:function(){var t=this;Promise.all([this.getItemAction(this.id),this.getImagesAction(this.id)]).then((function(){t.mainImage=t.mainImageId,t.setPageTitle("Изображения коллекции «".concat(t.title,"»")),t.responseData=!0})).catch((function(){return t.$router.push({name:t.redirectRoute})}))},methods:u(u({},Object(a.b)({publishAction:"images/togglePublish",getItemAction:"colorCollections/getItem",getImagesAction:"colorCollections/getImages",setMainImageAction:"colorCollections/setMainImage"})),{},{fileInputChange:function(t){this.upload({uploadFiles:t.target.files,type:this.category_type,id:this.id,storeModule:"colorCollections"})},onDelete:function(t){this.delete({payload:t.id,title:t.id,alertText:"изображение «".concat(t.id,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,tableMode:"images"})},onPublish:function(t){this.publishAction(t)},setMainImage:function(t){this.mainImageId!==t&&this.setMainImageAction({id:this.id,imageId:t})}})},f=(n(402),n(0)),p=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{route:t.redirectRoute}}),t._v(" "),n("div",[n("upload-button",{on:{change:t.fileInputChange}})],1)],1)],1)],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("div",{staticClass:"md-layout-item md-progress-bar__container"},[t.fileProgress?n("md-progress-bar",{staticClass:"md-info",attrs:{"md-mode":"indeterminate","md-value":t.fileProgress}}):t._e()],1),t._v(" "),n("md-card",[n("card-icon-header",{attrs:{title:"Список изображений",icon:"assignment"}}),t._v(" "),n("md-card-content",[t.images.length?[n("md-table",{staticClass:"paginated-table table-striped table-hover",attrs:{value:t.images},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var a=e.item;return n("md-table-row",{},[t._t("first-column",[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                                        "+t._s(a.id)+"\n                                    ")])],{item:a}),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{path:a.path}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Цвета"}},[n("palette-table-cell",{attrs:{items:a.colors}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Владелец"}},[a.owner?n("span",{staticClass:"md-category-tag"},[t._v("\n                                        "+t._s(a.owner.title)+"\n                                    ")]):t._e()]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Формат"}},[a.format?n("span",[n("md-icon",[t._v(t._s(a.format.icon))]),t._v(" "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(t._s(a.format.title))])],1):t._e()]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Лайки"}},[n("md-icon",[t._v("favorite")]),t._v(" "+t._s(a.likes)+"\n                                ")],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Заказы"}},[n("md-icon",[t._v("shopping_cart")]),t._v(" "+t._s(a.orders)+"\n                                ")],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Опубл."}},[n("md-switch",{attrs:{value:!a.publish},on:{change:function(e){return t.onPublish(a.id)}}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Основное"}},[n("md-radio",{staticClass:"md-primary",attrs:{value:a.id},on:{change:t.setMainImage},model:{value:t.mainImage,callback:function(e){t.mainImage=e},expression:"mainImage"}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("table-actions",{attrs:{item:a,subPath:"images",deleteDisabled:a.id===t.mainImageId},on:{delete:t.onDelete}})],1)],2)}}],null,!0)})]:[n("div",{staticClass:"alert alert-info"},[n("span",[n("h3",[t._v("В коллекции еще нет изображений! Загрузите их!")])])])]],2)],1)],1)])]):t._e()}),[],!1,null,"4c2b8b9e",null);e.default=p.exports}}]);