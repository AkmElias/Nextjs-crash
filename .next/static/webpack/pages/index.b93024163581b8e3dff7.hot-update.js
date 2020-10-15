webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "D:\\repos\\Nextjs-crash\\components\\Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var list = '';

      if (this.state.currency === 'USD') {
        list = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("list"), __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 18
          }
        }, "Bitcoin Rate for ", this.props.bpi.USD.description, ": ", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }
        }, this.props.bpi.USD.code), " ", __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 84
          }
        }, this.props.bpi.USD.rate)));
      } else if (this.state.currency === 'GBP') {
        __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }
        }, "Bitcoin Rate for ", this.props.bpi.GBP.description, ": ", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 16
          }
        }, this.props.bpi.GBP.code), " ", __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 87
          }
        }, this.props.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }
        }, "Bitcoin Rate for ", this.props.bpi.EUR.description, ": ", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 16
          }
        }, this.props.bpi.USD.code), " ", __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 87
          }
        }, this.props.bpi.EUR.rate));
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, "Bitcoin Rate for ", this.props.bpi.USD.description, ": ", __jsx("span", {
        className: "badge badge-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 28
        }
      }, this.props.bpi.USD.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 99
        }
      }, this.props.bpi.USD.rate))));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9yZWFkT25seUVycm9yLmpzIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwibGlzdCIsInN0YXRlIiwicHJvcHMiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxjQUFRLEVBQUU7QUFETixLOzs7Ozs7OzZCQUlFO0FBRU4sVUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBQ0EsVUFBRyxLQUFLQyxLQUFMLENBQVdGLFFBQVgsS0FBd0IsS0FBM0IsRUFBa0M7QUFDakNDLFlBQUksc0dBQUk7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ1UsS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJDLFdBRDdCLFFBRUw7QUFBTSxtQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXVDLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRSxJQUExRCxDQUZLLE9BRWtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkcsSUFBNUIsQ0FGbEUsQ0FBSixDQUFKO0FBSUEsT0FMRCxNQUtPLElBQUcsS0FBS04sS0FBTCxDQUFXRixRQUFYLEtBQXNCLEtBQXpCLEVBQWdDO0FBQ25DO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNrQixLQUFLRyxLQUFMLENBQVdDLEdBQVgsQ0FBZUssR0FBZixDQUFtQkgsV0FEckMsUUFFRztBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJGLElBQTFELENBRkgsT0FFMEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlSyxHQUFmLENBQW1CRCxJQUE1QixDQUYxRTtBQUlILE9BTE0sTUFLQSxJQUFHLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxLQUF1QixLQUExQixFQUFpQztBQUNwQztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDa0IsS0FBS0csS0FBTCxDQUFXQyxHQUFYLENBQWVNLEdBQWYsQ0FBbUJKLFdBRHJDLFFBRUc7QUFBTSxtQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXVDLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRSxJQUExRCxDQUZILE9BRTBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkYsSUFBNUIsQ0FGMUU7QUFJSDs7QUFFRCxhQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSSxpQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ3NCLEtBQUtMLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CQyxXQUR6QyxRQUVPO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1QyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkUsSUFBMUQsQ0FGUCxPQUU4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHLElBQTVCLENBRjlFLENBREosQ0FESixDQUhKO0FBWUg7Ozs7RUFyQ2dCRyw0Q0FBSyxDQUFDQyxTOztBQXdDWmIscUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjkzMDI0MTYzNTgxYjhlM2RmZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gJyc7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ1VTRCcpIHtcclxuICAgICAgICAgbGlzdCA9ICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxyXG4gICAgICAgICBCaXRjb2luIFJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+e3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3k9PT0nR0JQJykge1xyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxyXG4gICAgICAgICAgICBCaXRjb2luIFJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5HQlAuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+e3RoaXMucHJvcHMuYnBpLkdCUC5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuR0JQLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0nRVVSJykge1xyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxyXG4gICAgICAgICAgICBCaXRjb2luIFJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+e3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuRVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCaXRjb2luIFJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+e3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==