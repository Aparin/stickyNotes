'use strict';

var _out = require('./out');

var _out2 = _interopRequireDefault(_out);

var _panel = require('./allStickers/panel');

var _panel2 = _interopRequireDefault(_panel);

var _load = require('./transmission/load');

var _load2 = _interopRequireDefault(_load);

var _listeners = require('./singleSticker/listeners');

var _listeners2 = _interopRequireDefault(_listeners);

var _Sticker = require('./singleSticker/Sticker');

var _Sticker2 = _interopRequireDefault(_Sticker);

var _Calc = require('../testing/Calc');

var _Calc2 = _interopRequireDefault(_Calc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _panel2.default)();
if (localStorage.getItem('stickers')) {
    (0, _load2.default)();
}
(0, _listeners2.default)();

// const calc = new Calc(2, 5);
// out(calc.sum(10, 20));
var sticker = new _Sticker2.default();
(0, _out2.default)(sticker.name + sticker.type);