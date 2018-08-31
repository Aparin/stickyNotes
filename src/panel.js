import { makeSticker } from './makeSticker';
import editSticker from './editSticker';
import out from './out';
import { sort } from './sort';
import { save } from './save';

var id = localStorage.getItem('id');

if (!id) { id = 0; }

// out(`id = ${id}`);

function panel() {
    let panelContents = `
    <div id="panel" class="panel">
        <div id="plus" class="symbol" title="Добавить стикер">+</div>
        <!--
        <div id="sort" class="symbol" style="font-size: 44px;" title="Упорядочить">≚</div>
        -->
        <div id="save" class="symbol" style="font-size: 35px;" title="Сохранить всё">💾</div>
    </div>`;

    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);

    // clicked on 'plus' 
    document.getElementById('plus').addEventListener('click', function() {
        out('clicked on plus');
        id++;
        makeSticker(id);
    });

    /*
    // cliked on 'sort'
    document.getElementById('sort').addEventListener('click', function() {
        sort();
    });
    */

    // cliked on 'save'
    document.getElementById('save').addEventListener('click', function() {
        save();
    });

};

export { panel };