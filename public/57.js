(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{198:function(t,e,r){var s=r(9),a=r(482);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};s(a,i);t.exports=a.locals||{}},295:function(t,e,r){var s=r(478)(r(264));t.exports=s},4:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"f",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"b",(function(){return u})),r.d(e,"g",(function(){return f})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return _}));var s=r(15),a=r.n(s),i=r(42),n=r.n(i);function o(t,e,r,s,a,i,n){try{var o=t[i](n),d=o.value}catch(t){return void r(t)}o.done?e(d):Promise.resolve(d).then(s,a)}var d={methods:{create:function(t){var e=this,r=t.sendData,s=t.title,a=t.successText,i=t.redirectRoute,o=t.storeModule,d=void 0===o?null:o,c=t.action,l=void 0===c?"store":c,u=d?"".concat(d,"/"):"";return this.$store.dispatch("".concat(u).concat(l),r).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(i),n.a.fire({title:a,text:"«".concat(s,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},c={methods:{update:function(t){var e=this,r=t.sendData,s=t.title,a=t.redirectRoute,i=t.successText,o=t.storeModule,d=void 0===o?null:o,c=d?"".concat(d,"/"):"";return this.$store.dispatch("".concat(c,"update"),r).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(a),n.a.fire({title:i,text:"«".concat(s,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,r=t.payload,s=t.title,a=t.alertText,i=t.successText,n=t.storeModule,o=void 0===n?null:n,d=t.redirectRoute,c=void 0===d?null:d,l=t.tableMode,u=void 0!==l&&l,f=t.force,h=void 0!==f&&f,_=o?"".concat(o,"/"):"",b=h?"forceDelete":"delete";return m(a).then((function(t){if(t.value)return e.$store.dispatch("".concat(_).concat(b),{payload:r,tableMode:u}).then((function(){return c&&(window.history.length>1?e.$router.go(-1):e.$router.push(c)),v(i,s)}))}))}}},u={methods:{deleteImageByIndex:function(t){var e=this,r=t.id,s=t.index,a=t.alertText,i=t.successText,n=t.storeModule,o=void 0===n?null:n;return m(a).then((function(t){if(t.value)return e.$store.dispatch("".concat(o,"/deleteImageByIndex"),{id:r,index:s}).then((function(){return v(i,s)}))}))}}},m=function(t){return n.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},v=function(t,e){return n.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},f={methods:{upload:function(t){var e,r=this;return(e=a.a.mark((function e(){var s,i,o,d,c,l,u,m,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.uploadFiles,i=t.type,o=void 0===i?null:i,d=t.id,c=void 0===d?null:d,l=t.storeModule,u=void 0===l?null:l,m=Array.from(s),v=u||"categories",!c){e.next=8;break}return e.next=6,r.$store.dispatch("".concat(v,"/uploadImages"),{files:m,id:c,type:o});case 6:e.next=10;break;case 8:return e.next=10,r.$store.dispatch("images/store",m);case 10:return e.next=12,n.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(s,a){var i=e.apply(t,r);function n(t){o(i,s,a,n,d,"next",t)}function d(t){o(i,s,a,n,d,"throw",t)}n(void 0)}))})()}}},h={methods:{addImages:function(t){var e=this,r=t.id,s=t.data;this.$store.dispatch("categories/addSelectedImages",{id:r,data:s}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:r}}),n.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},_={methods:{addImages:function(t){var e=this,r=t.type,s=t.id,a=t.data,i=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:r,id:s,data:a}).then((function(){return e.$router.push(i),n.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},478:function(t,e,r){var s=r(479),a=r(261),i=r(290),n=r(480);t.exports=function(t){return function(e){var r=a(e);return"[object Map]"==r?i(e):"[object Set]"==r?n(e):s(e,t(e))}}},479:function(t,e,r){var s=r(289);t.exports=function(t,e){return s(e,(function(e){return[e,t[e]]}))}},480:function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=[t,t]})),r}},481:function(t,e,r){"use strict";var s=r(198);r.n(s).a},482:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".tm-order-item__table thead {\n  display: none;\n}\n.tm-order-item__table td.md-table-cell {\n  padding: 0 8px !important;\n  height: 40px;\n}\n.tm-order-item__footer-content {\n  width: 100%;\n  text-align: center;\n}",""])},634:function(t,e,r){"use strict";r.r(e);var s=r(3),a=r(12),i=r(295),n=r.n(i),o={name:"OrderItem",components:{ProductCard:r(157).a},props:{item:{type:Object,required:!0}},computed:{formatPrice:function(){var t=this.item.price*this.item.qty+this.item.added_costs_amount;return Object(a.c)(t)},addedCostsEntries:function(){return n()(this.item.added_costs)}},methods:{downloadLabel:function(){this.$emit("downloadLabel",this.item.id)},downloadLayout:function(){this.$emit("downloadLayout",this.item.id)},getPrice:function(t){return Object(a.c)(t)}}},d=r(0),c=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tm-order-item mb-5"},[r("product-card",{attrs:{headerAnimation:"false"}},[r("img",{staticClass:"img",attrs:{slot:"imageHeader",src:t.item.thumb},slot:"imageHeader"}),t._v(" "),r("h4",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[r("span",{staticClass:"card-title"},[t._v("Артикул:")]),t._v(" "),r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(t.item.article))])])]),t._v(" "),r("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Ширина:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.width)+" см")])]),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Высота:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.height)+" см")])]),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Фактура:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.texture))])]),t._v(" "),t.item.filter?r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Эффекты:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.filter))])]):t._e(),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Количество:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.item.qty))])]),t._v(" "),t.item.added_costs_amount?[r("div",{staticClass:"space-10"}),t._v(" "),t._l(t.addedCostsEntries,(function(e,s){var a=e[0],i=e[1];return r("div",{key:s,staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v(t._s(a)+":")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.getPrice(i))+" ")])])}))]:t._e(),t._v(" "),r("div",{staticClass:"md-order-item__details-item"},[r("span",{staticClass:"card-title"},[t._v("Цена за ед.:")]),t._v(" "),r("span",{staticClass:"md-body-2"},[t._v(t._s(t.getPrice(t.item.price)))])])],2),t._v(" "),r("template",{slot:"footer"},[r("div",{staticClass:"tm-order-item__footer-content"},[r("div",{staticClass:"price"},[r("h3",[t._v(t._s(t.formatPrice))])]),t._v(" "),r("md-button",{staticClass:"md-success",on:{click:t.downloadLabel}},[r("md-icon",[t._v("get_app")]),t._v(" Этикетка\n                ")],1),t._v(" "),r("md-button",{staticClass:"md-success",on:{click:t.downloadLayout}},[r("md-icon",[t._v("get_app")]),t._v(" Макет\n                ")],1)],1)])],2)],1)}),[],!1,null,null,null).exports,l=r(5),u=r(4),m=r(42),v=r.n(m);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b={name:"Order",components:{OrderItem:c},mixins:[l.b,l.a,u.f,u.c],props:{id:{type:[String,Number],required:!0}},data:function(){return{redirectRoute:{name:"cms.store.orders"},responseData:!1,storeModule:"orders",controlSaveVisibilities:!1}},computed:h(h({},Object(s.d)("orders",{order:function(t){return t.item}})),{},{restStatuses:function(){return this.$store.getters["orderStatuses/getRestItems"](this.order.status)},baseTableData:function(){return[{title:"Номер",content:this.order.number},{title:"Дата",content:this.order.date},{title:"Статус",content:this.order.status.title}]},priceTableData:function(){return[{title:"Цена заказа",content:Object(a.c)(this.order.price-this.order.delivery.price)},{title:"Цена доставки",content:Object(a.c)(this.order.delivery.price)},{title:"Итого",content:Object(a.c)(this.order.price)}]},deliveryTableData:function(){return[{title:"Способ доставки",content:this.order.delivery.title},{title:"Регион доставки",content:this.order.delivery.locality},{title:"Адресс",content:this.order.delivery.address}]},customerTableData:function(){return[{title:"Имя",content:this.order.customer.name},{title:"Email",content:this.order.customer.email},{title:"Телефон",content:this.order.customer.phone},{title:"Комментарий к заказу",content:this.order.comment||"-"}]},userTableData:function(){var t=this.order.user;return t?[{title:"ID",content:t.id},{title:"Имя",content:t.name},{title:"Email",content:t.email}]:null},refundAvailable:function(){return this.order.paid&&this.availableRefundAmount>0},availableRefundAmount:function(){var t=this.order.price-Number(this.order.refund_amount);return t>0?t:0}}),created:function(){var t=this;Promise.all([this.getStatusesAction(),this.getItemAction(this.id)]).then((function(){t.setPageTitle("Заказ № ".concat(t.order.number)),t.responseData=!0})).catch((function(){return t.$router.push(t.redirectRoute)}))},methods:h(h({},Object(s.b)({getStatusesAction:"orderStatuses/getItems",getItemAction:"orders/getItem",changeStatusAction:"orders/changeStatus",downloadPdfLabelAction:"orders/downloadPdfLabel",downloadPdfLayoutAction:"orders/downloadPdfLayout",downloadPdfDetailsAction:"orders/downloadPdfDetails"})),{},{onUpdate:function(){return this.update({sendData:{status:this.order.status.id,id:this.id},title:this.order.number,successText:"Заказ обновлен!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.title,alertText:"заказ № «".concat(this.order.number,"»"),successText:"Заказ удален!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onStatusChange:function(t){var e=this,r=this.getStatusById(t);return this.confirm("Смена статуса вызывает отправку уведомления клиенту!").then((function(s){if(s.value)return e.changeStatusAction({id:e.order.id,status:t,list:!1}).then((function(){return v.a.fire({title:"Заказ № ".concat(e.order.number," обновлен!"),text:"Установлен статус «".concat(r.title,"»"),timer:2e3,icon:"success",showConfirmButton:!1})}))}))},confirm:function(t){return v.a.fire({title:"Внимание?",text:t,icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Подтвердить",cancelButtonText:"Отменить",buttonsStyling:!1})},getStatusById:function(t){return this.$store.getters["orderStatuses/getItemById"](t)},getFormatPrice:function(t){return Object(a.c)(t)},getArticle:function(t){return Object(a.b)(t)},downloadLabel:function(t){var e="order-label-".concat(this.order.number,"-").concat(t,".pdf");this.downloadPdfLabelAction({itemId:t,fileName:e})},downloadLayout:function(t){var e="order-layout-".concat(this.order.number,"-").concat(t,".pdf");this.downloadPdfLayoutAction({itemId:t,fileName:e})},downloadDetails:function(){var t="order-details-".concat(this.order.number,".pdf");this.downloadPdfDetailsAction({id:this.id,fileName:t})}})},p=(r(481),Object(d.a)(b,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.responseData?r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-100"},[r("md-card",{staticClass:"mt-0"},[r("md-card-content",{staticClass:"md-between"},[r("router-button-link",{attrs:{route:t.redirectRoute.name,title:"К списку заказов"}}),t._v(" "),r("div",[r("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:t.controlSaveVisibilities&&t.$v.$anyDirty&&!t.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[r("control-button",{attrs:{title:"Сохранить"},on:{click:t.onUpdate}})],1),t._v(" "),t.authCheck("order-refund")&&t.refundAvailable?r("router-button-link",{attrs:{title:"Возместить",icon:"money_off",color:"md-warning",route:"cms.store.orders.order.refund",params:{id:t.id}}}):t._e(),t._v(" "),r("md-button",{staticClass:"md-success",on:{click:t.downloadDetails}},[r("md-icon",[t._v("get_app")]),t._v(" Детализация\n                    ")],1),t._v(" "),t.authCheck("order-delete")?r("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:t.onDelete}}):t._e()],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-33 md-xlarge-size-25"},t._l(t.order.items,(function(e){return r("order-item",{key:e.id,attrs:{item:e},on:{downloadLabel:t.downloadLabel,downloadLayout:t.downloadLayout}})})),1),t._v(" "),r("div",{staticClass:"md-layout-item md-xsmall-size-100 md-medium-size-50 md-large-size-66 md-xlarge-size-75"},[r("md-card",[r("card-icon-header",{attrs:{title:"Основная информация",icon:"info"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.baseTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{staticClass:"mt-3",attrs:{title:"Цена",icon:"account_balance_wallet"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.priceTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Доставка",icon:"local_shipping"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.deliveryTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Получатель",icon:"face"}}),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.customerTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)})],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Пользователь",icon:"person"}}),t._v(" "),r("md-card-content",[t.userTableData?r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{value:t.userTableData},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.content))])])])],1)}}],null,!1,3359825993)}):r("span",{staticClass:"md-title"},[r("small",[t._v("Незарегистрированный")])])],1)],1),t._v(" "),r("md-card",[r("card-icon-header",{attrs:{title:"Статусы",icon:"update"}}),t._v(" "),t.restStatuses.length?r("md-card-content",[r("h4",{staticClass:"card-title mb-0"},[t._v("Текущий статус")]),t._v(" "),t.restStatuses.length&&"canceled"!==t.order.status.alias?r("md-field",[r("md-select",{attrs:{value:t.order.status.id},on:{"md-selected":t.onStatusChange}},[r("md-option",{key:t.order.status.id,attrs:{value:t.order.status.id}},[t._v("\n                            "+t._s(t.order.status.title)+"\n                        ")]),t._v(" "),t._l(t.restStatuses,(function(e){return r("md-option",{key:e.id,attrs:{value:e.id}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2)],1):r("span",{staticClass:"md-title"},[t._v(t._s(t.order.status.title))])],1):t._e(),t._v(" "),r("md-card-content",[r("md-table",{staticClass:"tm-order-item__table table-striped table-hover",attrs:{"md-sort":"date","md-sort-order":"desc",value:t.order.statuses},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var s=e.item;return r("md-table-row",{},[r("md-table-cell",{staticClass:"tm-width-1-2"},[r("h4",{staticClass:"card-title mb-0 mt-0"},[t._v(t._s(s.title))])]),t._v(" "),r("md-table-cell",[r("span",{staticClass:"md-title"},[r("small",[t._v(t._s(s.date))])])])],1)}}],null,!1,2207956564)})],1)],1)],1)]):t._e()}),[],!1,null,null,null));e.default=p.exports}}]);