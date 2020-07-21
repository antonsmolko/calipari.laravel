(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/categories */ "./resources/js/mixins/categories.js");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/base */ "./resources/js/mixins/base.js");
/* harmony import */ var _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/mixins/crudMethods */ "./resources/js/mixins/crudMethods.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TagEdit',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  mixins: [_mixins_categories__WEBPACK_IMPORTED_MODULE_2__["subCategoryPage"], _mixins_base__WEBPACK_IMPORTED_MODULE_3__["pageTitle"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__["updateMethod"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__["deleteMethod"]],
  data: function data() {
    return {
      imageFile: '',
      responseData: false,
      storeModule: 'subCategories',
      redirectRoute: {
        name: 'cms.catalog.subcategories.list'
      }
    };
  },
  validations: {
    title: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false,
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(2),
      isUnique: function isUnique(value) {
        return value.trim() === '' && !this.$v.title.$dirty || !this.isUniqueTitleEdit;
      }
    },
    // publish: {
    //     touch: false
    // },
    description: {
      touch: false
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('subCategories', {
    title: function title(state) {
      return state.fields.title;
    },
    // publish: state => state.fields.publish,
    description: function description(state) {
      return state.fields.description;
    },
    hasImages: function hasImages(state) {
      return state.fields.hasImages;
    }
  })), {}, {
    isUniqueTitleEdit: function isUniqueTitleEdit() {
      return !!this.$store.getters['subCategories/isUniqueTitleEdit'](this.title, this.id);
    }
  }),
  created: function created() {
    var _this = this;

    this.clearFieldsAction();
    Promise.all([this.getItemsAction(this.category_type), this.getItemAction({
      type: this.category_type,
      id: this.id
    })]).then(function () {
      _this.setPageTitle(_this.title);

      _this.responseData = true;
    })["catch"](function () {
      return _this.$router.push(_this.redirectRoute);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearFieldsAction();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('subCategories', {
    getItemAction: 'getItem',
    getItemsAction: 'getItems',
    clearFieldsAction: 'clearItemFields'
  })), {}, {
    onUpdate: function onUpdate() {
      return this.update({
        sendData: {
          id: this.id,
          type: this.category_type,
          data: {
            title: this.title,
            description: this.description
          }
        },
        title: this.title,
        successText: this.pageProps[this.category_type].UPDATE_SUCCESS_TEXT,
        storeModule: this.storeModule,
        redirectRoute: this.redirectRoute
      });
    },
    onDelete: function onDelete() {
      return this["delete"]({
        payload: {
          type: this.category_type,
          id: this.id
        },
        title: this.title,
        alertText: this.pageProps[this.category_type].DELETE_CONFIRM_TEXT(this.title),
        successText: this.pageProps[this.category_type].DELETE_SUCCESS_TEXT,
        storeModule: this.storeModule,
        redirectRoute: this.redirectRoute
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=template&id=497fe76b&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=template&id=497fe76b& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    ? _c("div", [
        _c("div", { staticClass: "md-layout" }, [
          _c(
            "div",
            { staticClass: "md-layout-item" },
            [
              _c(
                "md-card",
                { staticClass: "mt-0" },
                [
                  _c(
                    "md-card-content",
                    { staticClass: "md-between" },
                    [
                      _c("router-button-link", {
                        attrs: { route: _vm.redirectRoute.name }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "slide-y-down-transition",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.$v.$anyDirty && !_vm.$v.$invalid,
                                  expression: "$v.$anyDirty && !$v.$invalid"
                                }
                              ]
                            },
                            [
                              _c("control-button", {
                                attrs: { title: "Сохранить" },
                                on: { click: _vm.onUpdate }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("control-button", {
                            staticClass: "md-danger",
                            attrs: { title: "Удалить", icon: "delete" },
                            on: { click: _vm.onDelete }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md-layout" }, [
          _c(
            "div",
            {
              staticClass: "md-layout-item md-medium-size-50 md-small-size-100"
            },
            [
              _c(
                "md-card",
                [
                  _c("card-icon-header"),
                  _vm._v(" "),
                  _c(
                    "md-card-content",
                    [
                      _c("v-input", {
                        attrs: {
                          title: "Заголовок",
                          icon: "title",
                          name: "title",
                          value: _vm.title,
                          module: _vm.storeModule,
                          vField: _vm.$v.title,
                          vRules: {
                            required: true,
                            unique: true,
                            minLength: true
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: {
                          name: "description",
                          value: _vm.description,
                          vField: _vm.$v.description,
                          module: _vm.storeModule
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "space-30" })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubCategoryEdit_vue_vue_type_template_id_497fe76b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubCategoryEdit.vue?vue&type=template&id=497fe76b& */ "./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=template&id=497fe76b&");
/* harmony import */ var _SubCategoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubCategoryEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubCategoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubCategoryEdit_vue_vue_type_template_id_497fe76b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubCategoryEdit_vue_vue_type_template_id_497fe76b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCategoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubCategoryEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCategoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=template&id=497fe76b&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=template&id=497fe76b& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCategoryEdit_vue_vue_type_template_id_497fe76b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubCategoryEdit.vue?vue&type=template&id=497fe76b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue?vue&type=template&id=497fe76b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCategoryEdit_vue_vue_type_template_id_497fe76b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCategoryEdit_vue_vue_type_template_id_497fe76b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);