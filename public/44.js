(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{171:function(e,t,r){var n=r(11),a=r(352);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};n(a,i);e.exports=a.locals||{}},172:function(e,t,r){var n=r(11),a=r(354);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};n(a,i);e.exports=a.locals||{}},173:function(e,t,r){var n=r(11),a=r(356);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};n(a,i);e.exports=a.locals||{}},204:function(e,t,r){"use strict";var n=r(2),a=r(42),i=r(27),s=r(28),o=r(4);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={name:"WorkExampleList",components:{VExtendedTable:a.a,ThumbTableCell:i.a,TableActions:s.a},mixins:[o.c],data:function(){return{resourceUrl:"/work-examples/list",storeModule:"workExamples"}},methods:l(l({},Object(n.b)({togglePublishAction:"table/togglePublish"})),{},{onDelete:function(e){return this.delete({payload:e.id,title:e.title,alertText:"работу «".concat(e.title,"»"),storeModule:this.storeModule,successText:"Работа удалена!",tableMode:"table"})},togglePublish:function(e){this.togglePublishAction("/work-examples/".concat(e.id,"/publish"))}})},p=r(0),h=Object(p.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("md-card",[r("md-card-header",{staticClass:"md-card-header-text md-card-header-green"},[r("div",{staticClass:"card-text"},[r("h4",{staticClass:"title"},[e._v("Портфолио")])])]),e._v(" "),r("md-card-content",[r("div",{staticClass:"md-between"},[r("h4",[e._v("Список работ")]),e._v(" "),r("router-button-link",{attrs:{title:"Создать работу",icon:"add",color:"md-success",route:"cms.pages.portfolio."+e.storeModule+".create"}})],1),e._v(" "),r("v-extended-table",{attrs:{serverPagination:!0,resourceUrl:e.resourceUrl,defaultSortOrder:"desc",emptyContent:"У Вас еще нет примеров работ!",searchFields:["image_id","date"]},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[r("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[e._v("\n                    "+e._s(n.id)+"\n                ")]),e._v(" "),r("md-table-cell",{attrs:{"md-label":"Превью"}},[r("thumb-table-cell",{attrs:{path:n.image_path,width:150}})],1),e._v(" "),r("md-table-cell",{attrs:{"md-label":"Заголовок"}},[r("span",{staticClass:"md-subheading"},[e._v(e._s(n.title))])]),e._v(" "),r("md-table-cell",{attrs:{"md-label":"ID изображения"}},[e._v("\n                    "+e._s(n.image_id)+"\n                ")]),e._v(" "),r("md-table-cell",{attrs:{"md-label":"Дата","md-sort-by":"date"}},[e._v("\n                    "+e._s(n.date)+"\n                ")]),e._v(" "),r("md-table-cell",{attrs:{"md-label":"Опубликован"}},[r("md-switch",{attrs:{disabled:!n.has_images,value:!n.publish},on:{change:function(t){return e.togglePublish(n)}}},[[n.has_images?e._e():r("span",[e._v("Нет изображений!")])]],2)],1),e._v(" "),r("md-table-cell",{attrs:{"md-label":"Действия"}},[r("router-button-link",{attrs:{title:"Изображения",icon:"collections",route:"cms.pages.portfolio."+e.storeModule+".images",params:{id:n.id}}}),e._v(" "),r("table-actions",{attrs:{item:n,subPath:"pages.portfolio."+e.storeModule},on:{delete:e.onDelete}})],1)]}}])},[e._v(">\n        ")])],1)],1)}),[],!1,null,"462a5706",null);t.a=h.exports},27:function(e,t,r){"use strict";var n={name:"ThumbTableCell",components:{ResourceImage:r(178).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},a=(r(351),r(0)),i=Object(a.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);t.a=i.exports},28:function(e,t,r){"use strict";var n={name:"TableActions",props:{item:{type:Object,default:null},subPath:{type:String,required:!0},deleteDisabled:{type:Boolean,default:!1},editDisabled:{type:Boolean,default:!1},restParams:{type:Object,default:function(){return{}}}},methods:{onDelete:function(e){this.$emit("delete",e)}}},a=(r(353),r(0)),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.item?r("div",{staticClass:"table-actions"},[r("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",disabled:e.editDisabled,route:"cms."+e.subPath+".edit",params:Object.assign({},{id:e.item.id},e.restParams)}}),e._v(" "),r("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:e.deleteDisabled,color:"md-danger"},on:{click:function(t){return e.onDelete(e.item)}}})],1):e._e()}),[],!1,null,"b5ba4ed2",null);t.a=i.exports},351:function(e,t,r){"use strict";var n=r(171);r.n(n).a},352:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},353:function(e,t,r){"use strict";var n=r(172);r.n(n).a},354:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"\n.table-actions[data-v-b5ba4ed2] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n",""])},355:function(e,t,r){"use strict";var n=r(173);r.n(n).a},356:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"\n.loading td {\n    opacity: 0;\n}\n.progress-bar__container {\n    height: 4px;\n}\n",""])},42:function(e,t,r){"use strict";var n=r(17),a=r.n(n),i=r(2),s=r(272),o=r(89),c=r.n(o),l=r(65);function u(e,t,r,n,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){u(i,n,a,s,o,"next",e)}function o(e){u(i,n,a,s,o,"throw",e)}s(void 0)}))}}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=c()((function(e){return e()}),300),g={name:"VExtendedTable",components:{Pagination:l.d},props:{searchFields:{type:Array,default:function(){return["id"]}},perPageOptions:{type:Array,default:function(){return[20,50,100,200]}},serverPagination:{type:Boolean,default:!1},resourceUrl:{type:String,required:!0},defaultSortOrder:{type:String,default:"asc"},emptyContent:{type:String,default:"Ресурсы отсутствуют!"},editItemPathName:{type:String,default:"cms.images.edit"}},data:function(){return{currentSort:"id",fuseSearch:null}},computed:h(h(h({},Object(i.d)("table",{sortInit:function(e){return e.sortInit},items:function(e){return e.items},searchedItems:function(e){return e.searchedItems},searchQuery:function(e){return e.searchQuery},pagination:function(e){return e.pagination},loading:function(e){return e.loading},routeDetector:function(e){return e.routeDetector}})),Object(i.c)("table",["itemsQty","searchedQty","checkReturnToPreviousPage","checkReturnToSearchedPreviousPage","isSearchedEmpty","totalPages"])),{},{queriedData:function(){return(!this.serverPagination&&this.searchQuery?this.searchedItems:this.items).slice(this.from,this.to)},to:function(){var e=this.from+this.pagination.per_page;return this.total<e&&(e=this.total),e},from:function(){return this.serverPagination?0:this.pagination.per_page*(this.pagination.current_page-1)},total:function(){return this.pagination.total?this.pagination.total:this.searchedQty?this.searchedItems.length:this.items.length},fromEditItemPage:function(){return this.$route.name===this.routeDetector.to&&this.editItemPathName===this.routeDetector.from}}),watch:{items:function(){this.initFuseSearch(this.searchFields)},itemsQty:function(){this.returnToPreviousPage()},searchedQty:function(){this.returnToPreviousPage()}},created:function(){this.fromEditItemPage||(this.resetRouteDetector(),this.setState()),this.returnToPreviousPage(),this.requestItems()},mounted:function(){window.scrollTo(0,0),this.initFuseSearch(this.searchFields)},methods:h(h({},Object(i.b)("table",{clearStateAction:"clearState",getRequestItemsAction:"getItemsGet",postRequestItemsAction:"getItemsPost",setFieldAction:"setField",setFieldsAction:"setFields",setPaginationFieldAction:"setPaginationField",resetPaginationAction:"resetPagination",setRouteDetectorFieldAction:"setRouteDetectorField"})),{},{requestItems:function(){var e=this;return d(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.serverPagination){t.next=5;break}return t.next=3,e.postRequestItemsAction();case 3:t.next=7;break;case 5:return t.next=7,e.getRequestItemsAction();case 7:case"end":return t.stop()}}),t)})))()},customSort:function(){var e=this;return d(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.sortInit||e.loading||!e.items.length||e.fromEditItemPage){t.next=12;break}return r="asc"===e.pagination.sort_order?"desc":"asc",t.next=4,Promise.all([e.setPaginationFieldAction({field:"sort_order",value:r}),e.setPaginationFieldAction({field:"sort_by",value:e.currentSort})]);case 4:if(!e.serverPagination){t.next=10;break}return t.next=7,e.postRequestItemsAction();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=e.sort(e.items);case 11:return t.abrupt("return",t.t0);case 12:e.resetRouteDetector(),e.setFieldAction({field:"sortInit",value:!0});case 14:case"end":return t.stop()}}),t)})))()},sort:function(e){var t=this;return e.sort((function(e,r){var n=t.pagination.sort_by;return"asc"===t.pagination.sort_order?t.getSort(e,r,n):t.getSort(r,e,n)}))},getSort:function(e,t,r){return"number"==typeof e[r]&&"number"==typeof t[r]?e[r]<t[r]?-1:1:e[r].localeCompare(t[r])},search:function(e){var t=this;return d(a.a.mark((function r(){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.trim(),r.next=3,Promise.all([t.setFieldAction({field:"searchQuery",value:n}),t.setDefaultPage()]);case 3:n||t.clearSearchedItems(),t.handleSearch();case 5:case"end":return r.stop()}}),r)})))()},handleSearch:function(){this.serverPagination?m(this.postRequestItemsAction):this.setSearchedItems()},initFuseSearch:function(e){this.serverPagination||(this.fuseSearch=new s.a(this.items.slice(),{keys:e,threshold:.3}))},changePage:function(e){var t=this;return d(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setPaginationFieldAction({field:"current_page",value:e});case 2:if(!t.serverPagination){r.next=5;break}return r.next=5,t.postRequestItemsAction();case 5:window.scrollTo(0,0);case 6:case"end":return r.stop()}}),r)})))()},changePerPage:function(e){var t=this;return d(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.setPaginationFieldAction({field:"per_page",value:e});case 2:return r.next=4,t.setDefaultPage();case 4:case"end":return r.stop()}}),r)})))()},setSearchedItems:function(){var e=this.fuseSearch.search(this.searchQuery).map((function(e){return e.item}));this.setFieldAction({field:"searchedItems",value:e})},setDefaultPage:function(){this.setPaginationFieldAction({field:"current_page",value:1})},clearSearchedItems:function(){this.setFieldAction({field:"searchedItems",value:[]})},setState:function(){this.resetPaginationAction(),this.clearStateAction(),this.setFieldAction({field:"resourceUrl",value:this.resourceUrl}),this.setPaginationFieldAction({field:"sort_order",value:this.defaultSortOrder}),this.setPaginationFieldAction({field:"per_page",value:this.perPageOptions[0]})},returnToPreviousPage:function(){this.serverPagination?this.checkGoPrevWithServerPagination():this.checkGoPrev()},checkGoPrevWithServerPagination:function(){var e=this;return d(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.checkReturnToPreviousPage){t.next=5;break}return t.next=3,e.setPaginationFieldAction({field:"current_page",value:e.pagination.current_page-1});case 3:return t.next=5,e.postRequestItemsAction();case 5:case"end":return t.stop()}}),t)})))()},checkGoPrev:function(){this.pagination.current_page>this.totalPages&&this.setPaginationFieldAction({field:"current_page",value:this.totalPages})},resetRouteDetector:function(){this.setRouteDetectorFieldAction({field:"from",value:null}),this.setRouteDetectorFieldAction({field:"to",value:null})}})},b=(r(355),r(0)),v=Object(b.a)(g,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"progress-bar__container"},[r("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{"md-mode":"indeterminate"}})],1),e._v(" "),e.items?r("div",[r("md-table",{staticClass:"paginated-table table-striped table-hover",class:{loading:e.loading},attrs:{value:e.queriedData,"md-sort":e.currentSort,"md-sort-fn":e.customSort},on:{"update:mdSort":function(t){e.currentSort=t},"update:md-sort":function(t){e.currentSort=t}},scopedSlots:e._u([{key:"md-table-row",fn:function(t){var n=t.item;return r("md-table-row",{},[e._t("default",null,{item:n})],2)}}],null,!0)},[r("md-table-toolbar",{staticClass:"mb-3"},[r("md-field",[r("label",{attrs:{for:"pages"}},[e._v("На странице")]),e._v(" "),r("md-select",{attrs:{value:e.pagination.per_page,name:"pages"},on:{"md-selected":e.changePerPage}},e._l(e.perPageOptions,(function(t){return r("md-option",{key:t,attrs:{label:t,value:t}},[e._v("\n                            "+e._s(t)+"\n                        ")])})),1)],1),e._v(" "),r("md-field",[r("md-input",{staticStyle:{width:"200px"},attrs:{type:"search",clearable:"",placeholder:"Поиск",value:e.searchQuery},on:{input:e.search}})],1)],1),e._v(" "),e._v(" "),e.isSearchedEmpty&&!e.loading?r("div",{staticClass:"alert alert-info mt-2"},[r("h3",[e._v("Нет данных соответствующих поисковому запросу!")])]):e._e()],1),e._v(" "),e.loading?e._e():r("md-card-actions",{attrs:{"md-alignment":"space-between"}},[r("div",[e.serverPagination?r("p",{staticClass:"card-category"},[e._v(e._s(e.pagination.from)+" - "+e._s(e.pagination.to)+" / "+e._s(e.total))]):r("p",{staticClass:"card-category"},[e._v(e._s(e.from+1)+" - "+e._s(e.to)+" / "+e._s(e.total))])]),e._v(" "),r("pagination",{staticClass:"pagination-no-border pagination-success",attrs:{"per-page":e.pagination.per_page,total:e.total,value:e.pagination.current_page},on:{input:e.changePage}})],1)],1):e.loading?e._e():[r("div",{staticClass:"alert alert-info mt-2"},[r("h3",[e._v(e._s(e.emptyContent))])])]],2)}),[],!1,null,null,null);t.a=v.exports},694:function(e,t,r){"use strict";r.r(t);var n=r(54),a=r(204),i={name:"PortfolioPage",components:{PageLayout:n.a,WorkExampleList:a.a}},s=r(0),o=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("page-layout",{attrs:{pageId:this.$config.pagesIds.portfolio},scopedSlots:this._u([{key:"modules",fn:function(){return[t("work-example-list")]},proxy:!0}])})}),[],!1,null,null,null);t.default=o.exports}}]);