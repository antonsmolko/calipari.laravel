(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{192:function(e,t,n){var i=n(11),a=n(394);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};i(a,s);e.exports=a.locals||{}},393:function(e,t,n){"use strict";var i=n(192);n.n(i).a},394:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,".md-file-input[data-v-37e46a25] {\n  display: none;\n}\n.md-between[data-v-37e46a25] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}",""])},662:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(6),s=n(94),r=n(52),c=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={name:"ExcludedImageList",mixins:[a.b],components:{ImageListTable:s.a},props:{id:{type:[Number,String],required:!0}},data:function(){return{storeModule:"images",resourceUrl:"/catalog/art-collections/images/excluded",selected:[],loading:!1}},created:function(){this.setPageTitle("Изображения каталога доступные для добавления в Арт-коллекцию.")},methods:l(l({},Object(i.b)({getCategoryAction:"artCollections/getItem",togglePublishAction:"table/togglePublish",addSelectedImagesAction:"artCollections/addSelectedImages"})),{},{togglePublish:function(e){this.togglePublishAction("/images/".concat(e,"/publish"))},addImages:function(){var e=this;this.addSelectedImagesAction({id:this.id,data:this.selected}).then((function(){return e.$router.push({name:"cms.catalog.art-collections.images",params:{id:e.id}}),c.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}})},m=(n(393),n(0)),b=Object(m.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{route:"cms.catalog.art-collections.images",params:{id:e.id}}}),e._v(" "),e.selected.length?n("div",[n("control-button",{attrs:{title:"Добавить изображения",icon:"check"},on:{click:e.addImages}})],1):e._e()],1)],1)],1)]),e._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header",{attrs:{title:"Каталог изображений",icon:"image"}}),e._v(" "),n("md-card-content",[n("image-list-table",{attrs:{resourceUrl:e.resourceUrl,emptyContent:"Пока нет других изображений!"},on:{publish:e.togglePublish},scopedSlots:e._u([{key:"first-column",fn:function(t){var i=t.item;return[n("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[e._v("\n                                "+e._s(i.id)+"\n                            ")])]}},{key:"actions-column",fn:function(t){var i=t.item;return[n("md-table-cell",{attrs:{"md-label":"Выбрать"}},[n("md-checkbox",{attrs:{value:i.id},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)]}}])})],1)],1)],1)])])}),[],!1,null,"37e46a25",null);t.default=b.exports}}]);