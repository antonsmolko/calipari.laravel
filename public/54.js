(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{175:function(t,e,n){var r=n(9),a=n(366);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},177:function(t,e,n){var r=n(9),a=n(370);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},22:function(t,e,n){"use strict";var r={name:"TableActions",props:{item:{type:Object,default:null},subPath:{type:String,required:!0},deleteDisabled:{type:Boolean,default:!1},editDisabled:{type:Boolean,default:!1},restParams:{type:Object,default:function(){return{}}}},methods:{onDelete:function(t){this.$emit("delete",t)}}},a=(n(365),n(0)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"table-actions"},[n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",disabled:t.editDisabled,to:{name:"cms."+t.subPath+".edit",params:Object.assign({},{id:t.item.id},t.restParams)}}}),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.deleteDisabled,color:"md-danger"},on:{click:function(e){return t.onDelete(t.item)}}})],1):t._e()}),[],!1,null,"d323bed2",null);e.a=i.exports},36:function(t,e,n){"use strict";var r=n(14),a=n.n(r),i=n(3),s=n(280),o=n(90),c=n.n(o),u=n(65);function l(t,e,n,r,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){l(i,r,a,s,o,"next",t)}function o(t){l(i,r,a,s,o,"throw",t)}s(void 0)}))}}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=c()((function(t){return t()}),300),v={name:"VExtendedTable",components:{Pagination:u.d},props:{searchFields:{type:Array,default:function(){return["id"]}},perPageOptions:{type:Array,default:function(){return[20,50,100,200]}},serverPagination:{type:Boolean,default:!1},resourceUrl:{type:String,required:!0},defaultSortOrder:{type:String,default:"asc"},emptyContent:{type:String,default:"Ресурсы отсутствуют!"},editItemPathName:{type:String,default:"cms.images.edit"}},data:function(){return{currentSort:"id",fuseSearch:null}},computed:h(h(h({},Object(i.d)("table",{sortInit:function(t){return t.sortInit},items:function(t){return t.items},searchedItems:function(t){return t.searchedItems},searchQuery:function(t){return t.searchQuery},pagination:function(t){return t.pagination},loading:function(t){return t.loading},routeDetector:function(t){return t.routeDetector}})),Object(i.c)("table",["itemsQty","searchedQty","checkReturnToPreviousPage","checkReturnToSearchedPreviousPage","isSearchedEmpty","totalPages"])),{},{queriedData:function(){return(!this.serverPagination&&this.searchQuery?this.searchedItems:this.items).slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.per_page;return this.total<t&&(t=this.total),t},from:function(){return this.serverPagination?0:this.pagination.per_page*(this.pagination.current_page-1)},total:function(){return this.pagination.total?this.pagination.total:this.searchedQty?this.searchedItems.length:this.items.length},fromEditItemPage:function(){return this.$route.name===this.routeDetector.to&&this.editItemPathName===this.routeDetector.from}}),watch:{items:function(){this.initFuseSearch(this.searchFields)},itemsQty:function(){this.returnToPreviousPage()},searchedQty:function(){this.returnToPreviousPage()}},created:function(){this.fromEditItemPage||(this.resetRouteDetector(),this.setState()),this.returnToPreviousPage(),this.requestItems()},mounted:function(){window.scrollTo(0,0),this.initFuseSearch(this.searchFields)},methods:h(h({},Object(i.b)("table",{clearStateAction:"clearState",getRequestItemsAction:"getItemsGet",postRequestItemsAction:"getItemsPost",setFieldAction:"setField",setFieldsAction:"setFields",setPaginationFieldAction:"setPaginationField",resetPaginationAction:"resetPagination",setRouteDetectorFieldAction:"setRouteDetectorField"})),{},{requestItems:function(){var t=this;return d(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.serverPagination){e.next=5;break}return e.next=3,t.postRequestItemsAction();case 3:e.next=7;break;case 5:return e.next=7,t.getRequestItemsAction();case 7:case"end":return e.stop()}}),e)})))()},customSort:function(){var t=this;return d(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.sortInit||t.loading||!t.items.length||t.fromEditItemPage){e.next=12;break}return n="asc"===t.pagination.sort_order?"desc":"asc",e.next=4,Promise.all([t.setPaginationFieldAction({field:"sort_order",value:n}),t.setPaginationFieldAction({field:"sort_by",value:t.currentSort})]);case 4:if(!t.serverPagination){e.next=10;break}return e.next=7,t.postRequestItemsAction();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=t.sort(t.items);case 11:return e.abrupt("return",e.t0);case 12:t.resetRouteDetector(),t.setFieldAction({field:"sortInit",value:!0});case 14:case"end":return e.stop()}}),e)})))()},sort:function(t){var e=this;return t.sort((function(t,n){var r=e.pagination.sort_by;return"asc"===e.pagination.sort_order?e.getSort(t,n,r):e.getSort(n,t,r)}))},getSort:function(t,e,n){return"number"==typeof t[n]&&"number"==typeof e[n]?t[n]<e[n]?-1:1:t[n].localeCompare(e[n])},search:function(t){var e=this;return d(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.trim(),n.next=3,Promise.all([e.setFieldAction({field:"searchQuery",value:r}),e.setDefaultPage()]);case 3:r||e.clearSearchedItems(),e.handleSearch();case 5:case"end":return n.stop()}}),n)})))()},handleSearch:function(){this.serverPagination?m(this.postRequestItemsAction):this.setSearchedItems()},initFuseSearch:function(t){this.serverPagination||(this.fuseSearch=new s.a(this.items.slice(),{keys:t,threshold:.3}))},changePage:function(t){var e=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setPaginationFieldAction({field:"current_page",value:t});case 2:if(!e.serverPagination){n.next=5;break}return n.next=5,e.postRequestItemsAction();case 5:window.scrollTo(0,0);case 6:case"end":return n.stop()}}),n)})))()},changePerPage:function(t){var e=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setPaginationFieldAction({field:"per_page",value:t});case 2:return n.next=4,e.setDefaultPage();case 4:case"end":return n.stop()}}),n)})))()},setSearchedItems:function(){var t=this.fuseSearch.search(this.searchQuery).map((function(t){return t.item}));this.setFieldAction({field:"searchedItems",value:t})},setDefaultPage:function(){this.setPaginationFieldAction({field:"current_page",value:1})},clearSearchedItems:function(){this.setFieldAction({field:"searchedItems",value:[]})},setState:function(){this.resetPaginationAction(),this.clearStateAction(),this.setFieldAction({field:"resourceUrl",value:this.resourceUrl}),this.setPaginationFieldAction({field:"sort_order",value:this.defaultSortOrder}),this.setPaginationFieldAction({field:"per_page",value:this.perPageOptions[0]})},returnToPreviousPage:function(){this.serverPagination?this.checkGoPrevWithServerPagination():this.checkGoPrev()},checkGoPrevWithServerPagination:function(){var t=this;return d(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.checkReturnToPreviousPage){e.next=5;break}return e.next=3,t.setPaginationFieldAction({field:"current_page",value:t.pagination.current_page-1});case 3:return e.next=5,t.postRequestItemsAction();case 5:case"end":return e.stop()}}),e)})))()},checkGoPrev:function(){this.pagination.current_page>this.totalPages&&this.setPaginationFieldAction({field:"current_page",value:this.totalPages})},resetRouteDetector:function(){this.setRouteDetectorFieldAction({field:"from",value:null}),this.setRouteDetectorFieldAction({field:"to",value:null})}})},g=(n(369),n(0)),b=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"progress-bar__container"},[n("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{"md-mode":"indeterminate"}})],1),t._v(" "),t.items?n("div",[n("md-table",{staticClass:"paginated-table table-striped table-hover",class:{loading:t.loading},attrs:{value:t.queriedData,"md-sort":t.currentSort,"md-sort-fn":t.customSort},on:{"update:mdSort":function(e){t.currentSort=e},"update:md-sort":function(e){t.currentSort=e}},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var r=e.item;return n("md-table-row",{},[t._t("default",null,{item:r})],2)}}],null,!0)},[n("md-table-toolbar",{staticClass:"mb-3"},[n("md-field",[n("label",{attrs:{for:"pages"}},[t._v("На странице")]),t._v(" "),n("md-select",{attrs:{value:t.pagination.per_page,name:"pages"},on:{"md-selected":t.changePerPage}},t._l(t.perPageOptions,(function(e){return n("md-option",{key:e,attrs:{label:e,value:e}},[t._v("\n                            "+t._s(e)+"\n                        ")])})),1)],1),t._v(" "),n("md-field",[n("md-input",{staticStyle:{width:"200px"},attrs:{type:"search",clearable:"",placeholder:"Поиск",value:t.searchQuery},on:{input:t.search}})],1)],1),t._v(" "),t._v(" "),t.isSearchedEmpty&&!t.loading?n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[t._v("Нет данных соответствующих поисковому запросу!")])]):t._e()],1),t._v(" "),t.loading?t._e():n("md-card-actions",{attrs:{"md-alignment":"space-between"}},[n("div",[t.serverPagination?n("p",{staticClass:"card-category"},[t._v(t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" / "+t._s(t.total))]):n("p",{staticClass:"card-category"},[t._v(t._s(t.from+1)+" - "+t._s(t.to)+" / "+t._s(t.total))])]),t._v(" "),n("pagination",{staticClass:"pagination-no-border pagination-success",attrs:{"per-page":t.pagination.per_page,total:t.total,value:t.pagination.current_page},on:{input:t.changePage}})],1)],1):t.loading?t._e():[n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[t._v(t._s(t.emptyContent))])])]],2)}),[],!1,null,null,null);e.a=b.exports},365:function(t,e,n){"use strict";var r=n(175);n.n(r).a},366:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.table-actions[data-v-d323bed2] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},369:function(t,e,n){"use strict";var r=n(177);n.n(r).a},370:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.loading td {\n    opacity: 0;\n}\n.progress-bar__container {\n    height: 4px;\n}\n",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return v}));var r=n(14),a=n.n(r),i=n(45),s=n.n(i);function o(t,e,n,r,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(r,a)}var c={methods:{create:function(t){var e=this,n=t.sendData,r=t.title,a=t.successText,i=t.redirectRoute,o=t.storeModule,c=void 0===o?null:o,u=t.action,l=void 0===u?"store":u,d=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(d).concat(l),n).then((function(){return e.$router.push(i),s.a.fire({title:a,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{update:function(t){var e=this,n=t.sendData,r=t.title,a=t.redirectRoute,i=t.successText,o=t.storeModule,c=void 0===o?null:o,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u,"update"),n).then((function(){return e.$router.push(a),s.a.fire({title:i,text:"«".concat(r,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,n=t.payload,r=t.title,a=t.alertText,i=t.successText,s=t.storeModule,o=void 0===s?null:s,c=t.redirectRoute,u=void 0===c?null:c,l=t.tableMode,d=void 0!==l&&l,p=t.action,m=void 0===p?"delete":p,v=t.force,g=void 0!==v&&v,b=o?"".concat(o,"/"):"",P=g?"forceDelete":m;return f(a).then((function(t){if(t.value)return e.$store.dispatch("".concat(b).concat(P),{payload:n,tableMode:d}).then((function(){return u&&e.$router.push(u),h(i,r)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,r=t.index,a=t.alertText,i=t.successText,s=t.storeModule,o=void 0===s?null:s;return f(a).then((function(t){if(t.value)return e.$store.dispatch("".concat(o,"/deleteImageByIndex"),{id:n,index:r}).then((function(){return h(i,r)}))}))}}},f=function(t){return s.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},h=function(t,e){return s.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},p={methods:{upload:function(t){var e,n=this;return(e=a.a.mark((function e(){var r,i,o,c,u,l,d,f,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.uploadFiles,i=t.type,o=void 0===i?null:i,c=t.id,u=void 0===c?null:c,l=t.storeModule,d=void 0===l?null:l,f=Array.from(r),h=d||"categories",!u){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(h,"/uploadImages"),{files:f,id:u,type:o});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",f);case 10:return e.next=12,s.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(t){o(i,r,a,s,c,"next",t)}function c(t){o(i,r,a,s,c,"throw",t)}s(void 0)}))})()}}},m={methods:{addImages:function(t){var e=this,n=t.id,r=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:r}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},v={methods:{addImages:function(t){var e=this,n=t.type,r=t.id,a=t.data,i=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:r,data:a}).then((function(){return e.$router.push(i),s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},692:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n(36),i=n(22),s=n(5),o=n(4);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"RoleList",components:{VExtendedTable:a.a,TableActions:i.a},mixins:[s.b,o.c],data:function(){return{responseData:!1,storeModule:"roles"}},computed:u({},Object(r.d)("roles",["items"])),methods:u(u({},Object(r.b)("roles",{getItemsAction:"getItems"})),{},{onDelete:function(t){return this.delete({payload:t.id,title:t.display_name,alertText:"роль «".concat(t.display_name,"»"),storeModule:this.storeModule,successText:"Роль удалена!"})}}),created:function(){var t=this;this.getItemsAction().then((function(){t.setPageTitle("Роли"),t.responseData=!0})).catch((function(){return t.$router.push({name:"cms.dashboard"})}))}},f=n(0),h=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{title:"В панель управления"}}),t._v(" "),n("router-button-link",{attrs:{title:"Создать роль",icon:"add",color:"md-success",to:{name:"cms.roles.create"}}})],1)],1),t._v(" "),n("div",{staticClass:"space-1"}),t._v(" "),n("md-card",[n("card-icon-header",{attrs:{title:"Список Ролей",icon:"assignment"}}),t._v(" "),n("md-card-content",[t.items.length?n("md-table",{staticClass:"paginated-table table-striped table-hover",attrs:{value:t.items},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var r=e.item;return n("md-table-row",{},[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#"}},[t._v(t._s(r.id))]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Имя"}},[n("span",{staticClass:"md-subheading"},[t._v(t._s(r.display_name))])]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Алиас"}},[t._v("\n                            "+t._s(r.name)+"\n                        ")]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Пользователи"}},[t._v("\n                            "+t._s(r.users_count)+"\n                        ")]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Описание"}},[t._v("\n                            "+t._s(r.description)+"\n                        ")]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("table-actions",{attrs:{item:r,subPath:t.storeModule},on:{delete:t.onDelete}})],1)],1)}}],null,!1,2793171734)}):[n("div",{staticClass:"alert alert-info"},[n("span",[n("h3",[t._v("У Вас еще нет ролей!")])])])]],2)],1)],1)]):t._e()}),[],!1,null,null,null);e.default=h.exports}}]);