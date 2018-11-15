'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clear;
function clear() {
    if (!localStorage.getItem('stickers')) {
        alert("Нет сохранённых стикеров, удалять нечего...");
    } else {
        var msg = 'Удалить без возможности восстановления?';
        var div = document.createElement('div');
        div.style.cssText = '\n            text-align:center; padding:10px; position:fixed; \n            background-color: white; width:200px; height:70px; \n            top: 50px; left: 100px; margin-right:-100px; \n            margin-bottom:-20px; border: 1px dotted #000';
        div.onclick = function (e) {
            if (e.target.value == 'Да') {
                for (var id = 1; true; id++) {
                    var sticker = document.getElementById(id);
                    if (!sticker === false) {
                        sticker.remove();
                    } else {
                        break;
                    }
                }

                localStorage.clear();
                this.parentNode.removeChild(this);
            } else {
                this.parentNode.removeChild(this);
            }
        };
        var inp = 'style="margin: 5px; padding: 3px; font-size: 14px;"';
        div.innerHTML = '<div>' + msg + ('<div><input ' + inp + ' \n        type="button" value="\u0414\u0430"><input ' + inp + ' type="button" value="\u041D\u0435\u0442">');

        document.body.appendChild(div);
    }
}