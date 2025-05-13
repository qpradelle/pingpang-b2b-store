/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./lib/CartContext.tsx":
/*!*****************************!*\
  !*** ./lib/CartContext.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction CartProvider({ children }) {\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (item)=>{\n        setCart((prev)=>[\n                ...prev,\n                item\n            ]);\n    };\n    const removeFromCart = (id)=>{\n        setCart((prev)=>prev.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspaces/pingpang-b2b-store/lib/CartContext.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\nfunction useCart() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) throw new Error('useCart must be used within CartProvider');\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9DYXJ0Q29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzRTtBQWV0RSxNQUFNRyw0QkFBY0gsb0RBQWFBLENBQThCSTtBQUV4RCxTQUFTQyxhQUFhLEVBQUVDLFFBQVEsRUFBMkI7SUFDaEUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFhLEVBQUU7SUFFL0MsTUFBTU8sWUFBWSxDQUFDQztRQUNqQkYsUUFBUUcsQ0FBQUEsT0FBUTttQkFBSUE7Z0JBQU1EO2FBQUs7SUFDakM7SUFFQSxNQUFNRSxpQkFBaUIsQ0FBQ0M7UUFDdEJMLFFBQVFHLENBQUFBLE9BQVFBLEtBQUtHLE1BQU0sQ0FBQ0osQ0FBQUEsT0FBUUEsS0FBS0csRUFBRSxLQUFLQTtJQUNsRDtJQUVBLHFCQUNFLDhEQUFDVixZQUFZWSxRQUFRO1FBQUNDLE9BQU87WUFBRVQ7WUFBTUU7WUFBV0c7UUFBZTtrQkFDNUROOzs7Ozs7QUFHUDtBQUVPLFNBQVNXO0lBQ2QsTUFBTUMsVUFBVWpCLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNlLFNBQVMsTUFBTSxJQUFJQyxNQUFNO0lBQzlCLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL3BpbmdwYW5nLWIyYi1zdG9yZS9saWIvQ2FydENvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBDYXJ0SXRlbSB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHByaWNlOiBudW1iZXJcbiAgaW1hZ2VfdXJsOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIENhcnRDb250ZXh0VHlwZSB7XG4gIGNhcnQ6IENhcnRJdGVtW11cbiAgYWRkVG9DYXJ0OiAoaXRlbTogQ2FydEl0ZW0pID0+IHZvaWRcbiAgcmVtb3ZlRnJvbUNhcnQ6IChpZDogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDYXJ0Q29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcblxuZXhwb3J0IGZ1bmN0aW9uIENhcnRQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPENhcnRJdGVtW10+KFtdKVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtOiBDYXJ0SXRlbSkgPT4ge1xuICAgIHNldENhcnQocHJldiA9PiBbLi4ucHJldiwgaXRlbV0pXG4gIH1cblxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q2FydChwcmV2ID0+IHByZXYuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2FydCwgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcbiAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoJ3VzZUNhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBDYXJ0UHJvdmlkZXInKVxuICByZXR1cm4gY29udGV4dFxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDYXJ0Q29udGV4dCIsInVuZGVmaW5lZCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydCIsInNldENhcnQiLCJhZGRUb0NhcnQiLCJpdGVtIiwicHJldiIsInJlbW92ZUZyb21DYXJ0IiwiaWQiLCJmaWx0ZXIiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/CartContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/CartContext */ \"(pages-dir-node)/./lib/CartContext.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/workspaces/pingpang-b2b-store/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/pingpang-b2b-store/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDbUI7QUFFbEMsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsMERBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9waW5ncGFuZy1iMmItc3RvcmUvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tICcuLi9saWIvQ2FydENvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ2FydFByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FydFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();