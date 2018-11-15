'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = currentData;
function currentData() {
    var localStickers = '';
    var id = void 0;
    for (id = 1; true; id++) {
        var sticker = document.getElementById(id);
        if (!sticker === false) {
            localStickers += sticker.outerHTML;
        } else {
            break;
        }
    }
    return localStickers;
}