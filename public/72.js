(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{202:function(t,e,n){var a=n(11),i=n(436);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};a(i,s);t.exports=i.locals||{}},435:function(t,e,n){"use strict";var a=n(202);n.n(a).a},436:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-file-input[data-v-6da69587] {\n  display: none;\n}\n.md-between[data-v-6da69587] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}",""])},709:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n(5),s=n(98),r=n(34),c=n.n(r);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"ExcludedImageList",mixins:[i.b],components:{ImageListTable:s.a},props:{id:{type:[Number,String],required:!0}},data:function(){return{storeModule:"images",resourceUrl:"/catalog/art-collections/images/excluded",selected:[]}},created:function(){this.setPageTitle("Изображения каталога доступные для добавления в Арт-коллекцию.")},methods:l(l({},Object(a.b)({getCategoryAction:"artCollections/getItem",togglePublishAction:"table/togglePublish",addSelectedImagesAction:"artCollections/addSelectedImages"})),{},{togglePublish:function(t){this.togglePublishAction("/images/".concat(t,"/publish"))},addImages:function(){var t=this;this.addSelectedImagesAction({id:this.id,data:this.selected}).then((function(){return t.$router.push({name:"cms.catalog.art-collections.images",params:{id:t.id}}),c.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}})},m=(n(435),n(0)),b=Object(m.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{to:{name:"cms.catalog.art-collections.images",params:{id:t.id}}}}),t._v(" "),t.selected.length?n("div",[n("control-button",{attrs:{title:"Добавить изображения",icon:"check"},on:{click:t.addImages}})],1):t._e()],1)],1)],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("progress-bar-loading"),t._v(" "),n("md-card",[n("card-icon-header",{attrs:{title:"Каталог изображений",icon:"image"}}),t._v(" "),n("md-card-content",[n("image-list-table",{attrs:{resourceUrl:t.resourceUrl,emptyContent:"Пока нет других изображений!"},on:{publish:t.togglePublish},scopedSlots:t._u([{key:"first-column",fn:function(e){var a=e.item;return[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                                "+t._s(a.id)+"\n                            ")])]}},{key:"actions-column",fn:function(e){var a=e.item;return[n("md-table-cell",{attrs:{"md-label":"Выбрать"}},[n("md-checkbox",{attrs:{value:a.id},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]}}])})],1)],1)],1)])])}),[],!1,null,"6da69587",null);e.default=b.exports}}]);