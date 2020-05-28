(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_components_VForm_VSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/custom_components/VForm/VSelect */ "./resources/manager/js/custom_components/VForm/VSelect.vue");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/base */ "./resources/manager/js/mixins/base.js");
/* harmony import */ var _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/mixins/crudMethods */ "./resources/manager/js/mixins/crudMethods.js");
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
//
//
//
//
//
//
//
//
//
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
  name: 'CollectionCreate',
  components: {
    VSelect: _custom_components_VForm_VSelect__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_3__["pageTitle"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__["createMethod"]],
  data: function data() {
    return {
      redirectRoute: {
        name: 'manager.catalog.collections'
      },
      responseData: false,
      storeModule: 'collections'
    };
  },
  validations: {
    title: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false,
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(2),
      isUnique: function isUnique(value) {
        return value.trim() === '' && !this.$v.title.$dirty || !this.isUniqueTitle;
      }
    },
    alias: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false,
      testAlias: function testAlias(value) {
        return value.trim() === '' || this.$config.ALIAS_REGEXP.test(value);
      },
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(2),
      isUnique: function isUnique(value) {
        return value.trim() === '' && !this.$v.alias.$dirty || !this.isUniqueAlias;
      }
    },
    description: {
      touch: false
    },
    keywords: {
      touch: false
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    title: function title(state) {
      return state.collections.fields.title;
    },
    alias: function alias(state) {
      return state.collections.fields.alias;
    },
    topics: function topics(state) {
      return state.collections.fields.topics;
    },
    interiors: function interiors(state) {
      return state.collections.fields.interiors;
    },
    tags: function tags(state) {
      return state.collections.fields.tags;
    },
    owner: function owner(state) {
      return state.collections.fields.owner_id;
    },
    description: function description(state) {
      return state.collections.fields.description;
    },
    keywords: function keywords(state) {
      return state.collections.fields.keywords;
    },
    ownerList: function ownerList(state) {
      return state.subCategories.itemsByType.owners;
    }
  }), {
    topicList: function topicList() {
      return this.$store.getters['categories/getItemsByType']('topics');
    },
    colorList: function colorList() {
      return this.$store.getters['categories/getItemsByType']('colors');
    },
    interiorList: function interiorList() {
      return this.$store.getters['categories/getItemsByType']('interiors');
    },
    tagList: function tagList() {
      return this.$store.getters['categories/getItemsByType']('tags');
    },
    isUniqueTitle: function isUniqueTitle() {
      return !!this.$store.getters['collections/isUniqueTitle'](this.title);
    },
    isUniqueAlias: function isUniqueAlias() {
      return !!this.$store.getters['collections/isUniqueAlias'](this.alias);
    }
  }),
  created: function created() {
    var _this = this;

    this.clearFieldsAction();
    Promise.all([this.getItemsAction(), this.getCategoriesAction(), this.getSubcategoriesAction('owners')]).then(function () {
      _this.setPageTitle('Новая коллекция');

      _this.responseData = true;
    })["catch"](function () {
      return _this.$router.push(_this.redirectRoute);
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getItemsAction: 'collections/getItems',
    clearFieldsAction: 'collections/clearItemFields',
    getCategoriesAction: 'categories/getItems',
    getSubcategoriesAction: 'subCategories/getItemsWithType'
  }), {
    onCreate: function onCreate() {
      return this.create({
        sendData: {
          title: this.title,
          alias: this.alias,
          topics: this.topics,
          interiors: this.interiors,
          tags: this.tags,
          owner_id: this.owner || null,
          description: this.description,
          keywords: this.keywords
        },
        title: this.title,
        successText: 'Коллекция создана!',
        storeModule: this.storeModule,
        redirectRoute: this.redirectRoute
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=template&id=23ee2f8c&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=template&id=23ee2f8c& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
                [
                  _c(
                    "md-card-content",
                    { staticClass: "md-between" },
                    [
                      _c("router-button-link", {
                        attrs: {
                          route: _vm.redirectRoute.name,
                          title: "К списку коллекций"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "slide-y-down-transition",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.$v.$invalid,
                              expression: "!$v.$invalid"
                            }
                          ]
                        },
                        [
                          _c("control-button", {
                            attrs: { title: "Создать доставку" },
                            on: { click: _vm.onCreate }
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
            { staticClass: "md-layout-item" },
            [
              _c(
                "md-card",
                [
                  _c("card-icon-header"),
                  _vm._v(" "),
                  _c("md-card-content", [
                    _c("div", { staticClass: "md-layout" }, [
                      _c(
                        "div",
                        { staticClass: "md-layout-item md-small-size-100" },
                        [
                          _c("v-input", {
                            attrs: {
                              title: "Заголовок",
                              icon: "title",
                              name: "title",
                              vField: _vm.$v.title,
                              module: _vm.storeModule,
                              vRules: {
                                required: true,
                                unique: true,
                                minLength: true
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "md-layout-item md-small-size-100" },
                        [
                          _c("v-input", {
                            attrs: {
                              title: "Алиас",
                              icon: "code",
                              name: "alias",
                              vDelay: true,
                              vField: _vm.$v.alias,
                              module: _vm.storeModule,
                              vRules: {
                                required: true,
                                unique: true,
                                minLength: true,
                                alias: true
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "space-20" })
                  ])
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
            { staticClass: "md-layout-item" },
            [
              _c(
                "md-card",
                [
                  _c("card-icon-header", {
                    attrs: { icon: "category", title: "Категории" }
                  }),
                  _vm._v(" "),
                  _c("md-card-content", [
                    _c("div", { staticClass: "md-layout" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "md-layout-item md-size-50 md-medium-size-100"
                        },
                        [
                          _vm.topicList.length
                            ? _c("v-select", {
                                attrs: {
                                  title: "Темы",
                                  placeholder: "Выберите темы",
                                  multiple: true,
                                  name: "topics",
                                  options: _vm.topicList,
                                  module: _vm.storeModule
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "md-layout-item md-size-50 md-medium-size-100"
                        },
                        [
                          _vm.interiorList.length
                            ? _c("v-select", {
                                attrs: {
                                  title: "Интерьеры",
                                  placeholder: "Выберите интерьеры",
                                  multiple: true,
                                  name: "interiors",
                                  options: _vm.interiorList,
                                  module: _vm.storeModule
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "md-layout-item md-size-50 md-medium-size-100"
                        },
                        [
                          _vm.tagList.length
                            ? _c("v-select", {
                                attrs: {
                                  title: "Теги",
                                  placeholder: "Выберите теги",
                                  multiple: true,
                                  name: "tags",
                                  options: _vm.tagList,
                                  module: _vm.storeModule
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "md-layout-item md-size-50 md-medium-size-100"
                        },
                        [
                          _vm.ownerList.length
                            ? _c("v-select", {
                                attrs: {
                                  title: "Владельцы",
                                  placeholder: "Выберите владельца",
                                  name: "owner_id",
                                  options: _vm.ownerList,
                                  defaultValue: 0,
                                  defaultTitle: "Свое",
                                  module: _vm.storeModule
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ])
                  ])
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
            { staticClass: "md-layout-item" },
            [
              _c(
                "md-card",
                [
                  _c("card-icon-header", {
                    attrs: { icon: "timeline", title: "SEO" }
                  }),
                  _vm._v(" "),
                  _c("md-card-content", [
                    _c("div", { staticClass: "md-layout" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "md-layout-item md-size-50 md-medium-size-100"
                        },
                        [
                          _c("v-textarea", {
                            attrs: {
                              name: "description",
                              vField: _vm.$v.description,
                              module: _vm.storeModule
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "md-layout-item md-size-50 md-medium-size-100"
                        },
                        [
                          _c("v-textarea", {
                            attrs: {
                              title: "Ключевые слова",
                              name: "keywords",
                              vField: _vm.$v.keywords,
                              module: _vm.storeModule
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "space-30" })
                  ])
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

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue":
/*!***************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionCreate_vue_vue_type_template_id_23ee2f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionCreate.vue?vue&type=template&id=23ee2f8c& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=template&id=23ee2f8c&");
/* harmony import */ var _CollectionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionCreate.vue?vue&type=script&lang=js& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CollectionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionCreate_vue_vue_type_template_id_23ee2f8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionCreate_vue_vue_type_template_id_23ee2f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=template&id=23ee2f8c&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=template&id=23ee2f8c& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionCreate_vue_vue_type_template_id_23ee2f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionCreate.vue?vue&type=template&id=23ee2f8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionCreate.vue?vue&type=template&id=23ee2f8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionCreate_vue_vue_type_template_id_23ee2f8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionCreate_vue_vue_type_template_id_23ee2f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);