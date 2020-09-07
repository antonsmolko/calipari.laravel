(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{710:function(e,t,i){"use strict";i.r(t);var r=i(2),s=i(1),n=i(58),u=i(29),c=i(237),a=i(4),o=i(5);function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){m(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var h={name:"SaleCreate",components:{ResourceImage:n.a,VSelect:u.a,VSlider:c.a},mixins:[a.a,o.b],data:function(){return{responseData:!1,storeModule:"sales",redirectRoute:{name:"cms.store.sales"}}},validations:{imageId:{required:s.required,touch:!1},article:{required:s.required,touch:!1,testArticle:function(e){return""===e.trim()||this.$config.ARTICLE_REGEXP.test(e)},minLength:Object(s.minLength)(5),isUnique:function(e){return""===e.trim()&&!this.$v.article.$dirty||this.isUniqueArticle}},image:{required:s.required,touch:!1},width:{required:s.required,numeric:s.numeric,touch:!1},height:{required:s.required,numeric:s.numeric,touch:!1},textureId:{required:s.required,numeric:s.numeric,touch:!1},price:{required:s.required,numeric:s.numeric,touch:!1},discount:{touch:!1},description:{touch:!1},publish:{touch:!1}},computed:l(l(l({},Object(r.d)({textures:function(e){return e.textures.items},imageId:function(e){return e.sales.fields.image_id},article:function(e){return e.sales.fields.article},image:function(e){return e.sales.fields.image},width:function(e){return e.sales.fields.width_cm},height:function(e){return e.sales.fields.height_cm},textureId:function(e){return e.sales.fields.texture_id},discount:function(e){return e.sales.fields.discount},description:function(e){return e.sales.fields.description},publish:function(e){return e.sales.fields.publish},loading:function(e){return e.loading}})),Object(r.c)("textures",{defaultTextureId:"defaultItemId"})),{},{texture:function(){return this.$store.getters["textures/getById"](this.textureId)},isUniqueArticle:function(){return this.$store.getters["sales/isUniqueArticle"](this.article)},price:function(){return this.texture&&this.width&&this.height?100*Math.round(this.width*this.height/1e6*this.texture.price):0},formatDiscount:function(){return this.discount?"".concat(this.discount," %"):0},discountPrice:function(){return this.price/100*(100-this.discount)}}),created:function(){var e=this;Promise.all([this.getTexturesAction(),this.getArticlesAction()]).then((function(){e.setPageTitle("Новая позиция на продажу"),e.clearFieldsAction(),e.setFieldAction({field:"texture_id",value:e.defaultTextureId}),e.responseData=!0})).catch((function(){return e.$router.push(e.redirectRoute)}))},beforeDestroy:function(){this.clearFieldsAction()},methods:l(l({},Object(r.b)({getTexturesAction:"textures/getItems",setFieldAction:"sales/setItemField",getArticlesAction:"sales/getArticles",clearFieldsAction:"sales/clearItemFields"})),{},{onCreate:function(){var e=this.article.toUpperCase();return this.create({sendData:{image_id:Number(this.imageId),article:e,image:this.image,width_cm:Number(this.width),height_cm:Number(this.height),texture_id:Number(this.textureId),discount:Number(this.discount),description:this.description,publish:Number(this.publish)},title:e,successText:"Позиция на продажу создана!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},v=i(0),p=Object(v.a)(h,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.responseData?i("div",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-card",{staticClass:"mt-0"},[i("md-card-content",{staticClass:"md-between"},[i("router-button-link",{attrs:{to:e.redirectRoute}}),e._v(" "),i("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:!e.$v.$invalid,expression:"!$v.$invalid"}]},[i("control-button",{attrs:{disabled:e.loading},on:{click:e.onCreate}})],1)],1)],1)],1)]),e._v(" "),i("div",{staticClass:"md-layout-item md-size-100 mt-1 mb-1 md-progress-bar__container"},[e.loading?i("md-progress-bar",{staticClass:"md-info",attrs:{"md-mode":"indeterminate"}}):e._e()],1),e._v(" "),i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[i("md-card",[i("card-icon-header",{attrs:{icon:"image",title:"Изображение"}}),e._v(" "),i("md-card-content",[i("v-input",{attrs:{title:"ID изображения",icon:"qr_code",name:"image_id",vField:e.$v.imageId,module:e.storeModule,vRules:{required:!0}}}),e._v(" "),i("v-input",{attrs:{title:"Артикул",icon:"money",name:"article",vDelay:!0,vField:e.$v.article,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0,article:!0}}}),e._v(" "),i("v-image",{attrs:{name:"image",vField:e.$v.image,vRules:{required:!0},module:e.storeModule}})],1)],1)],1),e._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[i("md-card",[i("card-icon-header"),e._v(" "),i("md-card-content",[i("v-input",{staticClass:"icon-rotate-90",attrs:{title:"Ширина полотна, см",icon:"height",name:"width_cm",vField:e.$v.width,vRules:{required:!0,numeric:!0},maxlength:4,module:e.storeModule}}),e._v(" "),i("v-input",{attrs:{title:"Высота полотна, см",icon:"height",name:"height_cm",vField:e.$v.height,vRules:{required:!0,numeric:!0},maxlength:4,module:e.storeModule}}),e._v(" "),i("v-select",{attrs:{title:"Фактуры",icon:"texture",name:"texture_id",options:e.textures,value:e.defaultTextureId,vField:e.$v.textureId,vRule:{required:!0,numeric:!0},module:e.storeModule,nameField:"name"}}),e._v(" "),i("h4",{staticClass:"card-title"},[e._v("Цена")]),e._v(" "),i("span",{staticClass:"md-title mr-10",class:{"text-line-through md-caption":e.discount}},[e._v(e._s(e.$helpers.getFormatPrice(e.price)||"—"))]),e._v(" "),e.discount?i("span",{staticClass:"md-title"},[e._v(e._s(e.$helpers.getFormatPrice(e.discountPrice)||"—"))]):e._e(),e._v(" "),i("h4",{staticClass:"card-title"},[e._v("Скидка")]),e._v(" "),i("span",{staticClass:"md-title"},[e._v(e._s(e.formatDiscount))]),e._v(" "),i("v-slider",{attrs:{name:"discount",range:{min:0,max:95},step:5,vField:e.$v.discount,disabled:!e.price,module:e.storeModule}}),e._v(" "),i("v-input",{attrs:{title:"Описание",icon:"description",name:"description",maxlength:250,vField:e.$v.description,module:e.storeModule}}),e._v(" "),i("v-switch",{attrs:{value:e.publish,module:e.storeModule}})],1)],1)],1)])]):e._e()}),[],!1,null,null,null);t.default=p.exports}}]);