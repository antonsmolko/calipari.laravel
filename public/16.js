(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PaletteTableCell",
  props: {
    items: {
      type: [Array, Object],
      "default": null
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/base */ "./resources/manager/js/mixins/base.js");
/* harmony import */ var _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/crudMethods */ "./resources/manager/js/mixins/crudMethods.js");
/* harmony import */ var _custom_components_Tables_ThumbTableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/custom_components/Tables/ThumbTableCell */ "./resources/manager/js/custom_components/Tables/ThumbTableCell.vue");
/* harmony import */ var _custom_components_Tables_PaletteTableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/custom_components/Tables/PaletteTableCell */ "./resources/manager/js/custom_components/Tables/PaletteTableCell.vue");
/* harmony import */ var _custom_components_Tables_TableActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/custom_components/Tables/TableActions */ "./resources/manager/js/custom_components/Tables/TableActions.vue");
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
  name: 'ImageList',
  mixins: [_mixins_base__WEBPACK_IMPORTED_MODULE_1__["pageTitle"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_2__["deleteMethod"], _mixins_crudMethods__WEBPACK_IMPORTED_MODULE_2__["uploadMethod"]],
  components: {
    ThumbTableCell: _custom_components_Tables_ThumbTableCell__WEBPACK_IMPORTED_MODULE_3__["default"],
    PaletteTableCell: _custom_components_Tables_PaletteTableCell__WEBPACK_IMPORTED_MODULE_4__["default"],
    TableActions: _custom_components_Tables_TableActions__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    category_type: {
      type: String,
      "default": 'images'
    },
    id: {
      type: [Number, String],
      "default": null
    }
  },
  data: function data() {
    return {
      mainImage: null,
      responseData: false,
      storeModule: 'images',
      redirectRoute: 'manager.catalog.collections'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    title: function title(state) {
      return state.collections.fields.title;
    },
    mainImageId: function mainImageId(state) {
      return state.collections.fields.main_image_id;
    },
    images: function images(state) {
      return state.images.items;
    },
    fileProgress: function fileProgress(state) {
      return state.images.fileProgress;
    }
  })),
  watch: {
    mainImageId: function mainImageId() {
      if (this.mainImageId) {
        this.mainImage = this.mainImageId;
      }
    }
  },
  created: function created() {
    var _this = this;

    Promise.all([this.getItemAction(this.id), this.getImagesAction(this.id)]).then(function () {
      _this.mainImage = _this.mainImageId;

      _this.setPageTitle("\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \xAB".concat(_this.title, "\xBB"));

      _this.responseData = true;
    })["catch"](function () {
      return _this.$router.push({
        name: _this.redirectRoute
      });
    });
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    publishAction: 'images/togglePublish',
    getItemAction: 'collections/getItem',
    getImagesAction: 'collections/getImages',
    setMainImageAction: 'collections/setMainImage'
  }), {
    fileInputChange: function fileInputChange(event) {
      this.upload({
        uploadFiles: event.target.files,
        type: this.category_type,
        id: this.id,
        storeModule: 'collections'
      });
    },
    onDelete: function onDelete(item) {
      this["delete"]({
        payload: item.id,
        title: item.id,
        alertText: "\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \xAB".concat(item.id, "\xBB"),
        successText: 'Изображение удалено!',
        storeModule: this.storeModule,
        tableMode: 'images'
      });
    },
    onPublish: function onPublish(id) {
      this.publishAction(id);
    },
    setMainImage: function setMainImage(id) {
      if (this.mainImageId !== id) {
        this.setMainImageAction({
          id: this.id,
          imageId: id
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-between[data-v-3eb68737] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-progress-bar__container[data-v-3eb68737] {\n  height: 4px;\n}", ""]);

// exports


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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=template&id=1576b0b0&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=template&id=1576b0b0& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
          return _c(
            "md-icon",
            {
              key: index,
              staticClass: "md-color-icon",
              style: { color: item.alias }
            },
            [
              _vm._v("\n        lens\n        "),
              _c("md-tooltip", { attrs: { "md-direction": "top" } }, [
                _vm._v(_vm._s(item.title))
              ])
            ],
            1
          )
        }),
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=template&id=3eb68737&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=template&id=3eb68737&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
                        attrs: { route: _vm.redirectRoute }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("upload-button", {
                            on: { change: _vm.fileInputChange }
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
                "div",
                { staticClass: "md-layout-item md-progress-bar__container" },
                [
                  _vm.fileProgress
                    ? _c("md-progress-bar", {
                        staticClass: "md-info",
                        attrs: { "md-value": _vm.fileProgress }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-card",
                [
                  _c("card-icon-header", {
                    attrs: { title: "Список изображений", icon: "assignment" }
                  }),
                  _vm._v(" "),
                  _c(
                    "md-card-content",
                    [
                      _vm.images.length
                        ? [
                            _c("md-table", {
                              staticClass:
                                "paginated-table table-striped table-hover",
                              attrs: { value: _vm.images },
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
                                          _vm._t(
                                            "first-column",
                                            [
                                              _c(
                                                "md-table-cell",
                                                {
                                                  staticStyle: {
                                                    width: "50px"
                                                  },
                                                  attrs: {
                                                    "md-label": "#",
                                                    "md-sort-by": "id"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        " +
                                                      _vm._s(item.id) +
                                                      "\n                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            { item: item }
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            { attrs: { "md-label": "Превью" } },
                                            [
                                              _c("thumb-table-cell", {
                                                attrs: { path: item.path }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            { attrs: { "md-label": "Цвета" } },
                                            [
                                              _c("palette-table-cell", {
                                                attrs: { items: item.colors }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            {
                                              attrs: { "md-label": "Владелец" }
                                            },
                                            [
                                              item.owner
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "md-category-tag"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            item.owner.title
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            { attrs: { "md-label": "Формат" } },
                                            [
                                              item.format
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c("md-icon", [
                                                        _vm._v(
                                                          _vm._s(
                                                            item.format.icon
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "md-tooltip",
                                                        {
                                                          attrs: {
                                                            "md-direction":
                                                              "top"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.format.title
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            { attrs: { "md-label": "Просм." } },
                                            [
                                              _c("md-icon", [
                                                _vm._v("visibility")
                                              ]),
                                              _vm._v(" " + _vm._s(item.views))
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            { attrs: { "md-label": "Лайки" } },
                                            [
                                              _c("md-icon", [
                                                _vm._v("favorite")
                                              ]),
                                              _vm._v(" " + _vm._s(item.likes))
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            { attrs: { "md-label": "Заказы" } },
                                            [
                                              _c("md-icon", [
                                                _vm._v("shopping_cart")
                                              ]),
                                              _vm._v(" " + _vm._s(item.orders))
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            { attrs: { "md-label": "Опубл." } },
                                            [
                                              _c("md-switch", {
                                                attrs: { value: !item.publish },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.onPublish(
                                                      item.id
                                                    )
                                                  }
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            {
                                              attrs: { "md-label": "Основное" }
                                            },
                                            [
                                              _c("md-radio", {
                                                staticClass: "md-primary",
                                                attrs: { value: item.id },
                                                on: {
                                                  change: _vm.setMainImage
                                                },
                                                model: {
                                                  value: _vm.mainImage,
                                                  callback: function($$v) {
                                                    _vm.mainImage = $$v
                                                  },
                                                  expression: "mainImage"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "md-table-cell",
                                            {
                                              attrs: { "md-label": "Действия" }
                                            },
                                            [
                                              _c("table-actions", {
                                                attrs: {
                                                  item: item,
                                                  subPath: "images",
                                                  deleteDisabled:
                                                    item.id === _vm.mainImageId
                                                },
                                                on: { delete: _vm.onDelete }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        2
                                      )
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ]
                        : [
                            _c("div", { staticClass: "alert alert-info" }, [
                              _c("span", [
                                _c("h3", [
                                  _vm._v(
                                    "В коллекции еще нет изображений! Загрузите их!"
                                  )
                                ])
                              ])
                            ])
                          ]
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

/***/ "./resources/manager/js/custom_components/Tables/PaletteTableCell.vue":
/*!****************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/PaletteTableCell.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaletteTableCell_vue_vue_type_template_id_1576b0b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaletteTableCell.vue?vue&type=template&id=1576b0b0& */ "./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=template&id=1576b0b0&");
/* harmony import */ var _PaletteTableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaletteTableCell.vue?vue&type=script&lang=js& */ "./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaletteTableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaletteTableCell_vue_vue_type_template_id_1576b0b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaletteTableCell_vue_vue_type_template_id_1576b0b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/custom_components/Tables/PaletteTableCell.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteTableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaletteTableCell.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteTableCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=template&id=1576b0b0&":
/*!***********************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=template&id=1576b0b0& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteTableCell_vue_vue_type_template_id_1576b0b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaletteTableCell.vue?vue&type=template&id=1576b0b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/PaletteTableCell.vue?vue&type=template&id=1576b0b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteTableCell_vue_vue_type_template_id_1576b0b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteTableCell_vue_vue_type_template_id_1576b0b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue":
/*!********************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageList_vue_vue_type_template_id_3eb68737_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageList.vue?vue&type=template&id=3eb68737&scoped=true& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=template&id=3eb68737&scoped=true&");
/* harmony import */ var _ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageList.vue?vue&type=script&lang=js& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageList_vue_vue_type_style_index_0_id_3eb68737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true& */ "./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageList_vue_vue_type_template_id_3eb68737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageList_vue_vue_type_template_id_3eb68737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3eb68737",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_style_index_0_id_3eb68737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=style&index=0&id=3eb68737&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_style_index_0_id_3eb68737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_style_index_0_id_3eb68737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_style_index_0_id_3eb68737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_style_index_0_id_3eb68737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_style_index_0_id_3eb68737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=template&id=3eb68737&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=template&id=3eb68737&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_3eb68737_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageList.vue?vue&type=template&id=3eb68737&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/pages/Dashboard/Catalog/Collections/ImageList.vue?vue&type=template&id=3eb68737&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_3eb68737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_3eb68737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);