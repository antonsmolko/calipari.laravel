(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_components_Cards_PanelCardLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/custom_components/Cards/PanelCardLink */ "./resources/js/custom_components/Cards/PanelCardLink.vue");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/base */ "./resources/js/mixins/base.js");
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
    PanelCardLink: _custom_components_Cards_PanelCardLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_1__["pageTitle"]],
  data: function data() {
    return {};
  },
  created: function created() {
    this.setPageTitle('Страницы');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=template&id=7cf37922&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=template&id=7cf37922& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c(
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
          route: "cms.pages.home",
          icon: "home",
          title: "Главная страница",
          color: "deep-purple"
        }
      }),
      _vm._v(" "),
      _c("panel-card-link", {
        attrs: {
          route: "cms.pages.catalog",
          icon: "category",
          title: "Каталог",
          color: "indigo"
        }
      }),
      _vm._v(" "),
      _c("panel-card-link", {
        attrs: {
          route: "cms.pages.textures",
          icon: "style",
          title: "Материалы",
          color: "blue"
        }
      }),
      _vm._v(" "),
      _c("panel-card-link", {
        attrs: {
          route: "cms.pages.portfolio",
          icon: "work",
          title: "Портфолио",
          color: "light-blue"
        }
      }),
      _vm._v(" "),
      _c("panel-card-link", {
        attrs: {
          route: "cms.pages.blog",
          icon: "article",
          title: "Блог",
          color: "cyan"
        }
      }),
      _vm._v(" "),
      _c("panel-card-link", {
        attrs: {
          route: "cms.pages.contacts",
          icon: "location_on",
          title: "Контакты",
          color: "teal"
        }
      }),
      _vm._v(" "),
      _c("panel-card-link", {
        attrs: {
          route: "cms.pages.policy",
          icon: "policy",
          title: "Политика конфиденциальности",
          color: "light-green"
        }
      }),
      _vm._v(" "),
      _c("panel-card-link", {
        attrs: {
          route: "cms.pages.contract-offer",
          icon: "grading",
          title: "Договор оферты",
          color: "amber"
        }
      }),
      _vm._v(" "),
      _c("panel-card-link", {
        attrs: {
          route: "cms.pages.shipping-payment",
          icon: "local_shipping",
          title: "Доставка, оплата",
          color: "deep-orange"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Dashboard/Pages/PagesPanel.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/Dashboard/Pages/PagesPanel.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PagesPanel_vue_vue_type_template_id_7cf37922___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PagesPanel.vue?vue&type=template&id=7cf37922& */ "./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=template&id=7cf37922&");
/* harmony import */ var _PagesPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PagesPanel.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PagesPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PagesPanel_vue_vue_type_template_id_7cf37922___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PagesPanel_vue_vue_type_template_id_7cf37922___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/Pages/PagesPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PagesPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=template&id=7cf37922&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=template&id=7cf37922& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesPanel_vue_vue_type_template_id_7cf37922___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PagesPanel.vue?vue&type=template&id=7cf37922& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Pages/PagesPanel.vue?vue&type=template&id=7cf37922&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesPanel_vue_vue_type_template_id_7cf37922___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesPanel_vue_vue_type_template_id_7cf37922___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);