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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/out.js":
/*!********************!*\
  !*** ./src/out.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return out; });\nfunction out(data) {\r\n    const element = document.createElement('span');\r\n    element.textContent = data + ' ';\r\n    document.getElementById('out').appendChild(element);\r\n};\n\n//# sourceURL=webpack:///./src/out.js?");

/***/ }),

/***/ "./src/singleSticker/Sticker.js":
/*!**************************************!*\
  !*** ./src/singleSticker/Sticker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sticker; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _currentId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentId */ \"./src/singleSticker/currentId.js\");\n/* harmony import */ var _makeDOMElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeDOMElement */ \"./src/singleSticker/makeDOMElement.js\");\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/singleSticker/addMiniSigns.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editSticker */ \"./src/singleSticker/editSticker.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Sticker {\r\n    constructor(name = 'Новый стикер', content = '', type = 'simple') {\r\n        this.type = type;\r\n        this.name = name;\r\n        this.content = content;\r\n        this.id = Object(_currentId__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n\r\n    create() {\r\n        const area = document.getElementById('stickyNotes');\r\n        const wrap = Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', 'newSticker', '', this.id);\r\n        const fragment = document.createDocumentFragment();\r\n\r\n        fragment.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.id));\r\n        fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('h1', '', this.name)); // adding headline\r\n        fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('p', '', this.content));\r\n        wrap.appendChild(fragment);\r\n\r\n        area.appendChild(wrap);\r\n\r\n        document.getElementById(this.id).setAttribute('data-action', 'sticker');\r\n    }\r\n\r\n    hide() {\r\n        document.getElementById(this.id).style = 'display: none';\r\n    }\r\n\r\n    show() {\r\n        document.getElementById(this.id).style = 'display: display-block';\r\n    }\r\n    mini() {\r\n        //состояние стикера в свёрнутом виде\r\n    }\r\n\r\n    full() {\r\n        Object(_editSticker__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this.id);\r\n    }\r\n\r\n    move() {\r\n        //перемещение стикера\r\n    }\r\n\r\n    setId() {\r\n        //установить id\r\n    }\r\n\r\n    addUrl() {\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/Sticker.js?");

/***/ }),

/***/ "./src/singleSticker/addMiniSigns.js":
/*!*******************************************!*\
  !*** ./src/singleSticker/addMiniSigns.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addMiniSigns; });\nfunction addMiniSigns() {\r\n    const fragment = document.createDocumentFragment();\r\n\r\n    const edit = document.createElement('img');\r\n    edit.src = 'img/edit_14x10.png';\r\n    edit.classList.add('edit');\r\n    edit.setAttribute('data-action', 'edit');\r\n    fragment.appendChild(edit);\r\n\r\n    const del = document.createElement('img');\r\n    del.src = 'img/del_10.png';\r\n    del.classList.add('del');\r\n    del.setAttribute('data-action', 'delete');\r\n    fragment.appendChild(del);\r\n\r\n    return fragment;\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/addMiniSigns.js?");

/***/ }),

/***/ "./src/singleSticker/currentId.js":
/*!****************************************!*\
  !*** ./src/singleSticker/currentId.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return currentId; });\nfunction currentId() {\r\n    let id;\r\n    for (id = 1; document.getElementById(id); id++) {}\r\n    return id;\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/currentId.js?");

/***/ }),

/***/ "./src/singleSticker/editSticker.js":
/*!******************************************!*\
  !*** ./src/singleSticker/editSticker.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editSticker; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/singleSticker/addMiniSigns.js\");\n\r\n\r\n\r\nfunction editSticker(id) {\r\n    const sticker = document.getElementById(id);\r\n\r\n    sticker.className = 'editSticker';\r\n    let head = sticker.querySelector('h1').textContent;\r\n    let body = sticker.querySelector('p').textContent;\r\n    sticker.innerHTML = `    \r\n    <img src=\"img/edit_10.png\" class=\"editBig\" title=\"Закрыть без изменений\" \r\n    data-action=\"close\">\r\n    <img src=\"img/save_18.png\" class=\"editBig\" title=\"Применить изменения\" \r\n    data-action=\"ok\">\r\n    <input type=\"text\" style=\"width:250px\" draggable=\"false\" value=\"${head}\">\r\n    <br />\t\r\n    <textarea name=\"textArea\">${body}</textarea>`;\r\n\r\n    sticker.onclick = function(e) {\r\n        const target = e.target;\r\n        const action = target.getAttribute('data-action');\r\n\r\n        if (action == 'ok') {\r\n            head = sticker.getElementsByTagName('input')[0].value;\r\n            body = sticker.getElementsByTagName('textArea')[0].value;\r\n            sticker.innerHTML = '';\r\n            if (sticker.className == 'editSticker') { sticker.className = 'newSticker'; };\r\n            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };\r\n            sticker.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;\r\n        }\r\n        if (action == 'close') {\r\n            sticker.innerHTML = '';\r\n            if (sticker.className == 'editSticker') { sticker.className = 'newSticker' };\r\n            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };\r\n            sticker.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/editSticker.js?");

/***/ }),

/***/ "./src/singleSticker/makeDOMElement.js":
/*!*********************************************!*\
  !*** ./src/singleSticker/makeDOMElement.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeDOMelement; });\nfunction makeDOMelement(tagName, className, text, id) {\r\n    const element = document.createElement(tagName);\r\n    if (className) {\r\n        element.classList.add(className);\r\n    }\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    if (id) {\r\n        element.id = id;\r\n    }\r\n\r\n    return element;\r\n};\n\n//# sourceURL=webpack:///./src/singleSticker/makeDOMElement.js?");

/***/ }),

/***/ "./src/tests.js":
/*!**********************!*\
  !*** ./src/tests.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _singleSticker_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleSticker/makeDOMElement */ \"./src/singleSticker/makeDOMElement.js\");\n/* harmony import */ var _singleSticker_Sticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleSticker/Sticker */ \"./src/singleSticker/Sticker.js\");\n/* harmony import */ var _singleSticker_currentId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleSticker/currentId */ \"./src/singleSticker/currentId.js\");\n\r\n\r\n\r\n\r\ndescribe('makeDOMelement', function() {\r\n    it('Проверка создания узла', function() {\r\n        assert.equal(Object(_singleSticker_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('р', 'red', 'Hi, world').outerHTML, '<р class=\"red\">Hi, world</р>');\r\n        assert.equal(Object(_singleSticker_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'red', 'Hi, world').outerHTML, '<div class=\"red\">Hi, world</div>');\r\n        assert.equal(Object(_singleSticker_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'red').outerHTML, '<div class=\"red\"></div>');\r\n    });\r\n});\r\n/*\r\ndescribe('makeSticker', function() {\r\n    it('Создание нового стикера c стандартными настройками', function() {\r\n        assert.equal(makeSticker({}).toString(), `makeSticker вернул объект: id : 1, className : newSticker, head : Новый стикер, body : Текст стикера`)\r\n    });\r\n\r\n    it('Создание нового стикера', function() {\r\n        assert.equal(makeSticker({ id: 15, className: 'newClass', head: 'Super HeadLine', body: 'Some very intresting or important text' }), 'makeSticker вернул объект: id : 15, className : newClass, head : Super HeadLine, body : Some very intresting or important text');\r\n    });\r\n\r\n});\r\n*/\r\nconst sticker = new _singleSticker_Sticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconsole.log(sticker.name);\r\ndescribe('Sticker', function() {\r\n    it('Создание нового стикера на объекте cо дефолтными настройками', function() {\r\n        assert.equal(sticker.name, `Новый стикер`);\r\n        assert.equal(sticker.type, `simple`);\r\n        assert.equal(sticker.content, '');\r\n        assert.equal(sticker.id, Object(_singleSticker_currentId__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack:///./src/tests.js?");

/***/ })

/******/ });