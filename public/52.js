(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{176:function(e,t,n){var r=n(9),a=n(369);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},177:function(e,t,n){var r=n(9),a=n(371);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},178:function(e,t,n){var r=n(9),a=n(373);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},20:function(e,t,n){"use strict";var r={name:"TableActions",props:{item:{type:Object,default:null},subPath:{type:String,required:!0},deleteDisabled:{type:Boolean,default:!1},editDisabled:{type:Boolean,default:!1},restParams:{type:Object,default:function(){return{}}}},methods:{onDelete:function(e){this.$emit("delete",e)}}},a=(n(368),n(0)),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item?n("div",{staticClass:"table-actions"},[n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",disabled:e.editDisabled,to:{name:"cms."+e.subPath+".edit",params:Object.assign({},{id:e.item.id},e.restParams)}}}),e._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:e.deleteDisabled,color:"md-danger"},on:{click:function(t){return e.onDelete(e.item)}}})],1):e._e()}),[],!1,null,"d323bed2",null);t.a=i.exports},28:function(e,t,n){"use strict";var r={name:"ThumbTableCell",components:{ResourceImage:n(58).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},a=(n(370),n(0)),i=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);t.a=i.exports},36:function(e,t,n){"use strict";var r=n(13),a=n.n(r),i=n(2),s=n(282),o=n(91),c=n.n(o),l=n(67);function u(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){u(i,r,a,s,o,"next",e)}function o(e){u(i,r,a,s,o,"throw",e)}s(void 0)}))}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=c()((function(e){return e()}),300),g={name:"VExtendedTable",components:{Pagination:l.d},props:{searchFields:{type:Array,default:function(){return["id"]}},perPageOptions:{type:Array,default:function(){return[20,50,100,200]}},serverPagination:{type:Boolean,default:!1},resourceUrl:{type:String,required:!0},defaultSortOrder:{type:String,default:"asc"},emptyContent:{type:String,default:"Ресурсы отсутствуют!"},editItemPathName:{type:String,default:"cms.images.edit"}},data:function(){return{currentSort:"id",fuseSearch:null}},computed:h(h(h({},Object(i.d)("table",{sortInit:function(e){return e.sortInit},items:function(e){return e.items},searchedItems:function(e){return e.searchedItems},searchQuery:function(e){return e.searchQuery},pagination:function(e){return e.pagination},loading:function(e){return e.loading},routeDetector:function(e){return e.routeDetector}})),Object(i.c)("table",["itemsQty","searchedQty","checkReturnToPreviousPage","checkReturnToSearchedPreviousPage","isSearchedEmpty","totalPages"])),{},{queriedData:function(){return(!this.serverPagination&&this.searchQuery?this.searchedItems:this.items).slice(this.from,this.to)},to:function(){var e=this.from+this.pagination.per_page;return this.total<e&&(e=this.total),e},from:function(){return this.serverPagination?0:this.pagination.per_page*(this.pagination.current_page-1)},total:function(){return this.pagination.total?this.pagination.total:this.searchedQty?this.searchedItems.length:this.items.length},fromEditItemPage:function(){return this.$route.name===this.routeDetector.to&&this.editItemPathName===this.routeDetector.from}}),watch:{items:function(){this.initFuseSearch(this.searchFields)},itemsQty:function(){this.returnToPreviousPage()},searchedQty:function(){this.returnToPreviousPage()}},created:function(){this.fromEditItemPage||(this.resetRouteDetector(),this.setState()),this.returnToPreviousPage(),this.requestItems()},mounted:function(){window.scrollTo(0,0),this.initFuseSearch(this.searchFields)},methods:h(h({},Object(i.b)("table",{clearStateAction:"clearState",getRequestItemsAction:"getItemsGet",postRequestItemsAction:"getItemsPost",setFieldAction:"setField",setFieldsAction:"setFields",setPaginationFieldAction:"setPaginationField",resetPaginationAction:"resetPagination",setRouteDetectorFieldAction:"setRouteDetectorField"})),{},{requestItems:function(){var e=this;return d(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.serverPagination){t.next=5;break}return t.next=3,e.postRequestItemsAction();case 3:t.next=7;break;case 5:return t.next=7,e.getRequestItemsAction();case 7:case"end":return t.stop()}}),t)})))()},customSort:function(){var e=this;return d(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.sortInit||e.loading||!e.items.length||e.fromEditItemPage){t.next=12;break}return n="asc"===e.pagination.sort_order?"desc":"asc",t.next=4,Promise.all([e.setPaginationFieldAction({field:"sort_order",value:n}),e.setPaginationFieldAction({field:"sort_by",value:e.currentSort})]);case 4:if(!e.serverPagination){t.next=10;break}return t.next=7,e.postRequestItemsAction();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=e.sort(e.items);case 11:return t.abrupt("return",t.t0);case 12:e.resetRouteDetector(),e.setFieldAction({field:"sortInit",value:!0});case 14:case"end":return t.stop()}}),t)})))()},sort:function(e){var t=this;return e.sort((function(e,n){var r=t.pagination.sort_by;return"asc"===t.pagination.sort_order?t.getSort(e,n,r):t.getSort(n,e,r)}))},getSort:function(e,t,n){return"number"==typeof e[n]&&"number"==typeof t[n]?e[n]<t[n]?-1:1:e[n].localeCompare(t[n])},search:function(e){var t=this;return d(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.trim(),n.next=3,Promise.all([t.setFieldAction({field:"searchQuery",value:r}),t.setDefaultPage()]);case 3:r||t.clearSearchedItems(),t.handleSearch();case 5:case"end":return n.stop()}}),n)})))()},handleSearch:function(){this.serverPagination?m(this.postRequestItemsAction):this.setSearchedItems()},initFuseSearch:function(e){this.serverPagination||(this.fuseSearch=new s.a(this.items.slice(),{keys:e,threshold:.3}))},changePage:function(e){var t=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setPaginationFieldAction({field:"current_page",value:e});case 2:if(!t.serverPagination){n.next=5;break}return n.next=5,t.postRequestItemsAction();case 5:window.scrollTo(0,0);case 6:case"end":return n.stop()}}),n)})))()},changePerPage:function(e){var t=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setPaginationFieldAction({field:"per_page",value:e});case 2:return n.next=4,t.setDefaultPage();case 4:case"end":return n.stop()}}),n)})))()},setSearchedItems:function(){var e=this.fuseSearch.search(this.searchQuery).map((function(e){return e.item}));this.setFieldAction({field:"searchedItems",value:e})},setDefaultPage:function(){this.setPaginationFieldAction({field:"current_page",value:1})},clearSearchedItems:function(){this.setFieldAction({field:"searchedItems",value:[]})},setState:function(){this.resetPaginationAction(),this.clearStateAction(),this.setFieldAction({field:"resourceUrl",value:this.resourceUrl}),this.setPaginationFieldAction({field:"sort_order",value:this.defaultSortOrder}),this.setPaginationFieldAction({field:"per_page",value:this.perPageOptions[0]})},returnToPreviousPage:function(){this.serverPagination?this.checkGoPrevWithServerPagination():this.checkGoPrev()},checkGoPrevWithServerPagination:function(){var e=this;return d(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.checkReturnToPreviousPage){t.next=5;break}return t.next=3,e.setPaginationFieldAction({field:"current_page",value:e.pagination.current_page-1});case 3:return t.next=5,e.postRequestItemsAction();case 5:case"end":return t.stop()}}),t)})))()},checkGoPrev:function(){this.pagination.current_page>this.totalPages&&this.setPaginationFieldAction({field:"current_page",value:this.totalPages})},resetRouteDetector:function(){this.setRouteDetectorFieldAction({field:"from",value:null}),this.setRouteDetectorFieldAction({field:"to",value:null})}})},v=(n(372),n(0)),b=Object(v.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"progress-bar__container"},[n("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{"md-mode":"indeterminate"}})],1),e._v(" "),e.items?n("div",[n("md-table",{staticClass:"paginated-table table-striped table-hover",class:{loading:e.loading},attrs:{value:e.queriedData,"md-sort":e.currentSort,"md-sort-fn":e.customSort},on:{"update:mdSort":function(t){e.currentSort=t},"update:md-sort":function(t){e.currentSort=t}},scopedSlots:e._u([{key:"md-table-row",fn:function(t){var r=t.item;return n("md-table-row",{},[e._t("default",null,{item:r})],2)}}],null,!0)},[n("md-table-toolbar",{staticClass:"mb-3"},[n("md-field",[n("label",{attrs:{for:"pages"}},[e._v("На странице")]),e._v(" "),n("md-select",{attrs:{value:e.pagination.per_page,name:"pages"},on:{"md-selected":e.changePerPage}},e._l(e.perPageOptions,(function(t){return n("md-option",{key:t,attrs:{label:t,value:t}},[e._v("\n                            "+e._s(t)+"\n                        ")])})),1)],1),e._v(" "),n("md-field",[n("md-input",{staticStyle:{width:"200px"},attrs:{type:"search",clearable:"",placeholder:"Поиск",value:e.searchQuery},on:{input:e.search}})],1)],1),e._v(" "),e._v(" "),e.isSearchedEmpty&&!e.loading?n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[e._v("Нет данных соответствующих поисковому запросу!")])]):e._e()],1),e._v(" "),e.loading?e._e():n("md-card-actions",{attrs:{"md-alignment":"space-between"}},[n("div",[e.serverPagination?n("p",{staticClass:"card-category"},[e._v(e._s(e.pagination.from)+" - "+e._s(e.pagination.to)+" / "+e._s(e.total))]):n("p",{staticClass:"card-category"},[e._v(e._s(e.from+1)+" - "+e._s(e.to)+" / "+e._s(e.total))])]),e._v(" "),n("pagination",{staticClass:"pagination-no-border pagination-success",attrs:{"per-page":e.pagination.per_page,total:e.total,value:e.pagination.current_page},on:{input:e.changePage}})],1)],1):e.loading?e._e():[n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[e._v(e._s(e.emptyContent))])])]],2)}),[],!1,null,null,null);t.a=b.exports},368:function(e,t,n){"use strict";var r=n(176);n.n(r).a},369:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.table-actions[data-v-d323bed2] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},370:function(e,t,n){"use strict";var r=n(177);n.n(r).a},371:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},372:function(e,t,n){"use strict";var r=n(178);n.n(r).a},373:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.loading td {\n    opacity: 0;\n}\n.progress-bar__container {\n    height: 4px;\n}\n",""])},667:function(e,t,n){"use strict";n.r(t);var r=n(47),a=n(2),i=n(36),s=n(28),o=n(20),c=n(4);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={name:"WorkExampleList",components:{VExtendedTable:i.a,ThumbTableCell:s.a,TableActions:o.a},mixins:[c.c],data:function(){return{resourceUrl:"/work-examples/list",storeModule:"workExamples"}},methods:u(u({},Object(a.b)({togglePublishAction:"table/togglePublish"})),{},{onDelete:function(e){return this.delete({payload:e.id,title:e.title,alertText:"работу «".concat(e.title,"»"),storeModule:this.storeModule,successText:"Работа удалена!",tableMode:"table"})},togglePublish:function(e){this.togglePublishAction("/work-examples/".concat(e.id,"/publish"))}})},h=n(0),f=Object(h.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-card",[n("md-card-header",{staticClass:"md-card-header-text md-card-header-green"},[n("div",{staticClass:"card-text"},[n("h4",{staticClass:"title"},[e._v("Портфолио")])])]),e._v(" "),n("md-card-content",[n("div",{staticClass:"md-between"},[n("h4",[e._v("Список работ")]),e._v(" "),n("router-button-link",{attrs:{title:"Создать работу",icon:"add",color:"md-success",to:{name:"cms.pages.portfolio."+e.storeModule+".create"}}})],1),e._v(" "),n("v-extended-table",{attrs:{serverPagination:!0,resourceUrl:e.resourceUrl,defaultSortOrder:"desc",emptyContent:"У Вас еще нет примеров работ!",searchFields:["image_id","date"]},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[e._v("\n                    "+e._s(r.id)+"\n                ")]),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{path:r.image_path,width:150}})],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Заголовок"}},[n("span",{staticClass:"md-subheading"},[e._v(e._s(r.title))])]),e._v(" "),n("md-table-cell",{attrs:{"md-label":"ID изображения"}},[e._v("\n                    "+e._s(r.image_id)+"\n                ")]),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Дата","md-sort-by":"date"}},[e._v("\n                    "+e._s(r.date)+"\n                ")]),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Опубликован"}},[n("md-switch",{attrs:{disabled:!r.has_images,value:!r.publish},on:{change:function(t){return e.togglePublish(r)}}},[[r.has_images?e._e():n("span",[e._v("Нет изображений!")])]],2)],1),e._v(" "),n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("router-button-link",{attrs:{title:"Изображения",icon:"collections",to:{name:"cms.pages.portfolio."+e.storeModule+".images",params:{id:r.id}}}}),e._v(" "),n("table-actions",{attrs:{item:r,subPath:"pages.portfolio."+e.storeModule},on:{delete:e.onDelete}})],1)]}}])},[e._v(">\n        ")])],1)],1)}),[],!1,null,null,null).exports,m={name:"PortfolioPage",components:{PageLayout:r.a,WorkExampleList:f}},g=Object(h.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("page-layout",{attrs:{pageId:this.$config.pagesIds.portfolio},scopedSlots:this._u([{key:"modules",fn:function(){return[t("work-example-list")]},proxy:!0}])})}),[],!1,null,null,null);t.default=g.exports}}]);