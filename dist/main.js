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

/***/ "./src/control/clear.js":
/*!******************************!*\
  !*** ./src/control/clear.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clear; });\nfunction clear() {\r\n    if (!localStorage.getItem('H1')) {\r\n        alert(\"Нет сохранённых стикеров, удалять нечего...\");\r\n    } else {\r\n        const msg = 'Удалить без возможности восстановления?';\r\n        const div = document.createElement('div');\r\n        div.style.cssText = `\r\n            text-align:center; padding:10px; position:fixed; \r\n            background-color: white; width:200px; height:70px; \r\n            top: 50px; left: 100px; margin-right:-100px; \r\n            margin-bottom:-20px; border: 1px dotted #000`;\r\n        div.onclick = function(e) {\r\n            if (e.target.value == 'Да') {\r\n                for (let id = 1; true; id++) {\r\n                    let sticker = document.getElementById(id);\r\n                    if (!sticker === false) {\r\n                        sticker.remove();\r\n                    } else { break; }\r\n                }\r\n\r\n                localStorage.clear();\r\n                this.parentNode.removeChild(this)\r\n            } else {\r\n                this.parentNode.removeChild(this)\r\n            }\r\n        }\r\n        let inp = 'style=\"margin: 5px; padding: 3px; font-size: 14px;\"';\r\n        div.innerHTML = '<div>' + msg + `<div><input ${inp} \r\n        type=\"button\" value=\"Да\"><input ${inp} type=\"button\" value=\"Нет\">`;\r\n\r\n        document.body.appendChild(div);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/control/clear.js?");

/***/ }),

/***/ "./src/control/listeners.js":
/*!**********************************!*\
  !*** ./src/control/listeners.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listeners; });\n/* harmony import */ var _view_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/example */ \"./src/view/example.js\");\n/* harmony import */ var _model_Sticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Sticker */ \"./src/model/Sticker.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ \"./src/control/save.js\");\n/* harmony import */ var _view_deleteSticker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/deleteSticker */ \"./src/view/deleteSticker.js\");\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear */ \"./src/control/clear.js\");\n/* harmony import */ var _moveTheSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moveTheSticker */ \"./src/control/moveTheSticker.js\");\n/* harmony import */ var _view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/editSticker/editSticker */ \"./src/view/editSticker/editSticker.js\");\n/* harmony import */ var _view_editMapSticker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/editMapSticker */ \"./src/view/editMapSticker.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction listeners() {\r\n    example.onclick = function() { Object(_view_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); }\r\n    plus.onclick = function() {\r\n        const sticker = new _model_Sticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        sticker.create();\r\n        sticker.full();\r\n    }\r\n    plusMap.onclick = function() {\r\n        const sticker = new _model_Sticker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('', '', 'map');\r\n        sticker.create();\r\n        sticker.full();\r\n    }\r\n    saving.onclick = function() { Object(_save__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); }\r\n    cleaning.onclick = function() { Object(_clear__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); }\r\n\r\n    const field = document.getElementById('stickyNotes');\r\n\r\n    field.onclick = function(e) {\r\n        const target = e.target;\r\n        const action = target.getAttribute('data-action');\r\n        if (action == 'delete') { Object(_view_deleteSticker__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target.parentNode.id); }\r\n        if (action == 'edit') {\r\n            if (document.getElementById(`adress${target.parentNode.id}`)) {\r\n                Object(_view_editMapSticker__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target.parentNode.id);\r\n            } else {\r\n                Object(_view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target.parentNode.id);\r\n            }\r\n        }\r\n    };\r\n\r\n    field.addEventListener('mousedown', function(e) {\r\n        let target = e.target;\r\n        while (target != document) {\r\n            const dataAction = target.getAttribute('data-action');\r\n            const style = target.getAttribute('class');\r\n            if (dataAction == 'edit' || dataAction == 'delete' || dataAction == 'ok' ||\r\n                dataAction == 'close') { return }\r\n            if (dataAction == 'sticker' && style != 'editSticker' && style != 'editMapSticker') {\r\n                if (event.which == 1) Object(_moveTheSticker__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(target.id);\r\n                return;\r\n            }\r\n            target = target.parentNode;\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/control/listeners.js?");

/***/ }),

/***/ "./src/control/load.js":
/*!*****************************!*\
  !*** ./src/control/load.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return load; });\n/* harmony import */ var _model_Sticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Sticker */ \"./src/model/Sticker.js\");\n\r\n\r\nfunction load() {\r\n    for (let i = 1; localStorage.getItem(`H${i}`); i++) {\r\n        let sticker = new _model_Sticker__WEBPACK_IMPORTED_MODULE_0__[\"default\"](localStorage.getItem(`H${i}`), localStorage.getItem(`C${i}`));\r\n        sticker.create();\r\n        sticker.show();\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/control/load.js?");

/***/ }),

/***/ "./src/control/moveTheSticker.js":
/*!***************************************!*\
  !*** ./src/control/moveTheSticker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return moveTheSticker; });\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ \"./src/control/sort.js\");\n\r\n\r\nfunction moveTheSticker(id) {\r\n    const sticker = document.getElementById(id);\r\n    sticker.style.position = 'absolute';\r\n\r\n    function moveSticker(e) {\r\n        sticker.style.left = e.pageX - sticker.offsetWidth / 2 + 'px';\r\n        sticker.style.top = e.pageY - sticker.offsetHeight / 2 + 'px';\r\n    }\r\n\r\n    sticker.onmousemove = function(e) { moveSticker(e); }\r\n    sticker.ondragstart = function() { return false; };\r\n\r\n    sticker.onmouseup = function(e) {\r\n        sticker.onmousemove = null;\r\n        sticker.onmouseup = null;\r\n        sticker.style.zIndex = 1;\r\n        sticker.style.position = 'static';\r\n        sticker.style.left = null;\r\n        sticker.style.top = null;\r\n\r\n        function surfacing(elem) {\r\n            while (elem != document) {\r\n                const dataAction = elem.getAttribute('data-action');\r\n                if (dataAction == 'sticker') { return (elem.id); }\r\n                elem = elem.parentNode;\r\n            }\r\n        }\r\n\r\n        const next = document.elementFromPoint(e.pageX, e.pageY);\r\n        Object(_sort__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, surfacing(next));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/control/moveTheSticker.js?");

/***/ }),

/***/ "./src/control/save.js":
/*!*****************************!*\
  !*** ./src/control/save.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\n/* harmony import */ var _view_message_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/message/message */ \"./src/view/message/message.js\");\n\r\nfunction save() {\r\n    localStorage.clear();\r\n    for (let id = 1; true; id++) {\r\n        let sticker = document.getElementById(id);\r\n        if (!sticker === false) {\r\n            localStorage.setItem(`H${id}`, sticker.getElementsByTagName('h1')[0].textContent);\r\n            localStorage.setItem(`C${id}`, sticker.getElementsByTagName('p')[0].textContent);\r\n        } else { break; }\r\n    }\r\n    Object(_view_message_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`Сохранено`);\r\n}\n\n//# sourceURL=webpack:///./src/control/save.js?");

/***/ }),

/***/ "./src/control/sort.js":
/*!*****************************!*\
  !*** ./src/control/sort.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sort; });\n/* harmony import */ var _model_currentId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/currentId */ \"./src/model/currentId.js\");\n\r\n\r\nfunction sort(firstID, secondID) {\r\n\r\n    if (secondID === undefined) { secondID = Object(_model_currentId__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() - 1; }\r\n    if (firstID === secondID) { return };\r\n    const move = document.getElementById(firstID);\r\n    const elem = document.getElementById(secondID);\r\n\r\n    if (firstID < secondID) {\r\n        elem.parentNode.insertBefore(move, elem.nextSibling);\r\n        for (let i = +firstID + 1; i !== +secondID + 1; i++) {\r\n            const elem = document.getElementById(i);\r\n            if (document.getElementById(`adress${i}`)) { // определяем есть запись с адресом\r\n                document.getElementById(`adress${i}`).id = `adress${i-1}`; //если есть - меняем ей id\r\n            }\r\n            elem.id = (i - 1);\r\n        };\r\n        if (document.getElementById(`adress${ move.id}`)) {\r\n            document.getElementById(`adress${ move.id}`).id = `adress${secondID}`;\r\n        }\r\n        move.id = secondID;\r\n    } else {\r\n        elem.parentNode.insertBefore(move, elem);\r\n\r\n        for (let i = +firstID - 1; i !== +secondID - 1; i--) {\r\n            const elem = document.getElementById(i);\r\n            if (document.getElementById(`adress${i}`)) { // определяем есть запись с адресом\r\n                document.getElementById(`adress${i}`).id = `adress${i+1}`; //если есть - меняем ей id\r\n            }\r\n            elem.id = (i + 1);\r\n        };\r\n        if (document.getElementById(`adress${ move.id}`)) {\r\n            document.getElementById(`adress${ move.id}`).id = `adress${secondID}`;\r\n        }\r\n        move.id = secondID;\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack:///./src/control/sort.js?");

/***/ }),

/***/ "./src/control/xhrYaMap.js":
/*!*********************************!*\
  !*** ./src/control/xhrYaMap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return xhrYaMap; });\n/* harmony import */ var _view_message_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/message/message */ \"./src/view/message/message.js\");\n/* harmony import */ var _view_yaMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/yaMap */ \"./src/view/yaMap.js\");\n\r\n\r\nfunction xhrYaMap(adress, id) {\r\n    function xhr(adress) {\r\n        const request = (resp) => {\r\n            // console.log(resp); // {\"response\":{\"GeoObjectCollection\": ...\r\n            let obj = JSON.parse(resp); // конвертируем из json в объект js // \r\n            obj = obj.response; // {GeoObjectCollection: {…}}\r\n            obj = obj.GeoObjectCollection; // {metaDataProperty: {…}, featureMember: Array(1)}\r\n            obj = obj.featureMember[0]; // GeoObject: {metaDataProperty: {…}, boundedBy: {…}, Point: {…}}\r\n            if (obj === undefined) {\r\n                Object(_view_message_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Адрес не найден', 'red', 3000);\r\n                return;\r\n            }\r\n            obj = obj.GeoObject.Point; // {pos: \"37.620555 55.741333\"}\r\n            const coords = obj.pos; // 37.620555 55.741333\r\n            return coords;\r\n        }\r\n\r\n        function httpGet(fullUrl) {\r\n            return new Promise(resolve => {\r\n                var xhr = new XMLHttpRequest();\r\n                xhr.open(\"GET\", fullUrl, true);\r\n                xhr.onload = () => {\r\n                    resolve(\r\n                        Object(_view_yaMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(request(xhr.responseText), id)\r\n                    );\r\n                };\r\n                xhr.send();\r\n\r\n            });\r\n        }\r\n\r\n        const url = 'https://geocode-maps.yandex.ru/1.x/?';\r\n        const apikey = '0299c42e-268e-4337-9740-e158b72d29fd&format=json&geocode=';\r\n        const fullUrl = url + apikey + adress;\r\n\r\n        return (httpGet(fullUrl));\r\n    }\r\n    xhr(adress);\r\n}\n\n//# sourceURL=webpack:///./src/control/xhrYaMap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/menu/menu */ \"./src/view/menu/menu.js\");\n/* harmony import */ var _control_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control/load */ \"./src/control/load.js\");\n/* harmony import */ var _control_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control/listeners */ \"./src/control/listeners.js\");\n\r\n\r\n\r\n\r\nObject(_view_menu_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nObject(_control_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nif (localStorage.getItem('stickers')) {\r\n    Object(_control_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\nObject(_control_listeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model/Sticker.js":
/*!******************************!*\
  !*** ./src/model/Sticker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sticker; });\n/* harmony import */ var _currentId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentId */ \"./src/model/currentId.js\");\n/* harmony import */ var _makeDOMElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeDOMElement */ \"./src/model/makeDOMElement.js\");\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/model/addMiniSigns.js\");\n/* harmony import */ var _view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/editSticker/editSticker */ \"./src/view/editSticker/editSticker.js\");\n/* harmony import */ var _view_editMapSticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/editMapSticker */ \"./src/view/editMapSticker.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Sticker {\r\n    constructor(name = '', content = '', type = 'simple', adress) {\r\n        this.type = type;\r\n        this.name = name;\r\n        this.content = content;\r\n        this.id = Object(_currentId__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        this.adress = adress;\r\n    }\r\n\r\n    create() {\r\n        const area = document.getElementById('stickyNotes');\r\n        const wrap = Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'newSticker', '', this.id);\r\n        const fragment = document.createDocumentFragment();\r\n\r\n        fragment.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.id));\r\n        fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h1', '', this.name)); // adding headline\r\n        if (this.type === 'map') {\r\n            const adr = Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', '', this.adress);\r\n            adr.id = `adress${this.id}`;\r\n            fragment.appendChild(adr);\r\n        }\r\n        fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', '', this.content));\r\n        wrap.appendChild(fragment);\r\n        area.appendChild(wrap);\r\n        document.getElementById(this.id).setAttribute('data-action', 'sticker');\r\n    }\r\n\r\n    hide() {\r\n        document.getElementById(this.id).style = 'display: none';\r\n    }\r\n\r\n    show() {\r\n        document.getElementById(this.id).style = 'display: display-block';\r\n    }\r\n    mini() {\r\n        //состояние стикера в свёрнутом виде\r\n    }\r\n\r\n    full() {\r\n        if (this.type === 'map') {\r\n            Object(_view_editMapSticker__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this.id);\r\n        } else {\r\n            Object(_view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.id);\r\n        }\r\n    }\r\n\r\n    move() {\r\n        //перемещение стикера\r\n    }\r\n\r\n    setId() {\r\n        //установить id\r\n    }\r\n\r\n    addUrl() {\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/model/Sticker.js?");

/***/ }),

/***/ "./src/model/addMiniSigns.js":
/*!***********************************!*\
  !*** ./src/model/addMiniSigns.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addMiniSigns; });\nfunction addMiniSigns() {\r\n    const fragment = document.createDocumentFragment();\r\n\r\n    const edit = document.createElement('img');\r\n    edit.src = 'img/edit_14x10.png';\r\n    edit.classList.add('edit');\r\n    edit.setAttribute('data-action', 'edit');\r\n    fragment.appendChild(edit);\r\n\r\n    const del = document.createElement('img');\r\n    del.src = 'img/del_10.png';\r\n    del.classList.add('del');\r\n    del.setAttribute('data-action', 'delete');\r\n    fragment.appendChild(del);\r\n\r\n    return fragment;\r\n}\n\n//# sourceURL=webpack:///./src/model/addMiniSigns.js?");

/***/ }),

/***/ "./src/model/currentId.js":
/*!********************************!*\
  !*** ./src/model/currentId.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return currentId; });\nfunction currentId() {\r\n    let id;\r\n    for (id = 1; document.getElementById(id); id++) {}\r\n    return id;\r\n}\n\n//# sourceURL=webpack:///./src/model/currentId.js?");

/***/ }),

/***/ "./src/model/makeDOMElement.js":
/*!*************************************!*\
  !*** ./src/model/makeDOMElement.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeDOMelement; });\nfunction makeDOMelement(tagName, className, text, id) {\r\n    const element = document.createElement(tagName);\r\n    if (className) {\r\n        element.classList.add(className);\r\n    }\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    if (id) {\r\n        element.id = id;\r\n    }\r\n\r\n    return element;\r\n};\n\n//# sourceURL=webpack:///./src/model/makeDOMElement.js?");

/***/ }),

/***/ "./src/view/deleteSticker.js":
/*!***********************************!*\
  !*** ./src/view/deleteSticker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteSticker; });\nfunction deleteSticker(id) {\r\n    document.getElementById(id).remove();\r\n\r\n    for (var i = +id + 1; true; i++) {\r\n        const sticker = document.getElementById(i);\r\n\r\n        if (!sticker === false) {\r\n            sticker.id = i - 1;\r\n        } else { break; }\r\n    }\r\n    return i;\r\n}\n\n//# sourceURL=webpack:///./src/view/deleteSticker.js?");

/***/ }),

/***/ "./src/view/editMapSticker.js":
/*!************************************!*\
  !*** ./src/view/editMapSticker.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editMapSticker; });\n/* harmony import */ var _model_addMiniSigns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/addMiniSigns */ \"./src/model/addMiniSigns.js\");\n/* harmony import */ var _control_xhrYaMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/xhrYaMap */ \"./src/control/xhrYaMap.js\");\n\r\n\r\n\r\nfunction editMapSticker(id) {\r\n    const sticker = document.getElementById(id);\r\n    sticker.className = 'editMapSticker';\r\n    let head = sticker.querySelector('h1').textContent;\r\n    let adress = sticker.getElementsByTagName('p')[0].textContent;\r\n    let body = sticker.getElementsByTagName('p')[1].textContent;\r\n\r\n    sticker.innerHTML = `    \r\n        <img src=\"img/edit_10.png\" class=\"editBig\" title=\"Закрыть без изменений\" \r\n        data-action=\"close\">\r\n        <img src=\"img/save_18.png\" class=\"editBig\" title=\"Применить изменения\" \r\n        data-action=\"ok\">\r\n        <input type=\"text\" style=\"width:250px; \" draggable=\"false\" value=\"${head}\" placeholder=\"Введите название\">\r\n        <br />\t\r\n        <input type=\"text\" title=\"Адрес: \" class=\"adress\" draggable=\"false\" value=\"${adress}\" placeholder=\"Введите адрес и нажмите обновить -->\">\r\n        <img src=\"img/reload_18.png\" class=\"editBig\" title=\"Загрузить карту\" \r\n        data-action=\"reload\">\r\n        <br />\t\r\n        \r\n        <textarea name=\"textArea\" placeholder=\"Место для заметки\">${body}</textarea>\r\n        <div id='map' class='editMap'></div>\r\n        `;\r\n    if (adress) {\r\n        Object(_control_xhrYaMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(adress, id);\r\n    }\r\n    sticker.onclick = function(e) {\r\n        const target = e.target;\r\n        const action = target.getAttribute('data-action');\r\n\r\n        if (action == 'ok') {\r\n            head = sticker.getElementsByTagName('input')[0].value;\r\n            body = sticker.getElementsByTagName('textArea')[0].value;\r\n            sticker.innerHTML = '';\r\n            sticker.className = 'mapSticker';\r\n            sticker.appendChild(Object(_model_addMiniSigns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;\r\n        }\r\n        if (action == 'close') {\r\n            sticker.innerHTML = '';\r\n            sticker.className = 'mapSticker';\r\n            sticker.appendChild(Object(_model_addMiniSigns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p id=\"adress${id}\">${adress}</p><p>${body}</p>`\r\n        }\r\n\r\n        if (action == 'reload') {\r\n            map.innerHTML = '';\r\n            adress = sticker.getElementsByTagName('input')[1].value;\r\n            Object(_control_xhrYaMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(adress, id);\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/view/editMapSticker.js?");

/***/ }),

/***/ "./src/view/editSticker/editSticker.js":
/*!*********************************************!*\
  !*** ./src/view/editSticker/editSticker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editSticker; });\n/* harmony import */ var _model_addMiniSigns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/addMiniSigns */ \"./src/model/addMiniSigns.js\");\n\r\n\r\nfunction editSticker(id) {\r\n    const sticker = document.getElementById(id);\r\n\r\n    sticker.className = 'editSticker';\r\n    // const heigth = (getComputedStyle(sticker).height).replace('px', '') / 2;\r\n    // const width = (getComputedStyle(sticker).width).replace('px', '') / 2;\r\n    // console.log(heigth, width);\r\n\r\n    let head = sticker.querySelector('h1').textContent;\r\n    let body = sticker.querySelector('p').textContent;\r\n    sticker.innerHTML = `    \r\n    <img src=\"img/edit_10.png\" class=\"editBig\" title=\"Закрыть без изменений\" \r\n    data-action=\"close\">\r\n    <img src=\"img/save_18.png\" class=\"editBig\" title=\"Применить изменения\" \r\n    data-action=\"ok\">\r\n    <input type=\"text\" style=\"width:250px\" draggable=\"false\" value=\"${head}\" placeholder=\"Введите заголовок\">\r\n    <br />\r\n    <textarea name=\"textArea\" placeholder=\"Место для заметок\">${body}</textarea>`;\r\n\r\n    sticker.onclick = function(e) {\r\n        const target = e.target;\r\n        const action = target.getAttribute('data-action');\r\n\r\n        if (action == 'ok') {\r\n            head = sticker.getElementsByTagName('input')[0].value;\r\n            body = sticker.getElementsByTagName('textArea')[0].value;\r\n            sticker.innerHTML = '';\r\n            if (sticker.className == 'editSticker') { sticker.className = 'newSticker'; };\r\n            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };\r\n            sticker.appendChild(Object(_model_addMiniSigns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;\r\n        }\r\n        if (action == 'close') {\r\n            sticker.innerHTML = '';\r\n            if (sticker.className == 'editSticker') { sticker.className = 'newSticker' };\r\n            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };\r\n            sticker.appendChild(Object(_model_addMiniSigns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/view/editSticker/editSticker.js?");

/***/ }),

/***/ "./src/view/example.js":
/*!*****************************!*\
  !*** ./src/view/example.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return example; });\n/* harmony import */ var _model_Sticker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Sticker */ \"./src/model/Sticker.js\");\n\r\n\r\nfunction example() {\r\n    const makeSticker = (title, content, type, adress) => {\r\n        const sticker = new _model_Sticker__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, content, type, adress);\r\n        sticker.create();\r\n        sticker.show();\r\n    }\r\n    makeSticker('Become an expert in JavaScript', 'As soon as posible', 'newSticker');\r\n    makeSticker('Learn React', 'On middle level', 'newSticker');\r\n    makeSticker('Learn Node.JS', 'And develop multi-user services', 'newSticker');\r\n    makeSticker('To find a cool job', 'With good salary', 'newSticker');\r\n    makeSticker('Питер, Фонтанка', '', 'map', 'Питер, Фонтанка');\r\n    makeSticker('ВДНХ на карте', 'Посетить выставку промышленного оборудования (пищевая пром-ть; станки для бахил и т.п.)', 'map', 'Пр-т Мира, 119, Москва');\r\n\r\n    const ex = document.getElementById('example');\r\n    ex.remove();\r\n}\n\n//# sourceURL=webpack:///./src/view/example.js?");

/***/ }),

/***/ "./src/view/menu/menu.js":
/*!*******************************!*\
  !*** ./src/view/menu/menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return panel; });\nfunction panel() {\r\n    let panelContents = `\r\n    <div id=\"panel\" class=\"panel\">\r\n\r\n        <div id=\"example\" class=\"button btn btn-success pull-left\" title=\"Загрузить примеры\">\r\n        Примеры</div>\r\n\r\n        <div id=\"plus\" class=\"button btn btn-success pull-left\" title=\"Добавить стикер\">\r\n        <span class=\"plusSign\">➕&nbsp</span>стикер</div>\r\n\r\n        <div id=\"plusMap\" class=\"button btn btn-success pull-left\" title=\"Добавить стикер-карту\">\r\n        <span class=\"plusSign\">➕&nbsp</span>карта</div>\r\n\r\n        <div id=\"saving\" class=\"button btn btn-success pull-left\" title=\"Сохранить  всё\">\r\n        Сохранить</div>    \r\n \r\n        <div id=\"cleaning\" class=\"button btn btn-success pull-left\" title=\"Удалить  всё\">\r\n        Удалить</div>\r\n        <div id='inform'></div>\r\n    </div>`;\r\n\r\n    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);\r\n};\n\n//# sourceURL=webpack:///./src/view/menu/menu.js?");

/***/ }),

/***/ "./src/view/message/message.js":
/*!*************************************!*\
  !*** ./src/view/message/message.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst message = (mess, color = 'darkgreen', time = 2000) => {\r\n    const messageField = document.getElementById('inform');\r\n    messageField.innerText = mess;\r\n    messageField.style.color = color;\r\n\r\n    function waning() {\r\n        let i = 1;\r\n        const timerId = setTimeout(function go() {\r\n            if (i > 0) setTimeout(go, time / 10);\r\n            messageField.style.opacity = i;\r\n            i = (i * 10 - 1) / 10;\r\n        }, 100);\r\n    }\r\n    waning();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\n\n//# sourceURL=webpack:///./src/view/message/message.js?");

/***/ }),

/***/ "./src/view/yaMap.js":
/*!***************************!*\
  !*** ./src/view/yaMap.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return yaMap; });\nfunction yaMap(coords) {\r\n    if (!coords) { return };\r\n    const coordsArr = coords.split(' '); // converting string to array\r\n    const x = +coordsArr[0];\r\n    const y = +coordsArr[1];\r\n\r\n    // Функция ymaps.ready() будет вызвана, когда\r\n    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.\r\n    ymaps.ready(init);\r\n\r\n    function init() {\r\n        // Создание карты.    \r\n        const myMap = new ymaps.Map(\"map\", {\r\n            // Координаты центра карты.\r\n            // Порядок по умолчанию: «широта, долгота».\r\n            // Чтобы не определять координаты центра карты вручную,\r\n            // воспользуйтесь инструментом Определение координат.\r\n            center: [y, x],\r\n            // controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']\r\n            controls: ['zoomControl'],\r\n            // Уровень масштабирования. Допустимые значения:\r\n            // от 0 (весь мир) до 19.\r\n            zoom: 16\r\n        });\r\n        /*\r\n        // Создание метки \r\n        const myPlacemark = new ymaps.Placemark(\r\n            // Координаты метки\r\n            [y, x],\r\n            //{ balloonContent: '<img src=\"/img/star_16.png\" />' }\r\n        );\r\n        // Добавление метки на карту\r\n        myMap.geoObjects.add(myPlacemark);\r\n        */\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/view/yaMap.js?");

/***/ })

/******/ });