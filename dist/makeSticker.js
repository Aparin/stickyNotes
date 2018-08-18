'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeSticker(obj) {
    var _obj$id = obj.id,
        id = _obj$id === undefined ? 1 : _obj$id,
        _obj$className = obj.className,
        className = _obj$className === undefined ? 'newSticker' : _obj$className,
        _obj$head = obj.head,
        head = _obj$head === undefined ? 'Новый стикер' : _obj$head,
        _obj$body = obj.body,
        body = _obj$body === undefined ? 'Текст стикера' : _obj$body;

    var newSticker = {
        'id': id,
        'className': className,
        'head': head,
        'body': body,
        toString: function toString() {
            return 'makeSticker \u0432\u0435\u0440\u043D\u0443\u043B \u043E\u0431\u044A\u0435\u043A\u0442: id : ' + this.id + ', className : ' + this.className + ', head : ' + this.head + ', body : ' + this.body;
        },
        show: function show() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            document.write('\n            <div id="' + this.id + '" class="' + this.className + '">\n                <h1>' + head + '</h1>\n                ' + body + '\n            </div>\n            ');
            var place = document.getElementById(id);
            place.style.position = "absolute";
            place.style.left = x + 'px';
            place.style.top = y + 'px';
        }
    };
    return newSticker;
};

exports.makeSticker = makeSticker;