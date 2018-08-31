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

/***/ "./src/editSticker.js":
/*!****************************!*\
  !*** ./src/editSticker.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editSticker; });\n/* harmony import */ var _makeSticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeSticker */ \"./src/makeSticker.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./out */ \"./src/out.js\");\n\r\n\r\n\r\nfunction editSticker(id) {\r\n    let sticker = document.getElementById(id);\r\n    let head = sticker.children[0].textContent;\r\n    let body = sticker.children[1].textContent;\r\n\r\n    sticker.addEventListener('dblclick', function() {\r\n        if (sticker.className === 'newSticker') {\r\n            sticker.classList = 'editSticker';\r\n            sticker.innerHTML = (`<input type=\"text\" name=\"head\" style=\"border: 0px; font-size:14px; width:290px; margin: 5px;\" value=\"${head}\" /><br />\t\r\n            <textarea style=\"width: 290px; height:265px;  margin: 3px; border: 0px;\" name=\"textArea\">${body}</textarea>`);\r\n\r\n        } else {\r\n            head = sticker.children[0].value;\r\n            body = sticker.getElementsByTagName('textArea')[0].value;\r\n\r\n            sticker.innerHTML = `<h1>${head}</h1><div>${body}</div>`;\r\n            sticker.className = 'newSticker';\r\n        }\r\n\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/editSticker.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel */ \"./src/panel.js\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./out */ \"./src/out.js\");\n\r\n\r\n\r\n\r\nObject(_panel__WEBPACK_IMPORTED_MODULE_0__[\"panel\"])();\r\nif (localStorage.getItem('stickers')) {\r\n    Object(_load__WEBPACK_IMPORTED_MODULE_1__[\"load\"])();\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listener.js":
/*!*************************!*\
  !*** ./src/listener.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction listener(id, type, func) {\r\n\r\n    document.getElementById(id).addEventListener(type, function() {\r\n        func;\r\n    });\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (listener);\n\n//# sourceURL=webpack:///./src/listener.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listener */ \"./src/listener.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editSticker */ \"./src/editSticker.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./out */ \"./src/out.js\");\n\r\n\r\n\r\n\r\nfunction load() {\r\n    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', localStorage.getItem('stickers'));\r\n\r\n    for (let id = 1; true; id++) {\r\n        var sticker = document.getElementById(id);\r\n        if (!sticker === false) {\r\n            Object(_listener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, \"dblclick\", Object(_editSticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id));\r\n        } else { break; }\r\n    }\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/load.js?");

/***/ }),

/***/ "./src/makeDOMelement.js":
/*!*******************************!*\
  !*** ./src/makeDOMelement.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeDOMelement; });\nfunction makeDOMelement(tagName, className, text, id) {\r\n    const element = document.createElement(tagName);\r\n    if (className) {\r\n        element.classList.add(className);\r\n    }\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    if (id) {\r\n        element.id = id;\r\n    }\r\n    return element;\r\n};\n\n//# sourceURL=webpack:///./src/makeDOMelement.js?");

/***/ }),

/***/ "./src/makeSticker.js":
/*!****************************!*\
  !*** ./src/makeSticker.js ***!
  \****************************/
/*! exports provided: makeSticker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSticker\", function() { return makeSticker; });\n/* harmony import */ var _movingTheDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movingTheDiv */ \"./src/movingTheDiv.js\");\n/* harmony import */ var _makeDOMelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeDOMelement */ \"./src/makeDOMelement.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editSticker */ \"./src/editSticker.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./out */ \"./src/out.js\");\n/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listener */ \"./src/listener.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction makeSticker(id, className = 'newSticker', head = 'Новый стикер', body = 'Текст стикера') {\r\n\r\n    // out(id + ' ' + className + ' ' + head + ' ' + body); // 1 newSticker Новый стикер Текст стикера\r\n\r\n    let dom = document.getElementById('stickyNotes');\r\n    const wrap = Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', className, '', id);\r\n    const fragment = document.createDocumentFragment();\r\n    fragment.appendChild(Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h1', '', head)); // adding headline\r\n    fragment.appendChild(Object(_makeDOMelement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', '', body));\r\n    wrap.appendChild(fragment);\r\n    dom.appendChild(wrap);\r\n    Object(_listener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id, \"dblclick\", Object(_editSticker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id));\r\n    /* \r\n    // coordinates of sticker\r\n    const place = document.getElementById(id);\r\n    place.style.position = \"absolute\";\r\n    place.style.left = x + 'px';\r\n    place.style.top = y + 'px';\r\n    // movingTheDiv(this.id);\r\n    */\r\n    // return show;\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/makeSticker.js?");

/***/ }),

/***/ "./src/movingTheDiv.js":
/*!*****************************!*\
  !*** ./src/movingTheDiv.js ***!
  \*****************************/
/*! exports provided: movingTheDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movingTheDiv\", function() { return movingTheDiv; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./out */ \"./src/out.js\");\n\r\n\r\nvar zIndex = 1;\r\n\r\nfunction movingTheDiv(id) {\r\n    /* Определяем тип браузера */\r\n\r\n    var ie = 0;\r\n    var op = 0;\r\n    var ff = 0;\r\n    var browser = navigator.userAgent;\r\n    if (browser.indexOf(\"Opera\") != -1) op = 1;\r\n    else {\r\n        if (browser.indexOf(\"MSIE\") != -1) ie = 1;\r\n        else {\r\n            if (browser.indexOf(\"Firefox\") != -1) ff = 1;\r\n        }\r\n    }\r\n\r\n    var block = document.getElementById(id);\r\n\r\n    var delta_x = 0,\r\n        delta_y = 0,\r\n        x = 0,\r\n        y = 0,\r\n        x_block = 0,\r\n        y_block = 0,\r\n        new_x = 0,\r\n        new_y = 0;\r\n    /* Ставим обработчики событий на нажатие и отпускание клавиши мыши */\r\n    block.onmousedown = saveXY;\r\n    if (op || ff) {\r\n        block.addEventListener(\"onmousedown\", saveXY, false);\r\n    }\r\n    document.onmouseup = clearXY;\r\n    /* При нажатии кнопки мыши попадаем в эту функцию */\r\n    function saveXY(obj_event) {\r\n        zIndex++;\r\n        //out(zIndex);\r\n        block.style.zIndex = zIndex;\r\n        /* Получаем текущие координаты курсора */\r\n        if (obj_event) {\r\n            x = obj_event.pageX;\r\n            y = obj_event.pageY;\r\n        } else {\r\n            x = window.event.clientX;\r\n            y = window.event.clientY;\r\n            if (ie) {\r\n                y -= 2;\r\n                x -= 2;\r\n            }\r\n        }\r\n        /* Узнаём текущие координаты блока */\r\n        x_block = block.offsetLeft;\r\n        y_block = block.offsetTop;\r\n        /* Узнаём смещение */\r\n        delta_x = x_block - x;\r\n        delta_y = y_block - y;\r\n        /* При движении курсора устанавливаем вызов функции moveWindow */\r\n        document.onmousemove = moveBlock;\r\n        if (op || ff)\r\n            document.addEventListener(\"onmousemove\", moveBlock, false);\r\n    }\r\n\r\n    function clearXY() {\r\n        document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши\r\n    }\r\n\r\n    function moveBlock(obj_event) {\r\n        /* Получаем новые координаты курсора мыши */\r\n        if (obj_event) {\r\n            x = obj_event.pageX;\r\n            y = obj_event.pageY;\r\n        } else {\r\n            x = window.event.clientX;\r\n            y = window.event.clientY;\r\n            if (ie) {\r\n                y -= 2;\r\n                x -= 2;\r\n            }\r\n        }\r\n        /* Вычисляем новые координаты блока */\r\n        new_x = delta_x + x;\r\n        new_y = delta_y + y;\r\n        block.style.top = new_y + \"px\";\r\n        block.style.left = new_x + \"px\";\r\n\r\n    }\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/movingTheDiv.js?");

/***/ }),

/***/ "./src/out.js":
/*!********************!*\
  !*** ./src/out.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction out(data) {\r\n    document.getElementById('out').innerHTML += ' ' + data;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (out);\n\n//# sourceURL=webpack:///./src/out.js?");

/***/ }),

/***/ "./src/panel.js":
/*!**********************!*\
  !*** ./src/panel.js ***!
  \**********************/
/*! exports provided: panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panel\", function() { return panel; });\n/* harmony import */ var _makeSticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeSticker */ \"./src/makeSticker.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editSticker */ \"./src/editSticker.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./out */ \"./src/out.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ \"./src/save.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar id = localStorage.getItem('id');\r\n\r\nif (!id) { id = 0; }\r\n\r\n// out(`id = ${id}`);\r\n\r\nfunction panel() {\r\n    let panelContents = `\r\n    <div id=\"panel\" class=\"panel\">\r\n        <div id=\"plus\" class=\"symbol\" title=\"Добавить стикер\">+</div>\r\n        <!--\r\n        <div id=\"sort\" class=\"symbol\" style=\"font-size: 44px;\" title=\"Упорядочить\">≚</div>\r\n        -->\r\n        <div id=\"save\" class=\"symbol\" style=\"font-size: 35px;\" title=\"Сохранить всё\">💾</div>\r\n    </div>`;\r\n\r\n    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);\r\n\r\n    // clicked on 'plus' \r\n    document.getElementById('plus').addEventListener('click', function() {\r\n        Object(_out__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('clicked on plus');\r\n        id++;\r\n        Object(_makeSticker__WEBPACK_IMPORTED_MODULE_0__[\"makeSticker\"])(id);\r\n    });\r\n\r\n    /*\r\n    // cliked on 'sort'\r\n    document.getElementById('sort').addEventListener('click', function() {\r\n        sort();\r\n    });\r\n    */\r\n\r\n    // cliked on 'save'\r\n    document.getElementById('save').addEventListener('click', function() {\r\n        Object(_save__WEBPACK_IMPORTED_MODULE_4__[\"save\"])();\r\n    });\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/panel.js?");

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"save\", function() { return save; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./out */ \"./src/out.js\");\n\r\n\r\nfunction save() {\r\n    let localStickers = '';\r\n    for (var id = 1; true; id++) {\r\n        let sticker = document.getElementById(id);\r\n        if (!sticker === false) {\r\n            localStickers += sticker.outerHTML;\r\n        } else { break; }\r\n    }\r\n\r\n    localStorage.setItem('stickers', localStickers);\r\n    localStorage.setItem('id', id - 1);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/save.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! exports provided: sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sort\", function() { return sort; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./out */ \"./src/out.js\");\n\r\n\r\nfunction sort() {\r\n    // out('this is sort function');\r\n    console.log('begin sort');\r\n    let width = document.documentElement.clientWidth;\r\n    let height = document.documentElement.clientHeight;\r\n    let numStickInCol = Math.floor((height - 100) / 30);\r\n    // out(numStickInCol);\r\n    for (let i = 1; i < numStickInCol; i++) {\r\n        let exist = document.getElementById(i);\r\n        if (!exist === false) {\r\n            exist.style.top = 20 + i * 50 + 'px';\r\n            exist.style.left = 5 + 'px';\r\n            exist.style.zIndex = i;\r\n        } else { break; }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/sort.js?");

/***/ })

/******/ });