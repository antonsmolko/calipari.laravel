(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{176:function(t,e,n){var r=n(9),a=n(369);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},177:function(t,e,n){var r=n(9),a=n(371);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},178:function(t,e,n){var r=n(9),a=n(373);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},20:function(t,e,n){"use strict";var r={name:"TableActions",props:{item:{type:Object,default:null},subPath:{type:String,required:!0},deleteDisabled:{type:Boolean,default:!1},editDisabled:{type:Boolean,default:!1},restParams:{type:Object,default:function(){return{}}}},methods:{onDelete:function(t){this.$emit("delete",t)}}},a=(n(368),n(0)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"table-actions"},[n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",disabled:t.editDisabled,to:{name:"cms."+t.subPath+".edit",params:Object.assign({},{id:t.item.id},t.restParams)}}}),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.deleteDisabled,color:"md-danger"},on:{click:function(e){return t.onDelete(t.item)}}})],1):t._e()}),[],!1,null,"d323bed2",null);e.a=i.exports},28:function(t,e,n){"use strict";var r={name:"ThumbTableCell",components:{ResourceImage:n(58).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},a=(n(370),n(0)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);e.a=i.exports},36:function(t,e,n){"use strict";var r=n(13),a=n.n(r),i=n(2),o=n(282),s=n(91),c=n.n(s),u=n(67);function l(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){l(i,r,a,o,s,"next",t)}function s(t){l(i,r,a,o,s,"throw",t)}o(void 0)}))}}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=c()((function(t){return t()}),300),g={name:"VExtendedTable",components:{Pagination:u.d},props:{searchFields:{type:Array,default:function(){return["id"]}},perPageOptions:{type:Array,default:function(){return[20,50,100,200]}},serverPagination:{type:Boolean,default:!1},resourceUrl:{type:String,required:!0},defaultSortOrder:{type:String,default:"asc"},emptyContent:{type:String,default:"Ресурсы отсутствуют!"},editItemPathName:{type:String,default:"cms.images.edit"}},data:function(){return{currentSort:"id",fuseSearch:null}},computed:f(f(f({},Object(i.d)("table",{sortInit:function(t){return t.sortInit},items:function(t){return t.items},searchedItems:function(t){return t.searchedItems},searchQuery:function(t){return t.searchQuery},pagination:function(t){return t.pagination},loading:function(t){return t.loading},routeDetector:function(t){return t.routeDetector}})),Object(i.c)("table",["itemsQty","searchedQty","checkReturnToPreviousPage","checkReturnToSearchedPreviousPage","isSearchedEmpty","totalPages"])),{},{queriedData:function(){return(!this.serverPagination&&this.searchQuery?this.searchedItems:this.items).slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.per_page;return this.total<t&&(t=this.total),t},from:function(){return this.serverPagination?0:this.pagination.per_page*(this.pagination.current_page-1)},total:function(){return this.pagination.total?this.pagination.total:this.searchedQty?this.searchedItems.length:this.items.length},fromEditItemPage:function(){return this.$route.name===this.routeDetector.to&&this.editItemPathName===this.routeDetector.from}}),watch:{items:function(){this.initFuseSearch(this.searchFields)},itemsQty:function(){this.returnToPreviousPage()},searchedQty:function(){this.returnToPreviousPage()}},created:function(){this.fromEditItemPage||(this.resetRouteDetector(),this.setState()),this.returnToPreviousPage(),this.requestItems()},mounted:function(){window.scrollTo(0,0),this.initFuseSearch(this.searchFields)},methods:f(f({},Object(i.b)("table",{clearStateAction:"clearState",getRequestItemsAction:"getItemsGet",postRequestItemsAction:"getItemsPost",setFieldAction:"setField",setFieldsAction:"setFields",setPaginationFieldAction:"setPaginationField",resetPaginationAction:"resetPagination",setRouteDetectorFieldAction:"setRouteDetectorField"})),{},{requestItems:function(){var t=this;return d(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.serverPagination){e.next=5;break}return e.next=3,t.postRequestItemsAction();case 3:e.next=7;break;case 5:return e.next=7,t.getRequestItemsAction();case 7:case"end":return e.stop()}}),e)})))()},customSort:function(){var t=this;return d(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.sortInit||t.loading||!t.items.length||t.fromEditItemPage){e.next=12;break}return n="asc"===t.pagination.sort_order?"desc":"asc",e.next=4,Promise.all([t.setPaginationFieldAction({field:"sort_order",value:n}),t.setPaginationFieldAction({field:"sort_by",value:t.currentSort})]);case 4:if(!t.serverPagination){e.next=10;break}return e.next=7,t.postRequestItemsAction();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=t.sort(t.items);case 11:return e.abrupt("return",e.t0);case 12:t.resetRouteDetector(),t.setFieldAction({field:"sortInit",value:!0});case 14:case"end":return e.stop()}}),e)})))()},sort:function(t){var e=this;return t.sort((function(t,n){var r=e.pagination.sort_by;return"asc"===e.pagination.sort_order?e.getSort(t,n,r):e.getSort(n,t,r)}))},getSort:function(t,e,n){return"number"==typeof t[n]&&"number"==typeof e[n]?t[n]<e[n]?-1:1:t[n].localeCompare(e[n])},search:function(t){var e=this;return d(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.trim(),n.next=3,Promise.all([e.setFieldAction({field:"searchQuery",value:r}),e.setDefaultPage()]);case 3:r||e.clearSearchedItems(),e.handleSearch();case 5:case"end":return n.stop()}}),n)})))()},handleSearch:function(){this.serverPagination?p(this.postRequestItemsAction):this.setSearchedItems()},initFuseSearch:function(t){this.serverPagination||(this.fuseSearch=new o.a(this.items.slice(),{keys:t,threshold:.3}))},changePage:function(t){var e=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setPaginationFieldAction({field:"current_page",value:t});case 2:if(!e.serverPagination){n.next=5;break}return n.next=5,e.postRequestItemsAction();case 5:window.scrollTo(0,0);case 6:case"end":return n.stop()}}),n)})))()},changePerPage:function(t){var e=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setPaginationFieldAction({field:"per_page",value:t});case 2:return n.next=4,e.setDefaultPage();case 4:case"end":return n.stop()}}),n)})))()},setSearchedItems:function(){var t=this.fuseSearch.search(this.searchQuery).map((function(t){return t.item}));this.setFieldAction({field:"searchedItems",value:t})},setDefaultPage:function(){this.setPaginationFieldAction({field:"current_page",value:1})},clearSearchedItems:function(){this.setFieldAction({field:"searchedItems",value:[]})},setState:function(){this.resetPaginationAction(),this.clearStateAction(),this.setFieldAction({field:"resourceUrl",value:this.resourceUrl}),this.setPaginationFieldAction({field:"sort_order",value:this.defaultSortOrder}),this.setPaginationFieldAction({field:"per_page",value:this.perPageOptions[0]})},returnToPreviousPage:function(){this.serverPagination?this.checkGoPrevWithServerPagination():this.checkGoPrev()},checkGoPrevWithServerPagination:function(){var t=this;return d(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.checkReturnToPreviousPage){e.next=5;break}return e.next=3,t.setPaginationFieldAction({field:"current_page",value:t.pagination.current_page-1});case 3:return e.next=5,t.postRequestItemsAction();case 5:case"end":return e.stop()}}),e)})))()},checkGoPrev:function(){this.pagination.current_page>this.totalPages&&this.setPaginationFieldAction({field:"current_page",value:this.totalPages})},resetRouteDetector:function(){this.setRouteDetectorFieldAction({field:"from",value:null}),this.setRouteDetectorFieldAction({field:"to",value:null})}})},v=(n(372),n(0)),b=Object(v.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"progress-bar__container"},[n("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{"md-mode":"indeterminate"}})],1),t._v(" "),t.items?n("div",[n("md-table",{staticClass:"paginated-table table-striped table-hover",class:{loading:t.loading},attrs:{value:t.queriedData,"md-sort":t.currentSort,"md-sort-fn":t.customSort},on:{"update:mdSort":function(e){t.currentSort=e},"update:md-sort":function(e){t.currentSort=e}},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var r=e.item;return n("md-table-row",{},[t._t("default",null,{item:r})],2)}}],null,!0)},[n("md-table-toolbar",{staticClass:"mb-3"},[n("md-field",[n("label",{attrs:{for:"pages"}},[t._v("На странице")]),t._v(" "),n("md-select",{attrs:{value:t.pagination.per_page,name:"pages"},on:{"md-selected":t.changePerPage}},t._l(t.perPageOptions,(function(e){return n("md-option",{key:e,attrs:{label:e,value:e}},[t._v("\n                            "+t._s(e)+"\n                        ")])})),1)],1),t._v(" "),n("md-field",[n("md-input",{staticStyle:{width:"200px"},attrs:{type:"search",clearable:"",placeholder:"Поиск",value:t.searchQuery},on:{input:t.search}})],1)],1),t._v(" "),t._v(" "),t.isSearchedEmpty&&!t.loading?n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[t._v("Нет данных соответствующих поисковому запросу!")])]):t._e()],1),t._v(" "),t.loading?t._e():n("md-card-actions",{attrs:{"md-alignment":"space-between"}},[n("div",[t.serverPagination?n("p",{staticClass:"card-category"},[t._v(t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" / "+t._s(t.total))]):n("p",{staticClass:"card-category"},[t._v(t._s(t.from+1)+" - "+t._s(t.to)+" / "+t._s(t.total))])]),t._v(" "),n("pagination",{staticClass:"pagination-no-border pagination-success",attrs:{"per-page":t.pagination.per_page,total:t.total,value:t.pagination.current_page},on:{input:t.changePage}})],1)],1):t.loading?t._e():[n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[t._v(t._s(t.emptyContent))])])]],2)}),[],!1,null,null,null);e.a=b.exports},368:function(t,e,n){"use strict";var r=n(176);n.n(r).a},369:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.table-actions[data-v-d323bed2] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},370:function(t,e,n){"use strict";var r=n(177);n.n(r).a},371:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},372:function(t,e,n){"use strict";var r=n(178);n.n(r).a},373:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.loading td {\n    opacity: 0;\n}\n.progress-bar__container {\n    height: 4px;\n}\n",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return m})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return g}));var r=n(13),a=n.n(r),i=n(34),o=n.n(i);function s(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}var c={methods:{create:function(t){var e=this,n=t.sendData,r=t.title,a=t.successText,i=t.redirectRoute,s=t.storeModule,c=void 0===s?null:s,u=t.action,l=void 0===u?"store":u,d=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(d).concat(l),n).then((function(){return e.$router.push(i),o.a.fire({title:a,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{update:function(t){var e=this,n=t.sendData,r=t.title,a=t.redirectRoute,i=t.successText,s=t.storeModule,c=void 0===s?null:s,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u,"update"),n).then((function(){return e.$router.push(a),o.a.fire({title:i,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,n=t.payload,r=t.title,a=t.alertText,i=t.successText,o=t.storeModule,s=void 0===o?null:o,c=t.redirectRoute,u=void 0===c?null:c,l=t.tableMode,d=void 0!==l&&l,m=t.action,p=void 0===m?"delete":m,g=t.force,v=void 0!==g&&g,b=s?"".concat(s,"/"):"",P=v?"forceDelete":p;return h(a).then((function(t){if(t.value)return e.$store.dispatch("".concat(b).concat(P),{payload:n,tableMode:d}).then((function(){return u&&e.$router.push(u),f(i,r)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,r=t.index,a=t.alertText,i=t.successText,o=t.storeModule,s=void 0===o?null:o;return h(a).then((function(t){if(t.value)return e.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:n,index:r}).then((function(){return f(i,r)}))}))}}},h=function(t){return o.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},f=function(t,e){return o.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},m={methods:{upload:function(t){var e,n=this;return(e=a.a.mark((function e(){var r,i,s,c,u,l,d,h,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.uploadFiles,i=t.type,s=void 0===i?null:i,c=t.id,u=void 0===c?null:c,l=t.storeModule,d=void 0===l?null:l,h=Array.from(r),f=d||"categories",!u){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(f,"/uploadImages"),{files:h,id:u,type:s});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",h);case 10:return e.next=12,o.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(t){s(i,r,a,o,c,"next",t)}function c(t){s(i,r,a,o,c,"throw",t)}o(void 0)}))})()}}},p={methods:{addImages:function(t){var e=this,n=t.id,r=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:r}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},g={methods:{addImages:function(t){var e=this,n=t.type,r=t.id,a=t.data,i=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:r,data:a}).then((function(){return e.$router.push(i),o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},687:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(36),i=n(28),o=n(20),s=n(5),c=n(4);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={name:"ArtCollectionList",mixins:[s.b,c.c],components:{VExtendedTable:a.a,ThumbTableCell:i.a,TableActions:o.a},data:function(){return{resourceUrl:"/catalog/art-collections",redirectRoute:{name:"cms.catalog"},storeModule:"artCollections"}},created:function(){this.setPageTitle("Арт коллекции")},methods:l(l({},Object(r.b)({togglePublishAction:"table/togglePublish"})),{},{onDelete:function(t){return this.delete({payload:t.id,title:t.title,alertText:"коллекцию «".concat(t.title,"»"),storeModule:this.storeModule,successText:"Коллекция удалена!",tableMode:"table"})},togglePublish:function(t){this.togglePublishAction("/catalog/art-collections/".concat(t.id,"/publish"))}})},f=n(0),m=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{title:"В каталог",to:t.redirectRoute}}),t._v(" "),n("router-button-link",{attrs:{title:"Создать коллекцию",icon:"add",color:"md-success",to:{name:"cms.catalog.art-collections.create"}}})],1)],1),t._v(" "),n("div",{staticClass:"space-1"}),t._v(" "),n("md-card",[n("card-icon-header",{attrs:{title:"Арт коллекции",icon:"assignment"}}),t._v(" "),n("md-card-content",[n("v-extended-table",{attrs:{resourceUrl:t.resourceUrl,editItemPathName:"cms.catalog.art-collections.edit",searchFields:["title","alias"],emptyContent:"У Вас нет коллекций. Создайте их!"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#"}},[t._v("\n                            "+t._s(r.id)+"\n                        ")]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{path:r.thumb||t.$config.imagePlaceholder,static:!r.thumb,width:150}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Заголовок"}},[n("span",{staticClass:"md-subheading"},[t._v(t._s(r.title))])]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Изображения"}},[t._v("\n                            "+t._s(r.images_count)+"\n                        ")]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Опубликован"}},[n("md-switch",{attrs:{disabled:!r.has_published_images,value:!r.publish},on:{change:function(e){return t.togglePublish(r)}}},[[r.has_published_images?t._e():n("span",[t._v("Нет опубликованных изображений!")])]],2)],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("router-button-link",{attrs:{title:"Изображения",icon:"perm_media",to:{name:"cms.catalog.art-collections.images",params:{id:r.id}}}}),t._v(" "),n("table-actions",{attrs:{item:r,subPath:"catalog.art-collections"},on:{delete:t.onDelete}})],1)]}}])})],1)],1)],1)])}),[],!1,null,null,null);e.default=m.exports}}]);