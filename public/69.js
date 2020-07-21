(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _custom_components_Cards_PanelCardLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/custom_components/Cards/PanelCardLink */ "./resources/js/custom_components/Cards/PanelCardLink.vue");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/base */ "./resources/js/mixins/base.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PanelCardLink: _custom_components_Cards_PanelCardLink__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_2__["pageTitle"]],
  data: function data() {
    return {
      responseData: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('dashboard', {
    resourcesCount: function resourcesCount(state) {
      return state.resourcesCount;
    }
  })),
  created: function created() {
    var _this = this;

    this.getResourcesCountAction({
      tables: ['color_collections', 'art_collections', 'owners'],
      categories: ['topics', 'colors', 'interiors', 'tags']
    }).then(function () {
      _this.setPageTitle('Каталог');

      _this.responseData = true;
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('dashboard', {
    getResourcesCountAction: 'getResourcesCount'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=template&id=3b48aa45&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=template&id=3b48aa45& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.responseData
    ? _c(
        "div",
        { staticClass: "md-layout" },
        [
          _c(
            "div",
            { staticClass: "md-layout-item md-size-100" },
            [
              _c(
                "md-card",
                { staticClass: "mt-0" },
                [_c("md-card-content", [_c("router-button-link")], 1)],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("panel-card-link", {
            attrs: {
              route: "cms.catalog.categories.list",
              params: { category_type: "topics" },
              icon: "collections_bookmark",
              count: _vm.resourcesCount.topics,
              title: "Темы",
              color: "blue"
            }
          }),
          _vm._v(" "),
          _c("panel-card-link", {
            attrs: {
              route: "cms.catalog.categories.list",
              params: { category_type: "colors" },
              icon: "format_paint",
              count: _vm.resourcesCount.colors,
              title: "Цвета",
              color: "rose"
            }
          }),
          _vm._v(" "),
          _c("panel-card-link", {
            attrs: {
              route: "cms.catalog.categories.list",
              params: { category_type: "interiors" },
              icon: "meeting_room",
              count: _vm.resourcesCount.interiors,
              title: "Интерьеры",
              color: "green"
            }
          }),
          _vm._v(" "),
          _c("panel-card-link", {
            attrs: {
              route: "cms.catalog.categories.list",
              params: { category_type: "tags" },
              icon: "local_offer",
              count: _vm.resourcesCount.tags,
              title: "Теги",
              color: "brown"
            }
          }),
          _vm._v(" "),
          _c("panel-card-link", {
            attrs: {
              route: "cms.catalog.color-collections",
              icon: "palette",
              count: _vm.resourcesCount.color_collections,
              title: "Цветовые коллекции",
              color: "cyan"
            }
          }),
          _vm._v(" "),
          _c("panel-card-link", {
            attrs: {
              route: "cms.catalog.art-collections",
              icon: "view_quilt",
              count: _vm.resourcesCount.art_collections,
              title: "Арт коллекции",
              color: "blue-grey"
            }
          }),
          _vm._v(" "),
          _c("panel-card-link", {
            attrs: {
              route: "cms.catalog.subcategories.list",
              params: { category_type: "owners" },
              icon: "cloud",
              count: _vm.resourcesCount.owners,
              title: "Владельцы",
              color: "warning"
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CatalogPanel_vue_vue_type_template_id_3b48aa45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogPanel.vue?vue&type=template&id=3b48aa45& */ "./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=template&id=3b48aa45&");
/* harmony import */ var _CatalogPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogPanel.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CatalogPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CatalogPanel_vue_vue_type_template_id_3b48aa45___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CatalogPanel_vue_vue_type_template_id_3b48aa45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/Catalog/CatalogPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=template&id=3b48aa45&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=template&id=3b48aa45& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogPanel_vue_vue_type_template_id_3b48aa45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogPanel.vue?vue&type=template&id=3b48aa45& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/CatalogPanel.vue?vue&type=template&id=3b48aa45&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogPanel_vue_vue_type_template_id_3b48aa45___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogPanel_vue_vue_type_template_id_3b48aa45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);