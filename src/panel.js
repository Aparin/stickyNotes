import { makeSticker } from './makeSticker';
import editSticker from './editSticker';
import { out } from './out';
import { sort } from './sort';
let id = 0;

function panel() {
    document.getElementById('stickyNotes').innerHTML = (`
        <div id="panel" class="panel">
            <div id="plus" class="symbol" title="Добавить стикер">+</div>
            <div id="sort" class="symbol" style="font-size: 44px;" title="Упорядочить">≚</div>
        </div>`);

    // clicked on 'plus' 
    document.getElementById('plus').addEventListener('click', function() {
        id++;
        makeSticker({ id }).show(0, 200);
        editSticker(id);
    });

    // cliked on 'sort'
    document.getElementById('sort').addEventListener('click', function() {
        sort();
    });


};

export { panel };