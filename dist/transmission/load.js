'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = load;
function load() {
    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', localStorage.getItem('stickers'));
};