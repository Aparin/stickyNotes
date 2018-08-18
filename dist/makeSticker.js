'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeSticker() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'newSticker';
    var head = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Новый стикер';
    var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Текст стикера';


    var newSticker = {
        'id': id,
        'className': className,
        'head': head,
        'body': body,
        toString: function toString() {
            return 'makeSticker \u0432\u0435\u0440\u043D\u0443\u043B \u043E\u0431\u044A\u0435\u043A\u0442: id : ' + this.id + ', className : ' + this.className + ', head : ' + this.head + ', body : ' + this.body;
        }
    };
    return newSticker;
};

exports.makeSticker = makeSticker;