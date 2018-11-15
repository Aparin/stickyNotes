"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = currentId;
function currentId() {
    var id = void 0;
    for (id = 1; document.getElementById(id); id++) {}
    return id;
}