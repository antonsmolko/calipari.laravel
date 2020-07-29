(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{171:function(t,e,r){var s=r(11),a=r(352);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};s(a,i);t.exports=a.locals||{}},196:function(t,e,r){var s=r(11),a=r(471);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};s(a,i);t.exports=a.locals||{}},27:function(t,e,r){"use strict";var s={name:"ThumbTableCell",components:{ResourceImage:r(178).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},a=(r(351),r(0)),i=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);e.a=i.exports},351:function(t,e,r){"use strict";var s=r(171);r.n(s).a},352:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},4:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"f",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"b",(function(){return u})),r.d(e,"g",(function(){return v})),r.d(e,"d",(function(){return f})),r.d(e,"e",(function(){return b}));var s=r(16),a=r.n(s),i=r(42),n=r.n(i);function o(t,e,r,s,a,i,n){try{var o=t[i](n),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(s,a)}var c={methods:{create:function(t){var e=this,r=t.sendData,s=t.title,a=t.successText,i=t.redirectRoute,o=t.storeModule,c=void 0===o?null:o,l=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(l,"store"),r).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(i),n.a.fire({title:a,text:"«".concat(s,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{update:function(t){var e=this,r=t.sendData,s=t.title,a=t.redirectRoute,i=t.successText,o=t.storeModule,c=void 0===o?null:o,l=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(l,"update"),r).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(a),n.a.fire({title:i,text:"«".concat(s,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},d={methods:{delete:function(t){var e=this,r=t.payload,s=t.title,a=t.alertText,i=t.successText,n=t.storeModule,o=void 0===n?null:n,c=t.redirectRoute,l=void 0===c?null:c,d=t.tableMode,u=void 0!==d&&d,v=t.force,f=void 0!==v&&v,b=o?"".concat(o,"/"):"",p=f?"forceDelete":"delete";return m(a).then((function(t){if(t.value)return e.$store.dispatch("".concat(b).concat(p),{payload:r,tableMode:u}).then((function(){return l&&(window.history.length>1?e.$router.go(-1):e.$router.push(l)),h(i,s)}))}))}}},u={methods:{deleteImageByIndex:function(t){var e=this,r=t.id,s=t.index,a=t.alertText,i=t.successText,n=t.storeModule,o=void 0===n?null:n;return m(a).then((function(t){if(t.value)return e.$store.dispatch("".concat(o,"/deleteImageByIndex"),{id:r,index:s}).then((function(){return h(i,s)}))}))}}},m=function(t){return n.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},h=function(t,e){return n.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},v={methods:{upload:function(t){var e,r=this;return(e=a.a.mark((function e(){var s,i,o,c,l,d,u,m,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.uploadFiles,i=t.type,o=void 0===i?null:i,c=t.id,l=void 0===c?null:c,d=t.storeModule,u=void 0===d?null:d,m=Array.from(s),h=u||"categories",!l){e.next=8;break}return e.next=6,r.$store.dispatch("".concat(h,"/uploadImages"),{files:m,id:l,type:o});case 6:e.next=10;break;case 8:return e.next=10,r.$store.dispatch("images/store",m);case 10:return e.next=12,n.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(s,a){var i=e.apply(t,r);function n(t){o(i,s,a,n,c,"next",t)}function c(t){o(i,s,a,n,c,"throw",t)}n(void 0)}))})()}}},f={methods:{addImages:function(t){var e=this,r=t.id,s=t.data;this.$store.dispatch("categories/addSelectedImages",{id:r,data:s}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:r}}),n.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},b={methods:{addImages:function(t){var e=this,r=t.type,s=t.id,a=t.data,i=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:r,id:s,data:a}).then((function(){return e.$router.push(i),n.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},470:function(t,e,r){"use strict";var s=r(196);r.n(s).a},471:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".tm-order-item__table thead {\n  display: none;\n}\n.tm-order-item__table td.md-table-cell {\n  padding: 0 8px !important;\n  height: 40px;\n}\n.tm-order-item__footer-content {\n  width: 100%;\n  text-align: center;\n}",""])},688:function(t,e,r){"use strict";r.r(e);var s=r(2),a=r(13),i=r(27),n=r(243),o=r(5),c=r(4),l=r(42),d=r.n(l);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v={name:"Order",components:{ProductCard:n.a,ThumbTableCell:i.a},mixins:[o.b,o.a,c.f,c.c],props:{id:{type:[String,Number],required:!0}},data:function(){return{redirectRoute:{name:"cms.store.orders"},responseData:!1,storeModule:"orders",controlSaveVisibilities:!1}},computed:m(m({},Object(s.d)("orders",{order:function(t){return t.item}})),{},{restStatuses:function(){return this.$store.getters["orderStatuses/getRestItems"](this.currentStatus.order)},currentStatus:function(){return Object(a.c)(this.order.statuses)},baseTableData:function(){return[{title:"Номер",content:this.order.number},{title:"Дата",content:this.order.date},{title:"Статус",content:this.currentStatus.title}]},priceTableData:function(){return[{title:"Цена заказа",content:Object(a.d)(this.order.price-this.order.delivery.price)},{title:"Цена доставки",content:Object(a.d)(this.order.delivery.price)},{title:"Итого",content:Object(a.d)(this.order.price)}]},deliveryTableData:function(){return[{title:"Способ доставки",content:this.order.delivery.title},{title:"Регион доставки",content:this.order.delivery.locality},{title:"Адресс",content:this.order.delivery.address}]},customerTableData:function(){return[{title:"Имя",content:this.order.customer.name},{title:"Email",content:this.order.customer.email},{title:"Телефон",content:this.order.customer.phone},{title:"Комментарий к заказу",content:this.order.comment||"-"}]},userTableData:function(){var t=this.order.user;return t?[{title:"ID",content:t.id},{title:"Имя",content:t.name},{title:"Email",content:t.email}]:null},refundAvailable:function(){return this.order.paid&&this.availableRefundAmount>0},availableRefundAmount:function(){var t=this.order.price-Number(this.order.refund_amount);return t>0?t:0}}),created:function(){var t=this;Promise.all([this.getStatusesAction(),this.getItemAction(this.id)]).then((function(){t.setPageTitle("Заказ № ".concat(t.order.number)),t.responseData=!0})).catch((function(){return t.$router.push(t.redirectRoute)}))},methods:m(m({},Object(s.b)({getStatusesAction:"orderStatuses/getItems",getItemAction:"orders/getItem",changeStatusAction:"orders/changeStatus"})),{},{onUpdate:function(){return this.update({sendData:{status:this.currentStatus.id,id:this.id},title:this.order.number,successText:"Заказ обновлен!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.title,alertText:"заказ № «".concat(this.order.number,"»"),successText:"Заказ удален!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onStatusChange:function(t){var e=this,r=this.getStatusById(t);return this.confirm("Смена статуса вызывает отправку уведомления клиенту!").then((function(s){if(s.value)return e.changeStatusAction({id:e.order.id,status:t,list:!1}).then((function(){return d.a.fire({title:"Заказ № ".concat(e.order.number," обновлен!"),text:"Установлен статус «".concat(r.title,"»"),timer:2e3,icon:"success",showConfirmButton:!1})}))}))},confirm:function(t){return d.a.fire({title:"Внимание?",text:t,icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Подтвердить",cancelButtonText:"Отменить",buttonsStyling:!1})},getStatusById:function(t){return this.$store.getters["orderStatuses/getItemById"](t)},getFormatPrice:function(t){return Object(a.d)(t)},getArticle:function(t){return Object(a.b)(t)}})},f=(r(470),r(0)),b=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.responseData?r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-100"},[r("md-card",{staticClass:"mt-0"},[r("md-card-content",{staticClass:"md-between"},[r("router-button-link",{attrs:{route:t.redirectRoute.name,title:"К списку заказов"}}),t._v(" "),r("div",[r("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:t.controlSaveVisibilities&&t.$v.$anyDirty&&!t.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[r("control-button",{attrs:{title:"Сохранить"},on:{click:t.onUpdate}})],1),t._v(" "),t.authCheck("order-refund")&&t.refundAvailable?r("router-button-link",{attrs:{title:"Возместить",icon:"money_off",color:"md-warning",route:"cms.store.orders.order.refund",params:{id:t.id}}}):t._e(),t._v(" "),t.authCheck("order-delete")?r("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:t.onDelete}}):t._e()],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-33 md-xlarge-size-25"},t._l(t.order.items,(function(e){return r("div",{key:e.id,staticClass:"tm-order-item mb-5"},[r("product-card",{attrs:{headerAnimation:"false"}},[r("img",{staticClass:"img",attrs:{slot:"imageHeader",src:e.thumb},slot:"imageHeader"}),t._v(" "),r("h4",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[r("span",{staticClass:"card-title"},[t._v("Артикул:")]),t._v(" "),r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(e.article))])])]),t._v(" "),r("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Ширина:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(e.width)+" см")])]),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Высота:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(e.height)+" см")])]),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Фактура:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(e.texture))])]),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Эффекты:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(e.filter))])]),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Количество:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(e.qty))])])]),t._v(" "),r("template",{slot:"footer"},[r("div",{staticClass:"tm-order-item__footer-content"},[r("div",{staticClass:"price"},[r("h3",[t._v(t._s(t.getFormatPrice(e.price)))])])])])],2)],1)})),0),t._v(" "),r("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-66 md-xlarge-size-75"},[r("div",{staticClass:"md-layout-item"},[r("md-card",[r("card-icon-header",{attrs:{title:"Основная информация",icon:"info"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.baseTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{staticClass:"mt-3",attrs:{title:"Цена",icon:"account_balance_wallet"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.priceTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Доставка",icon:"local_shipping"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.deliveryTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Получатель",icon:"face"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.customerTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Пользователь",icon:"person"}}),t._v(" "),r("md-card-content",[t.userTableData?r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.userTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)}):r("span",{staticClass:"md-title"},[r("small",[t._v("Незарегистрированный")])])],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Статусы",icon:"update"}}),t._v(" "),t.restStatuses.length?r("md-card-content",[r("h4",{staticClass:"card-title mb-0"},[t._v("Текущий статус")]),t._v(" "),t.restStatuses.length&&"canceled"!==t.currentStatus.alias?r("md-field",[r("md-select",{attrs:{value:t.currentStatus.id},on:{"md-selected":t.onStatusChange}},[r("md-option",{key:t.currentStatus.id,attrs:{value:t.currentStatus.id}},[t._v("\n                                "+t._s(t.currentStatus.title)+"\n                            ")]),t._v(" "),t._l(t.restStatuses,(function(e){return r("md-option",{key:e.id,attrs:{value:e.id}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])}))],2)],1):r("span",{staticClass:"md-title"},[t._v(t._s(t.currentStatus.title))])],1):t._e(),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{"md-sort":"date","md-sort-order":"desc",value:t.order.statuses},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.date))])])])],1)}}],null,!1,2207956564)})],1)],1)],1)])]):t._e()}),[],!1,null,null,null);e.default=b.exports}}]);