(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_components_Tabs_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/custom_components/Tabs.vue */ "./resources/js/custom_components/Tabs.vue");
/* harmony import */ var _custom_components_Editors_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/custom_components/Editors/TextEditor */ "./resources/js/custom_components/Editors/TextEditor.vue");
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
  name: "PageLayout",
  components: {
    Tabs: _custom_components_Tabs_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'text-editor': _custom_components_Editors_TextEditor__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_mixins_crudMethods__WEBPACK_IMPORTED_MODULE_5__["updateMethod"], _mixins_base__WEBPACK_IMPORTED_MODULE_4__["pageTitle"]],
  props: {
    pageId: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {
      activeTab: '',
      redirectRoute: '/cms/pages',
      responseData: false,
      storeModule: 'pages'
    };
  },
  validations: {
    fields: {
      title: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        touch: false,
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(2),
        isUnique: function isUnique(value) {
          return value.trim() === '' && !this.$v.fields.title.$dirty || this.isUniqueTitle;
        }
      },
      image: {
        touch: false
      },
      content: {
        touch: false
      },
      meta_title: {
        touch: false
      },
      description: {
        touch: false
      },
      keywords: {
        touch: false
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    fields: function fields(state) {
      return state.pages.fields;
    },
    item: function item(state) {
      return state.pages.item;
    }
  })), {}, {
    isUniqueTitle: function isUniqueTitle() {
      return this.$store.getters['pages/isUniqueTitle'](this.fields.title, this.item.id);
    }
  }),
  created: function created() {
    var _this = this;

    if (this.$route.params.activeTab) this.activeTab = this.$route.params.activeTab;
    Promise.all([this.getItemAction(this.pageId), this.getItemsAction()]).then(function () {
      _this.setPageTitle(_this.fields.title);

      _this.responseData = true;
    })["catch"](function () {
      return _this.$router.push(_this.redirectRoute);
    });
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('pages', {
    getItemAction: 'getItem',
    getItemsAction: 'getItems',
    deleteImageAction: 'deleteImage'
  })), {}, {
    onUpdate: function onUpdate() {
      return this.update({
        sendData: {
          id: this.item.id,
          formData: {
            title: this.fields.title,
            content: this.fields.content,
            image: this.fields.image,
            meta_title: this.fields.meta_title,
            description: this.fields.description,
            keywords: this.fields.keywords
          }
        },
        title: this.fields.title,
        successText: 'Страница обновлена!',
        storeModule: this.storeModule,
        redirectRoute: this.redirectRoute
      });
    },
    handleDeleteImage: function handleDeleteImage() {
      this.deleteImageAction(this.item.id);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/custom_components/Tabs.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/custom_components/Tabs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    flexColumn: Boolean,
    navPillsIcons: Boolean,
    plain: Boolean,
    tabName: Array,
    tabIcon: Array,
    colorButton: {
      type: String,
      "default": ""
    },
    activeTab: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      activePanel: ''
    };
  },
  methods: {
    switchPanel: function switchPanel(panel) {
      this.activePanel = panel;
    },
    isActivePanel: function isActivePanel(panel) {
      return this.activePanel === panel;
    },
    getColorButton: function getColorButton(colorButton) {
      return "md-" + colorButton + "";
    },
    getTabContent: function getTabContent(index) {
      return "tab-pane-" + index + "";
    }
  },
  created: function created() {
    this.activePanel = this.activeTab ? this.activeTab : this.tabName[0];
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=40043b8d&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=40043b8d& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                        attrs: { route: "cms.pages", title: "В панель страниц" }
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
                          )
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
              _c(
                "div",
                [
                  _c(
                    "tabs",
                    {
                      attrs: {
                        "tab-name": ["Основные настройки", "Модули", "SEO"],
                        activeTab: _vm.activeTab,
                        "color-button": "success"
                      }
                    },
                    [
                      _c("template", { slot: "tab-pane-1" }, [
                        _c("div", { staticClass: "md-layout" }, [
                          _c(
                            "div",
                            { staticClass: "md-layout-item" },
                            [
                              _c("v-input", {
                                attrs: {
                                  title: "Заголовок",
                                  icon: "title",
                                  name: "title",
                                  value: _vm.fields.title,
                                  vField: _vm.$v.fields.title,
                                  differ: true,
                                  maxlength: 70,
                                  module: _vm.storeModule,
                                  vRules: {
                                    required: true,
                                    unique: true,
                                    minLength: true
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("v-image", {
                                attrs: {
                                  name: "image",
                                  imgDefault: _vm.item.image_path,
                                  vField: _vm.$v.fields.image,
                                  withDelete: true,
                                  module: _vm.storeModule
                                },
                                on: { delete: _vm.handleDeleteImage }
                              }),
                              _vm._v(" "),
                              _c("text-editor", {
                                attrs: {
                                  title: "Контент",
                                  name: "content",
                                  value: _vm.fields.content,
                                  vField: _vm.$v.fields.content,
                                  differ: true,
                                  module: _vm.storeModule
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "template",
                        { slot: "tab-pane-2" },
                        [_vm._t("modules")],
                        2
                      ),
                      _vm._v(" "),
                      _c("template", { slot: "tab-pane-3" }, [
                        _c("div", { staticClass: "md-layout" }, [
                          _c(
                            "div",
                            { staticClass: "md-layout-item" },
                            [
                              _c("v-input", {
                                attrs: {
                                  title: "Мета заголовок",
                                  icon: "title",
                                  name: "meta_title",
                                  value: _vm.fields.meta_title,
                                  vField: _vm.$v.fields.meta_title,
                                  differ: true,
                                  maxlength: 150,
                                  module: _vm.storeModule
                                }
                              }),
                              _vm._v(" "),
                              _c("v-input", {
                                attrs: {
                                  title: "Описание",
                                  icon: "description",
                                  name: "description",
                                  value: _vm.fields.description,
                                  vField: _vm.$v.fields.description,
                                  differ: true,
                                  maxlength: 250,
                                  module: _vm.storeModule
                                }
                              }),
                              _vm._v(" "),
                              _c("v-input", {
                                attrs: {
                                  title: "Ключевые слова",
                                  icon: "vpn_key",
                                  name: "keywords",
                                  value: _vm.fields.keywords,
                                  vField: _vm.$v.fields.keywords,
                                  differ: true,
                                  maxlength: 150,
                                  module: _vm.storeModule
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "space-30" })
                            ],
                            1
                          )
                        ])
                      ])
                    ],
                    2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/custom_components/Tabs.vue?vue&type=template&id=31f485a7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/custom_components/Tabs.vue?vue&type=template&id=31f485a7& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "md-card",
    {
      staticClass: "md-card-tabs",
      class: [
        { "flex-column": _vm.flexColumn },
        { "nav-pills-icons": _vm.navPillsIcons },
        { "md-card-plain": _vm.plain }
      ]
    },
    [
      _c("md-card-header", [_vm._t("header-title")], 2),
      _vm._v(" "),
      _c(
        "md-card-content",
        [
          _c(
            "md-list",
            { staticClass: "nav-tabs" },
            _vm._l(_vm.tabName, function(item, index) {
              var _obj
              return _c(
                "md-list-item",
                {
                  key: item,
                  class: [
                    { active: _vm.isActivePanel(_vm.tabName[index]) },
                    ((_obj = {}),
                    (_obj[
                      _vm.getColorButton(_vm.colorButton)
                    ] = _vm.isActivePanel(_vm.tabName[index])),
                    _obj)
                  ],
                  on: {
                    click: function($event) {
                      return _vm.switchPanel(_vm.tabName[index])
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.tabName[index]) +
                      "\n                "
                  ),
                  _vm.navPillsIcons
                    ? _c("md-icon", [_vm._v(_vm._s(_vm.tabIcon[index]))])
                    : _vm._e()
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
            _c(
              "div",
              { staticClass: "tab-content" },
              [
                _vm._l(_vm.tabName, function(item, index) {
                  return [
                    _vm.isActivePanel(_vm.tabName[index])
                      ? [
                          _c(
                            "div",
                            { key: item, class: _vm.getTabContent(index + 1) },
                            [
                              _vm._t(_vm.getTabContent(index + 1), [
                                _vm._v(
                                  "\n                                This is the default text!\n                            "
                                )
                              ])
                            ],
                            2
                          )
                        ]
                      : _vm._e()
                  ]
                })
              ],
              2
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/custom_components/Pages/PageLayout.vue":
/*!*************************************************************!*\
  !*** ./resources/js/custom_components/Pages/PageLayout.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageLayout_vue_vue_type_template_id_40043b8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLayout.vue?vue&type=template&id=40043b8d& */ "./resources/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=40043b8d&");
/* harmony import */ var _PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLayout.vue?vue&type=script&lang=js& */ "./resources/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageLayout_vue_vue_type_template_id_40043b8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageLayout_vue_vue_type_template_id_40043b8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/custom_components/Pages/PageLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=40043b8d&":
/*!********************************************************************************************!*\
  !*** ./resources/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=40043b8d& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_40043b8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageLayout.vue?vue&type=template&id=40043b8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=40043b8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_40043b8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_40043b8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/custom_components/Tabs.vue":
/*!*************************************************!*\
  !*** ./resources/js/custom_components/Tabs.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_31f485a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=31f485a7& */ "./resources/js/custom_components/Tabs.vue?vue&type=template&id=31f485a7&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/custom_components/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_31f485a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tabs_vue_vue_type_template_id_31f485a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/custom_components/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/custom_components/Tabs.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/custom_components/Tabs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/custom_components/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/custom_components/Tabs.vue?vue&type=template&id=31f485a7&":
/*!********************************************************************************!*\
  !*** ./resources/js/custom_components/Tabs.vue?vue&type=template&id=31f485a7& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_31f485a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=31f485a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/custom_components/Tabs.vue?vue&type=template&id=31f485a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_31f485a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_31f485a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);