(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{186:function(e,t,i){var n=i(10),r=i(411);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);e.exports=r.locals||{}},187:function(e,t,i){var n=i(10),r=i(413);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);e.exports=r.locals||{}},29:function(e,t,i){"use strict";var n={name:"VSelect",props:{title:{type:String},name:{type:String,required:!0},vField:{type:Object,default:null},placeholder:{type:String},options:{type:Array,required:!0},value:{type:[Array,Number,String],default:null},multiple:{type:Boolean,default:!1},defaultValue:{type:[Array,Number,String,Object],default:null},defaultTitle:{type:String,default:"Нет"},nameField:{type:String,default:"title"},namePostfix:{type:String,default:null},indexName:{type:[String,Number],default:"id"},module:{type:String,default:null},action:{type:String,default:"setItemField"},differ:{type:Boolean,default:!1}},data:function(){return{valueReference:null}},computed:{storeModule:function(){return this.module?"".concat(this.module,"/"):""}},methods:{onSelect:function(e){this.vField&&this.touched(this.vField,e),this.$store.dispatch("".concat(this.storeModule).concat(this.action),{field:this.name,value:e})},isDiffer:function(e,t){return this.multiple?Boolean(e.filter((function(e){return!t.includes(e)})).concat(t.filter((function(t){return!e.includes(t)}))).length):e!=t},touchedDifferent:function(e,t){this.isDiffer(t,this.valueReference)?e.$touch():e.$reset()},touched:function(e,t){this.differ?this.touchedDifferent(e,t):e.$touch()}},created:function(){this.valueReference=this.value instanceof Array?this.value.slice(0):this.value}},r=i(0),a=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("h4",{staticClass:"card-title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),i("md-field",[i("label",[e._v(e._s(e.placeholder))]),e._v(" "),i("md-select",{attrs:{value:e.value,multiple:e.multiple},on:{"md-selected":e.onSelect}},[null!==e.defaultValue?i("md-option",{attrs:{value:e.defaultValue}},[e._v(e._s(e.defaultTitle))]):e._e(),e._v(" "),e._l(e.options,(function(t,n){return i("md-option",{key:n,attrs:{value:t[e.indexName]}},[e._v("\n                "+e._s(t[e.nameField])+e._s(e.namePostfix?" - [ "+t[e.namePostfix]+" ]":"")+"\n            ")])}))],2)],1)],1)}),[],!1,null,null,null);t.a=a.exports},4:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"f",(function(){return u})),i.d(t,"c",(function(){return d})),i.d(t,"b",(function(){return m})),i.d(t,"g",(function(){return v})),i.d(t,"d",(function(){return h})),i.d(t,"e",(function(){return g}));var n=i(9),r=i.n(n),a=i(34),s=i.n(a);function o(e,t,i,n,r,a,s){try{var o=e[a](s),c=o.value}catch(e){return void i(e)}o.done?t(c):Promise.resolve(c).then(n,r)}function c(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var a=e.apply(t,i);function s(e){o(a,n,r,s,c,"next",e)}function c(e){o(a,n,r,s,c,"throw",e)}s(void 0)}))}}var l={methods:{create:function(e){var t=this;return c(r.a.mark((function i(){var n,a,o,c,l,u,d,m,f;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.sendData,a=e.title,o=e.successText,c=e.redirectRoute,l=e.storeModule,u=void 0===l?null:l,d=e.action,m=void 0===d?"store":d,t.$store.commit("SET_LOADING",!0),f=u?"".concat(u,"/"):"",i.next=5,t.$store.dispatch("".concat(f).concat(m),n);case 5:return i.next=7,t.$router.push(c);case 7:return t.$store.commit("SET_LOADING",!1),i.abrupt("return",s.a.fire({title:o,text:"«".concat(a,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 9:case"end":return i.stop()}}),i)})))()}}},u={methods:{update:function(e){var t=this;return c(r.a.mark((function i(){var n,a,o,c,l,u,d,m;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.sendData,a=e.title,o=e.successText,c=e.redirectRoute,l=void 0===c?null:c,u=e.storeModule,d=void 0===u?null:u,t.$store.commit("SET_LOADING",!0),m=d?"".concat(d,"/"):"",i.next=5,t.$store.dispatch("".concat(m,"update"),n);case 5:if(!l){i.next=12;break}if(!(window.history.length>1)){i.next=10;break}t.$router.go(-1),i.next=12;break;case 10:return i.next=12,t.$router.push(l);case 12:return t.$store.commit("SET_LOADING",!1),i.abrupt("return",s.a.fire({title:o,text:"«".concat(a,"»"),timer:2e3,showConfirmButton:!1,icon:"success"}));case 14:case"end":return i.stop()}}),i)})))()}}},d={methods:{delete:function(e){var t=this;return c(r.a.mark((function i(){var n,a,s,o,c,l,u,d,m,v,h,g,b,_,x,w;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.payload,a=e.title,s=e.alertText,o=e.successText,c=e.storeModule,l=void 0===c?null:c,u=e.redirectRoute,d=void 0===u?null:u,m=e.tableMode,v=void 0!==m&&m,h=e.action,g=void 0===h?"delete":h,b=e.force,_=void 0!==b&&b,x=l?"".concat(l,"/"):"",w=_?"forceDelete":g,i.next=5,f(s);case 5:if(!i.sent.value){i.next=15;break}return t.$store.commit("SET_LOADING",!0),i.next=10,t.$store.dispatch("".concat(x).concat(w),{payload:n,tableMode:v});case 10:if(!d){i.next=13;break}return i.next=13,t.$router.push(d);case 13:return t.$store.commit("SET_LOADING",!1),i.abrupt("return",p(o,a));case 15:case"end":return i.stop()}}),i)})))()}}},m={methods:{deleteImageByIndex:function(e){var t=this;return c(r.a.mark((function i(){var n,a,s,o,c,l;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.id,a=e.index,s=e.alertText,o=e.successText,c=e.storeModule,l=void 0===c?null:c,t.$store.commit("SET_LOADING",!0),i.next=4,f(s);case 4:if(!i.sent.value){i.next=11;break}return i.next=8,t.$store.dispatch("".concat(l,"/deleteImageByIndex"),{id:n,index:a});case 8:return t.$store.commit("SET_LOADING",!1),i.next=11,p(o,a);case 11:case"end":return i.stop()}}),i)})))()}}},f=function(e){return s.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(e," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},p=function(e,t){return s.a.fire({title:e,text:"«".concat(t,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},v={methods:{upload:function(e){var t=this;return c(r.a.mark((function i(){var n,a,o,c,l,u,d,m,f;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(n=e.uploadFiles,a=e.type,o=void 0===a?null:a,c=e.id,l=void 0===c?null:c,u=e.storeModule,d=void 0===u?null:u,m=Array.from(n),f=d||"categories",!m.length){i.next=11;break}if(!l){i.next=9;break}return i.next=7,t.$store.dispatch("".concat(f,"/uploadImages"),{files:m,id:l,type:o});case 7:i.next=11;break;case 9:return i.next=11,t.$store.dispatch("images/store",m);case 11:return i.next=13,s.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 13:return i.abrupt("return",i.sent);case 14:case"end":return i.stop()}}),i)})))()}}},h={methods:{addImages:function(e){var t=this;return c(r.a.mark((function i(){var n,a;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.id,a=e.data,i.next=3,t.$store.dispatch("categories/addSelectedImages",{id:n,data:a});case 3:return i.next=5,t.$router.push({name:"cms.catalog.categories.images",params:{id:n}});case 5:return i.abrupt("return",s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return i.stop()}}),i)})))()}}},g={methods:{addImages:function(e){var t=this;return c(r.a.mark((function i(){var n,a,o,c;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.type,a=e.id,o=e.data,c=e.redirectRoute,i.next=3,t.$store.dispatch("subCategories/addSelectedImages",{type:n,id:a,data:o});case 3:return i.next=5,t.$router.push(c);case 5:return i.abrupt("return",s.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"}));case 6:case"end":return i.stop()}}),i)})))()}}}},410:function(e,t,i){"use strict";var n=i(186);i.n(n).a},411:function(e,t,i){(e.exports=i(16)(!1)).push([e.i,"\n.upload-button[data-v-e06b3960] {\n    display: inline-block;\n}\n.md-file-input[data-v-e06b3960] {\n    display: none;\n}\n",""])},412:function(e,t,i){"use strict";var n=i(187);i.n(n).a},413:function(e,t,i){(e.exports=i(16)(!1)).push([e.i,".info-item[data-v-32908e58] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.info-item[data-v-32908e58]:not(:last-child) {\n  margin-bottom: 10px;\n}\n.info-item .card-title[data-v-32908e58] {\n  width: 150px;\n  margin: 0;\n}\n.info-item .info-value[data-v-32908e58] {\n  margin: 0;\n}",""])},681:function(e,t,i){"use strict";i.r(t);var n=i(9),r=i.n(n),a=i(2),s=i(314),o=i.n(s),c=i(5),l=i(4),u=i(29),d=i(51),m=i(282),f=i.n(m),p=i(315),v=i.n(p);function h(e,t,i,n,r,a,s){try{var o=e[a](s),c=o.value}catch(e){return void i(e)}o.done?t(c):Promise.resolve(c).then(n,r)}function g(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var a=e.apply(t,i);function s(e){h(a,n,r,s,o,"next",e)}function o(e){h(a,n,r,s,o,"throw",e)}s(void 0)}))}}function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){x(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function x(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var w={name:"ImageUploader",props:{multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxFileSize:{type:Number,default:15},width:{type:Number,default:1600},height:{type:Number,default:1200}},data:function(){return{previews:[],images:[],preview:null,image:null}},computed:_(_({},Object(a.d)({loading:function(e){return e.loading}})),{},{name:function(){return this.multiple?"images[]":"image"}}),methods:{onChange:function(e){var t=this;return g(r.a.mark((function i(){var n;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if((n=e.target.files||e.dataTransfer.files).length){i.next=3;break}return i.abrupt("return",null);case 3:if(!t.multiple){i.next=8;break}return i.next=6,t.handleMultipleChange(n);case 6:i.next=10;break;case 8:return i.next=10,t.handleSingleChange(n[0]);case 10:case"end":return i.stop()}}),i)})))()},handleMultipleChange:function(e){var t=this;return g(r.a.mark((function i(){var n,a;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.processMultipleImages(e);case 2:n=Object.assign({},t.previews),a=Object.assign({},t.images),t.$emit("change",{previews:n,images:a}),t.previews=[],t.images=[];case 7:case"end":return i.stop()}}),i)})))()},handleSingleChange:function(e){var t=this;return g(r.a.mark((function i(){var n,a;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.processImage(e);case 2:n=Object.assign({},t.preview),a=Object.assign({},t.image),t.$emit("change",{preview:n,image:a}),t.preview=null,t.image=null;case 7:case"end":return i.stop()}}),i)})))()},processMultipleImages:function(e){var t=this;return g(r.a.mark((function i(){var n,a,s,o;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:n=0,a=Object.values(e);case 1:if(!(n<a.length)){i.next=11;break}return s=a[n],i.next=5,t.processImage(s);case 5:o=i.sent,t.images.push(o.image),t.previews.push(o.preview);case 8:n++,i.next=1;break;case 11:case"end":return i.stop()}}),i)})))()},processSingleImage:function(e){var t=this;return g(r.a.mark((function i(){var n;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.processImage(e);case 2:n=i.sent,t.image=n.image,t.preview=n.preview;case 5:case"end":return i.stop()}}),i)})))()},processImage:function(e){var t=this;return g(r.a.mark((function i(){return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",new Promise((function(i,n){var a=t.validate(e);a.status||(t.$emit("failed",a),n());var s=new FileReader,o={};s.onload=function(){var n=g(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={name:e.name,size:e.size,content:a.target.result},n.next=3,t.transform(e);case 3:s=n.sent,i({preview:o,image:s});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s.readAsDataURL(e)})));case 1:case"end":return i.stop()}}),i)})))()},transform:function(e){var t=this;return new Promise((function(i,n){f.a.Image(e).resize(t.width,t.height,"max").get((function(e,r){e&&n(e);var a=f.a.toDataURL(r,"image/jpeg"),s=t.dataURItoBlob(a);i(s)}))}))},addImage:function(e,t){v()(this.previews,{name:e.name,size:e.size})||this.previews.push(e)},setImage:function(e,t){this.preview=e,this.image=t},dataURItoBlob:function(e){for(var t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),r=new Uint8Array(n),a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return new Blob([n],{type:i})},validate:function(e){return e?/\.(jpe?g|png|gif)$/i.test(e.name)?e.size>1048576*this.maxFileSize?{status:!1,message:"Превышен максимально допустимый размер файла ".concat(this.maxFileSize," МБ!")}:{status:!0}:{status:!1,message:"Неправильный формат файла!"}:{status:!1,message:"Ошибка загрузки файла!"}}}},y=(i(410),i(0)),C=Object(y.a)(w,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-button"},[i("input",{ref:"fileInput",staticClass:"md-file-input",attrs:{type:"file",multiple:e.multiple,name:e.name},on:{change:e.onChange}}),e._v(" "),i("md-button",{staticClass:"md-success md-just-icon",attrs:{disabled:e.disabled||e.loading},on:{click:function(t){return e.$refs.fileInput.click()}}},[i("md-icon",[e._v("get_app")]),e._v(" "),i("md-tooltip",{attrs:{"md-direction":"right"}},[e._v("Загрузить изображения")])],1)],1)}),[],!1,null,"e06b3960",null).exports,O=i(1),$=i(12);function I(e,t,i,n,r,a,s){try{var o=e[a](s),c=o.value}catch(e){return void i(e)}o.done?t(c):Promise.resolve(c).then(n,r)}function k(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function S(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?k(Object(i),!0).forEach((function(t){j(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function j(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var D={name:"ImageEdit",components:{VSelect:u.a,ResourceImage:d.a,ImageUploader:C},mixins:[c.b,l.f,l.c,l.g],props:{id:{type:[Number,String],required:!0},result:[]},data:function(){return{storeModule:"images",responseData:!1,controlSaveVisibilities:!1,redirectRoute:{name:"cms.images"},previews:[]}},validations:{image:{touch:!1},publish:{touch:!1},topics:{touch:!1},colors:{touch:!1},interiors:{touch:!1},tags:{touch:!1},owner:{touch:!1},maxPrintWidth:{numeric:O.numeric,touch:!1},description:{touch:!1}},computed:S(S({},Object(a.d)({item:function(e){return e.images.item},image:function(e){return e.images.fields.image},publish:function(e){return e.images.fields.publish},topics:function(e){return e.images.fields.topics},colors:function(e){return e.images.fields.colors},interiors:function(e){return e.images.fields.interiors},owner:function(e){return e.images.fields.owner_id},tags:function(e){return e.images.fields.tags},maxPrintWidth:function(e){return e.images.fields.max_print_width},description:function(e){return e.images.fields.description},ownerList:function(e){return e.subCategories.itemsByType.owners},examples:function(e){return e.images.fields.examples}})),{},{topicList:function(){return this.$store.getters["categories/getItemsByType"]("topics")},colorList:function(){return this.$store.getters["categories/getItemsByType"]("colors")},interiorList:function(){return this.$store.getters["categories/getItemsByType"]("interiors")},tagList:function(){return this.$store.getters["categories/getItemsByType"]("tags")},isColorCollectionMainImage:function(){return this.item.color_collection&&this.item.id===this.item.color_collection.main_image_id}}),created:function(){var e,t=this;return(e=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.clearFieldsAction();case 2:return e.next=4,Promise.all([t.getItemAction(t.id),t.getCategoriesAction(),t.getSubcategoriesAction("owners")]).then((function(){t.setPageTitle("Изображение «".concat(t.item.article,"»")),t.responseData=!0})).then((function(){t.$v.$reset(),t.controlSaveVisibilities=!0})).catch((function(){window.history.length>1?t.$router.go(-1):t.$router.push(t.redirectRoute)}));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(n,r){var a=e.apply(t,i);function s(e){I(a,n,r,s,o,"next",e)}function o(e){I(a,n,r,s,o,"throw",e)}s(void 0)}))})()},methods:S(S({},Object(a.b)({getItemAction:"images/getItem",clearFieldsAction:"images/clearFields",getCategoriesAction:"categories/getItems",getSubcategoriesAction:"subCategories/getItemsWithType",setTableRouteDetectorFieldAction:"table/setRouteDetectorField",uploadExamplesAction:"images/uploadExamples",deleteExampleAction:"images/deleteExample"})),{},{onUpdate:function(){return this.update({sendData:{formData:{image:this.image,publish:+this.publish,topics:this.topics,colors:this.colors,interiors:this.interiors,owner_id:this.owner,max_print_width:this.maxPrintWidth,tags:this.tags,description:this.description},id:this.id},title:this.item.article,successText:"Изображение обновлено!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.item.article,alertText:"изображение «".concat(this.item.article,"»"),successText:"Изображение удалено!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},fileInputChange:function(e){var t=e.images;this.uploadExamplesAction({id:this.id,payload:t})},onExampleDelete:function(e){this.deleteExampleAction({id:this.id,example:e})},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push(this.redirectRoute)},setPreviews:function(e){o()(this.previews,e,$.h)}}),beforeRouteEnter:function(e,t,i){i((function(e){return e.setTableRouteDetectorFieldAction({field:"to",value:t.name})}))},beforeRouteLeave:function(e,t,i){this.setTableRouteDetectorFieldAction({field:"from",value:t.name}),i()}},P=(i(412),Object(y.a)(D,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.responseData?i("div",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-card",{staticClass:"mt-0"},[i("md-card-content",{staticClass:"md-between"},[i("md-button",{staticClass:"md-info md-just-icon",on:{click:e.goBack}},[i("md-icon",[e._v("arrow_back")]),e._v(" "),i("md-tooltip",{attrs:{"md-direction":"right"}},[e._v("Назад")])],1),e._v(" "),i("div",[i("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:e.controlSaveVisibilities&&e.$v.$anyDirty,expression:"controlSaveVisibilities && $v.$anyDirty"}]},[i("control-button",{attrs:{title:"Сохранить"},on:{click:e.onUpdate}})],1),e._v(" "),i("router-button-link",{attrs:{title:"Сформировать проект",icon:"shopping_cart",color:"md-warning",to:{name:"cms.store.projects.create",params:{imageId:e.item.id}}}}),e._v(" "),i("control-button",{attrs:{disabled:e.isColorCollectionMainImage,title:"Удалить",icon:"delete",color:"md-danger"},on:{click:e.onDelete}})],1)],1)],1),e._v(" "),i("progress-bar-loading")],1)]),e._v(" "),i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-100"},[i("md-card",[i("card-icon-header",{attrs:{title:"Информация и настройки",icon:"info"}}),e._v(" "),i("md-card-content",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-25 md-medium-size-50 md-small-size-100"},[i("h4",{staticClass:"card-title"},[e._v("Информация")]),e._v(" "),i("div",{staticClass:"info-item"},[i("h4",{staticClass:"card-title"},[e._v("Артикул")]),e._v(" "),i("h3",{staticClass:"info-value"},[i("small",[e._v(e._s(e.item.article))])])]),e._v(" "),i("div",{staticClass:"info-item"},[i("h4",{staticClass:"card-title"},[e._v("Форма")]),e._v(" "),i("h3",{staticClass:"info-value"},[i("small",[e._v(e._s(e.item.format))])])]),e._v(" "),i("div",{staticClass:"info-item"},[i("h4",{staticClass:"card-title"},[e._v("Лайки")]),e._v(" "),i("h3",{staticClass:"info-value"},[i("small",[e._v(e._s(e.item.likes))])])]),e._v(" "),i("div",{staticClass:"info-item"},[i("h4",{staticClass:"card-title"},[e._v("Заказы")]),e._v(" "),i("h3",{staticClass:"info-value"},[i("small",[e._v(e._s(e.item.orders))])])]),e._v(" "),i("div",{staticClass:"info-item"},[i("h4",{staticClass:"card-title"},[e._v("Ширина")]),e._v(" "),i("h3",{staticClass:"info-value"},[i("small",[e._v(e._s(e.item.width)+" px")])])]),e._v(" "),i("div",{staticClass:"info-item"},[i("h4",{staticClass:"card-title"},[e._v("Высота")]),e._v(" "),i("h3",{staticClass:"info-value"},[i("small",[e._v(e._s(e.item.height)+" px")])])])]),e._v(" "),i("div",{staticClass:"md-layout-item md-size-25 md-medium-size-50 md-small-size-100"},[i("v-image",{attrs:{name:"image",vField:e.$v.image,imgDefault:e.item.path,module:e.storeModule}})],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-50 md-medium-size-100"},[i("v-input",{attrs:{title:"Максимальная ширина печати",icon:"straighten",name:"max_print_width",value:e.maxPrintWidth,maxlength:4,vField:e.$v.maxPrintWidth,differ:!0,module:e.storeModule,vRules:{numeric:!0}}}),e._v(" "),i("v-input",{attrs:{title:"Описание",icon:"description",name:"description",value:e.description,maxlength:250,vField:e.$v.description,differ:!0,module:e.storeModule}}),e._v(" "),i("v-switch",{attrs:{vField:e.$v.publish,disabled:e.isColorCollectionMainImage,differ:!0,value:e.publish,module:e.storeModule}},[[e.isColorCollectionMainImage?i("span",[e._v("Главное изображение коллекции нельзя снять с публикации!")]):e._e()]],2)],1)])])],1)],1),e._v(" "),i("div",{staticClass:"md-layout-item md-size-100"},[e.item.color_collection?i("md-card",[i("card-icon-header",{attrs:{icon:"view_module",color:"md-card-header-cyan",title:"Коллекция"}}),e._v(" "),i("md-card-content",[e.isColorCollectionMainImage?i("h4",{staticClass:"card-title mb-0"},[e._v("Основное изображение")]):e._e(),e._v(" "),i("h3",{staticClass:"mt-0"},[i("small",[e._v(e._s(e.item.color_collection.title))])])])],1):e._e()],1),e._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-100 md-large-size-50"},[i("md-card",[i("md-card-header",{staticClass:"md-card-header-icon md-card-header-green"},[i("div",{staticClass:"card-icon"},[i("md-icon",[e._v("category")])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("Категории")])]),e._v(" "),i("md-card-content",[!e.item.color_collection&&e.topicList.length?i("v-select",{attrs:{title:"Темы",placeholder:"Выберите темы",multiple:!0,name:"topics",vField:e.$v.topics,differ:!0,value:e.topics,options:e.topicList,module:e.storeModule}}):e._e(),e._v(" "),e.colorList.length?i("v-select",{attrs:{title:"Цвета",placeholder:"Выберите цвета",multiple:!0,name:"colors",vField:e.$v.colors,differ:!0,value:e.colors,options:e.colorList,module:e.storeModule}}):e._e(),e._v(" "),!e.item.color_collection&&e.interiorList.length?i("v-select",{attrs:{title:"Интерьеры",placeholder:"Выберите интерьеры",multiple:!0,name:"interiors",vField:e.$v.interiors,differ:!0,value:e.interiors,options:e.interiorList,module:e.storeModule}}):e._e(),e._v(" "),!e.item.color_collection&&e.tagList.length?i("v-select",{attrs:{title:"Теги",placeholder:"Выберите теги",multiple:!0,name:"tags",vField:e.$v.tags,differ:!0,value:e.tags,options:e.tagList,module:e.storeModule}}):e._e(),e._v(" "),!e.item.color_collection&&e.ownerList.length?i("v-select",{attrs:{title:"Владельцы",placeholder:"Выберите владельца",name:"owner_id",vField:e.$v.owner,differ:!0,value:e.owner,options:e.ownerList,defaultValue:"",defaultTitle:"Свое",module:e.storeModule}}):e._e()],1)],1)],1),e._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-100 md-large-size-50"},[i("md-card",[i("md-card-header",{staticClass:"md-card-header-icon md-card-header-green"},[i("div",{staticClass:"card-icon"},[i("md-icon",[e._v("photo_library")])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("Фото в интерьере")])]),e._v(" "),i("md-card-content",[i("image-uploader",{attrs:{multiple:!0},on:{change:e.fileInputChange}}),e._v(" "),i("progress-bar-loading"),e._v(" "),e.examples&&e.examples.length?[i("div",{staticClass:"md-layout md-gutter mt-2"},e._l(e.examples,(function(t,n){return i("div",{key:n,staticClass:"md-layout-item md-size-33 mb-2 md-flex md-flex-column md-flex-middle",attrs:{name:t}},[i("resource-image",{staticClass:"img-raised rounded",staticStyle:{width:"200px"},attrs:{name:t,width:300}}),e._v(" "),i("control-button",{attrs:{title:"Удалить",icon:"close",color:"md-danger"},on:{click:function(i){return e.onExampleDelete(t)}}})],1)})),0)]:i("div",{staticClass:"alert alert-info mt-2"},[i("h3",[e._v("У изображения пока нет примеров. Можете загрузить!")])])],2)],1)],1)])]):e._e()}),[],!1,null,"32908e58",null));t.default=P.exports}}]);