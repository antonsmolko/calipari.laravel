(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(t,e,n){"use strict";var o={name:"TagsTableCell",props:{items:{type:[Array,Object],default:null}}},i=(n(361),n(0)),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",t._l(t.items,(function(e,o){return n("span",{key:o,staticClass:"md-category-tag"},[t._v("\n        "+t._s(e.title)+"\n    ")])})),0):t._e()}),[],!1,null,"d407e9c0",null);e.a=a.exports},110:function(t,e,n){"use strict";var o={name:"PaletteTableCell",props:{items:{type:[Array,Object],default:null}}},i=(n(363),n(0)),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",t._l(t.items,(function(e,o){return n("md-icon",{key:o,staticClass:"md-color-icon",style:{color:e.alias}},[t._v("\n        lens\n        "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(t._s(e.title))])],1)})),1):t._e()}),[],!1,null,"492ccc7a",null);e.a=a.exports},111:function(t,e,n){"use strict";var o={name:"ImageTableActions",props:{item:{type:Object,default:null},remove:{type:Boolean,default:!1}},computed:{hasCollection:function(){return!!this.item.colorCollection},isCollectionMainImage:function(){return this.hasCollection&&this.item.id===this.item.colorCollection.main_image_id}},methods:{onDelete:function(){this.$emit("delete",this.item)},onRemove:function(){this.$emit("remove",this.item.id)}}},i=(n(365),n(0)),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"table-actions"},[t.remove&&!t.hasCollection?n("control-button",{attrs:{title:"Отвязать",icon:"remove",color:"md-info"},on:{click:t.onRemove}}):t._e(),t._v(" "),t.hasCollection?n("router-button-link",{attrs:{title:"Коллекция",icon:"perm_media",color:"md-teal",route:"cms.catalog.color-collections.images",params:{id:t.item.colorCollection.id}}}):t._e(),t._v(" "),n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",route:"cms.images.edit",params:{id:t.item.id}}}),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.isCollectionMainImage,color:"md-danger"},on:{click:t.onDelete}})],1):t._e()}),[],!1,null,"6a8592f3",null);e.a=a.exports},171:function(t,e,n){var o=n(11),i=n(352);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);t.exports=i.locals||{}},175:function(t,e,n){var o=n(11),i=n(362);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);t.exports=i.locals||{}},176:function(t,e,n){var o=n(11),i=n(364);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);t.exports=i.locals||{}},177:function(t,e,n){var o=n(11),i=n(366);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);t.exports=i.locals||{}},191:function(t,e,n){var o=n(11),i=n(392);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);t.exports=i.locals||{}},27:function(t,e,n){"use strict";var o={name:"ThumbTableCell",components:{ResourceImage:n(178).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},i=(n(351),n(0)),a=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);e.a=a.exports},351:function(t,e,n){"use strict";var o=n(171);n.n(o).a},352:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},361:function(t,e,n){"use strict";var o=n(175);n.n(o).a},362:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\n.md-category-tag[data-v-d407e9c0] {\n    display: inline-block;\n    padding: 3px 4px;\n    background-color: #dddddd;\n    border-radius: 2px;\n    margin: 2px;\n    line-height: 1;\n    font-size: .85em;\n}\n",""])},363:function(t,e,n){"use strict";var o=n(176);n.n(o).a},364:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".md-table-row .md-color-icon[data-v-492ccc7a] {\n  background: #fafafa;\n  border-radius: 50%;\n  margin: 1px;\n}",""])},365:function(t,e,n){"use strict";var o=n(177);n.n(o).a},366:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\n.table-actions[data-v-6a8592f3] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},391:function(t,e,n){"use strict";var o=n(191);n.n(o).a},392:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".md-between[data-v-1e7992d4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-1e7992d4] {\n  height: 4px;\n}",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return b}));var o=n(16),i=n.n(o),a=n(42),r=n.n(a);function s(t,e,n,o,i,a,r){try{var s=t[a](r),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,i)}var l={methods:{create:function(t){var e=this,n=t.sendData,o=t.title,i=t.successText,a=t.redirectRoute,s=t.storeModule,l=void 0===s?null:s,c=l?"".concat(l,"/"):"";return this.$store.dispatch("".concat(c,"store"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(a),r.a.fire({title:i,text:"«".concat(o,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},c={methods:{update:function(t){var e=this,n=t.sendData,o=t.title,i=t.redirectRoute,a=t.successText,s=t.storeModule,l=void 0===s?null:s,c=l?"".concat(l,"/"):"";return this.$store.dispatch("".concat(c,"update"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(i),r.a.fire({title:a,text:"«".concat(o,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{delete:function(t){var e=this,n=t.payload,o=t.title,i=t.alertText,a=t.successText,r=t.storeModule,s=void 0===r?null:r,l=t.redirectRoute,c=void 0===l?null:l,u=t.tableMode,d=void 0!==u&&u,p=t.force,h=void 0!==p&&p,b=s?"".concat(s,"/"):"",v=h?"forceDelete":"delete";return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(b).concat(v),{payload:n,tableMode:d}).then((function(){return c&&(window.history.length>1?e.$router.go(-1):e.$router.push(c)),f(a,o)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,o=t.index,i=t.alertText,a=t.successText,r=t.storeModule,s=void 0===r?null:r;return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:n,index:o}).then((function(){return f(a,o)}))}))}}},m=function(t){return r.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},f=function(t,e){return r.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},p={methods:{upload:function(t){var e,n=this;return(e=i.a.mark((function e(){var o,a,s,l,c,u,d,m,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.uploadFiles,a=t.type,s=void 0===a?null:a,l=t.id,c=void 0===l?null:l,u=t.storeModule,d=void 0===u?null:u,m=Array.from(o),f=d||"categories",!c){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(f,"/uploadImages"),{files:m,id:c,type:s});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",m);case 10:return e.next=12,r.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function r(t){s(a,o,i,r,l,"next",t)}function l(t){s(a,o,i,r,l,"throw",t)}r(void 0)}))})()}}},h={methods:{addImages:function(t){var e=this,n=t.id,o=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:o}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),r.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},b={methods:{addImages:function(t){var e=this,n=t.type,o=t.id,i=t.data,a=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:o,data:i}).then((function(){return e.$router.push(a),r.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},661:function(t,e,n){"use strict";n.r(e);var o=n(2),i=n(5),a=n(4),r=n(27),s=n(110),l=n(109),c=n(111);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={name:"ImageList",mixins:[i.b,a.c,a.g],components:{ThumbTableCell:r.a,PaletteTableCell:s.a,TagsTableCell:l.a,ImageTableActions:c.a},props:{id:{type:[Number,String],default:null}},data:function(){return{responseData:!1,storeModule:"images",redirectRoute:"cms.catalog.art-collections"}},computed:d({},Object(o.d)({title:function(t){return t.artCollections.fields.title},images:function(t){return t.images.items}})),created:function(){var t=this;Promise.all([this.getItemAction(this.id),this.getImagesAction(this.id)]).then((function(){t.setPageTitle("Изображения коллекции «".concat(t.title,"»")),t.responseData=!0})).catch((function(){return t.$router.push({name:t.redirectRoute})}))},methods:d(d({},Object(o.b)({publishAction:"images/togglePublish",getItemAction:"artCollections/getItem",getImagesAction:"artCollections/getImages",removeImageAction:"artCollections/removeImage"})),{},{onRemove:function(t){this.removeImageAction({collectionId:this.id,imageId:t})},onDelete:function(t){this.delete({payload:t.id,title:t.id,alertText:"изображение «".concat(t.id,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,tableMode:"images"})},onPublish:function(t){this.publishAction(t)}})},p=(n(391),n(0)),h=Object(p.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{route:t.redirectRoute}}),t._v(" "),n("router-button-link",{attrs:{icon:"add",color:"md-success",title:"Добавить изображения",route:"cms.catalog.art-collections.images.excluded",params:{id:t.id}}})],1)],1)],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header",{attrs:{title:"Список изображений",icon:"assignment"}}),t._v(" "),n("md-card-content",[t.images.length?[n("md-table",{staticClass:"paginated-table table-striped table-hover",attrs:{value:t.images},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var o=e.item;return n("md-table-row",{},[t._t("first-column",[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                                        "+t._s(o.id)+"\n                                    ")])],{item:o}),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{path:o.path}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Темы"}},[n("tags-table-cell",{attrs:{items:o.topics}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Цвета"}},[n("palette-table-cell",{attrs:{items:o.colors}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Интерьеры"}},[n("tags-table-cell",{attrs:{items:o.interiors}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Владелец"}},[o.owner?n("span",{staticClass:"md-category-tag"},[t._v("\n                                        "+t._s(o.owner.title)+"\n                                    ")]):t._e()]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Цветовая коллекция"}},[o.colorCollection?[o.id===o.colorCollection.main_image_id?n("md-badge",{attrs:{"md-content":"М"}},[n("span",{staticClass:"md-category-tag"},[t._v("\n                                                "+t._s(o.colorCollection.title)+"\n                                            ")])]):n("span",{staticClass:"md-category-tag"},[t._v("\n                                            "+t._s(o.colorCollection.title)+"\n                                        ")])]:t._e()],2),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Формат"}},[o.format?n("span",[n("md-icon",[t._v(t._s(o.format.icon))]),t._v(" "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(t._s(o.format.title))])],1):t._e()]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Лайки"}},[n("md-icon",[t._v("favorite")]),t._v(" "+t._s(o.likes_count)+"\n                                ")],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Заказы"}},[n("md-icon",[t._v("shopping_cart")]),t._v(" "+t._s(o.orders_count)+"\n                                ")],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Опубл."}},[n("md-switch",{attrs:{value:!o.publish},on:{change:function(e){return t.onPublish(o.id)}}})],1),t._v(" "),o?n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("image-table-actions",{attrs:{item:o,remove:!0},on:{remove:t.onRemove,delete:t.onDelete}})],1):t._e()],2)}}],null,!0)})]:[n("div",{staticClass:"alert alert-info"},[n("span",[n("h3",[t._v("В коллекции еще нет изображений! Загрузите их!")])])])]],2)],1)],1)])]):t._e()}),[],!1,null,"1e7992d4",null);e.default=h.exports}}]);