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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clear; });\nfunction clear() {\r\n    if (!localStorage.getItem('H1')) {\r\n        alert(\"Нет сохранённых стикеров, удалять нечего...\");\r\n    } else {\r\n        const msg = 'Удалить без возможности восстановления?';\r\n        const div = document.createElement('div');\r\n        div.style.cssText = `\r\n            text-align:center; padding:10px; position:fixed; \r\n            background-color: white; width:200px; height:70px; \r\n            top: 50px; left: 100px; margin-right:-100px; \r\n            margin-bottom:-20px; border: 1px dotted #000`;\r\n        div.onclick = function(e) {\r\n            if (e.target.value == 'Да') {\r\n                for (let id = 1; true; id++) {\r\n                    let sticker = document.getElementById(id);\r\n                    if (!sticker === false) {\r\n                        sticker.remove();\r\n                    } else { break; }\r\n                }\r\n\r\n                localStorage.clear();\r\n                this.parentNode.removeChild(this)\r\n            } else {\r\n                this.parentNode.removeChild(this)\r\n            }\r\n        }\r\n        let inp = 'style=\"margin: 5px; padding: 3px; font-size: 14px;\"';\r\n        div.innerHTML = '<div>' + msg + `<div><input ${inp} \r\n        type=\"button\" value=\"Да\"><input ${inp} type=\"button\" value=\"Нет\">`;\r\n\r\n        document.body.appendChild(div);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/allStickers/clear.js?");

/***/ }),

/***/ "./src/allStickers/panel.js":
/*!**********************************!*\
  !*** ./src/allStickers/panel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return panel; });\nfunction panel() {\r\n    let panelContents = `\r\n    <div id=\"panel\" class=\"panel\">\r\n        <div id=\"example\" class=\"button\" title=\"Загрузить примеры\">\r\n        Примеры</div>\r\n\r\n        <div id=\"plus\" class=\"button\" title=\"Добавить стикер\">\r\n        <span class=\"plusSign\">➕&nbsp</span>стикер</div>\r\n\r\n        <div id=\"plusMap\" class=\"button\" title=\"Добавить стикер-карту\">\r\n        <span class=\"plusSign\">➕&nbsp</span>карта</div>\r\n\r\n        <div id=\"saving\" class=\"button\" title=\"Сохранить  всё\">\r\n        Сохранить</div>    \r\n        <!--\r\n        <div id=\"toServer\" class=\"button\" title=\"Сохранить на сервер\">\r\n        <img src=\"img/toServer_32.png\"></div>    \r\n        -->\r\n         \r\n        <div id=\"cleaning\" class=\"button\" title=\"Удалить  всё\">\r\n        Удалить</div>\r\n        <div id='inform'></div>\r\n    </div>`;\r\n\r\n    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);\r\n};\n\n//# sourceURL=webpack:///./src/allStickers/panel.js?");

/***/ }),

/***/ "./src/allStickers/sort.js":
/*!*********************************!*\
  !*** ./src/allStickers/sort.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sort; });\n/* harmony import */ var _singleSticker_currentId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../singleSticker/currentId */ \"./src/singleSticker/currentId.js\");\n\r\n\r\nfunction sort(firstID, secondID) {\r\n\r\n    if (secondID === undefined) { secondID = Object(_singleSticker_currentId__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() - 1; }\r\n    if (firstID === secondID) { return };\r\n    const move = document.getElementById(firstID);\r\n    const elem = document.getElementById(secondID);\r\n\r\n    if (firstID < secondID) {\r\n        elem.parentNode.insertBefore(move, elem.nextSibling);\r\n        for (let i = +firstID + 1; i !== +secondID + 1; i++) {\r\n            const elem = document.getElementById(i);\r\n            if (document.getElementById(`adress${i}`)) { // определяем есть запись с адресом\r\n                document.getElementById(`adress${i}`).id = `adress${i-1}`; //если есть - меняем ей id\r\n            }\r\n            elem.id = (i - 1);\r\n        };\r\n        if (document.getElementById(`adress${ move.id}`)) {\r\n            document.getElementById(`adress${ move.id}`).id = `adress${secondID}`;\r\n        }\r\n        move.id = secondID;\r\n    } else {\r\n        elem.parentNode.insertBefore(move, elem);\r\n\r\n        for (let i = +firstID - 1; i !== +secondID - 1; i--) {\r\n            const elem = document.getElementById(i);\r\n            if (document.getElementById(`adress${i}`)) { // определяем есть запись с адресом\r\n                document.getElementById(`adress${i}`).id = `adress${i+1}`; //если есть - меняем ей id\r\n            }\r\n            elem.id = (i + 1);\r\n        };\r\n        if (document.getElementById(`adress${ move.id}`)) {\r\n            document.getElementById(`adress${ move.id}`).id = `adress${secondID}`;\r\n        }\r\n        move.id = secondID;\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack:///./src/allStickers/sort.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _allStickers_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allStickers/panel */ \"./src/allStickers/panel.js\");\n/* harmony import */ var _transmission_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transmission/load */ \"./src/transmission/load.js\");\n/* harmony import */ var _singleSticker_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleSticker/listeners */ \"./src/singleSticker/listeners.js\");\n\r\n\r\n\r\n\r\nObject(_allStickers_panel__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nObject(_transmission_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nif (localStorage.getItem('stickers')) {\r\n    Object(_transmission_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\nObject(_singleSticker_listeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/singleSticker/Sticker.js":
/*!**************************************!*\
  !*** ./src/singleSticker/Sticker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sticker; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _currentId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentId */ \"./src/singleSticker/currentId.js\");\n/* harmony import */ var _makeDOMElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeDOMElement */ \"./src/singleSticker/makeDOMElement.js\");\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/singleSticker/addMiniSigns.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editSticker */ \"./src/singleSticker/editSticker.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Sticker {\r\n    constructor(name = 'Новый стикер', content = '', type = 'simple', adress) {\r\n        this.type = type;\r\n        this.name = name;\r\n        this.content = content;\r\n        this.id = Object(_currentId__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        this.adress = adress;\r\n    }\r\n\r\n    create() {\r\n        const area = document.getElementById('stickyNotes');\r\n        const wrap = Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', 'newSticker', '', this.id);\r\n        const fragment = document.createDocumentFragment();\r\n\r\n        fragment.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.id));\r\n        fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('h1', '', this.name)); // adding headline\r\n        if (this.type === 'map') {\r\n            const adr = Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('p', '', this.adress);\r\n            adr.id = `adress${this.id}`;\r\n            fragment.appendChild(adr);\r\n        }\r\n        fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('p', '', this.content));\r\n        wrap.appendChild(fragment);\r\n\r\n        area.appendChild(wrap);\r\n\r\n        document.getElementById(this.id).setAttribute('data-action', 'sticker');\r\n    }\r\n\r\n    hide() {\r\n        document.getElementById(this.id).style = 'display: none';\r\n    }\r\n\r\n    show() {\r\n        document.getElementById(this.id).style = 'display: display-block';\r\n    }\r\n    mini() {\r\n        //состояние стикера в свёрнутом виде\r\n    }\r\n\r\n    full() {\r\n        Object(_editSticker__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this.id);\r\n    }\r\n\r\n    move() {\r\n        //перемещение стикера\r\n    }\r\n\r\n    setId() {\r\n        //установить id\r\n    }\r\n\r\n    addUrl() {\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/Sticker.js?");

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

/***/ "./src/singleSticker/deleteSticker.js":
/*!********************************************!*\
  !*** ./src/singleSticker/deleteSticker.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteSticker; });\nfunction deleteSticker(id) {\r\n    document.getElementById(id).remove();\r\n\r\n    for (var i = +id + 1; true; i++) {\r\n        const sticker = document.getElementById(i);\r\n\r\n        if (!sticker === false) {\r\n            sticker.id = i - 1;\r\n        } else { break; }\r\n    }\r\n    return i;\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/deleteSticker.js?");

/***/ }),

/***/ "./src/singleSticker/editMapSticker.js":
/*!*********************************************!*\
  !*** ./src/singleSticker/editMapSticker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editMapSticker; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/singleSticker/addMiniSigns.js\");\n/* harmony import */ var _transmission_xhrYaMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transmission/xhrYaMap */ \"./src/transmission/xhrYaMap.js\");\n\r\n\r\n\r\n\r\nfunction editMapSticker(id) {\r\n    const sticker = document.getElementById(id);\r\n    sticker.className = 'editMapSticker';\r\n    let head = sticker.querySelector('h1').textContent;\r\n    let adress = sticker.getElementsByTagName('p')[0].textContent;\r\n    let body = sticker.getElementsByTagName('p')[1].textContent;\r\n\r\n    sticker.innerHTML = `    \r\n        <img src=\"img/edit_10.png\" class=\"editBig\" title=\"Закрыть без изменений\" \r\n        data-action=\"close\">\r\n        <img src=\"img/save_18.png\" class=\"editBig\" title=\"Применить изменения\" \r\n        data-action=\"ok\">\r\n        <input type=\"text\" style=\"width:250px; \" draggable=\"false\" value=\"${head}\">\r\n        <br />\t\r\n        <input type=\"text\" title=\"Адрес: \" class=\"adress\" draggable=\"false\" value=\"${adress}\">\r\n        <img src=\"img/reload_18.png\" class=\"editBig\" title=\"Загрузить карту\" \r\n        data-action=\"reload\">\r\n        <br />\t\r\n        \r\n        <textarea name=\"textArea\">${body}</textarea>\r\n        <div id='map' class='editMap'></div>\r\n        `;\r\n\r\n    Object(_transmission_xhrYaMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(adress, id);\r\n    sticker.onclick = function(e) {\r\n        const target = e.target;\r\n        const action = target.getAttribute('data-action');\r\n\r\n        if (action == 'ok') {\r\n            head = sticker.getElementsByTagName('input')[0].value;\r\n            body = sticker.getElementsByTagName('textArea')[0].value;\r\n            sticker.innerHTML = '';\r\n            sticker.className = 'mapSticker';\r\n            sticker.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;\r\n        }\r\n        if (action == 'close') {\r\n            sticker.innerHTML = '';\r\n            sticker.className = 'mapSticker';\r\n            sticker.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p id=\"adress${id}\">${adress}</p><p>${body}</p>`\r\n        }\r\n\r\n        if (action == 'reload') {\r\n            map.innerHTML = '';\r\n            adress = sticker.getElementsByTagName('input')[1].value;\r\n            console.log(adress);\r\n            Object(_transmission_xhrYaMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(adress, id);\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/editMapSticker.js?");

/***/ }),

/***/ "./src/singleSticker/editSticker.js":
/*!******************************************!*\
  !*** ./src/singleSticker/editSticker.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editSticker; });\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/singleSticker/addMiniSigns.js\");\n\r\n\r\nfunction editSticker(id) {\r\n    const sticker = document.getElementById(id);\r\n\r\n    sticker.className = 'editSticker';\r\n    let head = sticker.querySelector('h1').textContent;\r\n    let body = sticker.querySelector('p').textContent;\r\n    sticker.innerHTML = `    \r\n    <img src=\"img/edit_10.png\" class=\"editBig\" title=\"Закрыть без изменений\" \r\n    data-action=\"close\">\r\n    <img src=\"img/save_18.png\" class=\"editBig\" title=\"Применить изменения\" \r\n    data-action=\"ok\">\r\n    <input type=\"text\" style=\"width:250px\" draggable=\"false\" value=\"${head}\">\r\n    <br />\r\n    <textarea name=\"textArea\">${body}</textarea>`;\r\n\r\n    sticker.onclick = function(e) {\r\n        const target = e.target;\r\n        const action = target.getAttribute('data-action');\r\n\r\n        if (action == 'ok') {\r\n            head = sticker.getElementsByTagName('input')[0].value;\r\n            body = sticker.getElementsByTagName('textArea')[0].value;\r\n            sticker.innerHTML = '';\r\n            if (sticker.className == 'editSticker') { sticker.className = 'newSticker'; };\r\n            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };\r\n            sticker.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;\r\n        }\r\n        if (action == 'close') {\r\n            sticker.innerHTML = '';\r\n            if (sticker.className == 'editSticker') { sticker.className = 'newSticker' };\r\n            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };\r\n            sticker.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/editSticker.js?");

/***/ }),

/***/ "./src/singleSticker/listeners.js":
/*!****************************************!*\
  !*** ./src/singleSticker/listeners.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listeners; });\n/* harmony import */ var _transmission_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transmission/example */ \"./src/transmission/example.js\");\n/* harmony import */ var _singleSticker_Sticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleSticker/Sticker */ \"./src/singleSticker/Sticker.js\");\n/* harmony import */ var _transmission_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transmission/save */ \"./src/transmission/save.js\");\n/* harmony import */ var _deleteSticker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteSticker */ \"./src/singleSticker/deleteSticker.js\");\n/* harmony import */ var _allStickers_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../allStickers/clear */ \"./src/allStickers/clear.js\");\n/* harmony import */ var _moveTheSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moveTheSticker */ \"./src/singleSticker/moveTheSticker.js\");\n/* harmony import */ var _editSticker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editSticker */ \"./src/singleSticker/editSticker.js\");\n/* harmony import */ var _editMapSticker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editMapSticker */ \"./src/singleSticker/editMapSticker.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction listeners() {\r\n    example.onclick = function() { Object(_transmission_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); }\r\n    plus.onclick = function() {\r\n        const sticker = new _singleSticker_Sticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        sticker.create();\r\n        sticker.full();\r\n    }\r\n    saving.onclick = function() { Object(_transmission_save__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); }\r\n    cleaning.onclick = function() { Object(_allStickers_clear__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); }\r\n\r\n    const field = document.getElementById('stickyNotes');\r\n\r\n    field.onclick = function(e) {\r\n        const target = e.target;\r\n        const action = target.getAttribute('data-action');\r\n        if (action == 'delete') { Object(_deleteSticker__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target.parentNode.id); }\r\n        if (action == 'edit') {\r\n            if (document.getElementById(`adress${target.parentNode.id}`)) {\r\n                Object(_editMapSticker__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target.parentNode.id);\r\n            } else {\r\n                Object(_editSticker__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target.parentNode.id);\r\n            }\r\n        }\r\n    };\r\n\r\n    field.addEventListener('mousedown', function(e) {\r\n        let target = e.target;\r\n        while (target != document) {\r\n            const dataAction = target.getAttribute('data-action');\r\n            const style = target.getAttribute('class');\r\n            if (dataAction == 'edit' || dataAction == 'delete' || dataAction == 'ok' ||\r\n                dataAction == 'close') { return }\r\n            if (dataAction == 'sticker' && style != 'editSticker' && style != 'editMapSticker') {\r\n                if (event.which == 1) Object(_moveTheSticker__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(target.id);\r\n                return;\r\n            }\r\n            target = target.parentNode;\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/listeners.js?");

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

/***/ "./src/singleSticker/makeDOMelement.js":
/*!*********************************************!*\
  !*** ./src/singleSticker/makeDOMelement.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeDOMelement; });\nfunction makeDOMelement(tagName, className, text, id) {\r\n    const element = document.createElement(tagName);\r\n    if (className) {\r\n        element.classList.add(className);\r\n    }\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    if (id) {\r\n        element.id = id;\r\n    }\r\n\r\n    return element;\r\n};\n\n//# sourceURL=webpack:///./src/singleSticker/makeDOMelement.js?");

/***/ }),

/***/ "./src/singleSticker/moveTheSticker.js":
/*!*********************************************!*\
  !*** ./src/singleSticker/moveTheSticker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return moveTheSticker; });\n/* harmony import */ var _allStickers_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../allStickers/sort */ \"./src/allStickers/sort.js\");\n\r\n\r\nfunction moveTheSticker(id) {\r\n    const sticker = document.getElementById(id);\r\n    sticker.style.position = 'absolute';\r\n\r\n    function moveSticker(e) {\r\n        sticker.style.left = e.pageX - sticker.offsetWidth / 2 + 'px';\r\n        sticker.style.top = e.pageY - sticker.offsetHeight / 2 + 'px';\r\n    }\r\n\r\n    sticker.onmousemove = function(e) { moveSticker(e); }\r\n    sticker.ondragstart = function() { return false; };\r\n\r\n    sticker.onmouseup = function(e) {\r\n        sticker.onmousemove = null;\r\n        sticker.onmouseup = null;\r\n        sticker.style.zIndex = 1;\r\n        sticker.style.position = 'static';\r\n        sticker.style.left = null;\r\n        sticker.style.top = null;\r\n\r\n        function surfacing(elem) {\r\n            while (elem != document) {\r\n                const dataAction = elem.getAttribute('data-action');\r\n                if (dataAction == 'sticker') { return (elem.id); }\r\n                elem = elem.parentNode;\r\n            }\r\n        }\r\n\r\n        const next = document.elementFromPoint(e.pageX, e.pageY);\r\n        Object(_allStickers_sort__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, surfacing(next));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/singleSticker/moveTheSticker.js?");

/***/ }),

/***/ "./src/transmission/example.js":
/*!*************************************!*\
  !*** ./src/transmission/example.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return example; });\n/* harmony import */ var _singleSticker_Sticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../singleSticker/Sticker */ \"./src/singleSticker/Sticker.js\");\n\r\n\r\nfunction example() {\r\n    const makeSticker = (title, content, type, adress) => {\r\n        const sticker = new _singleSticker_Sticker__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, content, type, adress);\r\n        sticker.create();\r\n        sticker.show();\r\n    }\r\n    makeSticker('Become an expert in JavaScript', 'As soon as posible', 'newSticker');\r\n    makeSticker('Learn React', 'On middle level', 'newSticker');\r\n    makeSticker('Learn Node.JS', 'And develop multi-user services', 'newSticker');\r\n    makeSticker('To find a cool job', 'With good salary', 'newSticker');\r\n    makeSticker('ВДНХ на карте', 'Посетить выставку промышленного оборудования (пищевая пром-ть; станки для бахил и т.п.)', 'map', 'Пр-т Мира, 119, Москва');\r\n    makeSticker('Питер, Фонтанка', '', 'map', 'Питер, Фонтанка');\r\n\r\n    const ex = document.getElementById('example');\r\n    ex.remove();\r\n}\n\n//# sourceURL=webpack:///./src/transmission/example.js?");

/***/ }),

/***/ "./src/transmission/load.js":
/*!**********************************!*\
  !*** ./src/transmission/load.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return load; });\n/* harmony import */ var _singleSticker_Sticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../singleSticker/Sticker */ \"./src/singleSticker/Sticker.js\");\n\r\n\r\nfunction load() {\r\n    for (let i = 1; localStorage.getItem(`H${i}`); i++) {\r\n        let sticker = new _singleSticker_Sticker__WEBPACK_IMPORTED_MODULE_0__[\"default\"](localStorage.getItem(`H${i}`), localStorage.getItem(`C${i}`));\r\n        sticker.create();\r\n        sticker.show();\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/transmission/load.js?");

/***/ }),

/***/ "./src/transmission/save.js":
/*!**********************************!*\
  !*** ./src/transmission/save.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\n/* harmony import */ var _view_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/message */ \"./src/view/message.js\");\n\r\nfunction save() {\r\n    localStorage.clear();\r\n    for (let id = 1; true; id++) {\r\n        let sticker = document.getElementById(id);\r\n        if (!sticker === false) {\r\n            localStorage.setItem(`H${id}`, sticker.getElementsByTagName('h1')[0].textContent);\r\n            localStorage.setItem(`C${id}`, sticker.getElementsByTagName('p')[0].textContent);\r\n        } else { break; }\r\n    }\r\n    Object(_view_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`Сохранено`);\r\n}\n\n//# sourceURL=webpack:///./src/transmission/save.js?");

/***/ }),

/***/ "./src/transmission/xhrYaMap.js":
/*!**************************************!*\
  !*** ./src/transmission/xhrYaMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return xhrYaMap; });\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _yaMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yaMap */ \"./src/transmission/yaMap.js\");\n\r\n\r\nfunction xhrYaMap(adress, id) {\r\n    function xhr(adress) {\r\n        const request = (resp) => {\r\n            // console.log(resp); // {\"response\":{\"GeoObjectCollection\": ...\r\n            let obj = JSON.parse(resp); // конвертируем из json в объект js // \r\n            obj = obj.response; // {GeoObjectCollection: {…}}\r\n            obj = obj.GeoObjectCollection; // {metaDataProperty: {…}, featureMember: Array(1)}\r\n            obj = obj.featureMember[0]; // GeoObject: {metaDataProperty: {…}, boundedBy: {…}, Point: {…}}\r\n            obj = obj.GeoObject.Point; // {pos: \"37.620555 55.741333\"}\r\n            const coords = obj.pos; // 37.620555 55.741333\r\n            // console.log(coords);\r\n            return coords;\r\n        }\r\n\r\n        function httpGet(fullUrl) {\r\n            return new Promise(resolve => {\r\n                var xhr = new XMLHttpRequest();\r\n                xhr.open(\"GET\", fullUrl, true);\r\n                xhr.onload = () => {\r\n                    resolve(\r\n                        Object(_yaMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(request(xhr.responseText), id)\r\n                    );\r\n                };\r\n                xhr.send();\r\n\r\n            });\r\n        }\r\n\r\n        const url = 'https://geocode-maps.yandex.ru/1.x/?';\r\n        const apikey = '0299c42e-268e-4337-9740-e158b72d29fd&format=json&geocode=';\r\n        const fullUrl = url + apikey + adress;\r\n\r\n        return (httpGet(fullUrl));\r\n    }\r\n    xhr(adress);\r\n}\n\n//# sourceURL=webpack:///./src/transmission/xhrYaMap.js?");

/***/ }),

/***/ "./src/transmission/yaMap.js":
/*!***********************************!*\
  !*** ./src/transmission/yaMap.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return yaMap; });\n/* harmony import */ var _singleSticker_makeDOMelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../singleSticker/makeDOMelement */ \"./src/singleSticker/makeDOMelement.js\");\n/* harmony import */ var _out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../out */ \"./src/out.js\");\n/* harmony import */ var _xhrYaMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xhrYaMap */ \"./src/transmission/xhrYaMap.js\");\n\r\n\r\n\r\n\r\nfunction yaMap(coords) {\r\n    // console.log(coords);\r\n    const coordsArr = coords.split(' '); // converting string to array\r\n    const x = +coordsArr[0];\r\n    const y = +coordsArr[1];\r\n    // console.log(`x= ${x}, y= ${y}`)\r\n\r\n    // Функция ymaps.ready() будет вызвана, когда\r\n    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.\r\n    ymaps.ready(init);\r\n\r\n    function init() {\r\n        // Создание карты.    \r\n        const myMap = new ymaps.Map(\"map\", {\r\n            // Координаты центра карты.\r\n            // Порядок по умолчанию: «широта, долгота».\r\n            // Чтобы не определять координаты центра карты вручную,\r\n            // воспользуйтесь инструментом Определение координат.\r\n            center: [y, x],\r\n            // controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']\r\n            controls: ['zoomControl'],\r\n\r\n            // Уровень масштабирования. Допустимые значения:\r\n            // от 0 (весь мир) до 19.\r\n            zoom: 16\r\n        });\r\n        /*\r\n        // Создание метки \r\n        const myPlacemark = new ymaps.Placemark(\r\n            // Координаты метки\r\n            [y, x],\r\n            //{ balloonContent: '<img src=\"/img/star_16.png\" />' }\r\n        );\r\n\r\n        // Добавление метки на карту\r\n        myMap.geoObjects.add(myPlacemark);\r\n        */\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack:///./src/transmission/yaMap.js?");

/***/ }),

/***/ "./src/view/message.js":
/*!*****************************!*\
  !*** ./src/view/message.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst message = mess => {\r\n    const messageField = document.getElementById('inform');\r\n    messageField.innerText = mess;\r\n\r\n    function waning() {\r\n        let i = 1;\r\n        const timerId = setTimeout(function go() {\r\n            if (i > 0) setTimeout(go, 200);\r\n            messageField.style.opacity = i;\r\n            i = (i * 10 - 1) / 10;\r\n        }, 100);\r\n    }\r\n    waning();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\n\n//# sourceURL=webpack:///./src/view/message.js?");

/***/ })

/******/ });