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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/start/tests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/view/editSticker/editSticker.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/view/editSticker/editSticker.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".editSticker {\\r\\n    display: inline-block;\\r\\n    width: 300px;\\r\\n    height: 315px;\\r\\n    background-color: white;\\r\\n    border: 1px dotted darkgreen;\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    font-size: 12px;\\r\\n    padding: 3px;\\r\\n    z-index: 3;\\r\\n    /*position: absolute;\\r\\n    outline-width: 2px;\\r\\n    outline-style: solid;\\r\\n    outline-color: darkgreen;\\r\\n    */\\r\\n}\\r\\n\\r\\n.editSticker textarea {\\r\\n    height: 255px;\\r\\n    margin: 0 0 -1px 0;\\r\\n}\\r\\n\\r\\n.editSticker h1 {\\r\\n    font-size: 14px;\\r\\n    line-height: 14px;\\r\\n    color: darkgreen;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n    width: 290px;\\r\\n    height: auto;\\r\\n    margin: 3px;\\r\\n    border: 0px;\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    padding: 5px;\\r\\n    background-color: lightyellow;\\r\\n}\\r\\n\\r\\ninput {\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    padding: 2px;\\r\\n    color: darkgreen;\\r\\n    font-size: 16px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n\\r\\ninput.keyWords {\\r\\n    background-color: white;\\r\\n    height: 15px;\\r\\n    width: 100%;\\r\\n    font-size: 11px;\\r\\n    color: gray;\\r\\n    font-weight: normal;\\r\\n    font-family: Georgia;\\r\\n}\\r\\n\\r\\n\\r\\n/* --------------- editMap ----------------*/\\r\\n\\r\\n.editMapSticker {\\r\\n    display: inline-block;\\r\\n    width: 300px;\\r\\n    height: 435px;\\r\\n    background-color: white;\\r\\n    border: 1px dotted darkgreen;\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    font-size: 12px;\\r\\n    padding: 4px;\\r\\n}\\r\\n\\r\\n.editMapSticker h1 {\\r\\n    font-size: 14px;\\r\\n    line-height: 14px;\\r\\n    color: darkgreen;\\r\\n}\\r\\n\\r\\n.editMapSticker textarea {\\r\\n    height: 40px;\\r\\n}\\r\\n\\r\\ninput.adress {\\r\\n    width: 265px;\\r\\n    font-size: 11px;\\r\\n    margin: 2px 0px;\\r\\n    color: grey;\\r\\n}\\r\\n\\r\\n.editMap {\\r\\n    width: 100%;\\r\\n    height: 300px;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/view/editSticker/editSticker.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/view/main/main.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./src/view/main/main.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"h1 {\\r\\n    font-size: 14px;\\r\\n    line-height: 14px;\\r\\n    color: darkgreen;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n    width: 285px;\\r\\n    height: auto;\\r\\n    margin: 3px;\\r\\n    border: 0px;\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    padding: 5px;\\r\\n    background-color: lightyellow;\\r\\n}\\r\\n\\r\\ninput {\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    padding: 2px;\\r\\n    color: darkgreen;\\r\\n    font-size: 16px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n\\r\\n\\r\\n/*\\r\\n#stickyNotes {\\r\\n    display: inline-flex;\\r\\n    flex-wrap: wrap;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n*/\\r\\n\\r\\n.newSticker {\\r\\n    display: inline-block;\\r\\n    vertical-align: top;\\r\\n    width: 150px;\\r\\n    height: 45px;\\r\\n    background: white;\\r\\n    padding: 2px;\\r\\n    margin: 3px 0px;\\r\\n    font-size: 10px;\\r\\n    color: black;\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    border: 1px dotted green;\\r\\n    z-index: 1;\\r\\n    overflow: hidden;\\r\\n    /* cursor: move; */\\r\\n    outline-width: 0px;\\r\\n}\\r\\n\\r\\n.newSticker h1 {\\r\\n    font-size: 12px;\\r\\n    line-height: 12px;\\r\\n    color: darkgreen;\\r\\n    margin-bottom: 12px;\\r\\n}\\r\\n\\r\\n.mapSticker {\\r\\n    display: inline-block;\\r\\n    vertical-align: top;\\r\\n    width: 150px;\\r\\n    height: 45px;\\r\\n    background: white;\\r\\n    padding: 2px;\\r\\n    margin: 2px;\\r\\n    font-size: 10px;\\r\\n    color: black;\\r\\n    font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n    border: 1px dotted green;\\r\\n    z-index: 1;\\r\\n    overflow: hidden;\\r\\n    cursor: move;\\r\\n}\\r\\n\\r\\n.mapSticker h1 {\\r\\n    font-size: 12px;\\r\\n    line-height: 12px;\\r\\n    color: darkgreen;\\r\\n}\\r\\n\\r\\n.editMini {\\r\\n    background: gray;\\r\\n}\\r\\n\\r\\n.editBig {\\r\\n    float: right;\\r\\n    cursor: pointer;\\r\\n    margin: 3px;\\r\\n}\\r\\n\\r\\n.mouseover {\\r\\n    background: white;\\r\\n}\\r\\n\\r\\n.out {\\r\\n    position: absolute;\\r\\n    left: 50%;\\r\\n    bottom: 50px;\\r\\n}\\r\\n\\r\\n.del {\\r\\n    float: right;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.edit {\\r\\n    cursor: pointer;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/view/main/main.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/view/message/message.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader!./src/view/message/message.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#inform {\\r\\n    display: inline-block;\\r\\n    font-size: 18px;\\r\\n    color: green;\\r\\n    margin: 2px;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/view/message/message.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

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

/***/ "./src/model/Sticker.js":
/*!******************************!*\
  !*** ./src/model/Sticker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sticker; });\n/* harmony import */ var _makeDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeDOMElement */ \"./src/model/makeDOMElement.js\");\n/* harmony import */ var _addMiniSigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMiniSigns */ \"./src/model/addMiniSigns.js\");\n/* harmony import */ var _view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/editSticker/editSticker */ \"./src/view/editSticker/editSticker.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/model/state.js\");\n\r\n\r\n\r\n\r\n\r\nclass Sticker {\r\n    constructor(indx) {\r\n        this.indx = indx;\r\n        this.element = _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElement(indx);\r\n        this.id = indx;\r\n    }\r\n\r\n    toDOM() {\r\n        const id = this.id;\r\n        let title = '';\r\n        if (this.element) {\r\n            ({ title = '' } = this.element)\r\n        }\r\n        const area = document.getElementById('stickyNotes');\r\n        const wrap = Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'newSticker', '', id);\r\n        const fragment = document.createDocumentFragment();\r\n\r\n        fragment.appendChild(Object(_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id));\r\n        fragment.appendChild(Object(_makeDOMElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', '', title));\r\n\r\n        wrap.appendChild(fragment);\r\n        area.insertBefore(wrap, area.firstChild);\r\n        document.getElementById(id).setAttribute('data-action', 'sticker');\r\n    }\r\n\r\n    hide() {\r\n        document.getElementById(this.id).style = 'display: none';\r\n    }\r\n\r\n    show() {\r\n        document.getElementById(this.id).style = 'display: block';\r\n    }\r\n\r\n    full(type = '') {\r\n        Object(_view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.id, type);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/model/Sticker.js?");

/***/ }),

/***/ "./src/model/addMiniSigns.js":
/*!***********************************!*\
  !*** ./src/model/addMiniSigns.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addMiniSigns; });\nfunction addMiniSigns() {\r\n    const fragment = document.createDocumentFragment();\r\n\r\n    const edit = document.createElement('img');\r\n    edit.src = './img/edit_14x10.png';\r\n    edit.classList.add('edit');\r\n    edit.setAttribute('data-action', 'edit');\r\n    fragment.appendChild(edit);\r\n\r\n    const del = document.createElement('img');\r\n    del.src = './img/del_10.png';\r\n    del.classList.add('del');\r\n    del.setAttribute('data-action', 'delete');\r\n    fragment.appendChild(del);\r\n\r\n    return fragment;\r\n}\n\n//# sourceURL=webpack:///./src/model/addMiniSigns.js?");

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

/***/ "./src/model/state.js":
/*!****************************!*\
  !*** ./src/model/state.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst state = {\r\n    arr: [],\r\n\r\n    // all stickers\r\n    set(objs) {\r\n        this.arr = objs;\r\n    },\r\n\r\n    get() {\r\n        return this.arr;\r\n    },\r\n\r\n    // single sticker\r\n    add(obj) {\r\n        this.arr.push(obj)\r\n    },\r\n    setElement(id, obj) {\r\n        this.arr[id - 1] = obj;\r\n    },\r\n    getElement(id) {\r\n        return this.arr[id - 1];\r\n    },\r\n    insertElement(id, obj) {\r\n        this.arr.splice(id - 1, 0, obj);\r\n    },\r\n    delElement(id) {\r\n        this.arr.splice(id - 1, 1)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (state);\n\n//# sourceURL=webpack:///./src/model/state.js?");

/***/ }),

/***/ "./src/start/tests.js":
/*!****************************!*\
  !*** ./src/start/tests.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_main_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/main/main.css */ \"./src/view/main/main.css\");\n/* harmony import */ var _view_main_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_view_main_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_editSticker_editSticker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/editSticker/editSticker.css */ \"./src/view/editSticker/editSticker.css\");\n/* harmony import */ var _view_editSticker_editSticker_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_editSticker_editSticker_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _model_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/makeDOMElement */ \"./src/model/makeDOMElement.js\");\n/* harmony import */ var _model_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/state */ \"./src/model/state.js\");\n/* harmony import */ var _model_Sticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Sticker */ \"./src/model/Sticker.js\");\n/* harmony import */ var _view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/editSticker/editSticker */ \"./src/view/editSticker/editSticker.js\");\n/* harmony import */ var _control_xhrYaMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../control/xhrYaMap */ \"./src/control/xhrYaMap.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet module;\r\nconst testObj = { title: \"New title\" };\r\nconst testState = [];\r\nfor (let i = 0; i < 4; i += 2) {\r\n\r\n    testState[i] = { title: 'Title' + i, content: 'content' + i, keyWords: 'keyword' + i, adress: '' };\r\n\r\n    const j = i + 1;\r\n    testState[j] = { title: 'Title' + j, content: 'content' + j, keyWords: 'keyword' + j, adress: 'adress' + j };\r\n}\r\n\r\nconst error = (module, err) => {\r\n    console.log(`В коде модуля \"${module}\" ошибка \"${err.name}\": ${err.message}`);\r\n    document.body.insertAdjacentHTML('afterend',\r\n        `<p style=\"color: red\">В коде модуля <b>\"${module}\"</b> ошибка \"${err.name}\": ${err.message}\r\n        </p>`);\r\n    // throw \"stop\";\r\n}\r\n\r\n/****************** MODEL *****************/\r\n\r\n/***** makeDOMelement  *****/\r\nmodule = 'makeDOMelement';\r\ndescribe(module, function() {\r\n    try {\r\n        it('Проверка создания узла', () => {\r\n            assert.equal(Object(_model_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('р', 'red', 'Hi, world').outerHTML, '<р class=\"red\">Hi, world</р>');\r\n            assert.equal(Object(_model_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', 'red', 'Hi, world').outerHTML, '<div class=\"red\">Hi, world</div>');\r\n            assert.equal(Object(_model_makeDOMElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', 'red').outerHTML, '<div class=\"red\"></div>');\r\n        });\r\n    } catch (e) {\r\n        error(module, e);\r\n    }\r\n})\r\n\r\n\r\n/***** state  *****/\r\nmodule = 'state';\r\ndescribe(module, function() {\r\n    try {\r\n        it('Запись и чтение массива', () => {\r\n            _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(testState);\r\n            assert.equal(testState, _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get());\r\n        });\r\n        it('Добавление элемента в конец массива', () => {\r\n            _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(testObj);\r\n            const stLng = _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get().length;\r\n            assert.equal(_model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElement(stLng), testObj);\r\n        });\r\n        it('Запись и чтение элемента', () => {\r\n            _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setElement(testState[0]);\r\n            assert.equal(_model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElement(1), testState[0]);\r\n        });\r\n        it('Вставка элемента', () => {\r\n            _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].insertElement(1, testObj);\r\n            assert.equal(_model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElement(1), testObj);\r\n        });\r\n        it('Удаление элемента', () => {\r\n            _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delElement(1);\r\n            assert.equal(_model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElement(1), testState[0]);\r\n        });\r\n    } catch (e) {\r\n        error(module, e);\r\n    }\r\n});\r\n\r\n/****************** VIEW ******************/\r\n\r\n/***** Sticker *****/\r\nmodule = 'Sticker';\r\ndescribe(module, function() {\r\n    try {\r\n        _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(testState);\r\n\r\n        const sticker = new _model_Sticker__WEBPACK_IMPORTED_MODULE_4__[\"default\"](1);\r\n        it('Создание нового стикера', () => {\r\n            assert.equal(sticker.element.title, _model_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElement(1).title);\r\n        });\r\n\r\n        sticker.toDOM();\r\n        const el = document.getElementById('1');\r\n        it('Отправляем в DOM', () => {\r\n            assert.equal(true, !!el);\r\n        });\r\n        it('Скрываем стикер', () => {\r\n            sticker.hide();\r\n            assert.equal('none', el.style.display);\r\n        });\r\n        it('Отображаем стикер', () => {\r\n            sticker.show();\r\n            assert.equal('block',\r\n                window.getComputedStyle(el, null).getPropertyValue('display'));\r\n        });\r\n        it('Открываем как обычный стикер', function() {\r\n            sticker.full();\r\n            assert.equal('editSticker', el.className);\r\n        });\r\n\r\n        const stickerMap = new _model_Sticker__WEBPACK_IMPORTED_MODULE_4__[\"default\"](2);\r\n        stickerMap.toDOM();\r\n        stickerMap.full('map');\r\n        const map = document.getElementById('2');\r\n        it('Открываем как map-стикер', function() {\r\n            assert.equal('editMapSticker', map.className);\r\n        });\r\n        setTimeout(() => { // иначе удаляет раньше, чем отработали предыдущие блоки, особенно 'map-стикер'\r\n            el.remove();\r\n            map.remove();\r\n        }, 2000);\r\n    } catch (e) {\r\n        error(module, e);\r\n    }\r\n});\r\n\r\n/***** editSticker *****/\r\nmodule = 'editSticker';\r\nlet id = 3;\r\nlet sticker3 = new _model_Sticker__WEBPACK_IMPORTED_MODULE_4__[\"default\"](id);\r\nsticker3.toDOM();\r\nObject(_view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(id, '');\r\nconst el3 = document.getElementById(id);\r\ndescribe(module, () => {\r\n    try {\r\n        it(`Проверка значка 'закрыть'`, () => {\r\n            assert.equal('close', el3.children[0].getAttribute('data-action'));\r\n        })\r\n        it(`Проверка значка 'дискета'`, () => {\r\n            assert.equal('ok', el3.children[1].getAttribute('data-action'));\r\n        })\r\n        it(`Проверка поля 'Заголовок'`, () => {\r\n            assert.equal('INPUT', el3.children[2].nodeName);\r\n        })\r\n        it(`Проверка поля 'Место для заметок'`, () => {\r\n            assert.equal('TEXTAREA', el3.children[3].nodeName);\r\n        })\r\n        it(`Проверка поля 'keyWords'`, () => {\r\n            assert.equal('INPUT', el3.children[4].nodeName);\r\n        })\r\n        setTimeout(() => {\r\n            el3.remove();\r\n        }, 200);\r\n    } catch (e) {\r\n        error(module, e);\r\n    }\r\n});\r\n\r\nmodule = 'editSticker / map';\r\nid = 4;\r\nconst sticker4 = new _model_Sticker__WEBPACK_IMPORTED_MODULE_4__[\"default\"](id);\r\nsticker4.toDOM();\r\nObject(_view_editSticker_editSticker__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(id, '');\r\nconst el4 = document.getElementById(id);\r\ndescribe(module, () => {\r\n    try {\r\n        it(`Map. Проверка значка 'закрыть'`, () => {\r\n            assert.equal('close', el4.children[0].getAttribute('data-action'));\r\n        })\r\n        it(`Map. Проверка значка 'дискета'`, () => {\r\n            assert.equal('ok', el4.children[1].getAttribute('data-action'));\r\n        })\r\n        it(`Map. Проверка поля 'Заголовок'`, () => {\r\n            assert.equal('INPUT', el4.children[2].nodeName);\r\n        })\r\n        it(`Map. Проверка поля 'Место для заметок'`, () => {\r\n            assert.equal('TEXTAREA', el4.children[3].nodeName);\r\n        })\r\n        it(`Map. Проверка поля 'Адрес'`, () => {\r\n            assert.equal('INPUT', el4.children[4].nodeName);\r\n        })\r\n        it(`Map. Проверка значка 'reload'`, () => {\r\n            assert.equal('IMG', el4.children[5].nodeName);\r\n        })\r\n        it(`Map. Проверка блока 'Карта'`, () => {\r\n            assert.equal('map', el4.children[6].id);\r\n        })\r\n        it(`Map. Проверка поля 'keyWords'`, () => {\r\n            assert.equal('INPUT', el4.children[7].nodeName);\r\n        })\r\n        setTimeout(() => {\r\n            el4.remove();\r\n        }, 2000);\r\n    } catch (e) {\r\n        error(module, e);\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/start/tests.js?");

/***/ }),

/***/ "./src/view/editSticker/editSticker.css":
/*!**********************************************!*\
  !*** ./src/view/editSticker/editSticker.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./editSticker.css */ \"./node_modules/css-loader/index.js!./src/view/editSticker/editSticker.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/view/editSticker/editSticker.css?");

/***/ }),

/***/ "./src/view/editSticker/editSticker.js":
/*!*********************************************!*\
  !*** ./src/view/editSticker/editSticker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editSticker; });\n/* harmony import */ var _editSticker_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editSticker.css */ \"./src/view/editSticker/editSticker.css\");\n/* harmony import */ var _editSticker_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editSticker_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/addMiniSigns */ \"./src/model/addMiniSigns.js\");\n/* harmony import */ var _model_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/state */ \"./src/model/state.js\");\n/* harmony import */ var _control_xhrYaMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../control/xhrYaMap */ \"./src/control/xhrYaMap.js\");\n\r\n\r\n\r\n\r\n\r\nfunction editSticker(id, type) {\r\n    const sticker = document.getElementById(id);\r\n    sticker.className = 'editSticker';\r\n    const el = _model_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getElement(id);\r\n\r\n    let title = el.title;\r\n    let content = el.content;\r\n    let keyWords = el.keyWords;\r\n    let adress = el.adress;\r\n\r\n    sticker.innerHTML = `    \r\n    <img src=\"img/edit_10.png\" class=\"editBig\" title=\"Закрыть без изменений\" \r\n    data-action=\"close\">\r\n    <img src=\"img/save_18.png\" class=\"editBig\" title=\"Применить изменения\" \r\n    data-action=\"ok\">\r\n    <input type=\"text\" style=\"width:250px\" draggable=\"false\" value=\"${title}\" placeholder=\"Введите заголовок\">\r\n    \r\n    <textarea name=\"textArea\" placeholder=\"Место для заметок\">${content}</textarea>`;\r\n    if (type === 'map' || (adress !== \"undefined\" && adress)) {\r\n        sticker.innerHTML += `  \r\n        <input type=\"text\" title=\"Адрес: \" class=\"adress\" draggable=\"false\" value=\"${adress}\" placeholder=\"Введите адрес и нажмите обновить -->\">\r\n        <img src=\"./img/reload_18.png\" class=\"editBig\" title=\"Загрузить карту\" \r\n        data-action=\"reload\">\r\n        <div id='map' class='editMap'></div>\r\n        `;\r\n        sticker.className = 'editMapSticker';\r\n        if (adress) { Object(_control_xhrYaMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(adress, id) };\r\n    }\r\n    sticker.innerHTML += ` \r\n    <input class = \"keyWords\" name=\"keyWords\" placeholder=\"Введите теги через запятую\" value=\"${keyWords}\">`;\r\n\r\n    sticker.onclick = function(e) {\r\n        const target = e.target;\r\n        const action = target.getAttribute('data-action');\r\n\r\n        if (action == 'ok') {\r\n            title = sticker.getElementsByTagName('input')[0].value;\r\n            content = sticker.getElementsByTagName('textArea')[0].value;\r\n            if (adress !== \"undefined\" && adress) {\r\n                adress = sticker.getElementsByTagName('input')[1].value;\r\n                keyWords = sticker.getElementsByTagName('input')[2].value;\r\n            } else {\r\n                keyWords = sticker.getElementsByTagName('input')[1].value;\r\n            }\r\n\r\n            _model_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setElement(id, { title, content, keyWords, adress });\r\n\r\n            sticker.innerHTML = '';\r\n            sticker.className = 'newSticker';\r\n            sticker.appendChild(Object(_model_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${title}</h1>`;\r\n        }\r\n        if (action == 'close') {\r\n            sticker.innerHTML = '';\r\n            sticker.className = 'newSticker';\r\n            sticker.appendChild(Object(_model_addMiniSigns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            sticker.innerHTML += `<h1>${title}</h1>`\r\n        }\r\n        if (action == 'reload') {\r\n            map.innerHTML = '';\r\n            adress = sticker.getElementsByTagName('input')[1].value;\r\n            Object(_control_xhrYaMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(adress, id);\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/view/editSticker/editSticker.js?");

/***/ }),

/***/ "./src/view/main/main.css":
/*!********************************!*\
  !*** ./src/view/main/main.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./main.css */ \"./node_modules/css-loader/index.js!./src/view/main/main.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/view/main/main.css?");

/***/ }),

/***/ "./src/view/message/message.css":
/*!**************************************!*\
  !*** ./src/view/message/message.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./message.css */ \"./node_modules/css-loader/index.js!./src/view/message/message.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/view/message/message.css?");

/***/ }),

/***/ "./src/view/message/message.js":
/*!*************************************!*\
  !*** ./src/view/message/message.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _message_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.css */ \"./src/view/message/message.css\");\n/* harmony import */ var _message_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_message_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst message = (mess, color = 'darkgreen', time = 2000) => {\r\n    const messageField = document.getElementById('inform');\r\n    messageField.innerText = mess;\r\n    messageField.style.color = color;\r\n\r\n    function waning() {\r\n        let i = 1;\r\n        const timerId = setTimeout(function go() {\r\n            if (i > 0) setTimeout(go, time / 10);\r\n            messageField.style.opacity = i;\r\n            i = (i * 10 - 1) / 10;\r\n        }, 100);\r\n    }\r\n    waning();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\n\n//# sourceURL=webpack:///./src/view/message/message.js?");

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