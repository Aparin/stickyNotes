'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = editSticker;

var _out = require('../out');

var _out2 = _interopRequireDefault(_out);

var _addMiniSigns = require('./addMiniSigns');

var _addMiniSigns2 = _interopRequireDefault(_addMiniSigns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function editSticker(id) {
    var sticker = document.getElementById(id);

    sticker.className = 'editSticker';
    var head = sticker.querySelector('h1').textContent;
    var body = sticker.querySelector('p').textContent;
    sticker.innerHTML = '    \n    <img src="img/edit_10.png" class="editBig" title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0431\u0435\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439" \n    data-action="close">\n    <img src="img/save_18.png" class="editBig" title="\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" \n    data-action="ok">\n    <input type="text" style="width:250px" draggable="false" value="' + head + '">\n    <br />\t\n    <textarea name="textArea">' + body + '</textarea>';

    sticker.onclick = function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action');

        if (action == 'ok') {
            head = sticker.getElementsByTagName('input')[0].value;
            body = sticker.getElementsByTagName('textArea')[0].value;
            sticker.innerHTML = '';
            if (sticker.className == 'editSticker') {
                sticker.className = 'newSticker';
            };
            if (sticker.className == 'editMapSticker') {
                sticker.className = 'mapSticker';
            };
            sticker.appendChild((0, _addMiniSigns2.default)());
            sticker.innerHTML += '<h1>' + head + '</h1><p>' + body + '</p>';
        }
        if (action == 'close') {
            sticker.innerHTML = '';
            if (sticker.className == 'editSticker') {
                sticker.className = 'newSticker';
            };
            if (sticker.className == 'editMapSticker') {
                sticker.className = 'mapSticker';
            };
            sticker.appendChild((0, _addMiniSigns2.default)());
            sticker.innerHTML += '<h1>' + head + '</h1><p>' + body + '</p>';
        }
    };
}