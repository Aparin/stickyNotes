'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouseOverOut;
function mouseOverOut(id) {
    var el = document.getElementById(id);
    el.addEventListener('mouseover', function () {
        el.style.background = 'white';
    });
    el.addEventListener('mouseout', function () {
        el.style.background = 'linear-gradient(to top, grey, white)';
    });
}