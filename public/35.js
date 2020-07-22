(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{112:function(t,e,i){"use strict";var n=i(89),r=i.n(n),a=i(49),o=r()((function(t){return t()}),300),s={name:"VDatepicker",components:{InputNotificationRequire:a.g,InputNotificationNum:a.f},props:{name:{type:String,default:"date"},title:{type:String,default:"Дата"},vField:{type:Object,required:!0},vRules:{type:Object,default:null},value:{type:[String,Number],default:null},module:{type:String,default:null},differ:{type:Boolean,default:!1},modelType:{type:String,default:"date"}},data:function(){return{selectedDate:null,referenceValue:null}},computed:{storeModule:function(){return this.module?"".concat(this.module,"/"):""},mdType:function(){switch(this.modelType){case"date":return Date;case"string":return String;case"number":return Number}}},watch:{selectedDate:function(){o(this.changeDate)}},created:function(){this.value&&(this.referenceValue=this.value,this.selectedDate=this.value),this.$material.locale.firstDayOfAWeek=1,this.$material.locale.dateFormat="dd.MM.yyyy"},methods:{changeDate:function(){var t=this,e=this.selectedDate;this.$store.dispatch("".concat(this.storeModule,"setItemField"),{field:this.name,value:e}).then((function(){t.vField&&t.touched(t.vField,e)}))},touched:function(t,e){this.differ?this.touchedDifferent(t,e):t.$touch()},touchedDifferent:function(t,e){this.isDiffer(e,this.referenceValue)?t.$touch():t.$reset()},isDiffer:function(t,e){return t!=e}}},u=i(0),l=Object(u.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"form-group"},[i("md-datepicker",{class:[{"md-error":t.vField.$error},{"md-valid":!t.vField.$invalid}],attrs:{"md-model-type":t.mdType,"md-immediately":"","md-debounce":0},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}}),t._v(" "),t.vRules&&t.vField.$error?i("div",{staticClass:"under-input-notice"},[!t.vField.required&&t.vRules.required?i("input-notification-require",{attrs:{name:t.title}}):!t.vField.numeric&&t.vRules.numeric?i("input-notification-num",{attrs:{name:t.title}}):t._e()],1):t._e()],1)])}),[],!1,null,null,null);e.a=l.exports},171:function(t,e,i){var n=i(11),r=i(352);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);t.exports=r.locals||{}},174:function(t,e,i){var n=i(11),r=i(360);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);t.exports=r.locals||{}},200:function(t,e,i){var n=i(11),r=i(479);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);t.exports=r.locals||{}},201:function(t,e,i){var n=i(11),r=i(481);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);t.exports=r.locals||{}},27:function(t,e,i){"use strict";var n={name:"ThumbTableCell",components:{ResourceImage:i(178).a},props:{path:{type:String,required:!0},width:{type:Number,default:100}}},r=(i(351),i(0)),a=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.path?e("div",[e("resource-image",{staticClass:"md-table-thumb img-raised rounded",style:"width: "+this.width+"px; height: "+.6*this.width+"px",attrs:{src:this.path,width:2*this.width}})],1):this._e()}),[],!1,null,"b88a2e3a",null);e.a=a.exports},351:function(t,e,i){"use strict";var n=i(171);i.n(n).a},352:function(t,e,i){(t.exports=i(16)(!1)).push([t.i,"\n.img-raised[data-v-b88a2e3a] {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n",""])},357:function(t,e,i){var n=i(90);t.exports=function(){return n.Date.now()}},358:function(t,e,i){var n=i(130),r=i(131),a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=s.test(t);return i||u.test(t)?l(t.slice(2),i?2:8):o.test(t)?NaN:+t}},359:function(t,e,i){"use strict";var n=i(174);i.n(n).a},360:function(t,e,i){(t.exports=i(16)(!1)).push([t.i,".ck.ck-editor__main > .ck-editor__editable {\n  height: 300px;\n}\n.ck.ck-editor__main > .ck-editor__editable:focus {\n  border: 1px solid var(--ck-color-input-border);\n  -webkit-box-shadow: var(--ck-inner-shadow), 0 0;\n          box-shadow: var(--ck-inner-shadow), 0 0;\n  outline: none;\n}\n.ck input.ck-input.ck-input-text:focus {\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}",""])},4:function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"f",(function(){return l})),i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return d})),i.d(e,"g",(function(){return m})),i.d(e,"d",(function(){return p})),i.d(e,"e",(function(){return v}));var n=i(17),r=i.n(n),a=i(52),o=i.n(a);function s(t,e,i,n,r,a,o){try{var s=t[a](o),u=s.value}catch(t){return void i(t)}s.done?e(u):Promise.resolve(u).then(n,r)}var u={methods:{create:function(t){var e=this,i=t.sendData,n=t.title,r=t.successText,a=t.redirectRoute,s=t.storeModule,u=void 0===s?null:s,l=u?"".concat(u,"/"):"";return this.$store.dispatch("".concat(l,"store"),i).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(a),o.a.fire({title:r,text:"«".concat(n,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{update:function(t){var e=this,i=t.sendData,n=t.title,r=t.redirectRoute,a=t.successText,s=t.storeModule,u=void 0===s?null:s,l=u?"".concat(u,"/"):"";return this.$store.dispatch("".concat(l,"update"),i).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(r),o.a.fire({title:a,text:"«".concat(n,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},c={methods:{delete:function(t){var e=this,i=t.payload,n=t.title,r=t.alertText,a=t.successText,o=t.storeModule,s=void 0===o?null:o,u=t.redirectRoute,l=void 0===u?null:u,c=t.tableMode,d=void 0!==c&&c,m=t.force,p=void 0!==m&&m,v=s?"".concat(s,"/"):"",g=p?"forceDelete":"delete";return f(r).then((function(t){if(t.value)return e.$store.dispatch("".concat(v).concat(g),{payload:i,tableMode:d}).then((function(){return l&&(window.history.length>1?e.$router.go(-1):e.$router.push(l)),h(a,n)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,i=t.id,n=t.index,r=t.alertText,a=t.successText,o=t.storeModule,s=void 0===o?null:o;return f(r).then((function(t){if(t.value)return e.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:i,index:n}).then((function(){return h(a,n)}))}))}}},f=function(t){return o.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},h=function(t,e){return o.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},m={methods:{upload:function(t){var e,i=this;return(e=r.a.mark((function e(){var n,a,s,u,l,c,d,f,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.uploadFiles,a=t.type,s=void 0===a?null:a,u=t.id,l=void 0===u?null:u,c=t.storeModule,d=void 0===c?null:c,f=Array.from(n),h=d||"categories",!l){e.next=8;break}return e.next=6,i.$store.dispatch("".concat(h,"/uploadImages"),{files:f,id:l,type:s});case 6:e.next=10;break;case 8:return e.next=10,i.$store.dispatch("images/store",f);case 10:return e.next=12,o.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(n,r){var a=e.apply(t,i);function o(t){s(a,n,r,o,u,"next",t)}function u(t){s(a,n,r,o,u,"throw",t)}o(void 0)}))})()}}},p={methods:{addImages:function(t){var e=this,i=t.id,n=t.data;this.$store.dispatch("categories/addSelectedImages",{id:i,data:n}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:i}}),o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},v={methods:{addImages:function(t){var e=this,i=t.type,n=t.id,r=t.data,a=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:i,id:n,data:r}).then((function(){return e.$router.push(a),o.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},46:function(t,e,i){"use strict";var n={name:"VSelect",props:{title:{type:String},name:{type:String,required:!0},vField:{type:Object,default:null},placeholder:{type:String},options:{type:Array,required:!0},value:{type:[Array,Number,String],default:null},multiple:{type:Boolean,default:!1},defaultValue:{type:[Array,Number,String,Object],default:null},defaultTitle:{type:String,default:"Нет"},nameField:{type:String,default:"title"},indexName:{type:[String,Number],default:"id"},module:{type:String,default:null},differ:{type:Boolean,default:!1}},data:function(){return{valueReference:null}},computed:{storeModule:function(){return this.module?"".concat(this.module,"/"):""}},methods:{onSelect:function(t){this.vField&&this.touched(this.vField,t),this.$store.dispatch("".concat(this.storeModule,"setItemField"),{field:this.name,value:t})},isDiffer:function(t,e){return this.multiple?!!t.filter((function(t){return!e.includes(t)})).concat(e.filter((function(e){return!t.includes(e)}))).length:t!=e},touchedDifferent:function(t,e){this.isDiffer(e,this.valueReference)?t.$touch():t.$reset()},touched:function(t,e){this.differ?this.touchedDifferent(t,e):t.$touch()}},created:function(){this.valueReference=this.value instanceof Array?this.value.slice(0):this.value}},r=i(0),a=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),i("md-field",[i("label",[t._v(t._s(t.placeholder))]),t._v(" "),i("md-select",{attrs:{value:t.value,multiple:t.multiple},on:{"md-selected":t.onSelect}},[null!==t.defaultValue?i("md-option",{attrs:{value:t.defaultValue}},[t._v(t._s(t.defaultTitle))]):t._e(),t._v(" "),t._l(t.options,(function(e,n){return i("md-option",{key:n,attrs:{value:e[t.indexName]}},[t._v("\n                "+t._s(e[t.nameField])+"\n            ")])}))],2)],1)],1)}),[],!1,null,null,null);e.a=a.exports},478:function(t,e,i){"use strict";var n=i(200);i.n(n).a},479:function(t,e,i){(t.exports=i(16)(!1)).push([t.i,".md-progress-bar__container[data-v-93cad55e] {\n  height: 4px;\n}",""])},480:function(t,e,i){"use strict";var n=i(201);i.n(n).a},481:function(t,e,i){(t.exports=i(16)(!1)).push([t.i,".text-editor .ck.ck-editor__main > .ck-editor__editable {\n  height: 700px !important;\n}",""])},640:function(t,e,i){"use strict";i.r(e);var n=i(2),r=i(3),a=i(82),o=i(112),s=i(46),u=i(4),l=i(27);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){f(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h={name:"PostImageList",mixins:[u.b,u.g],components:{ThumbTableCell:l.a},props:{id:{type:[Number,String],required:!0},images:{type:Array,default:function(){return[]}}},data:function(){return{storeModule:"posts"}},computed:d(d({},Object(n.d)({fileProgress:function(t){return t.images.fileProgress},settings:function(t){return t.settings.entries}})),{},{baseUrl:function(){switch(this.$config.IMAGE_PROVIDER){case"local":return this.$config.LOCAL_IMAGE_API_ENDPOINT;case"s3":return this.$config.S3_IMAGE_API_ENDPOINT}},transformationPath:function(){switch(this.$config.IMAGE_PROVIDER){case"local":return"/widen/1000";case"s3":return"/fit-in/1000x3000"}}}),created:function(){this.getSettingEntriesAction()},methods:d(d({},Object(n.b)({getSettingEntriesAction:"settings/getEntries"})),{},{fileInputChange:function(t){this.upload({uploadFiles:t.target.files,id:this.id,storeModule:this.storeModule})},onDelete:function(t){this.deleteImageByIndex({id:this.id,index:t.index,alertText:"изображение «".concat(t.index,"»"),successText:"Изображение удалено!",storeModule:this.storeModule})},getImagePath:function(t){switch(this.$config.IMAGE_PROVIDER){case"local":return"/".concat(t);case"s3":return"/".concat(t.slice(0,1),"/").concat(t.slice(0,3),"/").concat(t)}}})},m=(i(478),i(0)),p=Object(m.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"md-between mt-3"},[i("h4",[t._v("Изображения контента")]),t._v(" "),i("upload-button",{on:{change:t.fileInputChange}})],1),t._v(" "),i("div",{staticClass:"md-layout-item md-progress-bar__container mb-1"},[t.fileProgress?i("md-progress-bar",{staticClass:"md-info",attrs:{"md-mode":"indeterminate","md-value":t.fileProgress}}):t._e()],1),t._v(" "),t.images.length?i("md-table",{staticClass:"paginated-table table-striped table-hover",attrs:{value:t.images},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var n=e.item;return i("md-table-row",{},[t._t("first-column",[i("md-table-cell",{staticStyle:{width:"50px"},attrs:{"md-label":"#","md-sort-by":"id"}},[t._v("\n                    "+t._s(n.index)+"\n                ")])],{item:n}),t._v(" "),i("md-table-cell",{attrs:{"md-label":"Превью"}},[i("thumb-table-cell",{attrs:{width:150,path:n.path}})],1),t._v(" "),i("md-table-cell",{attrs:{"md-label":"URL"}},[t._v("\n                "+t._s(t.baseUrl)+t._s(t.transformationPath)+t._s(t.getImagePath(n.path))+"\n            ")]),t._v(" "),i("md-table-cell",{attrs:{"md-label":"Действия"}},[i("div",{staticClass:"table-actions"},[i("control-button",{attrs:{title:"Удалить",icon:"delete",color:"md-danger"},on:{click:function(e){return t.onDelete(n)}}})],1)])],2)}}],null,!0)}):[i("div",{staticClass:"alert alert-info"},[i("span",[i("h3",[t._v("В статье еще нет изображений! Загрузите их!")])])])]],2)}),[],!1,null,"93cad55e",null).exports,v=i(70),g=i(6),b=i(56);function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){w(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var x={name:"PostEdit",components:{Tabs:a.a,VDatepicker:o.a,VSelect:s.a,ImageList:p,"text-editor":v.a},mixins:[g.b,u.f,u.c],props:{id:{type:[Number,String],required:!0}},data:function(){return{responseData:!1,controlSaveVisibilities:!1,storeModule:"posts",redirectRoute:{name:"cms.pages.blog",params:{activeTab:"Модули",activePostTab:b.a.defaultPostType.title}}}},validations:{title:{required:r.required,touch:!1,minLength:Object(r.minLength)(2)},alias:{required:r.required,testAlias:function(t){return""===t.trim()||this.$config.ALIAS_REGEXP.test(t)},minLength:Object(r.minLength)(2),isUnique:function(t){return""===t.trim()&&!this.$v.alias.$dirty||this.isUniqueAlias},touch:!1},image:{touch:!1},date:{numeric:r.numeric,required:r.required,touch:!1},type:{required:r.required,touch:!1},content:{required:r.required,touch:!1},intro:{touch:!1},meta_title:{touch:!1},description:{touch:!1},keywords:{touch:!1}},computed:_(_({},Object(n.d)("posts",{title:function(t){return t.fields.title},alias:function(t){return t.fields.alias},date:function(t){return t.fields.date},intro:function(t){return t.fields.intro},type:function(t){return t.fields.type},image:function(t){return t.fields.image},imagePath:function(t){return t.fields.image_path},content:function(t){return t.fields.content},images:function(t){return t.fields.images},metaTitle:function(t){return t.fields.meta_title},description:function(t){return t.fields.description},keywords:function(t){return t.fields.keywords}})),{},{isUniqueAlias:function(){return this.$store.getters["posts/isUniqueAliasEdit"](this.alias,this.id)}}),created:function(){var t=this,e=this.$route.params.activePostTab;e&&this.$set(this.redirectRoute.params,"activePostTab",this.getTabTitle(e)),this.clearFieldsAction(),Promise.all([this.getItemAction(this.id),this.getItemsAction()]).then((function(){t.setPageTitle("Статья «".concat(t.title,"»")),t.responseData=!0})).then((function(){t.$v.$reset(),t.controlSaveVisibilities=!0})).catch((function(){return t.$route.push(t.redirectRoute)}))},methods:_(_({},Object(n.b)("posts",{getItemAction:"getItem",getItemsAction:"getItems",clearFieldsAction:"clearItemFields"})),{},{onUpdate:function(){return this.update({sendData:{formData:{title:this.title,date:this.date,alias:this.alias,intro:this.intro,type:this.type,image:this.image,content:this.content,meta_title:this.metaTitle,description:this.description,keywords:this.keywords},id:this.id},title:this.title,successText:"Статья обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){this.delete({payload:this.id,title:this.title,alertText:"статью «".concat(this.title,"»"),successText:"Статья удалена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},getTabTitle:function(t){var e=b.a.postTypes.find((function(e){return e.index===t}));return e?e.title:b.a.defaultPostType.title}})},$=(i(480),Object(m.a)(x,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.responseData?i("div",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-card",[i("md-card-content",{staticClass:"md-between"},[i("router-button-link",{attrs:{route:t.redirectRoute.name,params:t.redirectRoute.params,title:"Назад"}}),t._v(" "),i("div",[i("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:t.controlSaveVisibilities&&t.$v.$anyDirty&&!t.$v.$invalid,expression:"controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"}]},[i("control-button",{on:{click:t.onUpdate}})],1),t._v(" "),i("control-button",{attrs:{title:"Удалить",icon:"delete",color:"md-danger"},on:{click:t.onDelete}})],1)],1)],1),t._v(" "),i("tabs",{attrs:{"tab-name":["Установки","SEO"],"color-button":"success"}},[i("template",{slot:"tab-pane-1"},[i("v-input",{attrs:{title:"Заголовок",icon:"title",name:"title",value:t.title,vDelay:!0,differ:!0,module:t.storeModule,vField:t.$v.title,vRules:{required:!0,minLength:!0}}}),t._v(" "),i("v-input",{attrs:{title:"Алиас",icon:"code",name:"alias",value:t.alias,differ:!0,vDelay:!0,vField:t.$v.alias,module:t.storeModule,vRules:{required:!0,unique:!0,minLength:!0,alias:!0}}}),t._v(" "),i("VDatepicker",{attrs:{vField:t.$v.date,modelType:"number",value:t.date,differ:!0,vRules:{required:!0},module:t.storeModule}}),t._v(" "),i("v-input",{attrs:{title:"Интро",icon:"subject",name:"intro",value:t.intro,differ:!0,maxlength:250,module:t.storeModule,vField:t.$v.intro}}),t._v(" "),i("v-image",{attrs:{title:"Основное изображение",name:"image",imgDefault:t.imagePath,vField:t.$v.image,vRules:{required:!0},module:t.storeModule}}),t._v(" "),i("v-select",{attrs:{title:"Типы",placeholder:"Выберите тип статьи",name:"type",indexName:"index",nameField:"title",differ:!0,value:t.type,vField:t.$v.type,vRules:{required:!0},options:t.$config.postTypes,module:t.storeModule}}),t._v(" "),i("ImageList",{attrs:{id:this.id,images:t.images}}),t._v(" "),i("text-editor",{staticClass:"text-editor",attrs:{title:"Контент",name:"content",value:t.content,differ:!0,vField:t.$v.content,vRules:{required:!0},module:t.storeModule}})],1),t._v(" "),i("template",{slot:"tab-pane-2"},[i("v-input",{attrs:{title:"Мета заголовок",icon:"title",name:"meta_title",value:t.metaTitle,differ:!0,maxlength:150,module:t.storeModule,vField:t.$v.meta_title}}),t._v(" "),i("v-input",{attrs:{title:"Описание",icon:"description",name:"description",value:t.description,differ:!0,vField:t.$v.description,maxlength:250,module:t.storeModule}}),t._v(" "),i("v-input",{attrs:{title:"Ключевые слова",icon:"vpn_key",name:"keywords",value:t.keywords,differ:!0,vField:t.$v.keywords,maxlength:150,module:t.storeModule}}),t._v(" "),i("div",{staticClass:"space-20"})],1)],2)],1)])]):t._e()}),[],!1,null,null,null));e.default=$.exports},70:function(t,e,i){"use strict";var n=i(278),r=i(274),a=i(277),o=i(285),s=i(286),u=i(279),l=i(281),c=i(8),d=i(21),f=i(273);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=y(t);if(e){var r=y(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return b(this,i)}}function b(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(a,t);var e,i,n,r=g(a);function a(){return m(this,a),r.apply(this,arguments)}return e=a,(i=[{key:"init",value:function(){var t=this.editor;t.ui.componentFactory.add("insertImage",(function(e){var i=new d.a(e);return i.set({label:"Insert image",icon:f.a,tooltip:!0}),i.on("execute",(function(){var e=prompt("Image URL");t.model.change((function(i){var n=i.createElement("image",{src:e});t.model.insertContent(n,t.model.document.selection)}))})),i}))}}])&&p(e.prototype,i),n&&p(e,n),a}(c.a),w=i(276),x=i(282),$=i(280),O=i(283),P=i(284),D=i(275),T=i(132),k={props:{title:{type:String,default:"Описание"},value:{type:String},name:{type:String,default:"description"},vField:{type:Object,default:null},module:{type:String,default:null},differ:{type:Boolean,default:!1}},data:function(){return{editor:r.a,editorConfig:{plugins:[a.a,_,o.a,s.a,u.a,l.a,w.a,O.a,P.a,D.a,T.a,$.a,x.a,n.a],toolbar:{items:["heading","|","bold","italic","bulletedList","numberedList","|","link","insertImage","|","undo","redo","|","mediaEmbed"]},image:{toolbar:["imageTextAlternative","|","imageStyle:alignLeft","imageStyle:full","imageStyle:alignRight"],styles:["full","alignLeft","alignRight"]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},mediaEmbed:{previewsInData:!0}},valueReference:""}},computed:{storeModule:function(){return this.module?"".concat(this.module,"/"):""}},methods:{onInput:function(t){this.vField&&this.touched(this.vField,t),this.$store.dispatch("".concat(this.storeModule,"setItemField"),{field:this.name,value:t.trim()})},isDiffer:function(t,e){return t!==e},touchedDifferent:function(t,e){this.isDiffer(e,this.valueReference)?t.$touch():t.$reset()},touched:function(t,e){this.differ?this.touchedDifferent(t,e):t.$touch()}},created:function(){this.valueReference=this.value}},I=(i(359),i(0)),S=Object(I.a)(k,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),i("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig,value:t.value},on:{input:t.onInput}})],1)}),[],!1,null,null,null);e.a=S.exports},82:function(t,e,i){"use strict";var n={props:{flexColumn:Boolean,navPillsIcons:Boolean,plain:Boolean,tabName:Array,tabIcon:Array,colorButton:{type:String,default:""},activeTab:{type:String,default:""}},data:function(){return{activePanel:""}},methods:{switchPanel:function(t){this.activePanel=t},isActivePanel:function(t){return this.activePanel===t},getColorButton:function(t){return"md-"+t},getTabContent:function(t){return"tab-pane-"+t}},created:function(){this.activePanel=this.activeTab?this.activeTab:this.tabName[0]}},r=i(0),a=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("md-card",{staticClass:"md-card-tabs",class:[{"flex-column":t.flexColumn},{"nav-pills-icons":t.navPillsIcons},{"md-card-plain":t.plain}]},[i("md-card-header",[t._t("header-title")],2),t._v(" "),i("md-card-content",[i("md-list",{staticClass:"nav-tabs"},t._l(t.tabName,(function(e,n){var r;return i("md-list-item",{key:e,class:[{active:t.isActivePanel(t.tabName[n])},(r={},r[t.getColorButton(t.colorButton)]=t.isActivePanel(t.tabName[n]),r)],on:{click:function(e){return t.switchPanel(t.tabName[n])}}},[t._v("\n                "+t._s(t.tabName[n])+"\n                "),t.navPillsIcons?i("md-icon",[t._v(t._s(t.tabIcon[n]))]):t._e()],1)})),1),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("div",{staticClass:"tab-content"},[t._l(t.tabName,(function(e,n){return[t.isActivePanel(t.tabName[n])?[i("div",{key:e,class:t.getTabContent(n+1)},[t._t(t.getTabContent(n+1),[t._v("\n                                This is the default text!\n                            ")])],2)]:t._e()]}))],2)])],1)],1)}),[],!1,null,null,null);e.a=a.exports},89:function(t,e,i){var n=i(130),r=i(357),a=i(358),o=Math.max,s=Math.min;t.exports=function(t,e,i){var u,l,c,d,f,h,m=0,p=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var i=u,n=l;return u=l=void 0,m=e,d=t.apply(n,i)}function y(t){return m=t,f=setTimeout(w,e),p?b(t):d}function _(t){var i=t-h;return void 0===h||i>=e||i<0||v&&t-m>=c}function w(){var t=r();if(_(t))return x(t);f=setTimeout(w,function(t){var i=e-(t-h);return v?s(i,c-(t-m)):i}(t))}function x(t){return f=void 0,g&&u?b(t):(u=l=void 0,d)}function $(){var t=r(),i=_(t);if(u=arguments,l=this,h=t,i){if(void 0===f)return y(h);if(v)return clearTimeout(f),f=setTimeout(w,e),b(h)}return void 0===f&&(f=setTimeout(w,e)),d}return e=a(e)||0,n(i)&&(p=!!i.leading,c=(v="maxWait"in i)?o(a(i.maxWait)||0,e):c,g="trailing"in i?!!i.trailing:g),$.cancel=function(){void 0!==f&&clearTimeout(f),m=0,u=h=l=f=void 0},$.flush=function(){return void 0===f?d:x(r())},$}}}]);