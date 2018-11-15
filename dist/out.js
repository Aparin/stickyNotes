'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = out;
function out(data) {
    var element = document.createElement('span');
    element.textContent = data + ' ';
    document.getElementById('out').appendChild(element);
};