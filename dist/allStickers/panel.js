'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = panel;
function panel() {
    var panelContents = '\n    <div id="panel" class="panel">\n        <div id="example" class="symbol" style="border: 2px solid green; \n        padding: 2px; margin-right:4px;" title="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440\u044B">\n        <img src="img/example_32.png"></div>\n\n        <div id="plus" class="symbol" title="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0438\u043A\u0435\u0440">\n        <img src="img/plus_32.png"></div>\n\n        <div id="saving" class="symbol" title="\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0441\u0451">\n        <img src="img/save_32.png"></div>    \n\n        <!--\n        <div id="toServer" class="symbol" title="\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440">\n        <img src="img/toServer_32.png"></div>    \n        -->\n         \n        <div id="cleaning" class="symbol" title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0451">\n        <img src="img/clear_32.png"></div>\n    </div>';

    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);
};