'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = moveTheSticker;

var _sort = require('../allStickers/sort');

var _sort2 = _interopRequireDefault(_sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function moveTheSticker(id) {
    var sticker = document.getElementById(id);
    sticker.style.position = 'absolute';

    function moveSticker(e) {
        sticker.style.left = e.pageX - sticker.offsetWidth / 2 + 'px';
        sticker.style.top = e.pageY - sticker.offsetHeight / 2 + 'px';
    }

    sticker.onmousemove = function (e) {
        moveSticker(e);
    };
    sticker.ondragstart = function () {
        return false;
    };

    sticker.onmouseup = function (e) {
        sticker.onmousemove = null;
        sticker.onmouseup = null;
        sticker.style.zIndex = 1;
        sticker.style.position = 'static';
        sticker.style.left = null;
        sticker.style.top = null;

        function surfacing(elem) {
            while (elem != document) {
                var dataAction = elem.getAttribute('data-action');
                if (dataAction == 'sticker') {
                    return elem.id;
                }
                elem = elem.parentNode;
            }
        }

        var next = document.elementFromPoint(e.pageX, e.pageY);
        (0, _sort2.default)(id, surfacing(next));
    };
} // import out from '../out';