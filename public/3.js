(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(t,e,n){var i=n(11),o=n(360);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};i(o,a);t.exports=o.locals||{}},359:function(t,e,n){"use strict";var i=n(174);n.n(i).a},360:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".ck.ck-editor__main > .ck-editor__editable {\n  height: 300px;\n}\n.ck.ck-editor__main > .ck-editor__editable:focus {\n  border: 1px solid var(--ck-color-input-border);\n  -webkit-box-shadow: var(--ck-inner-shadow), 0 0;\n          box-shadow: var(--ck-inner-shadow), 0 0;\n  outline: none;\n}\n.ck input.ck-input.ck-input-text:focus {\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return v}));var i=n(17),o=n.n(i),a=n(53),r=n.n(a);function s(t,e,n,i,o,a,r){try{var s=t[a](r),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,o)}var c={methods:{create:function(t){var e=this,n=t.sendData,i=t.title,o=t.successText,a=t.redirectRoute,s=t.storeModule,c=void 0===s?null:s,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u,"store"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(a),r.a.fire({title:o,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},u={methods:{update:function(t){var e=this,n=t.sendData,i=t.title,o=t.redirectRoute,a=t.successText,s=t.storeModule,c=void 0===s?null:s,u=c?"".concat(c,"/"):"";return this.$store.dispatch("".concat(u,"update"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(o),r.a.fire({title:a,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},l={methods:{delete:function(t){var e=this,n=t.payload,i=t.title,o=t.alertText,a=t.successText,r=t.storeModule,s=void 0===r?null:r,c=t.redirectRoute,u=void 0===c?null:c,l=t.tableMode,d=void 0!==l&&l,h=t.force,p=void 0!==h&&h,v=s?"".concat(s,"/"):"",g=p?"forceDelete":"delete";return f(o).then((function(t){if(t.value)return e.$store.dispatch("".concat(v).concat(g),{payload:n,tableMode:d}).then((function(){return u&&(window.history.length>1?e.$router.go(-1):e.$router.push(u)),m(a,i)}))}))}}},d={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,i=t.index,o=t.alertText,a=t.successText,r=t.storeModule,s=void 0===r?null:r;return f(o).then((function(t){if(t.value)return e.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:n,index:i}).then((function(){return m(a,i)}))}))}}},f=function(t){return r.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},m=function(t,e){return r.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},h={methods:{upload:function(t){var e,n=this;return(e=o.a.mark((function e(){var i,a,s,c,u,l,d,f,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.uploadFiles,a=t.type,s=void 0===a?null:a,c=t.id,u=void 0===c?null:c,l=t.storeModule,d=void 0===l?null:l,f=Array.from(i),m=d||"categories",!u){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(m,"/uploadImages"),{files:f,id:u,type:s});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",f);case 10:return e.next=12,r.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function r(t){s(a,i,o,r,c,"next",t)}function c(t){s(a,i,o,r,c,"throw",t)}r(void 0)}))})()}}},p={methods:{addImages:function(t){var e=this,n=t.id,i=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:i}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),r.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},v={methods:{addImages:function(t){var e=this,n=t.type,i=t.id,o=t.data,a=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:i,data:o}).then((function(){return e.$router.push(a),r.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},54:function(t,e,n){"use strict";var i=n(2),o=n(3),a=n(82),r=n(70),s=n(6),c=n(4);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={name:"PageLayout",components:{Tabs:a.a,"text-editor":r.a},mixins:[c.f,s.b],props:{pageId:{type:Number,default:1}},data:function(){return{activeTab:"",redirectRoute:"/cms/pages",responseData:!1,storeModule:"pages"}},validations:{fields:{title:{required:o.required,touch:!1,minLength:Object(o.minLength)(2),isUnique:function(t){return""===t.trim()&&!this.$v.fields.title.$dirty||this.isUniqueTitle}},image:{touch:!1},content:{touch:!1},meta_title:{touch:!1},description:{touch:!1},keywords:{touch:!1}}},computed:l(l({},Object(i.d)({fields:function(t){return t.pages.fields},item:function(t){return t.pages.item}})),{},{isUniqueTitle:function(){return this.$store.getters["pages/isUniqueTitle"](this.fields.title,this.item.id)}}),created:function(){var t=this;this.$route.params.activeTab&&(this.activeTab=this.$route.params.activeTab),Promise.all([this.getItemAction(this.pageId),this.getItemsAction()]).then((function(){t.setPageTitle(t.fields.title),t.responseData=!0})).catch((function(){return t.$router.push(t.redirectRoute)}))},methods:l(l({},Object(i.b)("pages",{getItemAction:"getItem",getItemsAction:"getItems",deleteImageAction:"deleteImage"})),{},{onUpdate:function(){return this.update({sendData:{id:this.item.id,formData:{title:this.fields.title,content:this.fields.content,image:this.fields.image,meta_title:this.fields.meta_title,description:this.fields.description,keywords:this.fields.keywords}},title:this.fields.title,successText:"Страница обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},handleDeleteImage:function(){this.deleteImageAction(this.item.id)}})},m=n(0),h=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{route:"cms.pages",title:"В панель страниц"}}),t._v(" "),n("div",[n("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:t.$v.$anyDirty&&!t.$v.$invalid,expression:"$v.$anyDirty && !$v.$invalid"}]},[n("control-button",{attrs:{title:"Сохранить"},on:{click:t.onUpdate}})],1)],1)],1)],1),t._v(" "),n("div",[n("tabs",{attrs:{"tab-name":["Основные настройки","Модули","SEO"],activeTab:t.activeTab,"color-button":"success"}},[n("template",{slot:"tab-pane-1"},[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("v-input",{attrs:{title:"Заголовок",icon:"title",name:"title",value:t.fields.title,vField:t.$v.fields.title,differ:!0,maxlength:70,module:t.storeModule,vRules:{required:!0,unique:!0,minLength:!0}}}),t._v(" "),n("v-image",{attrs:{name:"image",imgDefault:t.item.image_path,vField:t.$v.fields.image,withDelete:!0,module:t.storeModule},on:{delete:t.handleDeleteImage}}),t._v(" "),n("text-editor",{attrs:{title:"Контент",name:"content",value:t.fields.content,vField:t.$v.fields.content,differ:!0,module:t.storeModule}})],1)])]),t._v(" "),n("template",{slot:"tab-pane-2"},[t._t("modules")],2),t._v(" "),n("template",{slot:"tab-pane-3"},[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("v-input",{attrs:{title:"Мета заголовок",icon:"title",name:"meta_title",value:t.fields.meta_title,vField:t.$v.fields.meta_title,differ:!0,maxlength:150,module:t.storeModule}}),t._v(" "),n("v-input",{attrs:{title:"Описание",icon:"description",name:"description",value:t.fields.description,vField:t.$v.fields.description,differ:!0,maxlength:250,module:t.storeModule}}),t._v(" "),n("v-input",{attrs:{title:"Ключевые слова",icon:"vpn_key",name:"keywords",value:t.fields.keywords,vField:t.$v.fields.keywords,differ:!0,maxlength:150,module:t.storeModule}}),t._v(" "),n("div",{staticClass:"space-30"})],1)])])],2)],1)],1)])]):t._e()}),[],!1,null,null,null);e.a=h.exports},70:function(t,e,n){"use strict";var i=n(278),o=n(274),a=n(277),r=n(285),s=n(286),c=n(279),u=n(281),l=n(8),d=n(21),f=n(273);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(a,t);var e,n,i,o=g(a);function a(){return h(this,a),o.apply(this,arguments)}return e=a,(n=[{key:"init",value:function(){var t=this.editor;t.ui.componentFactory.add("insertImage",(function(e){var n=new d.a(e);return n.set({label:"Insert image",icon:f.a,tooltip:!0}),n.on("execute",(function(){var e=prompt("Image URL");t.model.change((function(n){var i=n.createElement("image",{src:e});t.model.insertContent(i,t.model.document.selection)}))})),n}))}}])&&p(e.prototype,n),i&&p(e,i),a}(l.a),_=n(276),x=n(282),k=n(280),$=n(283),O=n(284),I=n(275),P=n(132),C={props:{title:{type:String,default:"Описание"},value:{type:String},name:{type:String,default:"description"},vField:{type:Object,default:null},module:{type:String,default:null},differ:{type:Boolean,default:!1}},data:function(){return{editor:o.a,editorConfig:{plugins:[a.a,w,r.a,s.a,c.a,u.a,_.a,$.a,O.a,I.a,P.a,k.a,x.a,i.a],toolbar:{items:["heading","|","bold","italic","bulletedList","numberedList","|","link","insertImage","|","undo","redo","|","mediaEmbed"]},image:{toolbar:["imageTextAlternative","|","imageStyle:alignLeft","imageStyle:full","imageStyle:alignRight"],styles:["full","alignLeft","alignRight"]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},mediaEmbed:{previewsInData:!0}},valueReference:""}},computed:{storeModule:function(){return this.module?"".concat(this.module,"/"):""}},methods:{onInput:function(t){this.vField&&this.touched(this.vField,t),this.$store.dispatch("".concat(this.storeModule,"setItemField"),{field:this.name,value:t.trim()})},isDiffer:function(t,e){return t!==e},touchedDifferent:function(t,e){this.isDiffer(e,this.valueReference)?t.$touch():t.$reset()},touched:function(t,e){this.differ?this.touchedDifferent(t,e):t.$touch()}},created:function(){this.valueReference=this.value}},T=(n(359),n(0)),j=Object(T.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig,value:t.value},on:{input:t.onInput}})],1)}),[],!1,null,null,null);e.a=j.exports},82:function(t,e,n){"use strict";var i={props:{flexColumn:Boolean,navPillsIcons:Boolean,plain:Boolean,tabName:Array,tabIcon:Array,colorButton:{type:String,default:""},activeTab:{type:String,default:""}},data:function(){return{activePanel:""}},methods:{switchPanel:function(t){this.activePanel=t},isActivePanel:function(t){return this.activePanel===t},getColorButton:function(t){return"md-"+t},getTabContent:function(t){return"tab-pane-"+t}},created:function(){this.activePanel=this.activeTab?this.activeTab:this.tabName[0]}},o=n(0),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",{staticClass:"md-card-tabs",class:[{"flex-column":t.flexColumn},{"nav-pills-icons":t.navPillsIcons},{"md-card-plain":t.plain}]},[n("md-card-header",[t._t("header-title")],2),t._v(" "),n("md-card-content",[n("md-list",{staticClass:"nav-tabs"},t._l(t.tabName,(function(e,i){var o;return n("md-list-item",{key:e,class:[{active:t.isActivePanel(t.tabName[i])},(o={},o[t.getColorButton(t.colorButton)]=t.isActivePanel(t.tabName[i]),o)],on:{click:function(e){return t.switchPanel(t.tabName[i])}}},[t._v("\n                "+t._s(t.tabName[i])+"\n                "),t.navPillsIcons?n("md-icon",[t._v(t._s(t.tabIcon[i]))]):t._e()],1)})),1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{staticClass:"tab-content"},[t._l(t.tabName,(function(e,i){return[t.isActivePanel(t.tabName[i])?[n("div",{key:e,class:t.getTabContent(i+1)},[t._t(t.getTabContent(i+1),[t._v("\n                                This is the default text!\n                            ")])],2)]:t._e()]}))],2)])],1)],1)}),[],!1,null,null,null);e.a=a.exports}}]);