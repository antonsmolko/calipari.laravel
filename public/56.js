(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{176:function(t,e,n){var r=n(9),i=n(363);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},204:function(t,e,n){var r=n(9),i=n(490);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},30:function(t,e,n){"use strict";var r={name:"ThumbTableCell",components:{ResourceImage:n(109).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},i=(n(362),n(0)),o=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);e.a=o.exports},362:function(t,e,n){"use strict";var r=n(176);n.n(r).a},363:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return b}));var r=n(15),i=n.n(r),o=n(42),a=n.n(o);function s(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}var c={methods:{create:function(t){var e=this,n=t.sendData,r=t.title,i=t.successText,o=t.redirectRoute,s=t.storeModule,c=void 0===s?null:s,u=t.action,l=void 0===u?"store":u,d=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(d).concat(l),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(o),a.a.fire({title:i,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{update:function(t){var e=this,n=t.sendData,r=t.title,i=t.redirectRoute,o=t.successText,s=t.storeModule,c=void 0===s?null:s,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u,"update"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(i),a.a.fire({title:o,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,n=t.payload,r=t.title,i=t.alertText,o=t.successText,a=t.storeModule,s=void 0===a?null:a,c=t.redirectRoute,u=void 0===c?null:c,l=t.tableMode,d=void 0!==l&&l,h=t.force,p=void 0!==h&&h,b=s?"".concat(s,"/"):"",v=p?"forceDelete":"delete";return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(b).concat(v),{payload:n,tableMode:d}).then((function(){return u&&(window.history.length>1?e.$router.go(-1):e.$router.push(u)),f(o,r)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,r=t.index,i=t.alertText,o=t.successText,a=t.storeModule,s=void 0===a?null:a;return m(i).then((function(t){if(t.value)return e.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:n,index:r}).then((function(){return f(o,r)}))}))}}},m=function(t){return a.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},f=function(t,e){return a.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},h={methods:{upload:function(t){var e,n=this;return(e=i.a.mark((function e(){var r,o,s,c,u,l,d,m,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.uploadFiles,o=t.type,s=void 0===o?null:o,c=t.id,u=void 0===c?null:c,l=t.storeModule,d=void 0===l?null:l,m=Array.from(r),f=d||"categories",!u){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(f,"/uploadImages"),{files:m,id:u,type:s});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",m);case 10:return e.next=12,a.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))})()}}},p={methods:{addImages:function(t){var e=this,n=t.id,r=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:r}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},b={methods:{addImages:function(t){var e=this,n=t.type,r=t.id,i=t.data,o=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:r,data:i}).then((function(){return e.$router.push(o),a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},489:function(t,e,n){"use strict";var r=n(204);n.n(r).a},490:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-between[data-v-27151be4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-27151be4] {\n  height: 4px;\n}",""])},713:function(t,e,n){"use strict";n.r(e);var r=n(3),i=n(5),o=n(4),a=n(30);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={name:"ImageList",mixins:[i.b,o.b,o.g],components:{ThumbTableCell:a.a},props:{id:{type:[Number,String],required:!0}},data:function(){return{mainImage:null,responseData:!1,storeModule:"workExamples",redirectRoute:{name:"cms.pages.portfolio",params:{activeTab:"Модули"}}}},computed:c({},Object(r.d)({title:function(t){return t.workExamples.fields.title},images:function(t){return t.workExamples.fields.images},fileProgress:function(t){return t.images.fileProgress}})),created:function(){var t=this;Promise.all([this.getItemAction(this.id)]).then((function(){t.setPageTitle("Изображения работы «".concat(t.title,"»")),t.responseData=!0})).catch((function(){return t.$router.push({name:t.redirectRoute})}))},methods:c(c({},Object(r.b)({getItemAction:"workExamples/getItem"})),{},{fileInputChange:function(t){this.upload({uploadFiles:t.target.files,id:this.id,storeModule:this.storeModule})},onDelete:function(t){this.deleteImageByIndex({id:this.id,index:t.index,alertText:"изображение «".concat(t.index,"»"),successText:"Изображение удалено!",storeModule:this.storeModule})}})},d=(n(489),n(0)),m=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{route:t.redirectRoute.name,params:t.redirectRoute.params}}),t._v(" "),n("div",[n("upload-button",{on:{change:t.fileInputChange}})],1)],1)],1)],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("div",{staticClass:"md-layout-item md-progress-bar__container"},[t.fileProgress?n("md-progress-bar",{staticClass:"md-info",attrs:{"md-value":t.fileProgress}}):t._e()],1),t._v(" "),n("md-card",[n("card-icon-header",{attrs:{title:"Список изображений",icon:"assignment"}}),t._v(" "),n("md-card-content",[t.images.length?[n("md-table",{staticClass:"paginated-table table-striped table-hover",attrs:{value:t.images},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var r=e.item;return n("md-table-row",{},[t._t("first-column",[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                                        "+t._s(r.index)+"\n                                    ")])],{item:r}),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{width:200,path:r.path}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("div",{staticClass:"table-actions"},[n("control-button",{attrs:{title:"Удалить",icon:"delete",color:"md-danger"},on:{click:function(e){return t.onDelete(r)}}})],1)])],2)}}],null,!0)})]:[n("div",{staticClass:"alert alert-info"},[n("span",[n("h3",[t._v("В работе еще нет изображений! Загрузите их!")])])])]],2)],1)],1)])]):t._e()}),[],!1,null,"27151be4",null);e.default=m.exports}}]);