'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeMapSticker;

var _out = require('../out');

var _out2 = _interopRequireDefault(_out);

var _currentId = require('./currentId');

var _currentId2 = _interopRequireDefault(_currentId);

var _makeDOMElement = require('./makeDOMElement');

var _makeDOMElement2 = _interopRequireDefault(_makeDOMElement);

var _editMapSticker = require('./editMapSticker');

var _editMapSticker2 = _interopRequireDefault(_editMapSticker);

var _addMiniSigns = require('./addMiniSigns');

var _addMiniSigns2 = _interopRequireDefault(_addMiniSigns);

var _yaMap = require('../transmission/yaMap');

var _yaMap2 = _interopRequireDefault(_yaMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mouseOverOut from '../allStickers/mouseOverOut';

function makeMapSticker(head, body, className, adress) {
    var id = (0, _currentId2.default)();
    if (!head) {
        head = "Новый стикер";
    }
    if (!body) {
        body = "";
    }

    if (!className) {
        className = 'editMapSticker';
    }

    var area = document.getElementById('stickyNotes');
    var wrap = (0, _makeDOMElement2.default)('div', className, '', id);
    var fragment = document.createDocumentFragment();

    fragment.appendChild((0, _addMiniSigns2.default)(id));
    fragment.appendChild((0, _makeDOMElement2.default)('h1', '', head)); // adding headline
    fragment.appendChild((0, _makeDOMElement2.default)('span', 'adress', '\u0410\u0434\u0440\u0435\u0441: ' + adress));
    fragment.appendChild((0, _makeDOMElement2.default)('p', '', body));
    fragment.appendChild((0, _makeDOMElement2.default)('div', 'editMap', '', 'map'));
    wrap.appendChild(fragment);

    area.appendChild(wrap);

    document.getElementById(id).setAttribute('data-action', 'sticker');

    if (className === "editMapSticker") {
        (0, _editMapSticker2.default)(id);
    } else {} //yaMap(adress, id); 


    // mouseOverOut(id);
};