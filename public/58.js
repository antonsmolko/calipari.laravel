(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{200:function(t,e,r){var a=r(9),s=r(488);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var n={insert:"head",singleton:!1};a(s,n);t.exports=s.locals||{}},298:function(t,e,r){var a=r(484)(r(210));t.exports=a},4:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"f",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"b",(function(){return u})),r.d(e,"g",(function(){return f})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return _}));var a=r(14),s=r.n(a),n=r(44),i=r.n(n);function o(t,e,r,a,s,n,i){try{var o=t[n](i),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(a,s)}var c={methods:{create:function(t){var e=this,r=t.sendData,a=t.title,s=t.successText,n=t.redirectRoute,o=t.storeModule,c=void 0===o?null:o,d=t.action,l=void 0===d?"store":d,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u).concat(l),r).then((function(){return e.$router.push(n),i.a.fire({title:s,text:"«".concat(a,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},d={methods:{update:function(t){var e=this,r=t.sendData,a=t.title,s=t.redirectRoute,n=t.successText,o=t.storeModule,c=void 0===o?null:o,d=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(d,"update"),r).then((function(){return e.$router.push(s),i.a.fire({title:n,text:"«".concat(a,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,r=t.payload,a=t.title,s=t.alertText,n=t.successText,i=t.storeModule,o=void 0===i?null:i,c=t.redirectRoute,d=void 0===c?null:c,l=t.tableMode,u=void 0!==l&&l,f=t.action,h=void 0===f?"delete":f,_=t.force,b=void 0!==_&&_,p=o?"".concat(o,"/"):"",C=b?"forceDelete":h;return m(s).then((function(t){if(t.value)return e.$store.dispatch("".concat(p).concat(C),{payload:r,tableMode:u}).then((function(){return d&&e.$router.push(d),v(n,a)}))}))}}},u={methods:{deleteImageByIndex:function(t){var e=this,r=t.id,a=t.index,s=t.alertText,n=t.successText,i=t.storeModule,o=void 0===i?null:i;return m(s).then((function(t){if(t.value)return e.$store.dispatch("".concat(o,"/deleteImageByIndex"),{id:r,index:a}).then((function(){return v(n,a)}))}))}}},m=function(t){return i.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},v=function(t,e){return i.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},f={methods:{upload:function(t){var e,r=this;return(e=s.a.mark((function e(){var a,n,o,c,d,l,u,m,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.uploadFiles,n=t.type,o=void 0===n?null:n,c=t.id,d=void 0===c?null:c,l=t.storeModule,u=void 0===l?null:l,m=Array.from(a),v=u||"categories",!d){e.next=8;break}return e.next=6,r.$store.dispatch("".concat(v,"/uploadImages"),{files:m,id:d,type:o});case 6:e.next=10;break;case 8:return e.next=10,r.$store.dispatch("images/store",m);case 10:return e.next=12,i.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,s){var n=e.apply(t,r);function i(t){o(n,a,s,i,c,"next",t)}function c(t){o(n,a,s,i,c,"throw",t)}i(void 0)}))})()}}},h={methods:{addImages:function(t){var e=this,r=t.id,a=t.data;this.$store.dispatch("categories/addSelectedImages",{id:r,data:a}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:r}}),i.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},_={methods:{addImages:function(t){var e=this,r=t.type,a=t.id,s=t.data,n=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:r,id:a,data:s}).then((function(){return e.$router.push(n),i.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},484:function(t,e,r){var a=r(485),s=r(265),n=r(294),i=r(486);t.exports=function(t){return function(e){var r=s(e);return"[object Map]"==r?n(e):"[object Set]"==r?i(e):a(e,t(e))}}},485:function(t,e,r){var a=r(267);t.exports=function(t,e){return a(e,(function(e){return[e,t[e]]}))}},486:function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=[t,t]})),r}},487:function(t,e,r){"use strict";var a=r(200);r.n(a).a},488:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".tm-order-item__table thead {\n  display: none;\n}\n.tm-order-item__table td.md-table-cell {\n  padding: 0 8px !important;\n  height: 40px;\n}\n.tm-order-item__footer-content {\n  width: 100%;\n  text-align: center;\n}",""])},657:function(t,e,r){"use strict";r.r(e);var a=r(14),s=r.n(a),n=r(3),i=r(12),o=r(298),c=r.n(o),d={name:"OrderItem",components:{ProductCard:r(160).a},props:{item:{type:Object,required:!0}},computed:{formatPrice:function(){var t=this.item.price*this.item.qty+this.item.added_costs_amount;return Object(i.d)(t)},addedCostsEntries:function(){return c()(this.item.added_costs)}},methods:{downloadLabel:function(){this.$emit("downloadLabel",this.item.id)},downloadLayout:function(){this.$emit("downloadLayout",this.item.id)},getPrice:function(t){return Object(i.d)(t)}}},l=r(0),u=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tm-order-item mb-5"},[r("product-card",{attrs:{headerAnimation:"false"}},[r("img",{staticClass:"img",attrs:{slot:"imageHeader",src:t.item.thumb},slot:"imageHeader"}),t._v(" "),r("h4",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[r("span",{staticClass:"card-title"},[t._v("Артикул:")]),t._v(" "),r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(t.item.article))])])]),t._v(" "),r("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Ширина:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.width)+" см")])]),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Высота:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.height)+" см")])]),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Фактура:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.texture))])]),t._v(" "),t.item.filter?r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Эффекты:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.filter))])]):t._e(),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Количество:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.qty))])]),t._v(" "),t.item.added_costs_amount?[r("div",{staticClass:"space-10"}),t._v(" "),t._l(t.addedCostsEntries,(function(e,a){var s=e[0],n=e[1];return r("div",{key:a,staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v(t._s(s)+":")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.getPrice(n))+" ")])])}))]:t._e(),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Цена за ед.:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.getPrice(t.item.price)))])])],2),t._v(" "),r("template",{slot:"footer"},[r("div",{staticClass:"tm-order-item__footer-content"},[r("div",{staticClass:"price"},[r("h3",[t._v(t._s(t.formatPrice))])]),t._v(" "),r("md-button",{staticClass:"md-success",on:{click:t.downloadLabel}},[r("md-icon",[t._v("get_app")]),t._v(" Этикетка\n                ")],1),t._v(" "),r("md-button",{staticClass:"md-success",on:{click:t.downloadLayout}},[r("md-icon",[t._v("get_app")]),t._v(" Макет\n                ")],1)],1)])],2)],1)}),[],!1,null,null,null).exports,m=r(5),v=r(4),f=r(44),h=r.n(f);function _(t,e,r,a,s,n,i){try{var o=t[n](i),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(a,s)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={name:"Order",components:{OrderItem:u},mixins:[m.b,m.a,v.f,v.c],props:{id:{type:[String,Number],required:!0}},data:function(){return{redirectRoute:{name:"cms.store.orders"},responseData:!1,storeModule:"orders",controlSaveVisibilities:!1}},computed:p(p({},Object(n.d)("orders",{order:function(t){return t.item}})),{},{sortedStatuses:function(){return this.$store.getters["orders/getSortedItemStatuses"]},restStatuses:function(){return this.$store.getters["orderStatuses/getRestItems"](this.currentStatus.order)},currentStatus:function(){return Object(i.c)(this.order.statuses)},baseTableData:function(){return[{title:"Номер",content:this.order.number},{title:"Дата",content:this.order.date},{title:"Статус",content:this.currentStatus.title}]},priceTableData:function(){return[{title:"Цена заказа",content:Object(i.d)(this.order.price-this.order.delivery.price)},{title:"Цена доставки",content:Object(i.d)(this.order.delivery.price)},{title:"Итого",content:Object(i.d)(this.order.price)}]},deliveryTableData:function(){return[{title:"Способ доставки",content:this.order.delivery.title},{title:"Регион доставки",content:this.order.delivery.locality},{title:"Адресс",content:this.order.delivery.address}]},customerTableData:function(){return[{title:"Имя",content:this.order.customer.name},{title:"Email",content:this.order.customer.email},{title:"Телефон",content:this.order.customer.phone},{title:"Комментарий к заказу",content:this.order.comment||"-"}]},userTableData:function(){var t=this.order.user;return t?[{title:"ID",content:t.id},{title:"Имя",content:t.name},{title:"Email",content:t.email}]:null},refundAvailable:function(){return this.order.paid&&this.availableRefundAmount>0},availableRefundAmount:function(){var t=this.order.price-Number(this.order.refund_amount);return t>0?t:0}}),created:function(){var t=this;Promise.all([this.getStatusesAction(),this.getItemAction(this.id)]).then((function(){t.setPageTitle("Заказ № ".concat(t.order.number)),t.responseData=!0})).catch((function(){return t.$router.push(t.redirectRoute)}))},methods:p(p({},Object(n.b)({getStatusesAction:"orderStatuses/getPublishedItems",getItemAction:"orders/getItem",changeStatusAction:"orders/changeStatus",downloadPdfLabelAction:"orders/downloadPdfLabel",downloadPdfLayoutAction:"orders/downloadPdfLayout",downloadPdfDetailsAction:"orders/downloadPdfDetails"})),{},{onUpdate:function(){return this.update({sendData:{status:this.order.status.id,id:this.id},title:this.order.number,successText:"Заказ обновлен!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.title,alertText:"заказ № «".concat(this.order.number,"»"),successText:"Заказ удален!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onStatusChange:function(t){var e,r=this;return(e=s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.getStatusById(t),e.next=3,r.confirm("Смена статуса вызывает отправку уведомления клиенту!");case 3:if(!e.sent.value){e.next=9;break}return e.next=7,r.changeStatusAction({id:r.order.id,status:t,list:!1});case 7:return e.next=9,h.a.fire({title:"Заказ № ".concat(r.order.number," обновлен!"),text:"Установлен статус «".concat(a.title,"»"),timer:2e3,icon:"success",showConfirmButton:!1});case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,s){var n=e.apply(t,r);function i(t){_(n,a,s,i,o,"next",t)}function o(t){_(n,a,s,i,o,"throw",t)}i(void 0)}))})()},confirm:function(t){return h.a.fire({title:"Внимание?",text:t,icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Подтвердить",cancelButtonText:"Отменить",buttonsStyling:!1})},getStatusById:function(t){return this.$store.getters["orderStatuses/getItemById"](t)},getFormatPrice:function(t){return Object(i.d)(t)},getArticle:function(t){return Object(i.b)(t)},downloadLabel:function(t){var e="order-label-".concat(this.order.number,"-").concat(t,".pdf");this.downloadPdfLabelAction({itemId:t,fileName:e})},downloadLayout:function(t){var e="order-layout-".concat(this.order.number,"-").concat(t,".pdf");this.downloadPdfLayoutAction({itemId:t,fileName:e})},downloadDetails:function(){var t="order-details-".concat(this.order.number,".pdf");this.downloadPdfDetailsAction({id:this.id,fileName:t})}})},w=(r(487),Object(l.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.responseData?r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-100"},[r("md-card",{staticClass:"mt-0"},[r("md-card-content",{staticClass:"md-between"},[r("router-button-link",{attrs:{route:t.redirectRoute.name,title:"К списку заказов"}}),t._v(" "),r("div",[r("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:t.controlSaveVisibilities&&t.$v.$anyDirty&&!t.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[r("control-button",{attrs:{title:"Сохранить"},on:{click:t.onUpdate}})],1),t._v(" "),t.authCheck("order-refund")&&t.refundAvailable?r("router-button-link",{attrs:{title:"Возместить",icon:"money_off",color:"md-warning",route:"cms.store.orders.order.refund",params:{id:t.id}}}):t._e(),t._v(" "),r("md-button",{staticClass:"md-success",on:{click:t.downloadDetails}},[r("md-icon",[t._v("get_app")]),t._v(" Детализация\n                    ")],1),t._v(" "),t.authCheck("order-delete")?r("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:t.onDelete}}):t._e()],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-33 md-xlarge-size-25"},t._l(t.order.items,(function(e){return r("order-item",{key:e.id,attrs:{item:e},on:{downloadLabel:t.downloadLabel,downloadLayout:t.downloadLayout}})})),1),t._v(" "),r("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-66 md-xlarge-size-75"},[r("md-card",[r("card-icon-header",{attrs:{title:"Основная информация",icon:"info"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.baseTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var a=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(a.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(a.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{staticClass:"mt-3",attrs:{title:"Цена",icon:"account_balance_wallet"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.priceTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var a=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(a.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(a.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Доставка",icon:"local_shipping"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.deliveryTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var a=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(a.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(a.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Получатель",icon:"face"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.customerTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var a=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(a.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(a.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Пользователь",icon:"person"}}),t._v(" "),r("md-card-content",[t.userTableData?r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.userTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var a=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(a.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(a.content))])])])],1)}}],null,!1,3359825993)}):r("span",{staticClass:"md-title"},[r("small",[t._v("Незарегистрированный")])])],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Статусы",icon:"update"}}),t._v(" "),t.restStatuses.length?r("md-card-content",[r("h4",{staticClass:"card-title mb-0"},[t._v("Текущий статус")]),t._v(" "),t.restStatuses.length&&"canceled"!==t.currentStatus.alias?r("md-field",[r("md-select",{attrs:{value:t.currentStatus.id},on:{"md-selected":t.onStatusChange}},[r("md-option",{key:t.currentStatus.id,attrs:{value:t.currentStatus.id}},[t._v("\n                            "+t._s(t.currentStatus.title)+"\n                        ")]),t._v(" "),t._l(t.restStatuses,(function(e){return r("md-option",{key:e.id,attrs:{value:e.id}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2)],1):r("span",{staticClass:"md-title"},[t._v(t._s(t.currentStatus.title))])],1):t._e(),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{"md-sort":"date","md-sort-order":"desc",value:t.sortedStatuses},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var a=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(a.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(a.date))])])])],1)}}],null,!1,2207956564)})],1)],1)],1)]):t._e()}),[],!1,null,null,null));e.default=w.exports}}]);