(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CollectionEdit',
  components: {
    VSelect: _custom_components_VForm_VSelect__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_3__["pageTitle"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__["updateMethod"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__["deleteMethod"]],
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data: function data() {
    return {
      redirectRoute: {
        name: 'manager.catalog.collections'
      },
      responseData: false,
      storeModule: 'collections',
      controlSaveVisibilities: false
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
    alias: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false,
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(2),
      isUnique: function isUnique(value) {
        return value.trim() === '' && !this.$v.alias.$dirty || !this.isUniqueAliasEdit;
      },
      testAlias: function testAlias(value) {
        return value.trim() === '' || this.$config.ALIAS_REGEXP.test(value);
      }
    },
    maxPrintWidth: {
      numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["numeric"],
      touch: false
    },
    imageDescription: {
      touch: false
    },
    topics: {
      touch: false
    },
    interiors: {
      touch: false
    },
    tags: {
      touch: false
    },
    owner: {
      touch: false
    },
    publish: {
      touch: false
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
    imageDescription: function imageDescription(state) {
      return state.collections.fields.image_description;
    },
    maxPrintWidth: function maxPrintWidth(state) {
      return state.collections.fields.max_print_width;
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
    publish: function publish(state) {
      return state.collections.fields.publish;
    },
    hasPublishedImages: function hasPublishedImages(state) {
      return state.collections.fields.has_published_images;
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
    isUniqueTitleEdit: function isUniqueTitleEdit() {
      return !!this.$store.getters['deliveries/isUniqueTitleEdit'](this.title, this.id);
    },
    isUniqueAliasEdit: function isUniqueAliasEdit() {
      return !!this.$store.getters['deliveries/isUniqueAliasEdit'](this.alias, this.id);
    }
  }),
  created: function created() {
    var _this = this;

    this.clearFieldsAction();
    Promise.all([this.getItemAction(this.id), this.getItemsAction(), this.getCategoriesAction(), this.getSubcategoriesAction('owners')]).then(function () {
      _this.setPageTitle(_this.title);

      _this.responseData = true;
    }).then(function () {
      _this.$v.$reset();

      _this.controlSaveVisibilities = true;
    })["catch"](function () {
      return _this.$router.push(_this.redirectRoute);
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    clearFieldsAction: 'collections/clearItemFields',
    getItemsAction: 'collections/getItems',
    getItemAction: 'collections/getItem',
    getCategoriesAction: 'categories/getItems',
    getSubcategoriesAction: 'subCategories/getItemsWithType'
  }), {
    onUpdate: function onUpdate() {
      return this.update({
        sendData: {
          data: {
            title: this.title,
            alias: this.alias,
            max_print_width: this.maxPrintWidth,
            image_description: this.imageDescription,
            topics: this.topics,
            interiors: this.interiors,
            tags: this.tags,
            owner_id: this.owner || '',
            publish: +this.publish,
            description: this.description,
            keywords: this.keywords
          },
          id: this.id
        },
        title: this.title,
        successText: 'Коллекция обновлена!',
        storeModule: this.storeModule,
        redirectRoute: this.redirectRoute
      });
    },
    onDelete: function onDelete() {
      return this["delete"]({
        payload: this.id,
        title: this.title,
        alertText: "\u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E \xAB".concat(this.title, "\xBB"),
        successText: 'Коллекция удалена!',
        storeModule: this.storeModule,
        redirectRoute: this.redirectRoute
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=template&id=c6b638cc&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=template&id=c6b638cc& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
                        "div",
                        [
                          _c(
                            "slide-y-down-transition",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    _vm.controlSaveVisibilities &&
                                    _vm.$v.$anyDirty &&
                                    !_vm.$v.$invalid,
                                  expression:
                                    "controlSaveVisibilities && $v.$anyDirty && !$v.$invalid"
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
            { staticClass: "md-layout-item" },
            [
              _c(
                "md-card",
                [
                  _c("card-icon-header"),
                  _vm._v(" "),
                  _c("md-card-content", [
                    _c(
                      "div",
                      { staticClass: "md-layout" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "md-layout-item md-size-50 md-small-size-100"
                          },
                          [
                            _c("v-input", {
                              attrs: {
                                title: "Заголовок",
                                icon: "title",
                                name: "title",
                                value: _vm.title,
                                vField: _vm.$v.title,
                                differ: true,
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
                          {
                            staticClass:
                              "md-layout-item md-size-50 md-small-size-100"
                          },
                          [
                            _c("v-input", {
                              attrs: {
                                title: "Алиас",
                                icon: "code",
                                name: "alias",
                                value: _vm.alias,
                                vDelay: true,
                                vField: _vm.$v.alias,
                                differ: true,
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
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "md-layout-item md-size-100" },
                          [
                            _c(
                              "v-switch",
                              {
                                attrs: {
                                  vField: _vm.$v.publish,
                                  disabled: !_vm.hasPublishedImages,
                                  differ: true,
                                  value: _vm.publish,
                                  module: _vm.storeModule
                                }
                              },
                              [
                                !_vm.hasPublishedImages
                                  ? _c("span", [
                                      _vm._v("Нет опубликованных изображений")
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.hasPublishedImages
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "md-layout-item md-size-50 md-small-size-100"
                                },
                                [
                                  _c("v-input", {
                                    attrs: {
                                      title: "Максимальная ширина печати",
                                      icon: "straighten",
                                      name: "max_print_width",
                                      value: _vm.maxPrintWidth,
                                      maxlength: 4,
                                      vField: _vm.$v.maxPrintWidth,
                                      differ: true,
                                      module: _vm.storeModule,
                                      vRules: { numeric: true }
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
                                    "md-layout-item md-size-50 md-small-size-100"
                                },
                                [
                                  _c("v-input", {
                                    attrs: {
                                      title: "Описание",
                                      icon: "comment",
                                      name: "image_description",
                                      maxlength: 250,
                                      vField: _vm.$v.imageDescription,
                                      differ: true,
                                      value: _vm.imageDescription,
                                      module: _vm.storeModule
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
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
                                  value: _vm.topics,
                                  options: _vm.topicList,
                                  vField: _vm.$v.topics,
                                  differ: true,
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
                                  value: _vm.interiors,
                                  options: _vm.interiorList,
                                  vField: _vm.$v.interiors,
                                  differ: true,
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
                                  value: _vm.tags,
                                  options: _vm.tagList,
                                  vField: _vm.$v.tags,
                                  differ: true,
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
                                  value: _vm.owner,
                                  options: _vm.ownerList,
                                  vField: _vm.$v.owner,
                                  differ: true,
                                  defaultValue: "",
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
                              value: _vm.description,
                              vField: _vm.$v.description,
                              differ: true,
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
                              value: _vm.keywords,
                              vField: _vm.$v.keywords,
                              differ: true,
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

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue":
/*!*************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionEdit_vue_vue_type_template_id_c6b638cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionEdit.vue?vue&type=template&id=c6b638cc& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=template&id=c6b638cc&");
/* harmony import */ var _CollectionEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionEdit.vue?vue&type=script&lang=js& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CollectionEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionEdit_vue_vue_type_template_id_c6b638cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionEdit_vue_vue_type_template_id_c6b638cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=template&id=c6b638cc&":
/*!********************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=template&id=c6b638cc& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_c6b638cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionEdit.vue?vue&type=template&id=c6b638cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionEdit.vue?vue&type=template&id=c6b638cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_c6b638cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_c6b638cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);