(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{664:function(t,e,o){"use strict";o.r(e);var r=o(3),c=o(122),n=o(5);function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var l={components:{PanelCardLink:c.a},mixins:[n.b],data:function(){return{responseData:!1}},computed:a({},Object(r.d)("dashboard",{resourcesCount:function(t){return t.resourcesCount}})),created:function(){var t=this;this.getResourcesCountAction({tables:["color_collections","art_collections","owners"],categories:["topics","colors","interiors","tags"]}).then((function(){t.setPageTitle("Каталог"),t.responseData=!0}))},methods:a({},Object(r.b)("dashboard",{getResourcesCountAction:"getResourcesCount"}))},u=o(0),p=Object(u.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.responseData?o("div",{staticClass:"md-layout"},[o("div",{staticClass:"md-layout-item md-size-100"},[o("md-card",{staticClass:"mt-0"},[o("md-card-content",[o("router-button-link")],1)],1)],1),t._v(" "),o("panel-card-link",{attrs:{route:"cms.catalog.categories.list",params:{category_type:"topics"},icon:"collections_bookmark",count:t.resourcesCount.topics,title:"Темы",color:"blue"}}),t._v(" "),o("panel-card-link",{attrs:{route:"cms.catalog.categories.list",params:{category_type:"colors"},icon:"format_paint",count:t.resourcesCount.colors,title:"Цвета",color:"rose"}}),t._v(" "),o("panel-card-link",{attrs:{route:"cms.catalog.categories.list",params:{category_type:"interiors"},icon:"meeting_room",count:t.resourcesCount.interiors,title:"Интерьеры",color:"green"}}),t._v(" "),o("panel-card-link",{attrs:{route:"cms.catalog.categories.list",params:{category_type:"tags"},icon:"local_offer",count:t.resourcesCount.tags,title:"Теги",color:"brown"}}),t._v(" "),o("panel-card-link",{attrs:{route:"cms.catalog.color-collections",icon:"palette",count:t.resourcesCount.color_collections,title:"Цветовые коллекции",color:"cyan"}}),t._v(" "),o("panel-card-link",{attrs:{route:"cms.catalog.art-collections",icon:"view_quilt",count:t.resourcesCount.art_collections,title:"Арт коллекции",color:"blue-grey"}}),t._v(" "),o("panel-card-link",{attrs:{route:"cms.catalog.subcategories.list",params:{category_type:"owners"},icon:"cloud",count:t.resourcesCount.owners,title:"Владельцы",color:"warning"}})],1):t._e()}),[],!1,null,null,null);e.default=p.exports}}]);