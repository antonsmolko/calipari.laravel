(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VSelect",
  props: {
    title: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    vField: {
      type: Object,
      "default": null
    },
    placeholder: {
      type: String
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [Array, Number, String],
      "default": null
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    defaultValue: {
      type: [Array, Number, String, Object],
      "default": null
    },
    defaultTitle: {
      type: String,
      "default": 'Нет'
    },
    nameField: {
      type: String,
      "default": 'title'
    },
    indexName: {
      type: [String, Number],
      "default": 'id'
    },
    module: {
      type: String,
      "default": null
    },
    differ: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      valueReference: null
    };
  },
  computed: {
    storeModule: function storeModule() {
      return this.module ? "".concat(this.module, "/") : '';
    }
  },
  methods: {
    onSelect: function onSelect(value) {
      if (this.vField) this.touched(this.vField, value);
      this.$store.dispatch("".concat(this.storeModule, "setItemField"), {
        field: this.name,
        value: value
      });
    },
    isDiffer: function isDiffer(a, b) {
      return this.multiple ? !!a.filter(function (i) {
        return !b.includes(i);
      }).concat(b.filter(function (i) {
        return !a.includes(i);
      })).length : a != b;
    },
    touchedDifferent: function touchedDifferent(v, value) {
      this.isDiffer(value, this.valueReference) ? v.$touch() : v.$reset();
    },
    touched: function touched(v, value) {
      this.differ ? this.touchedDifferent(v, value) : v.$touch();
    }
  },
  created: function created() {
    this.valueReference = this.value instanceof Array ? this.value.slice(0) : this.value;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserCreate',
  components: {
    VSelect: _custom_components_VForm_VSelect__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_3__["pageTitle"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_4__["createMethod"]],
  data: function data() {
    return {
      responseData: false,
      redirectRoute: {
        name: 'manager.users'
      },
      storeModule: 'users'
    };
  },
  validations: {
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false,
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(2)
    },
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"],
      touch: false // isUnique (value) {
      //     return (value.trim() === '') && !this.$v.email.$dirty || !this.isUniqueEmail
      // }

    },
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false,
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(6)
    },
    passwordConfirmation: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])('password'),
      touch: false
    },
    role: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      touch: false
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    name: function name(state) {
      return state.users.fields.name;
    },
    email: function email(state) {
      return state.users.fields.email;
    },
    publish: function publish(state) {
      return state.users.fields.publish;
    },
    role: function role(state) {
      return state.users.fields.role;
    },
    password: function password(state) {
      return state.users.fields.password;
    },
    passwordConfirmation: function passwordConfirmation(state) {
      return state.users.fields.password_confirmation;
    },
    roleList: function roleList(state) {
      return state.roles.items;
    }
  }), {
    isUniqueEmail: function isUniqueEmail() {
      return !!this.$store.getters['users/isUniqueEmail'](this.email);
    },
    defaultRole: function defaultRole() {
      return this.$store.getters['roles/defaultRole'];
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    clearFieldsAction: 'users/clearItemFields',
    getRolesAction: 'roles/getItems',
    setFieldAction: 'users/setItemField'
  }), {
    onCreate: function onCreate() {
      return this.create({
        sendData: {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
          publish: this.publish,
          role: this.role
        },
        title: this.name,
        successText: 'Пользователь создан!',
        storeModule: this.storeModule,
        redirectRoute: this.redirectRoute
      });
    }
  }),
  created: function created() {
    var _this = this;

    this.clearFieldsAction();
    this.getRolesAction().then(function () {
      _this.setFieldAction({
        field: 'role',
        value: _this.defaultRole
      });

      _this.setPageTitle('Новый Пользователь');

      _this.responseData = true;
    })["catch"](function () {
      return _this.$router.push(_this.redirectRoute);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=template&id=31494f86&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=template&id=31494f86& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    [
      _vm.title
        ? _c("h4", { staticClass: "card-title" }, [_vm._v(_vm._s(_vm.title))])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "md-field",
        [
          _c("label", [_vm._v(_vm._s(_vm.placeholder))]),
          _vm._v(" "),
          _c(
            "md-select",
            {
              attrs: { value: _vm.value, multiple: _vm.multiple },
              on: { "md-selected": _vm.onSelect }
            },
            [
              _vm.defaultValue !== null
                ? _c("md-option", { attrs: { value: _vm.defaultValue } }, [
                    _vm._v(_vm._s(_vm.defaultTitle))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.options, function(item, index) {
                return _c(
                  "md-option",
                  { key: index, attrs: { value: item[_vm.indexName] } },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(item[_vm.nameField]) +
                        "\n            "
                    )
                  ]
                )
              })
            ],
            2
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=template&id=4b4ec0d0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=template&id=4b4ec0d0& ***!
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
                          title: "К списку пользователей",
                          route: "manager.users"
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
                            on: {
                              click: function($event) {
                                return _vm.onCreate("auto-close")
                              }
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
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "md-layout" },
          [
            _c(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-50 md-small-size-100"
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
                            title: "Имя",
                            icon: "person",
                            name: "name",
                            vField: _vm.$v.name,
                            module: _vm.storeModule,
                            vRules: { required: true, minLength: true }
                          }
                        }),
                        _vm._v(" "),
                        _c("v-input", {
                          attrs: {
                            title: "Email",
                            icon: "mail",
                            name: "email",
                            vField: _vm.$v.email,
                            vDelay: true,
                            module: _vm.storeModule,
                            vRules: {
                              required: true,
                              email: true,
                              minLength: true
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("v-input", {
                          attrs: {
                            title: "Пароль",
                            icon: "lock",
                            name: "password",
                            type: "password",
                            vField: _vm.$v.password,
                            module: _vm.storeModule,
                            vRules: { required: true, minLength: true }
                          }
                        }),
                        _vm._v(" "),
                        _c("v-input", {
                          attrs: {
                            title: "Подтверждение пароля",
                            icon: "lock",
                            name: "password_confirmation",
                            type: "password",
                            vField: _vm.$v.passwordConfirmation,
                            module: _vm.storeModule,
                            vRules: { required: true, sameAsPassword: true }
                          }
                        }),
                        _vm._v(" "),
                        _c("v-switch", {
                          attrs: {
                            title: "Активен",
                            value: _vm.publish,
                            module: _vm.storeModule
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
            _vm.roleList.length
              ? [
                  _c(
                    "div",
                    {
                      staticClass:
                        "md-layout-item md-medium-size-50 md-small-size-100"
                    },
                    [
                      _c(
                        "md-card",
                        [
                          _c("card-icon-header", {
                            attrs: { icon: "business_center", title: "Роли" }
                          }),
                          _vm._v(" "),
                          _c(
                            "md-card-content",
                            [
                              _vm.roleList.length
                                ? _c("v-select", {
                                    attrs: {
                                      title: "Роль",
                                      placeholder: "Выберите роль",
                                      name: "role",
                                      value: _vm.role,
                                      vField: _vm.$v.role,
                                      options: _vm.roleList,
                                      nameField: "display_name",
                                      indexName: "id",
                                      module: _vm.storeModule
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              : _vm._e()
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/manager/js/custom_components/VForm/VSelect.vue":
/*!******************************************************************!*\
  !*** ./resources/manager/js/custom_components/VForm/VSelect.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSelect_vue_vue_type_template_id_31494f86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSelect.vue?vue&type=template&id=31494f86& */ "./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=template&id=31494f86&");
/* harmony import */ var _VSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VSelect.vue?vue&type=script&lang=js& */ "./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VSelect_vue_vue_type_template_id_31494f86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VSelect_vue_vue_type_template_id_31494f86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/custom_components/VForm/VSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=template&id=31494f86&":
/*!*************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=template&id=31494f86& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_template_id_31494f86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VSelect.vue?vue&type=template&id=31494f86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/VForm/VSelect.vue?vue&type=template&id=31494f86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_template_id_31494f86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VSelect_vue_vue_type_template_id_31494f86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/manager/js/pages/Dashboard/Users/UserCreate.vue":
/*!*******************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Users/UserCreate.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserCreate_vue_vue_type_template_id_4b4ec0d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCreate.vue?vue&type=template&id=4b4ec0d0& */ "./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=template&id=4b4ec0d0&");
/* harmony import */ var _UserCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCreate.vue?vue&type=script&lang=js& */ "./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserCreate_vue_vue_type_template_id_4b4ec0d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserCreate_vue_vue_type_template_id_4b4ec0d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/pages/Dashboard/Users/UserCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=template&id=4b4ec0d0&":
/*!**************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=template&id=4b4ec0d0& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCreate_vue_vue_type_template_id_4b4ec0d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserCreate.vue?vue&type=template&id=4b4ec0d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Users/UserCreate.vue?vue&type=template&id=4b4ec0d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCreate_vue_vue_type_template_id_4b4ec0d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCreate_vue_vue_type_template_id_4b4ec0d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);