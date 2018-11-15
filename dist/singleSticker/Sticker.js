'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sticker = function () {
    function Sticker() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Новый стикер';
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'simple';
        var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        _classCallCheck(this, Sticker);

        this.type = type;
        this.name = name;
        this.content = content;
    }

    _createClass(Sticker, [{
        key: 'mini',
        value: function mini() {
            //состояние стикера в свёрнутом виде
        }
    }, {
        key: 'full',
        value: function full() {
            //состояние стикера в развёрнутом виде
        }
    }, {
        key: 'move',
        value: function move() {
            //перемещение стикера
        }
    }, {
        key: 'setId',
        value: function setId() {
            //установить id
        }
    }, {
        key: 'addUrl',
        value: function addUrl() {}
    }]);

    return Sticker;
}();

exports.default = Sticker;