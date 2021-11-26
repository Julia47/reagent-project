/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mui-core-generate-utility-class"));
	else if(typeof define === 'function' && define.amd)
		define("mui-core-generate-utility-classes", [], factory);
	else if(typeof exports === 'object')
		exports["mui-core-generate-utility-classes"] = factory(require("mui-core-generate-utility-class"));
	else
		root["MuiCoreGenerateUtilityClasses"] = factory(root["MuiCoreGenerateUtilityClass"]);
})((typeof self !== 'undefined' ? self : global), function(__WEBPACK_EXTERNAL_MODULE__generateUtilityClass__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateUtilityClasses)\n/* harmony export */ });\n/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generateUtilityClass */ \"../generateUtilityClass\");\n/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction generateUtilityClasses(componentName, slots) {\n  const result = {};\n  slots.forEach(slot => {\n    result[slot] = _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0___default()(componentName, slot);\n  });\n  return result;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9jb3JlL2dlbmVyYXRlVXRpbGl0eUNsYXNzZXMvZ2VuZXJhdGVVdGlsaXR5Q2xhc3Nlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFDNUM7QUFDZjtBQUNBO0FBQ0EsbUJBQW1CLDREQUFvQjtBQUN2QyxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL011aUNvcmVHZW5lcmF0ZVV0aWxpdHlDbGFzc2VzLy4vbm9kZV9tb2R1bGVzL0BtdWkvY29yZS9nZW5lcmF0ZVV0aWxpdHlDbGFzc2VzL2dlbmVyYXRlVXRpbGl0eUNsYXNzZXMuanM/MWU1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2VuZXJhdGVVdGlsaXR5Q2xhc3MgZnJvbSAnLi4vZ2VuZXJhdGVVdGlsaXR5Q2xhc3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVVdGlsaXR5Q2xhc3Nlcyhjb21wb25lbnROYW1lLCBzbG90cykge1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgc2xvdHMuZm9yRWFjaChzbG90ID0+IHtcbiAgICByZXN1bHRbc2xvdF0gPSBnZW5lcmF0ZVV0aWxpdHlDbGFzcyhjb21wb25lbnROYW1lLCBzbG90KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-core-generate-utility-classes.js":
/*!*****************************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-core-generate-utility-classes.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_core_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_core_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/core/generateUtilityClasses */ \"./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWNvcmUtZ2VuZXJhdGUtdXRpbGl0eS1jbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXVpQ29yZUdlbmVyYXRlVXRpbGl0eUNsYXNzZXMvLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWNvcmUtZ2VuZXJhdGUtdXRpbGl0eS1jbGFzc2VzLmpzPzE4MDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJ0BtdWkvY29yZS9nZW5lcmF0ZVV0aWxpdHlDbGFzc2VzJ1xuZXhwb3J0ICogZnJvbSAnQG11aS9jb3JlL2dlbmVyYXRlVXRpbGl0eUNsYXNzZXMnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-core-generate-utility-classes.js\n");

/***/ }),

/***/ "../generateUtilityClass":
/*!******************************************************************************************************************************************************************************************!*\
  !*** external {"root":"MuiCoreGenerateUtilityClass","commonjs":"mui-core-generate-utility-class","commonjs2":"mui-core-generate-utility-class","umd":"mui-core-generate-utility-class"} ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__generateUtilityClass__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-core-generate-utility-classes.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});