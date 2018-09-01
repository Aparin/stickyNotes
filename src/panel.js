import { makeSticker } from './makeSticker';
import { save } from './save';
import clear from './clear';
import mouseOverOut from './mouseOverOut'

var id = localStorage.getItem('id');

if (!id) { id = 0; }

// out(`id = ${id}`);

function panel() {
    let panelContents = `
    <div id="panel" class="panel">
        <div id="plus" class="symbol" title="Добавить стикер"><img src="img/plus_32.png"></div>
        <div id="save" class="symbol" title="Сохранить всё"><img src="img/save_32.png"></div>       
        <div id="clear" class="symbol" title="Удалить всё"><img src="img/clear_32.png"></div>
    </div>`;

    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);

    // clicked on 'plus' 
    document.getElementById('plus').addEventListener('click', function() {
        id++;
        makeSticker(id);
    });
    mouseOverOut('plus');

    // cliked on 'save'
    document.getElementById('save').addEventListener('click', function() {
        save();
    });
    mouseOverOut('save');

    // cliked on 'clear'
    document.getElementById('clear').addEventListener('click', function() {
        clear();
    });
    mouseOverOut('clear');

};

export { panel };