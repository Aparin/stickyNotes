'use strict';

var _makeSticker = require('./makeSticker');

var out = function out(data) {
    document.writeln(data, '<br />');
};

out((0, _makeSticker.makeSticker)(15, 'newClass', 'Super HeadLine', 'Some very intresting or important text'));
out('test!!');