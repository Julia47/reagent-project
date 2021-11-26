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
		define("mui-core-compose-classes", [], factory);
	else if(typeof exports === 'object')
		exports["mui-core-compose-classes"] = factory();
	else
		root["MuiCoreComposeClasses"] = factory();
})((typeof self !== 'undefined' ? self : global), function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/core/composeClasses/composeClasses.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/core/composeClasses/composeClasses.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ composeClasses)\n/* harmony export */ });\nfunction composeClasses(slots, getUtilityClass, classes) {\n  const output = {};\n  Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.\n  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208\n  slot => {\n    output[slot] = slots[slot].reduce((acc, key) => {\n      if (key) {\n        if (classes && classes[key]) {\n          acc.push(classes[key]);\n        }\n\n        acc.push(getUtilityClass(key));\n      }\n\n      return acc;\n    }, []).join(' ');\n  });\n  return output;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9jb3JlL2NvbXBvc2VDbGFzc2VzL2NvbXBvc2VDbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXVpQ29yZUNvbXBvc2VDbGFzc2VzLy4vbm9kZV9tb2R1bGVzL0BtdWkvY29yZS9jb21wb3NlQ2xhc3Nlcy9jb21wb3NlQ2xhc3Nlcy5qcz9mOGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2VDbGFzc2VzKHNsb3RzLCBnZXRVdGlsaXR5Q2xhc3MsIGNsYXNzZXMpIHtcbiAgY29uc3Qgb3V0cHV0ID0ge307XG4gIE9iamVjdC5rZXlzKHNsb3RzKS5mb3JFYWNoKCAvLyBgT2JqZXQua2V5cyhzbG90cylgIGNhbid0IGJlIHdpZGVyIHRoYW4gYFRgIGJlY2F1c2Ugd2UgaW5mZXIgYFRgIGZyb20gYHNsb3RzYC5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvcHVsbC8xMjI1MyNpc3N1ZWNvbW1lbnQtMjYzMTMyMjA4XG4gIHNsb3QgPT4ge1xuICAgIG91dHB1dFtzbG90XSA9IHNsb3RzW3Nsb3RdLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgaWYgKGNsYXNzZXMgJiYgY2xhc3Nlc1trZXldKSB7XG4gICAgICAgICAgYWNjLnB1c2goY2xhc3Nlc1trZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjYy5wdXNoKGdldFV0aWxpdHlDbGFzcyhrZXkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSkuam9pbignICcpO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@mui/core/composeClasses/composeClasses.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-core-compose-classes.js":
/*!********************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-core-compose-classes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_core_composeClasses__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_core_composeClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/core/composeClasses */ \"./node_modules/@mui/core/composeClasses/composeClasses.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWNvcmUtY29tcG9zZS1jbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXVpQ29yZUNvbXBvc2VDbGFzc2VzLy4vcmVhZ2VudC1tYXRlcmlhbC11aS1qcy9lbnRyaWVzL211aS1jb3JlLWNvbXBvc2UtY2xhc3Nlcy5qcz81MGUyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICdAbXVpL2NvcmUvY29tcG9zZUNsYXNzZXMnXG5leHBvcnQgKiBmcm9tICdAbXVpL2NvcmUvY29tcG9zZUNsYXNzZXMnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-core-compose-classes.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-core-compose-classes.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});