'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addMiniSigns;
function addMiniSigns() {
    var fragment = document.createDocumentFragment();

    var edit = document.createElement('img');
    edit.src = 'img/edit_14x10.png';
    edit.classList.add('edit');
    edit.setAttribute('data-action', 'edit');
    fragment.appendChild(edit);

    var del = document.createElement('img');
    del.src = 'img/del_10.png';
    del.classList.add('del');
    del.setAttribute('data-action', 'delete');
    fragment.appendChild(del);

    return fragment;
}