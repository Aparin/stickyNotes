"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeDOMelement;
function makeDOMelement(tagName, className, text, id) {
    var element = document.createElement(tagName);
    if (className) {
        element.classList.add(className);
    }
    if (text) {
        element.textContent = text;
    }
    if (id) {
        element.id = id;
    }

    return element;
};