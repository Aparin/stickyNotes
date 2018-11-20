'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = example;

var _makeSticker = require('../singleSticker/makeSticker');

var _makeSticker2 = _interopRequireDefault(_makeSticker);

var _makeMapSticker = require('../singleSticker/makeMapSticker');

var _makeMapSticker2 = _interopRequireDefault(_makeMapSticker);

var _yaMap = require('./yaMap');

var _yaMap2 = _interopRequireDefault(_yaMap);

var _currentId = require('../singleSticker/currentId');

var _currentId2 = _interopRequireDefault(_currentId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function example() {

    /* На гитхабе хром блокирует кросс-доменную загрузку даже по https. Яндекс-браузер работает норм.
      const url = 'https:// ******.ru/files/stickyNotes/example.php';
    function httpGet(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function() { // (3)
            if (xhr.readyState === 4 && xhr.status === 200) {
                const exampleStickers = xhr.responseText;
                //out2.innerHTML = exampleStickers;
                document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', exampleStickers);
            }
        }
    }
    httpGet(url);
    */

    (0, _makeSticker2.default)('Become an expert in JavaScript', 'As soon as posible', 'newSticker');
    (0, _makeSticker2.default)('Learn React', 'On middle level', 'newSticker');
    (0, _makeSticker2.default)('Learn Node.JS', 'And develop multi-user services', 'newSticker');
    (0, _makeSticker2.default)('To find a cool job', 'With good salary', 'newSticker');
    (0, _makeMapSticker2.default)('ВДНХ на карте', 'Посетить выставку промышленного оборудования (пищевая пром-ть; станки для бахил и т.п.)', 'editMapSticker', 'Пр-т Мира, 119, Москва');
    //[55.76, 37.64]
    // yaMap(55.76, 37.64, currentId() - 1);
    // yaMap([55.76, 37.64], currentId() - 1);

    var ex = document.getElementById('example');
    ex.remove();

    // alert("Стикеры можно менять местами.")
}