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

/***/ "./src/tests.js":
/*!**********************!*\
  !*** ./src/tests.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nimport makeDOMelement from './singleSticker/makeDOMElement';\r\nimport Sticker from './singleSticker/Sticker';\r\nimport currentId from './singleSticker/currentId';\r\n\r\ndescribe('makeDOMelement', function() {\r\n    it('Проверка создания узла', function() {\r\n        assert.equal(makeDOMelement('р', 'red', 'Hi, world').outerHTML, '<р class=\"red\">Hi, world</р>');\r\n        assert.equal(makeDOMelement('div', 'red', 'Hi, world').outerHTML, '<div class=\"red\">Hi, world</div>');\r\n        assert.equal(makeDOMelement('div', 'red').outerHTML, '<div class=\"red\"></div>');\r\n    });\r\n});\r\n*/\r\n/*\r\ndescribe('makeSticker', function() {\r\n    it('Создание нового стикера c стандартными настройками', function() {\r\n        assert.equal(makeSticker({}).toString(), `makeSticker вернул объект: id : 1, className : newSticker, head : Новый стикер, body : Текст стикера`)\r\n    });\r\n\r\n    it('Создание нового стикера', function() {\r\n        assert.equal(makeSticker({ id: 15, className: 'newClass', head: 'Super HeadLine', body: 'Some very intresting or important text' }), 'makeSticker вернул объект: id : 15, className : newClass, head : Super HeadLine, body : Some very intresting or important text');\r\n    });\r\n\r\n});\r\n*/\r\nconst sticker = new Sticker();\r\nconsole.log(sticker.name);\r\ndescribe('Sticker', function() {\r\n    it('Создание нового стикера на объекте cо дефолтными настройками', function() {\r\n        assert.equal(sticker.name, `Новый стикер`);\r\n        assert.equal(sticker.type, `simple`);\r\n        assert.equal(sticker.content, '');\r\n        assert.equal(sticker.id, currentId());\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack:///./src/tests.js?");

/***/ })

/******/ });