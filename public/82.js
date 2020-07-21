(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=script&lang=js& ***!
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
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_1__["pageTitle"], _mixins_base__WEBPACK_IMPORTED_MODULE_1__["authCheck"]],
  created: function created() {
    this.setPageTitle('Категории');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=template&id=6dbf2435&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=template&id=6dbf2435& ***!
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
            [
              _c(
                "md-card-content",
                [
                  _c("router-button-link", {
                    attrs: {
                      route: "cms.dashboard",
                      title: "В Панель управления"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.authCheck("deliveries")
        ? _c("panel-card-link", {
            attrs: {
              route: "cms.store.deliveries",
              icon: "local_shipping",
              title: "Доставка",
              color: "teal"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.authCheck("order-statuses")
        ? _c("panel-card-link", {
            attrs: {
              route: "cms.store.orderStatuses",
              icon: "update",
              title: "Статусы заказа",
              color: "blue"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.authCheck("orders")
        ? _c("panel-card-link", {
            attrs: {
              route: "cms.store.orders",
              icon: "shopping_cart",
              title: "Заказы",
              color: "deep-purple"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Dashboard/Store/StorePanel.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/Dashboard/Store/StorePanel.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StorePanel_vue_vue_type_template_id_6dbf2435___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorePanel.vue?vue&type=template&id=6dbf2435& */ "./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=template&id=6dbf2435&");
/* harmony import */ var _StorePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorePanel.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StorePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StorePanel_vue_vue_type_template_id_6dbf2435___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StorePanel_vue_vue_type_template_id_6dbf2435___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/Store/StorePanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StorePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StorePanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StorePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=template&id=6dbf2435&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=template&id=6dbf2435& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StorePanel_vue_vue_type_template_id_6dbf2435___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StorePanel.vue?vue&type=template&id=6dbf2435& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Store/StorePanel.vue?vue&type=template&id=6dbf2435&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StorePanel_vue_vue_type_template_id_6dbf2435___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StorePanel_vue_vue_type_template_id_6dbf2435___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);