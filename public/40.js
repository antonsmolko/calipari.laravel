(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(t,e,n){"use strict";var r={name:"TagsTableCell",props:{items:{type:[Array,Object],default:null}}},a=(n(376),n(0)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",t._l(t.items,(function(e,r){return n("span",{key:r,staticClass:"md-category-tag"},[t._v("\n        "+t._s(e.title)+"\n    ")])})),0):t._e()}),[],!1,null,"491b2120",null);e.a=i.exports},111:function(t,e,n){"use strict";var r={name:"PaletteTableCell",props:{items:{type:[Array,Object],default:null}}},a=(n(378),n(0)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",t._l(t.items,(function(e,r){return n("md-icon",{key:r,staticClass:"md-color-icon",style:{color:e.alias}},[t._v("\n        lens\n        "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(t._s(e.title))])],1)})),1):t._e()}),[],!1,null,"492ccc7a",null);e.a=i.exports},177:function(t,e,n){var r=n(10),a=n(370);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},178:function(t,e,n){var r=n(10),a=n(372);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},180:function(t,e,n){var r=n(10),a=n(377);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},181:function(t,e,n){var r=n(10),a=n(379);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},184:function(t,e,n){var r=n(10),a=n(388);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},185:function(t,e,n){var r=n(10),a=n(390);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},28:function(t,e,n){"use strict";var r={name:"ThumbTableCell",components:{ResourceImage:n(55).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},a=(n(369),n(0)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);e.a=i.exports},36:function(t,e,n){"use strict";var r=n(13),a=n.n(r),i=n(2),s=n(281),o=n(91),c=n.n(o),u=n(67);function l(t,e,n,r,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){l(i,r,a,s,o,"next",t)}function o(t){l(i,r,a,s,o,"throw",t)}s(void 0)}))}}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=c()((function(t){return t()}),300),v={name:"VExtendedTable",components:{Pagination:u.d},props:{searchFields:{type:Array,default:function(){return["id"]}},perPageOptions:{type:Array,default:function(){return[20,50,100,200]}},serverPagination:{type:Boolean,default:!1},resourceUrl:{type:String,required:!0},defaultSortOrder:{type:String,default:"asc"},emptyContent:{type:String,default:"Ресурсы отсутствуют!"},editItemPathName:{type:String,default:"cms.images.edit"}},data:function(){return{currentSort:"id",fuseSearch:null}},computed:m(m(m({},Object(i.d)("table",{sortInit:function(t){return t.sortInit},items:function(t){return t.items},searchedItems:function(t){return t.searchedItems},searchQuery:function(t){return t.searchQuery},pagination:function(t){return t.pagination},loading:function(t){return t.loading},routeDetector:function(t){return t.routeDetector}})),Object(i.c)("table",["itemsQty","searchedQty","checkReturnToPreviousPage","checkReturnToSearchedPreviousPage","isSearchedEmpty","totalPages"])),{},{queriedData:function(){return(!this.serverPagination&&this.searchQuery?this.searchedItems:this.items).slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.per_page;return this.total<t&&(t=this.total),t},from:function(){return this.serverPagination?0:this.pagination.per_page*(this.pagination.current_page-1)},total:function(){return this.pagination.total?this.pagination.total:this.searchedQty?this.searchedItems.length:this.items.length},fromEditItemPage:function(){return this.$route.name===this.routeDetector.to&&this.editItemPathName===this.routeDetector.from}}),watch:{items:function(){this.initFuseSearch(this.searchFields)},itemsQty:function(){this.returnToPreviousPage()},searchedQty:function(){this.returnToPreviousPage()}},created:function(){this.fromEditItemPage||(this.resetRouteDetector(),this.setState()),this.returnToPreviousPage(),this.requestItems()},mounted:function(){window.scrollTo(0,0),this.initFuseSearch(this.searchFields)},methods:m(m({},Object(i.b)("table",{clearStateAction:"clearState",getRequestItemsAction:"getItemsGet",postRequestItemsAction:"getItemsPost",setFieldAction:"setField",setFieldsAction:"setFields",setPaginationFieldAction:"setPaginationField",resetPaginationAction:"resetPagination",setRouteDetectorFieldAction:"setRouteDetectorField"})),{},{requestItems:function(){var t=this;return d(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.serverPagination){e.next=5;break}return e.next=3,t.postRequestItemsAction();case 3:e.next=7;break;case 5:return e.next=7,t.getRequestItemsAction();case 7:case"end":return e.stop()}}),e)})))()},customSort:function(){var t=this;return d(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.sortInit||t.loading||!t.items.length||t.fromEditItemPage){e.next=12;break}return n="asc"===t.pagination.sort_order?"desc":"asc",e.next=4,Promise.all([t.setPaginationFieldAction({field:"sort_order",value:n}),t.setPaginationFieldAction({field:"sort_by",value:t.currentSort})]);case 4:if(!t.serverPagination){e.next=10;break}return e.next=7,t.postRequestItemsAction();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=t.sort(t.items);case 11:return e.abrupt("return",e.t0);case 12:t.resetRouteDetector(),t.setFieldAction({field:"sortInit",value:!0});case 14:case"end":return e.stop()}}),e)})))()},sort:function(t){var e=this;return t.sort((function(t,n){var r=e.pagination.sort_by;return"asc"===e.pagination.sort_order?e.getSort(t,n,r):e.getSort(n,t,r)}))},getSort:function(t,e,n){return"number"==typeof t[n]&&"number"==typeof e[n]?t[n]<e[n]?-1:1:t[n].localeCompare(e[n])},search:function(t){var e=this;return d(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.trim(),n.next=3,Promise.all([e.setFieldAction({field:"searchQuery",value:r}),e.setDefaultPage()]);case 3:r||e.clearSearchedItems(),e.handleSearch();case 5:case"end":return n.stop()}}),n)})))()},handleSearch:function(){this.serverPagination?h(this.postRequestItemsAction):this.setSearchedItems()},initFuseSearch:function(t){this.serverPagination||(this.fuseSearch=new s.a(this.items.slice(),{keys:t,threshold:.3}))},changePage:function(t){var e=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setPaginationFieldAction({field:"current_page",value:t});case 2:if(!e.serverPagination){n.next=5;break}return n.next=5,e.postRequestItemsAction();case 5:window.scrollTo(0,0);case 6:case"end":return n.stop()}}),n)})))()},changePerPage:function(t){var e=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setPaginationFieldAction({field:"per_page",value:t});case 2:return n.next=4,e.setDefaultPage();case 4:case"end":return n.stop()}}),n)})))()},setSearchedItems:function(){var t=this.fuseSearch.search(this.searchQuery).map((function(t){return t.item}));this.setFieldAction({field:"searchedItems",value:t})},setDefaultPage:function(){this.setPaginationFieldAction({field:"current_page",value:1})},clearSearchedItems:function(){this.setFieldAction({field:"searchedItems",value:[]})},setState:function(){this.resetPaginationAction(),this.clearStateAction(),this.setFieldAction({field:"resourceUrl",value:this.resourceUrl}),this.setPaginationFieldAction({field:"sort_order",value:this.defaultSortOrder}),this.setPaginationFieldAction({field:"per_page",value:this.perPageOptions[0]})},returnToPreviousPage:function(){this.serverPagination?this.checkGoPrevWithServerPagination():this.checkGoPrev()},checkGoPrevWithServerPagination:function(){var t=this;return d(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.checkReturnToPreviousPage){e.next=5;break}return e.next=3,t.setPaginationFieldAction({field:"current_page",value:t.pagination.current_page-1});case 3:return e.next=5,t.postRequestItemsAction();case 5:case"end":return e.stop()}}),e)})))()},checkGoPrev:function(){this.pagination.current_page>this.totalPages&&this.setPaginationFieldAction({field:"current_page",value:this.totalPages})},resetRouteDetector:function(){this.setRouteDetectorFieldAction({field:"from",value:null}),this.setRouteDetectorFieldAction({field:"to",value:null})}})},g=(n(371),n(0)),b=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-progress-bar__container"},[n("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{"md-mode":"indeterminate"}})],1),t._v(" "),t.items?n("div",[n("md-table",{staticClass:"paginated-table table-striped table-hover",class:{loading:t.loading},attrs:{value:t.queriedData,"md-sort":t.currentSort,"md-sort-fn":t.customSort},on:{"update:mdSort":function(e){t.currentSort=e},"update:md-sort":function(e){t.currentSort=e}},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var r=e.item;return n("md-table-row",{},[t._t("default",null,{item:r})],2)}}],null,!0)},[n("md-table-toolbar",{staticClass:"mb-3"},[n("md-field",[n("label",{attrs:{for:"pages"}},[t._v("На странице")]),t._v(" "),n("md-select",{attrs:{value:t.pagination.per_page,name:"pages"},on:{"md-selected":t.changePerPage}},t._l(t.perPageOptions,(function(e){return n("md-option",{key:e,attrs:{label:e,value:e}},[t._v("\n                            "+t._s(e)+"\n                        ")])})),1)],1),t._v(" "),n("md-field",[n("md-input",{staticStyle:{width:"200px"},attrs:{type:"search",clearable:"",placeholder:"Поиск",value:t.searchQuery},on:{input:t.search}})],1)],1),t._v(" "),t._v(" "),t.isSearchedEmpty&&!t.loading?n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[t._v("Нет данных соответствующих поисковому запросу!")])]):t._e()],1),t._v(" "),t.loading?t._e():n("md-card-actions",{attrs:{"md-alignment":"space-between"}},[n("div",[t.serverPagination?n("p",{staticClass:"card-category"},[t._v(t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" / "+t._s(t.total))]):n("p",{staticClass:"card-category"},[t._v(t._s(t.from+1)+" - "+t._s(t.to)+" / "+t._s(t.total))])]),t._v(" "),n("pagination",{staticClass:"pagination-no-border pagination-success",attrs:{"per-page":t.pagination.per_page,total:t.total,value:t.pagination.current_page},on:{input:t.changePage}})],1)],1):t.loading?t._e():[n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[t._v(t._s(t.emptyContent))])])]],2)}),[],!1,null,null,null);e.a=b.exports},369:function(t,e,n){"use strict";var r=n(177);n.n(r).a},370:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},371:function(t,e,n){"use strict";var r=n(178);n.n(r).a},372:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.loading td {\n    opacity: 0;\n}\n",""])},376:function(t,e,n){"use strict";var r=n(180);n.n(r).a},377:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.md-category-tag[data-v-491b2120] {\n    display: inline-block;\n    padding: 3px 4px;\n    background-color: #dddddd;\n    border-radius: 2px;\n    margin: 2px;\n    line-height: 1;\n    font-size: .85em;\n}\n",""])},378:function(t,e,n){"use strict";var r=n(181);n.n(r).a},379:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-table-row .md-color-icon[data-v-492ccc7a] {\n  background: #fafafa;\n  border-radius: 50%;\n  margin: 1px;\n}",""])},387:function(t,e,n){"use strict";var r=n(184);n.n(r).a},388:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.table-actions[data-v-b8ab8904] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},389:function(t,e,n){"use strict";var r=n(185);n.n(r).a},390:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-between[data-v-3ddf3a82] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-3ddf3a82] {\n  height: 4px;\n}",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return g}));var r=n(13),a=n.n(r),i=n(34),s=n.n(i);function o(t,e,n,r,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){o(i,r,a,s,c,"next",t)}function c(t){o(i,r,a,s,c,"throw",t)}s(void 0)}))}}var u={methods:{create:function(t){var e=this;return c(a.a.mark((function n(){var r,i,o,c,u,l,d,f,m;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.sendData,i=t.title,o=t.successText,c=t.redirectRoute,u=t.storeModule,l=void 0===u?null:u,d=t.action,f=void 0===d?"store":d,e.$store.commit("SET_LOADING",!0),m=l?"".concat(l,"/"):"",n.next=5,e.$store.dispatch("".concat(m).concat(f),r);case 5:return n.next=7,e.$router.push(c);case 7:return e.$store.commit("SET_LOADING",!1),n.abrupt("return",s.a.fire({title:o,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return n.stop()}}),n)})))()}}},l={methods:{update:function(t){var e=this;return c(a.a.mark((function n(){var r,i,o,c,u,l,d,f;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.sendData,i=t.title,o=t.successText,c=t.redirectRoute,u=void 0===c?null:c,l=t.storeModule,d=void 0===l?null:l,e.$store.commit("SET_LOADING",!0),f=d?"".concat(d,"/"):"",n.next=5,e.$store.dispatch("".concat(f,"update"),r);case 5:if(!u){n.next=8;break}return n.next=8,e.$router.push(u);case 8:return e.$store.commit("SET_LOADING",!1),n.abrupt("return",s.a.fire({title:o,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 10:case"end":return n.stop()}}),n)})))()}}},d={methods:{delete:function(t){var e=this;return c(a.a.mark((function n(){var r,i,s,o,c,u,l,d,f,h,v,g,b,_,x,y;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.payload,i=t.title,s=t.alertText,o=t.successText,c=t.storeModule,u=void 0===c?null:c,l=t.redirectRoute,d=void 0===l?null:l,f=t.tableMode,h=void 0!==f&&f,v=t.action,g=void 0===v?"delete":v,b=t.force,_=void 0!==b&&b,x=u?"".concat(u,"/"):"",y=_?"forceDelete":g,n.next=5,m(s);case 5:if(!n.sent.value){n.next=15;break}return e.$store.commit("SET_LOADING",!0),n.next=10,e.$store.dispatch("".concat(x).concat(y),{payload:r,tableMode:h});case 10:if(!d){n.next=13;break}return n.next=13,e.$router.push(d);case 13:return e.$store.commit("SET_LOADING",!1),n.abrupt("return",p(o,i));case 15:case"end":return n.stop()}}),n)})))()}}},f={methods:{deleteImageByIndex:function(t){var e=this;return c(a.a.mark((function n(){var r,i,s,o,c,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,i=t.index,s=t.alertText,o=t.successText,c=t.storeModule,u=void 0===c?null:c,e.$store.commit("SET_LOADING",!0),n.next=4,m(s);case 4:if(!n.sent.value){n.next=11;break}return n.next=8,e.$store.dispatch("".concat(u,"/deleteImageByIndex"),{id:r,index:i});case 8:return e.$store.commit("SET_LOADING",!1),n.next=11,p(o,i);case 11:case"end":return n.stop()}}),n)})))()}}},m=function(t){return s.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},p=function(t,e){return s.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},h={methods:{upload:function(t){var e=this;return c(a.a.mark((function n(){var r,i,o,c,u,l,d,f,m;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.uploadFiles,i=t.type,o=void 0===i?null:i,c=t.id,u=void 0===c?null:c,l=t.storeModule,d=void 0===l?null:l,f=Array.from(r),m=d||"categories",!f.length){n.next=11;break}if(!u){n.next=9;break}return n.next=7,e.$store.dispatch("".concat(m,"/uploadImages"),{files:f,id:u,type:o});case 7:n.next=11;break;case 9:return n.next=11,e.$store.dispatch("images/store",f);case 11:return n.next=13,s.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 13:return n.abrupt("return",n.sent);case 14:case"end":return n.stop()}}),n)})))()}}},v={methods:{addImages:function(t){var e=this;return c(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,i=t.data,n.next=3,e.$store.dispatch("categories/addSelectedImages",{id:r,data:i});case 3:return n.next=5,e.$router.push({name:"cms.catalog.categories.images",params:{id:r}});case 5:return n.abrupt("return",s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return n.stop()}}),n)})))()}}},g={methods:{addImages:function(t){var e=this;return c(a.a.mark((function n(){var r,i,o,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.type,i=t.id,o=t.data,c=t.redirectRoute,n.next=3,e.$store.dispatch("subCategories/addSelectedImages",{type:r,id:i,data:o});case 3:return n.next=5,e.$router.push(c);case 5:return n.abrupt("return",s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return n.stop()}}),n)})))()}}}},658:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(5),i=n(4),s=n(36),o=n(110),c=n(111),u=n(28),l=n(67),d={name:"ImageTrashedListTable",components:{VExtendedTable:s.a,TagsTableCell:o.a,PaletteTableCell:c.a,ThumbTableCell:u.a,Badge:l.b},props:{resourceUrl:{type:String,required:!0}}},f=n(0),m=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-extended-table",{attrs:{serverPagination:!0,resourceUrl:t.resourceUrl,defaultSortOrder:"desc",emptyContent:"Пока нет удаленных изображений!"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[t._t("first-column",[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                "+t._s(r.id)+"\n            ")])],{item:r}),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{path:r.path}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Темы"}},[n("tags-table-cell",{attrs:{items:r.topics}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Цвета"}},[n("palette-table-cell",{attrs:{items:r.colors}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Интерьеры"}},[n("tags-table-cell",{attrs:{items:r.interiors}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Владелец"}},[r.owner?n("span",{staticClass:"md-category-tag"},[t._v("\n                "+t._s(r.owner.title)+"\n            ")]):t._e()]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Коллекция"}},[r.collection?[r.id===r.collection.main_image_id?n("md-badge",{attrs:{"md-content":"М"}},[n("span",{staticClass:"md-category-tag"},[t._v("\n                        "+t._s(r.collection.title)+"\n                    ")])]):n("span",{staticClass:"md-category-tag"},[t._v("\n                    "+t._s(r.collection.title)+"\n                ")])]:t._e()],2),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Формат"}},[r.format?n("span",[n("md-icon",[t._v(t._s(r.format.icon))]),t._v(" "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(t._s(r.format.title))])],1):t._e()]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Лайки","md-sort-by":"likes_count"}},[n("md-icon",[t._v("favorite")]),t._v(" "+t._s(r.likes_count)+"\n        ")],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Заказы","md-sort-by":"orders_count"}},[n("md-icon",[t._v("shopping_cart")]),t._v(" "+t._s(r.orders_count)+"\n        ")],1),t._v(" "),t._t("actions-column",null,{item:r})]}}],null,!0)})}),[],!1,null,null,null).exports,p={name:"ImageTrashedTableActions",props:{item:{type:Object,default:null},deleteEnabled:{type:Boolean,default:!1}},methods:{onDelete:function(){this.$emit("delete",this.item)},onRestore:function(){this.$emit("restore",this.item.id)}}},h=(n(387),Object(f.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return this.item?e("div",{staticClass:"table-actions"},[e("control-button",{attrs:{title:"Восстановить",icon:"restore_from_trash",color:"md-info"},on:{click:this.onRestore}}),this._v(" "),this.deleteEnabled?e("control-button",{attrs:{title:"Удалить",icon:"delete_forever",color:"md-danger"},on:{click:this.onDelete}}):this._e()],1):this._e()}),[],!1,null,"b8ab8904",null).exports),v=n(34),g=n.n(v);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={name:"ImageTrashedList",mixins:[a.b,i.c,a.a],components:{ImageTrashedListTable:m,ImageTrashedTableActions:h},data:function(){return{storeModule:"images"}},computed:{resourceUrl:function(){return"/images/trashed/paginate"}},created:function(){this.setPageTitle("Удаленные изображения")},methods:_(_({},Object(r.b)({restoreAction:"images/restore"})),{},{onRestore:function(t){this.restoreAction(t).then((function(){return g.a.fire({title:"Изображение восстановлено!",text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})}))},onDelete:function(t){this.delete({payload:t.id,title:t.id,alertText:"изображение «".concat(t.id,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,tableMode:"table",force:!0})}})},P=(n(389),Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{to:{name:"cms.images"}}})],1)],1),t._v(" "),n("progress-bar-loading")],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header",{attrs:{title:"Каталог удаленных изображений",icon:"delete"}}),t._v(" "),n("md-card-content",[n("image-trashed-list-table",{attrs:{resourceUrl:t.resourceUrl},scopedSlots:t._u([{key:"actions-column",fn:function(e){var r=e.item;return[r?n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("image-trashed-table-actions",{attrs:{item:r,deleteEnabled:t.authCheck("image-destroy")},on:{restore:t.onRestore,delete:t.onDelete}})],1):t._e()]}}])})],1)],1)],1)])])}),[],!1,null,"3ddf3a82",null));e.default=P.exports}}]);