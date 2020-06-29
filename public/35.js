(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom_components_InputNotifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/custom_components/InputNotifications */ "./resources/manager/js/custom_components/InputNotifications/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var _debounce = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (value) {
  return value();
}, 300);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VDatepicker",
  components: {
    InputNotificationRequire: _custom_components_InputNotifications__WEBPACK_IMPORTED_MODULE_1__["InputNotificationRequire"],
    InputNotificationNum: _custom_components_InputNotifications__WEBPACK_IMPORTED_MODULE_1__["InputNotificationNum"]
  },
  props: {
    name: {
      type: String,
      "default": 'date'
    },
    title: {
      type: String,
      "default": 'Дата'
    },
    vField: {
      type: Object,
      required: true
    },
    vRules: {
      type: Object,
      "default": null
    },
    value: {
      type: [String, Number],
      "default": null
    },
    module: {
      type: String,
      "default": null
    },
    differ: {
      type: Boolean,
      "default": false
    },
    modelType: {
      type: String,
      "default": 'date'
    }
  },
  data: function data() {
    return {
      selectedDate: null,
      referenceValue: null
    };
  },
  computed: {
    storeModule: function storeModule() {
      return this.module ? "".concat(this.module, "/") : '';
    },
    mdType: function mdType() {
      switch (this.modelType) {
        case 'date':
          return Date;

        case 'string':
          return String;

        case 'number':
          return Number;
      }
    }
  },
  watch: {
    selectedDate: function selectedDate() {
      _debounce(this.changeDate);
    }
  },
  created: function created() {
    if (this.value) {
      this.referenceValue = this.value;
      this.selectedDate = this.value;
    }

    this.$material.locale.firstDayOfAWeek = 1;
    this.$material.locale.dateFormat = 'dd.MM.yyyy';
  },
  methods: {
    changeDate: function changeDate() {
      var _this = this;

      var value = this.selectedDate;
      this.$store.dispatch("".concat(this.storeModule, "setItemField"), {
        field: this.name,
        value: value
      }).then(function () {
        if (_this.vField) {
          _this.touched(_this.vField, value);
        }
      });
    },
    touched: function touched(v, value) {
      this.differ ? this.touchedDifferent(v, value) : v.$touch();
    },
    touchedDifferent: function touchedDifferent(v, value) {
      this.isDiffer(value, this.referenceValue) ? v.$touch() : v.$reset();
    },
    isDiffer: function isDiffer(a, b) {
      return a != b;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/base */ "./resources/manager/js/mixins/base.js");
/* harmony import */ var _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/crudMethods */ "./resources/manager/js/mixins/crudMethods.js");
/* harmony import */ var _custom_components_VForm_VDatepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/custom_components/VForm/VDatepicker */ "./resources/manager/js/custom_components/VForm/VDatepicker.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'WorkExampleCreate',
  components: {
    VDatepicker: _custom_components_VForm_VDatepicker__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_2__["pageTitle"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_3__["createMethod"]],
  data: function data() {
    return {
      responseData: false,
      storeModule: 'workExamples',
      redirectRoute: {
        name: 'manager.pages.portfolio',
        params: {
          activeTab: 'Модули'
        }
      }
    };
  },
  validations: {
    title: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false,
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(2)
    },
    image: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false
    },
    date: {
      numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["numeric"],
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false
    },
    image_id: {
      numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["numeric"],
      isUnique: function isUnique(value) {
        return value.toString().trim() === '' && !this.$v.image_id.$dirty || this.isUniqueImageId;
      },
      touch: false
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('workExamples', {
    title: function title(state) {
      return state.fields.title;
    },
    date: function date(state) {
      return state.fields.date;
    },
    image: function image(state) {
      return state.fields.image;
    },
    image_id: function image_id(state) {
      return state.fields.image_id;
    }
  }), {
    isUniqueImageId: function isUniqueImageId() {
      return this.$store.getters['workExamples/isUniqueImageId'](this.image_id);
    }
  }),
  created: function created() {
    var _this = this;

    this.clearFieldsAction();
    this.getItemsAction().then(function () {
      _this.setPageTitle('Новый пример работы');

      _this.responseData = true;
    })["catch"](function () {
      return _this.$route.push(_this.redirectRoute);
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('workExamples', {
    getItemsAction: 'getItems',
    clearFieldsAction: 'clearItemFields'
  }), {
    onCreate: function onCreate() {
      return this.create({
        sendData: {
          title: this.title,
          date: this.date,
          image_id: this.image_id,
          image: this.image
        },
        title: this.title,
        successText: 'Работа создана!',
        storeModule: this.storeModule,
        redirectRoute: this.redirectRoute
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=template&id=36f06f46&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=template&id=36f06f46& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h4", { staticClass: "card-title" }, [_vm._v(_vm._s(_vm.title))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-group" },
      [
        _c("md-datepicker", {
          class: [
            { "md-error": _vm.vField.$error },
            { "md-valid": !_vm.vField.$invalid }
          ],
          attrs: {
            "md-model-type": _vm.mdType,
            "md-immediately": "",
            "md-debounce": 0
          },
          model: {
            value: _vm.selectedDate,
            callback: function($$v) {
              _vm.selectedDate = $$v
            },
            expression: "selectedDate"
          }
        }),
        _vm._v(" "),
        _vm.vRules && _vm.vField.$error
          ? _c(
              "div",
              { staticClass: "under-input-notice" },
              [
                !_vm.vField.required && _vm.vRules.required
                  ? _c("input-notification-require", {
                      attrs: { name: _vm.title }
                    })
                  : !_vm.vField.numeric && _vm.vRules.numeric
                  ? _c("input-notification-num", { attrs: { name: _vm.title } })
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=template&id=202ffcf4&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=template&id=202ffcf4& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
                          params: _vm.redirectRoute.params,
                          title: "Назад"
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
                        [_c("control-button", { on: { click: _vm.onCreate } })],
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
                    _c("div", { staticClass: "md-layout md-gutter" }, [
                      _c(
                        "div",
                        { staticClass: "md-layout-item" },
                        [
                          _c("v-input", {
                            attrs: {
                              title: "Заголовок",
                              icon: "title",
                              name: "title",
                              module: _vm.storeModule,
                              maxlength: 150,
                              vField: _vm.$v.title,
                              vRules: { required: true, minLength: true }
                            }
                          }),
                          _vm._v(" "),
                          _c("VDatepicker", {
                            attrs: {
                              vField: _vm.$v.date,
                              modelType: "number",
                              vRules: { required: true },
                              module: _vm.storeModule
                            }
                          }),
                          _vm._v(" "),
                          _c("v-input", {
                            attrs: {
                              title: "ID изображения",
                              icon: "fingerprint",
                              name: "image_id",
                              module: _vm.storeModule,
                              maxlength: 5,
                              vField: _vm.$v.image_id,
                              vRules: { unique: true, numeric: true }
                            }
                          }),
                          _vm._v(" "),
                          _c("v-image", {
                            attrs: {
                              title: "Изображение",
                              name: "image",
                              vField: _vm.$v.image,
                              vRules: { required: true },
                              module: _vm.storeModule
                            }
                          })
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
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/manager/js/custom_components/VForm/VDatepicker.vue":
/*!**********************************************************************!*\
  !*** ./resources/manager/js/custom_components/VForm/VDatepicker.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VDatepicker_vue_vue_type_template_id_36f06f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VDatepicker.vue?vue&type=template&id=36f06f46& */ "./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=template&id=36f06f46&");
/* harmony import */ var _VDatepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VDatepicker.vue?vue&type=script&lang=js& */ "./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VDatepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VDatepicker_vue_vue_type_template_id_36f06f46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VDatepicker_vue_vue_type_template_id_36f06f46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/custom_components/VForm/VDatepicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VDatepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VDatepicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VDatepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=template&id=36f06f46&":
/*!*****************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=template&id=36f06f46& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VDatepicker_vue_vue_type_template_id_36f06f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VDatepicker.vue?vue&type=template&id=36f06f46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/VForm/VDatepicker.vue?vue&type=template&id=36f06f46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VDatepicker_vue_vue_type_template_id_36f06f46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VDatepicker_vue_vue_type_template_id_36f06f46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/manager/js/mixins/crudMethods.js":
/*!****************************************************!*\
  !*** ./resources/manager/js/mixins/crudMethods.js ***!
  \****************************************************/
/*! exports provided: createMethod, updateMethod, deleteMethod, deleteImageByIndexMethod, uploadMethod, imageAddMethod, subCategoryImageAddMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMethod", function() { return createMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMethod", function() { return updateMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMethod", function() { return deleteMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImageByIndexMethod", function() { return deleteImageByIndexMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadMethod", function() { return uploadMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageAddMethod", function() { return imageAddMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryImageAddMethod", function() { return subCategoryImageAddMethod; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var createMethod = {
  methods: {
    create: function create(_ref) {
      var _this = this;

      var sendData = _ref.sendData,
          title = _ref.title,
          successText = _ref.successText,
          redirectRoute = _ref.redirectRoute,
          _ref$storeModule = _ref.storeModule,
          storeModule = _ref$storeModule === void 0 ? null : _ref$storeModule;
      var module = storeModule ? "".concat(storeModule, "/") : '';
      return this.$store.dispatch("".concat(module, "store"), sendData).then(function () {
        _this.$router.push(redirectRoute); // window.history.length > 1 ? this.$router.go(-1) : this.$router.push(redirectRoute);


        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: successText,
          text: "\xAB".concat(title, "\xBB"),
          timer: 2000,
          showConfirmButton: false,
          icon: 'success'
        });
      });
    }
  }
};
var updateMethod = {
  methods: {
    update: function update(_ref2) {
      var _this2 = this;

      var sendData = _ref2.sendData,
          title = _ref2.title,
          redirectRoute = _ref2.redirectRoute,
          successText = _ref2.successText,
          _ref2$storeModule = _ref2.storeModule,
          storeModule = _ref2$storeModule === void 0 ? null : _ref2$storeModule;
      var module = storeModule ? "".concat(storeModule, "/") : '';
      return this.$store.dispatch("".concat(module, "update"), sendData).then(function () {
        _this2.$router.push(redirectRoute); // window.history.length > 1 ? this.$router.go(-1) : this.$router.push(redirectRoute);


        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: successText,
          text: "\xAB".concat(title, "\xBB"),
          timer: 2000,
          showConfirmButton: false,
          icon: 'success'
        });
      });
    }
  }
};
var deleteMethod = {
  methods: {
    "delete": function _delete(_ref3) {
      var _this3 = this;

      var payload = _ref3.payload,
          title = _ref3.title,
          alertText = _ref3.alertText,
          successText = _ref3.successText,
          _ref3$storeModule = _ref3.storeModule,
          storeModule = _ref3$storeModule === void 0 ? null : _ref3$storeModule,
          _ref3$redirectRoute = _ref3.redirectRoute,
          redirectRoute = _ref3$redirectRoute === void 0 ? null : _ref3$redirectRoute,
          _ref3$tableMode = _ref3.tableMode,
          tableMode = _ref3$tableMode === void 0 ? false : _ref3$tableMode,
          _ref3$force = _ref3.force,
          force = _ref3$force === void 0 ? false : _ref3$force;
      var module = storeModule ? "".concat(storeModule, "/") : '';
      var method = force ? 'forceDelete' : 'delete';
      return deleteSwalFireConfirm(alertText).then(function (result) {
        if (result.value) {
          return _this3.$store.dispatch("".concat(module).concat(method), {
            payload: payload,
            tableMode: tableMode
          }).then(function () {
            if (redirectRoute) {
              _this3.$router.push(redirectRoute); // window.history.length > 1
              //     ? this.$router.go(-1)
              //     : this.$router.push(redirectRoute);

            }

            return deleteSwalFireAlert(successText, title);
          });
        }
      });
    }
  }
};
var deleteImageByIndexMethod = {
  methods: {
    deleteImageByIndex: function deleteImageByIndex(_ref4) {
      var _this4 = this;

      var id = _ref4.id,
          index = _ref4.index,
          alertText = _ref4.alertText,
          successText = _ref4.successText,
          _ref4$storeModule = _ref4.storeModule,
          storeModule = _ref4$storeModule === void 0 ? null : _ref4$storeModule;
      return deleteSwalFireConfirm(alertText).then(function (result) {
        if (result.value) {
          return _this4.$store.dispatch("".concat(storeModule, "/deleteImageByIndex"), {
            id: id,
            index: index
          }).then(function () {
            return deleteSwalFireAlert(successText, index);
          });
        }
      });
    }
  }
};

var deleteSwalFireConfirm = function deleteSwalFireConfirm(alertText) {
  return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
    title: 'Вы уверены?',
    text: "\u0414\u0430\u043D\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0443\u0434\u0430\u043B\u0438\u0442 ".concat(alertText, " \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E!"),
    icon: 'warning',
    showCancelButton: true,
    customClass: {
      confirmButton: 'md-button md-success btn-fill',
      cancelButton: 'md-button md-danger btn-fill'
    },
    confirmButtonText: 'Удалить',
    cancelButtonText: 'Отменить',
    buttonsStyling: false
  });
};

var deleteSwalFireAlert = function deleteSwalFireAlert(successText, title) {
  return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
    title: successText,
    text: "\xAB".concat(title, "\xBB"),
    timer: 2000,
    icon: 'success',
    showConfirmButton: false
  });
};

var uploadMethod = {
  methods: {
    upload: function upload(_ref5) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var uploadFiles, _ref5$type, type, _ref5$id, id, _ref5$storeModule, storeModule, files, module;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                uploadFiles = _ref5.uploadFiles, _ref5$type = _ref5.type, type = _ref5$type === void 0 ? null : _ref5$type, _ref5$id = _ref5.id, id = _ref5$id === void 0 ? null : _ref5$id, _ref5$storeModule = _ref5.storeModule, storeModule = _ref5$storeModule === void 0 ? null : _ref5$storeModule;
                files = Array.from(uploadFiles);
                module = storeModule ? storeModule : 'categories';

                if (!id) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return _this5.$store.dispatch("".concat(module, "/uploadImages"), {
                  files: files,
                  id: id,
                  type: type
                });

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.next = 10;
                return _this5.$store.dispatch('images/store', files);

              case 10:
                _context.next = 12;
                return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  title: 'Изображения загружены!',
                  text: '',
                  timer: 2000,
                  showConfirmButton: false,
                  icon: 'success'
                });

              case 12:
                return _context.abrupt("return", _context.sent);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
};
var imageAddMethod = {
  methods: {
    addImages: function addImages(_ref6) {
      var _this6 = this;

      var id = _ref6.id,
          data = _ref6.data;
      this.$store.dispatch('categories/addSelectedImages', {
        id: id,
        data: data
      }).then(function () {
        _this6.$router.push({
          name: 'manager.catalog.categories.images',
          params: {
            id: id
          }
        });

        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: 'Изображения добавлены!',
          text: '',
          timer: 2000,
          showConfirmButton: false,
          icon: 'success'
        });
      });
    }
  }
};
var subCategoryImageAddMethod = {
  methods: {
    addImages: function addImages(_ref7) {
      var _this7 = this;

      var type = _ref7.type,
          id = _ref7.id,
          data = _ref7.data,
          redirectRoute = _ref7.redirectRoute;
      this.$store.dispatch('subCategories/addSelectedImages', {
        type: type,
        id: id,
        data: data
      }).then(function () {
        _this7.$router.push(redirectRoute);

        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: 'Изображения добавлены!',
          text: '',
          timer: 2000,
          showConfirmButton: false,
          icon: 'success'
        });
      });
    }
  }
};

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkExampleCreate_vue_vue_type_template_id_202ffcf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkExampleCreate.vue?vue&type=template&id=202ffcf4& */ "./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=template&id=202ffcf4&");
/* harmony import */ var _WorkExampleCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkExampleCreate.vue?vue&type=script&lang=js& */ "./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorkExampleCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkExampleCreate_vue_vue_type_template_id_202ffcf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorkExampleCreate_vue_vue_type_template_id_202ffcf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkExampleCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkExampleCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkExampleCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=template&id=202ffcf4&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=template&id=202ffcf4& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkExampleCreate_vue_vue_type_template_id_202ffcf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkExampleCreate.vue?vue&type=template&id=202ffcf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue?vue&type=template&id=202ffcf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkExampleCreate_vue_vue_type_template_id_202ffcf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkExampleCreate_vue_vue_type_template_id_202ffcf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);