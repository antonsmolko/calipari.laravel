(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{174:function(t,e,n){var i=n(10),r=n(361);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);t.exports=r.locals||{}},203:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var i={methods:{onPublishChange:function(){this.$v.publish.$touch(),this.$store.dispatch("".concat(this.storeModule,"/togglePublishField"))}}},r={methods:{onPublishChange:function(){this.$store.dispatch("".concat(this.storeModule,"/togglePublishField"))}}}},360:function(t,e,n){"use strict";var i=n(174);n.n(i).a},361:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".ck.ck-editor__main > .ck-editor__editable {\n  height: 300px;\n}\n.ck.ck-editor__main > .ck-editor__editable:focus {\n  border: 1px solid var(--ck-color-input-border);\n  -webkit-box-shadow: var(--ck-inner-shadow), 0 0;\n          box-shadow: var(--ck-inner-shadow), 0 0;\n  outline: none;\n}\n.ck input.ck-input.ck-input-text:focus {\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}",""])},4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"g",(function(){return m})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return v}));var i=n(17),r=n.n(i),o=n(42),a=n.n(o);function s(t,e,n,i,r,o,a){try{var s=t[o](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(i,r)}var u={methods:{create:function(t){var e=this,n=t.sendData,i=t.title,r=t.successText,o=t.redirectRoute,s=t.storeModule,u=void 0===s?null:s,c=u?"".concat(u,"/"):"";return this.$store.dispatch("".concat(c,"store"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(o),a.a.fire({title:r,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},c={methods:{update:function(t){var e=this,n=t.sendData,i=t.title,r=t.redirectRoute,o=t.successText,s=t.storeModule,u=void 0===s?null:s,c=u?"".concat(u,"/"):"";return this.$store.dispatch("".concat(c,"update"),n).then((function(){return window.history.length>1?e.$router.go(-1):e.$router.push(r),a.a.fire({title:o,text:"«".concat(i,"»"),timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},d={methods:{delete:function(t){var e=this,n=t.payload,i=t.title,r=t.alertText,o=t.successText,a=t.storeModule,s=void 0===a?null:a,u=t.redirectRoute,c=void 0===u?null:u,d=t.tableMode,l=void 0!==d&&d,m=t.force,p=void 0!==m&&m,v=s?"".concat(s,"/"):"",g=p?"forceDelete":"delete";return h(r).then((function(t){if(t.value)return e.$store.dispatch("".concat(v).concat(g),{payload:n,tableMode:l}).then((function(){return c&&(window.history.length>1?e.$router.go(-1):e.$router.push(c)),f(o,i)}))}))}}},l={methods:{deleteImageByIndex:function(t){var e=this,n=t.id,i=t.index,r=t.alertText,o=t.successText,a=t.storeModule,s=void 0===a?null:a;return h(r).then((function(t){if(t.value)return e.$store.dispatch("".concat(s,"/deleteImageByIndex"),{id:n,index:i}).then((function(){return f(o,i)}))}))}}},h=function(t){return a.a.fire({title:"Вы уверены?",text:"Данное действие удалит ".concat(t," безвозвратно!"),icon:"warning",showCancelButton:!0,customClass:{confirmButton:"md-button md-success btn-fill",cancelButton:"md-button md-danger btn-fill"},confirmButtonText:"Удалить",cancelButtonText:"Отменить",buttonsStyling:!1})},f=function(t,e){return a.a.fire({title:t,text:"«".concat(e,"»"),timer:2e3,icon:"success",showConfirmButton:!1})},m={methods:{upload:function(t){var e,n=this;return(e=r.a.mark((function e(){var i,o,s,u,c,d,l,h,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.uploadFiles,o=t.type,s=void 0===o?null:o,u=t.id,c=void 0===u?null:u,d=t.storeModule,l=void 0===d?null:d,h=Array.from(i),f=l||"categories",!c){e.next=8;break}return e.next=6,n.$store.dispatch("".concat(f,"/uploadImages"),{files:h,id:c,type:s});case 6:e.next=10;break;case 8:return e.next=10,n.$store.dispatch("images/store",h);case 10:return e.next=12,a.a.fire({title:"Изображения загружены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"});case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(t){s(o,i,r,a,u,"next",t)}function u(t){s(o,i,r,a,u,"throw",t)}a(void 0)}))})()}}},p={methods:{addImages:function(t){var e=this,n=t.id,i=t.data;this.$store.dispatch("categories/addSelectedImages",{id:n,data:i}).then((function(){return e.$router.push({name:"cms.catalog.categories.images",params:{id:n}}),a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}},v={methods:{addImages:function(t){var e=this,n=t.type,i=t.id,r=t.data,o=t.redirectRoute;this.$store.dispatch("subCategories/addSelectedImages",{type:n,id:i,data:r}).then((function(){return e.$router.push(o),a.a.fire({title:"Изображения добавлены!",text:"",timer:2e3,showConfirmButton:!1,icon:"success"})}))}}}},668:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n(3),o=n(5),a=n(203),s=n(4);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={name:"TextureEdit",components:{"text-editor":n(70).a},mixins:[o.b,a.b,s.f,s.c],props:{id:{type:[Number,String],required:!0},result:[]},data:function(){return{storeModule:"textures",responseData:!1,redirectRoute:{name:"cms.textures"}}},validations:{name:{required:r.required,touch:!1,minLength:Object(r.minLength)(2),isUnique:function(t){return""===t.trim()&&!this.$v.name.$dirty||this.isUniqueNameEdit}},price:{required:r.required,numeric:r.numeric,touch:!1},width:{required:r.required,numeric:r.numeric,touch:!1},sample:{touch:!1},background:{touch:!1},description:{touch:!1},publish:{touch:!1},order:{numeric:r.numeric,touch:!1}},computed:c(c({},Object(i.d)("textures",{name:function(t){return t.fields.name},price:function(t){return t.fields.price},width:function(t){return t.fields.width},samplePath:function(t){return t.fields.sample_path},backgroundPath:function(t){return t.fields.background_path},sample:function(t){return t.fields.sample},background:function(t){return t.fields.background},description:function(t){return t.fields.description},publish:function(t){return t.fields.publish},order:function(t){return t.fields.order}})),{},{isUniqueNameEdit:function(){return this.$store.getters["textures/isUniqueNameEdit"](this.name,this.id)}}),created:function(){var t=this;Promise.all([this.getItemsAction(),this.getItemAction(this.id)]).then((function(){t.setPageTitle("Фактура «".concat(t.name,"»")),t.responseData=!0})).then((function(){return t.$v.$reset()})).catch((function(){return t.$router.push(t.redirectRoute)}))},methods:c(c({},Object(i.b)("textures",{getItemAction:"getItem",getItemsAction:"getItems",clearFieldsAction:"clearItemFields"})),{},{onUpdate:function(){return this.update({sendData:{formData:{name:this.name,price:this.price,width:this.width,sample:this.sample,background:this.background,description:this.description,publish:Number(this.publish),order:Number(this.order)},id:this.id},title:this.name,successText:"Фактура обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){this.delete({payload:this.id,title:this.name,alertText:"фактура «".concat(this.name,"»"),successText:"Фактура удалена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},h=n(0),f=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",[n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{route:"cms.textures",title:"К списку материалов"}}),t._v(" "),n("div",[n("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:t.$v.$anyDirty&&!t.$v.$invalid,expression:"$v.$anyDirty && !$v.$invalid"}]},[n("control-button",{on:{click:t.onUpdate}})],1),t._v(" "),n("control-button",{attrs:{title:"Удалить",icon:"delete",color:"md-danger"},on:{click:t.onDelete}})],1)],1)],1)],1)]),t._v(" "),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",[n("card-icon-header"),t._v(" "),n("md-card-content",[n("div",{staticClass:"md-layout md-gutter"},[n("div",{staticClass:"md-layout-item"},[n("v-input",{attrs:{title:"Наименование",icon:"title",name:"name",value:t.name,vField:t.$v.name,differ:!0,module:t.storeModule,vRules:{required:!0,unique:!0,minLength:!0}}})],1),t._v(" "),n("div",{staticClass:"md-layout-item"},[n("v-input",{attrs:{title:"Цена",icon:"attach_money",name:"price",value:t.price,maxlength:8,vField:t.$v.price,differ:!0,module:t.storeModule,vRules:{required:!0,numeric:!0}}})],1),t._v(" "),n("div",{staticClass:"md-layout-item"},[n("v-input",{attrs:{title:"Ширина",icon:"straighten",name:"width",value:t.width,maxlength:8,vField:t.$v.width,differ:!0,module:t.storeModule,vRules:{required:!0,numeric:!0}}})],1),t._v(" "),n("div",{staticClass:"md-layout-item"},[n("v-input",{attrs:{title:"Порядок",icon:"sort",name:"order",value:t.order,maxlength:5,vField:t.$v.order,module:t.storeModule,vRules:{numeric:!0}}})],1)]),t._v(" "),n("div",{staticClass:"md-layout md-gutter mt-2"},[n("div",{staticClass:"md-layout-item md-xsmall-size-100 md-small-size-50 md-large-size-33 md-size-25"},[n("v-image",{attrs:{title:"Образец",name:"sample",imgDefault:t.samplePath,vField:t.$v.sample,differ:!0,module:t.storeModule}})],1),t._v(" "),n("div",{staticClass:"md-layout-item md-xsmall-size-100 md-small-size-50 md-large-size-33 md-size-25"},[n("v-image",{attrs:{title:"Фон",name:"background",imgDefault:t.backgroundPath,vField:t.$v.background,differ:!0,module:t.storeModule}})],1)]),t._v(" "),n("div",{staticClass:"mt-5"},[n("div",{staticClass:"mt-5"},[n("text-editor",{attrs:{value:t.description,vField:t.$v.description,differ:!0,module:t.storeModule}})],1)]),t._v(" "),n("div",{staticClass:"mt-5"},[n("v-switch",{attrs:{value:t.publish,vField:t.$v.publish,differ:!0,module:t.storeModule}})],1)])],1)],1)])]):t._e()}),[],!1,null,null,null);e.default=f.exports},70:function(t,e,n){"use strict";var i=n(279),r=n(275),o=n(278),a=n(286),s=n(287),u=n(280),c=n(282),d=n(8),l=n(21),h=n(274);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(o,t);var e,n,i,r=g(o);function o(){return m(this,o),r.apply(this,arguments)}return e=o,(n=[{key:"init",value:function(){var t=this.editor;t.ui.componentFactory.add("insertImage",(function(e){var n=new l.a(e);return n.set({label:"Insert image",icon:h.a,tooltip:!0}),n.on("execute",(function(){var e=prompt("Image URL");t.model.change((function(n){var i=n.createElement("image",{src:e});t.model.insertContent(i,t.model.document.selection)}))})),n}))}}])&&p(e.prototype,n),i&&p(e,i),o}(d.a),x=n(277),$=n(283),_=n(281),k=n(284),O=n(285),C=n(276),P=n(132),R={props:{title:{type:String,default:"Описание"},value:{type:String},name:{type:String,default:"description"},vField:{type:Object,default:null},module:{type:String,default:null},differ:{type:Boolean,default:!1}},data:function(){return{editor:r.a,editorConfig:{plugins:[o.a,w,a.a,s.a,u.a,c.a,x.a,k.a,O.a,C.a,P.a,_.a,$.a,i.a],toolbar:{items:["heading","|","bold","italic","bulletedList","numberedList","|","link","insertImage","|","undo","redo","|","mediaEmbed"]},image:{toolbar:["imageTextAlternative","|","imageStyle:alignLeft","imageStyle:full","imageStyle:alignRight"],styles:["full","alignLeft","alignRight"]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},mediaEmbed:{previewsInData:!0}},valueReference:""}},computed:{storeModule:function(){return this.module?"".concat(this.module,"/"):""}},methods:{onInput:function(t){this.vField&&this.touched(this.vField,t),this.$store.dispatch("".concat(this.storeModule,"setItemField"),{field:this.name,value:t.trim()})},isDiffer:function(t,e){return t!==e},touchedDifferent:function(t,e){this.isDiffer(e,this.valueReference)?t.$touch():t.$reset()},touched:function(t,e){this.differ?this.touchedDifferent(t,e):t.$touch()}},created:function(){this.valueReference=this.value}},j=(n(360),n(0)),D=Object(j.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig,value:t.value},on:{input:t.onInput}})],1)}),[],!1,null,null,null);e.a=D.exports}}]);