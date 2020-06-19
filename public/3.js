(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ "./resources/manager/js/components/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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





var _debounce = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function (f) {
  return f();
}, 300);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VExtendedTable",
  components: {
    Pagination: _components__WEBPACK_IMPORTED_MODULE_4__["Pagination"]
  },
  props: {
    searchFields: {
      type: Array,
      "default": function _default() {
        return ['id'];
      }
    },
    perPageOptions: {
      type: Array,
      "default": function _default() {
        return [20, 50, 100, 200];
      }
    },
    serverPagination: {
      type: Boolean,
      "default": false
    },
    resourceUrl: {
      type: String,
      required: true
    },
    defaultSortOrder: {
      type: String,
      "default": 'asc'
    },
    emptyContent: {
      type: String,
      "default": 'Ресурсы отсутствуют!'
    },
    editItemPathName: {
      type: String,
      "default": 'manager.images.edit'
    }
  },
  data: function data() {
    return {
      currentSort: 'id',
      fuseSearch: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('table', {
    sortInit: function sortInit(state) {
      return state.sortInit;
    },
    items: function items(state) {
      return state.items;
    },
    searchedItems: function searchedItems(state) {
      return state.searchedItems;
    },
    searchQuery: function searchQuery(state) {
      return state.searchQuery;
    },
    pagination: function pagination(state) {
      return state.pagination;
    },
    loading: function loading(state) {
      return state.loading;
    },
    routeDetector: function routeDetector(state) {
      return state.routeDetector;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('table', ['itemsQty', 'searchedQty', 'checkReturnToPreviousPage', 'checkReturnToSearchedPreviousPage', 'isSearchedEmpty', 'totalPages']), {
    queriedData: function queriedData() {
      var items = !this.serverPagination && this.searchQuery ? this.searchedItems : this.items;
      return items.slice(this.from, this.to);
    },
    to: function to() {
      var highBound = this.from + this.pagination.per_page;

      if (this.total < highBound) {
        highBound = this.total;
      }

      return highBound;
    },
    from: function from() {
      return this.serverPagination ? 0 : this.pagination.per_page * (this.pagination.current_page - 1);
    },
    total: function total() {
      return this.pagination.total ? this.pagination.total : this.searchedQty ? this.searchedItems.length : this.items.length;
    },
    fromEditItemPage: function fromEditItemPage() {
      return this.$route.name === this.routeDetector.to && this.editItemPathName === this.routeDetector.from;
    }
  }),
  watch: {
    items: function items() {
      this.initFuseSearch(this.searchFields);
    },
    itemsQty: function itemsQty() {
      this.returnToPreviousPage();
    },
    searchedQty: function searchedQty() {
      this.returnToPreviousPage();
    }
  },
  created: function created() {
    if (!this.fromEditItemPage) {
      this.resetRouteDetector();
      this.setState();
    }

    this.returnToPreviousPage();
    this.requestItems();
  },
  mounted: function mounted() {
    window.scrollTo(0, 0);
    this.initFuseSearch(this.searchFields);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('table', {
    clearStateAction: 'clearState',
    getRequestItemsAction: 'getItemsGet',
    postRequestItemsAction: 'getItemsPost',
    setFieldAction: 'setField',
    setFieldsAction: 'setFields',
    setPaginationFieldAction: 'setPaginationField',
    resetPaginationAction: 'resetPagination',
    setRouteDetectorFieldAction: 'setRouteDetectorField'
  }), {
    requestItems: function requestItems() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.serverPagination) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return _this.postRequestItemsAction();

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return _this.getRequestItemsAction();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    customSort: function customSort() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var sortOrder;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.sortInit && !_this2.loading && _this2.items.length && !_this2.fromEditItemPage)) {
                  _context2.next = 12;
                  break;
                }

                sortOrder = _this2.pagination.sort_order === 'asc' ? 'desc' : 'asc';
                _context2.next = 4;
                return Promise.all([_this2.setPaginationFieldAction({
                  field: 'sort_order',
                  value: sortOrder
                }), _this2.setPaginationFieldAction({
                  field: 'sort_by',
                  value: _this2.currentSort
                })]);

              case 4:
                if (!_this2.serverPagination) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 7;
                return _this2.postRequestItemsAction();

              case 7:
                _context2.t0 = _context2.sent;
                _context2.next = 11;
                break;

              case 10:
                _context2.t0 = _this2.sort(_this2.items);

              case 11:
                return _context2.abrupt("return", _context2.t0);

              case 12:
                _this2.resetRouteDetector();

                _this2.setFieldAction({
                  field: 'sortInit',
                  value: true
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    sort: function sort(value) {
      var _this3 = this;

      return value.sort(function (a, b) {
        var sortBy = _this3.pagination.sort_by;
        return _this3.pagination.sort_order === 'asc' ? _this3.getSort(a, b, sortBy) : _this3.getSort(b, a, sortBy);
      });
    },
    getSort: function getSort(a, b, sortBy) {
      var numberSort = typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number';
      return numberSort ? a[sortBy] < b[sortBy] ? -1 : 1 : a[sortBy].localeCompare(b[sortBy]);
    },
    search: function search(query) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var value;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                value = query.trim();
                _context3.next = 3;
                return Promise.all([_this4.setFieldAction({
                  field: 'searchQuery',
                  value: value
                }), _this4.setDefaultPage()]);

              case 3:
                if (!value) {
                  _this4.clearSearchedItems();
                }

                _this4.handleSearch();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    handleSearch: function handleSearch() {
      this.serverPagination ? _debounce(this.postRequestItemsAction) : this.setSearchedItems();
    },
    initFuseSearch: function initFuseSearch(keys) {
      if (!this.serverPagination) {
        this.fuseSearch = new fuse_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.items.slice(), {
          keys: keys,
          threshold: 0.3
        });
      }
    },
    changePage: function changePage(value) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this5.setPaginationFieldAction({
                  field: 'current_page',
                  value: value
                });

              case 2:
                if (!_this5.serverPagination) {
                  _context4.next = 6;
                  break;
                }

                console.log('changepage');
                _context4.next = 6;
                return _this5.postRequestItemsAction();

              case 6:
                window.scrollTo(0, 0);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    changePerPage: function changePerPage(value) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this6.setPaginationFieldAction({
                  field: 'per_page',
                  value: value
                });

              case 2:
                _context5.next = 4;
                return _this6.setDefaultPage();

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    setSearchedItems: function setSearchedItems() {
      var searchResult = this.fuseSearch.search(this.searchQuery).map(function (fuse) {
        return fuse.item;
      });
      this.setFieldAction({
        field: 'searchedItems',
        value: searchResult
      });
    },
    setDefaultPage: function setDefaultPage() {
      this.setPaginationFieldAction({
        field: 'current_page',
        value: 1
      });
    },
    clearSearchedItems: function clearSearchedItems() {
      this.setFieldAction({
        field: 'searchedItems',
        value: []
      });
    },
    setState: function setState() {
      this.resetPaginationAction();
      this.clearStateAction();
      this.setFieldAction({
        field: 'resourceUrl',
        value: this.resourceUrl
      });
      this.setPaginationFieldAction({
        field: 'sort_order',
        value: this.defaultSortOrder
      });
      this.setPaginationFieldAction({
        field: 'per_page',
        value: this.perPageOptions[0]
      });
    },
    returnToPreviousPage: function returnToPreviousPage() {
      this.serverPagination ? this.checkGoPrevWithServerPagination() : this.checkGoPrev();
    },
    checkGoPrevWithServerPagination: function checkGoPrevWithServerPagination() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!_this7.checkReturnToPreviousPage) {
                  _context6.next = 5;
                  break;
                }

                _context6.next = 3;
                return _this7.setPaginationFieldAction({
                  field: 'current_page',
                  value: _this7.pagination.current_page - 1
                });

              case 3:
                _context6.next = 5;
                return _this7.postRequestItemsAction();

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    checkGoPrev: function checkGoPrev() {
      if (this.pagination.current_page > this.totalPages) {
        this.setPaginationFieldAction({
          field: 'current_page',
          value: this.totalPages
        });
      }
    },
    resetRouteDetector: function resetRouteDetector() {
      this.setRouteDetectorFieldAction({
        field: 'from',
        value: null
      });
      this.setRouteDetectorFieldAction({
        field: 'to',
        value: null
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loading td {\n    opacity: 0;\n}\n.progress-bar__container {\n    height: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VExtendedTable.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=template&id=40d73892&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=template&id=40d73892& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "progress-bar__container" },
        [
          _c("md-progress-bar", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.loading,
                expression: "loading"
              }
            ],
            attrs: { "md-mode": "indeterminate" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.items
        ? _c(
            "div",
            [
              _c(
                "md-table",
                {
                  staticClass: "paginated-table table-striped table-hover",
                  class: { loading: _vm.loading },
                  attrs: {
                    value: _vm.queriedData,
                    "md-sort": _vm.currentSort,
                    "md-sort-fn": _vm.customSort
                  },
                  on: {
                    "update:mdSort": function($event) {
                      _vm.currentSort = $event
                    },
                    "update:md-sort": function($event) {
                      _vm.currentSort = $event
                    }
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "md-table-row",
                        fn: function(ref) {
                          var item = ref.item
                          return _c(
                            "md-table-row",
                            {},
                            [_vm._t("default", null, { item: item })],
                            2
                          )
                        }
                      }
                    ],
                    null,
                    true
                  )
                },
                [
                  _c(
                    "md-table-toolbar",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "md-field",
                        [
                          _c("label", { attrs: { for: "pages" } }, [
                            _vm._v("На странице")
                          ]),
                          _vm._v(" "),
                          _c(
                            "md-select",
                            {
                              attrs: {
                                value: _vm.pagination.per_page,
                                name: "pages"
                              },
                              on: { "md-selected": _vm.changePerPage }
                            },
                            _vm._l(_vm.perPageOptions, function(item) {
                              return _c(
                                "md-option",
                                {
                                  key: item,
                                  attrs: { label: item, value: item }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(item) +
                                      "\n                        "
                                  )
                                ]
                              )
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "md-field",
                        [
                          _c("md-input", {
                            staticStyle: { width: "200px" },
                            attrs: {
                              type: "search",
                              clearable: "",
                              placeholder: "Поиск",
                              value: _vm.searchQuery
                            },
                            on: { input: _vm.search }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm.isSearchedEmpty && !_vm.loading
                    ? _c("div", { staticClass: "alert alert-info mt-2" }, [
                        _c("h3", [
                          _vm._v(
                            "Нет данных соответствующих поисковому запросу!"
                          )
                        ])
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              !_vm.loading
                ? _c(
                    "md-card-actions",
                    { attrs: { "md-alignment": "space-between" } },
                    [
                      _c("div", [
                        _vm.serverPagination
                          ? _c("p", { staticClass: "card-category" }, [
                              _vm._v(
                                _vm._s(_vm.pagination.from) +
                                  " - " +
                                  _vm._s(_vm.pagination.to) +
                                  " / " +
                                  _vm._s(_vm.total)
                              )
                            ])
                          : _c("p", { staticClass: "card-category" }, [
                              _vm._v(
                                _vm._s(_vm.from + 1) +
                                  " - " +
                                  _vm._s(_vm.to) +
                                  " / " +
                                  _vm._s(_vm.total)
                              )
                            ])
                      ]),
                      _vm._v(" "),
                      _c("pagination", {
                        staticClass: "pagination-no-border pagination-success",
                        attrs: {
                          "per-page": _vm.pagination.per_page,
                          total: _vm.total,
                          value: _vm.pagination.current_page
                        },
                        on: { input: _vm.changePage }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        : !_vm.loading
        ? [
            _c("div", { staticClass: "alert alert-info mt-2" }, [
              _c("h3", [_vm._v(_vm._s(_vm.emptyContent))])
            ])
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/VExtendedTable.vue":
/*!**************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/VExtendedTable.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VExtendedTable_vue_vue_type_template_id_40d73892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VExtendedTable.vue?vue&type=template&id=40d73892& */ "./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=template&id=40d73892&");
/* harmony import */ var _VExtendedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VExtendedTable.vue?vue&type=script&lang=js& */ "./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VExtendedTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VExtendedTable.vue?vue&type=style&index=0&lang=css& */ "./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VExtendedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VExtendedTable_vue_vue_type_template_id_40d73892___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VExtendedTable_vue_vue_type_template_id_40d73892___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/manager/js/custom_components/Tables/VExtendedTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VExtendedTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VExtendedTable.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=template&id=40d73892&":
/*!*********************************************************************************************************!*\
  !*** ./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=template&id=40d73892& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_template_id_40d73892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VExtendedTable.vue?vue&type=template&id=40d73892& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/manager/js/custom_components/Tables/VExtendedTable.vue?vue&type=template&id=40d73892&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_template_id_40d73892___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VExtendedTable_vue_vue_type_template_id_40d73892___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/manager/js/mixins/crudMethods.js":
/*!****************************************************!*\
  !*** ./resources/manager/js/mixins/crudMethods.js ***!
  \****************************************************/
/*! exports provided: createMethod, updateMethod, deleteMethod, uploadMethod, imageAddMethod, subCategoryImageAddMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMethod", function() { return createMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMethod", function() { return updateMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMethod", function() { return deleteMethod; });
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
        window.history.length > 1 ? _this.$router.go(-1) : _this.$router.push(redirectRoute);
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
        window.history.length > 1 ? _this2.$router.go(-1) : _this2.$router.push(redirectRoute);
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
              window.history.length > 1 ? _this3.$router.go(-1) : _this3.$router.push(redirectRoute);
            }

            return deleteSwalFireAlert(successText, title);
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
    upload: function upload(_ref4) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var uploadFiles, _ref4$type, type, _ref4$id, id, _ref4$storeModule, storeModule, files, module;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                uploadFiles = _ref4.uploadFiles, _ref4$type = _ref4.type, type = _ref4$type === void 0 ? null : _ref4$type, _ref4$id = _ref4.id, id = _ref4$id === void 0 ? null : _ref4$id, _ref4$storeModule = _ref4.storeModule, storeModule = _ref4$storeModule === void 0 ? null : _ref4$storeModule;
                files = Array.from(uploadFiles);
                module = storeModule ? storeModule : 'categories';

                if (!id) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return _this4.$store.dispatch("".concat(module, "/uploadImages"), {
                  files: files,
                  id: id,
                  type: type
                });

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.next = 10;
                return _this4.$store.dispatch('images/store', files);

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
    addImages: function addImages(_ref5) {
      var _this5 = this;

      var id = _ref5.id,
          data = _ref5.data;
      this.$store.dispatch('categories/addSelectedImages', {
        id: id,
        data: data
      }).then(function () {
        _this5.$router.push({
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
    addImages: function addImages(_ref6) {
      var _this6 = this;

      var type = _ref6.type,
          id = _ref6.id,
          data = _ref6.data,
          redirectRoute = _ref6.redirectRoute;
      this.$store.dispatch('subCategories/addSelectedImages', {
        type: type,
        id: id,
        data: data
      }).then(function () {
        _this6.$router.push(redirectRoute);

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

/***/ })

}]);