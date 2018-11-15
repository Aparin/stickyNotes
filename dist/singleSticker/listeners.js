'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = listeners;

var _example = require('../transmission/example');

var _example2 = _interopRequireDefault(_example);

var _makeSticker = require('./makeSticker');

var _makeSticker2 = _interopRequireDefault(_makeSticker);

var _save = require('../transmission/save');

var _save2 = _interopRequireDefault(_save);

var _deleteSticker = require('./deleteSticker');

var _deleteSticker2 = _interopRequireDefault(_deleteSticker);

var _clear = require('../allStickers/clear');

var _clear2 = _interopRequireDefault(_clear);

var _toServer = require('../transmission/toServer');

var _toServer2 = _interopRequireDefault(_toServer);

var _moveTheSticker = require('./moveTheSticker');

var _moveTheSticker2 = _interopRequireDefault(_moveTheSticker);

var _editSticker = require('./editSticker');

var _editSticker2 = _interopRequireDefault(_editSticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import out from '../out';

function listeners() {
    example.onclick = function () {
        (0, _example2.default)();
    };
    plus.onclick = function () {
        (0, _makeSticker2.default)();
    };
    saving.onclick = function () {
        (0, _save2.default)();
    };
    cleaning.onclick = function () {
        (0, _clear2.default)();
    };
    // toServer.onclick = function() { saveToServer(); }

    var field = document.getElementById('stickyNotes');

    field.onclick = function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action == 'delete') {
            (0, _deleteSticker2.default)(target.parentNode.id);
        }
        if (action == 'edit') {
            (0, _editSticker2.default)(target.parentNode.id);
        }
    };

    field.addEventListener('mousedown', function (e) {
        var target = e.target;
        while (target != document) {
            var dataAction = target.getAttribute('data-action');
            var style = target.getAttribute('class');
            if (dataAction == 'edit' || dataAction == 'delete' || dataAction == 'ok' || dataAction == 'close') {
                return;
            }
            if (dataAction == 'sticker' && style != 'editSticker' && style != 'editMapSticker') {
                if (event.which == 1) (0, _moveTheSticker2.default)(target.id);
                return;
            }
            target = target.parentNode;
        }
    });
}