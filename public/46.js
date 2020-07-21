(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _custom_components_Tables_CategoryTableActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/custom_components/Tables/CategoryTableActions */ "./resources/js/custom_components/Tables/CategoryTableActions.vue");
/* harmony import */ var _mixins_categoryTableMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/categoryTableMixin */ "./resources/js/mixins/categoryTableMixin.js");
/* harmony import */ var _mixins_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/categories */ "./resources/js/mixins/categories.js");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/mixins/base */ "./resources/js/mixins/base.js");
/* harmony import */ var _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/mixins/crudMethods */ "./resources/js/mixins/crudMethods.js");
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
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CategoryList',
  mixins: [_mixins_categoryTableMixin__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_categories__WEBPACK_IMPORTED_MODULE_3__["categoryPage"], _mixins_categories__WEBPACK_IMPORTED_MODULE_3__["tableTitle"], _mixins_base__WEBPACK_IMPORTED_MODULE_4__["pageTitle"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_5__["deleteMethod"]],
  components: {
    CategoryTableActions: _custom_components_Tables_CategoryTableActions__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      resourceUrl: "/catalog/categories/type/".concat(this.category_type),
      responseData: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categories', {
    items: function items(state) {
      return state.items;
    }
  })),
  created: function created() {
    this.setPageTitle(this.pageProps[this.category_type].PAGE_TITLE);
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    togglePublishAction: 'table/togglePublish'
  })), {}, {
    onDelete: function onDelete(item) {
      return this["delete"]({
        module: 'categories',
        payload: item.id,
        title: item.title,
        alertText: "\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \xAB".concat(item.title, "\xBB"),
        storeModule: this.storeModule,
        successText: 'Категория удалена!',
        tableMode: 'table'
      });
    },
    togglePublish: function togglePublish(item) {
      this.togglePublishAction("/catalog/categories/".concat(item.id, "/publish"));
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tm-color[data-v-0c8d1205] {\n  width: 50px;\n  height: 50px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=template&id=0c8d1205&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=template&id=0c8d1205&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "md-layout" }, [
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
                  attrs: { route: "cms.catalog", title: "В каталог" }
                }),
                _vm._v(" "),
                _c("router-button-link", {
                  attrs: {
                    route: "cms.catalog.categories.create",
                    params: { category_type: _vm.category_type },
                    icon: "add",
                    color: "md-success",
                    title: "Создать категорию"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "space-1" }),
        _vm._v(" "),
        _c(
          "md-card",
          [
            _c("card-icon-header", {
              attrs: { title: _vm.tableTitle, icon: "assignment" }
            }),
            _vm._v(" "),
            _c(
              "md-card-content",
              [
                _c("v-extended-table", {
                  attrs: {
                    resourceUrl: _vm.resourceUrl,
                    editItemPathName: "cms.catalog.categories.edit",
                    searchFields: ["title", "alias"],
                    emptyContent: "У Вас нет категорий. Создайте их!"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "md-table-cell",
                            {
                              staticStyle: { width: "50px" },
                              attrs: { "md-label": "#", "md-sort-by": "id" }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.id) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.category_type !== "colors"
                            ? _c(
                                "md-table-cell",
                                { attrs: { "md-label": "Превью" } },
                                [
                                  _c("thumb-table-cell", {
                                    attrs: { path: item.image_path, width: 150 }
                                  })
                                ],
                                1
                              )
                            : _c(
                                "md-table-cell",
                                { attrs: { "md-label": "Превью" } },
                                [
                                  _c("div", {
                                    staticClass:
                                      "tm-color img-raised rounded-circle",
                                    style: "background: " + item.alias
                                  })
                                ]
                              ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            {
                              attrs: {
                                "md-label": "Заголовок",
                                "md-sort-by": "title"
                              }
                            },
                            [
                              _c("span", { staticClass: "md-subheading" }, [
                                _vm._v(_vm._s(item.title))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            {
                              attrs: {
                                "md-label": "Алиас",
                                "md-sort-by": "alias"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.alias) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            {
                              attrs: {
                                "md-label": "Изображения",
                                "md-sort-by": "images_count"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.images_count) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Опубликован" } },
                            [
                              _c(
                                "md-switch",
                                {
                                  attrs: {
                                    disabled: !item.has_published_images,
                                    value: !item.publish
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.togglePublish(item)
                                    }
                                  }
                                },
                                [
                                  [
                                    !item.has_published_images
                                      ? _c("span", [
                                          _vm._v(
                                            "Нет опубликованных изображений!"
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Действия" } },
                            [
                              _c("category-table-actions", {
                                attrs: { item: item },
                                on: { delete: _vm.onDelete }
                              })
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryList_vue_vue_type_template_id_0c8d1205_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=template&id=0c8d1205&scoped=true& */ "./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=template&id=0c8d1205&scoped=true&");
/* harmony import */ var _CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CategoryList_vue_vue_type_style_index_0_id_0c8d1205_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true& */ "./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryList_vue_vue_type_template_id_0c8d1205_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryList_vue_vue_type_template_id_0c8d1205_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c8d1205",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_id_0c8d1205_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=style&index=0&id=0c8d1205&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_id_0c8d1205_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_id_0c8d1205_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_id_0c8d1205_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_id_0c8d1205_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_style_index_0_id_0c8d1205_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=template&id=0c8d1205&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=template&id=0c8d1205&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_0c8d1205_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=template&id=0c8d1205&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/Catalog/Categories/CategoryList.vue?vue&type=template&id=0c8d1205&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_0c8d1205_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_0c8d1205_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);