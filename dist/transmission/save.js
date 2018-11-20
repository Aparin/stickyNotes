'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = save;

var _currentData = require('./currentData.js');

var _currentData2 = _interopRequireDefault(_currentData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function save() {
    var localStickers = (0, _currentData2.default)();
    localStorage.setItem('stickers', localStickers);
    localStorage.setItem('id', id - 1);
}