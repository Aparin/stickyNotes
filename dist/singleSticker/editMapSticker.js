'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = editMapSticker;

var _out = require('../out');

var _out2 = _interopRequireDefault(_out);

var _addMiniSigns = require('./addMiniSigns');

var _addMiniSigns2 = _interopRequireDefault(_addMiniSigns);

var _xhrYaMap = require('../transmission/xhrYaMap');

var _xhrYaMap2 = _interopRequireDefault(_xhrYaMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function editMapSticker(id) {
    var sticker = document.getElementById(id);
    sticker.className = 'editMapSticker';
    var head = sticker.querySelector('h1').textContent;
    var body = sticker.querySelector('p').textContent;
    var adress = sticker.querySelector('span').textContent;

    sticker.innerHTML = '    \n    <img src="img/edit_10.png" class="editBig" title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0431\u0435\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439" \n    data-action="close">\n    <img src="img/save_18.png" class="editBig" title="\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" \n    data-action="ok">\n    <input type="text" style="width:250px; " draggable="false" value="' + head + '">\n    <br />\t\n    <input type="text" title="\u0410\u0434\u0440\u0435\u0441: " class="adress" draggable="false" value="' + adress + '">\n    <img src="img/reload_18.png" class="editBig" title="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0443" \n    data-action="reload">\n    <br />\t\n    \n    <textarea name="textArea">' + body + '</textarea>\n    <div id=\'map\' class=\'editMap\'></div>\n    ';

    (0, _xhrYaMap2.default)(adress, id);
    sticker.onclick = function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action');

        if (action == 'ok') {
            head = sticker.getElementsByTagName('input')[0].value;
            body = sticker.getElementsByTagName('textArea')[0].value;
            sticker.innerHTML = '';
            sticker.className = 'mapSticker';
            sticker.appendChild((0, _addMiniSigns2.default)());
            sticker.innerHTML += '<h1>' + head + '</h1><p>' + body + '</p>';
        }
        if (action == 'close') {
            sticker.innerHTML = '';
            sticker.className = 'mapSticker';
            sticker.appendChild((0, _addMiniSigns2.default)());
            sticker.innerHTML += '<h1>' + head + '</h1><p>' + body + '</p>';
        }

        if (action == 'reload') {
            map.innerHTML = '';
            adress = sticker.getElementsByTagName('input')[1].value;
            console.log(adress);
            (0, _xhrYaMap2.default)(adress, id);
        }
    };
}