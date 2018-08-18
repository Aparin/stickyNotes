'use strict';

var _makeSticker = require('./makeSticker');

var out = function out(data) {
    document.writeln(data, '<br />');
};

(0, _makeSticker.makeSticker)({ id: 15, head: 'Super HeadLine', body: 'Some very intresting or important text' }).show();
//makeSticker();
(0, _makeSticker.makeSticker)({ id: 2 }).show(150, 150);