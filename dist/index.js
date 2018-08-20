'use strict';

var _makeSticker = require('./makeSticker');

var out = function out(data) {
    document.writeln(data, '<br />');
};

out('worked');
(0, _makeSticker.makeSticker)({ id: 15, head: 'Super HeadLine', body: 'Some very intresting or important text' }).show(0, 200);
//makeSticker({});
(0, _makeSticker.makeSticker)({ id: 2 }).show(100, 150);

var place2 = document.getElementById('stickyNotes');
var func = function func() {
    place2.innerHTML = 'pushed';
};
place2.addEventListener("click", func);