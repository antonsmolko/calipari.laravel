(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{710:function(e,t,i){"use strict";i.r(t);var r=i(2),s=i(1),n=i(71),u=i(29),c=i(237),a=i(4),o=i(5);function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){m(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var h={name:"SaleEdit",components:{ResourceImage:n.a,VSelect:u.a,VSlider:c.a},mixins:[a.f,a.c,o.b],props:{id:{type:[Number,String],required:!0}},data:function(){return{responseData:!1,storeModule:"sales",redirectRoute:{name:"cms.store.sales"}}},validations:{imageId:{required:s.required,touch:!1},article:{required:s.required,touch:!1,testArticle:function(e){return""===e.trim()||this.$config.ARTICLE_REGEXP.test(e)},minLength:Object(s.minLength)(5),isUnique:function(e){return""===e.trim()&&!this.$v.article.$dirty||this.isUniqueArticle}},image:{touch:!1},width:{required:s.required,numeric:s.numeric,touch:!1},height:{required:s.required,numeric:s.numeric,touch:!1},textureId:{required:s.required,numeric:s.numeric,touch:!1},price:{required:s.required,numeric:s.numeric,touch:!1},discount:{touch:!1},description:{touch:!1},publish:{touch:!1}},computed:l(l(l({},Object(r.d)({textures:function(e){return e.textures.items},imageId:function(e){return e.sales.fields.image_id},imagePath:function(e){return e.sales.fields.image_path},article:function(e){return e.sales.fields.article},image:function(e){return e.sales.fields.image},width:function(e){return e.sales.fields.width_cm},height:function(e){return e.sales.fields.height_cm},textureId:function(e){return e.sales.fields.texture_id},discount:function(e){return e.sales.fields.discount},description:function(e){return e.sales.fields.description},publish:function(e){return e.sales.fields.publish}})),Object(r.c)("textures",{defaultTextureId:"defaultItemId"})),{},{texture:function(){return this.$store.getters["textures/getById"](this.textureId)},isUniqueArticle:function(){return this.$store.getters["sales/isUniqueArticle"](this.article)},price:function(){return this.texture&&this.width&&this.height?100*Math.round(this.width*this.height/1e6*this.texture.price):0},formatDiscount:function(){return this.discount?"".concat(this.discount," %"):0},discountPrice:function(){return this.price/100*(100-this.discount)}}),created:function(){var e=this;this.clearFieldsAction(),Promise.all([this.getItemAction(this.id),this.getTexturesAction(),this.getRestArticlesAction(this.id)]).then((function(){e.setPageTitle("Позиция на продажу арт. № ".concat(e.article)),e.responseData=!0})).catch((function(){return e.$router.push(e.redirectRoute)}))},beforeDestroy:function(){this.clearFieldsAction()},methods:l(l({},Object(r.b)({getItemAction:"sales/getItem",getTexturesAction:"textures/getItems",setFieldAction:"sales/setItemField",getRestArticlesAction:"sales/getRestArticles",clearFieldsAction:"sales/clearItemFields"})),{},{onUpdate:function(){var e=this.article.toUpperCase();return this.update({sendData:{id:this.id,formData:{image_id:Number(this.imageId),article:e,image:this.image,width_cm:Number(this.width),height_cm:Number(this.height),texture_id:Number(this.textureId),discount:Number(this.discount),description:this.description,publish:Number(this.publish)}},title:"Арт. № ".concat(e),successText:"Позиция обновлена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})},onDelete:function(){return this.delete({payload:this.id,title:this.article.toUpperCase(),alertText:"Арт. № ".concat(this.article),successText:"Позиция удалена!",storeModule:this.storeModule,redirectRoute:this.redirectRoute})}})},v=i(0),f=Object(v.a)(h,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.responseData?i("div",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-card",{staticClass:"mt-0"},[i("md-card-content",{staticClass:"md-between"},[i("router-button-link",{attrs:{to:e.redirectRoute}}),e._v(" "),i("div",[i("slide-y-down-transition",{directives:[{name:"show",rawName:"v-show",value:e.$v.$anyDirty&&!e.$v.$invalid,expression:"$v.$anyDirty && !$v.$invalid"}]},[i("control-button",{attrs:{title:"Сохранить"},on:{click:e.onUpdate}})],1),e._v(" "),i("control-button",{staticClass:"md-danger",attrs:{title:"Удалить",icon:"delete"},on:{click:e.onDelete}})],1)],1)],1)],1)]),e._v(" "),i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[i("md-card",[i("card-icon-header",{attrs:{icon:"image",title:"Изображение"}}),e._v(" "),i("md-card-content",[i("v-input",{attrs:{title:"ID изображения",icon:"qr_code",name:"image_id",value:e.imageId,differ:!0,vField:e.$v.imageId,module:e.storeModule,vRules:{required:!0}}}),e._v(" "),i("v-input",{attrs:{title:"Артикул",icon:"money",name:"article",value:e.article,differ:!0,vDelay:!0,vField:e.$v.article,module:e.storeModule,vRules:{required:!0,unique:!0,minLength:!0,article:!0}}}),e._v(" "),i("v-image",{attrs:{name:"image",imgDefault:e.imagePath,vField:e.$v.image,vRules:{required:!0},module:e.storeModule}})],1)],1)],1),e._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-50 md-small-size-100"},[i("md-card",[i("card-icon-header"),e._v(" "),i("md-card-content",[i("v-input",{staticClass:"icon-rotate-90",attrs:{title:"Ширина полотна, см",icon:"height",name:"width_cm",value:e.width,differ:!0,vField:e.$v.width,vRules:{required:!0,numeric:!0},maxlength:4,module:e.storeModule}}),e._v(" "),i("v-input",{attrs:{title:"Высота полотна, см",icon:"height",name:"height_cm",value:e.height,differ:!0,vField:e.$v.height,vRules:{required:!0,numeric:!0},maxlength:4,module:e.storeModule}}),e._v(" "),i("v-select",{attrs:{title:"Фактуры",icon:"texture",name:"texture_id",options:e.textures,value:e.textureId,vField:e.$v.textureId,differ:!0,vRule:{required:!0,numeric:!0},module:e.storeModule,nameField:"name"}}),e._v(" "),i("h4",{staticClass:"card-title"},[e._v("Цена")]),e._v(" "),i("span",{staticClass:"md-title mr-10",class:{"text-line-through md-caption":e.discount}},[e._v(e._s(e.$helpers.getFormatPrice(e.price)||"—"))]),e._v(" "),e.discount?i("span",{staticClass:"md-title"},[e._v(e._s(e.$helpers.getFormatPrice(e.discountPrice)||"—"))]):e._e(),e._v(" "),i("h4",{staticClass:"card-title"},[e._v("Скидка")]),e._v(" "),i("span",{staticClass:"md-title"},[e._v(e._s(e.formatDiscount))]),e._v(" "),i("v-slider",{attrs:{name:"discount",start:e.discount,range:{min:0,max:95},step:5,vField:e.$v.discount,differ:!0,disabled:!e.price,module:e.storeModule}}),e._v(" "),i("v-input",{attrs:{title:"Описание",icon:"description",value:e.description,name:"description",maxlength:250,differ:!0,vField:e.$v.description,module:e.storeModule}}),e._v(" "),i("v-switch",{attrs:{value:e.publish,module:e.storeModule}})],1)],1)],1)])]):e._e()}),[],!1,null,null,null);t.default=f.exports}}]);