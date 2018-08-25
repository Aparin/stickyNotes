import { makeSticker } from './makeSticker';
import editSticker from './editSticker';
import { out } from './out';
let id = 0;

function panel() {
    document.write(`
        <div id="panel" class="panel">
            <div id="plus" class="symbol" title="Добавить стикер">+</div>
            <div id="sort" class="symbol" style="font-size: 44px;" title="Упорядочить">≚</div>
        </div>`);

    const plus = document.getElementById('plus');
    plus.addEventListener('click', function() {
        // out('click plus');
        id++;
        makeSticker({ id }).show(0, 200);
        editSticker(id);

    });


};

export { panel };