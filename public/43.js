(window.webpackJsonp=window.webpackJsonp||[]).push([[43,6],{112:function(t,e,n){"use strict";var r={name:"TagsTableCell",props:{items:{type:[Array,Object],default:null}}},a=(n(389),n(0)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",t._l(t.items,(function(e,r){return n("span",{key:r,staticClass:"md-category-tag"},[t._v("\n        "+t._s(e.title)+"\n    ")])})),0):t._e()}),[],!1,null,"491b2120",null);e.a=i.exports},113:function(t,e,n){"use strict";var r={name:"PaletteTableCell",props:{items:{type:[Array,Object],default:null}}},a=(n(391),n(0)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",t._l(t.items,(function(e,r){return n("md-icon",{key:r,staticClass:"md-color-icon",style:{color:e.alias}},[t._v("\n        lens\n        "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(t._s(e.title))])],1)})),1):t._e()}),[],!1,null,"492ccc7a",null);e.a=i.exports},114:function(t,e,n){"use strict";var r={name:"ImageTableActions",props:{item:{type:Object,default:null},remove:{type:Boolean,default:!1}},computed:{hasCollection:function(){return Boolean(this.item.colorCollection)},isCollectionMainImage:function(){return this.hasCollection&&this.item.id===this.item.colorCollection.main_image_id}},methods:{onDelete:function(){this.$emit("delete",this.item)},onRemove:function(){this.$emit("remove",this.item.id)}}},a=n(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"table-actions"},[t.remove&&!t.hasCollection?n("control-button",{attrs:{title:"Отвязать",icon:"remove",color:"md-info"},on:{click:t.onRemove}}):t._e(),t._v(" "),n("router-button-link",{attrs:{title:"Сформировать проект",icon:"local_mall",color:"md-warning",to:{name:"cms.store.projects.create",params:{imageId:t.item.id}}}}),t._v(" "),t.hasCollection?n("router-button-link",{attrs:{title:"Коллекция",icon:"perm_media",color:"md-teal",to:{name:"cms.catalog.color-collections.images",params:{id:t.item.colorCollection.id}}}}):t._e(),t._v(" "),n("router-button-link",{attrs:{title:"Редактировать",icon:"edit",color:"md-success",to:{name:"cms.images.edit",params:{id:t.item.id}}}}),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",disabled:t.isCollectionMainImage,color:"md-danger"},on:{click:t.onDelete}})],1):t._e()}),[],!1,null,null,null);e.a=i.exports},180:function(t,e,n){var r=n(10),a=n(381);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},182:function(t,e,n){var r=n(10),a=n(385);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},184:function(t,e,n){var r=n(10),a=n(390);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},185:function(t,e,n){var r=n(10),a=n(392);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},196:function(t,e,n){var r=n(10),a=n(426);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},28:function(t,e,n){"use strict";var r={name:"ThumbTableCell",components:{ResourceImage:n(51).a},props:{path:{type:String,default:null},width:{type:Number,default:100}}},a=(n(380),n(0)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{name:this.path,width:2*this.width}})}),[],!1,null,"08aa066c",null);e.a=i.exports},36:function(t,e,n){"use strict";var r=n(9),a=n.n(r),i=n(2),o=n(286),s=n(93),c=n.n(s),l=n(67);function u(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){u(i,r,a,o,s,"next",t)}function s(t){u(i,r,a,o,s,"throw",t)}o(void 0)}))}}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=c()((function(t){return t()}),300),h={name:"VExtendedTable",components:{Pagination:l.d},props:{searchFields:{type:Array,default:function(){return["id"]}},perPageOptions:{type:Array,default:function(){return[20,50,100,200]}},serverPagination:{type:Boolean,default:!1},resourceUrl:{type:String,required:!0},defaultSortOrder:{type:String,default:"asc"},emptyContent:{type:String,default:"Ресурсы отсутствуют!"},editItemPathName:{type:String,default:"cms.images.edit"}},data:function(){return{currentSort:"id",fuseSearch:null}},computed:p(p(p({},Object(i.d)("table",{sortInit:function(t){return t.sortInit},items:function(t){return t.items},searchedItems:function(t){return t.searchedItems},searchQuery:function(t){return t.searchQuery},pagination:function(t){return t.pagination},loading:function(t){return t.loading},routeDetector:function(t){return t.routeDetector}})),Object(i.c)("table",["itemsQty","searchedQty","checkReturnToPreviousPage","checkReturnToSearchedPreviousPage","isSearchedEmpty","totalPages"])),{},{queriedData:function(){return(!this.serverPagination&&this.searchQuery?this.searchedItems:this.items).slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.per_page;return this.total<t&&(t=this.total),t},from:function(){return this.serverPagination?0:this.pagination.per_page*(this.pagination.current_page-1)},total:function(){return this.pagination.total?this.pagination.total:this.searchedQty?this.searchedItems.length:this.items.length},fromEditItemPage:function(){return this.$route.name===this.routeDetector.to&&this.editItemPathName===this.routeDetector.from}}),watch:{items:function(){this.initFuseSearch(this.searchFields)},itemsQty:function(){this.returnToPreviousPage()},searchedQty:function(){this.returnToPreviousPage()}},created:function(){this.fromEditItemPage||(this.resetRouteDetector(),this.setState()),this.returnToPreviousPage(),this.requestItems()},mounted:function(){window.scrollTo(0,0),this.initFuseSearch(this.searchFields)},methods:p(p({},Object(i.b)("table",{clearStateAction:"clearState",getRequestItemsAction:"getItemsGet",postRequestItemsAction:"getItemsPost",setFieldAction:"setField",setFieldsAction:"setFields",setPaginationFieldAction:"setPaginationField",resetPaginationAction:"resetPagination",setRouteDetectorFieldAction:"setRouteDetectorField"})),{},{requestItems:function(){var t=this;return d(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.serverPagination){e.next=5;break}return e.next=3,t.postRequestItemsAction();case 3:e.next=7;break;case 5:return e.next=7,t.getRequestItemsAction();case 7:case"end":return e.stop()}}),e)})))()},customSort:function(){var t=this;return d(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.sortInit||t.loading||!t.items.length||t.fromEditItemPage){e.next=12;break}return n="asc"===t.pagination.sort_order?"desc":"asc",e.next=4,Promise.all([t.setPaginationFieldAction({field:"sort_order",value:n}),t.setPaginationFieldAction({field:"sort_by",value:t.currentSort})]);case 4:if(!t.serverPagination){e.next=10;break}return e.next=7,t.postRequestItemsAction();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=t.sort(t.items);case 11:return e.abrupt("return",e.t0);case 12:t.resetRouteDetector(),t.setFieldAction({field:"sortInit",value:!0});case 14:case"end":return e.stop()}}),e)})))()},sort:function(t){var e=this;return t.sort((function(t,n){var r=e.pagination.sort_by;return"asc"===e.pagination.sort_order?e.getSort(t,n,r):e.getSort(n,t,r)}))},getSort:function(t,e,n){return"number"==typeof t[n]&&"number"==typeof e[n]?t[n]<e[n]?-1:1:t[n].localeCompare(e[n])},search:function(t){var e=this;return d(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.trim(),n.next=3,Promise.all([e.setFieldAction({field:"searchQuery",value:r}),e.setDefaultPage()]);case 3:r||e.clearSearchedItems(),e.handleSearch();case 5:case"end":return n.stop()}}),n)})))()},handleSearch:function(){this.serverPagination?g(this.postRequestItemsAction):this.setSearchedItems()},initFuseSearch:function(t){this.serverPagination||(this.fuseSearch=new o.a(this.items.slice(),{keys:t,threshold:.3}))},changePage:function(t){var e=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setPaginationFieldAction({field:"current_page",value:t});case 2:if(!e.serverPagination){n.next=5;break}return n.next=5,e.postRequestItemsAction();case 5:window.scrollTo(0,0);case 6:case"end":return n.stop()}}),n)})))()},changePerPage:function(t){var e=this;return d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.setPaginationFieldAction({field:"per_page",value:t});case 2:return n.next=4,e.setDefaultPage();case 4:case"end":return n.stop()}}),n)})))()},setSearchedItems:function(){var t=this.fuseSearch.search(this.searchQuery).map((function(t){return t.item}));this.setFieldAction({field:"searchedItems",value:t})},setDefaultPage:function(){this.setPaginationFieldAction({field:"current_page",value:1})},clearSearchedItems:function(){this.setFieldAction({field:"searchedItems",value:[]})},setState:function(){this.resetPaginationAction(),this.clearStateAction(),this.setFieldAction({field:"resourceUrl",value:this.resourceUrl}),this.setPaginationFieldAction({field:"sort_order",value:this.defaultSortOrder}),this.setPaginationFieldAction({field:"per_page",value:this.perPageOptions[0]})},returnToPreviousPage:function(){this.serverPagination?this.checkGoPrevWithServerPagination():this.checkGoPrev()},checkGoPrevWithServerPagination:function(){var t=this;return d(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.checkReturnToPreviousPage){e.next=5;break}return e.next=3,t.setPaginationFieldAction({field:"current_page",value:t.pagination.current_page-1});case 3:return e.next=5,t.postRequestItemsAction();case 5:case"end":return e.stop()}}),e)})))()},checkGoPrev:function(){this.pagination.current_page>this.totalPages&&this.setPaginationFieldAction({field:"current_page",value:this.totalPages})},resetRouteDetector:function(){this.setRouteDetectorFieldAction({field:"from",value:null}),this.setRouteDetectorFieldAction({field:"to",value:null})}})},v=(n(384),n(0)),b=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-progress-bar__container"},[n("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{"md-mode":"indeterminate"}})],1),t._v(" "),t.items?n("div",[n("md-table",{staticClass:"paginated-table table-striped table-hover",class:{loading:t.loading},attrs:{value:t.queriedData,"md-sort":t.currentSort,"md-sort-fn":t.customSort},on:{"update:mdSort":function(e){t.currentSort=e},"update:md-sort":function(e){t.currentSort=e}},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var r=e.item;return n("md-table-row",{},[t._t("default",null,{item:r})],2)}}],null,!0)},[n("md-table-toolbar",{staticClass:"mb-3"},[n("md-field",[n("label",{attrs:{for:"pages"}},[t._v("На странице")]),t._v(" "),n("md-select",{attrs:{value:t.pagination.per_page,name:"pages"},on:{"md-selected":t.changePerPage}},t._l(t.perPageOptions,(function(e){return n("md-option",{key:e,attrs:{label:e,value:e}},[t._v("\n                            "+t._s(e)+"\n                        ")])})),1)],1),t._v(" "),n("md-field",[n("md-input",{staticStyle:{width:"200px"},attrs:{type:"search",clearable:"",placeholder:"Поиск",value:t.searchQuery},on:{input:t.search}})],1)],1),t._v(" "),t._v(" "),t.isSearchedEmpty&&!t.loading?n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[t._v("Нет данных соответствующих поисковому запросу!")])]):t._e()],1),t._v(" "),t.loading?t._e():n("md-card-actions",{attrs:{"md-alignment":"space-between"}},[n("div",[t.serverPagination?n("p",{staticClass:"card-category"},[t._v(t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" / "+t._s(t.total))]):n("p",{staticClass:"card-category"},[t._v(t._s(t.from+1)+" - "+t._s(t.to)+" / "+t._s(t.total))])]),t._v(" "),n("pagination",{staticClass:"pagination-no-border pagination-success",attrs:{"per-page":t.pagination.per_page,total:t.total,value:t.pagination.current_page},on:{input:t.changePage}})],1)],1):t.loading?t._e():[n("div",{staticClass:"alert alert-info mt-2"},[n("h3",[t._v(t._s(t.emptyContent))])])]],2)}),[],!1,null,null,null);e.a=b.exports},380:function(t,e,n){"use strict";var r=n(180);n.n(r).a},381:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.img-raised[data-v-08aa066c] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},384:function(t,e,n){"use strict";var r=n(182);n.n(r).a},385:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.loading td {\n    opacity: 0;\n}\n",""])},389:function(t,e,n){"use strict";var r=n(184);n.n(r).a},390:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"\n.md-category-tag[data-v-491b2120] {\n    display: inline-block;\n    padding: 3px 4px;\n    background-color: #dddddd;\n    border-radius: 2px;\n    margin: 2px;\n    line-height: 1;\n    font-size: .85em;\n}\n",""])},391:function(t,e,n){"use strict";var r=n(185);n.n(r).a},392:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-table-row .md-color-icon[data-v-492ccc7a] {\n  background: #fafafa;\n  border-radius: 50%;\n  margin: 1px;\n}",""])},425:function(t,e,n){"use strict";var r=n(196);n.n(r).a},426:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-between[data-v-a88edf28] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-a88edf28] {\n  height: 4px;\n}",""])},696:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(5),i=n(4),o=n(88),s=n(95),c=n(114);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"ImageList",mixins:[a.b,i.c,i.g],components:{ImageUploader:o.a,ImageListTable:s.a,ImageTableActions:c.a},props:{category_type:{type:String,default:"images"},id:{type:[Number,String],default:null}},data:function(){return{resourceUrl:"/catalog/".concat(this.category_type,"/").concat(this.id,"/images"),responseData:!1,storeModule:"images",redirectRoute:{name:"cms.catalog.subcategories.list",params:{category_type:this.category_type}}}},computed:u({},Object(r.d)({title:function(t){return t.subCategories.fields.title}})),created:function(){var t=this;this.clearFieldsAction(),this.getItemAction({type:this.category_type,id:this.id}).then((function(){t.setPageTitle("Изображения «".concat(t.title,"»")),t.responseData=!0})).catch((function(){return t.$router.push(t.redirectRoute)}))},beforeDestroy:function(){this.clearFieldsAction()},methods:u(u({},Object(r.b)({clearFieldsAction:"subCategories/clearItemFields",getItemAction:"subCategories/getItem",togglePublishAction:"table/togglePublish",removeImageAction:"subCategories/removeImage"})),{},{fileInputChange:function(t){var e=t.images;this.upload({images:e,type:this.category_type,id:this.id,storeModule:"subCategories"})},onRemove:function(t){this.removeImageAction(t)},onDelete:function(t){this.delete({payload:t.id,title:t.id,alertText:"изображение «".concat(t.id,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,tableMode:"table"})},togglePublish:function(t){this.togglePublishAction("/images/".concat(t,"/publish"))}})},p=(n(425),n(0)),f=Object(p.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{to:t.redirectRoute}}),t._v(" "),n("div",[n("router-button-link",{attrs:{icon:"add",color:"md-success",title:"Добавить изображения",to:{name:"cms.catalog.subcategories.images.excluded",params:{id:t.id}}}}),t._v(" "),n("image-uploader",{attrs:{multiple:!0},on:{change:t.fileInputChange}})],1)],1)],1),t._v(" "),n("progress-bar-loading")],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header",{attrs:{title:"Каталог изображений",icon:"image"}}),t._v(" "),n("md-card-content",[n("image-list-table",{attrs:{resourceUrl:t.resourceUrl},on:{publish:t.togglePublish},scopedSlots:t._u([{key:"actions-column",fn:function(e){var r=e.item;return[r?n("md-table-cell",{attrs:{"md-label":"Действия"}},[n("image-table-actions",{attrs:{item:r,remove:!0},on:{remove:t.onRemove,delete:t.onDelete}})],1):t._e()]}}],null,!1,3891602051)})],1)],1)],1)])]):t._e()}),[],!1,null,"a88edf28",null);e.default=f.exports},95:function(t,e,n){"use strict";var r=n(36),a=n(112),i=n(113),o=n(28),s=n(67),c={name:"ImageListTable",components:{VExtendedTable:r.a,TagsTableCell:a.a,PaletteTableCell:i.a,ThumbTableCell:o.a,Badge:s.b},props:{resourceUrl:{type:String,required:!0}},methods:{onPublish:function(t){this.$emit("publish",t)}}},l=n(0),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-extended-table",{attrs:{serverPagination:!0,resourceUrl:t.resourceUrl,defaultSortOrder:"desc",emptyContent:"Пока нет изображений!"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[t._t("first-column",[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                "+t._s(r.id)+"\n            ")])],{item:r}),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Превью"}},[n("thumb-table-cell",{attrs:{path:r.path}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Темы"}},[n("tags-table-cell",{attrs:{items:r.topics}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Цвета"}},[n("palette-table-cell",{attrs:{items:r.colors}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Интерьеры"}},[n("tags-table-cell",{attrs:{items:r.interiors}})],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Владелец"}},[r.owner?n("span",{staticClass:"md-category-tag"},[t._v("\n                "+t._s(r.owner.title)+"\n            ")]):t._e()]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Цветовая коллекция"}},[r.colorCollection?[r.id===r.colorCollection.main_image_id?n("md-badge",{attrs:{"md-content":"М"}},[n("span",{staticClass:"md-category-tag"},[t._v("\n                        "+t._s(r.colorCollection.title)+"\n                    ")])]):n("span",{staticClass:"md-category-tag"},[t._v("\n                    "+t._s(r.colorCollection.title)+"\n                ")])]:t._e()],2),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Формат"}},[r.format?n("span",[n("md-icon",[t._v(t._s(r.format.icon))]),t._v(" "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(t._s(r.format.title))])],1):t._e()]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Лайки","md-sort-by":"likes_count"}},[n("md-icon",[t._v("favorite")]),t._v(" "+t._s(r.likesCount)+"\n        ")],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Заказы","md-sort-by":"orders_count"}},[n("md-icon",[t._v("shopping_cart")]),t._v(" "+t._s(r.ordersCount)+"\n        ")],1),t._v(" "),n("md-table-cell",{attrs:{"md-label":"Опубл."}},[n("md-switch",{attrs:{value:!r.publish},on:{change:function(e){return t.onPublish(r.id)}}})],1),t._v(" "),t._t("actions-column",null,{item:r})]}}],null,!0)})}),[],!1,null,null,null);e.a=u.exports}}]);