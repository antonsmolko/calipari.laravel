(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _custom_components_Tables_TableActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/custom_components/Tables/TableActions */ "./resources/manager/js/custom_components/Tables/TableActions.vue");
/* harmony import */ var _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/crudMethods */ "./resources/manager/js/mixins/crudMethods.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PurchaseStepList',
  data: function data() {
    return {
      storeModule: 'purchaseSteps',
      responsive: false,
      responseData: false
    };
  },
  components: {
    TableActions: _custom_components_Tables_TableActions__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_crudMethods__WEBPACK_IMPORTED_MODULE_2__["deleteMethod"]],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('purchaseSteps', {
    items: function items(state) {
      return state.items;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('purchaseSteps', {
    getItemsAction: 'getItems'
  }), {
    onPublishChange: function onPublishChange(id) {
      this.publishAction(id);
    },
    onDelete: function onDelete(item) {
      return this["delete"]({
        payload: item.id,
        title: item.title,
        alertText: "\u0448\u0430\u0433 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \xAB".concat(item.title, "\xBB"),
        storeModule: this.storeModule,
        successText: 'Шаг покупки удален!'
      });
    }
  }),
  created: function created() {
    var _this = this;

    this.getItemsAction().then(function () {
      return _this.responseData = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _custom_components_Tabs_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/custom_components/Tabs.vue */ "./resources/manager/js/custom_components/Tabs.vue");
/* harmony import */ var _custom_components_Editors_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/custom_components/Editors/TextEditor */ "./resources/manager/js/custom_components/Editors/TextEditor.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PageLayout",
  components: {
    Tabs: _custom_components_Tabs_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'text-editor': _custom_components_Editors_TextEditor__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__["updateMethod"]],
  props: {
    item: {
      type: Object,
      required: true
    },
    fields: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      redirectRoute: '/manager/pages',
      responseData: false,
      storeModule: 'pages'
    };
  },
  validations: {
    fields: {
      title: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        touch: false,
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(2),
        isUnique: function isUnique(value) {
          return value.trim() === '' && !this.$v.fields.title.$dirty || !this.isUniqueTitle;
        }
      },
      long_title: {
        touch: false
      },
      image: {
        touch: false
      },
      intro: {
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
  computed: {
    isUniqueTitle: function isUniqueTitle() {
      return this.$store.getters['pages/isUniqueTitle'](this.fields.title, this.item.id);
    }
  },
  created: function created() {
    var _this = this;

    this.getItemsAction().then(function () {
      return _this.responseData = true;
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('pages', {
    getItemsAction: 'getItems',
    deleteImageAction: 'deleteImage'
  }), {
    onUpdate: function onUpdate() {
      return this.update({
        sendData: {
          id: this.item.id,
          formData: {
            title: this.fields.title,
            long_title: this.fields.long_title,
            intro: this.fields.intro,
            image: this.fields.image,
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _custom_components_Pages_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/custom_components/Pages/PageLayout */ "./resources/manager/js/custom_components/Pages/PageLayout.vue");
/* harmony import */ var _custom_components_Pages_Home_PurchaseSteps_PurchaseStepList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList */ "./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/base */ "./resources/manager/js/mixins/base.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "HomePage",
  components: {
    PageLayout: _custom_components_Pages_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    PurchaseStepList: _custom_components_Pages_Home_PurchaseSteps_PurchaseStepList__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_3__["pageTitle"]],
  data: function data() {
    return {
      responseData: false,
      redirectRoute: 'manager.pages'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    fields: function fields(state) {
      return state.pages.fields;
    },
    item: function item(state) {
      return state.pages.item;
    }
  })),
  created: function created() {
    var _this = this;

    this.getItemAction(this.$config.pagesIds.home).then(function () {
      _this.setPageTitle(_this.fields.title);

      _this.responseData = true;
    })["catch"](function () {
      return _this.$router.push(_this.redirectRoute);
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getItemAction: 'pages/getItem'
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-table-thumb[data-v-276a0f7c] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 200px;\n  height: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=template&id=276a0f7c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=template&id=276a0f7c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "md-between" },
          [
            _c("h4", [_vm._v("Список шагов покупки")]),
            _vm._v(" "),
            _c("router-button-link", {
              attrs: {
                title: "Создать шаг покупки",
                icon: "add",
                color: "md-success",
                route: "manager.pages.home.purchase-steps.create"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _vm.items.length
              ? [
                  _c("md-table", {
                    staticClass: "paginated-table table-striped table-hover",
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "md-table-row",
                          fn: function(ref) {
                            var item = ref.item
                            return _c(
                              "md-table-row",
                              {},
                              [
                                _c(
                                  "md-table-cell",
                                  {
                                    staticClass: "width-small",
                                    attrs: { "md-label": "#" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(item.id) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "md-table-cell",
                                  { attrs: { "md-label": "Превью" } },
                                  [
                                    _c("img", {
                                      staticClass:
                                        "md-table-thumb img-raised rounded",
                                      attrs: {
                                        src:
                                          "/image/widen/300/" + item.image_path,
                                        alt: item.title
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "md-table-cell",
                                  { attrs: { "md-label": "Заголовок" } },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "md-subheading" },
                                      [_vm._v(_vm._s(item.title))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "md-table-cell",
                                  { attrs: { "md-label": "Действия" } },
                                  [
                                    _c("table-actions", {
                                      attrs: {
                                        item: item,
                                        subPath: "pages.home.purchase-steps"
                                      },
                                      on: { delete: _vm.onDelete }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          }
                        }
                      ],
                      null,
                      false,
                      4174255744
                    ),
                    model: {
                      value: _vm.items,
                      callback: function($$v) {
                        _vm.items = $$v
                      },
                      expression: "items"
                    }
                  })
                ]
              : [_vm._m(0)]
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [_c("h3", [_vm._v("У Вас еще нет шагов покупки!")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=01e778aa&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=01e778aa& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                        attrs: {
                          route: "manager.pages",
                          title: "В панель страниц"
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
                        "color-button": "success"
                      }
                    },
                    [
                      _c("template", { slot: "tab-pane-1" }, [
                        _c("div", { staticClass: "md-layout md-gutter" }, [
                          _c(
                            "div",
                            { staticClass: "md-layout-item" },
                            [
                              _c("h3", [_vm._v("Основные настройки")]),
                              _vm._v(" "),
                              _c("v-input", {
                                attrs: {
                                  title: "Заголовок",
                                  icon: "title",
                                  name: "title",
                                  value: _vm.fields.title,
                                  vField: _vm.$v.fields.title,
                                  differ: true,
                                  module: _vm.storeModule,
                                  vRules: {
                                    required: true,
                                    unique: true,
                                    minLength: true
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("v-input", {
                                attrs: {
                                  title: "Длиный заголовок",
                                  icon: "title",
                                  name: "long_title",
                                  value: _vm.fields.long_title,
                                  vField: _vm.$v.fields.long_title,
                                  differ: true,
                                  maxlength: 150,
                                  module: _vm.storeModule
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
                                  title: "Интро",
                                  name: "intro",
                                  value: _vm.fields.intro,
                                  vField: _vm.$v.fields.intro,
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
                      _c(
                        "template",
                        { slot: "tab-pane-3" },
                        [
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=template&id=1c3a850f&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=template&id=1c3a850f& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("page-layout", {
    attrs: { fields: _vm.fields, item: _vm.item },
    scopedSlots: _vm._u([
      {
        key: "modules",
        fn: function() {
          return [
            _c("h3", [_vm._v("Как купить фотообои")]),
            _vm._v(" "),
            _c("purchase-step-list")
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurchaseStepList_vue_vue_type_template_id_276a0f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseStepList.vue?vue&type=template&id=276a0f7c&scoped=true& */ "./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=template&id=276a0f7c&scoped=true&");
/* harmony import */ var _PurchaseStepList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseStepList.vue?vue&type=script&lang=js& */ "./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PurchaseStepList_vue_vue_type_style_index_0_id_276a0f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true& */ "./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PurchaseStepList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseStepList_vue_vue_type_template_id_276a0f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurchaseStepList_vue_vue_type_template_id_276a0f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "276a0f7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseStepList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_style_index_0_id_276a0f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=style&index=0&id=276a0f7c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_style_index_0_id_276a0f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_style_index_0_id_276a0f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_style_index_0_id_276a0f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_style_index_0_id_276a0f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_style_index_0_id_276a0f7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=template&id=276a0f7c&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=template&id=276a0f7c&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_template_id_276a0f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseStepList.vue?vue&type=template&id=276a0f7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/Home/PurchaseSteps/PurchaseStepList.vue?vue&type=template&id=276a0f7c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_template_id_276a0f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseStepList_vue_vue_type_template_id_276a0f7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/manager/js/custom_components/Pages/PageLayout.vue":
/*!*********************************************************************!*\
  !*** ./resources/manager/js/custom_components/Pages/PageLayout.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageLayout_vue_vue_type_template_id_01e778aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLayout.vue?vue&type=template&id=01e778aa& */ "./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=01e778aa&");
/* harmony import */ var _PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLayout.vue?vue&type=script&lang=js& */ "./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageLayout_vue_vue_type_template_id_01e778aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageLayout_vue_vue_type_template_id_01e778aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/custom_components/Pages/PageLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=01e778aa&":
/*!****************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=01e778aa& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_01e778aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageLayout.vue?vue&type=template&id=01e778aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Pages/PageLayout.vue?vue&type=template&id=01e778aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_01e778aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLayout_vue_vue_type_template_id_01e778aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Pages/Home/index.vue":
/*!*******************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Pages/Home/index.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1c3a850f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1c3a850f& */ "./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=template&id=1c3a850f&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1c3a850f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1c3a850f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/pages/Dashboard/Pages/Home/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=template&id=1c3a850f&":
/*!**************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=template&id=1c3a850f& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c3a850f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1c3a850f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Pages/Home/index.vue?vue&type=template&id=1c3a850f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c3a850f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c3a850f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);