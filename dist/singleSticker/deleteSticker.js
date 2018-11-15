"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = deleteSticker;
function deleteSticker(id) {
    document.getElementById(id).remove();

    for (var i = +id + 1; true; i++) {
        var sticker = document.getElementById(i);

        if (!sticker === false) {
            sticker.id = i - 1;
        } else {
            break;
        }
    }
    return i;
}