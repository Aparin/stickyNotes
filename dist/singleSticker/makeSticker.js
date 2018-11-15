'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeSticker;

var _currentId = require('./currentId');

var _currentId2 = _interopRequireDefault(_currentId);

var _makeDOMElement = require('./makeDOMElement');

var _makeDOMElement2 = _interopRequireDefault(_makeDOMElement);

var _editSticker = require('./editSticker');

var _editSticker2 = _interopRequireDefault(_editSticker);

var _addMiniSigns = require('./addMiniSigns');

var _addMiniSigns2 = _interopRequireDefault(_addMiniSigns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mouseOverOut from '../allStickers/mouseOverOut';

//import out from '../out';

function makeSticker(head, body, className) {
    var id = (0, _currentId2.default)();
    if (!head) {
        head = "Новый стикер";
    }
    if (!body) {
        body = "";
    }
    if (!className) {
        className = 'editSticker';
    }

    var area = document.getElementById('stickyNotes');
    var wrap = (0, _makeDOMElement2.default)('div', className, '', id);
    var fragment = document.createDocumentFragment();

    fragment.appendChild((0, _addMiniSigns2.default)(id));
    fragment.appendChild((0, _makeDOMElement2.default)('h1', '', head)); // adding headline
    fragment.appendChild((0, _makeDOMElement2.default)('p', '', body));
    wrap.appendChild(fragment);

    area.appendChild(wrap);

    document.getElementById(id).setAttribute('data-action', 'sticker');

    if (className === "editSticker") {
        (0, _editSticker2.default)(id);
    }

    // mouseOverOut(id);
};