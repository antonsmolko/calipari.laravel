(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{188:function(t,e,a){var s=a(10),l=a(396);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[t.i,l,""]]);var r={insert:"head",singleton:!1};s(l,r);t.exports=l.locals||{}},395:function(t,e,a){"use strict";var s=a(188);a.n(s).a},396:function(t,e,a){(t.exports=a(16)(!1)).push([t.i,".tm-color[data-v-37e55760] {\n  width: 50px;\n  height: 50px;\n}",""])},672:function(t,e,a){"use strict";a.r(e);var s=a(2),l=a(154),r=a(211),c=a(60),o=a(5),i=a(4);function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b={name:"CategoryList",mixins:[r.a,c.a,c.c,o.b,i.c],components:{CategoryTableActions:l.a},data:function(){return{resourceUrl:"/catalog/categories/type/".concat(this.category_type),responseData:!1}},computed:d({},Object(s.d)("categories",{items:function(t){return t.items}})),created:function(){this.setPageTitle(this.pageProps[this.category_type].PAGE_TITLE)},methods:d(d({},Object(s.b)({togglePublishAction:"table/togglePublish"})),{},{onDelete:function(t){return this.delete({module:"categories",payload:t.id,title:t.title,alertText:"категорию «".concat(t.title,"»"),storeModule:this.storeModule,successText:"Категория удалена!",tableMode:"table"})},togglePublish:function(t){this.togglePublishAction("/catalog/categories/".concat(t.id,"/publish"))}})},m=(a(395),a(0)),p=Object(m.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item"},[a("md-card",{staticClass:"mt-0"},[a("md-card-content",{staticClass:"md-between"},[a("router-button-link",{attrs:{to:{name:"cms.catalog"},title:"В каталог"}}),t._v(" "),a("router-button-link",{attrs:{to:{name:"cms.catalog.categories.create",params:{category_type:t.category_type}},icon:"add",color:"md-success",title:"Создать категорию"}})],1)],1),t._v(" "),a("div",{staticClass:"space-1"}),t._v(" "),a("md-card",[a("card-icon-header",{attrs:{title:t.tableTitle,icon:"assignment"}}),t._v(" "),a("md-card-content",[a("v-extended-table",{attrs:{resourceUrl:t.resourceUrl,editItemPathName:"cms.catalog.categories.edit",searchFields:["title","alias"],emptyContent:"У Вас нет категорий. Создайте их!"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item;return[a("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                            "+t._s(s.id)+"\n                        ")]),t._v(" "),"colors"!==t.category_type?a("md-table-cell",{attrs:{"md-label":"Превью"}},[a("thumb-table-cell",{attrs:{path:s.image_path,width:150}})],1):a("md-table-cell",{attrs:{"md-label":"Превью"}},[a("div",{staticClass:"tm-color img-raised rounded-circle",style:"background: "+s.alias})]),t._v(" "),a("md-table-cell",{attrs:{"md-label":"Заголовок","md-sort-by":"title"}},[a("span",{staticClass:"md-subheading"},[t._v(t._s(s.title))])]),t._v(" "),a("md-table-cell",{attrs:{"md-label":"Алиас","md-sort-by":"alias"}},[t._v("\n                            "+t._s(s.alias)+"\n                        ")]),t._v(" "),a("md-table-cell",{attrs:{"md-label":"Изображения","md-sort-by":"images_count"}},[t._v("\n                            "+t._s(s.images_count)+"\n                        ")]),t._v(" "),a("md-table-cell",{attrs:{"md-label":"Опубликован"}},[a("md-switch",{attrs:{disabled:!s.has_published_images,value:!s.publish},on:{change:function(e){return t.togglePublish(s)}}},[[s.has_published_images?t._e():a("span",[t._v("Нет опубликованных изображений!")])]],2)],1),t._v(" "),a("md-table-cell",{attrs:{"md-label":"Действия"}},[a("category-table-actions",{attrs:{item:s},on:{delete:t.onDelete}})],1)]}}])})],1)],1)],1)])}),[],!1,null,"37e55760",null);e.default=p.exports}}]);