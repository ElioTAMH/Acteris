/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "__barrel_optimize__?names=Download!=!./node_modules/lucide-react/dist/esm/lucide-react.js":
/*!*************************************************************************************************!*\
  !*** __barrel_optimize__?names=Download!=!./node_modules/lucide-react/dist/esm/lucide-react.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Download: () => (/* reexport safe */ _icons_download_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _icons_download_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/download.js */ "./node_modules/lucide-react/dist/esm/icons/download.js");



/***/ }),

/***/ "./src/containers/Home/components/hero/UseHero.js":
/*!********************************************************!*\
  !*** ./src/containers/Home/components/hero/UseHero.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/containers/Home/components/hero/hero.js":
/*!*****************************************************!*\
  !*** ./src/containers/Home/components/hero/hero.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Download!=!lucide-react */ \"__barrel_optimize__?names=Download!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var _UseHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UseHero */ \"./src/containers/Home/components/hero/UseHero.js\");\n/* harmony import */ var _UseHero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UseHero__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Hero() {\n    var HandleDownload = (0,_UseHero__WEBPACK_IMPORTED_MODULE_2__.UseHero)().HandleDownload;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"Hero\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"HeroContainer\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"HeroContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"HeroTitle\",\n                        children: [\n                            \"Bienvenue sur \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Acteris\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n                                lineNumber: 13,\n                                columnNumber: 27\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"HeroDescription\",\n                        children: \"D\\xe9couvrez un nouveau monde de jeu passionnant avec notre serveur Minecraft unique\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"HeroButton\",\n                        onClick: HandleDownload,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_3__.Download, {\n                                size: 20\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"T\\xe9l\\xe9charger le launcher\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jeanm\\\\OneDrive\\\\Documents\\\\Github\\\\Acteris\\\\src\\\\containers\\\\Home\\\\components\\\\hero\\\\hero.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Hero;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lL2NvbXBvbmVudHMvaGVyby9oZXJvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBQ0o7QUFFcEMsU0FBU0c7SUFDUCxJQUFNLGlCQUFxQkQsaURBQU9BLEdBQTFCRTtJQUVSLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTs7NEJBQVk7MENBQ1YsOERBQUNHOzBDQUFLOzs7Ozs7Ozs7Ozs7a0NBRXRCLDhEQUFDQzt3QkFBRUosV0FBVTtrQ0FBa0I7Ozs7OztrQ0FJL0IsOERBQUNLO3dCQUFPTCxXQUFVO3dCQUFhTSxTQUFTUjs7MENBQ3RDLDhEQUFDSCxrRkFBUUE7Z0NBQUNZLE1BQU07Ozs7OzswQ0FDaEIsOERBQUNKOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0tBdEJTTjtBQXdCVCxpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqZWFubVxcT25lRHJpdmVcXERvY3VtZW50c1xcR2l0aHViXFxBY3RlcmlzXFxzcmNcXGNvbnRhaW5lcnNcXEhvbWVcXGNvbXBvbmVudHNcXGhlcm9cXGhlcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEb3dubG9hZCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlSGVybyB9IGZyb20gXCIuL1VzZUhlcm9cIjtcclxuXHJcbmZ1bmN0aW9uIEhlcm8oKSB7XHJcbiAgY29uc3QgeyBIYW5kbGVEb3dubG9hZCB9ID0gVXNlSGVybygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiSGVyb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Db250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9Db250ZW50XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiSGVyb1RpdGxlXCI+XHJcbiAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgPHNwYW4+QWN0ZXJpczwvc3Bhbj5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJIZXJvRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgRMOpY291dnJleiB1biBub3V2ZWF1IG1vbmRlIGRlIGpldSBwYXNzaW9ubmFudCBhdmVjIG5vdHJlIHNlcnZldXJcclxuICAgICAgICAgICAgTWluZWNyYWZ0IHVuaXF1ZVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJIZXJvQnV0dG9uXCIgb25DbGljaz17SGFuZGxlRG93bmxvYWR9PlxyXG4gICAgICAgICAgICA8RG93bmxvYWQgc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgIDxzcGFuPlTDqWzDqWNoYXJnZXIgbGUgbGF1bmNoZXI8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG93bmxvYWQiLCJVc2VIZXJvIiwiSGVybyIsIkhhbmRsZURvd25sb2FkIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwic3BhbiIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Home/components/hero/hero.js\n"));

/***/ })

});