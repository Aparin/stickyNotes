/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/allStickers/clear.js":
/*!**********************************!*\
  !*** ./src/allStickers/clear.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clear; });\nfunction clear() {\r\n\r\n    for (var id = 1; true; id++) {\r\n        let sticker = document.getElementById(id);\r\n        if (!sticker === false) {\r\n            sticker.remove();\r\n        } else { break; }\r\n    }\r\n\r\n    localStorage.clear();\r\n}\n\n//# sourceURL=webpack:///./src/allStickers/clear.js?");

/***/ }),

/***/ "./src/allStickers/listeners.js":
/*!**************************************!*\
  !*** ./src/allStickers/listeners.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listeners; });\n/* harmony import */ var _singleSticker_deleteSticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../singleSticker/deleteSticker */ \"./src/singleSticker/deleteSticker.js\");\n/* harmony import */ var _singleSticker_makeSticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleSticker/makeSticker */ \"./src/singleSticker/makeSticker.js\");\n/* harmony import */ var _singleSticker_currentId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleSticker/currentId */ \"./src/singleSticker/currentId.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ \"./src/allStickers/save.js\");\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear */ \"./src/allStickers/clear.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction listeners() {\r\n    let id = Object(_singleSticker_currentId__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n    let field = document.getElementById('stickyNotes');\r\n\r\n    field.onclick = function(e) {\r\n        var target = e.target;\r\n        if (target.parentNode.id == 'plus') { Object(_singleSticker_makeSticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id); }\r\n        if (target.parentNode.id == 'save') { Object(_save__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); }\r\n        if (target.parentNode.id == 'clear') { Object(_clear__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); }\r\n\r\n        var action = target.getAttribute('data-action');\r\n        if (action == 'delete') { Object(_singleSticker_deleteSticker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target.parentNode.id); }\r\n\r\n\r\n\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/allStickers/listeners.js?");

/***/ }),

/***/ "./src/allStickers/load.js":
/*!*********************************!*\
  !*** ./src/allStickers/load.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return load; });\nfunction load() {\r\n    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', localStorage.getItem('stickers'));\r\n};\n\n//# sourceURL=webpack:///./src/allStickers/load.js?");

/***/ }),

/***/ "./src/allStickers/mouseOverOut.js":
/*!*****************************************!*\
  !*** ./src/allStickers/mouseOverOut.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mouseOverOut; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n\r\nfunction mouseOverOut(id) {\r\n    let el = document.getElementById(id);\r\n    el.addEventListener('mouseover', function() {\r\n        el.style.background = 'white';\r\n    });\r\n    el.addEventListener('mouseout', function() {\r\n        el.style.background = 'linear-gradient(to top, grey, white)';\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/allStickers/mouseOverOut.js?");

/***/ }),

/***/ "./src/allStickers/panel.js":
/*!**********************************!*\
  !*** ./src/allStickers/panel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return panel; });\nfunction panel() {\r\n    let panelContents = `\r\n    <div id=\"panel\" class=\"panel\">\r\n        <div id=\"plus\" class=\"symbol\" title=\"Добавить стикер\"><img src=\"img/plus_32.png\"></div>\r\n        <div id=\"save\" class=\"symbol\" title=\"Сохранить всё\"><img src=\"img/save_32.png\"></div>       \r\n        <div id=\"clear\" class=\"symbol\" title=\"Удалить всё\"><img src=\"img/clear_32.png\"></div>\r\n    </div>`;\r\n\r\n    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);\r\n};\n\n//# sourceURL=webpack:///./src/allStickers/panel.js?");

/***/ }),

/***/ "./src/allStickers/save.js":
/*!*********************************!*\
  !*** ./src/allStickers/save.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nfunction save() {\r\n    let localStickers = '';\r\n    for (var id = 1; true; id++) {\r\n        let sticker = document.getElementById(id);\r\n        if (!sticker === false) {\r\n            localStickers += sticker.outerHTML;\r\n        } else { break; }\r\n    }\r\n\r\n    localStorage.setItem('stickers', localStickers);\r\n    localStorage.setItem('id', id - 1);\r\n}\n\n//# sourceURL=webpack:///./src/allStickers/save.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _allStickers_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allStickers/panel */ \"./src/allStickers/panel.js\");\n/* harmony import */ var _allStickers_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allStickers/load */ \"./src/allStickers/load.js\");\n/* harmony import */ var _allStickers_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allStickers/listeners */ \"./src/allStickers/listeners.js\");\n\r\n\r\n\r\n\r\nObject(_allStickers_panel__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nif (localStorage.getItem('stickers')) {\r\n    Object(_allStickers_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\nObject(_allStickers_listeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/out.js":
/*!********************!*\
  !*** ./src/out.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction out(data) {\r\n    const element = document.createElement('span');\r\n    element.textContent = data + ' ';\r\n    document.getElementById('out').appendChild(element);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (out);\n\n//# sourceURL=webpack:///./src/out.js?");

/***/ }),

/***/ "./src/singleSticker/addDeleteSign.js":
/*!********************************************!*\
  !*** ./src/singleSticker/addDeleteSign.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addDeleteSign; });\n/* harmony import */ var _deleteSticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteSticker */ \"./src/singleSticker/deleteSticker.js\");\n\r\n\r\nfunction addDeleteSign(id) {\r\n    const del = document.createElement('img');\r\n    del.src = 'img/del_10.png';\r\n    del.classList.add('del');\r\n    del.setAttribute('data-action', 'delete');\r\n    return del;\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/addDeleteSign.js?");

/***/ }),

/***/ "./src/singleSticker/currentId.js":
/*!****************************************!*\
  !*** ./src/singleSticker/currentId.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return currentId; });\nfunction currentId() {\r\n    for (var id = 1; document.getElementById(id); id++) {}\r\n    return id;\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/currentId.js?");

/***/ }),

/***/ "./src/singleSticker/deleteSticker.js":
/*!********************************************!*\
  !*** ./src/singleSticker/deleteSticker.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteSticker; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n\r\n\r\nfunction deleteSticker(id) {\r\n    document.getElementById(id).remove();\r\n\r\n    for (var i = +id + 1; true; i++) {\r\n        const sticker = document.getElementById(i);\r\n\r\n        if (!sticker === false) {\r\n            sticker.id = i - 1;\r\n        } else { break; }\r\n    }\r\n    return i;\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/deleteSticker.js?");

/***/ }),

/***/ "./src/singleSticker/editSticker.js":
/*!******************************************!*\
  !*** ./src/singleSticker/editSticker.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editSticker; });\n/* harmony import */ var _makeSticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeSticker */ \"./src/singleSticker/makeSticker.js\");\n\r\n\r\nfunction editSticker(id) {\r\n    let sticker = document.getElementById(id);\r\n    let head = sticker.children[1].textContent;\r\n    let body = sticker.children[2].textContent;\r\n\r\n    sticker.addEventListener('dblclick', function() {\r\n        if (sticker.className === 'newSticker') {\r\n            sticker.classList = 'editSticker';\r\n            sticker.innerHTML = (`<input type=\"text\" name=\"head\" style=\"border: 0px; font-size:14px; width:290px; margin: 5px;\" value=\"${head}\" /><br />\t\r\n            <textarea style=\"width: 290px; height:265px;  margin: 3px; border: 0px;\" name=\"textArea\">${body}</textarea>`);\r\n\r\n        } else {\r\n            head = sticker.getElementsByTagName('h1')[0].value;\r\n            body = sticker.getElementsByTagName('textArea')[0].value;\r\n\r\n            sticker.innerHTML = `<h1>${head}</h1><div>${body}</div>`;\r\n            sticker.className = 'newSticker';\r\n        }\r\n\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/editSticker.js?");

/***/ }),

/***/ "./src/singleSticker/makeDOMElement.js":
/*!*********************************************!*\
  !*** ./src/singleSticker/makeDOMElement.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeDOMelement; });\nfunction makeDOMelement(tagName, className, text, id) {\r\n    const element = document.createElement(tagName);\r\n    if (className) {\r\n        element.classList.add(className);\r\n    }\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    if (id) {\r\n        element.id = id;\r\n    }\r\n    return element;\r\n};\n\n//# sourceURL=webpack:///./src/singleSticker/makeDOMElement.js?");

/***/ }),

/***/ "./src/singleSticker/makeSticker.js":
/*!******************************************!*\
  !*** ./src/singleSticker/makeSticker.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeSticker; });\n/* harmony import */ var _makeDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeDOMElement */ \"./src/singleSticker/makeDOMElement.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editSticker */ \"./src/singleSticker/editSticker.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _allStickers_mouseOverOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allStickers/mouseOverOut */ \"./src/allStickers/mouseOverOut.js\");\n/* harmony import */ var _addDeleteSign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addDeleteSign */ \"./src/singleSticker/addDeleteSign.js\");\n/* harmony import */ var _currentId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currentId */ \"./src/singleSticker/currentId.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction makeSticker() {\r\n    let id = Object(_currentId__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\n    let area = document.getElementById('stickyNotes');\r\n    const wrap = Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'newSticker', '', id);\r\n    const fragment = document.createDocumentFragment();\r\n\r\n    fragment.appendChild(Object(_addDeleteSign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id));\r\n    fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', '', 'Новый стикер')); // adding headline\r\n    fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', '', 'Текст стикера'));\r\n    wrap.appendChild(fragment);\r\n    area.appendChild(wrap);\r\n\r\n    Object(_allStickers_mouseOverOut__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id);\r\n\r\n};\n\n//# sourceURL=webpack:///./src/singleSticker/makeSticker.js?");

/***/ })

/******/ });