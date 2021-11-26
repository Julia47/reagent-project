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
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mui-core-generate-utility-class", [], factory);
	else if(typeof exports === 'object')
		exports["mui-core-generate-utility-class"] = factory();
	else
		root["MuiCoreGenerateUtilityClass"] = factory();
})((typeof self !== 'undefined' ? self : global), function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateUtilityClass)\n/* harmony export */ });\nconst globalStateClassesMapping = {\n  active: 'Mui-active',\n  checked: 'Mui-checked',\n  completed: 'Mui-completed',\n  disabled: 'Mui-disabled',\n  error: 'Mui-error',\n  expanded: 'Mui-expanded',\n  focused: 'Mui-focused',\n  focusVisible: 'Mui-focusVisible',\n  required: 'Mui-required',\n  selected: 'Mui-selected'\n};\nfunction generateUtilityClass(componentName, slot) {\n  const globalStateClass = globalStateClassesMapping[slot];\n  return globalStateClass || `${componentName}-${slot}`;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9jb3JlL2dlbmVyYXRlVXRpbGl0eUNsYXNzL2dlbmVyYXRlVXRpbGl0eUNsYXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0EsZ0NBQWdDLGNBQWMsR0FBRyxLQUFLO0FBQ3REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXVpQ29yZUdlbmVyYXRlVXRpbGl0eUNsYXNzLy4vbm9kZV9tb2R1bGVzL0BtdWkvY29yZS9nZW5lcmF0ZVV0aWxpdHlDbGFzcy9nZW5lcmF0ZVV0aWxpdHlDbGFzcy5qcz8zYzMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdsb2JhbFN0YXRlQ2xhc3Nlc01hcHBpbmcgPSB7XG4gIGFjdGl2ZTogJ011aS1hY3RpdmUnLFxuICBjaGVja2VkOiAnTXVpLWNoZWNrZWQnLFxuICBjb21wbGV0ZWQ6ICdNdWktY29tcGxldGVkJyxcbiAgZGlzYWJsZWQ6ICdNdWktZGlzYWJsZWQnLFxuICBlcnJvcjogJ011aS1lcnJvcicsXG4gIGV4cGFuZGVkOiAnTXVpLWV4cGFuZGVkJyxcbiAgZm9jdXNlZDogJ011aS1mb2N1c2VkJyxcbiAgZm9jdXNWaXNpYmxlOiAnTXVpLWZvY3VzVmlzaWJsZScsXG4gIHJlcXVpcmVkOiAnTXVpLXJlcXVpcmVkJyxcbiAgc2VsZWN0ZWQ6ICdNdWktc2VsZWN0ZWQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVVdGlsaXR5Q2xhc3MoY29tcG9uZW50TmFtZSwgc2xvdCkge1xuICBjb25zdCBnbG9iYWxTdGF0ZUNsYXNzID0gZ2xvYmFsU3RhdGVDbGFzc2VzTWFwcGluZ1tzbG90XTtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlQ2xhc3MgfHwgYCR7Y29tcG9uZW50TmFtZX0tJHtzbG90fWA7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-core-generate-utility-class.js":
/*!***************************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-core-generate-utility-class.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_core_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_core_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/core/generateUtilityClass */ \"./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWNvcmUtZ2VuZXJhdGUtdXRpbGl0eS1jbGFzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RCIsInNvdXJjZXMiOlsid2VicGFjazovL011aUNvcmVHZW5lcmF0ZVV0aWxpdHlDbGFzcy8uL3JlYWdlbnQtbWF0ZXJpYWwtdWktanMvZW50cmllcy9tdWktY29yZS1nZW5lcmF0ZS11dGlsaXR5LWNsYXNzLmpzPzVkZTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJ0BtdWkvY29yZS9nZW5lcmF0ZVV0aWxpdHlDbGFzcydcbmV4cG9ydCAqIGZyb20gJ0BtdWkvY29yZS9nZW5lcmF0ZVV0aWxpdHlDbGFzcyciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-core-generate-utility-class.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-core-generate-utility-class.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});