(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TableActions",
  props: {
    item: {
      type: Object,
      "default": null
    },
    subPath: {
      type: String,
      required: true
    },
    deleteDisabled: {
      type: Boolean,
      "default": false
    },
    editDisabled: {
      type: Boolean,
      "default": false
    },
    restParams: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  methods: {
    onDelete: function onDelete(item) {
      this.$emit('delete', item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TagsTableCell",
  props: {
    items: {
      type: [Array, Object],
      "default": null
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _custom_components_Tables_VExtendedTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/custom_components/Tables/VExtendedTable */ "./resources/manager/js/custom_components/Tables/VExtendedTable.vue");
/* harmony import */ var _custom_components_Tables_ThumbTableCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/custom_components/Tables/ThumbTableCell */ "./resources/manager/js/custom_components/Tables/ThumbTableCell.vue");
/* harmony import */ var _custom_components_Tables_TagsTableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/custom_components/Tables/TagsTableCell */ "./resources/manager/js/custom_components/Tables/TagsTableCell.vue");
/* harmony import */ var _custom_components_Tables_TableActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/custom_components/Tables/TableActions */ "./resources/manager/js/custom_components/Tables/TableActions.vue");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/mixins/base */ "./resources/manager/js/mixins/base.js");
/* harmony import */ var _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/mixins/crudMethods */ "./resources/manager/js/mixins/crudMethods.js");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CollectionList',
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_5__["pageTitle"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_6__["deleteMethod"]],
  components: {
    VExtendedTable: _custom_components_Tables_VExtendedTable__WEBPACK_IMPORTED_MODULE_1__["default"],
    ThumbTableCell: _custom_components_Tables_ThumbTableCell__WEBPACK_IMPORTED_MODULE_2__["default"],
    TagsTableCell: _custom_components_Tables_TagsTableCell__WEBPACK_IMPORTED_MODULE_3__["default"],
    TableActions: _custom_components_Tables_TableActions__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      resourceUrl: '/catalog/collections',
      redirectRoute: {
        name: 'manager.catalog'
      },
      storeModule: 'collections'
    };
  },
  created: function created() {
    this.setPageTitle('Коллекции');
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    togglePublishAction: 'table/togglePublish'
  }), {
    onDelete: function onDelete(item) {
      return this["delete"]({
        payload: item.id,
        title: item.title,
        alertText: "\u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E \xAB".concat(item.title, "\xBB"),
        storeModule: this.storeModule,
        successText: 'Коллекция удалена!',
        tableMode: 'table'
      });
    },
    togglePublish: function togglePublish(item) {
      this.togglePublishAction("/catalog/collections/".concat(item.id, "/publish"));
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table-actions[data-v-0f288b62] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.md-category-tag[data-v-c7e5fc98] {\n    display: inline-block;\n    padding: 3px 5px;\n    background-color: #dddddd;\n    border-radius: 3px;\n    margin: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=template&id=0f288b62&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=template&id=0f288b62&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.item
    ? _c(
        "div",
        { staticClass: "table-actions" },
        [
          _c("router-button-link", {
            attrs: {
              title: "Редактировать",
              icon: "edit",
              color: "md-success",
              disabled: _vm.editDisabled,
              route: "manager." + _vm.subPath + ".edit",
              params: Object.assign({}, { id: _vm.item.id }, _vm.restParams)
            }
          }),
          _vm._v(" "),
          _c("control-button", {
            attrs: {
              title: "Удалить",
              icon: "delete",
              disabled: _vm.deleteDisabled,
              color: "md-danger"
            },
            on: {
              click: function($event) {
                return _vm.onDelete(_vm.item)
              }
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=template&id=c7e5fc98&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=template&id=c7e5fc98&scoped=true& ***!
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
  return _vm.items.length
    ? _c(
        "div",
        _vm._l(_vm.items, function(item, index) {
          return _c("span", { key: index, staticClass: "md-category-tag" }, [
            _vm._v("\n        " + _vm._s(item.title) + "\n    ")
          ])
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=template&id=e54687a4&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=template&id=e54687a4& ***!
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
                  attrs: { title: "В каталог", route: _vm.redirectRoute.name }
                }),
                _vm._v(" "),
                _c("router-button-link", {
                  attrs: {
                    title: "Создать коллекцию",
                    icon: "add",
                    color: "md-success",
                    route: "manager.catalog.collections.create"
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
              attrs: { title: "Коллекции", icon: "assignment" }
            }),
            _vm._v(" "),
            _c(
              "md-card-content",
              [
                _c("v-extended-table", {
                  attrs: {
                    resourceUrl: _vm.resourceUrl,
                    editItemPathName: "manager.catalog.collections.edit",
                    searchFields: ["title", "alias"],
                    emptyContent: "У Вас нет коллекций. Создайте их!"
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
                              attrs: { "md-label": "#" }
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
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Превью" } },
                            [
                              _c("thumb-table-cell", {
                                attrs: {
                                  path:
                                    item.thumb || _vm.$config.imagePlaceholder,
                                  static: !item.thumb,
                                  width: 150
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Заголовок" } },
                            [
                              _c("span", { staticClass: "md-subheading" }, [
                                _vm._v(_vm._s(item.title))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Темы" } },
                            [
                              _c("tags-table-cell", {
                                attrs: { items: item.topics }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Интерьеры" } },
                            [
                              _c("tags-table-cell", {
                                attrs: { items: item.interiors }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Тэги" } },
                            [
                              _c("tags-table-cell", {
                                attrs: { items: item.tags }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Владелец" } },
                            [
                              item.owner
                                ? _c(
                                    "span",
                                    { staticClass: "md-category-tag" },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(item.owner.title) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "md-table-cell",
                            { attrs: { "md-label": "Изображения" } },
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
                              _c("router-button-link", {
                                attrs: {
                                  title: "Изображения",
                                  icon: "collections",
                                  route: "manager.catalog.collections.images",
                                  params: { id: item.id }
                                }
                              }),
                              _vm._v(" "),
                              _c("table-actions", {
                                attrs: {
                                  item: item,
                                  subPath: "catalog." + _vm.storeModule
                                },
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

/***/ "./resources/manager/js/custom_components/Tables/TableActions.vue":
/*!************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/TableActions.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableActions_vue_vue_type_template_id_0f288b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableActions.vue?vue&type=template&id=0f288b62&scoped=true& */ "./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=template&id=0f288b62&scoped=true&");
/* harmony import */ var _TableActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableActions.vue?vue&type=script&lang=js& */ "./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TableActions_vue_vue_type_style_index_0_id_0f288b62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css& */ "./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TableActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableActions_vue_vue_type_template_id_0f288b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableActions_vue_vue_type_template_id_0f288b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f288b62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/custom_components/Tables/TableActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_style_index_0_id_0f288b62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=style&index=0&id=0f288b62&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_style_index_0_id_0f288b62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_style_index_0_id_0f288b62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_style_index_0_id_0f288b62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_style_index_0_id_0f288b62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_style_index_0_id_0f288b62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=template&id=0f288b62&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=template&id=0f288b62&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_template_id_0f288b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableActions.vue?vue&type=template&id=0f288b62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TableActions.vue?vue&type=template&id=0f288b62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_template_id_0f288b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableActions_vue_vue_type_template_id_0f288b62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/TagsTableCell.vue":
/*!*************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/TagsTableCell.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagsTableCell_vue_vue_type_template_id_c7e5fc98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagsTableCell.vue?vue&type=template&id=c7e5fc98&scoped=true& */ "./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=template&id=c7e5fc98&scoped=true&");
/* harmony import */ var _TagsTableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagsTableCell.vue?vue&type=script&lang=js& */ "./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TagsTableCell_vue_vue_type_style_index_0_id_c7e5fc98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css& */ "./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TagsTableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagsTableCell_vue_vue_type_template_id_c7e5fc98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagsTableCell_vue_vue_type_template_id_c7e5fc98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c7e5fc98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/custom_components/Tables/TagsTableCell.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsTableCell.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_style_index_0_id_c7e5fc98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=style&index=0&id=c7e5fc98&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_style_index_0_id_c7e5fc98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_style_index_0_id_c7e5fc98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_style_index_0_id_c7e5fc98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_style_index_0_id_c7e5fc98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_style_index_0_id_c7e5fc98_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=template&id=c7e5fc98&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=template&id=c7e5fc98&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_template_id_c7e5fc98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsTableCell.vue?vue&type=template&id=c7e5fc98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/TagsTableCell.vue?vue&type=template&id=c7e5fc98&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_template_id_c7e5fc98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsTableCell_vue_vue_type_template_id_c7e5fc98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue":
/*!*************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionList_vue_vue_type_template_id_e54687a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionList.vue?vue&type=template&id=e54687a4& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=template&id=e54687a4&");
/* harmony import */ var _CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionList.vue?vue&type=script&lang=js& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionList_vue_vue_type_template_id_e54687a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionList_vue_vue_type_template_id_e54687a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=template&id=e54687a4&":
/*!********************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=template&id=e54687a4& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionList_vue_vue_type_template_id_e54687a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CollectionList.vue?vue&type=template&id=e54687a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/CollectionList.vue?vue&type=template&id=e54687a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionList_vue_vue_type_template_id_e54687a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionList_vue_vue_type_template_id_e54687a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);