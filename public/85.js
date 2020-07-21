(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/last */ "./node_modules/lodash/last.js");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_0__);
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
  props: {
    backgroundColor: {
      type: String,
      "default": 'black'
    }
  },
  data: function data() {
    return {
      logo: '/img/svg/calipari.svg'
    };
  },
  computed: {
    setBgImage: function setBgImage() {
      var pageBackgrounds = {
        login: '/img/bg/bg-login.jpg',
        404: '/img/bg/bg-notfound.jpg',
        403: '/img/bg/bg-forbidden.jpg'
      };
      return {
        backgroundImage: "url(".concat(pageBackgrounds[this.pageName], ")")
      };
    },
    pageName: function pageName() {
      return lodash_last__WEBPACK_IMPORTED_MODULE_0___default()(this.$route.name.split('.'));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=template&id=212a3e1f&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=template&id=212a3e1f& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "full-page" },
    [
      _c("notifications", { attrs: { timeout: 7000 } }),
      _vm._v(" "),
      _c(
        "md-toolbar",
        {
          staticClass: "md-transparent md-toolbar-absolute",
          attrs: { "md-elevation": "0" }
        },
        [
          _c(
            "div",
            { staticClass: "md-toolbar-row md-offset md-flex-center " },
            [
              _c("div", [
                _c("img", {
                  staticClass: "img tm-width-logo",
                  attrs: { slot: "content", src: _vm.logo },
                  slot: "content"
                })
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "wrapper wrapper-full-page" }, [
        _c(
          "div",
          {
            staticClass: "page-header header-filter",
            style: _vm.setBgImage,
            attrs: { "filter-color": "black" }
          },
          [
            _c(
              "div",
              { staticClass: "container md-offset" },
              [_c("router-view")],
              1
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Lock/Layout/LockLayout.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/Lock/Layout/LockLayout.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LockLayout_vue_vue_type_template_id_212a3e1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LockLayout.vue?vue&type=template&id=212a3e1f& */ "./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=template&id=212a3e1f&");
/* harmony import */ var _LockLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LockLayout.vue?vue&type=script&lang=js& */ "./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LockLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LockLayout_vue_vue_type_template_id_212a3e1f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LockLayout_vue_vue_type_template_id_212a3e1f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Lock/Layout/LockLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LockLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=template&id=212a3e1f&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=template&id=212a3e1f& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LockLayout_vue_vue_type_template_id_212a3e1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LockLayout.vue?vue&type=template&id=212a3e1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Lock/Layout/LockLayout.vue?vue&type=template&id=212a3e1f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LockLayout_vue_vue_type_template_id_212a3e1f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LockLayout_vue_vue_type_template_id_212a3e1f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);