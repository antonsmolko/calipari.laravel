(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/lib/CatalogPageProps/index.js":
/*!****************************************************!*\
  !*** ./resources/js/lib/CatalogPageProps/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  topics: {
    PAGE_TITLE: 'Темы',
    CREATE_PAGE_TITLE: 'Новая тема',
    TABLE_TITLE: 'Список тем'
  },
  colors: {
    PAGE_TITLE: 'Цвета',
    CREATE_PAGE_TITLE: 'Новый цвет',
    TABLE_TITLE: 'Список цветов'
  },
  interiors: {
    PAGE_TITLE: 'Интерьеры',
    CREATE_PAGE_TITLE: 'Новый интерьер',
    TABLE_TITLE: 'Список интерьеров'
  },
  tags: {
    PAGE_TITLE: 'Теги',
    CREATE_PAGE_TITLE: 'Новый тег',
    TABLE_TITLE: 'Список тегов',
    DELETE_CONFIRM_TEXT: function DELETE_CONFIRM_TEXT(title) {
      return "\u0442\u044D\u0433 \xAB".concat(title, "\xBB");
    },
    DELETE_SUCCESS_TEXT: 'Тег удален!',
    CREATE_SUCCESS_TEXT: 'Тег создан!',
    UPDATE_SUCCESS_TEXT: 'Тег обновлен!'
  },
  owners: {
    PAGE_TITLE: 'Владельцы',
    CREATE_PAGE_TITLE: 'Новый владелец',
    TABLE_TITLE: 'Список владельцев',
    DELETE_CONFIRM_TEXT: function DELETE_CONFIRM_TEXT(title) {
      return "\u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430 \xAB".concat(title, "\xBB");
    },
    DELETE_SUCCESS_TEXT: 'Владелец удален!',
    CREATE_SUCCESS_TEXT: 'Владелец создан!',
    UPDATE_SUCCESS_TEXT: 'Владелец обновлен!'
  }
});

/***/ }),

/***/ "./resources/js/mixins/categories.js":
/*!*******************************************!*\
  !*** ./resources/js/mixins/categories.js ***!
  \*******************************************/
/*! exports provided: categoryPage, subCategoryPage, tableTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryPage", function() { return categoryPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryPage", function() { return subCategoryPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableTitle", function() { return tableTitle; });
/* harmony import */ var _lib_CatalogPageProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/CatalogPageProps */ "./resources/js/lib/CatalogPageProps/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var categoryPage = {
  props: {
    category_type: {
      type: String,
      require: true
    }
  },
  data: function data() {
    return {
      pageProps: _lib_CatalogPageProps__WEBPACK_IMPORTED_MODULE_0__["default"],
      storeModule: 'categories',
      redirectRoute: {
        name: 'cms.catalog.categories.list',
        params: {
          category_type: this.category_type
        }
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    pageTitle: function pageTitle(state) {
      return state.pageTitle;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['setPageTitle']))
};
var subCategoryPage = {
  props: {
    category_type: {
      type: String,
      require: true
    }
  },
  data: function data() {
    return {
      pageProps: _lib_CatalogPageProps__WEBPACK_IMPORTED_MODULE_0__["default"],
      storeModule: 'subCategories',
      redirectRoute: {
        name: 'cms.catalog.subcategories.list',
        params: {
          category_type: this.category_type
        }
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    pageTitle: function pageTitle(state) {
      return state.pageTitle;
    }
  }))
};
var tableTitle = {
  computed: {
    tableTitle: function tableTitle() {
      return _lib_CatalogPageProps__WEBPACK_IMPORTED_MODULE_0__["default"][this.category_type].TABLE_TITLE;
    }
  }
};

/***/ }),

/***/ "./resources/js/mixins/crudMethods.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/crudMethods.js ***!
  \********************************************/
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
        // this.$router.push(redirectRoute);
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
        // this.$router.push(redirectRoute);
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
              // this.$router.push(redirectRoute);
              window.history.length > 1 ? _this3.$router.go(-1) : _this3.$router.push(redirectRoute);
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
          name: 'cms.catalog.categories.images',
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

/***/ })

}]);