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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clear; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n\r\n\r\nfunction clear() {\r\n\r\n    if (!localStorage.getItem('stickers')) { alert(\"Нет сохранённых стикеров, удалять нечего...\"); } else {\r\n        var msg = 'Удалить без возможности восстановления?';\r\n        var div = document.createElement('div');\r\n        div.style.cssText = `\r\n            text-align:center; padding:10px; position:fixed; background-color: white; \r\n            width:200px; height:70px; top: 50px; left: 100px; margin-right:-100px; margin-bottom:-20px; border: 1px dotted #000`;\r\n        div.onclick = function(e) {\r\n            if (e.target.value == 'Да') {\r\n                for (var id = 1; true; id++) {\r\n                    let sticker = document.getElementById(id);\r\n                    if (!sticker === false) {\r\n                        sticker.remove();\r\n                    } else { break; }\r\n                }\r\n\r\n                localStorage.clear();\r\n                this.parentNode.removeChild(this)\r\n            } else {\r\n                this.parentNode.removeChild(this)\r\n            }\r\n        }\r\n        let inp = 'style=\"margin: 5px; padding: 3px; font-size: 14px;\"';\r\n        div.innerHTML = '<div>' + msg + `<div><input ${inp} type=\"button\" value=\"Да\"><input ${inp} type=\"button\" value=\"Нет\">`;\r\n\r\n        document.body.appendChild(div);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/allStickers/clear.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return panel; });\nfunction panel() {\r\n    let panelContents = `\r\n    <div id=\"panel\" class=\"panel\">\r\n        <div id=\"plus\" class=\"symbol\" title=\"Добавить стикер\"><img src=\"img/plus_32.png\"></div>\r\n        <div id=\"saving\" class=\"symbol\" title=\"Сохранить всё\"><img src=\"img/save_32.png\"></div>       \r\n        <div id=\"cleaning\" class=\"symbol\" title=\"Удалить всё\"><img src=\"img/clear_32.png\"></div>\r\n    </div>`;\r\n\r\n    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);\r\n};\n\n//# sourceURL=webpack:///./src/allStickers/panel.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _allStickers_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allStickers/panel */ \"./src/allStickers/panel.js\");\n/* harmony import */ var _allStickers_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allStickers/load */ \"./src/allStickers/load.js\");\n/* harmony import */ var _singleSticker_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleSticker/listeners */ \"./src/singleSticker/listeners.js\");\n\r\n\r\n\r\n\r\nObject(_allStickers_panel__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nif (localStorage.getItem('stickers')) {\r\n    Object(_allStickers_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\nObject(_singleSticker_listeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/out.js":
/*!********************!*\
  !*** ./src/out.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return out; });\nfunction out(data) {\r\n    const element = document.createElement('span');\r\n    element.textContent = data + ' ';\r\n    document.getElementById('out').appendChild(element);\r\n};\n\n//# sourceURL=webpack:///./src/out.js?");

/***/ }),

/***/ "./src/singleSticker/addMiniSigns.js":
/*!*******************************************!*\
  !*** ./src/singleSticker/addMiniSigns.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addMiniSigns; });\nfunction addMiniSigns() {\r\n    var fragment = document.createDocumentFragment();\r\n\r\n    const edit = document.createElement('img');\r\n    edit.src = 'img/edit_14x10.png';\r\n    edit.classList.add('edit');\r\n    edit.setAttribute('data-action', 'edit');\r\n    fragment.appendChild(edit);\r\n\r\n    const del = document.createElement('img');\r\n    del.src = 'img/del_10.png';\r\n    del.classList.add('del');\r\n    del.setAttribute('data-action', 'delete');\r\n    fragment.appendChild(del);\r\n\r\n    return fragment;\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/addMiniSigns.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editSticker; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/singleSticker/addMiniSigns.js\");\n\r\n\r\n\r\nfunction editSticker(id) {\r\n    let sticker = document.getElementById(id);\r\n\r\n    sticker.className = 'editSticker';\r\n    let head = sticker.querySelector('h1').textContent;\r\n    let body = sticker.querySelector('p').textContent;\r\n    sticker.innerHTML = `    \r\n    <img src=\"img/edit_10.png\" class=\"editBig\" title=\"Закрыть без сохранения\" data-action=\"close\">\r\n    <img src=\"img/save_18.png\" class=\"editBig\" title=\"Применить изменения\" data-action=\"ok\">\r\n    <input type=\"text\" style=\"width:250px\" value=\"${head}\">\r\n    <br />\t\r\n    <textarea style=\"width: 285px; height:260px;  margin: 3px; border: 0px;\" name=\"textArea\">${body}</textarea>`;\r\n\r\n\r\n    sticker.onclick = function(e) {\r\n        var target = e.target;\r\n        var action = target.getAttribute('data-action');\r\n        if (action == 'ok') {\r\n            head = sticker.getElementsByTagName('input')[0].value;\r\n            body = sticker.getElementsByTagName('textArea')[0].value;\r\n\r\n\r\n            sticker.innerHTML = '';\r\n            sticker.className = 'newSticker'\r\n            sticker.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;\r\n\r\n        }\r\n        if (action == 'close') {\r\n            sticker.innerHTML = '';\r\n            sticker.className = 'newSticker'\r\n            sticker.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`\r\n        }\r\n\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/editSticker.js?");

/***/ }),

/***/ "./src/singleSticker/listeners.js":
/*!****************************************!*\
  !*** ./src/singleSticker/listeners.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listeners; });\n/* harmony import */ var _deleteSticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteSticker */ \"./src/singleSticker/deleteSticker.js\");\n/* harmony import */ var _makeSticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeSticker */ \"./src/singleSticker/makeSticker.js\");\n/* harmony import */ var _currentId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentId */ \"./src/singleSticker/currentId.js\");\n/* harmony import */ var _allStickers_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allStickers/save */ \"./src/allStickers/save.js\");\n/* harmony import */ var _allStickers_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../allStickers/clear */ \"./src/allStickers/clear.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editSticker */ \"./src/singleSticker/editSticker.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _moveTheSticker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./moveTheSticker */ \"./src/singleSticker/moveTheSticker.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction listeners() {\r\n    plus.onclick = function() { Object(_makeSticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); }\r\n    saving.onclick = function() { Object(_allStickers_save__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); }\r\n    cleaning.onclick = function() { Object(_allStickers_clear__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); }\r\n\r\n    let field = document.getElementById('stickyNotes');\r\n\r\n    field.onclick = function(e) {\r\n        var target = e.target;\r\n        var action = target.getAttribute('data-action');\r\n        if (action == 'delete') { Object(_deleteSticker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target.parentNode.id); }\r\n        if (action == 'edit') { Object(_editSticker__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(target.parentNode.id); }\r\n        // if (target.class = 'newSticker') { moveTheSticker(); }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/listeners.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeSticker; });\n/* harmony import */ var _makeDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeDOMElement */ \"./src/singleSticker/makeDOMElement.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editSticker */ \"./src/singleSticker/editSticker.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _allStickers_mouseOverOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allStickers/mouseOverOut */ \"./src/allStickers/mouseOverOut.js\");\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/singleSticker/addMiniSigns.js\");\n/* harmony import */ var _currentId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currentId */ \"./src/singleSticker/currentId.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction makeSticker() {\r\n    let id = Object(_currentId__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\n    let area = document.getElementById('stickyNotes');\r\n    const wrap = Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'editSticker', '', id);\r\n    const fragment = document.createDocumentFragment();\r\n\r\n    fragment.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id));\r\n    fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', '', 'Новый стикер')); // adding headline\r\n    fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', '', ''));\r\n    wrap.appendChild(fragment);\r\n    area.appendChild(wrap);\r\n\r\n    // mouseOverOut(id);\r\n    Object(_editSticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\r\n\r\n};\n\n//# sourceURL=webpack:///./src/singleSticker/makeSticker.js?");

/***/ }),

/***/ "./src/singleSticker/moveTheSticker.js":
/*!*********************************************!*\
  !*** ./src/singleSticker/moveTheSticker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return moveTheSticker; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n\r\n\r\nfunction moveTheSticker() {\r\n    Object(_out__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('moving sticker... ');\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/moveTheSticker.js?");

/***/ })

/******/ });