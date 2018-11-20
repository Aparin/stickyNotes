'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sort;

var _currentId = require('../singleSticker/currentId');

var _currentId2 = _interopRequireDefault(_currentId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sort(firstID, secondID) {

    if (secondID === undefined) {
        secondID = (0, _currentId2.default)() - 1;
    }
    if (firstID === secondID) {
        return;
    };
    var move = document.getElementById(firstID);
    var elem = document.getElementById(secondID);

    if (firstID < secondID) {
        elem.parentNode.insertBefore(move, elem.nextSibling);
        for (var i = +firstID + 1; i !== +secondID + 1; i++) {
            var _elem = document.getElementById(i);
            _elem.id = i - 1;
        };
        move.id = secondID;
    } else {
        elem.parentNode.insertBefore(move, elem);

        for (var _i = +firstID - 1; _i !== +secondID - 1; _i--) {
            var _elem2 = document.getElementById(_i);
            _elem2.id = _i + 1;
        };
        move.id = secondID;
    }
};