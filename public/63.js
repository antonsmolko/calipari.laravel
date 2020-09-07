(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{135:function(t,e,n){"use strict";var i=n(2),r=n(91);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=n.n(r)()((function(t){return t()}),500),u={name:"setting-input",props:{title:String,name:String,value:String,onSave:Function,timeout:{type:Number,default:500},type:{type:String,default:"text"},icon:{type:String,default:null}},data:function(){return{inputValue:"",onEdit:!1,updateTimeout:null}},methods:s(s({},Object(i.b)({updateAction:"settings/setTextValue"})),{},{onInputChange:function(t){this.inputValue=t.trim(),c(this.onUpdate)},onUpdate:function(){this.updateAction({key_name:this.name,value:this.inputValue})}}),created:function(){this.inputValue=this.value}},l=n(0),d=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("md-field",[t.icon?n("md-icon",[t._v(t._s(t.icon))]):t._e(),t._v(" "),n("md-input",{attrs:{name:t.name,value:t.value,type:t.type,placeholder:"Заполните поле "+t.title},on:{input:t.onInputChange}})],1)],1)])}),[],!1,null,null,null);e.a=d.exports},198:function(t,e,n){var i=n(9),r=n(486);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);t.exports=r.locals||{}},374:function(t,e,n){var i=n(92);t.exports=function(){return i.Date.now()}},485:function(t,e,n){"use strict";var i=n(198);n.n(i).a},486:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".md-card {\n  margin-top: 50px;\n}\n.width-medium {\n  width: 350px;\n}",""])},665:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n(135);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"setting-image",components:{ResourceImage:n(58).a},props:{title:String,name:String,value:{type:String,default:""},type:{default:"file",type:String}},data:function(){return{imageData:""}},methods:s(s({},Object(i.b)({updateAction:"settings/setImageValue"})),{},{onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.createImage(e[0]),this.updateAction({key_name:this.name,value:t.target.files[0]}))},createImage:function(t){var e=new FileReader,n=this;e.onload=function(t){n.imageData=t.target.result},e.readAsDataURL(t)}})},u=n(0),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"form-group"},[n("div",{staticClass:"file-input"},[t.imageData?n("div",{staticClass:"image-container"},[n("img",{attrs:{src:t.imageData,alt:""}})]):n("div",[n("div",{staticClass:"image-container"},[t.value?n("resource-image",{attrs:{name:t.value,width:400,alt:""}}):n("img",{attrs:{src:t.$config.imagePlaceholder,alt:""}})],1)]),t._v(" "),n("div",{staticClass:"button-container"},[n("md-button",{staticClass:"md-success md-just-icon md-fileinput"},[[n("md-icon",[t._v("add_photo_alternate")]),t._v(" "),n("md-tooltip",{attrs:{"md-direction":"top"}},[t._v("Выберите изображение")])],t._v(" "),n("input",{attrs:{type:t.type,name:t.name},on:{change:t.onFileChange}})],2)],1)])])])])}),[],!1,null,null,null).exports,d=n(5);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={name:"SettingList",components:{SettingInput:r.a,SettingImage:l},mixins:[d.b,d.a],data:function(){return{responseData:!1}},computed:p({},Object(i.d)("settingGroups",{settingGroups:function(t){return t.items}})),methods:p({},Object(i.b)({getItemsWithSettingsAction:"settingGroups/getItemsWithSettings"})),created:function(){var t=this;this.getItemsWithSettingsAction().then((function(){t.setPageTitle("Конфигурация"),t.responseData=!0})).catch((function(){return t.$router.push({name:"admin.dashboard"})}))}},v=(n(485),Object(u.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.responseData?n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item"},[n("md-card",{staticClass:"mt-0"},[n("md-card-content",{staticClass:"md-between"},[n("router-button-link",{attrs:{title:"В панель управления"}}),t._v(" "),t.authCheck("settings/administration")?n("router-button-link",{attrs:{title:"Администрирование",icon:"settings",color:"md-success",to:{name:"cms.settings.administration"}}}):t._e()],1)],1),t._v(" "),t.settingGroups.length?t._l(t.settingGroups,(function(e,i){return n("div",{key:i},[n("md-card",[n("md-card-header",{staticClass:"md-card-header-text md-card-header-green"},[n("div",{staticClass:"card-text"},[n("h4",{staticClass:"title"},[t._v(t._s(e.title))])])]),t._v(" "),n("md-card-content",[n("div",{staticClass:"md-layout md-gutter"},t._l(e.settings,(function(t,e){return n("div",{key:e,staticClass:"md-layout-item md-size-25 md-large-size-33 md-medium-size-50 md-xsmall-size-100"},["file"===t.type?n("setting-image",{attrs:{title:t.display_name,name:t.key_name,value:t.value,type:t.file}}):n("setting-input",{attrs:{title:t.display_name,name:t.key_name,value:t.value}})],1)})),0)])],1)],1)})):[t._m(0)]],2)]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-info"},[e("span",[e("h3",[this._v("Пока нет настроек сайта!")])])])}],!1,null,null,null));e.default=v.exports},91:function(t,e,n){var i=n(133),r=n(374),a=n(283),s=Math.max,o=Math.min;t.exports=function(t,e,n){var c,u,l,d,m,p,f=0,g=!1,v=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=c,i=u;return c=u=void 0,f=e,d=t.apply(i,n)}function y(t){return f=t,m=setTimeout(j,e),g?h(t):d}function O(t){var n=t-p;return void 0===p||n>=e||n<0||v&&t-f>=l}function j(){var t=r();if(O(t))return _(t);m=setTimeout(j,function(t){var n=e-(t-p);return v?o(n,l-(t-f)):n}(t))}function _(t){return m=void 0,b&&c?h(t):(c=u=void 0,d)}function w(){var t=r(),n=O(t);if(c=arguments,u=this,p=t,n){if(void 0===m)return y(p);if(v)return clearTimeout(m),m=setTimeout(j,e),h(p)}return void 0===m&&(m=setTimeout(j,e)),d}return e=a(e)||0,i(n)&&(g=!!n.leading,l=(v="maxWait"in n)?s(a(n.maxWait)||0,e):l,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==m&&clearTimeout(m),f=0,c=p=u=m=void 0},w.flush=function(){return void 0===m?d:_(r())},w}}}]);